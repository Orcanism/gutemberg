const Discord = require('discord.js');
const client = new Discord.Client({intents : 3276799});
const commandHandler = require('./handlers/commandsHanlder');
const slashCommandHandler = require('./handlers/slashCommandsHanlder');

const private = require('./private.json');

client.commands = new Discord.Collection();

client.login(private.token);
commandHandler(client);

client.on('ready', async () => {
    console.log('Alexandre is ready !');
    await slashCommandHandler(client);
})

client.on('interactionCreate', async interaction => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        let command = require(`./commands/${interaction.commandName}`);
        command.run(client, interaction, interaction.options, interaction.user);
    }
})