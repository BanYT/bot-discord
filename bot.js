const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'say') {
    	message.delete()
                const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " says: " + args.join(" "));
		message.channel.send({embed})
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
