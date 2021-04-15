const Discord = module.require("discord.js");
const fs = require("fs");
const request = module.require("request")
module.exports.run = async (bot,message,args) => {
    if (args) if (args[0] == 'help') return bot.send(`**bd!mcserver** - Информация о сервере майнкрафт\n**Использование:** bd!mcserver <сервер_ip>`);
    var mcCommand = '/minecraft'; // Command for triggering
    var mcIP = message.content.slice(12, message.content.length); // Your MC server IP or hostname address
            var url = 'http://mcapi.us/server/status?ip=' + mcIP;
            request(url, function(err, response, body) {
                if(err) {
                    console.log(err);
                    var errInfo = new Discord.RichEmbed()
                    .setAuthor('Ошибка получения статуса сервера по ip: ' + mcIP + '...')
                    .setColor("#ff0000")
                    .setTimestamp()
                    return message.channel.send(errInfo)
                }
     body = JSON.parse(body);
                var status = '*Сервер по ip `' + mcIP + '` сейчас не в сети*';
                if(body.online) {
                    status = '*Информация о сервере по ip `' + mcIP + '` :*\n\n';
                    if(body.players.now) {
                        status += '<:online:635935973896617984> | Онлайн: **' + body.players.now + '/' + body.players.max + '**\n';
                    if(body.motd) {
                        status += '📝 | MOTD: ' + body.motd + '\n';
                    if(body.server.name)
                        status += '<:McEarth:621699751028719637> | Название версии: ' + body.server.name + '';
                    } else {
                        status += '*никто не играет*';
                    }
                }
                var serverInfo = new Discord.RichEmbed()
                .setDescription(status)
                .setImage('https://mcapi.us/server/image?ip=' + mcIP)
                .setColor('#9100ff')
                message.channel.send(serverInfo);
                console.log(" ")
                console.log("Была использована команда: bd!mcserver (IP: " + mcIP + ")\nПользователь: <@" + message.author.id + ">\n===========================\n");
            }
            });
};
module.exports.help = {
    name: "mcserver"
};