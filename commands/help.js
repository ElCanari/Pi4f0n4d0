exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    client.channel.get("431910598360563723").send(message.author.id + "a utiliser la commande help du serveur" + message.guild.name)
  let help = args[0];
if(!help)
  {const embed = new Discord.RichEmbed()
  .setTitle("Help")
  .setAuthor(message.author.username, message.author.avatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("p!help <nomdelacommande> pour plus d'info")
  .setFooter("🐤", client.user.avatarURL)

  .setThumbnail(`http://copinette.centerblog.net/voir-photo?u=http://copinette.c.o.pic.centerblog.net/o/30454771.gif`)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(client.user.avatarURL)
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /*
   * Blank field, useful to create some space.
   */
  //.addBlankField(true)

  //.addField("p!piafzani", "PIAFZANI POUR LA VIE")
 // .addBlankField(true)
  .addField("Commande autre", "`ping, invite, roll, 8ball`")
  .addField("Commande Dev :", "`eval, close , restart , reload`")  
  .addField("Commande Perso :", "`piaf, dragon, panzani`")
  .addField("Commande Utilitaire", "`playerinfo, serverinfo, avatar, info, help, say, channelinfo, elist, remindme, uptime`") 
  .addField("Commande de modération : ", "`clear, ban , kick, rename`")
  .addField("Commande créer , edit, delete, etc : ", "Role : `rlist, redit, crole, rcolor, rdelete`. Channel : `addchannel`")
  message.author.send({embed});
  message.channel.send("Help envoyer en mp")
  }
  if(help == "ping")
  {
  message.channel.send({embed: {
    color: 15844367,
    author: {
      name: 'Help : Ping commande',
      icon_url: ""
    },
    title: "",
    url: "",
    description: "Permet de donner le ping du bot , vérifier si il est en ligne",
    fields: [{
        name: "Utilisation :",
        value: "p!ping"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "🐤"
    }
  }
});
}
if(help == "invite")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : invite command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Permet de donner l'invite du bot",
  fields: [{
      name: "Utilisation :",
      value: "p!invite"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "roll")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : roll command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Permet de donner un nombre entre 1 et 6",
  fields: [{
      name: "Utilisation :",
      value: "p!roll"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "8ball")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : 8ball command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Permet de répondre à votre destin",
  fields: [{
      name: "Utilisation :",
      value: "p!8ball <question>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "eval")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : eval command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Permet de faire un eval **DEV COMMANDE**",
  fields: [{
      name: "Utilisation :",
      value: "p!eval <chose a eval>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "restart")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : restart command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Permet de restart le bot **DEV COMMANDE**",
  fields: [{
      name: "Utilisation :",
      value: "p!restart"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "close")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : close command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Permet de close le bot **DEV COMMANDE**",
  fields: [{
      name: "Utilisation :",
      value: "p!close"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "reload")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : reload command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Permet de reload une commande **DEV COMMANDE**",
  fields: [{
      name: "Utilisation :",
      value: "p!roll"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "piaf")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : piaf command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Piaf commande **PERSONNAL COMMANDE**",
  fields: [{
      name: "Utilisation :",
      value: "p!piaf"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "dragon")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : dragon command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "dragon commande **PERSONNAL COMMANDE**",
  fields: [{
      name: "Utilisation :",
      value: "p!dragon"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "piafzani")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : piafzani command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Piafzani commande **PERSONNAL COMMANDE**",
  fields: [{
      name: "Utilisation :",
      value: "p!piafzani"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "playerinfo")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : playerinfo command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Playerinfo commande donne les stats d'un joueur. Si il y a aucun argument il renvera vos stats.",
  fields: [{
      name: "Utilisation :",
      value: "p!playerinfo [joueur]"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "serverinfo")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : serverinfo command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Serverinfo commande donne les stats d'une guilde.",
  fields: [{
      name: "Utilisation :",
      value: "p!playerinfo "
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "avatar")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : avatar command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Avatar commande donne l'avatar de quelqu'un. Argument pour voir quelqu'un d'autre",
  fields: [{
      name: "Utilisation :",
      value: "p!avatar <personne>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "info")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : info command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Info commande donne l'info du bot",
  fields: [{
      name: "Utilisation :",
      value: "p!info"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "help")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : help command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Help commande donne l'help du bot en mp",
  fields: [{
      name: "Utilisation :",
      value: "p!help"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "say")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : say command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Say commande dit ce que tu veut",
  fields: [{
      name: "Utilisation :",
      value: "p!say <chose à dire>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "channelinfo")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : channelinfo command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "channelinfo commande donne les infos du channel dans le quel la commande a été fait",
  fields: [{
      name: "Utilisation :",
      value: "p!channelinfo"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "elist")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : elist command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Elist commande , donne les emojis du serveur",
  fields: [{
      name: "Utilisation :",
      value: "p!elist"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "remindme")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : remind command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Remind commande, un rappel. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!remindme <quoi> <temp> <min/h>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "clear")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : clear command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Clear commande, Permet de suprimers des messages. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!clear <cbmessage>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "ban")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : ban command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Ban commande, Permet de ban quelqu'un. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!ban <personne>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "kick")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : kick command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Kick commande, Permet de kick quelqu'un. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!kick <personne>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "rename")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : rename command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Rename commande, Permet de rename quelqu'un. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!rename <personne> <enquoi>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "rlist")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : rlist command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "rlist commande, Permet de donner les roles de la guilde",
  fields: [{
      name: "Utilisation :",
      value: "p!rlist"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "crole")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : crole command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "crole commande, Permet de donner add un role dans la guilde. Ne pas inclure les <>.",
  fields: [{
      name: "Utilisation :",
      value: "p!crole <nomdurole>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "redit")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : redit command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Redit commande, Permet de changer le nom d'un role. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!redit <roleachanger> <nouveaunom>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "rcolor")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : rcolor command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Rcolor commande, Permet de donner changer la couleur d'un role. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!rcolor <roleachanger> <color>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
if(help == "addchannel")
{
message.channel.send({embed: {
  color: 15844367,
  author: {
    name: 'Help : addchannel command',
    icon_url: ""
  },
  title: "",
  url: "",
  description: "Addchannel commande, Permet de donner add un channel dans la guilde. Ne pas inclure les <>",
  fields: [{
      name: "Utilisation :",
      value: "p!addchannel <nomduchannel>"
    }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "🐤"
  }
}
});
}
}
