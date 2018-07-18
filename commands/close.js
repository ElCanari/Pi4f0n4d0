module.exports.run = (client, message, args) => {
const config = require("../config.json");

    if(message.author.id !== "295908783081914378" || message.author.id !== "295908783081914378") return message.channel.send("tu n'es pas l'un de mes developpeurs.")
  
message.channel.send("bot down")
process.exit(1);
client.destroy();
client.login(process.env.Discord_token);
}

module.exports.help = {
    name:"close"
}
