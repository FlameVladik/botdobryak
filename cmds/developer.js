const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!developer\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!developer** - Bot developer\n**Use:** ${bk.prefix}developer`);
    message.channel.send("My Developer! <@454314234830913557>!")
};
module.exports.help = {
    name: "developer"
};