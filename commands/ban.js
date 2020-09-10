module.exports.run = async (bot, message, args, db) => {
  message.delete()
  let USER_ID = args[0];
  let reason2 = args.slice(2).join(' ')
  if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply("Sorry, you don't have permissions to use this!");
		
		let guild = message.guild

		if (guild.member(USER_ID))return {
		USER_ID.ban(reason2);
		message.reply(`${USER_ID.user.tag} has been banned by ${message.author.tag} because: ${reason2}.`);
  		}

        let member = message.mentions.members.first();
        if (member.id == "611913127780679711") return message.reply("please do not the Husk.")
        if (!member)
            return message.reply("Please mention a valid member of this server");
        if (!member.bannable)
            return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

        let role = message.member.highestRole;
        let memberrole = member.highestRole;
        if (role.position < memberrole.position) {
            return await message.channel.send("Can't ban them, they are more powerful than you are!")
        }
        if (role.position === memberrole.position) {
            return await message.channel.send("Can't ban them, they are as powerful as you are!")
        }

        let reason = args.slice(1).join(' ');
        if (!reason) reason = "No reason provided";

        await member.ban(reason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}.`));
        message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}.`);
    }

module.exports.help = {
    name: "ban"
}
