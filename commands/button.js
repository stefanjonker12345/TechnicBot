module.exports.run = async (bot, message, args, db, disbut, MessageButton) => {
 let btn = new bot.disbut.MessageButton()
    .setStyle('red')
    .setLabel('AMONGUS !!! SO SUS !!!!')
    .setID('amogus');
	.setDisabled()
  let msg = await message.channel.send('Click for AMOGUS 😳', {
    button: btn
  });
}

module.exports.help = {
    name: "button"
}