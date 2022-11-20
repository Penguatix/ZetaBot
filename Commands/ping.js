const wait = require('node:timers/promises').setTimeout;
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Check The Ping <3'),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(4000);
		await interaction.editReply('Pong!');
		const message = await interaction.fetchReply();
		console.log(message);
		await interaction.followUp('Pong Again');
	},
};
