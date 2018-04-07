exports.run = (client, message, args) => {
    message.channel.send("Dragon ? :dragon: <<<<<< all").catch(console.error);
    message.react(":PandaDevil:385523844208656394");
    client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande dragon du serveur" + message.guild.name)
}
