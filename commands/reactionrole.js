module.exports = {
    name: 'reactionrole',
    description: "Command for reaction based role assignment!",
    async execute(message, args, Discord, client) {
        const dj = message.guild.roles.cache.find(role => role.id === "856920164918099969"); 
        const game = message.guild.roles.cache.find(role => role.id === "831806478762508289");
        const okane = message.guild.roles.cache.find(role => role.id === "797424668201713734");
        const kingsRaid = message.guild.roles.cache.find(role => role.id === "890844324072407091");
        const minecraft = message.guild.roles.cache.find(role => role.id === "797424639809814538");
        const otaku = message.guild.roles.cache.find(role => role.id === "797424693748432926");
        const oceania = message.guild.roles.cache.find(role => role.id === "873290858886205481");
        const europe = message.guild.roles.cache.find(role => role.id === "873290736513192006");
        const asia = message.guild.roles.cache.find(role => role.id === "873290821942788146");
        const america = message.guild.roles.cache.find(role => role.id === "873290698969976852");
        const africa = message.guild.roles.cache.find(role => role.id === "873290775406968863");
        const age13to17 = message.guild.roles.cache.find(role => role.id === "873277807214592001");
        const age18 = message.guild.roles.cache.find(role => role.id === "873277877901213706");
        const male = message.guild.roles.cache.find(role => role.id === "873287999604015135");
        const female = message.guild.roles.cache.find(role => role.id === "873288061121888256");
        const other = message.guild.roles.cache.find(role => role.id === "873288112997007430");
       
        const djEmoji = '🎵';
        const gameEmoji = '🎲';
        const okaneEmoji = '💴';
        const kingsRaidEmoji = '👑';
        const minecraftEmoji = '⛏️';
        const otakuEmoji = '⛩️';
        const oceaniaEmoji = '🏖️';
        const europeEmoji = '🏰';
        const asiaEmoji = '🏯';
        const americaEmoji = '🗽';
        const africaEmoji = '🏜️';
        const age13to17Emoji = '😛';
        const age18Emoji = '😔';
        const maleEmoji = '♂️';
        const femaleEmoji = '♀️';
        const otherEmoji = '❓';


 
        let embed = new Discord.MessageEmbed()
            .setColor('#87ceeb')
            .setTitle('Available self-assign roles')
            .setDescription('By reacting you will assign the roles accordingly. Some roles will unlock certain related content, while others are just generic information display to other members.\n\n'
                +`**✾ Tags**\n\n These roles are in the miscellaneous category.\n\n`
                + `${djEmoji} - Required for music bots.\n`
                + `${gameEmoji} - If you wish to be pinged when somebody is looking to play something.\n`
                + `${okaneEmoji} - Gain access to our economy channels.\n`
                + `${kingsRaidEmoji} - Gain access to our King's Raid covenant channels.\n`
                + `${minecraftEmoji} - Gain access to our Minecraft covenant channels.\n`
                + `${otakuEmoji} - Gain access to our Weeb channels.\n\n`
                + `**✾ Info**\n\n These roles are in the information category.\n\n`
                + `${oceaniaEmoji} - Region Oceania\n`
                + `${europeEmoji} - Region Europe\n`
                + `${asiaEmoji} - Region Asia\n`
                + `${americaEmoji} - Region America\n`
                + `${africaEmoji} - Region Africa\n`
                + `${age13to17Emoji} - Age: 13-17\n`
                + `${age18Emoji} - Age:18+\n`
                + `${maleEmoji} - Gender: Male\n`
                + `${femaleEmoji} - Gender: Female\n`
                + `${otherEmoji} - Gender: Other`)
            .setThumbnail('https://cdn.discordapp.com/attachments/378285565872701440/873893811485564938/CommunLogo_2.png');
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(djEmoji);
        messageEmbed.react(gameEmoji);
        messageEmbed.react(okaneEmoji);
        messageEmbed.react(kingsRaidEmoji);
        messageEmbed.react(minecraftEmoji);
        messageEmbed.react(otakuEmoji);
        messageEmbed.react(oceaniaEmoji);
        messageEmbed.react(europeEmoji);
        messageEmbed.react(asiaEmoji);
        messageEmbed.react(americaEmoji);
        messageEmbed.react(africaEmoji);
        messageEmbed.react(age13to17Emoji);
        messageEmbed.react(age18Emoji);
        messageEmbed.react(maleEmoji);
        messageEmbed.react(femaleEmoji);
        messageEmbed.react(otherEmoji);
 
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

        const memberTarget = await reaction.message.guild.members.cache.get(user.id);


            switch (reaction.emoji.name) {
                case djEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dj);
                    break;
                case gameEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(game);
                    break;
                case okaneEmoji:
                   await reaction.message.guild.members.cache.get(user.id).roles.add(okane);
                    break;
                case kingsRaidEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(kingsRaid);
                    break;
                case minecraftEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraft);
                    break;
                case otakuEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(otaku);
                    break;
                case oceaniaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(oceania);
                    break;
                case europeEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(europe);
                    break;
                case asiaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(asia);
                    break;
                case americaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(america);
                    break;
                case africaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(africa);
                    break;
                case age13to17Emoji:
                    
                    if (!memberTarget.roles.cache.get('873277877901213706')) {       
                        await reaction.message.guild.members.cache.get(user.id).roles.add(age13to17); 
                        
                    }
                    break;
                case age18Emoji:
              
                     if (!memberTarget.roles.cache.get('873277807214592001')) {       
                        await reaction.message.guild.members.cache.get(user.id).roles.add(age18); 
                    }
                    break;
                case maleEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(male);
                    break;
                case femaleEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(female);
                    break;
                case otherEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.add(other);
                    break;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 

              switch (reaction.emoji.name) {
                case djEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dj);
                    break;
                case gameEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(game);
                    break;
                case okaneEmoji:
                   await reaction.message.guild.members.cache.get(user.id).roles.remove(okane);
                    break;
                case kingsRaidEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(kingsRaid);
                    break;
                case minecraftEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraft);
                    break;
                case otakuEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(otaku);
                    break;
                case oceaniaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(oceania);
                    break;
                case europeEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(europe);
                    break;
                case asiaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(asia);
                    break;
                case americaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(america);
                    break;
                case africaEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(africa);
                    break;
                case maleEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(male);
                    break;
                case femaleEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(female);
                    break;
                case otherEmoji:
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(other);
                    break;
            }
        
        });
    }
 
}   