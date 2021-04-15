const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    var time = new Date();
    let tm = await message.channel.send(`:alarm_clock: | Time: ${time} [Moscow time]`)
    tm.edit(`:alarm_clock: | Time: ${time} [Moscow time]`)
    
    let timerId = setInterval(()=>{
        var timeUp = new Date();
        tm.edit(`:alarm_clock: | Time: ${timeUp} [Moscow time]`)
        clearTimeout(timerId);
    },1000)

};
module.exports.help = {
    name: "time"
};