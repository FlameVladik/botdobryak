const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot,message,args) => {
    if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")
    console.log(" ")
    console.log("Была использована команда: bd!press_f\nПользователь: <@" + message.author.id + ">\n===========================\n");
    let Start = new Discord.RichEmbed()
    .setColor('#00ff02')
    .setDescription('этот F для тебя  ' + message.content.slice(9, message.content.length))
    .setFooter('@Nubovik#4541')
    .setTimestamp()
    let mess = await message.channel.send(Start)
    await mess.react('660521117525606400')
    const collector = mess.createReactionCollector((reaction, user) => reaction.emoji.name === '660521117525606400' && user.id == message.author.id, {time: 10})

    collector.on('collect', async r => {
        switch(r.emoji.name) {
            case '660521117525606400':
                await mess.edit('<@' + message.author.id + '> нажал F и начал смеяться над ' + message.content.slice(11, message.content.length) + '')
            break
        }
    })

    bot.on('end', async () => {
        let end = new Discord.RichEmbed()
        .setColor('#00ff02')
        .addField('F key is closed.')
        .setTimestamp()
        message.channel.send(end)
        await mess.edit(end)
    })
}

module.exports.help = {
    name: 'press_f'
};