exports.run = (client, message, args) => {
const config = require("../config.json");
client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande invite du serveur" + message.guild.name)
  
message.channel.send(`<:gwen:372168110251180042> <:gwen:372168110251180042> https://discordapp.com/oauth2/authorize?client_id=431872024730796032&scope=bot&permissions=-1`)

}
