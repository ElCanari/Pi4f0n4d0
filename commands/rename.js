   exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  let role = args.slice(1).join(" ");
  client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande rename du serveur" + message.guild.name)
   if (message.member.hasPermission("MANAGE_NICKNAMES"))
   {
	message.guild.members.get(member.user.id).setNickname(role);
	message.channel.send(member + ` a été renommé pour ` + role)
   }   
   else 
   {
	   message.channel.send("Assurez vous que le bot est les permissions nécéssaire ou de mentionner un joueur correctement")
	   
   }

   }
