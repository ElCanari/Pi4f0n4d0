exports.run = (client, message, args) => {
const config = require("../config.json");
client.users.get("295908783081914378").send(message.author.id + "a utiliser la commande eval du serveur" + message.guild.name)
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}


  const args2 = message.content.split(" ").slice(1);

  if(message.author.id == "317221808405348364")
  {
    console.log("falafel utilse l'eval")
  }
    if(message.author.id !== "295908783081914378" && message.author.id !== "317221808405348364" && message.author.id !== "306119836503900161") return;
    try {
      const code = args2.join(" ");
      let evaled = eval(code);
      if(code == "client.destroy" && message.author.id !== "295908783081914378")
      {
        message.channel.send("betterluck next time"); return;
        
      }
      if(code == "porcess.exit(0)" && message.author.id !== "295908783081914378")
      {
        message.channel.send("betterluck next time"); return;
        
      }
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  


}