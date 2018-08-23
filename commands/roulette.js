module.exports.run = async (client, message, args) => {
    if(! message.content.split(" ")[0]){
        message.channel.send(":x: Tu n'as rien écrit");
        return;
        }else{
    message.channel.send(`🏆 Le vainqueur de **${args.join(" ")}** est ${message.guild.members.random().user.tag}`)
}
}

module.exports.help = {
     name:"roulette"
}
