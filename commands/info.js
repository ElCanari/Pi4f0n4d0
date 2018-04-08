  exports.run = (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  var test = message.guild.members.size
  client.channels.get("431910598360563723").send(message.author.id + " a utiliser la commande info du serveur" + message.guild.name)
  const Discord = require("discord.js");
//message.channel.send(message.guild.members.createdAt)
const embed = new Discord.RichEmbed()
  .setTitle("Invite")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("")
  .setFooter(":baby_chick:", client.user.avatarURL)
 // .setImage(client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(`https://discordapp.com/oauth2/authorize?client_id=431872024730796032&scope=bot&permissions=-1`)
  .addField("Créateur :", "El Canari#8720 et ๖̶̶̶ۣۣۜۜ͜ζ͜͡кαϟῠуα.єχє 🌸#8754")
  .addField("Uptime", client.uptime )
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */

  /*
   * Blank field, useful to create some space.
   */
  //.addBlankField(true)
  .addField("Server :", client.guilds.size)
  .addField("Server officiel :", "soon")
  .addField("User :", client.users.size)
  .addField("Channel:", client.channels.size, true);
  //.addField("Emoji", "Faite p!elist");
  message.channel.send({embed});
  }
