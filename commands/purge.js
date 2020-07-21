module.exports.run = async (bot, message, args, db) => {
 if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
        const deleteCount = parseInt(args[0], 10);
        const deleteCount2 = parseInt(deleteCount + 1);
        if (!deleteCount2 > 99) return message.reply("Please give an amount between 0 and 99");

        if (!deleteCount || deleteCount < 1 || deleteCount > 100)// min and max purge
            return message.reply("Please provide a number between 1 and 99 for the number of messages to delete");

        const fetched = await message.channel.fetchMessages({limit: deleteCount2});
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}.`));
}

module.exports.help = {
    name: "purge"
}