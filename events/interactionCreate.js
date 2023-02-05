const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        try {
            return command.execute(interaction);
        } catch (error) {
            console.error(error);
            return interaction.reply({ content: 'An unknown error occurred. Support server: https://discord.gg/XuZNNJbf4U', ephemeral: true });
        }
    },
}