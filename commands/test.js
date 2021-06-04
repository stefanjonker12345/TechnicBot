module.exports.run = async (bot, message, args, db) => {
let filter = m => m.author.id === message.author.id
let unga = message.channel()
    message.author.send(`Please provide input`).then(() => {
      message.author.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          unga.send(`${message.content}`)
        })
        .catch(collected => {
            message.channel.send('Timeout');
        });
    })
}

module.exports.help = {
    name: "test"
}