const Discord = module.require("discord.js");
const { VK } = require('vk-io');
const vk = new VK({
    token: "18e4db52247fc85e0c26843d83bb08d0d52885b3fc08956e5579b4c9f306e90ff6ebcbd486682a3176669"
});

vk.updates.startPolling()

module.exports.run = async (bot, message) => {
    const users = require('../users.json')
    const fs = require('fs')
    function isIdInt(id, ifNot) {
        if (parseInt(id) === ifNot.object_id) {
            return id;
        } else {
            return ifNot.object_id;
        }
    }
    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сен.', 'Окт.', 'Ноя.', 'Дек.'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    function getUsercard(userId, message) {
        if (userId != undefined) {
            vk.api.call('users.get', {
                user_ids: userId,
                fields: 'sex, status, about, photo_max, online, followers_count, sex, bdate, last_seen'
            }).then((user) => {
                vk.api.call('utils.resolveScreenName', {
                    screen_name: userId
                }).then((userID) => {
                    let id = isIdInt(userId, userID);
                    vk.api.call('friends.get', {
                        user_id: id,
                        count: 0
                    }).then((friends) => {
                        for (userData in user) {
                            var EmbedMsg = new Discord.RichEmbed()
                                .setTitle(`Информация о пользователе: **${userId}**`)
                                .setColor("#507299")
                                .setThumbnail(user[userData].photo_max)
                                .setURL("https://vk.com/id" + user[userData].id)
                                .addField("🎙 Имя", user[userData].first_name + " " + user[userData].last_name, true);
                            switch (user[userData].sex) {
                                case 2:
                                    EmbedMsg.addField("👨 Пол", "Мужской", true);
                                    break;
                                case 1:
                                    EmbedMsg.addField("👩 Пол", "Женский", true);
                                    break;
                            }
                            switch (user[userData].online) {
                                case 1:
                                    EmbedMsg.addField("🆗 Онлайн?", "Да", true);
                                    break;
                                case 0:
                                    if (user[userData].last_seen.time !== undefined) {
                                        EmbedMsg.addField("⏰ Был в сети", timeConverter(user[userData].last_seen.time), true);
                                    }
                                    break;
                            }

                            if (user[userData].bdate !== undefined && user[userData].bdate !== "") {
                                EmbedMsg.addField("🎂 День рождения", user[userData].bdate, true);
                            }
                            if (friends.count !== undefined) {
                                EmbedMsg.addField("👥 Друзья", friends.count, true);
                            } else {
                                console.log("Ошибочка?...");
                            }

                            EmbedMsg.addField("👤 Подписчики", user[userData].followers_count, true);

                            if (user[userData].about !== undefined && user[userData].about !== "") {
                                EmbedMsg.addField("📋 О пользователе", user[userData].about, true);
                            }

                            if (user[userData].status !== undefined && user[userData].status !== "") {
                                EmbedMsg.addField("🖌 Статус", user[userData].status, true);
                            }
                            message.channel.send({
                                embed: EmbedMsg
                            });
                        }
                    });
                });
            })
            .catch((error) => {
                    message.reply("Ошибка! Такой айди пользователя неверен!");
            });
        }
    }
    if (message.author.bot) return;
    const args = message.content.split(/\s+/g).slice(1);
    let vkID = args[0].replace("https://vk.com/id", "").replace("https://vk.com/id", "").replace("/", "");
    let member = message.mentions.members.first();
    if (member !== undefined) {
        let users = JSON.parse(fs.readFileSync("./users.json", "utf8"));
        if (users[member.id] === undefined) {
            message.reply("Данный пользователь ещё не привязал свой аккаунт **ВКонтакте**!")
        }
        getUsercard(users[member.id].vkLink, message);
    } else if (vkID !== undefined || vkID !== "") {
        getUsercard(vkID, message);
    }
};
module.exports.help = {
    name: "vkuser"
};