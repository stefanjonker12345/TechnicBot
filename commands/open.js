module.exports.run = async (bot, message, args, db) => {
message.delete()
	if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply("I'm afraid you can't do this!")
	let openedchannel = message.channel
	bot.channels.get("810541518141653022").send(`${openedchannel} is now open!`);
	openedchannel.overwritePermissions(UserResolvable, { // Pass 'UserResolvable' type thing as described in Wiki!
  VIEW_CHANNEL: true,
  SEND_MESSAGES: false,
  READ_MESSAGE_HISTORY: true,
  ATTACH_FILES: false
});
}

module.exports.help = {
    name: "open"
}
