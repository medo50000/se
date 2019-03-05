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
    application_id: `https://cdn.discordapp.com/attachments/519813903014952968/552459342423523338/KJmQ6r44_400x400.jpg`,
     assets: {
        small_image: `https://cdn.discordapp.com/attachments/519813903014952968/552459342423523338/KJmQ6r44_400x400.jpg`,
        small_text: 'MaN OF DarK',
        large_image: `https://cdn.discordapp.com/attachments/519813903014952968/552459342423523338/KJmQ6r44_400x400.jpg`,
        large_text: `MaN OF DarK` }

  }
    });
});




client.login(process.env.BOT_TOKEN);
