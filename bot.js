const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const prefix = ">";



// WHAT THE MESSAGE IS FOR >help
const helpE = new Discord.RichEmbed();
helpE.setTitle("Commands");
helpE.addField("Main Commands", "**>clan join [clan name]** : *Join the clan of your choice!* \n **>clan leave** : *Leave the clan the you are currently in!* \n **>clans** : *A list of all clans!*");
helpE.addBlankField();
helpE.addField("Fun Commands", "NONE AT THE MOMENT!");
helpE.setColor([83, 237, 0]);
helpE.setFooter("© ClansBot : Made for The 100 discord server");
helpE.setThumbnail("https://www.wpclipart.com/page_frames/full_page_signs/help_page_sign.png");

// WHAT THE MESSAGE IS FOR >clans
const clansE = new Discord.RichEmbed();
clansE.setTitle("Clans!");
clansE.setDescription("Trikru \n Azgeda \n Floukru \n Sankru \n Yujleda \n Ouskejon Kru \n Delfikru \n Trishana Kru \n Podakru \n Ingranrona Kru \n Boudalan Kru \n Louwoda Kliron \n Skaikru");
clansE.setColor([0, 209, 111]);
clansE.setThumbnail("https://ih0.redbubble.net/image.312073056.0000/pp,550x550.u2.jpg");
clansE.setFooter("© ClansBot : Made for The 100 discord server");


// THIS IS A FUNCTION FOR WHEN THE BOT STARTS
bot.on('ready', () => {
    console.log('I am ready!');
    
    // SETS THE BOT TO DND AND THAT GAME
    bot.user.setPresence({status: 'dnd', game: {name : "🚀 The 100 ™"}});
    
});


    // THIS IS A FUNCTION FOR WHEN A MESSAGE IS PUT OUT
  bot.on('message', message => {
      
      // ARGS
    var args = message.content.substring(prefix.length).split(" ");
      
      // CHECKING TO SEE IF THERE IS A PREFIX
    if (!message.content.startsWith(prefix)) return; 
    
    switch(args[0]) {
            
        // WHAT HAPPENS WHEN >help IS RAN
            
        case "help":

                                //THIS SENDS THE HELPE MESSAGE
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
