module.exports.run = async (bot, message, args, db) => {
message.delete()
	if(!message.member.roles.some(r=>["Gym Leader", "Oogabooga"].includes(r.name)) ) return message.reply("I'm afraid you can't do this")
	message.guild.channels
	let openedchannel = message.channel
	bot.channels.get("810541518141653022").send(`${openedchannel} is now open!`);
}

module.exports.help = {
    name: "open"
}
