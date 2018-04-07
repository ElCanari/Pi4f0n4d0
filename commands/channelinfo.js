  exports.run = (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  var test = message.guild.members.size
  client.channels.get("431910598360563723").send(message.author.tag + "a utiliser la commande channelinfo du serveur" + message.guild.name)
  const Discord = require("discord.js");
//message.channel.send(message.guild.members.createdAt)
const embed = new Discord.RichEmbed()
  .setTitle("Information du channel :")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("")
  .setFooter("🐤", client.user.avatarURL)
  //.setImage(message.guild.iconURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(message.guild.iconURL)
  .addField("Channel créer le :",
    message.channel.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /*
   * Blank field, useful to create some space.
   */
  .addField("Id :", message.channel.id)
  .addField("Position: ", message.channel.calculatedPosition)
  .addField("Guild : ", message.channel.guild)
  .addField("Type : ", message.channel.type)
  .addField("Puis-je le suprimer ?: ", message.channel.deletable)
  .addField("Permissions :",message.channel.permissionOverwrites.name)
  .addField("Categorie :", message.channel.parent);
  message.channel.send({embed});

/*message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Server information",
    url: "",
    description: message.guild.name,
    fields: [{
        name: "**Id **",
        value: message.guild.id
      },
      {
        name: "Owner",
        value: message.guild.owner.user.username 
      },
      {
        name: "Membre",
        value: "Il y a " + test + " membres sur ce serv"
      },
      {
        name: "Emoji",
        value: "Pour la liste des emojis faite p!elist"
      },
      {
        name: "Icon",
        value: "Pour url de l'icon fait p!icon"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.guild.iconURL,
      text: "© Example"
    }
  }
});*/
}
