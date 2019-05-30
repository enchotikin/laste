const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

client.on("guildMemberAdd", member => {

	var channel = member.guild.channels.find("name", "gelen-giden");
	if (!channel) return;

	var role = member.guild.roles.find("name", "😘 Yıldırım Ailesi 😘");
	if (!role) return;

	member.addRole(role);

	channel.send(member + " artık " + role + " rolü ile aramızda");

	member.send("Aramıza hoş geldin! Artık @😘 Yıldırım Ailesi 😘 rolüne sahipsin!")

});

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
