const Discord = module.require("discord.js");
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
    let users = require("../users.json")
    if (message.author.bot) return;
        // If noithing found in users.json
    if (users[message.author.id] === undefined) { message.reply("Вы ещё не привязали **свой аккаунт** к аккаунту **ВКонтакте**!"); return; }
        // Deleting user info and saving users.json
    delete users[message.author.id];
    message.reply("Вы успешно отвязали **свой аккаунт** от аккаунта **ВКонтакте**!");
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
        if (err) console.error(err)
    });
};
module.exports.help = {
    name: "vkunlink"
};