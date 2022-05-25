module.exports.run = async (bot, message, args, db) => {
let filter = m => m.author.id === message.author.id
let content = "nill"
    message.author.send(`Please provide input`).then(() => {
      message.author.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          content = message.content
		  console.log(content)
        })
        .catch(collected => {
            message.author.send('Timeout L');
        });
    })
}

module.exports.help = {
    name: "test"
}