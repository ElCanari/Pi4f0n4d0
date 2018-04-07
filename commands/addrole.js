exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
     let rolef = args[1];
     client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande addrole du serveur: " + message.guild.name)
     if (!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS"))
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
     }
    
     }
     