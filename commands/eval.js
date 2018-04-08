exports.run = (client, message, args) => {    
  if(message.author.id !== '306119836503900161' && message.author.id !=='295908783081914378'){
            message.channel.send(`<:7orNad0_negative_check_mark:400045843287375873> ${message.author} Tu n'est pas mon developpeur.`)
            return;
        }else{
                try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send({embed:
          {color: "0x00ff47,
        title: '',
        url: '',
        fields: [
        {
        name: 'résultat',
        value: `\`\`\`xl\n${clean(evaled)}\n\`\`\``,
        inline: false
        }
      ],
      footer:{
        icon_url: client.user.avatarURL,
        text: 'eval by shiro', 
        }}});
    } catch (err) {
      message.channel.send({embed:{
        color: 0xff0000,
title: 'érreur',
description: `\`\`\`xl\n${clean(err)}\n\`\`\``,
footer: {
icon_url: client.user.avatarURL,
text: ':baby_chick: eval',
timestamp: new Date.now()
},
}})
    }
  }
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
  }
  client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande eval du serveur : " + message.guild.name)     
}
