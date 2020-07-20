module.exports.run = async (bot, message, args, db) => {
pre = "nill"
suff = "nill"
if (!message.member.hasPermission('MANAGE_ROLES')){
	return message.reply("Missing manage roles permission")
}
if (message.member.hasPermission('MANAGE_ROLES')) 
            message.delete();
        const sayMessage = args.slice(1).join(' ');
        if (!sayMessage) {
            return message.channel.send("Please mention a role, for correct usage use `!help role`")
        }
        let role = message.guild.roles.find("name", `${sayMessage}`);
        let roled = message.mentions.members.first();
        if (!roled) {
            roled = message.author
        }
        if (!role) return message.channel.send("Role not found");
        let memberrole = message.member.highestRole;
        if (role.position > memberrole.position) {
            return await message.channel.send("Your role is below that role, nice try though.")
        }
        if (role.position === memberrole.position) {
            return await message.channel.send("Your role is equal to that role, you can't give that role.")
        }
		if (message.member.roles.some(role){
		pre = "added"
        suff = "to"		
		roled.addRole(role.id)} else {
		pre = "removed"
        suff = "from"		
		roled.removeRole(role.id)}
        message.channel.send(`Sucesfully ${pre} role ${sayMessage} ${suff} ${roled.user.tag}`)
    }

module.exports.help = {
    name: "role"
}