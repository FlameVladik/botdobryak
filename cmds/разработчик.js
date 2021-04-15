const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!разработчик\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!разработчик** - Разработчик бота\n**Использование:** ${bk.prefix}разработчик`);
    message.channel.send("Мой разработчик <@454314234830913557>!")
};
module.exports.help = {
    name: "разработчик"
};