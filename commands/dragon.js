exports.run = (client, message, args) => {
    message.channel.send("Dragon ? :dragon: <<<<<< all").catch(console.error);
    message.react(":PandaDevil:385523844208656394");
    client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande dragon du serveur" + message.guild.name)
}
