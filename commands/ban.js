module.exports.run = async (Discord, bot, message, args, db) => {
  if (message.member.hasPermission("BAN_MEMBERS")) {
    if (message.members.mentions.first()) {
        try {
            message.members.mentions.first().ban();
            message.channel.send(`${message.author}, banned ${message.members.mentions.first()}`)
        } catch {
            msg.reply("I do not have permissions to ban" + message.members.mentions.first());
        }
    } else {
        msg.reply("You do not have permissions to ban" + message.members.mentions.first());
    }
}
}

module.exports.help = {
  name: "ban"
}