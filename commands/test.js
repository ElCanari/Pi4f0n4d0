exports.run = (client, message, args) => {


    message.guild.fetchMember(message.author)
    .then(console.log)
    .catch(console.error);


}