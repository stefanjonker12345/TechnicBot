module.exports.run = async (bot, message, args, db) => {
let m = await message.channel.send('Click!', button);

const filter = (button) => button.clicker.user.id === message.author.id;
const collector = m.createButtonCollector(filter, { time: 5000 }); //collector for 5 seconds

collector.on('collect', b => console.log(`Collected button with the id ${b.id}`));
collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}

module.exports.help = {
    name: "button2"
}