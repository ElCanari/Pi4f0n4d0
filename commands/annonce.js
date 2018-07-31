module.exports.run = async (client, message, args) => {
    if(message.guild.id === process.env.rgk){
      if(message.member.hasPermission("MANAGE_MESSAGES")){
      if(!args){
      message.channel.send(":x: écris quelque chose d'important à annoncer")
      return;
      }
        message.guild.members.filter(m => m.roles.find("name", args.join(" "))).map(u => u.send(message.content.substr(message.guild.roles.find("name", args.join(" ")).length + 1)))
        message.channel.send(":baby_chick: annonce envoyée !")
      }
      }else{
      message.channel.send(":x: Tu n'as pas la permission.")
      }
    }
  
  module.exports.help = {
        name:"annonce"
  }
  
