const yt = require("ytdl-core");

exports.run = (client, message) => {
let url = message.content.split(' ')[1];
		if (url == '' || url === undefined) return message.channel.sendMessage(`:x: Spécifier un lien youtube après le ${config.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return message.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
			queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
			message.channel.sendMessage(`Ajout de:  **${info.title}** dans la playlist`);
		});
}
