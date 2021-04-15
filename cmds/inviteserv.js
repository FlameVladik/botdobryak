const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    if (args) if (args[0] == 'help') return bot.send(`**bd!inviteserv**\n**Use:** ${bk.prefix}inviteserv`);
    message.channel.createInvite({temporary : true})
    .then(inv =>message.channel.sendMessage (`https://discord.gg/${inv.code}`));
    console.log(" ")
    console.log("Была использована команда: bd!inviteserv\nПользователь: <@" + message.author.id + ">\n===========================\n");
};
module.exports.help = {
    name: "inviteserv"
};