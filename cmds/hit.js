const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**hit** - Hit user!\n**Use:** ${bk.prefix}hit @user#0001`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return bot.send('User is not found!');
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} hit ${rUser}`)
        .setImage(`https://media.giphy.com/media/GgasSsuDU62oU/giphy.gif`)
        .setColor('#f646ff')
        .setFooter(`By: @${bk.ownername}`)
    bot.send(emb)

    console.log(" ")
    console.log("Была использована команда: bd!hit\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "hit"
};