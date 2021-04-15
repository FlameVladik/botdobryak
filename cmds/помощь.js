const Discord = module.require("discord.js");
const fs = require("fs");
const config = require("../botconfig.json")
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!помощь\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!помощь** - Команда чтобы узнать другие команды\n**Использование:** ${bk.prefix}помощь`);
    let helpcmd = new Discord.RichEmbed()
    .setColor('#00ff02')
    .setThumbnail('https://cdn.discordapp.com/avatars/513065630346248203/27bcb5ca9fa84dcbaee497c9730faa35.png?size=128')
    .setTimestamp()
    .addField('**:desktop: Информация**', '``bd!проверка`` | ``bd!help`` | ``bd!пригласитьбота`` | ``bd!помощь`` | ``bd!пинг`` | ``bd!inviteserv`` | ``bd!ботинфо`` | ``bd!версия`` | ``bd!разработчик`` | ``bd!аватар`` | ``bd!emoji`` | ``bd!юзеринфо`` | ``bd!mcserver <minecraft_server_ip>`` | ``bd!helpa`` | ``bd!время``')
    .addField('**:tada: Развлечение**', '``bd!cat`` | ``bd!neko`` | ``bd!dog`` | ``bd!fox`` | ``bd!ударить`` | ``bd!обнять`` | ``bd!поцеловать`` | ``bd!спать`` | ``bd!грустить`` | ``bd!шутить``')
    .addField('**:japanese_goblin: Администратирование**', '``bd!send`` | ``bd!kick`` | ``bd!ban`` | ``bd!warn`` | ``bd!clear`` | ``bd!mute`` | ``bd!unmute`` | ``bd!unwarn``')
    .addField('**<:vk:698532528990060604> VK**', '``bd!vkuser`` |  ``bd!vkgroup`` | ``bd!vklink`` | ``bd!vkhelp`` | ``bd!vkverify`` | ``bd!vkunlink``')
    .addField('**✅: Новые команды**', '?_?')
    .setFooter(`Документация: ${config.documentation}`)
    message.channel.send(helpcmd)
};
module.exports.help = {
    name: "помощь"
};