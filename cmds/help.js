const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
console.log("Была использована команда: bd!help\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!help** - Help command\n**Use:** ${bk.prefix}help`);
    let helpcmd = new Discord.RichEmbed()
    .setColor('#00ff02')
    .setThumbnail('https://cdn.discordapp.com/avatars/513065630346248203/27bcb5ca9fa84dcbaee497c9730faa35.png?size=128')
    .setTimestamp()
    .addField('**:desktop: Info**', '``bd!check`` | ``bd!help`` | ``bd!ping`` | ``bd!inviteserv`` | ``bd!botinfo`` | ``bd!version`` | ``bd!developer`` | ``bd!avatar`` | ``bd!invitebot`` | ``bd!emoji`` | ``bd!userinfo`` | ``bd!mcserver <Minecraft_server_Ip>`` | ``bd!helpa`` | ``bd!time``')
    .addField('**:tada: Entertainment**', '``bd!cat`` | ``bd!neko`` | ``bd!dog`` | ``bd!fox`` | ``bd!hit`` | ``bd!hug`` | ``bd!kiss`` | ``bd!sleep`` | ``bd!sad`` | ``bd!joke``')
    .addField('**:japanese_goblin: Administration**', '``bd!send`` | ``bd!kick`` | ``bd!ban`` | ``bd!warn`` | ``bd!clear`` | ``bd!mute`` | ``bd!unmute`` | ``bd!unwarn``')
    .addField('**<:vk:698532528990060604> VK**', '``bd!vkuser`` |  ``bd!vkgroup`` | ``bd!vklink`` | ``bd!vkhelp`` | ``bd!vkverify`` | ``bd!vkunlink``')
    .addField('**✅: New commands**', '?_?')
    message.channel.send(helpcmd)
};
module.exports.help = {
    name: "help"
};