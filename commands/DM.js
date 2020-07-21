module.exports.run = async (bot, message, args, db) => {
  if (!message.member.hasPermission('ADMINISTRATOR'))
            return message.reply("I won't let you take control of my body!");
        message.delete();
        // makes the bot say something and delete the message. As an example, it's open to anyone to use.
        // To get the "message" itself we join the `args` back into a string with spaces:
        let sayMessage = args.slice(1).join(' ');
		let user = message.members.mentions.first()
		if(!sayMessage){return message.reply("Please provide arguments")}
		if(!user){return message.reply("Please provide a user to DM")}
        // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley
        // And we get the bot to say the thing:
        channel.send(sayMessage);
    }

module.exports.help = {
    name: "DM"
}