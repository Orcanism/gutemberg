const Discord = require('discord.js');
const { decode } = require('pluscodes');

module.exports = {
    name: 'thermometer',
    description: 'Calcule automatiquement si les seekers se sont réchauffé ou refroidi.',
    options: [
        {
            type: 'string',
            name: 'hiderpluscode',
            description: 'Position du hider',
            required: true
        },
        {
            type: 'string',
            name: 'seekerstart',
            description: 'Départ des seekers',
            required: true
        },
        {
            type: 'string',
            name: 'seekerend',
            description: 'Nouvelle position des seekers',
            required: true
        }
    ],

    async run(client, msg, args, author) {
        console.log(decode('8FW9' + args._hoistedOptions[0].value));
        console.log(decode('8FW9' + args._hoistedOptions[1].value));
        console.log(decode('8FW9' + args._hoistedOptions[2].value));
        msg.reply('yousk2');
    }
}