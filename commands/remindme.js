module.exports.run = (client, message, args) => {
	//let personne = message.content.split(" ").slice(1);
   //let role = message.content.split(" " + personne + " ").slice(1);
	let quoi = args[0]; // Remember arrays are 0-based!.
	let temp = args[1];
	let temps = args[2];
       
	if (temps == "min"){
let min = Math.floor(60000 * Math.sqrt(temp));
   setTimeout(Timer, min);
	 message.channel.sendMessage("Vous allez être rapeller dans "+ temp + " minutes pour " + quoi);
	function Timer() {
		
 message.author.sendMessage(quoi)
  console.log(`DONE ! `);
}
	}
		if (temps == "h"){
let hr = Math.floor(600000 * Math.sqrt(temp));
   setTimeout(Timer, hr);
	 message.channel.sendMessage("Vous allez être rapeller dans "+ temp + " heures pour " + quoi);
	function Timer() {
		
 message.author.sendMessage(quoi)
  console.log(`DONE ! `);
		}
	}
}
   
module.exports.help = {
	name:"remindme" && "rmd"
}
