module.exports.run = async (client, message, args) => {
    if(message.guild.id === process.env.rgk){
      if(message.member.hasPermission("MANAGE_MESSAGES")){
      if(!args){
      message.channel.send(":x: écris quelque chose d'important à annoncer")
      return;
      }
        if(message.guild.roles.find("name", args[0])){
        message.guild.members.filter(message.guild.roles.find("name", args[0])).map(c => c.send(`${message.content.substr(args[0].length + 1)} de ${message.author}`))
        message.channel.send(":baby_chick: annonce envoyée !")
        }else{
        message.guild.members.map(c => c.send(`${message.content.substr(10)} de ${message.author}`))
        message.channel.send(":baby_chick: annonce envoyée !")
        }  
      }
      }else{
      message.channel.send(":x: Tu n'as pas la permission.")
      }
    }
  
  module.exports.help = {
        name:"annonce"
  }
  
