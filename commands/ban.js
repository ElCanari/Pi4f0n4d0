exports.run = (client, message, args) => {
let test123 =  message.mentions.members.first();
client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande ban du serveur" + message.guild.name)
let reason = args.slice(1).join(" ");
if(message.member.hasPermission("BAN_MEMBERS"))
{
message.channel.send("Tu a réussi a bannir " + test123)
test123.ban(reason)
}
else
{
message.channel.send("Assurez vous d'avoir les permissions suffisant ou que j'ai les permissions sufisante pour bannir")

}
}