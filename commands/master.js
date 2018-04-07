exports.run = (client, message, args) =>{
  client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande master du serveur : " + message.guild.name)
  if(message.author.id !== "306119836503900161" || message.author.id !== "295908783081914378"){
      message.reply("T'es pas mon maître.")
      return;
    }else{
      message.reply("Coucou mon petit maître :blush:");
    }
    }
}
