const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot,message,args) => {
    if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")
    console.log(" ")
    console.log("Была использована команда: bd!help\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!help** - Help command\n**Use:** ${bk.prefix}help`);
    let helpcmd = new Discord.RichEmbed()
    .setColor('#00ff02')
    .setThumbnail('https://cdn.discordapp.com/avatars/513065630346248203/27bcb5ca9fa84dcbaee497c9730faa35.png?size=128')
    .setTimestamp()
    .addField('**:desktop: Команды для создателя:**', '``bd!say`` ``bd!press_f <message>`` ``bd!dcserver <id_server>`` ``bd!eval`` ')
    message.channel.send(helpcmd)
};
module.exports.help = {
    name: "helpa"
};