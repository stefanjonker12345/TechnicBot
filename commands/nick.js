module.exports.run = async (bot, message, args, db) => {
	message.delete()
	let nick = "none"
	if(!message.member.hasPermission('CHANGE_NICKNAME')) return message.channel.send("You don't have permissions to nick yourself")
	let nickedperson = message.mentions.members.first()
if(!!nickedperson && !message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send("You don't have permissions to change others nicknames")
if(!!nickedperson) {
	nick = args.slice(1).join(' ');
}
if(!nickedperson) {
	nickedperson = message.member
	nick = args.join(' ');
}
if(!nick) {nick = nickedperson.user.username}
nickedperson.setNickname(`${nick}`);
message.channel.send(`${nickedperson.user.username}'s nickname changed to ${nick}`)
}

module.exports.help = {
name: "nick"
}