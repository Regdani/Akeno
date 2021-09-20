const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'kick',
    description: "Command to kick members!",
   async execute(message, args, Discord){
       const target = message.mentions.users.first();
       let avatar = target.displayAvatarURL({size: 1024, dynamic: true})
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            
            memberTarget.kick();
           
            let embed = new Discord.MessageEmbed()
                .setTitle("Kicked")
                .setDescription('**' + target.username + '** has been kicked!')
                .setThumbnail(avatar)
                .setColor("RED")
                .setTimestamp(message.createdAt)
              
          let messageEmbed = await message.channel.send(embed);
        } else {
            let embed = new Discord.MessageEmbed()
                .setTitle("Error")
                .setDescription('Cant find that member!' )
                .setColor("RED")
                
            
          let messageEmbed = await message.channel.send(embed);
           
        }
    }
}

/*

/*Quit
client.on('guildMemberRemove', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':cry: **' + member.user.username + '** left ' + member.guild.name)
        .setFooter('We are now ' + member.guild.memberCount)
    member.guild.channels.get('CHANNEL_ID').send(embed)
 
});


let url = member.user.AvatarURL == undefined ? member.user.defaultAvatarURL : member.user.avatarURL

const welcome1 = new Discord.RichEmbed()
        .setTitle(`${member.user.username} left the server`)
        .setDescription("Please come back, it was such a good time with you :(")
        .setColor("RED")
        .setThumbnail(url)

        member.guild.channels.get(welcome[member.guild.id].channel).send(welcome1)
*/