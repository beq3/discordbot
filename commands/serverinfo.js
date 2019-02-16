const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var sicon = message.guild.iconURL;
          var sembed = new Discord.RichEmbed()
              .setDescription("Informações do Servidor")
              .setColor("#15f153")
              .setThumbnail(sicon)
              .addField("Nome do Servidor:", message.guild.name)
              .addField("Criado em", message.guild.createdAt)
              .addField("Juntas-te ao Servidor", message.member.joinedAt)
              .addField("Total de Membros", message.guild.memberCount)
              .setFooter(`${bot.user.username} foi Criado Por zyeinn `);
          message.channel.send(sembed);
}

module.exports.help = {
    name: "serverinfo"
}