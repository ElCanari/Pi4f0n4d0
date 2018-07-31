const request = require("request")
const superagent = require("superagent")
module.exports.run = async (client, message) => {
    const cblUrl = process.env.cbl;
                request(cblUrl, (err, res, body) => {

                console.log('chargement !')
        
                if(err || res.statusCode!== 200)return
        
                console.log('chargé avec succés')
                let Blchannel = JSON.parse(body);  
if(Blchannel[message.channel.id].boonlean === true){
   if(!message.member.hasPermission("ADMINISTRATOR")){
    message.channel.send(":x: Tu n'as pas les permissions nécéssaires.")
    return;
    }else{
   Blchannel[message.channel.id].boonlean = false;
   request({ url: cblUrl, method: 'PUT', json: Blchannel})
   message.channel.send("les commandes de trésor ne sont plus blacklist ici")
    return;
}
}else{
    if(!message.member.hasPermission("ADMINISTRATOR")){
        message.channel.send(":x: Tu n'as pas les permissions nécéssaires.")
        }else{
        if(!Blchannel[message.channel.id]) Blchannel[message.channel.id] = {};
        if(!Blchannel[message.channel.id].boonlean) Blchannel[message.channel.id].boonlean = true;
        message.channel.send("commande trésor blacklist dans ce channel")
        request({ url: cblUrl, method: 'PUT', json: Blchannel})
    }
}
})
}

module.exports.help = {
    name:"bltr"
}
