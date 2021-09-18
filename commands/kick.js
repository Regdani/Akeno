module.exports = {
    name: 'kick',
    description: "Command to kick members!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked!");
        }else{
            message.channel.send('Cant find that member!');
        }
    }
}