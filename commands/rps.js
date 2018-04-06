
exports.run = (client, message, args) => {
if(message.channel.nsfw == true)
{message.channel.send("1")}
else if(message.channel.nsfw == false){
  message.channel.send("2")
}
  }