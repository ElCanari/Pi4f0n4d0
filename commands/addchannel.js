 exports.run = (client, message, args) => {
    let name = args[0];
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande addchannel du serveur: " + message.guild.name)
    let reason = args.slice(1).join(" ");
    if(!message.member.hasPermission("MANAGE_CHANNELS") && client.user.hasPermission("MANAGE_CHANNELS"))
    {
    message.channel.send("Assurez d'avoir les permissions suffisante ou que le bot est les permissions suffisante")
    }
    else
    {
    if(!args || args.length < 1)
    {
     message.channel.send("veuillez entrer le nom du channel que vous voulez créer")   
    }
    else
    {
    
          message.channel.send("Succesfull")
          message.guild.createChannel(name, 'text')
  .then(channel => console.log(`Created new channel ${channel}`))
  .catch(console.error);
    }
  
    }
  }
