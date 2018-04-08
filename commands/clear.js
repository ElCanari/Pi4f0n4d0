   exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande clear du serveur" + message.guild.name)
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
           let argsNB = message.content.split(" ").slice(1);
          if (argsNB <1 && argsNB >99)
		  {	message.channel.send("désoler mais que des chiffres entre 1 et 100 sont accepter :/");
        }
		console.log(argsNB);
		let argsnb2 = Math.floor(1 + Math.sqrt(argsNB));
		message.channel.bulkDelete(argsnb2);

		message.channel.send("" + argsNB + " messages suprimer")
		   setTimeout(Timer, 2000);
	function Timer() {
  message.channel.send("<:cathype2:430489576490926081>")
  message.channel.bulkDelete(2);
  console.log(`DONE ! `);
}
   }

   else if (!message.member.hasPermission("MANAGE_MESSAGES"))
   {   message.channel.send("désoler mais tu ne dispose pas des permissions nécéssaire pour clear des messages")
   }

   }



