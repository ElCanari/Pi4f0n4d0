const yt = require("ytdl-core");

exports.run = (client, message) => {
if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`:x: Ajoute de la musique avec ${config.prefix}add`);
		let tosend = [];
		queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Demandé par: ${song.requester}`);});
		message.channel.sendMessage(`__Playlist de **${message.guild.name}:**__ Il y a **${tosend.length}** dans la playlist ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
}
