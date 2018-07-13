module.exports.run = async (client, message, args) => {
    if(message.channel.type === "dm") return;
    if(!message.guild.channels.exists("name", "piaf-vcs")){
        message.channel.send("je n'ai pas trouvé de channel nommé `piaf-vcs` fait vcs-add pour en créer un.")
        return;
    }else{
        if(message.channel.name !== "piaf-vcs"){
        return;
        }else{
        client.channels.findAll("name", "piaf-vcs").map(c => c.send({embed:{
        color: Math.floor(Math.random() * 16777214) + 1,
        thumbnail:{ 
            url: message.author.avatarURL 
        }, 
        fields:[{
        name: `${message.author.tag}(${message.author.id})`, 
        value: message.content.substr(5)
        },
        { 
        name: ":gear: -> Seveur:",
        value: message.guild.name 
         }],
        timestamp: new Date(), 
        footer:{ 
        text: "vcs"
            } 
           } 
            }))
        }
    }
}

module.exports.help = {
    name: "vcs"
  }
