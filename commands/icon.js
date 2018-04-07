exports.run = (client, message, args) => {
        client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande icon du serveur" + message.guild.name)
        message.channel.send(message.guild.iconURL);        

}