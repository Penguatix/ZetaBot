const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Check The Servercount Of The Bot <3'),
	async execute(interaction) {
		await interaction.reply(`eeee ${interaction.guilds.cache.size} ee`);
	} };