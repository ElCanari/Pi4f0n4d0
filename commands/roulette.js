module.exports.run = async (client, message, args) =>{
    if(args ==="")return message.channel.send(":x: Tu n'as rien écrit")
    message.channel.send(`🏆 Le vainqueur de **${message.content.substr(11)}** est ${message.guild.members.random().user.tag}`)
}

module.exports.help = {
     name:"roulette"
}
