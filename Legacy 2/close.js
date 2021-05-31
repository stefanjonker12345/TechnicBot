module.exports.run = async (bot, message, args, db) => {
message.delete()
	if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("I'm afraid you can't do this!")
	let openedchannel = message.channel
	bot.channels.get("810541518141653022").send(`${openedchannel} is now closed!`);
	openedchannel.overwritePermissions('807918569090187286', { SEND_MESSAGES: false});
	message.channel.send("This gym is now closed.")
}

module.exports.help = {
    name: "close"
}