require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, Options } = require('discord.js');

const commands = [
    {
        name: 'add',
        description: 'Add two numbers',
        options: [
            {
            name: 'num1',
            description: 'First Number',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'num2',
            description: 'Second Number',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands },
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(`Error: ${error}`);
    }
})();
