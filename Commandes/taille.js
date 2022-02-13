const Discord = require("discord.js");
const config = require("./config.json");
var prefix = config.prefix;

module.exports.run = async(client, message, args) => {

    if (message.content.split(" ").length < 4) {
      message.channel.send("Il manque quelque chose. Utilisez `!help` pour voir un exemple de la commande.")
    } else {

      let size = parseInt(message.content.split(" ")[1])
      let from = message.content.split(" ")[2].toUpperCase()
      let to = message.content.split(" ")[3].toUpperCase()
      let fees = {
        "USUK": -1,
        "USEU": 33,
        "UKUS": 1,
        "UKEU": 34,
        "EUUS": -33,
        "EUUK": -34,
      }
      let acceptable = ['US', 'UK', 'EU']
      if (acceptable.includes(from) && acceptable.includes(to)) {
        let new_size = size + fees[`${from}${to}`]
        const cmdEmbed = new Discord.MessageEmbed()
        .setTitle("Convertisseur de taille")
        .setURL('https://www.instagram.com/zone_cook')
        .setAuthor(config.Speudo, config.Image, 'https://www.instagram.com/zone_cook/')
        .setThumbnail(config.Image)
        .setDescription(`La taille ${size} en ${from} équivaut a la taille ${new_size} en ${to}.`)

        message.channel.send(cmdEmbed)
      }
    }
  }

module.exports.help = {
    name: 'taille'
};