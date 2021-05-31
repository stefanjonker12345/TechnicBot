const { MessageButton } = require('discord-buttons');

module.exports = {
    name: 'button',
    run: async (client, message, args) => {
        let button = new disbut.MessageButton()
          .setStyle('red') //default: blurple
          .setLabel('My First Button!') //default: NO_LABEL_PROVIDED
          .setID('click_to_function') //note: if you use the style "url" you must provide url using .setURL('https://example.com')
          .setDisabled(); //disables the button | default: false

        await message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
    }
}