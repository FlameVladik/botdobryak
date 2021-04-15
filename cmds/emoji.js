const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!emoji\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!emoji** - Send emoji\n**Use:** ${bk.prefix}emoji <id_emoji>`);
    message.channel.send("<:" + message.content.slice(9, message.content.length) + ":" + message.content.slice(9, message.content.length) + ">")
};
module.exports.help = {
    name: "emoji"
};