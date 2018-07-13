
module.exports.run = async (client, message, args) => {
  client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande rlist du serveur" + message.guild.name)
//let rlist = message.guild.roles.map(r => r.name).join("\n")
let rlist = message.guild.roles.map(r => `${r.name}`).join("`\n`")
    message.channel.send("`" + rlist + "`" ).catch(console.error);
  /*  const embed = new Discord.RichEmbed()
    .setTitle("Role du serveur : " + message.guild.name)
   // .setAuthor(message.author.username, message.author.avatarURL)
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
   // .setColor(0x00AF80)
   // .setDescription("")
   // .setFooter("🐤", client.user.avatarURL)
    //.setImage(message.author.avatarURL)
   // .setThumbnail(message.guild.iconURL)
    /*
     * Takes a Date object, defaults to current date.
     */
   // .setTimestamp()
   // .setURL(message.author.avatarURL)
   // .addField("Role :",
  //    rlist);
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
   // .addField("Id", message.author.id, true)
    /*
     * Blank field, useful to create some space.
     */
   // .addBlankField(true)
  //  .addField("Dernier message : ", message.author.lastMessage)
    //.addField("tag", message.author.discriminator)
    //.addField("Bot ?", message.author.bot)
    //.addField("Status :" , message.author.bot)
   // message.channel.send({embed}); */
}

module.exports.help = {
  name:"rlist"
}
