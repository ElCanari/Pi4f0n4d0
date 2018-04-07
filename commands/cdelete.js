
  exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande cdelete du serveur" + message.guild.name)
    let name = args[0];
    if(!message.member.hasPermission("MANAGE_CHANNELS") && client.user.hasPermission("MANAGE_CHANNELS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
   else
    {
        
        message.channel.send("Succesfull")
        name.delete()
        .then(console.log)
        .catch(console.error);
        }
}