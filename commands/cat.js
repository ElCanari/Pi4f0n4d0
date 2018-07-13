const randomPuppy = require("random-puppy");
module.exports.run = async (client, message, args) => {
    randomPuppy('cat').then(url => {
    message.channel.send({embed:{
        color: Math.floor(Math.random() * 16777214) + 1,
        title: `${message.author.tag} :cat:`,
        image:{
        url: url
        },
        timestamp: new Date(),
        footer: {
            name: "chat by shiro",
            icon_url: message.author.avatarUrl,
        }
}})
})
}

module.exports.help = {
    name: "cat"
  }