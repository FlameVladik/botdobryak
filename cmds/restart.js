const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!restart\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")
    if (args) if (args[0] == 'help') return bot.send(`**bd!restart** - Перезапускает бота\n**Use:** ${bk.prefix}restart`);
    const announceChannel = bot.channels.get("640502013217603595");
    let botrestart = new Discord.RichEmbed()
        .setAuthor("Бот перезапустился")
        .setDescription(`Рестартнул: <@${message.author.id}>`)
        .setTimestamp()
        .setColor("#0aff00");
    message.channel.send("Рестарт."), console.clear(), bot.destroy(), bot.login(config.token), announceChannel.send(botrestart);
};
module.exports.help = {
    name: "restart"
};