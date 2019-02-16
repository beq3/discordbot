const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
     if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
  
    let banEmbed = new Discord.RichEmbed()
            .setDescription("~Ban~")
            .setColor("#bc0000")
            .addField("Banned User", `${bUser} with ID ${bUser.id}`)
            .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
            .addField("Banned In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", bReason);

    let kicksandbanschannel = message.guild.channels.find(`name`, "kicksandbans");
        if(!kicksandbanschannel) return message.channel.send("Não consigo encontrar a Sala kicksandbans");

        message.guild.member(bUser).ban(bReason);
        kicksandbanschannel.send(banEmbed);
    return;
 }
 
module.exports.help = {
  name: "ban"
};