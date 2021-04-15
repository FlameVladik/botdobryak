const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!пригласитьбота\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!пригласитьбота** - Пригласить бота на ваш сервер\n**Использование:** ${bk.prefix}пригласитьбота`);
    message.channel.send('> Пригласи меня на свой сервер! https://discordapp.com/oauth2/authorize?permissions=270920775&client_id=513065630346248203&scope=bot')
};
module.exports.help = {
    name: "пригласитьбота"
};