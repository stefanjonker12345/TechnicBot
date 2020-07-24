module.exports.run = async (bot, message, args,db) => {
let oldcoins = await db.collection('coins').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldcoinsnum = parseInt(oldcoins)
let item = args[0]
let amount = 0;
let rank = "NaN"
if (item == "Donator") {
amount = 100
rank = "Donator"
} else if (item == "Ultimate") {
amount = 150
rank = "Donator Ultimate"
} else {
 return message.reply ("Item not found.")
}
let amount2 = parseInt(amount)
let newamount = oldcoinsnum - amount
if (newamount < 0) return message.reply("You're too broke pal.")
db.collection('coins').doc(message.member.id).update({
balance: newamount
});
let memberRole = message.guild.roles.find("name", `${rank}`)
let member = message.member
member.addRole(memberRole)
message.channel.send(`${item} bought for ` + "`" + `${amount}` + "`" + " coins")
}


module.exports.help = {
    name: "buy"
}