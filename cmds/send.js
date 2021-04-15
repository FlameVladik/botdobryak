const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!send\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!send** - Send message using bot\n**Use:** ${bk.prefix}send <message>`);
    if (message.author.id !== config.bans) return message.channel.send("❌ | You are banned in a bot, to find out the reason for your ban, refer to @Nubovik#1454")
        if (message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(message.content.slice(7, message.content.length), message.delete(1));
        else{ message.channel.send("You don't have permissions") } 
};
module.exports.help = {
    name: "send"
};