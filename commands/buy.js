module.exports.run = async (bot, message, args,db) => {
let oldcoins = await db.collection('coins').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().balance
})
let oldcoinsnum = parseInt(oldcoins)
let ID = args[0]
let name = "nill"
message.channel.send(`${ID}`)
let name = await db.collection('sales').doc(ID).get().then(function(doc) {
    return doc.data().Name
})
let amount = await db.collection('sales').doc(ID).get().then(function(doc) {
    return doc.data().Price
})
let amount2 = parseInt(amount)
let newamount = oldcoinsnum - amount
if (newamount < 0) return message.reply("You're too broke pal.")
db.collection('coins').doc(message.member.id).update({
balance: newamount
});
message.channel.send(`Bought` + "`" + `#${ID}` + "`" + `${name} for ${amount}`)

let user = message.member.user.tag
let userid = message.member.id
let staffrole = message.guild.roles.find("name", "Eevee");
let helpmessage = args.join(" ");
if (!helpmessage) return message.reply ("Please provide a reason!")
if (!staffrole) return message.reply("No staff role found!")
let staffid = staffrole.id
const channel = await message.guild.createChannel(`${user}`, {
    type: 'text',
    permissionOverwrites: [
        {
            id: message.guild.id,
            deny: ['VIEW_CHANNEL'],
        },
        {
            id: message.author.id,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
        {
            id: `${staffid}`,
            allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
        },
    ],
})
const category = message.guild.channels.find(c => c.name == "Sales" && c.type == "category");
if (!category) return message.reply("Category not found!")
channel.setParent(category.id);

message.reply("You have been given a personal channel! Please be patient and wait for a Staff member to help you out!")
channel.send(`${staffrole} ${message.member} **Needs help** with **${helpmessage}**`) 
}


module.exports.help = {
    name: "buy"
}