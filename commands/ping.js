module.exports.run = async (client, message) => {
message.channel.send("Pong !").then(m => m.edit(`:ping_pong: __${Math.round(message.author.client.ping + client.ping)}__ ms !`))
}

module.exports.help = {
    name: "ping"
  }