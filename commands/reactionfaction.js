module.exports = {
    name: 'reactionfaction',
    description: "Command for reaction based role assignment!",
    async execute(message, args, Discord, client) {
        const ontari = message.guild.roles.cache.find(role => role.id === "877607840288739328"); 
        const vulpin = message.guild.roles.cache.find(role => role.id === "877607658549551154");
       
        const vulpinEmoji = '🟦';
        const ontariEmoji = '🟥';
        

 
        let embed = new Discord.MessageEmbed()
            .setColor('#87ceeb')
            .setTitle('Available self-assign roles')
            .setDescription('Choose the faction you are part of!\n\n'
                + `${ontariEmoji} - Gain access to the Ontari channels. Ontari character required!\n`      
                + `${vulpinEmoji} - Gain access to the Vulpin channels. Vulpin character required!`)
            .setThumbnail('https://cdn.discordapp.com/attachments/378285565872701440/873893811485564938/CommunLogo_2.png');
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(ontariEmoji);
        messageEmbed.react(vulpinEmoji);
        
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            switch (reaction.emoji.name) {
                case ontariEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ontari);
                    break;
                case vulpinEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(vulpin);
                    break;    
            }
        
        });
            client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 

                switch (reaction.emoji.name) {
                    case ontariEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(ontari);
                        break;
                    case vulpinEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(vulpin);
                        break;
                }
        
        });
    }
}

 
