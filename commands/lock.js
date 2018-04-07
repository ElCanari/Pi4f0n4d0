exports.run = (client, message) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
          return;
        }else{
        message.channel.overwritePermissions(message.guild.id,
                              {'SEND_MESSAGES': false
           })
           message.channel.send(":baby_chick: Channel bloqué fait 7unlock por le débloquer")
           }
     }
