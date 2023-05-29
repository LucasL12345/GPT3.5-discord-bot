// require('dotenv').config()
// const { Client, IntentsBitField } = require('discord.js');

// const client = new Client({
//     intents: [
//         IntentsBitField.Flags.Guilds,
//         IntentsBitField.Flags.GuildMembers,
//         IntentsBitField.Flags.GuildMessages,
//         IntentsBitField.Flags.MessageContent,
//     ]
// });

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
//   });
  
//   const responses = ['hohoho', 'estoyyy', 'moyyy', 'voyyy', 'vamos', 'porQUE?', 'jajaja', 'THEBEST', 'Expect Nothing...', 'a single death can change evvverything', 'tick tock TICK TOCK', 'hush now', ':panda_face: :crown:'];
//   const targetUserTag = 'PANDA#0305';  // The Discord tag of the user you want to respond to
  
//   client.on('messageCreate', message => {
//       if (message.author.bot) return;
  
//       // Check if the message was sent by the target user
//       if (message.author.tag === targetUserTag) {
//           // Select a random response
//           const randomResponse = responses[Math.floor(Math.random() * responses.length)];
          
//           // Send the response
//           message.channel.send(randomResponse);
//       }
//   });
  
//   client.login(process.env.TOKEN);
