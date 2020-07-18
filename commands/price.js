const Discord = require("discord.js");

module.exports.run = async (bot, message, args,db, Axios) => {
let item = args[0]
message.channel.send(`**Price Request!** ${message.author} wants to know the price of **${item}** for switch <@&543091627367989307> <@&555543685199298560>`)
}

module.exports.help = {
    name: "info"
}