module.exports.run = async (client, message, args) => {
        message.channel.send(message.guild.iconURL);        

}

module.exports.help = {
        name:"icon"
}
