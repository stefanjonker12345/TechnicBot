module.exports.run = async (bot, message, args, db) => {
if(message.channel.parent.name === "Modmail") {
message.channel.delete()
} else return message.reply("This isn't a Modmail channel!")
}

module.exports.help = {
    name: "close"
}