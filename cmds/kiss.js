const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**kiss** - kiss user!\n**Использование:** ${bk.prefix}kiss @user#0001`);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!rUser) return bot.send('User is not found!');
    let emb = new Discord.RichEmbed()
        .setDescription(`${message.author} kiss ${rUser}`)
        .setImage(`https://i.gifer.com/1Vk.gif`)
        .setColor('#f646ff')
        .setFooter(`By: @${bk.ownername}`)
    bot.send(emb)

    console.log(" ")
    console.log("Была использована команда: bd!kiss\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "kiss"
};