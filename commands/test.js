module.exports.run = async (bot, message, args, db) => {
        message.author.send("See or Change?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        console.log(collector)
        collector.on('collect', message => {
            message.channel.send(`${message.content}`)
        })
}

module.exports.help = {
    name: "test"
}