const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**грустить** - грустить!\n**Использование:** ${bk.prefix}грустить`);
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} грустит`)
        .setImage(`https://i.gifer.com/9FTf.gif`)
        .setColor('#f646ff')
        .setFooter(`Создал: @${bk.ownername}`)
    bot.send(emb)

    console.log(" ")
    console.log("Была использована команда: bd!грустить\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "грустить"
};