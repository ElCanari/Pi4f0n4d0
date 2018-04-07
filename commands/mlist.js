
exports.run = (client, message, args) => {
const mlist = message.guild.members.map(g => g.user.username)
client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande mlist du serveur" + message.guild.name)
    message.channel.send(mlist).catch(console.error);
}
