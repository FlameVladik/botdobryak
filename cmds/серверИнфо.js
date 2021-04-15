const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log(" ")
console.log("Была использована команда: bd!serverinfo\nПользователь: <@" + message.author.id + ">\n===========================\n");
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**bd!serverinfo** - Info of the server\n**Use:** ${bk.prefix}serverinfo`);
    try {
        let embed = new Discord.RichEmbed()
            .setDescription("Информация о сервере")
            .setColor('#10c7e2')
            .addField('Название сервера', message.guild.name)
            .addField('ID сервера', message.guild.id)
            .addField("Сервер создан", message.guild.createdAt)
            .addField("Вы присоединились", message.guild.joinedAt)
            .addField("Количество пользователей", message.guild.memberCount)
            .addField("Регион", message.guild.region)
            .setThumbnail(message.guild.iconURL)

        bot.send(embed);
    } catch (err) {
        console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
    }

};
module.exports.help = {
    name: "серверинфо"
};