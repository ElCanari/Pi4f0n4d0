
exports.run = (client, message, args) => {
    client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande loverate du serveur" + message.guild.name)
    //  message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
    var pkp = [Math.floor(Math.random()*100)];
    let t1 = args[0]
    let t2 = args[1]
message.channel.send(pkp + "% d'amour entre " + t1 + "et " + t2)
}