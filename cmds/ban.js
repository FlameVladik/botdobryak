const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json")
module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!ban\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if (args) if (args[0] == 'help') return bot.send(`**bd!ban** - Ban user\n**Use:** ${bk.prefix}ban @user#0001`);
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Недостаточно прав на использование команды!')
    else if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('У меня недостаточно прав!')

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.user.username == args[0] || m.id == args[0]))
    if (!member) return message.channel.send('Укажите существующего пользователя')
    else if (member.hasPermission("BAN_MEMBERS")) return message.channel.send('Я не могу исключить этого пользователя.')

    let reason = args.slice(1).join(' ') || 'Не указана'

    await member.ban(reason)
    await message.channel.send(`<@${message.author.id}> исключил <@${member.id}>\n**Причина**: ${reason}`)
}

module.exports.help = {
    name: 'ban'
}