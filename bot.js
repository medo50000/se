const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : ii7mody12');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: `Dragon Bot`,
     details: `Dragon Bot`,
     url: 'http://twitch.tv/ii7mody12',
     state: `Dragon Bot`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'Dragon Bot',
        large_image: `377480353259978752`,
        large_text: `Dragon Bot` }

  }
    });
});




client.login(process.env.BOT_TOKEN);
