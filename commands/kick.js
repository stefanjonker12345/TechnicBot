module.exports.run = async (bot, message, args, db) => {
message.delete()
 if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply("Sorry, you don't have permissions to use this!");

        // Let's first check if we have a member and if we can kick them!
        // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
        // We can also support getting the member by ID, which would be args[0]
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.kickable)
            return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        let role = message.member.highestRole;
        let memberrole = member.highestRole;
        if (role.position < memberrole.position) {
            return await message.channel.send("Can't kick them, they are more powerful than you are!")
        }
        if (role.position === memberrole.position) {
            return await message.channel.send("Can't kick them, they are as powerful as you are!")
		}
		await member.kick(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}.`));
        message.channel.send(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}.`);
}

module.exports.help = {
    name: "kick"
}