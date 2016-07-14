//simple text bot

var Discord = require("discord.js")

var bot = new Discord.Client();

//bot turning on
bot.on("message", function(message)
{
	var input = message.content.toUpperCase();
	
	//flamejulie command
	if(input === "-FLAMEJULIE")
	{
		for(var counter=0; counter < 3 ; counter++)
		{
			//sending a message
			bot.sendMessage(message, "\"I don't play male champions because I don't support the unrealistic standards set by rito for the male champions, that and I soak like a waterfall when I play taric\"\r\t-Julie");
		}
	}
	
	//sending image command template
	if(input === "-SENDFILE")
	{
		//sending a file, when putting in a url be sure to use a direct link to the picture
		bot.sendFile(message,"link to file")
	}
});

bot.login("Insert email and password");