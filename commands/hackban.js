exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande hackban du serveur : "+ message.guild.name)
if (!args){
  message.channel.send(":x: Spécifiez une id à bannir.");
}else{
    message.guild.ban(args).then(() => {
        message.channel.send("l'utilisateur `"+args.tag+" a été ban.`")
    })
}
}
