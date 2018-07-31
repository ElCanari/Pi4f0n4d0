module.exports.run = async (client, message, args) => {
  if(message.guild.id === process.env.rgk){
    if(message.member.hasPermission("MANAGE_MESSAGES")){
    if(!args){
    message.channel.send(":x: écris quelque chose d'important à annoncer")
    }
    message.guild.members.map(c => c.send(`${message.content.substr(10)} de ${message.author}`))
    message.channel.send(":baby_chick: annonce envoyée !")
    }else{
    message.channel.send(":x: Tu n'as pas la permission.")
    }
    }else{
    return;
    }
}

module.exports.help = {
      name:"annonce"
}
