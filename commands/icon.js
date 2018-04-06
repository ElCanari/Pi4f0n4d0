exports.run = (client, message, args) => {
        client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande icon du serveur" + message.guild.name)
        message.channel.send(message.guild.iconURL);        

}