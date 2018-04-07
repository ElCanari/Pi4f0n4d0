exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande playerinfo du serveur" + message.guild.name)
let test111 =  message.mentions.members.first();

if(!test111)
if(!message.author.presence.game.name)
{const embed = new Discord.RichEmbed()
  .setTitle("Information du joueur :")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("<:gwen:372168110251180042> <:gwen:372168110251180042>")
  .setFooter("🐤", message.author.avatarURL)
  .setImage(message.author.avatarURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(message.author.avatarURL)
  .addField("Account créer le :",
    message.author.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Id", message.author.id, true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Dernier message : ", message.author.lastMessage)
  .addField("tag", message.author.discriminator)
  .addField("Bot ?", message.author.bot)
  .addField("Game:", "aucun")
  //.addField("Guild join at : ", message.author.guild.joinedAt)
  .addField("Role: ", message.member.roles.map(r => r.name))
  .addField("Status :" , message.author.presence.status);
  message.channel.send({embed});}
else
{const embed = new Discord.RichEmbed()
  .setTitle("Information du joueur :")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("<:gwen:372168110251180042> <:gwen:372168110251180042>")
  .setFooter("🐤", message.author.avatarURL)
  .setImage(message.author.avatarURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(message.author.avatarURL)
  .addField("Account créer le :",
    message.author.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Id", message.author.id, true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Dernier message : ", message.author.lastMessage)
  .addField("tag", message.author.discriminator)
  .addField("Bot ?", message.author.bot)
//.addField("Game:", message.author.presence.game.name)
  //.addField("Guild join at : ", message.author.guild.joinedAt)
  .addField("Role: ", message.member.roles.map(r => r.name))
  .addField("Status :" , message.author.presence.status);
  message.channel.send({embed});
}
else{
if(!test111.presence.game.name)
{
  const embed = new Discord.RichEmbed()
  .setTitle("Information du joueur :")
  .setAuthor(test111.user.username, test111.user.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("<:gwen:372168110251180042> <:gwen:372168110251180042>")
  .setFooter("🐤", client.user.avatarURL)
  .setImage(test111.user.avatarURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(test111.user.avatarURL)
  .addField("Account créer le :",
  test111.user.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Id", test111.user.id, true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Dernier message : ", test111.user.lastMessage)
  .addField("tag", test111.user.discriminator)
  .addField("Bot ?", test111.user.bot)
  //.addField("Role :", test111.member.roles.map(r => r.name))
  .addField("Game :", "aucun")
  .addField("Status :" , test111.user.presence.status);
  message.channel.send({embed});
}else
{
  const embed = new Discord.RichEmbed()
  .setTitle("Information du joueur :")
  .setAuthor(test111.user.username, test111.user.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("<:gwen:372168110251180042> <:gwen:372168110251180042>")
  .setFooter("🐤", client.user.avatarURL)
  .setImage(test111.user.avatarURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(test111.user.avatarURL)
  .addField("Account créer le :",
  test111.user.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Id", test111.user.id, true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Dernier message : ", test111.user.lastMessage)
  .addField("tag", test111.user.discriminator)
  .addField("Bot ?", test111.user.bot)
  //.addField("Role :", test111.member.roles.map(r => r.name))
  .addField("Game :", test111.user.presence.game.name)
  .addField("Status :" , test111.user.presence.status);
  message.channel.send({embed});
}
}
}