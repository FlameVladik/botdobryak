const Discord = module.require("discord.js")
module.exports.run = async (bot,message,args) => {
	const prequest = require('prequest')
	prequest('https://www.anekdot.ru/random/poems/')
	.then(response => {
		console.log(response)
		let match = response.match(/\['([^']+)/);
		match = match && match[1].replace(/<br>/, '\n');
		message.channel.send("Анекдот\n " + match);
	});
	}

module.exports.help = {
    name: "анекдот"
};