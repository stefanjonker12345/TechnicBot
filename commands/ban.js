module.exports.run = async (Discord, bot, message, args, db) => {
  if (msg.member.hasPermission("BAN_MEMBERS")) {
    if (msg.members.mentions.first()) {
        try {
            msg.members.mentions.first().ban();
            message.channel.send(`${message.author}, banned ${message.members.mentions.first()}`)
        } catch {
            msg.reply("I do not have permissions to ban" + msg.members.mentions.first());
        }
    } else {
        msg.reply("You do not have permissions to ban" + msg.members.mentions.first());
    }
}
}

module.exports.help = {
  name: "ban"
}