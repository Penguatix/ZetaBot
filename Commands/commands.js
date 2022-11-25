const Discord = require('discord.js');

module.exports = {
	data: new Discord.SlashCommandBuilder()
		.setName('commands')
		.setDescription('List Of Commands <3'),
	async execute(interaction) {
		const p = '/';
		const infoEmbed = new Discord.EmbedBuilder()
			.setColor('#57a3bd')
			.setTitle('Commands')
			.addFields(
				{ name: '━━ 🍀 ・ General commands ━━', value: `\`${p}help\`, \`${p}ping\`, \`${p}avatar\`, \`${p}user\`, \`${p}stats\`, \`${p}server\`,  \`${p}prune\`` },
				{ name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵' },
			);
		interaction.reply({ embeds: [infoEmbed] }).catch(console.error);
	},
};