const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (message.author.bot) return;
    var EmbedMsg = new Discord.RichEmbed()
        .setTitle("Помощь по VK-функциям.")
        .setDescription("Полезная информация о командах и функциях бота.")
        .setColor("#507299")
        .addBlankField()
        .addField("📋 Команды бота", "Стандартный префикс команд это **bd!**.\n\n**bd!vkhelp** - Показывает раздел помощи\n**bd!vkuser** *<ссылка на профиль>*\n**bd!vkgroup** *<ссылка на группу>*\n\n**bd!vklink** *<ссылка на ваш профиль>* - Привязать ваш профиль ВК к боту *(Подробнее в разделе Привязка)*")
        .addField("🛡 Привязка аккаунта", "Для привязки вашего аккаунта ВК к аккаунту Discord используйте команду **bd!vklink** *<ссылка на ваш профиль>* после чего вам нужно будет следовать инструкциям в сообщении, привязка нескольких аккаунтов невозможна!");
        message.channel.send(EmbedMsg)

};
module.exports.help = {
    name: "vkhelp"
};