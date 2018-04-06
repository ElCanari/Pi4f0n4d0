  exports.run = (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  var test = message.guild.members.size
  client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande serveurinfo du serveur" + message.guild.name)
  const Discord = require("discord.js");
//message.channel.send(message.guild.members.createdAt)
const embed = new Discord.RichEmbed()
  .setTitle("Information du serveur :")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("")
  .setFooter(":baby_chick:", client.user.avatarURL)
  .setImage(message.guild.iconURL)
  .setThumbnail(message.guild.iconURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(message.guild.iconURL)
  .addField("Guild créer le :",
    message.guild.createdAt)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Owner", message.guild.owner.user.username, true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Membres", message.guild.members.size)
  .addField("Channel :", message.guild.channels.size)
  .addField("Role :", message.guild.roles.size)
  .addField("Role :", "faite p!rlist")
  .addField("Emoji", "Faite p!elist");
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
