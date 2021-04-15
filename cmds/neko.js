const Discord = module.require("discord.js");
const fs = require("fs");
const bk = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!neko\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!neko** - Neko image\n**Use:** ${bk.prefix}neko`);
    let RandomNeko = [
        "https://neko-love.xyz/v1/neko/neko-love_400.jpg",
        "https://neko-love.xyz/v1/neko/neko-love_131.jpg",
        "https://neko-love.xyz/v1/neko/neko-love_132.jpg",
        "https://neko-love.xyz/v1/neko/neko-love_133.jpg",
        "https://neko-love.xyz/v1/neko/neko-love_134.jpg",
        "https://neko-love.xyz/v1/neko/neko-love_93.png",
        "https://neko-love.xyz/v1/neko/neko-love_95.png",
        "https://neko-love.xyz/v1/neko/neko-love_103.png",
        "https://neko-love.xyz/v1/neko/neko-love_170.png",
        "https://neko-love.xyz/v1/neko/neko-love_98.png",
        "https://anime-chan.me/uploads/posts/2015-11/1448793084_lm-pixiv-13109957-nekomimi-animal-ears-anime-2630601.gif",
        "https://avatars.mds.yandex.net/get-pdb/1895831/6267559d-fa09-4e7e-a357-4f633cdc582b/s1200",
        "https://neko-love.xyz/v1/neko/neko-love_7.png",
        "https://neko-love.xyz/v1/neko/neko-love_6.png",
        "https://neko-love.xyz/v1/neko/neko-love_136.jpg",
        "https://neko-love.xyz/v1/neko/neko-love_399.jpg"
    ]
    let RandomNekoNumber = Math.floor(Math.random() * RandomNeko.length)
    var nekoimg = new Discord.RichEmbed()
        .setAuthor(`Random neko`)
        .setColor("#a7f442")
        .setImage(RandomNeko[RandomNekoNumber])
        .setTimestamp()
        .setFooter(`By: @${bk.ownername}`)
    message.channel.send(nekoimg)
};
module.exports.help = {
    name: "neko"
};