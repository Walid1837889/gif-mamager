const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('RANDOM') 
.setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
.setImage('https://media.discordapp.net/attachments/711465242798063706/801076445564502046/a_75e90ca13d798a0f6a85a334a457c0d1.gif')
.setThumbnail(`https://cdn.discordapp.com/avatars/794936259767566376/283349b4730cea96fa117da15772fd3e.png?size=1024`)
.addField(`Gif Bot`,
 `*boy
  *girl
  *cuople
  *baby
  *anime
  *neon
  *emoji
  *smoking
  *animals
  *aesthetic
  *avatar
  *about
  *ping`)
    
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