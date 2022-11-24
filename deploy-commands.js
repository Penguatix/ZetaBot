const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');
const fs = require('node:fs');

const commands = [];
// Grab all the command files from the commands directory you created earlier
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(token);

// and deploy your commands!
console.log(`Started refreshing ${commands.length} application (/) commands.`);
rest.put(Routes.applicationCommands(clientId), { body: commands }).then((data) => console.log(`Successfully registered ${data.length} commands.`)).catch(console.error);
