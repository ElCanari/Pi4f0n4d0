module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} tu n'as pas la permission de gérer les salons`)
    }else{
      if(!args || args.length < 1){
         message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Spécifiez le nom du channel.`)
         return;
    }else{
       message.guild.createChannel(args[0], "text")
       message.channel.send(`:heavy_check_mark: Channel créé avec succès !`)
        }
      }
}

module.exports.help = {
    name: "createchannel"
  }