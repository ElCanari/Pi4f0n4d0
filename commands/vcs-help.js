module.exports.run = async (client, message) => {
    message.channel.send({embed:{ color: Math.floor(Math.random() * 16777214) + 1,
    title: "commande de vcs",
    fields:[{
        name: "vcs <texte>",
        value:"pour envoyer une message pour tous les channels `vcs`"
        },
        {
        name: "vcs-image",
        value:"pour partager une image dans les channels `vcs`"
        },
        {
        name: "vcs-regle",
        value:"règlement du vcs"
        },
        {
        name:"vcs-ban",
        value:"pour ban quelqu'un du vcs (uniquement modo !)"  
        },
        {
        name: "vcs-add",
        value: "ajoute un channel vcs"
        }],
        timestamp: new Date(),
        footer:{
            text: "vcs-help by @⚡Electrika⚡#8754",
            icon_url: client.user.avatarURL
        }
    }})
}
module.exports.help = {
    name: "vcs-help"
  }