const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!check\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!check**\n**Use:** ${bk.prefix}check`);
    message.channel.send("> <:online:635935973896617984> I am working!")
};
module.exports.help = {
    name: "check"
};