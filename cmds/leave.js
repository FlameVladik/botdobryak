const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send(`To enable music, use the BD-Premium (bot). When subscribing, premium features can be used by the entire server, including you.`)
};
module.exports.help = {
    name: "leave"
};