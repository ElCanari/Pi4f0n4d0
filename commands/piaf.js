module.exports.run = async (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande piaf du serveur" + message.guild.name)
  message.channel.send(":baby_chick: > all", {
    file: "https://t2.ea.ltmcdn.com/fr/images/5/9/5/img_les_soins_du_canari_595_600.jpg" // Or replace with FileOptions object

  });
  }

module.exports.help = {
   name:"piaf"
}
