exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande avatar du serveur: " + message.guild.name)
let test123 =  message.mentions.members.first();
const Discord = require("discord.js");
if(!test123)
{
//message.reply("<:gwen:372168110251180042>" + message.author.avatarURL)
const embed = new Discord.RichEmbed()
.setTitle("")

/*
 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
 */
.setColor(0x00AE86)
.setDescription("")
.setFooter("🐤", client.user.avatarURL)
.setImage(message.author.avatarURL)
//.setThumbnail("https://media.discordapp.net/attachments/383588543211110401/416378283312021506/372168110251180042.png")
/*
 * Takes a Date object, defaults to current date.
 */
.setTimestamp()
.setURL(message.author.avatarURL)

message.channel.send({embed});

}
else
{
//message.reply("<:gwen:372168110251180042>" + test123.user.avatarURL)
const embed = new Discord.RichEmbed()
.setTitle("")

/*
 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
 */
.setColor(0x00AE86)
.setDescription("")
.setFooter("🐤", client.user.avatarURL)
.setImage(test123.user.avatarURL)
//.setThumbnail("https://media.discordapp.net/attachments/383588543211110401/416378283312021506/372168110251180042.png")
/*
 * Takes a Date object, defaults to current date.
 */
.setTimestamp()
.setURL(test123.user.avatarURL)
/*
 * Inline fields may not display as inline if the thumbnail and/or image is too big.
 */
/*
 * Blank field, useful to create some space.
 */
//.addBlankField(true)

message.channel.send({embed});

}
}