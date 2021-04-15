const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
  console.log(" ")
  console.log("Была использована команда: bd!ping\nПользователь: <@" + message.author.id + ">\n===========================\n");
  if (args) if (args[0] == 'help') return bot.send(`**bd!ping** - Ping\n**Use:** ${bk.prefix}ping`);
    message.channel.send(`<a:loading:642451632860168291>`)
    .then((msg) => {
      setTimeout(function() {
      msg.edit("> <:online:635935973896617984> Pong! " + Math.round(bot.ping) + "ms");
    }, 2100)});
};
module.exports.help = {
    name: "ping"
};