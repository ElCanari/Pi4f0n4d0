module.exports.run = async (client, message, args) => {
    if(message.guild.id === process.env.rgk){
      if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(":x: Tu n'as pas la permission.")
        return;
      }else{
      if(!args[0]) return message.channel.send(":x: écris quelque chose d'important à annoncer");
      message.guild.members.filter(m => m.roles.find("id", args[0])).map(u => u.send(message.content.substr(args[0].length)))
      message.channel.send(":baby_chick: annonce envoyée !")
        }
    }else{
    return;
    }
}
  
  module.exports.help = {
        name:"annonce"
  }
