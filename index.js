const config = require("./config.json");
const Discord = require("discord.js");
const path = require("path");
const fs = require("fs");
const prefix = "p7";
const prefix2 = ">";
let type = 1;
const client = new Discord.Client();
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

client.on('message', message =>{

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const argss = message.content.slice(prefix2.length).trim().split(/ +/g);
  if(message.channel.id == "408405186302967808")
    {
      if(!message.author.bot)
      {
        if(message.content.startsWith(">struct invest"))
        {
          var member = message.author.username
          client.channels.get("420703531457052672").send(member + " a investi")
        }
      }
    if(message.author.bot)
    {
      if(message.author.id == "280726849842053120")
      {
        if(message.content.startsWith("Vous avez"))
        {
          let cb = argss[3]
          let quoi = argss[4]
          //client.channels.get("420703531457052672").send('hophop' + cb)
          client.channels.get("420703531457052672").send(cb + " de " +quoi)
        }
        else if(message.content.startsWith("Echec de"))
        {
          client.channels.get("420703531457052672").send("Annuler...")
          client.channels.get("420703531457052672").bulkDelete(2)
        }
      }
    }
  
   
  } 
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



  const command = args.shift().toLowerCase();
  if(message.content.startsWith("test"))
  {
    setInterval(tr(), 10000)
function tr()
{
  console.log(client.channels.map(c => c.id).join("\n")[Math.floor(Math.random()*client.channels.map(c => c.id).join("\n").length)]);
}}
  //commandes de type handler:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err){
  return;
  }
});
client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
 client.channels.get("432273162210770948").send(`Nouveau serveur rejoin: ${guild.name} (id: ${guild.id}). La guilde a ${guild.memberCount} membres!`);
  //client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  client.channels.get("432273162210770948").send(`J'ai quitter le serv: ${guild.name} (id: ${guild.id})`);
 // client.user.setActivity(`Serving ${client.guilds.size} servers`);
});
client.login(process.env.Discord_token || process.argv[2]);
