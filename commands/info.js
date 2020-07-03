const Discord = require("discord.js");
let weight = "Weight is not defined for this pokémon."
let height = "None"
let dexno = "0"
let name = "None"
let types = "None"
let weakness = "none"
let resistance = "none"
let abilities = "none"
let bio = "none"
let evolution = "none"

module.exports.run = async (bot, message, args,db, Axios) => {
let input = args[0]
let response = input.toLowerCase();
if (response == "bulbasaur") {
    name = "Bulbasaur"
    types = "Grass/Poison"
    dexno = "001"
    weight = "15.2 lbs/6.9 kg"
    height = "2 Feet, 4 Inches/0.7 m"
    abilities = "Overgrow"
    weakness = "Flying, Fire, Psychic, Ice"
    resistance = "Fighting, Water, Grass, Electric, Fairy"
    bio = "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
    evolution = "Bulbasaur > Ivysaur > Venusaur"
} else if (response == "ivysaur") {
    name = "Ivysaur"
    types = "Grass/Poison"
    dexno = "002"
    weight = "28.7 lbs/13.0 kg"
    height = "3 Feet, 3 Inches/1 m"
    abilities = "Overgrow"
    weakness = "Flying, Fire, Psychic, Ice"
    resistance = "Fighting, Water, Grass, Electric, Fairy"
    bio = "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon."
    evolution = "Bulbasaur > Ivysaur > Venusaur"
} else if (response == "venusaur") {
  name = "Venusaur"
  types = "Grass/Poison"
  dexno = "003"
  weight = "220.5 lbs/100 kg"
  height = "6 Feet, 7 Inches/2 m"
  abilities = "Overgrow"
  weakness = "Flying, Fire, Psychic, Ice"
  resistance = "Fighting, Water, Grass, Electric, Fairy"
  bio = "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people."
  evolution = "Bulbasaur > Ivysaur > Venusaur"
} else if (response == "charmander") {
  name = "Charmander"
  types = "Fire"
  dexno = "004"
  weight = "18.7 lbs/8.5 kg"
  height = "2 Feet/0.6 m"
  abilities = "Blaze"
  weakness = "Ground, Rock, Water"
  resistance = "Bug, Steel, Fire, Grass, Ice, Fairy"
  bio = "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
  evolution = "Charmander > Charmeleon > Charizard"
} else if (response == "charmeleon") {
  name = "Charmeleon"
  types = "Fire"
  dexno = "005"
  weight = "41.9 lbs/19 kg"
  height = "3 Feet, 2 Inches/1.1 m"
  abilities = "Blaze"
  weakness = "Ground, Rock, Water"
  resistance = "Bug, Steel, Fire, Grass, Ice, Fairy"
  bio = "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color."
  evolution = "Charmander > Charmeleon > Charizard"
} else if (response == "charizard") {
  name = "Charizard"
  types = "Fire/Flying"
  dexno = "006"
  weight = "199.5 lbs/90.5 kg"
  height = "5 Feet, 7 Inches/1.7 m"
  abilities = "Blaze"
  weakness = "Rock, Water, Electric"
  resistance = "Fighting, Bug, Steel, Fire, Grass, Fairy"
  bio = "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
  evolution = "Charmander > Charmeleon > Charizard"
}








else {
  return message.reply("This is not a valid pokémon or we don't have data for it yet.")
}



let derp = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/` + `${dexno}` + `.png`)	
const embed = new Discord.RichEmbed()
.setTitle(name)
.setURL("https://www.pokemon.com/us/pokedex/" + `${response}`)
.setColor(0x00AE86)
.addField("Dex number", `${dexno}`)
.addField("Types", `${types}`)
.addField("Abilities", `${abilities}`)
.addBlankField()
.addField("Weight", `${weight}`)
.addField("Height", `${height}`)
.addBlankField()
.addField("Weak to", `${weakness}`)
.addField("Resistant to", `${resistance}`)
.addBlankField()
.addField("Biography", `${bio}`)
.addBlankField()
.addField("Evolutionary line", `${evolution}`)
.setImage(derp)
.setFooter("Use !info (pokémon) for information about another pokémon.")
message.channel.send(embed)

for (let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then(res => res.json())
      .then(pokemon => {
        console.log(pokemon);
      });
  }
}

module.exports.help = {
    name: "info"
}