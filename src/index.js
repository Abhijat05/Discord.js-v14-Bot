require('dotenv').config();
const {Client, IntentsBitField, Message} = require('discord.js')
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => {
    console.log(`${client.user.tag}! is on live now!`);
})


client.on('interactionCreate',(interaction)=>{


    if(interaction.commandName === 'add'){
        const num1 = interaction.options.get('num1').value;
        const num2 = interaction.options.get('num2').value;
        interaction.reply(`The sum is ${num1 + num2}`);
    }
})

client.login(process.env.TOKEN);