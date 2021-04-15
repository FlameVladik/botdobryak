const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');

module.exports.run = async (bot, message, args) => {
    if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")

    let timerId = setInterval(() => {
        Data = new Date();
        Year = Data.getFullYear();
        Month = Data.getMonth();
        Day = Data.getDate();
        Hour = Data.getHours();
        Minutes = Data.getMinutes();
        Seconds = Data.getSeconds();

        switch (Month) {
            case 1: fMonth = "01"; break;
            case 2: fMonth = "02"; break;
            case 3: fMonth = "03"; break;
            case 4: fMonth = "04"; break;
            case 5: fMonth = "05"; break;
            case 6: fMonth = "06"; break;
            case 7: fMonth = "07"; break;
            case 8: fMonth = "08"; break;
            case 9: fMonth = "09"; break;
            case 10: fMonth = "10"; break;
            case 11: fMonth = "11"; break;
            case 12: fMonth = "12"; break;
        }

        let myGuild = bot.guilds.get("457858774099689479");
        let channel_time = myGuild.channels.get("692318539029413931");
        let channel_date = myGuild.channels.get("692324117285961740");
        channel_time.setName(`⏰ Время МСК: ${Hour}:${Minutes}:${Seconds}`);
        channel_date.setName(`⏰ Дата МСК: ${Day}.${fMonth}.${Year}`);
        //clearTimeout(timerId);
    }, 30000)

    let embed = new Discord.RichEmbed()
    .setDescription("⏰ Я начал показывать точное время в название двух каналов!")
    .setColor('#00b6ff')
    bot.send(embed);

};
module.exports.help = {
    name: "timechannel"
};