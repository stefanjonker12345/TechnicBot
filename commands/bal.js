module.exports.run = async (bot, message, args,db) => {
let title = "Their"
balances = message.mentions.members.first()
if (!balances) {
balances = message.author
title = "Your"
}
let coins = await db.collection('coins').doc(balances.id.toString()).get().then(function(doc) {
    return doc.data().balance
})
message.channel.send(`${title} balance is ` + "`" + `${coins}` + "`" + " Coins")
}


module.exports.help = {
    name: "bal"
}