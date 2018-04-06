exports.run = (client, message, args) => {
 // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    if(message.author.id !== "295908783081914378")return;
    client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande say du serveur" + message.guild.name)
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
    
}