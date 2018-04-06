exports.run = (client, message, args) => {
    client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande rcolor du serveur" + message.guild.name)
    let reason = args[0]
    let color = args[1]
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS") && client.user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
    else
    {
        let role2 = message.guild.roles.find("name", reason);
          message.channel.send("Succesfull")
          role2.setColor(color)
  .then(r => console.log(`Set color of role ${r}`))
  .catch(console.error);
    }
    }
   