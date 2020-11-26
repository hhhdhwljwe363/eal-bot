const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://pros-betaa.glitch.me/`);
}, 280000);
 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
const cd = require('countdown');
const totime = require('to-time');
const Enmap = require('enmap');
const dbg = new Enmap({ name: 'Giveaway' });
client.login(process.env.TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/////////////////////////////////////////////////////////////
client.on('ready', () => {
 client.user.setStatus("online")
});
client.on('ready', () => {
     client.user.setActivity(`user|${client.users.size} |serveer|${client.guilds.size}`,{type: 'playing'});
 
});
////
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content == prefix + "ping") {
 message.channel.send('› pong | :ping_pong: ').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\n› Time taken: ${PinG} ms.\n› Discord API: ${ApL} ms.\`\`\``);
 })
  }  
 });
/////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content == prefix + 'allbot') {
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots inServer**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


////////////////////////////////////////////////////////
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "allllll") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          ` **-** **Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `**-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///////////////////////////////////////////////////////////////////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "ct") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        " **-** **You Don't Have `MANAGE_CHANNELS` Premissions**"
      );
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "text");
    message.channel.sendMessage(
      "**-** **تــم انـشـاء روم كـتــابــي**"
    );
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "cv") {
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply(
        " **-** **You Don't Have `MANAGE_CHANNELS` Premissions**"
      );
    let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(" "), "voice");
    message.channel.sendMessage(
      "**-** **تــم انـشـاء روم صـوتــي"
    );
  }
});

/////////////////////////////////////////////////
client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed().setImage("")
    .setDescription(`**Thank You for Add Real Bot To Server**
   **Support Server** [https://discord.gg/ZGb6qGSyq6]`);
  guild.owner.send(embed);
});
///////////////////////////////////////////////////////////////////////
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "settings limits")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(`**لا تستطيع استخدام هذا الامر**`);
    if (message.content.startsWith(prefix + "settings limitsban")) {
      if (!num) return message.channel.send("** أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("** أرقام فقط ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "settings limitskick")) {
      if (!num) return message.channel.send("** أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("** أرقام فقط ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleD")) {
      if (!num) return message.channel.send("** أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("** أرقام فقط ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitsroleC")) {
      if (!num) return message.channel.send("** أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("** أرقام فقط ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitschannelD")) {
      if (!num) return message.channel.send("** أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("** أرقام فقط ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "settings limitstime")) {
      if (!num) return message.channel.send("** أرسل رقم ! **");
      if (isNaN(num)) return message.channel.send("** أرقام فقط ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `** تم التغيير اِلي : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
client.on("channelDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`)
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {   
  if (message.content === prefix + "supp") {
   const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.setDescription('🛠️|[support](https://discord.gg/hCGwzrFqFm)') 


message.channel.sendEmbed(embed);
 }
});
/////////////////////////////////////////////////////////////////////////////
client.on("message",message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
    if(message.content.startsWith(prefix + "avatar")){
  const mention = message.mentions.users.first()
  
  if(!mention) return console.log("") 
  let embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setAuthor(`${mention.username}#${mention.discriminator}`,`${mention.avatarURL}`) 
  .setTitle("Avatar Link")
  .setURL(`${mention.avatarURL}`)
  .setImage(`${mention.avatarURL}`)
  .setFooter(`Requested By ${message.author.tag}`,`${message.author.avatarURL}`)    
      message.channel.send(embed)
  }
  })
 //////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content.startsWith( prefix + "infobot")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('\`\`\`Info The Bot\`\`\`')
     .addField('> <a:pp515:780827200806846496>-My Ping' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('> <a:pp515:780827200806846496>-servers', [client.guilds.size], true)
     .addField('> <a:pp515:780827200806846496>-channels`' , `[ ${client.channels.size} ]` , true)
     .addField('> <a:pp515:780827200806846496>-Users' ,`[ ${client.users.size} ]` , true)
     .addField('> <a:pp515:780827200806846496>-My Name' , `[ ${client.user.tag} ]` , true)
     .addField('> <a:pp515:780827200806846496>-My ID' , `[ ${client.user.id} ]` , true)
           .addField('> <a:pp515:780827200806846496>-My Prefix' , `[ $ ]` , true)
           .addField('> <a:pp515:780827200806846496>-My Language' , `[ Python ]` , true)
           .addField('> <a:pp515:780827200806846496>-developers' , `[<@614941893419073557>]` , true)
           .setFooter('')
           
  })
  }
  });

//////////////////////////////////////////////////////
client.on('message', function(msg) {

  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`,true)
    .addField(':id: **Server ID:**',`${msg.guild.id}`,true)
    .addField('📅** Created On**',msg.guild.createdAt.toLocaleString())
    .addField('👑** Owned By**',`${msg.guild.owner}`,true)
    .addField(':busts_in_silhouette:  **Members **' + `[ ${msg.guild.memberCount} ]`,`**${msg.guild.members.filter(m=>m.presence.status == 'online').size}**` + ' Online')
    .addField(':speech_balloon: Channels ' + `[ ${msg.guild.channels.size} ]`,`**${msg.guild.channels.filter(m => m.type === 'text').size}**` + ' Text | ' + `**${msg.guild.channels.filter(m => m.type === 'voice').size}**` + ' Voice')//tt
    .addField(':earth_africa: Others','**Region: **' + `${msg.guild.region}` + ' **Verification Level:** ' + `${msg.guild.verificationLevel}`)
    .addField(':closed_lock_with_key:** Rules **' + `[ ${msg.guild.roles.size} ]`,'To see a list with all roles use **$roles**');
    msg.channel.send({embed:embed});
  }
});

////////////////////////////////////////////////////////
///user
client.on("message", pixelbot => {

  if (pixelbot.content.startsWith(prefix + "user")) {

    if (pixelbot.author.bot) return;
    if (!pixelbot.guild)
      return pixelbot.reply("**:x: - This Command is only done on Servers**");
    pixelbot.guild.fetchInvites().then(invites => {

      let personalInvites = invites.filter(
        i => i.inviter.id === pixelbot.author.id
      );
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var roles = pixelbot.member.roles
        .map(roles => `**__${roles.name}__ |**`)
        .join(` `);
      let pixeluser = new Discord.RichEmbed() 
        .setColor("#00000")
        .setTitle(" :beginner: :heartpulse:   | User Info") 
        .setAuthor(pixelbot.author.username, pixelbot.author.avatarURL)
        .addField("** Name :**   ", pixelbot.author.username, true)
        .addField("** Tag :**   ", pixelbot.author.discriminator, true)
        .addField("** ID :** ", pixelbot.author.id, true) 
        .addField(
          "**Joined At :**   ",
          moment(pixelbot.joinedAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField(
          "**Created At :**    ",
          moment(pixelbot.author.createdAt).format("D/M/YYYY h:mm a "),
          true
        )
        .addField("**Total invites :**    ", inviteCount, true)
        .setTimestamp(); 

      pixelbot.channel.sendEmbed(pixeluser).then(c => {}); 
    });
  }
}); 


///////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content.startsWith(prefix + 'roles')) {

      const Rank = message.guild.roles.map(e => e.toString()).join(" ");

      const RankList = new Discord.RichEmbed()
          .setTitle('Roles.')
          .setAuthor(message.guild.name, message.guild.iconURL)
          .setColor('RANDOM')
          .setDescription(Rank)
          .setFooter(message.guild.name)
      message.channel.send(RankList)
  }
});
/////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (message.author.bot) return;
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1) return message.reply("");
    if (!reason) return message.reply("**اكتب سبب الطرد**");
    if (!message.guild.member(user).kickable)
      return message.reply(
        "**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**"
      );
    if (
      message.mentions.members.first().highestRole.position >=
      message.member.highestRole.position
    )
      return message.channel.send("ما تقدر تطرد شخص رتبته اعلى منك!");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
      .setAuthor(`KICKED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**User:**", "**[ " + `${user.tag}` + " ]**")
      .addField("**By:**", "**[ " + `${message.author.tag}` + " ]**")
      .addField("**Reason:**", "**[ " + `${reason}` + " ]**");
    message.channel.send({
      embed: kickembed
    });
  }
});


///ban
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split("")[0];
  command = command.slice(prefix.length);

  let args = message.content.split("").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("****");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**add baan${user.tag}`)

}
});
client.on('message', message => {
        if(message.content === prefix + "hide") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('**<a:pp962:780826702792097803>|تـم أخفـاء الشـات**')
   }
  });
  
  
  client.on('message', message => {
        if(message.content === prefix + "show") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('**<a:pp558:780826692565729363>|تـم أظهـار الشـات**')
   }
  });

/// lock unlock
client.on('message', message => {

  if(message.content === `${prefix}lock`) {
                      if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: false

         }).then(() => {
             message.reply("** <a:pp962:780826702792097803> | تـم قفـل الشـات  **")
         });
           }

if(message.content === `${prefix}unlock`) {
                   if(!message.channel.guild) return message.reply('** This command only for servers ❌ **');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('** You dont have `MANAGE_CHANNELS` permission **');
         message.channel.overwritePermissions(message.guild.id, {
       SEND_MESSAGES: true

         }).then(() => {
             message.reply("**<a:pp558:780826692565729363>| تـم فتـح الشـات **")
         });
           }
           
    
  
});
/*
///mute unmute


*/
client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": عدد الرسائل التي تم مسحها" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": عدد الرسائل التي تم مسحها" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});
//say embad

client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("للأسف لا تمتلك صلاحية ADMINISTRATOR");
    message.delete();
    message.channel.sendMessage(args.join(" "));
  }

  if (command == "embed") {
    if (!message.channel.guild)
      return message.channel
        .send("هذا الأمر فقط للسيرفرات")
        .then(m => m.delete(5000));
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("للأسف لا تمتلك صلاحية MANAGE_MESSAGES");
    let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(0x23b2d6);
    message.channel.sendEmbed(say);
    message.delete();
  }
});

client.on("message", message => {
  let roleembed = new Discord.RichEmbed()
.setDescription(``)
.setFooter('By'+message.author.username, message.author.avatarURL)
var args = message.content.split(' ').slice(1);
var msg = message.content.toLowerCase();
if( !message.guild ) return;
if( !msg.startsWith( prefix + 'role' ) ) return;
if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
    if( !args[0] ) return message.channel.sendEmbed(roleembed)
    if( !args[1] ) return message.channel.sendEmbed(roleembed)
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**يرجى وضع الرتبة المراد اعطائها الى الشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]تم اعطاء الى الكل رتبة**');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]تم اعطاء الى البوتات رتبة**');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ]تم إعطاء رتبة**');
    }  
} else {
    if( !args[0] ) return message.reply( '** يرجى وضع الشخص المراد اعطائها الرتبة**' );
    if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
    var role = msg.split(' ').slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
    if( !role1 ) return message.reply( '**يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
        message.mentions.members.first().addRole( role1 );
        return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
    }
    if( args[0].toLowerCase() == "all" ){
        message.guild.members.forEach(m=>m.addRole( role1 ))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
    } else if( args[0].toLowerCase() == "bots" ){
        message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
    } else if( args[0].toLowerCase() == "humans" ){
        message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
        return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء رتبة**');
    }
}
});
// ------------ = [Voice Commands] = ------------

 client.on('message', message => {
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });

////////////////
client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "help") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#0C0C49')
        const embed = new Discord.RichEmbed()
         .setColor('#0C0C49')
         .setTitle('support server')
          .setThumbnail ('https://cdn.discordapp.com/attachments/779413930757718077/781151482342408218/PicsArt_11-25-04.36.56.png')
         .setImage('https://cdn.discordapp.com/attachments/779413930757718077/781151021572947978/64_0F82E60.gif')
      .setAuthor ('')
      .setTimestamp ()
     
     
     .setURL('https://discord.gg/mx6QdjkmQy')
         .setDescription(`
         \`\`\`bot commands\`\`\`     
> <a:pp515:780827200806846496>-\`${prefix}infobot\`
> <a:pp515:780827200806846496>-\`${prefix}avatar\`   
> <a:pp515:780827200806846496>-\`${prefix}allbot\`    
> <a:pp515:780827200806846496>-\`${prefix}user\`  
> <a:pp515:780827200806846496>-\`${prefix}server\`
> <a:pp515:780827200806846496>-\`${prefix}ping\`
> <a:pp515:780827200806846496>-\`${prefix}roles\`
\`\`\`Admin Commands\`\`\`            
> <a:pp305:780826930127437825>-\`${prefix}unban\`           
> <a:pp305:780826930127437825>-\`${prefix}ban\`          
> <a:pp305:780826930127437825>-\`${prefix}kick\`         
> <a:pp305:780826930127437825>-\`${prefix}mute\`       
> <a:pp305:780826930127437825>-\`${prefix}unmute\`
> <a:pp305:780826930127437825>-\`${prefix}lock\`
> <a:pp305:780826930127437825>-\`${prefix}unlock\`
> <a:pp305:780826930127437825>-\`${prefix}hide\`
> <a:pp305:780826930127437825>-\`${prefix}show\`      
> <a:pp305:780826930127437825>-\`${prefix}role\`
> <a:pp305:780826930127437825>-\`${prefix}role all\`       
> <a:pp305:780826930127437825>-\`${prefix}role humans\`        
> <a:pp305:780826930127437825>-\`${prefix}role bots\`
> <a:pp305:780826930127437825>-\`${prefix}say\`
> <a:pp305:780826930127437825>-\`${prefix}embed\`
> <a:pp305:780826930127437825>-\`${prefix}Move all\`
> <a:pp305:780826930127437825>-\`${prefix}infrole\`
 \`\`\`anti commands\`\`\`
> <a:pp305:780826930127437825>-\`${prefix}settings limitsban\`
> <a:pp305:780826930127437825>-\`${prefix}settings limitskick\`
> <a:pp305:780826930127437825>-\`${prefix}settings limitsroleD\`
> <a:pp305:780826930127437825>-\`${prefix}settings limitsroleC\`
> <a:pp305:780826930127437825>-\`${prefix}settings limitschannelD\`
> <a:pp305:780826930127437825>-\`${prefix}settings limitstime\`
\`\`\`ticket Commands\`\`\` 
> <a:pp305:780826930127437825>-\`${prefix}new\`
>  <a:pp305:780826930127437825>-\`${prefix}close\`
> <a:pp305:780826930127437825>-\`${prefix}mtickets enable/disable\`
> <a:pp305:780826930127437825>-\`${prefix}cleartickets\`
`)
   message.channel.send(e).then(m => m.delete(5000))
    message.channel.sendEmbed(embed).catch(error => message.reply(''))
    }
   });
//////////////
///////////////////////////////////////////////////////////////////////////////////////////
const blacklist = JSON.parse(fs.readFileSync('./blacklist.json', 'utf8'));
client.on('message',message=>{
if(message.author.bot || !message.guild)return
if(!message.member) return
if(!message.author.id === '614941893419073557') return;  
if(message.content.startsWith(prefix+'blacklist add')){
let user = message.mentions.members.first() || message.guild.members.get(message.content.split(" ")[2])
if(!user)return message.channel.send('**Please Mention User Or ID :x:**')
if(user.id == message.author.id || user.id == client.user.id) return message.channel.send(`**You Can't Add this Member!**`)
if(blacklist[message.guild.id+user.id]) return message.channel.send('**This Member Allready Blacklisted**')
blacklist[message.guild.id+user.id] = {};
message.channel.send(`**Added ${user} to Blacklist ✅**`)
}if(message.content.startsWith(prefix+'blacklist remove')){
let user =  message.content.split(" ")[2]
if(!user)return message.channel.send('**Please Type His ID :x:**')
if(!blacklist[message.guild.id+user]) return message.channel.send('**I Can Find This member In The Blacklist!**nplease Check the Member ID')
delete blacklist[message.guild.id+user];message.guild.unban(user).catch(err=>{
  return message.channel.send(`:x: I couldn't unban that user.`)
})
message.channel.send(`**Removed <@${user}> from The Blacklist ✅**`)}
if(message == prefix+'blacklist list'){
const blacklistss = [];
client.users.forEach(m => {
if(!blacklist[message.guild.id + m.id]) return
blacklistss.push(`<@${m.id}>`);
});let MS = blacklistss.join("n")
message.channel.send(new Discord.RichEmbed().setAuthor(message.guild.name,message.guild.iconURL)
.setTitle('**⛔ This This The Blacklist:**')
.setDescription(`${MS}`).setColor('RED').setFooter(message.author.username,message.author.avatarURL)
)
};
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})
fs.writeFile("./blacklist.json", JSON.stringify(blacklist, null, 2), function (e) {if (e) throw e;})})

///////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {   
  if (message.content === prefix + "ban") {
   const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`\`\`\`الاستخدام\`\`\`
#ban (السبب) (العضو) 
\`\`\`أمثله للأمر:\`\`\`
#ban <@user> مخالف للقوانين
#ban <@user> سبام
#ban <@user> سب
#ban <@user> نشر`) 
message.channel.sendEmbed(embed);

 }

});
///////////////////////////  
///////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', message => {   

  if (message.content === prefix + "$help Admin") {

   const embed = new Discord.RichEmbed()

.setColor("#0C0C49")

.setDescription(`

> <a:pp515:780827200806846496>-\`\`\`${prefix}help public\`\`\`

> <a:pp515:780827200806846496>-\`\`\`${prefix}help admin\`\`\`

> <a:pp515:780827200806846496>-\`\`\`${prefix}help ticket\`\`\`

> <a:pp515:780827200806846496>-\`\`\`${prefix}help anti\`\`\`

`) 
   .setImage('https://cdn.discordapp.com/attachments/779413930757718077/781151021572947978/64_0F82E60.gif')
.setThumbnail ('https://cdn.discordapp.com/attachments/779413930757718077/781151482342408218/PicsArt_11-25-04.36.56.png')
message.delete()
message.channel.sendEmbed(embed);



 }



});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "inforole")) {
    if(!args) return message.reply('اسم الرتبة');
    if(!role) return message.reply('الرتبة غير موجوده');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('> <a:pp515:780827200806846496>- اسم الرتبة',role.name,true)
    .addField('> <a:pp515:780827200806846496>- اي دي الرتبة',role.id,true)
    .addField('> <a:pp515:780827200806846496>- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('> <a:pp515:780827200806846496>- لون الرتبة',role.hexColor,true)
    .addField('> <a:pp515:780827200806846496>- الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('> <a:pp515:780827200806846496>- مركز الرتبة بين كل الرتب',role.position - message.guild.roles.size,true)
    .addField('> <a:pp515:780827200806846496>- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", msg => {

  if(msg.content ==="كس") {

    msg.delete();

  }

});

client.on("message", msg => {

  if(msg.content ==="امك") {

    msg.delete();

  }

});

client.on("message", msg => {

  if(msg.content ==="ابوك") {

    msg.delete();

  }

});

client.on("message", msg => {

  if(msg.content ==="مص") {

    msg.delete();

  }

});



client.on("message", msg => {

  if(msg.content ==="يلعن") {

    msg.delete();

  }

});



client.on("message", msg => {

  if(msg.content ==="كل زق") {

    msg.delete();

  }

});


client.on("message", msg => {

  if(msg.content ==="كسمك") {

    msg.delete();

  }

});


client.on("message", msg => {

  if(msg.content ==="كوبي بست") {

    msg.delete();

  }

});


client.on("message", msg => {

  if(msg.content ==="كوبي") {

    msg.delete();

  }

});





////////////////////////////////////////////