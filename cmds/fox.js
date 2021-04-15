const Discord = require('discord.js')
const sa = require('superagent')

exports.run = async (client, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return client.send(`**bd!fox** - Random fox\n**Using:** ${bk.prefix}fox`);
    var { body } = await sa.get(`https://randomfox.ca/floof/`)
    var fox = new Discord.RichEmbed()
        .setDescription("Random fox")
        .setColor(client.color)
        .setImage(body.image)
        .setFooter(`By: @${bk.ownername}`)
    message.channel.send(fox)
}
module.exports.help = {
    name: 'fox',
}
