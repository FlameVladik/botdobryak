const Discord = module.require("discord.js")
module.exports.run = async (bot,message,args) => {
	const rq = require('request')
	rq.get("https://ru.wikipedia.org/w/api.php?action=opensearch&search="+encodeURIComponent(args[0])+"&meta=siteinfo&rvprop=content&format=json", function(e,r,b){
			var data = JSON.parse(b);
			if(data[3][0] == undefined) return message.reply("не найдено результатов по вашему запросу")
			message.reply("🔮 Ответ на ваш запрос.\n✏ Ссылка: " + data[3][0]);
		});
}
module.exports.help = {
    name: "вики"
};
