module.exports = {
	name: "set-dunce-role",
	description: "Sets the dunce role to the ID provided.",
	args: true,
	guildOnly: true,
	ownerOnly: true,
	usage: "<role ID>",
	execute(message, args) {
		const role = message.guild.roles
			.fetch(args[0])
			.then((role) => {
				console.log(role);
				message.client.settings.set(message.guild.id, args[0], "dunceRoleID");
				console.log(message.client.settings);
			})
			.catch(
				(e) =>
					console.error(e) &&
					message.channel.send("There was a problem finding a role with that ID."),
			);
	},
};
