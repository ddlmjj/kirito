

  
  
  const Discord = require('discord.js');
  const fs = require('fs');
  const exp =require('./exp.json')


  const bot = new Discord.Client()

  const sauvegarde2 = require('./sauvegarde2.json')
  const sauvegarde = require('./sauvegarde.json')
  const compte = require('./compte.json')
  const channelC = require('./channel.json')
  const prefixe = require('./prefixes.json')
  const messageC = require('./messagerole.json')
 

  

  
   
  bot.on('ready', function () {
     console.log('bot lancer')
      bot.user.setActivity('sword art online')
      

    });

   bot.on('guildMemberAdd', function(member) {


    member.createDM().then(function (channel) {
      return channel.send('bienvenu sur le serveur')
     
    })
   })

   bot.on('messageReactionAdd', async reaction => {
     if(reaction.emoji === "⚔️") {
       const message = reaction.message
       
       if(!messageC[message.id]) return;
       
         message.reply(`vous aver accepter le combat merci d'aller a ${messageC[message.id].serveur}`)
         bot.channels.cache.get('707192424757329920').send('le combat a etait accepter')
         let embedCA = new Discord.MessageEmbed()
         .setTitle('au lanceur du defi')
         .addField("PV", 100)
         .addField("info", "cliquer sur les epee pour attaquerou sur le bouclier pour diminuer l'attaque")
         message.guild.channels.cache.get(messageC[message.id].channel).send(embedCA).then (async message => {
        
          await message.react('⚔️')
          await message.react('🛡️')
          messageC["combat"] = {
            1: messageC[message.id].lanceurdefi,
            2: message.author.id
          }
          fs.writeFile('messagerole.json', JSON.stringify(messageC), (err) => {
            if (err) throw err;
            
          });
        })
       }
     
   })
    
  bot.on('message', async message => {
    //console.log(message)
     
     if(message.author.bot) return;
    
     
     if(!prefixe[message.guild.id])
     prefixe[message.guild.id] = {
       prefixe: "K"
     }
     
    
     let prefix = (prefixe[message.guild.id].prefixe);
     let messageArray = message.content.split(' ');
     let commande = messageArray[0];
     let args = messageArray.slice(1);
     message.member.createDM().then(function (channel) {

     if(!messageC) {
      messageC["combat"] = {
        1: ""
     }
    }
    if(!channelC) {
      channelC["channel"] = {
        channel: ""
      }
    }
        
      if(!compte[message.author.id]) {
     compte[message.author.id] = {
      nom: "",
      argent: 0,
      exp: 0,
      inventaire: "",

    }
  }
        
        
        
       
     
     if(message.content === `${prefix}play`) {
      
      //if(message.author.username === 'THE D.D.L.M.') {
        
            
            //sauvegarde
           
            if(!sauvegarde[message.author.id]){
              sauvegarde[message.author.id] = {
               niveau: 1
               };
              };
                
               sauvegarde2[message.author.id] = {
                test: 2
              }
              //message.channel.send('envoyer un message quelquonque pour continuer');
              fs.writeFile('sauvegarde2.json', JSON.stringify(sauvegarde2), (err) => {
                if (err) throw err;
               });
               fs.writeFile('sauvegarde.json', JSON.stringify(sauvegarde), (err) => {
                if (err) throw err;
              });
            
          }
        
           
          
         //}
         // else message.channel.send('cette commande est en construction');
          //return; 
          
     
     
          if(sauvegarde2[message.author.id].test === 2) {
            //detection de la sauvegarde
           
            
            
           
            let detecsauv = sauvegarde[message.author.id].niveau
            if(detecsauv === 3) {
              //debut du jeu
       
              message.channel.send('bienvenu sur "wars of empire"');
              message.channel.send("comment vous appeler vous ? :(toute ecriture entre ~~ doit etre executer comme commande apres le prefix)");
              message.channel.send("~nom <votre nom>~");
              sauvegarde[message.author.id] = {
               sauvegarde: sauvegarde[message.author.id].niveau + 1
             }
         
                fs.writeFile('sauvegarde.json', JSON.stringify(sauvegarde), (err) => {
                 if (err) throw err;
               })
              
             }
             
               
               
       
               if(message.content === "Kquit") {
                  sauvegarde2[message.author.id] = {
                   test: 1
                 }
                 return fs.writeFile('sauvegarde2.json', JSON.stringify(sauvegarde2), (err) => {
                   if (err) throw err;
                 })
               }
            //chois du nom
            
            if(detecsauv === 2) {
              if(commande === 'Knom') {
                
               let nom = args[0]
               message.guild.channels.create(nom)
               
               compte[message.author.id] = {
                 nom: nom,
                 argent: 0,
                 exp: 0,
                 inventaire: "",

               }
                 
              }
            };
           
          
       }
    
     
     
       fs.writeFile('prefixes.json', JSON.stringify(prefixe), (err) => {
        if (err) throw err;
       })
       if(message.content === `help prefixe`) {
         message.channel.send(`le prefixe est ${prefix}`)
       }
   if(message.content === `${prefix}ping`) {
     //message pour verifier si le bot et connecter
    message.channel.send('pong')
   }
   if(commande === `commande admin exp +`) {
    if (message.author.id === "685863015396147202") {
      if(message.channel.id === "722084223892062228") {
        let exp =   args[0]
        let niveaux = args[1]
        message.channel.send(args[1])
        message.channel.send(args[0])
        exp[message.author.id] = {
          exp: exp,
          niveaux: niveaux
        }
         fs.writeFile('exp.json', JSON.stringify(exp), (err) => {
          if (err) throw err;
             
         })
  } else message.channel.send("vous n'etes pas sur le bon canal")
 } else message.channel.send("vous n'aver pas les droit")
}
   if(commande === `${prefix}profile`) {
    let embedP = new Discord.MessageEmbed()
    .setDescription(message.author)
    .setThumbnail(message.author.displayAvatarURL())
    .addField('userid', message.author.id)
    .addField('joinedDiscord', message.author.createdAt)
    .addField('joined serveur', message.member.guild.joinedTimestamp)
    message.channel.send(embedP)
   }
 if(commande === `${prefix}afktemp`) {
   if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("vous n'aver pas les droits");
   if (!args[0] || args[0] === "help") return message.reply('syntax: Kafktemp <le temp en seconde>');
   if (args[0] === "60" || args[0] === "300" || args[0] === "900" || args[0] === "1800" || args[0] === "3900") {
   let temp = args[0]
   message.guild.setAFKTimeout(temp)
   message.channel.send('le temp pour afk a etait initialiser')
   }
   else message.channel.send('le chiffre doit etre 60,300,900,1800,3900') 


 }
if(commande === `${prefix}stop`) {

  if(message.author.id === '685863015396147202') {
    message.reply('kirito est maintenant en maintenace')
    bot.destroy()
    
  } else message.reply(`vous n'aver pas les droit d'administrateur du bot test: ${message.author.id}`)

}
 if(commande === `${prefix}prefixe`) {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("vous n'aver pas les droits");
  if (!args[0] || args[0] === "help") return message.reply('syntax: Kprefixe <le nv prefixe>');
    let leprefixe = args[0]
    prefixe[message.guild.id] = {
      prefixe: leprefixe
    }
    message.channel.send(`@everyone prefixe devenu ${leprefixe}`)
    return  fs.writeFile('prefixes.json', JSON.stringify(prefixe), (err) => {
      if (err) throw err;
    })
   
       
    
}
      
   if(commande === `${prefix}lol`) {

 let test = (await bot.guilds.create('test 1')).addMember(message.author)
 channel.send(test)
 
   
       
    
   }
  
  
     
  if(message.content.startsWith('Kavatar')) {
    
    const userimage = message.mentions.users.first();

    if(!userimage) {
      //ton avatar
      let embedA = new Discord.MessageEmbed()
      .setTitle(`c'est l'avatar de ${message.author.username}`)
      
      .setColor('#00FFFF')
     .setImage(

      message.author.displayAvatarURL([4096])

      );
      message.channel.send(embedA)
    }
    //l'avatar deffinit pour la suite
    
    let embedavatar = new Discord.MessageEmbed()
    .setTitle(`c'est l'avatar de ${userimage.username}`)
    .setColor('#00FFFF')
    .setImage(userimage.displayAvatarURL('jpg', 32));
  message.channel.send(embedavatar)

    

  }
  if(commande === `${prefix}combat`) {
    const VS = message.mentions.users.first();
    if(!VS) return message.channel.send('merci de choisir un joueur contre qui jouer');
     let embedC = new Discord.MessageEmbed()
     .setTitle(`${message.author.username} vous propose un combat`)
     .addField('cliquer sur les epee pour accepter');
     
      VS.createDM().then(function (channel) {
        channel.send(embedC).then(async mgg => {
          await mgg.react('⚔️')
          messageC[mgg.id] = {
            joueur: VS.id,
            lanceurdefi: message.author.id,
            channel: message.channel.id,
            serveur: message.guild
          }
          fs.writeFile('messagerole.json', JSON.stringify(messageC), (err) => {
            if (err) throw err;
            
          });
        })

      })
  }
    
    
   if (message.content === `${prefix}help`) {
   let botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
   let embed = new Discord.MessageEmbed()
     .setDescription('commande et information sur le bot')
     .setColor(' #00FFFF')
     .setThumbnail(botIcon)
     .addField('nom du bot', bot.user.username)
     .addField('comande', '-----------')
     .addField(`${prefix}kick`, "pour virer qu'elle qu'un")
     .addField(`${prefix}ping`, "pour voir si le bot est connecter,en te repondant pong")
     .addField(`${prefix}help`, "pour obtenir de l'aide")
     .addField(`${prefix}play`, "pour lancer le jeu")
     .addField(`${prefix}exp`, "pour voir votre niveaux et l'exp")
     .addField(`${prefix}monnai`, "pour voir votre monnai")
     .addField(`${prefix}prefixe`, "pour changer le prefixe(droit d'admin obligatoire)")
     .addField(`${prefix}afktemp`, "pour changer le temp avant q'une perssone soit considerer afk")
      let member = message.member
      member.createDM().then(function (channel) {
        channel.send(embed)

      })
      message.reply('le message a bien ete envoyer')
   }
   
        
             
   const monnai = require('./message.json')
      if(!monnai[message.author.id]) {
        monnai[message.author.id] = {
         monnai: 0
       };
      }

       if(message.content === `${prefix}test`) {
        monnai[message.author.id] = {
          monnai: monnai[message.author.id].monnai + 100 
       };
      };
         
     
      fs.writeFile('message.json', JSON.stringify(monnai), (err) => {
        if (err) throw err;
        
      });
     

    let usermonnai = monnai[message.author.id].monnai;
    if(message.content === `${prefix}monnai`) {
      
     

      let monnaiembed = new Discord.MessageEmbed()
       .setAuthor(message.author.username)
       .setColor('#00FFFF')
       .addField(':moneybag:', usermonnai);

       message.channel.send(monnaiembed)
    
   }

    let addexp = ('1')
    if(!exp[message.author.id]) {
      exp[message.author.id] = {
        exp: 0,
        niveau: 1
      };

    }

    let currentexp = exp[message.author.id].exp;
    let curentniv = exp[message.author.id].niveau;
    let nextLevel = curentniv * 15
    exp[message.author.id] = {
     exp: exp[message.author.id].exp + 1,
     niveau: curentniv
    };
    let expNeedForlevel1up = nextLevel - currentexp;

    if(nextLevel <= currentexp) {
      exp[message.author.id].niveau += 1;
      exp[message.author.id].exp = 0;
      message.reply(`bravo vous ete paser au niveau ${curentniv + 1}`  ) 
    };
    fs.writeFile('exp.json', JSON.stringify(exp), (err) => {
      if (err) throw err;
      
    });
    
   if(commande === `${prefix}exp`) {
     if (!message.mentions.users.first()) {
    
     let nivembed = new Discord.MessageEmbed()
     .setAuthor(message.author.username)
     .setColor('#00FFFF')
     .addField('niveau', curentniv)
     .addField('experience', currentexp)
     .setFooter(
      `${expNeedForlevel1up} point d'experience requis pour le prochain niveau.`
     )
     message.channel.send(nivembed)
     }
     else {
       let nomE = message.mentions.users.first()
       let currentexp2 = exp[nomE.id].exp;
    let curentniv2 = exp[nomE.id].niveau;
    let nextLevel2 = curentniv2 * 15
    let expNeedForlevel1up2 = nextLevel2 - currentexp2;
    let nivembed = new Discord.MessageEmbed()
    .setAuthor(nomE.username)
    .setColor('#00FFFF')
    .addField('niveau', curentniv2)
    .addField('experience', currentexp2)
    .setFooter(
     `${expNeedForlevel1up2} point d'experience requis pour le prochain niveau.`
    )
    message.channel.send(nivembed)


     }
   }
    
   if(message.content === `${prefix}creation`) {
    if(message.author.id === '685863015396147202') {
      message.member.createDM().then(function (channel) {
      message.channel.send(`1`)
      bot.on('message', function (message3) {
       channel.send(message3)
      })
      message.channel.send(`2`)
      bot.on('message', function (message4){
        channel.send(message4)
      }) 
      message.channel.send(`3`)
      bot.on('message', function (message5) {
        console.log(message5)
      })
      message.channel.send(`4`)
      bot.on('message', function (message6) {
        channel.send(message6)
     })
      message.channel.send(`5`)
      bot.on('message', function (message7) {
        channel.send(message7)
     })
      message.channel.send(`6`)
      bot.on('message', function (message8) {
        channel.send(message8)
     })
    })
    }
  }
      let message3 = `Message {
           channel: TextChannel {
             type: 'text',
             deleted: false,
             id: '728620845001343070',
             name: 'maintenance',
             rawPosition: 0,
             parentID: null,
             permissionOverwrites: Collection [Map] {},
             topic: null,
             nsfw: false,
             lastMessageID: '729326316964544532',
             rateLimitPerUser: 0,
             lastPinTimestamp: null,
             guild: Guild {
               members: [GuildMemberManager],
              channels: [GuildChannelManager],
               roles: [RoleManager],
              presences: [PresenceManager],
               voiceStates: [VoiceStateManager],
               deleted: false,
               available: true,
               id: '728620844418596866',
               shardID: 0,
              name: 'maintenance kirito',
               icon: '2de1ca531b2c4d03b3b7bf22298117f3',
              splash: null,
               region: 'europe',
               memberCount: 2,
               large: false,
              features: [],
               applicationID: null,
               afkTimeout: 300,
             afkChannelID: null,
               systemChannelID: '728620845001343070',
               embedEnabled: undefined,
               premiumTier: 0,
               premiumSubscriptionCount: 0,
               verificationLevel: 'NONE',
               explicitContentFilter: 'DISABLED',
               mfaLevel: 0,
               joinedTimestamp: 1593796223756,
               defaultMessageNotifications: 'ALL',
               systemChannelFlags: [SystemChannelFlags],
               vanityURLCode: null,
               description: null,
              banner: null,
               rulesChannelID: null,
               publicUpdatesChannelID: null,
               ownerID: '685863015396147202',
               emojis: [GuildEmojiManager]
             },
             messages: MessageManager {
               cacheType: [Function: LimitedCollection],
               cache: [LimitedCollection [Map]],
               channel: [Circular]
             },
             _typing: Map { '685863015396147202' => [Object] }
           },
           deleted: false,
           id: '729326316964544532',
           type: 'DEFAULT',
           content: 'Kplay',
           author: User {
             id: '685863015396147202',
             bot: false,
             username: '𝕿𝕳𝕰 𝕯.𝕯.𝕷.𝕸.',
             discriminator: '1999',
             avatar: 'f409c08031df04fd69e6cde9c4c126f4',
            lastMessageID: '729326316964544532',
             lastMessageChannelID: '728620845001343070',
             flags: UserFlags { bitfield: 0 }
           },
          pinned: false,
           tts: false,
           nonce: '735497094256656384',
           system: false,
           embeds: [],
           attachments: Collection [Map] {},
           createdTimestamp: 1593955344192,
           editedTimestamp: null,
           reactions: ReactionManager {
             cacheType: [Function: Collection],
             cache: Collection [Map] {},
            message: [Circular]
           },
           mentions: MessageMentions {
             everyone: false,
             users: Collection [Map] {},
            roles: Collection [Map] {},
             _members: null,
             _channels: null,
             crosspostedChannels: Collection [Map] {}
           },
           webhookID: null,
           application: null,
          activity: null,
           _edits: [],
           flags: MessageFlags { bitfield: 0 },
           reference: null
         }`
        
  if(!sauvegarde2 || !sauvegarde2 || !compte || !channelC || !prefixe || messageC) {

} else {
  //message3.edit(sauvegarde2)
  //message4.edit(sauvegarde)
  //message5.edit(compte)
  //message6.edit(channelC)
  //message7.edit(prefixe)
  //message8.edit(messageC)
}
       
          if (message.content.startsWith(`${prefix}kick`)) {
            
           
            const user = message.mentions.users.first();
            
            if (user) {
             
              const member = message.guild.member(user);
              
              if (member) {
                
                member
                  .kick('Optional reason that will display in the audit logs')
                  .then(() => {
                   
                    message.reply(`vous aver kick ${user.tag}`);
                  })
                  .catch(err => {
                    
                    message.reply('vous ne pouver pas kick ce membre');
                    
                    console.error(err);
                  });
              } else {
               
                message.reply("cette user n'existe pas dans la serveure!");
              }
              
            } else {
              message.reply(`la mention du kick et pas bonne,essayer decrire le nom d'utilisateure a kick apres ${prefix}kick`);
            }
          }

          
          
        })  
  });  
  bot.login('NzA3OTE2NzM1NjEyODQ2MTUy.XuclEg.Yhe0QoKIulWrVa7049Eeba-6nxk');

