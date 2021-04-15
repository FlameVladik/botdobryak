const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!ботинфо\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!ботинфо** - Информация о боте\n**Использование:** ${bk.prefix}ботинфо`);
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд.`;
    const embed = new Discord.RichEmbed()
    .setAuthor("Информация о боте")
    .setColor("#a7f442")
    .setTimestamp()
    .addField("⭕ | Использование памяти", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
    .addField("🕑 | Uptime", `${uptime}`, true)
    .addField("💾 | Пинг", `${bot.ping}`, true)
    .addField("👥 | Пользователей", `${bot.users.size}`, true)
    .addField("🌐 | Серверов", `${bot.guilds.size}`, true)
    .addField("👤 | Разработчик", `<@${config.owner}>`, true)
    .addField("🖱️ | Версия бота", `${config.version}`, true)
    .addField(`🔗 | Ссылки`, `[Документация](${config.documentation})`, true)
    .addField("🎃 | Сервер поддержки", `[Сервер](${config.supportserver})`, true)
    message.channel.send(embed);
};
module.exports.help = {
    name: "ботинфо"
};