
  exports.run = (client, message, args) => {
    client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande rmention du serveur" + message.guild.name)
    let reason = args[0]
    let color = args[1]
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS") && client.user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
   if(color == "true")
    {
        let role2 = message.guild.roles.find("name", reason);
          message.channel.send("Succesfull")
          role.setMentionable(true)
          .then(r => console.log(`Role updated ${r}`))
          .catch(console.error);
        
    }
    if(color == "false")
    {
        let role2 = message.guild.roles.find("name", reason);
          message.channel.send("Succesfull")
          role2.setMentionable(false)
          .then(r => console.log(`Role updated ${r}`))
          .catch(console.error);
          console.log(role2.serialize());
    }
    if(!color)
    {
        message.channel.send("Veuillez spécifier true ou false")
    }
}