const Discord = require('discord.js');
const bot = new Discord.Client();
const talkedRecently = new Set();
const prefix = '%';

const clansE = new Discord.RichEmbed();
clansE.setTitle("Clans!");
clansE.setDescription("trikru \n azgeda \n floukru \n sankru \n yujleda \n ouskejonkru \n delfikru \n trishanakru \n podakru \n ingranronakru \n boudalankru \n louwodakliron \n skaikru");
clansE.setColor([0, 209, 111]);
clansE.setThumbnail("https://ih0.redbubble.net/image.312073056.0000/pp,550x550.u2.jpg");
clansE.setFooter("© ClansBot : Made for The 100 discord server");

const helpE = new Discord.RichEmbed();
helpE.setTitle("Commands");
helpE.addField("Main Commands", "**%clan join [clan name]** : *Join the clan of your choice* \n **%clan leave** : *Leave the clan the you are currently in* \n **%clans** : *A list of all clans!*");
helpE.addBlankField();
helpE.addField("Fun Commands", "NONE AT THE MOMENT!");
helpE.setColor([83, 237, 0]);
helpE.setFooter("© ClansBot : Made for The 100 discord server");
helpE.setThumbnail("https://www.wpclipart.com/page_frames/full_page_signs/help_page_sign.png");

bot.on('ready', () => {
    console.log('I am ready!');
    bot.user.setPresence({status: 'dnd', game: {name : "With yo mom!"}});
  });

  bot.on('message', message => {
    if (!message.content.startsWith(prefix)) return;


    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case "clans":
            message.channel.send({embed: clansE});
        break;
        case "help":
            message.author.send({embed: helpE});
            message.react("👌");
        case "clan":


        let Trikru = message.guild.roles.find("name", "Trikru");
        let Azgeda = message.guild.roles.find("name", "Azgeda");
        let Floukru = message.guild.roles.find("name", "Floukru");
        let Sankru = message.guild.roles.find("name", "Sankru");
        let Yujleda = message.guild.roles.find("name", "Yujleda");
        let Ouskejonkru = message.guild.roles.find("name", "Ouskejonkru")
        let Delfikru = message.guild.roles.find("name", "Delfikru");
        let Trishanakru = message.guild.roles.find("name", "Trishanakru");
        let Podakru = message.guild.roles.find("name", "Podakru");
        let Ingranronakru = message.guild.roles.find("name", "Ingranronakru");
        let Boudalankru = message.guild.roles.find("name", "Boudalankru");
        let Louwodakliron = message.guild.roles.find("name", "Louwodakliron");
        let Skaikru = message.guild.roles.find("name", "Skaikru");
        
            if (args[1] == "join") {
                if (message.member.roles.some(r=>["Trikru", "Azgeda", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Skaikru"].includes(r.name))) {
                    message.reply("You already are in a clan! If you wish to leave yout clan do | %clan leave");
                    return;
                }
                if(talkedRecently.has(message.author.id)) return;
            if (args[2] == "skaikru") {
                message.member.addRole(Skaikru.id);
                message.react("👌");
            }
            if (args[2] == "trikru") {
                
                message.member.addRole(Trikru.id);
                message.react('👌');

            }
            if (args[2] == "azgeda") {
                
                message.member.addRole(Azgeda.id);
                message.react('👌');

            }
            if (args[2] == "floukru") {
                
                message.member.addRole(Floukru.id);
                message.react('👌');

            }
            if (args[2] == "sankru") {
                
                message.member.addRole(Sankru.id);
                message.react('👌');

            }
            if (args[2] == "yujleda") {
                
                message.member.addRole(Yujleda.id);
                message.react('👌');

            }
            if (args[2] == "ouskejonkru") {
                
                message.member.addRole(Ouskejonkru.id);
                message.react('👌');

            }
            if (args[2] == "delfikru") {
                
                message.member.addRole(Delfikru.id);
                message.react('👌');

            }
            if (args[2] == "trishanakru") {
                
                message.member.addRole(Trishanakru.id);
                message.react('👌');

            }
            if (args[2] == "louwodakliron") {
                
                message.member.addRole(Louwodakliron.id);
                message.react('👌');

            }
            if (args[2] == "podakru") {
                
                message.member.addRole(Podakru.id);
                message.react('👌');

            }
            if (args[2] == "ingranronakru") {
                
                message.member.addRole(Ingranronakru.id);
                message.react('👌');

            }
            if (args[2] == "boudalankru") {
                
                message.member.addRole(Boudalankru.id);
                message.react('👌');

            }

        } 

        if (args[1] == "leave") {
            if (!message.member.roles.some(r=>["Trikru", "Azgeda", "Floukru", "Sankru", "Yujleda", "Ouskejonkru", "Delfikru", "Trishanakru", "Podakru", "Ingranronakru", "Boudalankru", "Louwodakliron", "Skaikru"].includes(r.name))) {
                message.reply("why do you want to leave a clan when you are not in it! (P.S. Do %clan join [CLAN NAME] to join a clan!) ");
            }
            talkedRecently.add(message.author.id);
            
                setTimeout(() => {
            
                talkedRecently.add(message.author.id)
            
            }, 157680000);
            if (message.member.roles.has(Skaikru.id)){
                message.member.removeRole(Skaikru.id);
                message.react("👌");
            }
            if (message.member.roles.has(Trikru.id)) {
                message.member.removeRole(Trikru.id);
                message.react("👌");
                console.log("15");
            }
            if (message.member.roles.has(Azgeda.id)) {
                message.member.removeRole(Trikru.id);
                message.react("👌");
                console.log("16");
            }
            if (message.member.roles.has(Floukru.id)) {
                message.member.removeRole(Floukru.id);
                message.react("👌");
                console.log("17");
            }
            if (message.member.roles.has(Sankru.id)) {
                message.member.removeRole(Sankru.id);
                message.react("👌");
                console.log("18");
            }
            if (message.member.roles.has(Yujleda.id)) {
                message.member.removeRole(Yujleda.id);
                message.react("👌");
                console.log("19");
            }
            if (message.member.roles.has(Ouskejonkru.id)) {
                message.member.removeRole(Ouskejonkru.id);
                message.react("👌");
                console.log("20");
            }
            if (message.member.roles.has(Delfikru.id)) {
                message.member.removeRole(Delfikru.id);
                message.react("👌");
                console.log("21");
            }
            if (message.member.roles.has(Trishanakru.id)) {
                message.member.removeRole(Trishanakru.id);
                message.react("👌");
                console.log("22");
            }
            if (message.member.roles.has(Podakru.id)) {
                message.member.removeRole(Podakru.id);
                message.react("👌");
                console.log("23");
            }
            if (message.member.roles.has(Ingranronakru.id)) {
                message.member.removeRole(Ingranronakru.id);
                message.react("👌");
                console.log("24");
            }
            if (message.member.roles.has(Boudalankru.id)) {
                message.member.removeRole(Boudalankru.id);
                message.react("👌");
                console.log("25");
            }
            if (message.member.roles.has(Louwodakliron.id)) {
                message.member.removeRole(Louwodakliron.id);
                message.react("👌");
                console.log("26");
            }
        }
    
        break;

    } 

  bot.login(process.env.BOT_TOKEN);
