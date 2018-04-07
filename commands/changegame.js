exports.run = (client, message, args) => {
const config = require("../config.json");
client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande changegame du serveur" + message.guild.name)
const ped = args.join(" ");
    if(message.author.id !== "295908783081914378" && message.author.id !== "317221808405348364" ) return;
  
message.channel.send(":white_check_mark: ")
client.user.setActivity(ped)
}