module.exports.run = async (bot, message, args, db) => {
		message.delete();
        let muteduser = message.mentions.members.first();
        if (!muteduser) return message.channel.send("Please specify a user to unmute. For correct usage use `!help unmute`");
        let role = message.guild.roles.find("name", "muted");
        muteduser.removeRole(role);
        message.channel.send(`Successfully unmuted ${muteduser.user.tag}`)
}

module.exports.help = {
    name: "unmute"
}