const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if (args) if (args[0] == 'help') return bot.send(`**bd!аватар** - Показывает вашу аватарку\n**Использование:** ${bk.prefix}аватар`);
    const notavatar = new Discord.RichEmbed()
    .setDescription(`<@` + message.author.id + ">")
    .setColor("#ff0000")
    .setAuthor(`У вас нет аватара!`)
    .setTimestamp()
    if(!message.author.avatarURL) return message.channel.send(notavatar);

    const avatar = new Discord.RichEmbed()
    .setDescription(`<@` + message.author.id + ">")
    .setColor("#fff700")
    .setImage(message.author.avatarURL)
    .setAuthor(`Ваш аватар`)
    .setTimestamp()
    message.channel.send(avatar);
    console.log(" ")
    console.log("Была использована команда: bd!аватар\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "аватар"
};