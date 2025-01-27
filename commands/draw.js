const Discord = require('discord.js');

var row = new Discord.ActionRowBuilder().addComponents(
    new Discord.StringSelectMenuBuilder()
        .setCustomId('drawOptions')
        .setPlaceholder('Quelle est la catégorie de la question qui t\'as été posé ?')
        .addOptions([
            {
                "label": "Correspondance | Pioche 3 - Garde 1",
                "value": "matching",
                "emoji": {
                    "name": "matching",
                    "id": "1331230731208233033"
                }
            },
            {
                "label": "Mesure | Pioche 3 - Garde 1",
                "value": "measuring",
                "emoji": {
                    "name": "measuring",
                    "id": "1331230732558794752"
                }
            },
            {
                "label": "Photos | Pioche 3 - Garde 1",
                "value": "photos",
                "emoji": {
                    "name": "photos",
                    "id": "1331230734068748338"
                }
            },
            {
                "label": "Radar | Pioche 2 - Garde 1",
                "value": "radar",
                "emoji": {
                    "name": "radar",
                    "id": "1331230735650132070"
                }
            },
            {
                "label": "Tentacules | Pioche 4 - Garde 2",
                "value": "tentacles",
                "emoji": {
                    "name": "tentacles",
                    "id": "1331230736811819101"
                }
            },
            {
                "label": "Thermomètre | Pioche 3 - Garde 1",
                "value": "thermometer",
                "emoji": {
                    "name": "thermometer",
                    "id": "1331230737898405918"
                }
            }
        ])
)

module.exports = {
    name: 'drawoptions',
    description: 'Tire les cartes après avoir répondu à une question',

    async run(client, msg, args, author) {
        msg.channel.send({components: [row]});
        msg.reply({content: 'Voilà pour toi !', ephemeral: true});
    }
}