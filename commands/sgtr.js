const superagent = require("superagent");
const request = require("request");
module.exports.run = async (client, message, args) => {
if(message.author.id == process.env.AdminId || message.author.id == process.env.AdminId0){
    const trUrl = process.env.TrUrl;
    request(trUrl, (err, res, body) => {

    if(err || res.statusCode!== 200)return

    let Tr = JSON.parse(body);
    if(args[1] === "s"){
    Tr[message.guild.id].time = Date.now() + args[0]*1000;
    request({ url: trUrl, method: 'PUT', json: Tr})
    message.channel.send(`trésor dans ${args[0]} secondes`)
    }
    
    if(args[1] === "min"){
    
    Tr[message.guild.id].time = Date.now() + args[0]*60000;
    request({ url: trUrl, method: 'PUT', json: Tr})
    message.channel.send(`Trésor dans ${args[0]} minutes`)
    }
    })
}else{
    message.reply("tu n'est pas mon développeur");
    }
    }
    module.exports.help = {
    name:"sgtr"
    }
