const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTMzMjIyNzc4MzkyNTE3MDIxNg.Gjh2nr.GF5DoDXy1GuOpZLbq4o0IQ4d-KOyFVgt8y8jIU'); // Thay YOUR_BOT_TOKEN bằng token bot Discord của bạn
