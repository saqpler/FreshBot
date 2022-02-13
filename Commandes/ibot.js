const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new Discord.MessageEmbed()
      .setColor('#00BDFF')
      .setTitle('📈・Information concernant le bot !')
      .setURL('https://www.instagram.com/fresh_storefr/')
      .setAuthor(config.Speudo, config.Image, 'https://www.instagram.com/fresh_storefr/')
      .setThumbnail(config.Image)
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '13/04/2021', inline: true },
          { name: '⌨ | Développeur :', value: 'Bitoku', inline: true },
      )
      .addField('Présence :', `${client.guilds.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(config.Speudo, config.Image);
  
  message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:"ibot"
}