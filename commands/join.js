exports.run = () => {
return new Promise((resolve, reject) => {
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return message.reply("Je n'ai pas la permission de me connecter dans ton channel vocal...");
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
}
