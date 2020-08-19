
  const Discord = require('discord.js');
  const fs = require('fs');
  

  const bot = new Discord.Client()

 //let sauvegardes2 = bot.channels.cache.get('728620845001343070').
 //let exps = ('ll')
 //let prefixes = 
 //let sauvegardes = 

 //fs.writeFile('sauvegarde.json', JSON.stringify(sauvegardes), (err) => {
  //if (err) throw err;
//})
 //fs.writeFile('prefixes.json', JSON.stringify(prefixes), (err) => {
  //if (err) throw err;
//})
 //fs.writeFile('exp.json', JSON.stringify(exps), (err) => {
  //if (err) throw err;
//})
 //fs.writeFile('sauvegarde2.json', JSON.stringify(sauvegardes2), (err) => {
  //if (err) throw err;
//})
  const YoutubeStream = require('ytdl-core')
  const monnai = require('./message.json')
  const sauvegarde2 = require('./sauvegarde2.json')
  const sauvegarde = require('./sauvegarde.json')
  const compte = require('./compte.json')
  const channelC = require('./channel.json')
  const prefixe = require('./prefixes.json')
  const messageC = require('./message.json')
  const exp = require('./exp.json')
  const rolecou = require('./rolecou.json')

rolecou["liste"] = []
 compte["arme"] = {
   baton_en_bois: ["arme"]
 }
  compte["defis"] = {
    defistotal: ["defis de l'avangarde"],
   1: ["defis de l'avagarde"],
   "defi de lavangarde" : [1,100,"terminer le donjon de l'avangarde",300]
  }

  
   
  
   //______________________________________________________________________________________________________________________________________________


   
  bot.on('ready', function () {
     console.log('bot lancer')
      bot.user.setActivity('k!help help prefixe')
     
      

    });
 //______________________________________________________________________________________________________________________________________________


   bot.on('guildMemberAdd', function(member) {


    member.createDM().then(function (channel) {
      return channel.send('bienvenu sur le serveur')
     
    })
   })

   //______________________________________________________________________________________________________________________________________________

   bot.on('messageReactionAdd', async reaction => {
     if(reaction.emoji === "⚔️") {
       const message = reaction.message
       
       if(!messageC[message.id]) return message.channel.send('errore')

       VS = messageC[message.id].autre
       VS.createDM().then(function (DM) {
         DM.send(`vous aver accepter le combat merci d'aller a ${messageC[message.id].serveur}`)
         bot.channels.cache.get(messageC[message.id]).send('le combat a etait accepter')
         let embedCA = new Discord.MessageEmbed()
         .setTitle('au lanceur du defi')
         .addField("PV", 100)
         .addField("info", "cliquer sur les epee pour attaquerou sur le bouclier pour diminuer l'attaque")
         
          DM.send(embedCA).then (async message => {
        
          await message.react('⚔️')
          await message.react('🛡️')
          messageC["combat"] = {
            1: messageC[message.id].lanceurdefi,
            2: messageC[message.id].joueur
          }
          fs.writeFile('messagerole.json', JSON.stringify(messageC), (err) => {
            if (err) throw err;
            
          });
        })
       })
      }
     })
     
   

   //______________________________________________________________________________________________________________________________________________
    
  bot.on('message', async message => {
    let test = "false"
    if(!test === "true" || message.author.id === "685863015396147202") {
     //______________________________________________________________________________________________________________________________________________

     if(message.author.bot) return;
    
    //______________________________________________________________________________________________________________________________________________ 

     if(!prefixe[message.guild.id])
     prefixe[message.guild.id] = {
       prefixe: "K"
     }
     
    //______________________________________________________________________________________________________________________________________________

     let prefix = (prefixe[message.guild.id].prefixe);
     let messageArray = message.content.split(' ');
     let commande = messageArray[0];
     let args = messageArray.slice(1);
     message.member.createDM().then(function (dm) {

     
    
      //const filter = m => message.content.startsWith('!vote');
      //message.channel.awaitMessages(filter,
        //{ max: 4, time: 60000, errors: 
       // ['time']})
        //.then(colected => console.log(colected.size))
        //.catch(collected => console.log(`after a minute, only ${collected.size} out of 4 voted`))
        
     
        
        
  //______________________________________________________________________________________________________________________________________________
       
     
     if(message.content === `${prefix}start`) {
      
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
              let role1 = message.guild.roles.cache.find(ro => ro.name === '@everyone')
             message.guild.channels.create(message.author.username).then(ca =>  {
               ca.createOverwrite(role1, {
               SEND_MESSAGES: false,
               VIEW_CHANNEL:false
               })
             
             ca.createOverwrite(message.author, {
              SEND_MESSAGES: true,
               VIEW_CHANNEL: true
             })
             
             compte[message.author.id] = {
              nom: message.author.username,
              argent: 0,
               exp: 0,
               nv: 1,
               inventaire: ["baton_en_bois"],
               defis: "",
              channel: ca.id,
              equiper: {
                u: "rien",
                d: "rien",
                t: "rien",
                q: "rien",
                c: "rien",
              },
              
             }
             
             ca.send(`bienvenu sur "wars empire
             que vouler vous faire ?`)
             fs.writeFile('compte.json', JSON.stringify(compte), (err) => {
              if (err) throw err;
              });
            })
            
             
              
      
              
              
              
    
   }
      fs.writeFile('compte.json', JSON.stringify(compte), (err) => {
      if (err) throw err;
      });
              fs.writeFile('sauvegarde2.json', JSON.stringify(sauvegarde2), (err) => {
                if (err) throw err;
               });
               fs.writeFile('sauvegarde.json', JSON.stringify(sauvegarde), (err) => {
                if (err) throw err;
              });
            
          
        
           
          
         //}
         // else message.channel.send('cette commande est en construction');
          //return; 
          
     
     //______________________________________________________________________________________________________________________________________________
     
     if(!compte[message.author.id].channel) return
     if(bot.channels.cache.find(ro => ro.id === compte[message.author.id].channel) === message.channel) {
       

     //______________________________________________________________________________________________________________________________________________

         if(commande === 'inventaire') {
           
           message.channel.send(compte[message.author.id].inventaire)
           return
         }

     //______________________________________________________________________________________________________________________________________________
        if(commande === "m'est arme") {
          message.channel.send(compte[message.author.id].equiper.u)
          message.channel.send(compte[message.author.id].equiper.d)
          message.channel.send(compte[message.author.id].equiper.t)
          message.channel.send(compte[message.author.id].equiper.q)
          message.channel.send(compte[message.author.id].equiper.c)
        }
     //______________________________________________________________________________________________________________________________________________

         if(commande === 'equiper') {
           if(!args[0]) return message.channel.send('specifier une arme a equiper')
          if(!compte[message.author.id].inventaire.includes(args[0])) return message.channel.send('vous ne posede pas cette objet ou elle est mal ortogrphier')
          if(compte["arme"][args[0]][0] === 'arme') compte[message.author.id].equiper.u = args[0]
            
          
            
          
          if(compte["arme"][args[0]][0] === 'haut') compte[message.author.id].equiper.d = args[0]
          if(compte["arme"][args[0]][0] === 'bas') compte[message.author.id].equiper.t = args[0]
          if(compte["arme"][args[0]][0] === 'bague') compte[message.author.id].equiper.q = args[0]
          if(compte["arme"][args[0]][0] === 'chaussure') compte[message.author.id].equiper.c = args[0]
          message.channel.send(`votre ${args[0]} a bien etait equiper`)
          

          
         }

     //______________________________________________________________________________________________________________________________________________

         if(commande === "defis") {
            message.channel.send(compte["defis"][compte[message.author.id].nv])
            message.channel.send(`pour des defis de plus bas nv demander a d'autre joueur ou regarder le salon defis ici:
            http:lllll`)
         }

     //______________________________________________________________________________________________________________________________________________

         if(commande === 'infos defis') {
           if(!args[1]) return messgae.channel.send('specifier un defi')
           if(!compte["defis"].defitotal.includes(args[1])) return message.channel.send("ce defi n'exciste pas ou est mal orthografier")
           let defis = compte["defis"][args[1]]
           let defi = new Discord.MessageEmbed()
           .setTitle(args[1])
           .addField("Niveaux", defis[0])
           .addField("sous a gagner", `${defis[1]} :moneybag:`)
           .addField("defi", defis[2])
           .addField("exp a gagner", defis[3]);
           message.channel.send(defi)
         }

     //______________________________________________________________________________________________________________________________________________

         if(commande === 'acepter defi') {
         if(!args[1]) return message.channel.send('preciser un defi')
         if(compte[message.author.id].defis) return message.channel.send('vous ne pouver pas faire ce defi car vous aver deja un defi en cours')
         if(!compte["defis"].defitotal.includes(args[1])) return message.channel.send('ce defi est inexistant ou est mal ortographier')
         if(!compte["defis"][args[1]][0] < compte[message.author.id].nv || !compte["defis"][args[1]][0] == compte[message.author.id].nv) return message.channel.send('vous ne posseder pas le nv pour faire ce defis')
         compte[message.author.id].defis = args[1]
        
         
         }

    //______________________________________________________________________________________________________________________________________________

         if(commande === "mon defi")  message.channel.send(compte[message.author.id].defis)
     
    //______________________________________________________________________________________________________________________________________________

    if(commande === "annuler mon defi")  compte[message.author.id].defis = ""

    //______________________________________________________________________________________________________________________________________________

    return fs.writeFile('compte.json', JSON.stringify(compte), (err) => {
      if (err) throw err;
      });


         
               
     }     
                 
              
            
           
          
       
    
     //______________________________________________________________________________________________________________________________________________
     
       fs.writeFile('prefixes.json', JSON.stringify(prefixe), (err) => {
        if (err) throw err;
       })

       //______________________________________________________________________________________________________________________________________________

       if(message.content === `help prefixe`) {
         message.channel.send(`le prefixe est ${prefix}`)
       }

       //______________________________________________________________________________________________________________________________________________

   if(message.content === `${prefix}ping`) {
     //message pour verifier si le bot et connecter
     const filteef = m => message.content.startsWith('Kvote');
      message.channel.awaitMessages(filteef,
        { max: 4, time: 60000, errors: 
        ['time']})
        .then(console.log('yes'))
        .catch(console.log(`zut`))
    message.channel.send('pong')
   }

   //______________________________________________________________________________________________________________________________________________

   if(commande === `commande admin exp +`) {
    if (message.author.id === "685863015396147202") {
      if(!args[4 || 5 || 6]) return message.channel.send('il manque des mot')
      
        let exp =   args[4]
        let niveaux = args[5]
        
        exp[args[6] || args[6].id] = {
          exp: exp,
          niveaux: niveaux
        }
         fs.writeFile('exp.json', JSON.stringify(exp), (err) => {
          if (err) throw err;
             
         })
  
 } else message.channel.send("vous n'aver pas les droit")
}

//______________________________________________________________________________________________________________________________________________

if(commande === `${prefix}regle`) {
 let test = message.content.split();
     
     let regle = test.slice(1);
     message.channel.send(regle)
     bot.on('message', function(regles) {
       //regles.react('')
     })
}


//______________________________________________________________________________________________________________________________________________
   if(commande === `${prefix}profile`) {
    const profile = message.mentions.users.first()
     if(!profile) {
    let embedP = new Discord.MessageEmbed()
    .setDescription(message.author)
    .setThumbnail(message.author.displayAvatarURL())
    .addField('userid', message.author.id)
    .addField('joinedDiscord', message.author.createdAt)
    .addField('joined serveur', message.member.guild.joinedAt)
    message.channel.send(embedP)
    
     }
     if(profile) {
      let embedP = new Discord.MessageEmbed()
      .setDescription(profile)
      .setThumbnail(profile.displayAvatarURL())
      .addField('userid', profile.id)
      .addField('joinedDiscord', profile.createdAt)
      .addField('joined serveur', profile.joinedAt)
      message.channel.send(embedP)
     }
   }

   //______________________________________________________________________________________________________________________________________________

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

 //______________________________________________________________________________________________________________________________________________

if(commande === `${prefix}stop`) {

  if(message.author.id === '685863015396147202') {
    message.reply('kirito est maintenant en maintenace')
    
    bot.destroy()
    
  } else message.reply(`vous n'aver pas les droit d'administrateur du bot vous ne pouver l'arreter`)

}

//______________________________________________________________________________________________________________________________________________

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
    });


   
}
//______________________________________________________________________________________________________________________________________________

if (commande === `${prefix}play`) {
if(message.member.voice.channel) {
  message.member.voice.channel.join().then(connection => {
  connection.play(YoutubeStream(args[0]))
  })
}
  

}



//______________________________________________________________________________________________________________________________________________

      if (commande === `${prefix}clear`) {
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("vous n'aver pas les droits");
    if (!args[0] || args[0] === "help") return message.reply('syntax: commande <le nombre de message a suprimer>');
    message.channel.bulkDelete(args[0])
    message.channel.send(`${args[0]} message suprimer :sob:`).then(msg => msg.delete(5000))
   }

   //______________________________________________________________________________________________________________________________________________

   if(commande === `${prefix}lol`) {
     if(!message.author.id === "685863015396147202") return message.channel.send("vous ne pouver executer cette commande si vous n'aver pas les droit d'admintarteur du bot")
    
    let test = new Discord.MessageEmbed()
     .setDescription('commande et information sur le bot')
     .setColor(' #00FFFF')
     
     .addField(`et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
     let embed = new Discord.MessageEmbed()
       .setDescription('commande et information sur le bot')
       .setColor(' #00FFFF')
       .setThumbnail(botIcon)
       .addField('nom du bot', bot.user.username)
       .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
       let embed = new Discord.MessageEmbed()
         .setDescription('commande et information sur le bot')
         .setColor(' #00FFFF')
         .setThumbnail(botIcon)
         .addField('nom du bot', bot.user.username)
         .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
         let embed = new Discord.MessageEmbed()
           .setDescription('commande et information sur le bot')
           .setColor(' #00FFFF')
           .setThumbnail(botIcon)
           .addField('nom du bot', bot.user.username)
           .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
           let embed = new Discord.MessageEmbed()
             .setDescription('commande et information sur le bot')
             .setColor(' #00FFFF')
             .setThumbnail(botIcon)
             .addField('nom du bot', bot.user.username)
             .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
             let embed = new Discord.MessageEmbed()
               .setDescription('commande et information sur le bot')
               .setColor(' #00FFFF')
               .setThumbnail(botIcon)
               .addField('nom du bot', bot.user.username)
               .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
               let embed = new Discord.MessageEmbed()
                 .setDescription('commande et information sur le bot')
                 .setColor(' #00FFFF')
                 .setThumbnail(botIcon)
                 .addField('nom du bot', bot.user.username)
                 .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                 let embed = new Discord.MessageEmbed()
                   .setDescription('commande et information sur le bot')
                   .setColor(' #00FFFF')
                   .setThumbnail(botIcon)
                   .addField('nom du bot', bot.user.username)
                   .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                   let embed = new Discord.MessageEmbed()
                     .setDescription('commande et information sur le bot')
                     .setColor(' #00FFFF')
                     .setThumbnail(botIcon)
                     .addField('nom du bot', bot.user.username)
                     .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                     let embed = new Discord.MessageEmbed()
                       .setDescription('commande et information sur le bot')
                       .setColor(' #00FFFF')
                       .setThumbnail(botIcon)
                       .addField('nom du bot', bot.user.username)
                       .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                       let embed = new Discord.MessageEmbed()
                         .setDescription('commande et information sur le bot')
                         .setColor(' #00FFFF')
                         .setThumbnail(botIcon)
                         .addField('nom du bot', bot.user.username)
                         .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                         let embed = new Discord.MessageEmbed()
                           .setDescription('commande et information sur le bot')
                           .setColor(' #00FFFF')
                           .setThumbnail(botIcon)
                           .addField('nom du bot', bot.user.username)
                           .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                           let embed = new Discord.MessageEmbed()
                             .setDescription('commande et information sur le bot')
                             .setColor(' #00FFFF')
                             .setThumbnail(botIcon)
                             .addField('nom du bot', bot.user.username)
                             .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                             let embed = new Discord.MessageEmbed()
                               .setDescription('commande et information sur le bot')
                               .setColor(' #00FFFF')
                               .setThumbnail(botIcon)
                               .addField('nom du bot', bot.user.username)
                               .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                               let embed = new Discord.MessageEmbed()
                                 .setDescription('commande et information sur le bot')
                                 .setColor(' #00FFFF')
                                 .setThumbnail(botIcon)
                                 .addField('nom du bot', bot.user.username)
                                 .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                                 let embed = new Discord.MessageEmbed()
                                   .setDescription('commande et information sur le bot')
                                   .setColor(' #00FFFF')
                                   .setThumbnail(botIcon)
                                   .addField('nom du bot', bot.user.username)
                                   .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                                   let embed = new Discord.MessageEmbed()
                                     .setDescription('commande et information sur le bot')
                                     .setColor(' #00FFFF')
                                     .setThumbnail(botIcon)
                                     .addField('nom du bot', bot.user.username)
                                     .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                                     let embed = new Discord.MessageEmbed()
                                       .setDescription('commande et information sur le bot')
                                       .setColor(' #00FFFF')
                                       .setThumbnail(botIcon)
                                       .addField('nom du bot', bot.user.username)
                                       .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                                       let embed = new Discord.MessageEmbed()
                                         .setDescription('commande et information sur le bot')
                                         .setColor(' #00FFFF')
                                         .setThumbnail(botIcon)
                                         .addField('nom du bot', bot.user.username)
                                         .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
   let embed = new Discord.MessageEmbed()
     .setDescription('commande et information sur le bot')
     .setColor(' #00FFFF')
     .setThumbnail(botIcon)
     .addField('nom du bot', bot.user.username)
     .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
     let embed = new Discord.MessageEmbed()
       .setDescription('commande et information sur le bot')
       .setColor(' #00FFFF')
       .setThumbnail(botIcon)
       .addField('nom du bot', bot.user.username)
       .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
       let embed = new Discord.MessageEmbed()
         .setDescription('commande et information sur le bot')
         .setColor(' #00FFFF')
         .setThumbnail(botIcon)
         .addField('nom du bot', bot.user.username)
         .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
         let embed = new Discord.MessageEmbed()
           .setDescription('commande et information sur le bot')
           .setColor(' #00FFFF')
           .setThumbnail(botIcon)
           .addField('nom du bot', bot.user.username)
           .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
           let embed = new Discord.MessageEmbed()
             .setDescription('commande et information sur le bot')
             .setColor(' #00FFFF')
             .setThumbnail(botIcon)
             .addField('nom du bot', bot.user.username)
             .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
             let embed = new Discord.MessageEmbed()
               .setDescription('commande et information sur le bot')
               .setColor(' #00FFFF')
               .setThumbnail(botIcon)
               .addField('nom du bot', bot.user.username)
               .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
               let embed = new Discord.MessageEmbed()
                 .setDescription('commande et information sur le bot')
                 .setColor(' #00FFFF')
                 .setThumbnail(botIcon)
                 .addField('nom du bot', bot.user.username)
                 .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                 let embed = new Discord.MessageEmbed()
                   .setDescription('commande et information sur le bot')
                   .setColor(' #00FFFF')
                   .setThumbnail(botIcon)
                   .addField('nom du bot', bot.user.username)
                   .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                   let embed = new Discord.MessageEmbed()
                     .setDescription('commande et information sur le bot')
                     .setColor(' #00FFFF')
                     .setThumbnail(botIcon)
                     .addField('nom du bot', bot.user.username)
                     .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                     let embed = new Discord.MessageEmbed()
                       .setDescription('commande et information sur le bot')
                       .setColor(' #00FFFF')
                       .setThumbnail(botIcon)
                       .addField('nom du bot', bot.user.username)
                       .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                       let embed = new Discord.MessageEmbed()
                         .setDescription('commande et information sur le bot')
                         .setColor(' #00FFFF')
                         .setThumbnail(botIcon)
                         .addField('nom du bot', bot.user.username)
                         .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                         let embed = new Discord.MessageEmbed()
                           .setDescription('commande et information sur le bot')
                           .setColor(' #00FFFF')
                           .setThumbnail(botIcon)
                           .addField('nom du bot', bot.user.username)
                           .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                           let embed = new Discord.MessageEmbed()
                             .setDescription('commande et information sur le bot')
                             .setColor(' #00FFFF')
                             .setThumbnail(botIcon)
                             .addField('nom du bot', bot.user.username)
                             .addField('comande', '-----------')et botIcon = ('https://i.pinimg.com/originals/d8/c3/9e/d8c39e916b2cb66c347dd5c5355d1f7e.jpg');
                             let embed = new Discord.MessageEmbed()
                               .setDescription('commande et information sur le bot')
                               .setColor(' #00FFFF')
                               .setThumbnail(botIcon)
                               .addField('nom du bot', bot.user.username)
                               .addField('comande', '-----------')`)
    
message.channel.send(test)




    
     }
  //______________________________________________________________________________________________________________________________________________

if(commande === `${prefix}rolecouleur`)
message.guild.roles.create({
  data: {
    name: 'role couleur',
    color: 'WHITE'
  }
}).then(ro => {
  rolecou[message.guild.id] = {
    rolecou: ro
  }
  rolecou["liste"].push(message.guild.id)
})


  //______________________________________________________________________________________________________________________________________________


  if(message.content.startsWith(`${prefix}avatar`)) {
    
    const userimage = message.mentions.users.first();

    if(!userimage) {
      //ton avatar
      let embedA = new Discord.MessageEmbed()
      .setTitle(`c'est l'avatar de ${message.author.username}`)
      
      .setColor('#00FFFF')
     .setImage(

      message.author.displayAvatarURL().big()

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

  //______________________________________________________________________________________________________________________________________________
  
  
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
            serveur: message.guild,
            autre: VS
          }
          fs.writeFile('messagerole.json', JSON.stringify(messageC), (err) => {
            if (err) throw err;
            
          });
        })

      })
  }


  //______________________________________________________________________________________________________________________________________________ 
    
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
   
        
             
   //______________________________________________________________________________________________________________________________________________
      
   if(!monnai[message.author.id]) {
        monnai[message.author.id] = {
         monnai: 0
       };
      }

     //______________________________________________________________________________________________________________________________________________
       
     if(message.content === `${prefix}test`) {
        monnai[message.author.id] = {
          monnai: monnai[message.author.id].monnai + 100 
       };
      };

    //______________________________________________________________________________________________________________________________________________
     
      fs.writeFile('message.json', JSON.stringify(monnai), (err) => {
        if (err) throw err;
        
      });
     

    let usermonnai = monnai[message.author.id].monnai;

    //______________________________________________________________________________________________________________________________________________
    if(message.content === `${prefix}monnai`) {
      
     

      let monnaiembed = new Discord.MessageEmbed()
       .setAuthor(message.author.username)
       .setColor('#00FFFF')
       .addField(':moneybag:', usermonnai);

       message.channel.send(monnaiembed)
    
   }


//______________________________________________________________________________________________________________________________________________
    
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
    //______________________________________________________________________________________________________________________________________________
   
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
    
   
   //______________________________________________________________________________________________________________________________________________

   if (message.content.startsWith(`${prefix}ban`)) {
  const userban = message.mentions.users.first();


  
  if(userban) {
    const userbann = message.guild.member(userban)

    userbann.ban().then(message.reply(`vous aver banne ${userban}`)).catch(message.reply("vous ne pouver pas banne cette user"))
  }else message.channel.send('definiser un user ou user inconu')
}

//______________________________________________________________________________________________________________________________________________

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

    //______________________________________________________________________________________________________________________________________________
          
          
        }) 
      } 
  });  

  
   //sauvegarde2 = require('./sauvegarde2.json')
   //sauvegarde = require('./sauvegarde.json')
   //prefixe = require('./prefixes.json')
  //exp = require('./exp.json')
//______________________________________________________________________________________________________________________________________________

  //bot.channels.cache.get('728620845001343070').messages.cache.get('739520844492963950').edit(sauvegarde2) ;
  //bot.channels.cache.get('728620845001343070').messages.cache.get('739520871021936680').edit(exp) ;
  //bot.channels.cache.get('728620845001343070').messages.cache.get('739520883202457610').edit(prefixe);


  //______________________________________________________________________________________________________________________________________________

  bot.login(process.env.TOKEN);
