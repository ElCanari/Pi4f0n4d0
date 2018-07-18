module.exports.run = async (client, message, args) => {
    if(args.length < 1){
         message.channel.send("tu n'as rien écrit.");
         return;
    }else{
        client.channels.get("452806050752757780").send({embed:{
            color: Math.floor(Math.random() * 16777214) + 1,
            thumbnail: {
             url:  message.author.avatarURL
            },
            fields:[{
                name: `report de ${message.author.tag}`,
                value:message.content.substr(9)
            },
        ],
        timestamp: new Date(),
    footer:{
        icon_url: client.user.avatarURL,
        text: "report"
    }
    }})
    message.channel.send("Ton report a bien été envoyé au support")
}
}

module.exports.help = {
name: "report"
}
