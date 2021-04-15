const Discord = require('discord.js')
const sa = require('superagent')
exports.run = async (client, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return client.send(`**bd!cat** - Рандомный котик) \n**Использование:** ${bk.prefix}cat`);
    var { body } = await sa.get(`http://aws.random.cat//meow`)
    var cat = new Discord.RichEmbed()
        .setDescription("Random cat.")
        .setColor('#f8ff00')
        .setImage(body.file)
        .setFooter(`By: @${bk.ownername}`)
    message.channel.send(cat)
}
module.exports.help = {
    name: 'cat'
}