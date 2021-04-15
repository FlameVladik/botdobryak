const Discord = module.require("discord.js");
let config = require('./botconfig.json');
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
console.log("Была использована команда: bd!invitebot\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!invitebot** - Invite bot to your server\n**Use:** ${bk.prefix}invitebot`);
    message.channel.send(`Invite me for your server! ${config.invitebot}`)
};
module.exports.help = {
    name: "invitebot"
};