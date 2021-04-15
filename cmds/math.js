const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!math\nПользователь: <@" + message.author.id + ">\n===========================\n");
        if (!args[0])
        return message.channel.send('Please input a calculation.');
        
        let resp;
        try {
        resp = math.eval(args.join(' '));
        //return message.channel.send(resp);
        } catch (err) {
        return message.channel.send('Text could not be evaluated.')
        console.log(err)
        }
        
        const embed = new Discord.RichEmbed();
        embed.setColor(0x1D82B6).setTitle('Mathematic Result:').addField('input', args.join(" ")).addField('output', resp.toString())
        
        message.channel.send(embed);
};
module.exports.help = {
    name: "math"
};