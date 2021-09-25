module.exports = {
    name: 'ban',
    description: "Command to ban members!!",
    async execute(message,args, Discord){
        const target = message.mentions.users.first();
        let avatar = target.displayAvatarURL({size: 1024, dynamic: true})
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            
            let embed = new Discord.MessageEmbed()
                .setTitle("Banned")
                .setDescription('**' + target.username + '** has been banned from the Manor!')
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