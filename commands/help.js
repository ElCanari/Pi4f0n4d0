module.exports.run = async (client, message, args) => {
    message.channel.send('', { embed: {
      color: Math.floor(Math.random() * 16777214) + 1,
      author: {
        name: message.author.tag,
        icon_url: message.author.avatarURL,
      },
      title: 'voici les commandes.',
      url: '',
      description: `:gear: -> __Commandes pour le developpeur__\n\n`+
                    `3die, 3setavatar, 3restart, 3eval\n`+
                    `:gear: -> __Commandes de modérations__\n\n`+
                    `3ban, 3kick, 3lockdown, 3createrole, 3createvoice, 3createchannel, 3purge, 3setnick\n`+
                    `:gear: -> Commandes informations\n\n`+
                    `3serverinfo, 3uptime\n`+
                    `:gear: -> Commandes useless c:\n\n`+
                    `3roll, 3ball\n`+
                    `:gear: -> vcs:\n\n`+
                    `3vcs-help`,
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: client.user.username
      },
    }})
}

module.exports.help = {
  name: "help"
}