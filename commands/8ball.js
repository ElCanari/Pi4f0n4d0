exports.run = (client, message, args) => {
    const rn = require('random-number');
    let question = args[0]
    var sayings = ["Oui","Non","Peut-être","Certainement !","Peut-être un jour","Pour l'instant non",":baby_chick:","Surement","Yes","JAMAIS","Réessayer plus tard","C'est mieux de garder cela secret","Je ne peux prédir cela","N.... un oiseau dans le ciel. ehh..oui","Les piaf décide que oui","Non , tout simplement non","Mes sources disent que non","Outlook not so good","Very doubtful"];
    let r = rn({
               min: 0,
               max: sayings.length - 1,
               integer: true
           });
       if(!question) 
       {message.channel.send(`:x: ${message.author}, pose une question.`);return;}
       let ball = sayings[r];
       message.channel.send(`${message.author}, ` + ` ${ball}`)
    var dev = "295908783081914378";
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande 8ball du serveur: " + message.guild.name)
}
