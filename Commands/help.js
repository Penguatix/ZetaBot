const Discord = require('discord.js');

module.exports = {
	data: new Discord.SlashCommandBuilder()
		.setName('help')
		.setDescription('Help For You <3'),
	async execute(interaction) {
		const infoEmbed = new Discord.EmbedBuilder()
			.setColor('#57a3bd')
			.setTitle('Invite')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=1043511107018559488&permissions=8&scope=bot%20applications.commands')
			.addFields(
				{ name: '━━ 🍀 ・ Commands ━━', value: '`/commands`' },
				{ name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵' },
				{ name: '━━ 🍀 ・ Support ━━', value: 'https://discord.gg/uy2eWmyj26' },
				{ name: '឵឵  ឵឵  ឵឵', value: '឵឵  ឵឵  ឵឵' },
			);
		interaction.reply({ embeds: [infoEmbed] }).catch(console.error);
	},
};