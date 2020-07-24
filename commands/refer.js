module.exports.run = async (bot, message, args,db) => {
let referred = await db.collection('playerbase').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().referred
})
if (referred === "yes") return message.reply("You have already provided the user who referred you!")
let referstatus = await db.collection('playerbase').doc(message.member.id.toString()).update({
referred: "yes"
)}
let oldcoins = await db.collection('coins').doc(message.mentions.members.first().id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldcoinsnum = parseInt(oldcoins)
let arguments = 150
let amount = parseInt(arguments)
let newamount = oldcoinsnum + amount
let giveperson = message.mentions.members.first()
if(!amount) return;
db.collection('coins').doc(giveperson.id).update({
balance: newamount
});
message.channel.send("`" + `${amount}` + "`" + " coins given to " + ` ${giveperson}. Thanks for referring!`)
}

module.exports.help = {
    name: "refer"
}