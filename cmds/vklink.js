const Discord = module.require("discord.js");
const { VK } = require('vk-io');
const vk = new VK({
    token: "18e4db52247fc85e0c26843d83bb08d0d52885b3fc08956e5579b4c9f306e90ff6ebcbd486682a3176669"
});
const fs = require('fs')

vk.updates.startPolling()
var HashMap = require('hashmap');
var map = new HashMap();

module.exports.run = async (bot, message) => {
    function generateKey() {
        var text = "";
        var possible = "&*!()@?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 11; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    if (message.author.bot) return;

    let users = fs.readFileSync("./users.json")
    
    if (!users[message.author.id]) users[message.author.id] = {
        code:0,
        verfy:false
    };

    fs.wtiteFile('./users.json', JSON.stringify(users))

    const args = message.content.split(/\s+/g).slice(1);
    let pageID = args[0];
    let key = generateKey();

    if (users[message.author.id].verfy == true) { message.reply("Вы уже привязали **свой аккаунт** к аккаунту **ВКонтакте**!")}

    if (pageID === undefined) {
        message.reply("Вы не указали свой **id**/**буквенный-id**");
    }
    else {
        users[message.author.id].code = key;

        fs.wtiteFileSync('./users.json', JSON.stringify(users))
        vk.api.utils.resolveScreenName({screen_name:pageID.replace(',', "")}).then((res)=>{
            vk.api.messages.send({
                user_id: pageID.replace(',', ""),
                message:`❗ Код подтверждения: ${users[message.author.id].code}\n\n🥺 Отправте этот код боту в дискорде командой bd!vkverfy ${users[message.author.id].code}`
            }).then(() => {
                message.channel.send("💬 Код подтверждения был отправлен вам в ВКонтакте, убедитесь что ваши личные сообщения в ВК открыты, если нет, то откройте, и напишите эту команду повторно.")
            });
        })
    }
}
module.exports.help = {
    name: "vklink"
};