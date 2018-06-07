const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('Type || ^^help ', 'https://www.twitch.tv/streamerhouse')
})

  client.on('message', message => {    
    if(message.content.startsWith('/mass')) {    
    if(message.author.id === "419472407816830986" ||
message.author.id === "419472407816830986"){        
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });


client.login("NDQ0MjAxNjU5MDUzMzc1NDg4.DehW5Q.cbcRbcas1FQMReDAcV7ghpwerlU");
