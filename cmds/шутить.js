const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**шутить** - начать шутить! \:)\n**Использование:** ${bk.prefix}шутить`);
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} шутит`)
        .setImage(`https://i.gifer.com/7NLT.gif`)
        .setColor('#f646ff')
        .setFooter(`Создал: @${bk.ownername}`)
    bot.send(emb)

    console.log(" ")
    console.log("Была использована команда: bd!шутить\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "шутить"
};