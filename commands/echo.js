module.exports.run = async (bot, message, args, db) => {
  if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.reply("I won't let you take control of my body!");
        message.delete();
        let channel = message.mentions.channels.first();
        let sayMessage = "Nill";
        if (!channel) {
            channel = message.channel;
            sayMessage = args.join(" ");
        } else {
            sayMessage = args.slice(1).join(' ');
        }
        channel.send(sayMessage);
    }

module.exports.help = {
    name: "echo"
}