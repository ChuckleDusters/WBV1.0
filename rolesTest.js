const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("I am ready");
});

client.on("message", (message) => {
	if(message.content === "!rolesroulette") {
		let role = message.guild.roles.random();
		while (role.name === "@everyone" || role.name === "TestBot") {
			role = message.guild.roles.random();
		}
		console.log(role.name);
		message.member.addRole(role);
		message.channel.send(`Gave @${message.author.username} ${role.name} role`);
	}
});

client.login(
	fs.readFileSync(`${__dirname}/key.txt`, 'utf8')
		.replace(/[\r\n]/g, "")
);

