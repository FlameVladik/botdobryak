const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!avatar\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!avatar** - Your avatar\n**Use:** ${bk.prefix}avatar`);
    const notavatar = new Discord.RichEmbed()
    .setDescription(`<@` + message.author.id + ">")
    .setColor("#ff0000")
    .setAuthor(`You do not have an avatar`)
    .setTimestamp()
    if(!message.author.avatarURL) return message.channel.send(notavatar);

    const avatar = new Discord.RichEmbed()
    .setDescription(`<@` + message.author.id + ">")
    .setColor("#fff700")
    .setImage(message.author.avatarURL)
    .setAuthor(`Your avatar`)
    .setTimestamp()
    message.channel.send(avatar);
};
module.exports.help = {
    name: "avatar",
    aliases: ["аватар", "ава"]
};