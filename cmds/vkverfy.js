const Discord = module.require("discord.js");
const { VK } = require('vk-io');
const vk = new VK({
    token: "18e4db52247fc85e0c26843d83bb08d0d52885b3fc08956e5579b4c9f306e90ff6ebcbd486682a3176669"
});
const fs = require('fs')

vk.updates.startPolling()

module.exports.run = async (bot, message) => {
    let users = require("../users.json")
    const args = message.content.split(/\s+/g).slice(1);
    if (message.author.bot) return;
    if (users[message.author.id].verfy !== false) { message.reply("Вы уже привязали **свой аккаунт** к аккаунту **ВКонтакте**!")}
    if (users[message.author.id].code == 0) { message.reply("Информации не найдено, походу вы не использовали **bd!vklink**.")}
    if (users[message.author.id].code == args[0]) {
        const [user] = await vk.api.users.get({user_id:users[message.author.id].vk})
        message.reply(`Ваш аккаунт ${user.first_name} ${user.last_name} был успешно подтвержден!`)
        users[message.author.id].verfy = true;
    }
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};
module.exports.help = { 
    name: "vkverfy"
};