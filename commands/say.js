module.exports.run = async (client, message, args) => {
    const sayMessage = message.content.substr(4);
  if(message.author.id !== "306119836503900161" && message.author.id !== "295908783081914378"){
   message.channel.send("t'es qui pour me dire quoi dire? xD")
    return;
  }else{
    if(message.author.id === "310474739766394882" || message.author.id == "295908783081914378"){
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }else{
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
  }
}

module.exports.help = {
  name: "say"
}
