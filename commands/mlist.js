
exports.run = (client, message, args) => {
const mlist = message.guild.members.map(g => g.user.username)
client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande mlist du serveur" + message.guild.name)
    message.channel.send(mlist).catch(console.error);
}
