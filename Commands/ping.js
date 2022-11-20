const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check The Ping <3'),
	async execute(interaction) {
		await interaction.reply(`Pong! Bot ping is ${interaction.client.ws.ping}ms`);
	},
};
