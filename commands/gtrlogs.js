const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message) => {

    const logsurl = process.env.logs;
    request(logsurl, (err, res, body) => {

console.log('chargement !')

if(err || res.statusCode!== 200)return

console.log('chargé avec succés')
    let channel = JSON.parse(body);
if(message.member.hasPermission("ADMINISTRATOR")){
    if(!channel[message.guild.id]){
    if(!channel[message.guild.id]) channel[message.guild.id] = {};
    if(!channel[message.guild.id].boonlean) channel.boonlean = true;
    if(!channel[message.guild.id].logs) channel[message.guild.id].logs = message.channel.id;
    request({ url: logsurl, method: 'PUT', json: channel});
    message.channel.send(`logs dans le channel [${message.channel.id}] ajouté.`);
    }else{
     channel[message.guild.id].boonlean = false;
    request({ url: logsurl, method: 'PUT', json: channel});
    message.channel.send("logs désactivé !")
    }
}else{
    message.channel.send(":x: Tu n'as pas les permissions suffisantes.")
}
})
}

module.exports.help = {
    name:"gtrlogs"
}
