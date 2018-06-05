const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("stargang.ml | /help| PayPal.Me/Roarmice");
  });
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


bot.login(botconfig.token);
