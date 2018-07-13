module.exports.run = async (client, message, args) => {
    let ToColor = args[0]
    let color = args[1]
    if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS") && client.user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
    else
    {
        let role2 = message.guild.roles.find("name", ToColor);
          message.channel.send("Succesfull")
          role2.setColor(color)
  .then(r => console.log(`Set color of role ${r}`))
  .catch(console.error);
    }
    }

module.exprots.help = {
    name:"rcolor"
}
   
