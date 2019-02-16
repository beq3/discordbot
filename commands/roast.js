const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let roast = [
        "No",
        "hmm",
        "Sim",
        "Talvez",
        "que buraco",
        "Vai ta Foder",
        "amansa corno",
        "you burro man",
        "olha-te ao espelho",
        "es especial para mim",
        "és tao lindo como o truta",
        "quando saires do 5 ano falamos",
        "rush b de costas com a tua prima",
        "vou te mandar o teu ip por correio",
        "Ei zé dou te um puto de um estoiro",
        "vai jogar fortnite marreta do caralho",
        "isso é o que teu pai achou quando te teve",
        "Parabéns, és do caralho devias escrever um livro.",
        "O que queres pah, mato a tua Mãe para fazer arroz de puta",
        "deixa-me so sacar o ip do @Touklwez que eu já falo contigo",
      
      ];
    var roastuser = message.guild.member(message.mentions.users.first())
    if (roastuser) return message.channel.sendMessage(roast[Math.floor(Math.random() * roast.length)]);
    if (!roastuser) return message.channel.send("Mencione Alguem para Dar Roast!");
    
}

module.exports.help = {
    name: "roast"
}