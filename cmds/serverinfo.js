const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log(" ")
    console.log("Была использована команда: bd!serverinfo\nПользователь: <@" + message.author.id + ">\n===========================\n");
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**serverinfo** - Info of server\n**Use:** ${bk.prefix}serverinfo`);
    try {
        let embed = new Discord.RichEmbed()
            .setDescription("Info of server")
            .setColor('#10c7e2')
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("Server Name", message.guild.name)
            .addField('Server ID', message.guild.id)
            .addField("Server created", message.guild.createdAt)
            .addField("You have join", message.guild.joinedAt)
            .addField("Number of users", message.guild.memberCount)
            .addField('AFK Channel', message.guild.afkChannel.name)
            .addField("Region", message.guild.region)
            .setThumbnail(message.guild.iconURL)

        bot.send(embed);
    } catch (err) {
        console.log(`Произошла ошибка\n\n\n:${err.name}\n\n\n:${err.message}\n\n\n:${err.stack}`);
    }

};
module.exports.help = {
    name: "serverinfo"
};