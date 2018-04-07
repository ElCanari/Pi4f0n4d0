exports.run = (client, message, args) =>{
    var name = message.author.tag;
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande uptime du serveur : " + message.guild.name)
    var icon = message.author.avatarURL;
    var s = (Math.round(client.uptime / 1000) % 60)
    var m = (Math.round(client.uptime / (1000 * 60)) % 60)
    var h = (Math.round(client.uptime / (1000 * 60 * 60)))
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    message.channel.send('', { embed: {
      color: 0x9101ff,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: '',
      url: '',
      fields: [
        {
          name: `UpTime de ${client.user.username}`,
          value: `${h} Heures ${m} Minutes ${s} Secondes`,
          inline: true
        },
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
      },
    }})
    }
