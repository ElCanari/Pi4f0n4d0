const config = require("../config");
const yt = require("ytdl-core");

exports.run = (client, message, args) => {
if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`:x: D'abord ajoute de la musique avec ${config.prefix}add`);
		if (!message.guild.voiceConnection) return commands.join(message).then(() => commands.play(message));
		if (queue[message.guild.id].playing) return message.channel.sendMessage('<a:playing:459769160679948305> Déjà en lecture.');
		let dispatcher;
		queue[message.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return message.channel.sendMessage(':x: La playlist est vide.').then(() => {
				queue[message.guild.id].playing = false;
				message.member.voiceChannel.leave();
				client.user.setPresence({game:{name:`${config.prefix}help sur ${client.guilds.size} serveurs`,url: "https://www.twitch.tv/discordapp",type}})
			});
			message.channel.sendMessage(`Je joue: **${song.title}** demandé par: **${song.requester}**`);
			dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : config.passes });
			client.user.setPresence({game:{name:`▶️ Je joue maintenant: ${song.title}`, url: "https://www.twitch.tv/discordapp",type}})
			let collector = message.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(config.prefix + 'pause')) {
					message.channel.sendMessage(':pause_button: En pause.').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(config.prefix + 'resume')){
					message.channel.sendMessage(':arrow_forward: Reprise.').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(config.prefix + 'skip')){
					message.channel.sendMessage(':arrow_right_hook: on skip.').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					message.channel.sendMessage(`:arrow_up: Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					message.channel.sendMessage(`:arrow_down: Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(config.prefix + 'time')){
					message.channel.sendMessage(`<a:playing:459769573311512576> Time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[message.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[message.guild.id].songs.shift());
				});
			});
		})(queue[message.guild.id].songs.shift());
}
