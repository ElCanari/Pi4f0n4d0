   exports.run = (client, message, args) => {
	//let personne = message.content.split(" ").slice(1);
   //let role = message.content.split(" " + personne + " ").slice(1);
	let quoi = args[0]; // Remember arrays are 0-based!.
	let temp = args[1];
	let temps = args[2];
	client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande remindme du serveur" + message.guild.name)
       
	if (temps == "min")
	{
let min = Math.floor(60000 * Math.sqrt(temp));
   setTimeout(Timer, min);
	 message.channel.send("Vous allez être rapeller dans "+ temp + " minutes pour " + quoi);
	function Timer() {
		
 message.author.send(quoi)
  console.log(`DONE ! `);
}
	}
		if (temps == "h")
	{
let hr = Math.floor(600000 * Math.sqrt(temp));
   setTimeout(Timer, hr);
	 message.channel.send("Vous allez être rapeller dans "+ temp + " heures pour " + quoi);
	function Timer() {
		
 message.author.send(quoi)
  console.log(`DONE ! `);
}
	}

	
   }