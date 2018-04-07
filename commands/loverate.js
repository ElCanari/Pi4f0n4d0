
exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande loverate du serveur" + message.guild.name)
    //  message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
    var pkp = [Math.floor(Math.random()*100)];
    let t1 = args[0]
    let t2 = args[1]
message.channel.send(pkp + "% d'amour entre " + t1 + "et " + t2)
}