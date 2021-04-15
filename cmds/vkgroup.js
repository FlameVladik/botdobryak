const Discord = module.require("discord.js");
const { VK } = require('vk-io');
const vk = new VK({
    token: "18e4db52247fc85e0c26843d83bb08d0d52885b3fc08956e5579b4c9f306e90ff6ebcbd486682a3176669"
});

vk.updates.startPolling()

module.exports.run = async (bot, message) => {
    if (message.author.bot) return;
        const args = message.content.split(/\s+/g).slice(1);
        let groupID = args[0];
        if (groupID != undefined) {
            message.reply(`Проверяем наличие группы с ID равным **${groupID.replace(',', "")}**`).then(message => message.delete(30000));
            vk.api.groups.getById({
                    group_id: groupID.replace(',', ""),
                    fields: 'members_count,description,status,activity,photo_max'
                })
                .then((group) => {
                    for (groupData in group) {
                        var EmbedMsg = new Discord.RichEmbed()
                            .setTitle(`Информация о сообществе: **${groupID}**`)
                            .setColor("#507299")
                            .setImage(group[groupData].photo_max)
                            .setThumbnail(group[groupData].photo_max)
                            .setURL("https://vk.com/club" + group[groupData].id)
                            .addField("🎙 Название сообщества", group[groupData].name, true);
                        if (group[groupData].description != undefined && group[groupData].description != "") {
                            EmbedMsg.addField("🖌 Описание", group[groupData].description, true);
                        }
                        switch (group[groupData].is_closed) {
                            case 1:
                                EmbedMsg.addField("🔒 Закрытое?", "Да", true);
                                break;
                            case 0:
                                EmbedMsg.addField("🔒 Закрытое?", "Нет", true);
                                break;
                        }
                        if (group[groupData].activity != undefined && group[groupData].activity != "") {
                            EmbedMsg.addField("📝 Тип", group[groupData].activity, true);
                        }
                        EmbedMsg.addField("👥 Участники", group[groupData].members_count, true);
                        message.channel.send({ embed: EmbedMsg });
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            message.reply("**Ой!** Вы забыли указать ID группы!");
        }
};
module.exports.help = {
    name: "vkgroup"
};