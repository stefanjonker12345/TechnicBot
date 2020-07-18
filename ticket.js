module.exports.run = async (bot, message, args, db) => {
message.delete()
let user = message.member.user.tag
let userid = message.member.id
let staffrole = message.guild.roles.find("name", "Staff");
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
const category = message.guild.channels.find(c => c.name == "Modmail" && c.type == "category");
if (!category) return message.reply("Category not found!")
channel.setParent(category.id);

message.reply("You have been given a personal channel! Please be patient and wait for a Staff member to help you out!")
channel.send(`${staffrole} ${message.member} **Needs help** with **${helpmessage}**`) 
}

module.exports.help = {
    name: "ticket"
}