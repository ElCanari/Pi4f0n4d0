
exports.run = (client, message, args) => {
      client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande ping du serveur" + message.guild.name)
      //  message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
message.channel.send(client.ping+ "ms")
}