const Discord = module.require("discord.js");
const fs = require("fs");
let mutes = require('../mutes.json');
let config = require('../botconfig.json');
let profile = require('../profile.json');
module.exports.run = async (bot, message, args) => {
    if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")
    try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);
            /*message.channel.send(`[Выполнено/Performed]: \n${code}`)
            console.log(`[Выполнено/Performed]: \n${code}`)*/
			console.log(`Кто-то выполнил команду bd!eval`);

        
    } catch (err) {
        let tm = await message.channel.sendMessage(`**[Ошибка!]** \`\`\`js\n${err}\n\`\`\``);
        let Timer = setInterval(() => {
            tm.delete()
            clearTimeout(Timer);
        }, 5000)
    }
};

//Спасибо за команду eval! https://vk.com/id451073906
module.exports.help = {
    name: "eval"
};