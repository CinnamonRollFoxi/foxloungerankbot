const Discord = require('discord.js');
const bot = new Discord.Client();

let xp = require("./xp.json")

const fs = require('fs');

const prefix = "m!";
bot.commands = new Discord.Collection();

bot.on('ready', function(message){
    console.log("Ready!");
});

bot.on("message", async message => {
    let xpAdd = Math.floor(Math.random() * 7) + 8;

    if(!xp[message.author.id]) {
        xp[message.author.id] = {
            xp: 0,
            level: 1
        }
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtlvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp = curxp + xpAdd;

    if(nxtlvl <= xp[message.author.id].xp) {
        xp[message.author.id].level = curlvl + 1;

        const lvlUp = new Discord.RichEmbed()
            .setTitle("You Ranked up!")
            .setColor("#FFC0CB")
            .addField("New Rank", curlvl + 1);

        message.channel.send(lvlUp);
    }
    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(error)
    if(xp[message.author.id].level === 5)
    {

        message.member.addRole('593980824693637122')
            .catch(console.error);
        
    }
    if(xp[message.author.id].level === 10)
    {
        message.member.removeRole('593980824693637122')
        message.member.addRole('594436731865006121')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 20)
    {
        message.member.removeRole('594436731865006121')
        message.member.addRole('594436729713197057')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 30)
    {
        message.member.removeRole('594436731865006121')
        message.member.addRole('594436728748507137')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 40)
    {
        message.member.removeRole('594436728748507137')
        message.member.addRole('594937318284984340')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 50)
    {
        message.member.removeRole('594937318284984340')
        message.member.addRole('594436729621053450')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 60)
    {
        message.member.removeRole('594937318284984340')
        message.member.addRole('594937321217064960')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 70)
    {
        message.member.removeRole('594937321217064960')
        message.member.addRole('594436710759399425')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 80)
    {
        message.member.removeRole('594436710759399425')
        message.member.addRole('594937324069060614')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 90)
    {
        message.member.removeRole('594937324069060614')
        message.member.addRole('594969949202546716')
            .catch(console.error);
    }
    if(xp[message.author.id].level === 100)
    {
        message.member.removeRole('594969949202546716')
        message.member.addRole('594969944597332012')
            .catch(console.error);
    }
    });

    if(message.content.startsWith(prefix + "level")) {
        message.channel.bulkDelete(1)
        if(!xp[message.author.id]){
            xp[message.author.id] = {
                xp: 0,
                level: 1
            };
        }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtlvl = curlvl * 300;
    let difference = nxtlvl - curxp;

    const lvlEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#FFC0CB")
        .addField("XP", curxp, true)
        .addField("Rank", curlvl, true)
        .setFooter(`${difference} XP  until next rank!`, message.author.displayAvatarURL);
    message.channel.send(lvlEmbed)
    }
});

bot.login(process.env.BOT_TOKEN)
