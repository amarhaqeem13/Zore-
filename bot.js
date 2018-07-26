const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'z!ping') {
    	message.reply('Pong!');
        
    if (message.content === 'z!help') {
        message.reply ('z!amar z!zore');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
