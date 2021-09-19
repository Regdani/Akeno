const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

// Command prefix setting 
const prefix = '>';

// Java rooting
const fs = require('fs');

// Command source folder
client.commands = new Discord.Collection();

// Command read-in restriction to java type only
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Good Morning Master! - Akeno');
    client.user.setActivity('Forced people to Isekai!', {type: 'WATCHING'}).catch(console.error);
});

// Automatic Join Role & Greet 852444488348598272
client.on('guildMemberAdd', guildMember =>{
    let groups = guildMember.guild.roles.cache.find(role => role.id === "824619357288136724");
    let info = guildMember.guild.roles.cache.find(role => role.id === "873279772401213490");
    let tags = guildMember.guild.roles.cache.find(role => role.id === "797415211703336970");
    let ranks = guildMember.guild.roles.cache.find(role => role.id === "852444488348598272");
    let waitingList = guildMember.guild.roles.cache.find(role => role.id === "873675946513825884");

    guildMember.roles.add(groups);
    guildMember.roles.add(info);
    guildMember.roles.add(tags);
    guildMember.roles.add(ranks);
    guildMember.roles.add(waitingList);
    guildMember.guild.channels.cache.get('881534810164690976').send(`Welcome <@${guildMember.user.id}> to the server! Have Fun & Enjoy!`)
});


//Command list & settings
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split('|');
    const command = args[0].toLowerCase();
 
    if (command==='embed') {
        client.commands.get('embed').execute(message, args, Discord, client);
    } else {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

           switch(command) {
          case 'ban':
                client.commands.get('ban').execute(message, args);
            break;
          case 'kick':
                client.commands.get('kick').execute(message, args);
            break;
          case 'clear':
                client.commands.get('clear').execute(message, args);
            break;
            case 'reactionrole':
                client.commands.get('reactionrole').execute(message, args, Discord, client);
            break;
        }
    }

});

client.login('ODgxNTM2MzgzODM0MDA5NjAw.YSuQvA.AY4dEUvYyfhrRzqZO5NgPZM75EM');