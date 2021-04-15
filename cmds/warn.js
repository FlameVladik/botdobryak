const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
console.log("Была использована команда: bd!warn\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!warn** - Warn user\n**Use:** ${bk.prefix}warn @user#0001`);
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав на выполнение этой команды");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Вы указали неверного пользователя");
    if(!rUser) return bot.send("Укажите пользователя которого хотите заварнить, например: /warn @noob");
    if(!profile[rUser.id])return bot.send("Простите не могу найти этого пользователя в базе данных");
    profile[rUser.id].warns++;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    if(profile[rUser.id].warns >=3){
        message.guild.member(rUser).kick("3/3 Предупреждений");
    }
    let embed = new Discord.RichEmbed()
    .setDescription("Предупреждение")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Выдал предупреждение пользователю",`${rUser.user.username}`)
    .addField("Количество предупрежденией",`${profile[rUser.id].warns}/3`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "warn"
};