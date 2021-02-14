module.exports.run = async (bot, message, args, db) => {
message.delete()
	if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply("I'm afraid you can't do this!")
	let openedchannel = message.channel
	bot.channels.get("810541518141653022").send(`${openedchannel} is now open!`);
	openedchannel.overwritePermissions('807918568862908417', { SEND_MESSAGES: true, ADD_REACTIONS: false});
}

module.exports.help = {
    name: "open"
}