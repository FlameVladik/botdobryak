const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**спать** - заснуть!\n**Использование:** ${bk.prefix}спать`);
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} спит`)
        .setImage(`https://media1.tenor.com/images/597ac629012395d4448409613f9e79d1/tenor.gif?itemid=12007584`)
        .setColor('#f646ff')
        .setFooter(`Создал: @${bk.ownername}`)
    bot.send(emb)

    console.log(" ")
    console.log("Была использована команда: bd!спать\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "спать"
};