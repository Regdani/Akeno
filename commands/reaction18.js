module.exports = {
    name: 'reaction18',
    description: "Command for reaction based role assignment!",
    async execute(message, args, Discord, client) {
        const ecchi  = message.guild.roles.cache.find(role => role.id === "797424606637588526"); 

        const ecchiEmoji = '🔞';

        let embed = new Discord.MessageEmbed()
            .setColor('#87ceeb')
            .setTitle('Available self-assign roles')
            .setDescription('Enjoy yourself :)\n\n'
                + `${ecchiEmoji} - Gain access to the Vulpin channels. Vulpin character required!`)
            .setThumbnail('https://cdn.discordapp.com/attachments/378285565872701440/873893811485564938/CommunLogo_2.png');
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(ecchiEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            switch (reaction.emoji.name) {
                case ecchiEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ecchi);
                    break;  
            }
        
        });
            client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 

                switch (reaction.emoji.name) {
                    case ecchiEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(ecchi);
                        break;
                }
        
        });
    }
}

 
