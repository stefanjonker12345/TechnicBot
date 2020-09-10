module.exports.run = async (bot, message, args, db) => {
let member = message.mentions.members.first()
if(!member) return message.reply("you better provide someone who's a simp smh...")
message.channel.send(`${member}, you are a simp.)
}

module.exports.help = {
    name: "simp"
}