const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if (args) if (args[0] == 'help') return bot.send(`**bd!юзеринфо** - Показывает информацию про вас\n**Использование:** ${bk.prefix}юзеринфо`);
    let a = message.author;

    let embed = new Discord.RichEmbed()
        .setDescription("Информация о пользователе")
        .setColor('#10c7e2')
        .addField("Имя", a.username)
        .addField("Тег", "#" + a.discriminator)
        .addField("Аккаунт создан", a.createdAt)
        .addField("ID", a.id)
        .addField("Упоминание", "@" + a.tag)
        .setThumbnail(a.avatarURL);

    message.channel.send(embed);
    console.log(" ")
console.log("Была использована команда: bd!юзеринфо\nПользователь: <@" + message.author.id + ">\n===========================\n");
}
module.exports.help = {
    name: "юзеринфо"
};