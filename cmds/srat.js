const Discord = module.require("discord.js")
module.exports.run = async (bot,message,args) => {
	return message.channel.send(`💩 <@!${message.author.id}> посрал!`);
}

module.exports.help = {
    name: "срать"
};