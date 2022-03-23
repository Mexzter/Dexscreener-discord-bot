const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
const axios = require('axios');


client.on("ready", async () => {
    console.log(`${client.user.username} is ready!`);

    // do it immediately on start
    call();

    setInterval(()=> {
        call()
    }, config.interval_ms);

});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'stats') {
      await interaction.reply('Pong!');
    }
  });

var call = async () => {
    axios.get(config.pair)
    .then(function (response) {
        console.log(response.data.pair.priceUsd)
        client.user.setActivity("$" + response.data.pair.priceUsd, {type: "PLAYING"});
    })
}

client.login(config.token);