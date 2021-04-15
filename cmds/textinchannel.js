const Discord = module.require("discord.js");
const fs = require("fs");
let config = require('../botconfig.json');
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!test\nПользователь: <@" + message.author.id + ">\n===========================\n");
    //if (message.author.id !== config.owner) return message.channel.send("No, you are not owner!")
    let text = args[0]
    let channelId = args[1]

    const channelannons = bot.channels.get(channelId);
    channelannons.send(text);
};
module.exports.help = {
    name: "test"
};  