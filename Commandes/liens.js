const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {

const cmdEmbed = new Discord.MessageEmbed()
	.setColor(config.color)
	.setTitle('🔗・Voici nos réseaux sociaux')
	.setURL('https://www.instagram.com/zone_cook/')
	.setAuthor(config.Speudo, config.Image, 'https://www.instagram.com/zone_cook/')
	.setThumbnail(config.Image)
	.addFields(
    { name: 'Insta', value: config.Insta },
    )
	
	.setTimestamp()
	.setFooter(config.Speudo, config.Image);

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"liens"
}