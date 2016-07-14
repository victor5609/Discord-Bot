var Discord = require("discord.js");

// Make a client to add events to
var client = new Discord.Client();
var request = require("superagent");

// Debug and warning handlers, these log debug messages and warnings to console
client.on("debug", (m) => console.log("[debug]", m));
client.on("warn", (m) => console.log("[warn]", m));

// Directory from which to load sound files. Before testing, make sure to change
// this to the actual directory you want to load stuff from
var LOADDIR = "C:/Users/User/Music/"

// Hardcoded Discord email and password. Make sure to change this too
var D_EMAIL = "email@example.com",
		D_PASS = "hunter2"

// The message event handles all messages
client.on("message", m => {
	// A message containing exactly `&init` will make the bot join the first
	// available voice channel
	if (m.content === "&init") {
		// Iterate over all channels
		for (var channel of m.channel.server.channels) {
			// If the channel is a voice channel, ...
			if (channel instanceof Discord.VoiceChannel) {
				// ... reply with the channel name and the ID ...
				client.reply(m, channel.name + " - " + channel.id);
				// ... and join the channel
				client.joinVoiceChannel(channel).catch(error);
				// Afterwards, break the loop so the bot doesn't join any other voice
				// channels
				break;
			}
		}
	}
	// A message starting with `$$$ stop` will stop the current playback
	if (m.content.startsWith("$$$ stop")) {
		// If the voice connection exists (i.e. the bot is connected to a voice
		// channel) ...
		if (client.internal.voiceConnection) {
			// ... stop the current playback
			client.internal.voiceConnection.stopPlaying();
		}
		// Return to prevent execution of further commands
		return;
	}
	// A message starting with `$$$ leave` will make the bot leave the voice
	// channel it is connected to
	if (m.content.startsWith("$$$ leave")) {
		// Leave the voice channel
		client.internal.leaveVoiceChannel();
		// Return to prevent further commands
		return;
	}
	// A message starting with `pipeit` and containing a URL will load the
	// specified URL and play it back over voice
	if (m.content.startsWith("pipeit")) {
		// Get the argument (see above)
		var rest = m.content.split(" ");
		rest.splice(0, 1);
		rest = rest.join(" ");

		// Make sure the bot is connected to voice
		if (client.internal.voiceConnection) {
			// Get the voice connection...
			var connection = client.internal.voiceConnection;
			// ...get the request module which will be used to load the URL...
			var request = require("request");
			// ...get the stream from the URL...
			var stream = request(rest);
			// ...and play it back
			connection.playRawStream(stream).then(intent => {
				// If the playback has started successfully, reply with a "playing"
				// message...
				client.reply(m, "playing!").then((msg) => {
					// and add an event handler that tells the user when the song has
					// finished
					intent.on("end", () => {
						// Edit the "playing" message to say that the song has finished
						client.updateMessage(msg, "that song has finished now.");
					});
				});
			});
		}
	}
});

// This function is used by &init to handle connection errors
function error(e) {
	console.log(e.stack);
	process.exit(0);
}

// Login using the username and password specified above and catch any errors
client.login(D_EMAIL, D_PASS).catch((e) => console.log(e));