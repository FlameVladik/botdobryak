const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if (args) if (args[0] == 'help') return bot.send(`**bd!userinfo** - Information of you\n**Use:** ${bk.prefix}userinfo`);
    let a = message.author;

    let embed = new Discord.RichEmbed()
        .setDescription("Information in user")
        .setColor('#10c7e2')
        .addField("Name", a.username)
        .addField("Tag", "#" + a.discriminator)
        .addField("Account Created", a.createdAt)
        .addField("ID", a.id)
        .addField("Mention", "@" + a.tag)
        .addField("You are bot?", a.bot)
        .setThumbnail(a.avatarURL);

    message.channel.send(embed);
    console.log(" ")
console.log("Была использована команда: bd!userinfo\nПользователь: <@" + message.author.id + ">\n===========================\n");
}
module.exports.help = {
    name: "userinfo"
};