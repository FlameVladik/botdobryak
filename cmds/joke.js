const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**joke** - joke!\n**Use:** ${bk.prefix}joke`);
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} joke`)
        .setImage(`https://i.gifer.com/7NLT.gif`)
        .setColor('#f646ff')
        .setFooter(`By: @${bk.ownername}`)
    bot.send(emb)
    console.log(" ")
    console.log("Была использована команда: bd!joke\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "joke"
};