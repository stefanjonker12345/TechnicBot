module.exports.run = async (bot, message, args, db) => {
message.channel.send("Pong")
}

module.exports.help = {
    name: "ping"
}