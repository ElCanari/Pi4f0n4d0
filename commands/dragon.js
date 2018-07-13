module.exports.run = async (client, message, args) => {
    message.channel.send("Dragon ? :dragon: <<<<<< all").catch(console.error);
    message.react(":PandaDevil:385523844208656394");
}

module.exports.help = {
    name:"dragon"
}
