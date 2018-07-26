const Discord = require('discord.js');
const client = new Discord.Client();

});

bot.on('message', function (user, userID, channelID, message, evt) {
    
    if (message.substring(0, 1) == 'z!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // z!ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
                
             args = args.splice(1);
        switch(cmd) {
            // z!help
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'z!amar'
                    message: 'z!zore'
                });
            break;
         }
     }
});   
    // THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
