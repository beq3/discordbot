const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);

  bot.user.setActivity("Prefix !", {type: "WATCHING"});

  //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  /*

 var roast = [
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

]

var fortunes = [
  "No",
  "Sim",
  "Talvez"
]


bot.on("message", function(message){

  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(config.prefix)) return;

  var args = message.content.substring(config.prefix.length).split(" ");


  switch (args[0].toLowerCase()) {
      case "ping":
          message.channel.sendMessage("Pong!");

        break;

      case "info":
          message.channel.sendMessage("I'm Groot!");

        break;

      case "8ball":
          if (args[1]) message.channel.sendMessage(roast[Math.floor(Math.random() * roast.length)]);
         else message.channel.sendMessage("Introduza a Pergunta!")

        break;

      case "botinfo":
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

          break;

      case "serverinfo":
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
          break;

      case "roast":
          var roastuser = message.guild.member(message.mentions.users.first())
           if (roastuser) return message.channel.sendMessage(roast[Math.floor(Math.random() * roast.length)]);
           if (!roastuser) return message.channel.send("Mencione Alguem para Dar Roast!");
          
          break;

      default:
          message.channel.sendMessage("Comando Inválido!");
          break;
  }
})
*/


});
bot.login(config.token);
