const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**sleep** - sleep!\n**Использование:** ${bk.prefix}sleep`);
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} sleep`)
        .setImage(`https://media1.tenor.com/images/597ac629012395d4448409613f9e79d1/tenor.gif?itemid=12007584`)
        .setColor('#f646ff')
        .setFooter(`By: @${bk.ownername}`)
    bot.send(emb)

    console.log(" ")
    console.log("Была использована команда: bd!sleep\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "sleep"
};