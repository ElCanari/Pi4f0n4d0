exports.run = (client, message, args) =>{
  if(message.author.id !== "306119836503900161" || message.author.id !== "295908783081914378"){
      message.reply("T'es pas mon maître.")
      return;
    }else{
      message.reply("Coucou mon petit maître :blush:");
    }
    }
}
