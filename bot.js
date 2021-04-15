const Discord = require("discord.js");
let config = require('./botconfig.json');
const fs = require('fs');
let profile = require('./profile.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
let token = config.token;
let prefix = config.prefix;
bot.mutes = require('./mutes.json');

fs.readdir('./cmds/', (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) console.log("Нет комманд для загрузки!!");
    console.log(`Загружено ${jsfiles.length} комманд`);
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}) ${f} загружен!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', async => {
    console.log("Бот включён как @" + bot.user.tag + "\n" + "Серверов: " + bot.guilds.size + " | Юзеров: " + bot.users.size);

    bot.setInterval(() => {
        for (let i in bot.mutes) {
            let time = bot.mutes[i].time;
            let guildid = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildid);
            let member = guild.members.get(i);
            let muteRole = member.guild.roles.find(r => r.name === "Muted");
            if (!muteRole) continue;
    
            if (Date.now() >= time) {
                member.removeRole(muteRole);
                delete bot.mutes[i];
                fs.writeFile('./mutes.json', JSON.stringify(bot.mutes), (err) => {
                    if (err) console.log(err);
                });
            }
        }
    
    }, 5000)
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    let uid = message.author.id;
    bot.send = function (msg) {
        message.channel.send(msg);
    };
    if (!profile[uid]) {
        profile[uid] = {
            coins: 10,
            warns: 0,
            xp: 0,
            btc: 5,
            bank: 0,
            lvl: 1,
        };
    };
    let u = profile[uid];

    u.coins++;
    u.xp++;

    if (u.xp >= (u.lvl * 5)) {
        u.xp = 0;
        u.lvl += 1;
        u.btc += u.lvl * 5
    };


    fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
        if (err) console.log(err);
    });

    let messageArray = message.content.split(" ");
    let command = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    if (!message.content.startsWith(prefix)) return;
    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);
    bot.rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    bot.uId = message.author.id;
});
bot.login(token);