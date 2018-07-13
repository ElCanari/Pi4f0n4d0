module.exports.run = async (client, message, args) => {
    //  message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
    var pkp = [Math.floor(Math.random()*100)];
    let t1 = args[0]
    let t2 = args[1]
message.channel.send(pkp + "% d'amour entre " + t1 + "et " + t2)
}

module.exports.help = {
    name:"loverate"
}
