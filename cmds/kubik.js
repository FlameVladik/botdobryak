const Discord = module.require("discord.js")
module.exports.run = async (bot,message,args) => {
	Array.prototype.random = function() {  
		return this[Math.floor(this.length * Math.random())];
	}
	if(args[1]) return message.channel.send(`Ставки не принимаются!`)
	let profile = require('../profile.json');
	let user = profile[message.author.id];
	if(!args[0]|| !Number(args[0]) || args[0] > 6 ) return message.channel.send(`🎲 ➾ Пример ввода: '.Кубик [1-6]`);
	let rez = [1,2,3,4,5,6].random(); 
	if(rez == args[0]){
		let text = [].random(); 
		user.coins += 2*user.coins
		return message.channel.send(`🤴 Поздравляем!\n💰 Баланс: ${user.coins}`);
	}else{ 
		user.coins -= Number(rez);
		return message.channel.send(`Вы проиграли!\n💰 Баланс: ${user.coins}`);
	}
}

module.exports.help = {
    name: "кубик"
};