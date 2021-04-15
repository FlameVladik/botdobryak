const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    console.log(" ")
    console.log("Была использована команда: bd!new_update\nПользователь: <@" + message.author.id + ">\n===========================\n");
    if(message.author.id !== "454314234830913557") return message.channel.send("No.")
    message.channel.send("<:level_up:651866227580600331> ****У меня вышло новое крутое обновление! \:)****\n:point_right: <#640501288387215361>\n:point_right: https://discord.gg/6Qd9RS3 ")
    message.delete(1)
};
module.exports.help = {
    name: "new_update"
};