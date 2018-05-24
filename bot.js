const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chatbox');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('#FF000')
        .setThumbnail(memberavatar)
        .addField('✘ | Nume: ', ${member})
        .addField('✘ | Bun Venit !', Bun Venit Pe Server Sedare Placuta, ${member})
        .setTimestamp()
        channel.sendEmbed(embed);
});

});

client.on('message', message => {
    if (message.content === 'sinfo') {
    	message.reply('am fost facut pentru accest server');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
