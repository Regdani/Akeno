module.exports = {
    name: 'embed',
    description: "Command to create embed message!",
    async execute(message, args, Discord) {
          
 
        let embed = new Discord.MessageEmbed()
            .setTitle(args[1])
            .setDescription(args[2])
            .setColor(args[3]);
        
        let messageEmbed = await message.channel.send(embed);
      
    }
 
}   