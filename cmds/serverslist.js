const Discord = module.require("discord.js");
const fs = require("fs");
const request = module.require("request")
let config = require('../botconfig.json');
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")
    if (args) if (args[0] == 'help') return bot.send(`**bd!serversinfo** - Даёт информацию создателю бота про сервера.\n**Использование:** bd!serversinfo`);

    bot.guilds.forEach((guild) => {
        var dcids = guild.id; // Определение айди после 12 знаков.
        var url = 'https://discordapp.com/api/guilds/' + dcids + '/widget.json';
        request(url, function (err, response, body) {
            if (err) {
                console.log(err);
                var errInfo = new Discord.RichEmbed()
                    .setAuthor(`❌ | Возможно, у этого сервера не включен виджет.\n❌ | Айди проверенного сервера: ${guild.id}`)
                    .setColor("#ff0000")
                    .setTimestamp()
                return message.channel.send(errInfo)
            }
            body = JSON.parse(body);
            var status = `❌ | *У этого сервера, возможно, не включен виджет.*\n❌ | Айди проверенного сервера: ${guild.id}`;
            if (body.id) {
                status = '🌟 | *Информация про сервер: `' + dcids + '`:*\n\n';
                if (body.name) {
                    status += '💻 | Название дискорд-сервера: ' + body.name + '\n';
                    if (body.instant_invite)
                        status += '🍬 | Ссылка приглашение: ' + body.instant_invite + '\n';
                    if (body.presence_count)
                        status += '<:online:635935973896617984> | Участников в сети: ' + body.presence_count + '\n'
                } else {
                    status += '❌ | Возможно, у сервера не включен виджет.';
                }
            }
            var dcsinfo = new Discord.RichEmbed()
                .setDescription(status)
                .setColor('#9100ff')
            message.channel.send(dcsinfo);
            console.log(status)
            console.log(" ")
            console.log("Проверен сервер, ID: " + dcids + "");
        }
        );
    })
};
module.exports.help = {
    name: "serversinfo"
};