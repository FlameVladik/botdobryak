const Discord = module.require("discord.js");
module.exports.run = async (bot, message, args) => {
	Array.prototype.random = function() {  
		return this[Math.floor(this.length * Math.random())];
	}
	function rand(min, max) {return Math.round(Math.random() * (max - min)) + min} 
	let profile = require('../profile.json');
	let user = profile[message.author.id];
	var amount = Number(args[0]);
	amount = Math.round(amount);

	if(!args[0]) return message.channel.send(`Используйте: «.казено [ставка]» 😒`);
	if(amount < 1) return message.channel.send(`🔸 Ставка должна быть не менее 1 монеты`)
		if(amount > user.coins) return message.channel.send(`Недостаточно денег 😒\n 💰 Баланс: ${user.coins}`)

			if(args[0].toLowerCase() == 'все' || args[0].toLowerCase() == 'всё' || args[0].toLowerCase() == 'вабанк' || args[0].toLowerCase() == 'вобанк'){ 
				if(user.coins < 1 ) return message.channel.send(`Недостаточно денег 😒\n 💰 Баланс: ${user.coins}`)
					amount = user.coins; 
			}else{ 
				var amount = args[0]
			}

			if(!Number(amount)) return message.channel.send(`Ставка должна быть цифрового вида.`);

			var mnojitelwin = [2,3,4,5].random()
			var mnojitellose = [0.95,0.75,0.50,0.25].random();
			var smilelose = ['😩','😕','😦','😵','😟','😔','😩','😿'].random();
			var smilewin = ['😄','😁','😊','😃','😉','😜','😋','🤗','🙂','🙃','😌','🤤','😇','🤪','😈','😸','😼','😺','😎'].random();


			if(rand(1,100) <= 30){
				let balance = amount;
				let win_balance = amount * mnojitelwin;
				win_balance = Math.round(win_balance);
				user.coins += Number(win_balance) 
				return message.channel.send(`Вы выиграли ${win_balance} монет (х${mnojitelwin}) ${smilewin}\n💰 Баланс: ${user.coins} монет`); 
			}else{
				let balance = amount;
				let lose_balance = amount * mnojitellose;
				lose_balance = Math.round(lose_balance);
				user.coins -= Number(lose_balance) 
				return message.channel.send(`Вы проиграли ${lose_balance} монет (х${mnojitellose}) ${smilelose}\n💰 Баланс: ${user.coins} монет`);
			}
}

module.exports.help = {
    name: "казено"
};