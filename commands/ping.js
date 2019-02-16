const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    var ms = await message.channel.send("Ping?")
    var botms = ms.createdTimestamp - message.createdTimestamp;
    ms.edit('A Latência é ' + botms + ' ms.  A Latencia da API é ' + Math.round(bot.ping)+ 'ms.');

}

module.exports.help = {
    name: "ping"
}