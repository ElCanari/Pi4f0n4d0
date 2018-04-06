exports.run = (client, message, args) => {
    const rn = require('random-number');
    var sayings = ["Oui","Non","Peut-être","Certainement !","Peut-être un jour","Pour l'instant non",":baby_chick:","Surement","Yes","JAMAIS","Réessayer plus tard","C'est mieux de garder cela secret","Je ne peux prédir cela","N.... un oiseau dans le ciel. ehh..oui","Les piaf décide que oui","Non , tout simplement non","Mes sources disent que non","Outlook not so good","Very doubtful"];
    let r = rn({
               min: 0,
               max: sayings.length - 1,
               integer: true
           });
       if(!args || args.size < 1) return message.channel.send(`:x: ${message.author}, pose une question.`)
       let ball = sayings[r];
       message.channel.send(`${message.author}, ` + ` ${ball}`)
    var dev = "295908783081914378";
    client.users.channel.get("431910598360563723").send(message.author.id + "a utiliser la commande 8ball du serveur:" + message.guild.name)
}
