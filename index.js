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


//Command list & settings
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split('|');
    const command = args[0].toLowerCase();
 
    
   switch(command) {
  case 'embed':
    client.commands.get('embed').execute(message, args, Discord, client);
    break;
  case 'kick':
          client.commands.get('kick').execute(message, args);
    break;
}
});

client.login('ODgxNTM2MzgzODM0MDA5NjAw.YSuQvA.AY4dEUvYyfhrRzqZO5NgPZM75EM');