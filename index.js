const config = require("./config.json");
const Discord = require("discord.js");
const path = require("path");
const fs = require("fs");
const prefix = config.prefix;
const prefix2 = ">";
let type = 1;
const client = new Discord.Client();
client.commands = new Discord.Collection();
//best handler ever
fs.readdir("./commands/", (err, files) => {
  
  if(err) console.log(err);

  let jsFile = files.filter(f => f.split(".").pop() === "js")

  if(jsFile.length <= 0 ){
     console.log("Coudln't find commands")
     return;
  }

  jsFile.forEach((f, i) =>{
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded !`)
    client.commands.set(props.help.name, props)
  })
})

//rainbow
const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {
    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);

    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}
//online

client.on('ready', ()=> {
    client.user.setPresence({game: {name: `${prefix}help | créé par El Piou Piou#8720 et ๖̶̶̶ۣۣۜۜ͜ζ͜͡ᾰк!кᾰϟῠ『💎』#8754`,url: "https://twitch.tv/pafad0gaming",type}})
    console.log(`${client.user.tag} connecté !`)
    if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
  setInterval(changeColor, config.speed);
console.log(client.guild.channels.map(c => c.id).join("\n"))
  
});

client.on('message', async  message =>{

  
 
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let argss = messageArray.slice(1);

  let commandFile = client.commands.get(cmd.slice(prefix.length));
  let commandFile2 = client.commands.get(cmd.slice(prefix2.length));
  if(commandFile) commandFile.run(client, message, args) && client.channels.get("431910598360563723").send(`${message.author.tag} a utilisé la commande ${commandFile} du serveur ${message.guild.name}`);
  if(commandFile2) commandFile.run(client, message, args) && client.channels.get("431910598360563723").send(`${message.author.tag} a utilisé la commande ${commandFile2} du serveur ${message.guild.name}`);
//blacklist du bot
    if(message.author.bot)return;
    if(message.author.id === '281774692052762627')return;
    if(message.author.id === '336560869708398594')return;
    //end
    if(message.content === "prefix"){
            message.channel.send(`:tada: mon prefix est ${prefix}`);
    }
  //double arguments du turfu
  if(!message.content.startsWith(prefix))return;
 
 //console.log(client.channels.map(c => c.id).join("\n"))


});
client.on("guildCreate",async guild => {
  // This event triggers when the bot joins a guild.
 client.channels.get("432273162210770948").send(`Nouveau serveur rejoin: ${guild.name} (id: ${guild.id}). La guilde a ${guild.memberCount} membres!`);
  //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete",async guild => {
  // this event triggers when the bot is removed from a guild.
  client.channels.get("432273162210770948").send(`J'ai quitter le serv: ${guild.name} (id: ${guild.id})`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
client.login(process.env.Discord_token || process.argv[2]);
