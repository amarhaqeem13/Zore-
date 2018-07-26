var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//Configure logger settings.
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize:true
});

logger.level = 'debug';

//Initialize the bot
var bot = new Discord.Client({
    token: auth.token,
    autorun:true
});

bot.on('ready', function(evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt){
    //Bot needs to know if it will execute a command.
    //Bot will listen for messages that start with an '!'.
    if(message.substring(0, 1) == 'z!'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd){
            //z!ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: "Pong!"
                });
            break;
            //z!helpcommands
            case 'tutcommands':
                bot.sendMessage({
                    to: channelID,
                    message: "My commands are:z!help z!amar z!zore z!invitebot"
                });
            break;
            //z!amar
            case 'amar':
                bot.sendMessage({
                    to: channelID,
                    message: "Amar is the creator of me. He created me when Zore requests Amar/"
                });
            break;
            //z!zore
            case 'zore':
                bot.sendMessage({
                    to: channelID,
                    message: "Zore is the requestor of me."
                });
            break;
            //z!invitebot
            case 'invitebot':
                bot.sendMessage({
                        to: channelID,
                        message: "https://discordapp.com/api/oauth2/authorize?client_id=471300786014388224&permissions=0&scope=bot"
                });
            break;
        }
    }
});
