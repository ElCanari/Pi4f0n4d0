exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
     let rolef = args[1];
     client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande addrole du serveur: " + message.guild.name)
    /* if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
     {message.channel.send("Assurez vous d'avoir les bonnes permissions");return; 
    }
  
          if (!rolef)
          {
              message.channel.send("veuillez identifer un role valide")
              return;
          }
  
      else
     {
        let role2 = message.guild.roles.find("name", rolef);
  member.addRole(role2)
  message.channel.send(member + "a reçu le role" + "`" +role2 + "`")
     }*/
     let usermention = message.mentions.users.first();
     let toAdd = message.guild.roles.find("name", message.guild.roles.map(r => r.name))
     if(!usermention){
         message.channel.send(`<:PandaFear:385523841771896835> ${message.author}, mentionnez un utilisateur valide`)
     }
     if(!toAdd){
       message.channel.send(`<:PandaFear:385523841771896835> ${message.author} je ne trouve pas ce rôle`)
     }
     message.member.addRole(toAdd);
     message.channel.send(`<:PandaAngel:385523845651759104> j'ai ajouté le role ${toAdd} à ${usermention.tag}`)
 }
     
     