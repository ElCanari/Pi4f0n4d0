exports.run = (client, message, args) => {
let test123 =  message.mentions.members.first();
client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande kick du serveur" + message.guild.name)
let reason = args.slice(1).join(" ");
if(message.member.hasPermission("BAN_MEMBERS"))
{
message.channel.send("Tu a réussi a kick " + test123)
test123.kick(reason)
}
else
{
message.channel.send("Assurez vous d'avoir les permissions suffisant ou que j'ai les permissions sufisante pour bannir")

}
}
