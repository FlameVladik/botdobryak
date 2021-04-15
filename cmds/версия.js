const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!версия\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!версия** - Версия бота\n**Использование:** ${bk.prefix}версия`);
    message.channel.send("> <:fuga_what:632271044870275083> Версия бота **1.7.2**")
};
module.exports.help = {
    name: "версия"
};