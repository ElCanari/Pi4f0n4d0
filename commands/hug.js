const bot = require("nekos.life")
module.exports.run = async (client, message, args) => {
const neko = new bot();
var usermention = message.mentions.users.first();
if(!usermention)return message.channel.send(":x: Il faut que tu mentionne un utilisateur.")
neko.getSFWHug().then((m) => message.channel.send({embed:{
    color: Math.floor(Math.random() * 16777214) + 1,
    title:`${usermention.username} tu as reçu un câlin de ${message.author.username}`,
    image:{
        url:m.url
    },
    timestamp:new Date(),
footer:{
    icon_url:message.author.avatarURL,
    text:"hug"
}
}}))
} 

module.exports.help = {
    name:"hug"
}