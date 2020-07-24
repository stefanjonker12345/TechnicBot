module.exports.run = async (bot, message, args,db) => {
 if (!message.member.hasPermission('BAN_MEMBERS'))
      return message.reply("Sorry, you don't have permissions to use this!");   
let oldcoins = await db.collection('coins').doc(message.mentions.members.first().id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldcoinsnum = parseInt(oldcoins)
let arguments = args[1]
let amount = parseInt(arguments)
let newamount = oldcoinsnum + amount
let giveperson = message.mentions.members.first()
if(!amount) return;
db.collection('coins').doc(giveperson.id).update({
balance: newamount
});
message.channel.send("`" + `${amount}` + "`" + " coins given to " + ` ${giveperson}. Their new balance is ${newamount}`)
}

module.exports.help = {
    name: "give"
}