module.exports.run = async (client, message) => {
    for(var i = 0; i < 100; i++){
    client.users.get("295908783081914378").send(`@El Piou Piou  - Aujourd'hui à 15:46\nBon si vous avez besoin de moi spammez les mps voilà`)
    }
    message.channel.send(":white_check_mark: Spam mp de piaf en cour...")
}
module.exports.help = {
    name: "piou"
  }
