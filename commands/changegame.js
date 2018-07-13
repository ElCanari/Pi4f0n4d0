module.exports.run = async (client, message, args) => {
const config = require("../config.json");

const ped = args.join(" ");
    if(message.author.id !== "295908783081914378" && message.author.id !== "317221808405348364" ) return;
  
message.channel.send(":white_check_mark: ")
client.user.setActivity(ped)
}

module.exports.help = {
    name:"changegame"
}
