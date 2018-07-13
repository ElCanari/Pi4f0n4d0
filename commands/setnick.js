module.exports.run = async (client, message, args) => {
     let user_setnick = message.mentions.users.first();
    if(!message.member.hasPermission("MANAGE_NICKNAMES")){
        message.channel.send(`:baby_chick: ${message.author} tu n'as pas la permission de gérer les pseudo"`)
        return;
    }else{
    if(!user_setnick){
        message.channel.send(`:bird: Veuillez mentionner un utilisateur`)
        return;
    }else{
       message.guild.members.get(user_setnick.id).setNickname(message.content.substr(32))
        message.channel.send(`:baby_chick: pseudo changé ! nouveau pseudo: ${message.content.substr(32)}`)
        }
    }
}

module.exports.help = {
    name: "setnick"
  }
