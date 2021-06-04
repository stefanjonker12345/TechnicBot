module.exports.run = async (bot, message, args, db, disbut, MessageButton) => {
message.channel.send("Lol je stinkt lmao funny!")
let button = await new disbut.MessageButton()
  .setStyle('red')
  .setLabel('My First Button!') 
  .setID('click_to_function') 
  .setDisabled();

message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
}

module.exports.help = {
    name: "button"
}