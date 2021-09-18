const { execute } = require("./kick");

module.exports = {
    name: 'clear',
    description: "Command for clearing messages!",
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages you wish to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a valid number!");

        if(args[0] > 100) return message.reply("The maximum limit of clear is 100!");
        if(args[0] < 1) return message.reply("The minimum limit of clear is 1!");

        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}