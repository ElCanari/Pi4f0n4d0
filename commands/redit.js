module.exports.run = async (client, message, args) => {

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
          role2.edit({ name: color }, 'reason')
  .then(r => console.log(`Set color of role ${r}`))
  .catch(console.error);
    }
}

module.exports.help = {
    name:"redit"
}
