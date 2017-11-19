const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const prefix = ">";




const helpE = new Discord.RichEmbed();
helpE.setTitle("Commands");
helpE.addField("Main Commands", "**>clan join [clan name]** : *Join the clan of your choice* \n **>clan leave** : *Leave the clan the you are currently in \n **>clans** : *A list of all clans!");
helpE.addBlankField();
helpE.addField("Fun Commands", "NONE AT THE MOMENT!");
helpE.setColor([83, 237, 0]);
helpE.setFooter("© ClansBot : Made for The 100 discord server");
helpE.setThumbnail("https://www.wpclipart.com/page_frames/full_page_signs/help_page_sign.png");

const clansE = new Discord.RichEmbed();
clansE.setTitle("Clans!");
clansE.setDescription("Trikru \n Azgeda \n Floukru \n Sankru \n Yujleda \n Ouskejon Kru \n Delfikru \n Trishana Kru \n Podakru \n Ingranrona Kru \n Boudalan Kru \n Louwoda Kliron \n Skaikru");
clansE.setColor([0, 209, 111]);
clansE.setThumbnail("https://ih0.redbubble.net/image.312073056.0000/pp,550x550.u2.jpg");
clansE.setFooter("© ClansBot : Made for The 100 discord server");


bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setPresence({status: 'dnd', game: {name : "🚀 The 100 ™"}});
    
});

  bot.on('message', message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return; 
    
    switch(args[0]) {

        case "help":

            message.author.send({embed: helpE});
            message.react("👌");
        break;

        case "clans":
            message.channel.send({embed: clansE});
        break;

        case "clan":
            if (args[1] == "join") {

            } else if (args[1] == "leave") {
                
            }
        break;

        default:
            message.reply("That is not a command!");
    }

  });

  bot.login(process.env.BOT_TOKEN);
