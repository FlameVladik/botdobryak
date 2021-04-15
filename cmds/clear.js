const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!clear\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!clear** - Clear messages\n**Use:** ${bk.prefix}clear <number>`);
    try{
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permissions");
    if(args[0]>100) return bot.send("Enter a value < 100");
    if(args[0]<1) return bot.send("Enter a value > 1");
    message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Deleted ${args[0]} messages`).then(msg => msg.delete(3*1001));
    });
    bot.send(botmessage);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "clear"
};