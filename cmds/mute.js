const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!mute\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!mute** - Mute user\n**Use:** ${bk.prefix}mute @user#0001`);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("У вас нет прав для использование этой команды");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!args[0]) return bot.send("Укажите пользователя которого хотите замутить, например: /mute @noob#1945 ");
    if (!rUser) return bot.send("Пользователь не найден, возможно его нет на сервере");
    if (!args[1]) return bot.send("Время указывается в секундах, например: /mute @noob#1945 500");
    let role = message.guild.roles.find(r => r.name === "Мут");
    if (!role) {
        role = await message.guild.createRole({
            name: "Мут",
            permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    };
    if (rUser.roles.has(role.id)) return bot.send("Пользователь которого вы указали уже находится в муте");
    bot.mutes[rUser.id] = {
        guild: message.guild.id,
        time: parseInt(Date.now() + (args[1] * 1000)),
    };
    fs.writeFile('./mutes.json', JSON.stringify(bot.mutes), (err) => {
        if (err) console.log(err);
    });

    rUser.addRole(role);
};
module.exports.help = {
    name: "mute"
};