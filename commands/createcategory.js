module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_CHANNELS")){
        message.channel.send(`:x: ${message.author} tu n'as pas la permission de gérer les salons`)
    }else{
      if(!args || args.length < 1){
         message.channel.send(`:x: ${message.author} Spécifiez le nom du channel.`)
         return;
    }else{
       message.guild.createChannel(message.content.substr(15), "text")
       message.channel.send(`:baby_chick: Categorie créé avec succès !`)
        }
      }
    }
    module.exports.help = {
      name: "createcategory"
    }
