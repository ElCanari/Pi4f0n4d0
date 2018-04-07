exports.run = (client, message, args) => {
    let name = args[0];
    client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande crole du serveur" + message.guild.name)
    let reason = args.slice(1).join(" ");
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS") && client.user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
    else
    {
    
          message.channel.send("Succesfull")
          message.guild.createRole({ name: name}, reason);
    }
    }