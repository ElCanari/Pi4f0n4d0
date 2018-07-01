exports.run = (client, message, args)  => {
        let raison = message.content.substr(27);
        let banMember = message.guild.member(message.mentions.users.first());
        if(!message.member.hasPermissions("BAN_MEMBERS")){
            message.channel.send(`:x: ${message.author} Tu n'as pas la permission de ban les membres.`)
            return;
        }else{
            if(!banMember){
                message.channel.send(`:x: ${message.author} veuillez mentionner un utilisateur.`)
                return;

          }else{
              if(!banMember.bannable){
                  message.channel.send(`:x: ${message.author} je peux pas kick cet utilisateur veuillez vérifier mes rôles et permissions.`)
                  return;
            }else{
                if(banMember.hasPermission("ADMINISTRATOR")){
                    message.channel.send(`:x: ${message.author} cet utilisateur est un admin, je peux pas faire ça.`)
                    return; 
                }else{
        message.delete(message.author);
        client.users.get(kickMember.id).send(`tu as été ban pour la raison: ${raison}`)
        message.guild.member(banMember).ban({reason: `${raison}`});
        message.channel.sendMessage(`**${banMember}** a été ban! raison:${raison}`);
                }
            }
          }
       }
    }
