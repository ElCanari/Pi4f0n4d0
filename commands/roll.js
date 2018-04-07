exports.run = (client, message, args) => {
 // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
 // To get the "message" itself we join the `args` back into a string with spaces: 
    let love = args[1]
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande roll du serveur" + message.guild.name)
    var un = [
        "1",
    "2",
    "3",
    "4",
    "5",
    "6",

    ]
 
  
        var pkp = un[Math.floor(Math.random()*un.length)];
        message.channel.send(pkp)

    
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.

    // And we get the bot to say the thing: 
    
    
}