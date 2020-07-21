const commands = [
        {
            name: "help",
            value: "Show this help info."
        },
        {
            name: "kick",
            value: "Kick a member."
        },
        {
            name: "ban",
            value: "Ban a member."
        },
        {
            name: "purge",
            value: "Deletes the last x messages."
        },
        {
            name: "mute",
            value: "Mute a user"
        },
		{
            name: "unmute",
            value: "Unute a user"
        },
        {
            name: "role",
            value: "Add/remove a role to/from a user."
        },
        {
            name: "warn",
            value: "Give a user a warning."
        },
		{
            name: "nick",
            value: "Change a nickname"
        },
        {
            name: "echo",
            value: "Let the bot send a message."
        }
    ];
const Discord = require('discord.js')
module.exports.run = async (bot, message, args, db) => {
let input = args.join(" ");
        message.delete();
        if (!input) {
            //Please only mess with new lines
            const m = message.channel.send("I've sent you a list of my commands through DM!");
			const embed = new Discord.RichEmbed()
                .setTitle("**Command List**")
                .setDescription("**Here's a list of all my commands!**")
                .addField("```🔨Moderation🔨```", "`kick` `ban` `mute` `unmute` `purge` `role` `nick`")
				.addField("```✨Utility✨```", "`echo`")
                .setFooter("For information on specific commands use !help [command]");
            message.author.send(embed);
        }

        const validCommand = commands.find(function(item){
            return item.name === input;
        });

        if (!validCommand && !!input) {
            message.channel.send('That is not a valid command, SMH....');
            return;
        }

        if (input === "help") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!help`")
                .setDescription("This contains info on how to properly use `!help`")
                .addField("Description", "Shows this command!")
                .addField("Usage", "```!help (command name)```")
                .addField("Example", "```!help kick```")
                .addField("Permissions needed", "`None`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "kick") {
			const embed = new Discord.RichEmbed()
                .setTitle("`!kick`")
                .setDescription("This contains info on how to properly use `!kick`")
                .addField("Description", "Kicks a user from the server.")
                .addField("Usage", "```!kick [user] (reason)```")
                .addField("Example", "```!kick @Husky spam```")
                .addField("Permissions needed", "`KICK_MEMBERS`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "ban") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!ban`")
                .setDescription("This contains info on how to properly use `!ban`")
                .addField("Description", "Bans a user from the server.")
                .addField("Usage", "```!ban [user] (reason)```")
                .addField("Example", "```!ban @Husky spam```")
                .addField("Permissions needed", "`BAN_MEMBERS`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "purge") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!purge`")
                .setDescription("This contains info on how to properly use `!purge`")
                .addField("Description", "Deletes an amount of messages.")
                .addField("Usage", "```!purge [amount between 1-99]```")
                .addField("Example", "```!purge 20```")
                .addField("Permissions needed", "`MANAGE_MESSAGES`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "mute") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!mute`")
                .setDescription("This contains info on how to properly use `!mute`")
                .addField("Description", "Mutes a user.")
                .addField("Usage", "```!mute [@user] [time(variable)] (reason)```")
                .addField("Example", "```!mute @Husky 10m spam```")
                .addField("Permissions needed", "`MANAGE_MESSAGES`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "ummute") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!mute`")
                .setDescription("This contains info on how to properly use `!ummute`")
                .addField("Description", "Unmutes a user.")
                .addField("Usage", "```!unmute [@user]```")
                .addField("Example", "```!unmute @Husky```")
                .addField("Permissions needed", "`MANAGE_MESSAGES`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "role") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!role`")
                .setDescription("This contains info on how to properly use `!role`")
                .addField("Description", "Add or remove user roles")
                .addField("Usage", "```!role [@user] [role name (case sensitive!)]```")
                .addField("Example", "```!role @Husky Administrator```")
                .addField("Permissions needed", "`MANAGE_ROLES`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "warn") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!warn`")
                .setDescription("This contains info on how to properly use `!warn`")
                .addField("Description", "Gives a warning to a user.")
                .addField("Usage", "```!warn [@user] [reason]```")
                .addField("Example", "```!warn @husky spam```")
                .addField("Permissions needed", "`MANAGE_MESSAGES`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
        if (input === "echo") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!echo`")
                .setDescription("This contains info on how to properly use `!echo`")
                .addField("Description", "Lets the bot send a specific message in a channel")
                .addField("Usage", "```!echo (channel mention) [message]```")
                .addField("Example", "```!echo hi or !echo #general hi```")
                .addField("Permissions needed", "`MANAGE_MESSAGES`")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }
		if (input === "nick") {
            const embed = new Discord.RichEmbed()
                .setTitle("`!nick`")
                .setDescription("This contains info on how to properly use `!nick`")
                .addField("Description", "Changes a user's nickname")
                .addField("Usage", "```!nick (user) (nickname)```")
                .addField("Example", "```!nick @Husky potato or !nick potato```")
                .addField("Permissions needed", "`CHANGE_NICKNAME` and `MANAGE_NICKNAMES` to change nicknames from other members")
                .setFooter("Variables surrounded by [] are mandatory, () means optional");
            message.channel.send(embed)
        }

    }

module.exports.help = {
    name: "help"
}