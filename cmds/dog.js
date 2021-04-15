const Discord = require('discord.js')
const sa = require('superagent')

exports.run = async (client, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return client.send(`**bd!dog** - Random dog.\n**Using:** ${bk.prefix}dog`);
    var { body } = await sa.get(`https://random.dog/woof.json`)
    var dog = new Discord.RichEmbed()
    .setDescription("Random dog")
        .setColor(client.color)
        .setImage(body.url)
        .setFooter(`By: @${bk.ownername}`)
    message.channel.send(dog)
}
module.exports.help = {
    name: 'dog'
}