const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT: ${client.user.username} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;

  client.on("guildMemberAdd", member => {

  	var channel = member.guild.channels.find("name", "gelen-giden");
  	if (!channel) return;

  	var role = member.guild.roles.find("name", "😘 Yıldırım Ailesi 😘");
  	if (!role) return;

  	member.addRole(role);

  	channel.send(member + " artık " + role + " rolü ile aramızda");

  	member.send("Aramıza hoş geldin! Artık @😘 Yıldırım Ailesi 😘 rolüne sahipsin!")

  });

  const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hey Sen Napıyorsun', 'Ben Sunucu Botuyum Lütfen Beni Sunucunda Dene.')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurla'],
  permLevel: 4
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};

const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('⚠ **|** Üzgünüm, komutu kullanmak için yetkiniz yok.')
 if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', 'temizle komutunu özel mesajlarda kullanılamaz!')}
  let mesajsayisi = parseInt(args.join(' '));
  if (!mesajsayisi) return message.channel.send(' **|** Kaç mesaj sileceğimi belirtmedin!?')
 // if (mesajsayisi.length < 1) return message.channel.send(' **|** Kaç mesaj sileceğimi belirtmedin!?')
  if (mesajsayisi > 101) return message.channel.send(' **|** En fazla **100** mesaj silebilirim.');
  message.channel.bulkDelete(mesajsayisi)
  message.channel.send('<a:heart:535357007444836352>  **|** Tamamdır, **' + mesajsayisi + '** adet mesaj sildim.')
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};

const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 2
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};



  client.on('guildBanAdd' , (guild, user) => {
    let Banyiyenler = guild.channels.find('name', 'ban-yiyenler');
    if (!Banyiyenler) return;
    Banyiyenler.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!**  '+ user.username +  ' **Aileden Kovuldun Güle Güle** :fist: :writing_hand:  :spy:' );
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === 'sa') {
        msg.reply(' :heart: Aleyküm Selam Yıldırım Ailesine Hoşgeldin :heart: !');
  }
  });


client.login(process.env.BOT_TOKEN);
