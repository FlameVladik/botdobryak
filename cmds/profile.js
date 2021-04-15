const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!profile\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!profile** - Check your profile!\n**Use:** ${bk.prefix}profile`);
    let profile = require('../profile.json');
    let u = profile[message.author.id];
    const embed = new Discord.RichEmbed()
    .setAuthor("Your profile")
    .setColor('#0dff00')
    .addField('<:Coin:648109453668909057> | Coins', u.coins, true)
    .addField('📀 | Bitcoin', u.btc, true)
    .addField('🏧 | Bank', u.bank, true)
    .addField('📚 | Exp', `${u.xp}/${u.lvl * 5}`, true)
    .addField('🌟 | Level', `${u.lvl} ~ ${u.lvl + 1}`, true)
    .setFooter('by @Nubovik4541');
    message.channel.send(embed);
};
module.exports.help = {
    name: "profile"
};