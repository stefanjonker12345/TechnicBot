const ms = require("ms");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args, db) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!tomute) return message.reply("Couldn't find user.");
        if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
        let reason = args.slice(2).join(" ");
        if (!reason) return message.reply("Usage is !mute (user) (time in minutes) (reason)");

        let muterole = message.guild.roles.find(`name`, "muted");
        //start of create role
        if (!muterole) {
            try {
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: "#000000",
                    permissions: []
                });
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    });
                });
            } catch (e) {
                console.log(e.stack);
            }
        }
        //end of create role
        let mutetime = args[1];
        let muteminutes = mutetime * 60000;
        timeInt = parseInt(muteminutes);

        message.delete().catch(O_o => {
        });

        try {
            await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
        } catch (e) {
            message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime} minutes`)
        }
        
	    message.reply(`muted ${tomute} for ${mutetime} beacause of reason: "` + `${reason}` + `"`)
			
        const embed = new Discord.RichEmbed()
            .setDescription(`Mute executed by ${message.author}`)
            .setColor("#0000000")
            .addField("Muted User", tomute)
            .addField("Muted in", message.channel)
            .addField("Time", message.createdAt)
            .addField("Length", mutetime)
            .addField("Reason", reason);

        let channel = message.guild.channels.find(c => c.name === "⌜logs⌟");
        if (!channel) return message.reply("Please create a logs channel first!");
        channel.send(embed);

        await (tomute.addRole(muterole.id));

        setTimeout(function () {
            tomute.removeRole(muterole.id);
        }, ms(mutetime));
}

module.exports.help = {
    name: "mute"
}