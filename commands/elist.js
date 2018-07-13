module.exports.run = async (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
}

module.exports.help = {
  name:"elist"
}
