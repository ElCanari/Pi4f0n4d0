module.exports.run = async (client, message, args) => {
    let usermention = message.mentions.users.first();
    let toSearch = args[2];
    if(!usermention){
        message.channel.send(`:x: ${message.author}, mentionnez un utilisateur valide`)
        return;
    }
    let toAdd = message.guild.roles.find("name", toSearch);
    if(!toAdd){
      message.channel.send(`:x: ${message.author} je ne trouve pas ce rôle`)
      return;
    }
    message.member.addRole(toAdd);
    message.channel.send(`j'ai ajouté le role ${toAdd} à ${usermention.tag}`)
}

module.exports.help = {
    name: "role"
}