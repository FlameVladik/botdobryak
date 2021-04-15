const Discord = module.require("discord.js")
module.exports.run = async (bot,message,args) => {
	Array.prototype.random = function() {  
		return this[Math.floor(this.length * Math.random())];
	}
	try{
		var math = require('mathjs')
		var result = math.evaluate(args[0]);
		return message.reply(`${args[0]} = ${result}`);
	}
	catch(e){
		message.reply(`${e}`)
	}
	}

module.exports.help = {
    name: "пример"
};