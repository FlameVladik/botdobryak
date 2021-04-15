const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!проверка\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!проверка** - Узнать работает ли бот\n**Использование:** ${bk.prefix}проверка`);
    message.channel.send("> <:online:635935973896617984> Я работаю!")
};
module.exports.help = {
    name: "проверка"
};