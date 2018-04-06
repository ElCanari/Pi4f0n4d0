

exports.run = (client, message, args) => {
  let member = message.mentions.members.first();
  client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande cookie du serveur" + message.guild.name)
 message.channel.send( member + " ** A reçu un cookie de ** " + message.author, {
    file: "http://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" // Or replace with FileOptions object
}).catch(console.error);

	
	}