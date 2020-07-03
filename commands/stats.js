const Discord = require("discord.js");
module.exports.run = async (bot, message, args,db) => {
let response = args[0]
let oldcoll = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
    return doc.data().coll
})
if (!response) return message.reply("Please specify the pokémon ID")
let name = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][0]
})
let level = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][1]
})
let dexno = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][2]
})
let HP = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][3]
})
let Attack = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][4]
})
let Defense = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][5]
})
let SpA = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][6]
})
let SpD = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][7]
})
let Speed = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][8]
})
let Shiny = await db.collection('pokemon').doc(message.author.id.toString()).get().then(function(doc) {
console.log(doc.data())
    return doc.data()[response][9]
})
let derp;
if (!name) return message.reply("Please make sure you use a valid ID")
if (Shiny == 1) {
  derp = ("http://play.pokemonshowdown.com/sprites/ani-shiny/" + `${name.toLowerCase()}` + ".gif")
} else {
  derp = ("http://play.pokemonshowdown.com/sprites/xyani/" + `${name.toLowerCase()}` + ".gif")
}
const embed = new Discord.RichEmbed()
.setTitle(`[No ${response}] ${name}`)
.addField("Level:", `${level}`)
.setImage(derp)
.setFooter(`Viewing pokémon ${response} out of ${oldcoll}. To see the stats of your other pokemon use !stats (ID)`)
message.channel.send(embed)
}

module.exports.help = {
    name: "stats"
}