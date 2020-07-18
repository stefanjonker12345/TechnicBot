const Discord = require("discord.js");
module.exports.run = async (bot, message, args,db) => {
let response = args[0]
let oldcoll = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
    return doc.data().coll
})
if (!response) return message.reply("Please specify the pokémon ID")
let name = response
let IDs = await db.collection('names').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][0]
})
if (!name) return message.reply("Please make sure you use a valid ID")
 let derp = ("http://play.pokemonshowdown.com/sprites/xyani/" + `${name.toLowerCase()}` + ".gif")
const embed = new Discord.RichEmbed()
.setTitle(`${name}`)
.addField(`Your pokémon named ${response}`, `${IDs}`)
.setImage(derp)
.setFooter(`Viewing ${response}.`)
message.channel.send(embed)
}

module.exports.help = {
    name: "search"
}