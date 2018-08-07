module.exports.run = async (client, message, args) => {
    if(!args[0]){
        message.channel.send("choisi un nombre de répétitions");
        return;
    }
    if(args = 0 || args > 100){
        message.channel.send("choisi un nombre entre 1 et 100")   
    }
    if(!args[1]){
    message.channel.send("Spécifier le texte à répéter.")   
    }
    for(var i = 0; i < args[0]; i++){
        message.channel.send(message.content.substr(9 + args[0].length))
    }
    message.channel.send(":white_check_mark: répétitions en cour...")
}
module.exports.help = {
    name: "repeat"
  }
