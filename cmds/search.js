const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!search\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!search** - Search in Yandex!\n**Use:** ${bk.prefix}search <text>`);
    let tm = await message.channel.send("🔎 | Search...")

    let timerId = setInterval(()=>{
        tm.edit("🔎 | Found: https://yandex.ru/search/?text=" + message.content.slice(10, message.content.length))
        clearTimeout(timerId);
    },3000)
};
module.exports.help = {
    name: "search"
};