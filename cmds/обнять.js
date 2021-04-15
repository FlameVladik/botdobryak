const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**обнять** - обнять пользователя!\n**Использование:** ${bk.prefix}обнять @user#0001`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return bot.send('Пользователь не найден!');
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} обнял ${rUser}`)
        .setImage(`https://i.gifer.com/1ak.gif`)
        .setColor('#f646ff')
        .setFooter(`Создал: @${bk.ownername}`)
    bot.send(emb)

    console.log(" ")
    console.log("Была использована команда: bd!обнять\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "обнять"
};