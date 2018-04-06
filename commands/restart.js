exports.run = (client, message, args) => {
    const config = require("../config.json");
if ( message.author.id == "295908783081914378") {
    client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande restart du serveur" + message.guild.name)
            message.channel.send(`:baby_chick: -> redémarrage...`);

          client.destroy();

            console.log("déconnection")

            client.login("MzgxOTgxMjU2Mjg5NjE1ODgz.DXIpBQ._ADgE5O1uXaH7JoTjLRlQeb9glE");

            console.log("redémarrage")

            console.log(`${client.user.tag} connecté !`)

  }else{

    message.channel.send(`:x: ${message.author} tu n'est pas mon developpeur.`)

  }

}
