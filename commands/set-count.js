module.exports = {
	name: "set-count",
	description: "Sets the value of nextCount the number provided by the user.",
	args: true,
	guildOnly: true,
	ownerOnly: true,
	usage: "<number>",
	execute(message, args) {
		// Regex testing for a string being a number.
		const isNumber = (n) => /^\d+$/.test(n);

		// Delete the message if it doesn't start with a number.
		if (!isNumber(args[0])) {
			return message.channel.send("I'm sorry, that's not a valid number.");
		}

		// Parse the argument as an integer and update the client's settings.
		message.client.settings.set(message.guild.id, parseInt(args[0], 10), "nextCount");

		// Update the channel topic with the new value in nextCount.
		// message.client.channels
		// 	.fetch(message.client.settings.get(message.guild.id, "countingChannelID"))
		// 	.then((countingChannel) =>
		// 		countingChannel
		// 			.setTopic(message.client.settings.get(message.guild.id, "nextCount"))
		// 			.catch((e) => console.error(e)),
		// 	);

		message.channel.send(
			`The count has been updated to \`${message.client.settings.get(
				message.guild.id,
				"nextCount",
			)}\`.`,
		);
	},
};
