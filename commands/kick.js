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
                .setDescription('**' + target.username + '** has been kicked out of the Manor!')
                .setThumbnail(avatar)
                .setColor("#87ceeb")
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

