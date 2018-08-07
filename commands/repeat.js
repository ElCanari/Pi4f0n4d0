module.exports.run = async (client, message, args) => {
    if(!args[0]){
        message.channel.send("un texte à répéter");
        return;
    }
    message.channel.send(":white_check_mark: répétitions en cour...")
    for(var i = 0; i < 25; i++){
        message.channel.send(message.content.substr(9));
    }
    message.channel.send("fin de répétition")
}
module.exports.help = {
    name: "repeat"
  }
