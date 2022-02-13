const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {


const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('📑・Liste des commandes.')
	.setURL('https://www.instagram.com/zone_cook')
	.setAuthor(config.Speudo, config.Image, 'https://www.instagram.com/zone_cook/')
	.setThumbnail(config.Image)
	.addFields(
    { name: '📃 help', value: 'Affiche la liste des commandes du bot.' },
    { name: '🔗 liens', value: 'Pour voir nos réseaux sociaux.' },
    { name: '📦 taille', value: 'Pour convertire des tailles de chaussure' },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help"
}