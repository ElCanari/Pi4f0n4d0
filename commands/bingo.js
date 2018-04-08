exports.run = (client, message, args) => {
    client.channels.get("431910598360563723").send(message.author.tag + " a utiliser la commande bingo du serveur : " + message.guild.name)
    if(!message.author.hasPermission("MANAGE_SERVER"))return;

    message.channel.send("El famoso bingo a commencer")
    var pkp = [Math.floor(Math.random()*100)];
    const filter = m => m.content.includes(pkp);
    console.log(pkp)
    const collector = message.channel.createMessageCollector(filter, { time: 60000 });
    collector.on('collect', m => {
        console.log(`Collected ${m.content}`);
        message.channel.send(message.author.tag + " a gagné ! ")
        collector.stop();
    });

    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });
    }