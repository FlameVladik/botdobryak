const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!пинг\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!пинг** - Узнать пинг бота\n**Использование:** ${bk.prefix}пинг`);
    message.channel.send("> <:online:635935973896617984> Понг! " + Math.round(bot.ping) + " бот мс")
};
module.exports.help = {
    name: "пинг"
};