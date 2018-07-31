const request = require("request");
const superagent = require("superagent")
module.exports.run = async (client, message, args) => {
    const url = process.env.url;
    request(url, (err, res, body) => {

        console.log('chargement !')
        
        if(err || res.statusCode!== 200)return
        
        console.log('chargé avec succés')
        let userData = JSON.parse(body);
        var mention = message.mentions.users.first();
        if(!message.author.id === process.env.AdminId) return message.channel.send(":x: Tu n'est pas mon développeur")
        if(!args[1]){
        message.channel.send("entre un utilisateur")
            return;
        }else{
        if(!mention){
        message.channel.send(":x: mentionne un utilisateur")
            return;
        }else{
        userData[mention.id + message.guild.id].comboTr = args[0];
        request({ url: url, method: 'PUT', json: userData})
        message.channel.send("Le combo de " + mention.tag + " passe à " userData[mention.id + message.guild.id].comboTr + " !")
        }
    }
})
}
 
module.exports.help = {
  name:"sc"
}
