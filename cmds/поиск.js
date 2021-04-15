const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!поиск\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!поиск** - Поиск в Яндексе\n**Использование:** ${bk.prefix}поиск <текст(без_пробелов)>`);
    let tm = await message.channel.send("🔎 | Поиск...")

    let timerId = setInterval(()=>{
        tm.edit("🔎 | Найдено: https://yandex.ru/search/?text=" + message.content.slice(9, message.content.length))
        clearTimeout(timerId);
    },3000)
};
module.exports.help = {
    name: "поиск"
};