module.exports.run = async (bot, message, args,db) => {
let verify = message.author.id;
let verify2 = message.mentions.members.first().user.id;
if (verify == verify2 ) return message.reply("can't pay yourself");
let arguments = args[1]
let amount = parseInt(arguments)
if(!amount) return message.reply("Please specify an amount")
let oldcoins = await db.collection('coins').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldcoins2 = await db.collection('coins').doc(message.mentions.members.first().id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldcoinsnum = parseInt(oldcoins)
let newamount = oldcoinsnum - amount
if (newamount < 1) return message.reply("No can do pal, you're too broke for that.");
let newamount2 = oldcoins2 + amount
let giveperson = message.mentions.members.first()
db.collection('coins').doc(message.author.id).update({
balance: newamount
});
db.collection('coins').doc(giveperson.id).update({
balance: newamount2
});
let luckyone = message.mentions.members.first()
message.channel.send(`Paid ${luckyone} ${amount} coins. Your new balance is ${newamount}`)
}

module.exports.help = {
    name: "pay"
}