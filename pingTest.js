const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("I am ready");
});

client.on("message", (message) => {
	const email = message.content.match(/^\!verify ((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))$/);
	if(email) {
		message.channel.send(email[1]);
	}
});

client.login(
	fs.readFileSync(`${__dirname}/key.txt`, 'utf8')
		.replace(/[\r\n]/g, ""),
);
