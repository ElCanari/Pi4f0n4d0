module.exports.run = async (client, message, args) => {
  let memberMute = message.mentions.members.first();
   let role = message.guild.roles.find("name", "Mute");
   if (message.member.hasPermission("MANAGE_MESSAGES"))
   {
	  memberMute.removeRole(role).catch(console.error); 
	  message.channel.send("**" + memberMute.tag + "** a été unmute");
   }   
   else 
   {
	   message.channel.send("Assurez que cette personne est le role `mute` ou d'avoir la permissions pour suprimer les messages ")
	   
   }

   }
module.exports.help = {
	name:"unmute"
}
