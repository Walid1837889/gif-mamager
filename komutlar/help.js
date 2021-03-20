const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setDescription(`**[support](https://discord.gg/AQgmEJ2)** - [invite](https://discordapp.com/oauth2/authorize?client_id=743085172085358683&scope=bot&permissions=8)`)
.addField(`Gif Bot`,
 `-Boy
  -Girl
  -cuople
  -baby
  -anime
  -neon
  -emoji
  -smoking
  -animals
  -aesthetic`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'rexuss',
  usage: 'help'
};