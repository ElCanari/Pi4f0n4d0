module.exports.run = async (client, message, args) => {
    if(message.guild.id === process.env.rgk){
      if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(":x: Tu n'as pas la permission.")
        return;
      }else{
      if(!args[0]) return message.channel.send(":x: écris quelque chose d'important à annoncer");
      message.guild.members.filter(m => m.roles.find("id", args[0])).map(u => u.send(message.content.substr(29)))
      message.channel.send(":baby_chick: annonce envoyée !")
        }
    }else{
    if(message.guild.id === "388391633298784276"){
      if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(":x: Tu n'as pas la permission.")
        return;
      }else{
      if(!args[0]) return message.channel.send(":x: écris quelque chose d'important à annoncer");
      message.guild.members.filter(m => m.roles.find("id", args[0])).map(u => u.send(message.content.substr(29)))
      message.channel.send(":baby_chick: annonce envoyée !")
        }
    }else{
      message.channel.send("Seul Ss army et rgk ont accès à la commande")
        return;
}
  
  module.exports.help = {
        name:"annonce"
  }
