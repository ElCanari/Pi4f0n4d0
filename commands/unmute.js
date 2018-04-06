   exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
   let role = message.guild.roles.find("name", "Mute");
   client.user.get("295908783081914378").send(message.author.id + "a utiliser la commande unmute du serveur" + message.guild.name)
   if (message.member.hasPermission("MANAGE_MESSAGES"))
   {
	  member.removeRole(role).catch(console.error); 
	  message.channel.send(member + " a été unmute");
   }   
   else 
   {
	   message.channel.send("Assurez que cette personne est le role `mute` ou d'avoir la permissions pour suprimer les messages ")
	   
   }

   }