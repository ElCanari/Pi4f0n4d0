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
                    `p7die, p7setavatar, p7restart, p7eval, p7changegame, p7close, p7createrainbow,p7master \n`+
                    `:gear: -> __Commandes de modérations__\n\n`+
                    `p7ban, p7kick, p7lockdown, p7createrole, p7createvoice, p7createchannel, p7purge, p7setnick, p7hackban, p7annonce, p7bltr, p7createcategory, p7createchannel, p7mlist, p7mute, p7unmute, p7purge, p7rcolor, p7redit, p7rdelete, p7rmention,p7role,p7unmute\n`+
                    `:gear: -> Commandes informations\n\n`+
                    `p7serverinfo, p7uptime\n, p7channelinfo, p7playerinfo, p7info, p7avatar`+
                    `:gear: -> Commandes Image\n\n`+
                    `p7dog, p7cat, p7food, p7hentaigif, p7yuri, p7hug, p7cookie,p7kiss,p7info,p7neko, p7nsfwneko, p7pat \n`+
                    `:gear: -> Commandes useless c:\n\n`+
                    `p7roll, p7ball, p7dragon, p7help, p7loverate, p7ping, p7piaf, p7poke, p7remindme, p7repeat, p7report, p7roulette, p7support\n`+
                    `:gear: -> vcs:\n\n`+
                    `p7vcs-help`,
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
