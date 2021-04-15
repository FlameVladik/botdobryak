const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!botinfo\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!botinfo** - Bot info\n**Use:** ${bk.prefix}botinfo`);
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let uptime = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
    const embed = new Discord.RichEmbed()
    .setAuthor("Info bot")
    .setColor("#a7f442")
    .setTimestamp()
    .addField("⭕ | Memory usage", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
    .addField("🕑 | Uptime", `${uptime}`, true)
    .addField("💾 | Ping", `${bot.ping}`, true)
    .addField("👥 | Users", `${bot.users.size}`, true)
    .addField("🌐 | Servers", `${bot.guilds.size}`, true)
    .addField("👤 | Developer", `<@${config.owner}>`, true)
    .addField("🖱️ | Version", `${config.version}`, true)
    .addField(`🔗 | Link`, `[Documentation](${config.documentation})`, true)
    .addField("🎃 | Support Server", `[Server](${config.supportserver})`, true)
    message.channel.send(embed);
};
module.exports.help = {
    name: "botinfo"
};