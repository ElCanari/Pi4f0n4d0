
exports.run = (client, message, args) => {
      client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande ping du serveur" + message.guild.name)
      //  message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
message.channel.send(client.ping+ "ms")
}