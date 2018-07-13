  module.exports.run = async (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  var test = message.guild.members.size
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
  .setURL(`https://discordapp.com/oauth2/authorize?client_id=381981256289615883&scope=bot&permissions=-1`)
  .addField("Créateur :", "El Piou Piou#8720 et Electrika#8754 ")
  .addField("Uptime", client.uptime )
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */

  /*
   * Blank field, useful to create some space.
   */
  //.addBlankField(true)
  .addField("Server :", client.guilds.size)
  .addField("Server officiel :", "https://discord.gg/QKV6ATx")
  .addField("User :", client.users.size)
  .addField("Channel:", client.channels.size, true);
  //.addField("Emoji", "Faite p!elist");
  message.channel.send({embed});
  }
  
  module.exports.help = {
    name:"info"
  }
