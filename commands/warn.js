module.exports.run = async (bot, message, args, db) => {
message.delete()
let reason = args.slice(1).join(' ');
let warnmember = message.mentions.members.first()
let warns = await db.collection('members').doc(warnmember.id.toString()).get().then(function(doc) {
    return doc.data().warns
})
let newwarns = warns + 1
db.collection('coins').doc(giveperson.id).update({
warns: reason
});
}

module.exports.help = {
    name: "warn"
}