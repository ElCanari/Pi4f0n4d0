
  exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande rdelete du serveur" + message.guild.name)
    let reason = args.slice(1).join(" ");
    let name = args[0];
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS") && client.user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
   else
    {
        let role2 = message.guild.roles.find("name", name);
        message.channel.send("Succesfull")
         role2.delete()
         .then(r => console.log(`Deleted role ${r}`))
         .catch(console.error);
        }
}