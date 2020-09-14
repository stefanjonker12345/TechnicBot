module.exports.run = async (bot, message, args, db) => {
message.delete()
let reason = args.slice(1).join(' ');
let warnmember = message.mentions.members.first()
if(!reason) return message.reply("Please provide a reason!")
if(!warnmember) return message.reply("Please provide a user to warn!")
let warns = await db.collection('members').doc(warnmember.id.toString()).get().then(function(doc) {
    return doc.data().warns
})
let newwarns = warns + 1
db.collection('members').doc(warnmember.id.toString()).update({	
[newwarns]: reason
});
db.collection('members').doc(warnmember.id.toString()).update({	
warns: newwarns
});
}

module.exports.help = {
    name: "warn"
}