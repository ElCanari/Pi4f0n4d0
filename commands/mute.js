   exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande mute du serveur" + message.guild.name)
       let memberMute = message.mentions.users.first();
       let role = message.guild.roles.find("name", "Mute");
       let Targs = args[1];
       let Hargs = args[2];
       if (message.member.hasPermission("MANAGE_MESSAGES")){
       if(!memberMute){
         message.channel.send(":x: Mentionnez un utilisateur")
       }else{
       if (role){
       if (Hargs !== "min" && Hargs !== "h" && Hargs !== ""){
             message.channel.send(":x: Assurez vous de mettre min pour minute et h pour heure")
              }
       if (Hargs == "min"){
        let temps = Math.floor(60000 * Math.sqrt(Targs));
       setTimeout(Timer, temps);
        message.guild.member(memberMute).addRole(role).catch(console.error);
              message.channel.send(`**${memberMute.tag}** a été mute pour ${Targs} minutes`);
        function Timer() {
        message.guild.member(memberMute).removeRole(role).catch(console.error)
      console.log(`DONE ! `);
    }
        }
            if (temps == "h")
        {
        let hr = Math.floor(600000 * Math.sqrt(Targs));
       setTimeout(Timer, hr);
         message.channel.send(`**${memberMute.tag}** a été mute pour ${Targs} heures`);
        function Timer() {
    
     message.guild.member(memberMute).removeRole(role).catch(console.error)
      console.log(`DONE ! `);
    }
        }
         }else{
        message.guild.createRole({name: "Mute"}).then(r => { message.guild.channels.map(c => c.overwritePermissions(r.id, {
          "SEND_MESSAGES":false,
          "ADD_REACTIONS": false,
          "CONNECT": false
        }))
      })
           message.channel.send("Un rôle Mute a été créé pour vous je dois également avoir la permissions de gérer les messages")
       }
      }
    }
  }
