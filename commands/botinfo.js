const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var bicon = bot.user.displayAvatarURL;
    var embed = new Discord.RichEmbed()
              .setDescription(`Informações do ${bot.user.username} `)
              .setColor("#15f153")
              .setThumbnail(bicon)
              .addField("Nome", bot.user.username)
              .addField("Criado em", bot.user.createdAt)
              .addField("Prefix", "  !  ")
              .setFooter(`${bot.user.username} foi Criado Por zyeinn `);
          message.channel.sendEmbed(embed);

}

module.exports.help = {
    name: "botinfo"
}