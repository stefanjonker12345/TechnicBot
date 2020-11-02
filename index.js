// Load up the discord.js library
const Discord = require("discord.js");
const fs = require('fs');
const active = new Map();
const talkedRecently = new Set();
// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

let prefix;

const firebase = require('firebase/app');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
let db = admin.firestore();

// COMMAND HANDLER 1
fs.readdir("./commands/", (err, files) => {

    if (err) return console.log(err);

    let cmdFiles = files.filter(f => f.split(".").pop() === "js")
    if (cmdFiles.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    cmdFiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i+1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    })

})

bot.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    // Example of changing the bot's playing game to something useful. `client.user` is what the
    // docs refer to as the "ClientUser".
    bot.user.setActivity(`Test`);
});


bot.on('guildCreate', async gData => {
    db.collection('guilds').doc(gData.id).set({
        'guildID': gData.id,
        'guildName': gData.name,
        'guildOwner': gData.owner.user.username,
        'guildOwnerID': gData.owner.id,
        'guildMemberCount': gData.memberCount,
        'prefix': '!'
    })
});

bot.on("message", async message => {
    // This event will run on every single message received, from any channel or DM.

    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot) return;

    // Also good practice to ignore any message that does not start with our prefix, 
    // which is set in the configuration file.
    // if(message.content.indexOf(config.prefix) !== 0) return;

    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    db.collection('guilds').doc(message.guild.id).get().then((q) => {
        if (q.exists) {
            prefix = q.data().prefix;
        }
    }).then(async () => {
        if (message.author.bot) return;	
        if (message.channel.type === "dm") return;
        // args = ["Is", "this", "the", "real", "life?"]
        let messageArray = message.content.split(" ");
        let command = messageArray[0];
        let args = messageArray.slice(1);
        
        var option = {
            active: active
        }
        
        if (!command.startsWith(prefix)) return;
        
        let cmdFiles = bot.commands.get(command.slice(prefix.length));
        if (cmdFiles) {
            await cmdFiles.run(bot, message, args, db, option);
        }
    })


    let listData = await db.collection('list').doc(message.member.id.toString());
    await listData.get().then(doc => {
            console.log("TEST")
            console.log(doc)
            if (doc.exists) {
                return true;
            } else {
                db.collection('list').doc('list').set({
                    "Hi": 'e'
                }).then(() => {
                    console.log('Added user ' + message.member.id.toString());
                });
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
		
let hungergamesData = await db.collection('playerbase').doc(message.member.id.toString());
    await hungergamesData.get().then(doc => {
            console.log(doc)
            if (doc.exists) {
                return true;
            } else {
                db.collection('playerbase').doc(message.member.id.toString()).set({
					"Referred": 'no'
                }).then(() => {
                    console.log('Added database for players');
                });
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
		
	    let playerData = await db.collection('members').doc(message.member.id.toString());
    await playerData.get().then(doc => {
            console.log(doc)
            if (doc.exists) {
                return true;
            } else {
                db.collection('members').doc(message.member.id.toString()).set({
					warns: 0
                }).then(() => {
                    console.log('Added user ' + message.member.id.toString());
                });
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    let pokeData = await db.collection('pokemon').doc(message.member.id.toString());
    await pokeData.get().then(doc => {
            console.log("TEST")
            console.log(doc)
            if (doc.exists) {
                return true;
            } else {
                db.collection('pokemon').doc(message.member.id.toString()).set({
				coll: 0 
                }).then(() => {
                    console.log('Added user ' + message.member.id.toString());
                });
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
let nameData = await db.collection('names').doc(message.member.id.toString());
    await nameData.get().then(doc => {
            console.log("TEST")
            console.log(doc)
            if (doc.exists) {
                return true;
            } else {
                db.collection('names').doc(message.member.id.toString()).set({
                }).then(() => {
                    console.log('Added user ' + message.member.id.toString());
                });
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
let coindata = await db.collection('coins').doc(message.member.id.toString());
    await coindata.get().then(doc => {
            console.log("Coins db created successfully :D")
            console.log(doc)
            if (doc.exists) {
                return true;
            } else {
                db.collection('coins').doc(message.member.id.toString()).set({
				balance: 0
                }).then(() => {
                    console.log('Added user ' + message.member.id.toString());
                });
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
let oldcoins3 = await db.collection('coins').doc(message.member.id.toString()).get().then(function(doc) {
    return doc.data().balance
})

let newamount = oldcoins3 + 1
if (!talkedRecently.has(message.author.id)) {
db.collection('coins').doc(message.member.id).update({
balance: newamount
	})}
 talkedRecently.add(message.author.id);
    setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
    }, 30000);
});

bot.login(process.env.token);
