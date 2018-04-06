exports.run = (client, message, args) => {
const config = require("../config.json");
client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande close du serveur" + message.guild.name)
    if(message.author.id !== "295908783081914378" || message.author.id !== "295908783081914378") return message.channel.send("tu n'es pas l'un de mes developpeurs.")
  
message.channel.send("bot down")
process.exit(0);
}
