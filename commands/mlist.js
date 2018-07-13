module.exports.run = async (client, message, args) => {
const mlist = message.guild.members.map(g => g.user.username)
    message.channel.send(mlist).catch(console.error);
}

module.exports.help = {
    name:"mlist"
}
