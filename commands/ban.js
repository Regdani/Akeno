module.exports = {
    name: 'ban',
    description: "Command to ban members!!",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned!");
        }else{
            message.channel.send('Cant find that member!');
        }
    }
}