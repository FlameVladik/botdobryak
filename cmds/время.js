const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var time = new Date();
    let tm = await message.channel.send(`:alarm_clock: | Время: ${time} [МСК]`)
    tm.edit(`:alarm_clock: | Время: ${time} [МСК]`)
    
    let timerId = setInterval(()=>{
        var timeUp = new Date();
        tm.edit(`:alarm_clock: | Время: ${timeUp} [МСК]`)
        clearTimeout(timerId);
    },1000)

};
module.exports.help = {
    name: "время"
};