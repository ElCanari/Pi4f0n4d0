var search = require('youtube-search');
const request = require("request");
module.exports.run = async (client, message, args) => {
    
    var opts = {
        maxResults: 10,
        key: 'AIzaSyAtbRh4YfalDf8EcbhUzUnGLhFjtBbh6Kk'
      };

      search(message.content.substr(8), opts, function(err, results) {
        if(err) return message.channel.send("erreur suite à la recherche: " + err);
        message.channel.send({embed:{
            color: Math.floor(Math.random() * 16777214) + 1,
            fields:[{
            name:results[0].title,
            value:results[0].link,
            inline:false
            },
        ],
        image:{
            url: results[0].thumbnails.high.url
        },
        timestamp:new Date,
        footer:{
            icon_url:message.author.avatarURL,
            text:"youtube"
        }
        }})
        console.log(results[0])
      });
}

module.exports.help = {
    name: "youtube"
}
