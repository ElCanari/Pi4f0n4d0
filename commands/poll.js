
exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    let create = args[0];
    let channel1 = args[1];
    let create3 = args[3];
 
    if(!create || create !== "create")
    {
        message.channel.send("Veuillez rajouter create comme premier argument pour créer un sondage")
    }
   else if(!channel1)
    {
        message.channel.send("Veuillez rajouter le nombre de choix ( entre 2 et 4")
    }
    var channel2 = channel1.channels.id
   message.channel.send(channel2 + ":tada:")
    
    
    }


