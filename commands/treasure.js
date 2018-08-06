const superagent = require("superagent");
const request = require("request")

module.exports.run = async (client, message, args) => {

if(args[0] === "on"){
             const trUrl = process.env.TrUrl;
        request(trUrl, (err, res, body) => {

            console.log('chargement !')
            
            if(err || res.statusCode!== 200)return
            
            console.log('chargé avec succés')
            let Tr = JSON.parse(body)
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":x: Tu n'as pas la permission administrateur");
            if(!Tr[message.guild.id]) Tr[message.guild.id] = {};
            if(!Tr[message.guild.id].boonlean) Tr[message.guild.id].boonlean = true;
            if(!Tr[message.guild.id].time) Tr[message.guild.id].time = Date.now() + 300000;
            if(!Tr[message.guild.id].taker) Tr[message.guild.id].taker = "undefined";
            request({ url: trUrl, method: 'PUT', json: Tr})
            message.channel.send("Trésor de guilde activé !")
            return;
            })
            }
            if(args[0] === "off"){
             const trUrl = process.env.TrUrl;
        request(trUrl, (err, res, body) => {

            console.log('chargement !')
            
            if(err || res.statusCode!== 200)return
            
            console.log('chargé avec succés')
            let Tr = JSON.parse(body)
             if(!message.member.hasPermission("ADMINISTRATOR"))return message.channel.send(":x: Tu n'as pas la permission administrateur");
                Tr[message.guild.id].boonlean = false;
                request({ url: trUrl, method: 'PUT', json: Tr})
                message.channel.send("Trésor de guild désactivé !")
                return;
                })
            }
}

module.exports.help = {
    name:"treasure"
 }
