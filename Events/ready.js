const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setActivity('Under Development', {
			type: 'PLAYING' }),
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};