const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
console.log("Была использована команда: bd!unwarn\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!unwarn** - Unwarn user\n**Use:** ${bk.prefix}unwarn @user#0001`);
    try{
      
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("У вас нет прав для того чтобы использовать эту команду");
    let rUser = bot.rUser;
    if(!args[0]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!profile[rUser.id])return bot.send("Пользователя нет в базе данных");
    if(profile[rUser.id]<=0) return bot.send("У пользователя которого вы указали 0 предупреждений");
    profile[rUser.id].warns--;
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
    let embed = new Discord.RichEmbed()
    .setDescription("Снятие предупреждений")
    .setColor('#25ca85')
    .addField("Администратор",message.author.username)
    .addField("Снял предупреждение",`${rUser.user.username}`)
    .addField("Количество предупрежденией",`${profile[rUser.id].warns}/3`);

    message.channel.send(embed);
    }catch(err){
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }

};
module.exports.help = {
    name: "unwarn"
};