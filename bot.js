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
    application_id: '552459342423523339',
     assets: {
        small_image: '552459342423523339',
        small_text: 'MaN OF DarK',
        large_image: '552459342423523339',
        large_text: `MaN OF DarK` }

  }
    });
});




client.login(process.env.BOT_TOKEN);
