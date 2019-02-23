const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : ii7mody12');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: `MaN OF DarK`,
     details: `MaN OF DarK`,
     url: 'https://www.twitch.tv/amira',
     state: `MaN OF DarK`,
    application_id: '391322002692112384',
     assets: {
        small_image: `391322002692112384`,
        small_text: 'MaN OF DarK',
        large_image: `391322002692112384`,
        large_text: `MaN OF DarK` }

  }
    });
});




client.login(process.env.BOT_TOKEN);
