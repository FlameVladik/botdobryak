const Discord = module.require("discord.js");
const fs = require("fs");
const request = module.require("request")
let config = require('../botconfig.json');
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")

    let tm = await message.channel.send(`<:fuga_what:632271044870275083> » Собираю информацию...`)
    
    message.author.send(`Список серверов, на котором находится бот:`)

    bot.guilds.forEach((guild) => {
        let text = ``
        text += ` - ${guild.name} [${guild.id}]\n`
        message.author.send(text);
    });

    let timerId = setInterval(() => {
        tm.edit(`<:fuga_what:632271044870275083> » Данные отправлены в личные сообщения.`)
        clearTimeout(timerId);
    }, 1000)
};
module.exports.help = {
    name: "guildslist"
};