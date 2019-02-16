const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var bicon = bot.user.displayAvatarURL;
    var embed = new Discord.RichEmbed()
              .setDescription(`Comandos do ${bot.user.username} `)
              .setColor("#15f153")
              .setThumbnail(bicon)
              .addField("!botinfo", `Informações do ${bot.user.username}.`)
              .addField("!serverinfo", `Informações do ${message.guild.name}.`)
              .addField("!ping", `Latência do ${message.guild.name}.`)
              .addField("!clear", `Limpar as Mensagems.` )
              .addField("!addrole", `Adicionar Roles.`)
              .addField("!removerole", `Remover Roles.`)
              .addField("!kick", `Kickar o Player que Mencionou.`)
              .addField("!ban", `Banir o Player que Mencionou.`)
              .addField("!8ball", `O ${bot.user.username} Irá responder a sua Pergunta.`)
              .addField("!roast", `O ${bot.user.username} Irá dar Roast ao Player que Mencionou.`)
              .setFooter(`${bot.user.username} foi Criado Por zyeinn `);
          message.channel.sendEmbed(embed);

}

module.exports.help = {
    name: "comandos"
}