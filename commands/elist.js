  exports.run = (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
  client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande elist du serveur" + message.guild.name)
}
