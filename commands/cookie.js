

exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande cookie du serveur" + message.guild.name)
 message.channel.send( member + " ** A reçu un cookie de ** " + message.author, {
    file: "http://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" // Or replace with FileOptions object
}).catch(console.error);

	
	}