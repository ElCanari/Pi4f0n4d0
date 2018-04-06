exports.run = (client, message, args) => {
const config = require("../config.json");
client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande changegame du serveur" + message.guild.name)
const ped = args.join(" ");
    if(message.author.id !== "295908783081914378" && message.author.id !== "317221808405348364" ) return;
  
message.channel.send(":white_check_mark: ")
client.user.setActivity(ped)
}