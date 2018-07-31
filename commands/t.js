const request = require("request");
const superagent = require("superagent")
module.exports.run = async (client, message, args) => {
    const url = process.env.url;
    request(url, (err, res, body) => {

        console.log('chargement !')
        
        if(err || res.statusCode!== 200)return
        
        console.log('chargé avec succés')
        let userData = JSON.parse(body);
        let Sender = message.author;
        if(!userData[Sender.id + message.guild.id]) userData[Sender.id + message.guild.id] = {};
        if(!userData[Sender.id + message.guild.id].comboTr) userData[Sender.id + message.guild.id].comboTr = 0;
        request({ url: url, method: 'PUT', json: userData})
        const trUrl = process.env.TrUrl;
        request(trUrl, (err, res, body) => {

            console.log('chargement !')
            
            if(err || res.statusCode!== 200)return
            
            console.log('chargé avec succés')
            let Tr = JSON.parse(body)
            //channel blcklist
                const cblUrl = process.env.cbl;
                request(cblUrl, (err, res, body) => {

                console.log('chargement !')
        
                if(err || res.statusCode!== 200)return
        
                console.log('chargé avec succés')
                let Blchannel = JSON.parse(body);
            if(args[0] === "on"){
            if(!message.member.hasPermission("ADMINISTRATOR"))return;
            if(!Tr[message.guild.id]) Tr[message.guild.id] = {};
            if(!Tr[message.guild.id].boonlean) Tr[message.guild.id].boonlean = true;
            if(!Tr[message.guild.id].time) Tr[message.guild.id].time = Date.now() + 300000;
            if(!Tr[message.guild.id].taker) Tr[message.guild.id].taker = "undefined";
            request({ url: trUrl, method: 'PUT', json: Tr})
            message.channel.send("Trésor de guilde activé !")
            }else{
            if(args[0] === "off"){
             if(!message.member.hasPermission("ADMINISTRATOR"))return;
                Tr[message.guild.id].boonlean = false;
                request({ url: trUrl, method: 'PUT', json: Tr})
                message.channel.send("Trésor de guild désactivé !")
            }else{
                if(args[0] === "bl"){
                if(!message.member.hasPermission("ADMINISTRATOR")){
                message.channel.send(":x: Tu n'as pas les permissions nécéssaires.")
                }else{
                if(!Blchannel[message.channel.id]) Blchannel[message.channel.id] = {};
                if(!Blchannel[message.channel.id].boonlean) Blchannel[message.channel.id].boonlean = true;
                message.channel.send("commande trésor blacklist dans ce channel")
                request({ url: cblUrl, method: 'PUT', json: Blchannel})
                }
        }else{
           if(args[0] === "ubl"){
               if(!message.member.hasPermission("ADMINISTRATOR")){
                message.channel.send(":x: Tu n'as pas les permissions nécéssaires.")
                }else{
               Blchannel[message.channel.id].boonlean = false;
               request({ url: cblUrl, method: 'PUT', json: Blchannel})
               message.channel.send("les commande de trésor ne sont plus blacklist ici")
                }else{
                if(!Tr[message.guild.id])return;
                if(!userData[Sender.id + message.guild.id])return;
                if(Tr[message.guild.id].boonlean === false)return;
                var now = new Date().getTime();
                var distance = Tr[message.guild.id].time - now;
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                if(Blchannel[message.channel.id].boonlean === true){
                    message.delete();
                    message.channel.send("commande désativé !").then(m => m.delete(5000))
                }else{
                if((Tr[message.guild.id].time > Date.now()) && (Tr[message.guild.id].time !== 0)){
                    message.channel.send("<a:tresure:467999359724945408> - " + `Le trésor de la guilde n'est pas encore récupérable, il sera récupérable dans ${minutes} minutes et ${seconds} secondes. Actuellement votre combo est de : x${userData[Sender.id + message.guild.id].comboTr}, le dernier trésor a été récupéré par : ${Tr[message.guild.id].taker}`)
                    return;
                }else{
                    userData[Sender.id + message.guild.id].comboTr++;
                    request({ url: url, method: 'PUT', json: userData})
                    message.reply("Tu eu le trésor de guilde ton combo actuel monte à " + userData[Sender.id + message.guild.id].comboTr + " !");
                    Tr[message.guild.id].taker = Sender.tag;
                    Tr[message.guild.id].time = Date.now() + Math.floor(Math.random()+6000000);
                    request({ url: trUrl, method: 'PUT', json: Tr})
                        }
                    }
                }
            }
        }
    }
}
    })
    })
    })

}

module.exports.help = {
    name:"t"
} 
