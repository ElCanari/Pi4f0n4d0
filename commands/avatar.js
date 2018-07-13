module.exports.run = async (client, message, args) => {
  let user_avatar = message.mentions.users.first();
  if(!user_avatar){
    message.channel.send({embed:{
  color: 0x9101ff,
   author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `avatar de ${message.author.tag}`,
url: message.author.avatarURL,
image: {
  url: message.author.avatarURL
  },
  timestamp: new Date(),
footer: {
icon_url: client.user.avatarURL,
text: `avatar`,
},
}})     
  }else{
       message.channel.send({embed:{
  color: 0x9101ff,
   author: {
name: message.author.tag,
icon_url: message.author.avatarURL,
},
title: `avatar de ${user_avatar.tag}`,
url: user_avatar.avatarURL,
image: {
  url: user_avatar.avatarURL
  },
  timestamp: new Date(),
footer: {
icon_url: client.user.avatarURL,
text: `avatar`,
},
}})
}
}

module.exports.help = {
  name: "avatar"
}