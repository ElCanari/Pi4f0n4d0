module.exports.run = async (client, message, args) => {
    if(!args[0]){
        message.channel.send("choisi un nombre de répétitions");
        return;
    }
    if(args = 0 || args > 99){
        message.channel.send("choisi un nombre entre 1 et 99")   
    }
    if(!message.content.substr(11)){
        message.channel.send("Spécifier le texte à répéter.")   
    }
    if(args > 9){
    for(var i = 0; i < args[0]; i++){
        message.channel.send(message.content.substr(12))
    }
    }
    if(args < 10){
    for(var i = 0; i < args[0]; i++){
        message.channel.send(message.content.substr(11))
    }
    }
    message.channel.send(":white_check_mark: répétitions en cour...")
}
module.exports.help = {
    name: "repeat"
  }
