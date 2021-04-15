const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    if (args) if (args[0] == 'help') return bot.send(`**bd!kick** - Kick user\n**Use:** ${bk.prefix}kick @user#0001`);
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав для использования этой команды");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Укажите пользователя которого хотите кикнуть, например: /kick @noob");
    if(!rUser) return bot.send("Пользователь не найден, попробуйте написать так: /kick @noob#5193");
    let embed = new Discord.RichEmbed()
    .setDescription("Событие: Кик")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Кикнул",`${rUser.user.username}`);
    
    message.guild.member(rUser).kick(".");
    message.channel.send(embed);
    console.log(" ")
console.log("Была использована команда: bd!kick\nПользователь: <@" + message.author.id + ">\n===========================\n");
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "kick"
};