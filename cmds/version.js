const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!version\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!version** - Bot version\n**Use:** ${bk.prefix}version`);
    message.channel.send(` Version bot **${config.version}**`)
};
module.exports.help = {
    name: "version"
};