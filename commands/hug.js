module.exports.run = async (bot, message, args,db) => {
    if (message.mentions.members.size == 1) {
        let member = message.mentions.members.first()
        message.channel.send(`${message.author} gave ${member} a hug!`, {
            file: "https://media.giphy.com/media/CZpro4AZHs436/giphy.gif" //DO NOT CHANGE THIS!!!!
        });
    }
}

module.exports.help = {
    name: "hug"
}