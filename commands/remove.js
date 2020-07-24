module.exports.run = async (bot, message, args,db) => {
let oldcoins = await db.collection('coins').doc(message.mentions.members.first().id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldcoinsnum = parseInt(oldcoins)
let arguments = args[1]
let amount = parseInt(arguments)
let newamount = oldcoinsnum - amount
if (newamount < 0) return message.reply("You can't make their balance negative.")
let giveperson = message.mentions.members.first()
if(!amount) return;
db.collection('coins').doc(giveperson.id).update({
balance: newamount
});
message.channel.send("`" + `${amount}` + "`" + " coins taken from " + ` ${giveperson}. Their new balance is ${newamount}`)
}

module.exports.help = {
    name: "remove"
}