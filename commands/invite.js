exports.run = (client, message, args) => {
const config = require("../config.json");
client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande invite du serveur" + message.guild.name)
  
message.channel.send(`<:gwen:372168110251180042> <:gwen:372168110251180042> https://discordapp.com/oauth2/authorize?client_id=431872024730796032&scope=bot&permissions=-1`)

}
