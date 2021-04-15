const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
console.log("Была использована команда: bd!unmute\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!unmute** - Mute user\n**Use:** ${bk.prefix}mute @user#0001`);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав чтобы использовать эту команду");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!args[0]) return bot.send("Укажите пользователя которого хотите размутить, например: /unmute @noob");
    if(!rUser) return bot.send("Пользователь не найден");
    
    let role = message.guild.roles.find(r => r.name === "Мут");
    if(!rUser.roles.has(role.id)) return bot.send("Пользователь которого вы указали, уже может говорить");
    if(!role){
        role = await message.guild.createRole({
            name:"Мут",
            permissions:[]
        });
        message.guild.channels.forEach(async (channel,id) => {
            await channel.overwritePermissions(role,{
                SEND_MESSAGES:false,
                ADD_REACTIONS:false
            });
        });
    };
    delete bot.mutes[rUser.id];
    fs.writeFile('./mutes.json',JSON.stringify(bot.mutes),(err)=>{
        if(err) console.log(err);
    });

    rUser.removeRole(role);
};
module.exports.help = {
    name: "unmute"
};