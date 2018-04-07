  exports.run = (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
  client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande elist du serveur" + message.guild.name)
}
