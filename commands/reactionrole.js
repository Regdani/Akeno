module.exports = {
    name: 'reactionrole',
    description: "Command for reaction based role assignment!",
    async execute(message, args, Discord, client) {
        const minecraftRole = message.guild.roles.cache.find(role => role.id === "797424639809814538"); 
        const legalageRole = message.guild.roles.cache.find(role => role.id === "797424606637588526");
        const otakuRole = message.guild.roles.cache.find(role => role.id === "797424693748432926");
        const gamblingRole = message.guild.roles.cache.find(role => role.id === "797424668201713734");

        const minecraftEmoji = '⛏️';
        const legalageEmoji = '🔞';
        const otakuEmoji = '⛩️';
        const gamblingEmoji = '💴';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Self-assignable role list')
            .setDescription('By reacting you will gain access to certain sections within the server!\n\n'
                + `${minecraftEmoji} for gaining access to the Minecraft channels!\n`
                + `${legalageEmoji} for gaining access to the Adult channels!\n`
                + `${otakuEmoji} for gaining access to the Otaku channels!\n`
                + `${gamblingEmoji} for gaining access to the Gambling channels!`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(minecraftEmoji);
        messageEmbed.react(legalageEmoji);
        messageEmbed.react(otakuEmoji);
        messageEmbed.react(gamblingEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
             if (reaction.emoji.name === minecraftEmoji) {
                 await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftRole);
             }
             if (reaction.emoji.name === legalageEmoji) {
                 await reaction.message.guild.members.cache.get(user.id).roles.add(legalageRole);
             }
             if (reaction.emoji.name === otakuEmoji) {
                 await reaction.message.guild.members.cache.get(user.id).roles.add(otakuRole);
             }
             if (reaction.emoji.name === gamblingEmoji) {
                 await reaction.message.guild.members.cache.get(user.id).roles.add(gamblingRole);
             }
        
             return;
           
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.emoji.name === minecraftEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftRole);
            }
            if (reaction.emoji.name === legalageEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(legalageRole);
            }
            if (reaction.emoji.name === otakuEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(otakuRole);
            }
            if (reaction.emoji.name === gamblingEmoji) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(gamblingRole);
            }
        
            return;
        
        });
    }
 
}   