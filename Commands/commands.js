const Discord = require('discord.js');

module.exports = {
	data: new Discord.SlashCommandBuilder()
		.setName('commands')
		.setDescription('List Of Commands <3'),
	async execute(interaction) {
		const infoEmbed = new Discord.EmbedBuilder()
			.setColor('#57a3bd')
			.setTitle('Commands')
			.addFields(
				{ name: '━━ 🍀 ・ General commands ━━', value: '`/help`, `/ping`, `/avatar`, `/user`, `/stats`, `/server`,  `/prune`' },
				{ name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵' },
			);
		interaction.reply({ embeds: [infoEmbed] }).catch(console.error);
	},
};
