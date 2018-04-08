exports.run = (client, message, args) => {
    const config = require("../config.json"); client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande restart du serveur" + message.guild.name)
if ( message.author.id == "295908783081914378") {
   
            message.channel.send(`:baby_chick: -> redémarrage...`);

          client.destroy();

            console.log("déconnection")

            client.login(:eyes:);

            console.log("redémarrage")

            console.log(`${client.user.tag} connecté !`)

  }else{

    message.channel.send(`:x: ${message.author} tu n'est pas mon developpeur.`)

  }

}
