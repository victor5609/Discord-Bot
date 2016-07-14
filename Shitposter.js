//simple text bot

var Discord = require("discord.js");

var bot = new Discord.Client();

//bot turning on and handle things based on messages
bot.on("message", function(message)
{
	var input = message.content.toUpperCase();
	//WIP
	if(input === "-CENANUKE"){
		bot.joinVoiceChannel("Pure Bread Retards");
		for(x = 0; x<= 50; x++){
			bot.sendMessage(message, "!cena");
			
		}
		bot.internal.leaveVoiceChannel();
	}
	
	/* HELP COMMAND SENDS .TXT FILE WITH A LIST OF COMMANDS */
	if(input === "-COMMANDS"){
		bot.sendMessage(message, "Commands are not case sensitive");
		//sending a file, when putting in a url be sure to use a direct link to the picture
		bot.sendFile("C:\Users\VictorMai\Desktop\Discord Bot\Commands.txt");
	}
	
	/* TTS commands */
	if(input === "-@"){
		bot.sendTTSMessage(message, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	}
	
	/* SHITPOSTING AND TEXT COMMANDS */
	if(input === "-DICKNUKE"){
		for(x = 0; x<= 50; x++){
			bot.sendMessage(message, "8===========D~~~~~~~");
		}
	}
	
	if(input === "-FLAMEJULIE")
	{
		bot.sendMessage(message, "\"I don't play male champions because I don't support the unrealistic standards set by rito for the male champions, that and I soak like a waterfall when I play taric\"\r\t-Julie");
	}
	if(input ==="-SUMMONSNEAKY"){
		bot.sendMessage(message, "(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. ･ ｡ﾟMy dick is small, my butthole is leaky, I use this chant, to summon Sneaky");
	}
	if(input ==="-DONGERLONG"){
		bot.sendMessage(message, "ヽ༼ຈل͜ຈ༽ﾉ ʀᴀɪsᴇ ᴜʀ ᴅᴏɴɢᴇʀs ヽ༼ຈل͜ຈ༽ﾉ
(ง°ل͜°)ง I TRIED TO SILENCE MY DONGER ONCE; BOY THAT WENT WELL (ง°ل͜°)ง
ᕦ༼ຈل͜ຈ༽ᕤ Flex your dongers ᕦ༼ຈل͜ຈ༽ᕤ
ᕦ༼ຈل͜ຈ༽ᕤ ＤＯ ＹＯＵ ＥＶＥＮ ＤＯＮＧ? ᕦ༼ຈل͜ຈ༽ᕤ
┌༼ຈل͜ຈ༽┐ lower your dongers ┌༼ຈل͜ຈ༽┐
(ง ͠° ل͜ °)ง THE UNSEEN DONGER IS THE DEADLIEST (ง ͠° ل͜ °)ง
(ง ͠° ل͜ °)ง heres a tip. And a dong behind it (ง ͠° ل͜ °)ง
(ง ͠ ͠° ل͜ °)ง ᴛᴏ ᴅᴏɴɢᴇʀ, ᴏʀ ɴᴏᴛ ᴛᴏ ᴅᴏɴɢᴇʀ (ง ͠ ͠° ل͜ °)ง
(ง ͠ ͠° ل͜ °)ง sᴏᴜɴᴅs ᴅᴏɴɢᴇʀᴏᴜs... ɪᴍ ɪɴ (ง ͠ ͠° ل͜ °)ง
(ง ͠° ل͜ °)ง ᴍᴀsᴛᴇʀ ʏᴏᴜʀ ᴅᴏɴɢᴇʀ, ᴍᴀsᴛᴇʀ ᴛʜᴇ ᴇɴᴇᴍʏ (ง ͠° ل͜ °)ง
(ง ͠ ͠° ل͜ °)ง ᴛʜᴇ ᴅᴏɴɢᴇʀ ᴀʟsᴏ ʀɪsᴇs (ง ͠ ͠° ل͜ °)ง
(ง ͠ ͠° ل͜ °)ง YOUR DONGERS ARE INFERIOR (ง ͠ ͠° ل͜ °)ง
(ง ͠ ͠° ل͜ °)ง MY RIGHT DONGER IS A LOT STRONGER THAN MY LEFT DONGER (ง ͠ ͠° ͟ل͜ ͡°)ง
(ง ͠ ͠° ل͜ °)ง NEVER UNDERESTIMATE THE POWER OF THE DONGER (ง ͠ ͠° ل͜ °)ง
ヽ( ° ͜ʖ͡°)ﾉ ʀuʙ ᴍʏ ᴅᴏɴɢᴇʀ ヽ( ° ͜ʖ͡°)ﾉ
(ง •̀_•́)ง focus your dongers (ง •̀_•́)ง
༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽YOU CAME TO THE WRONG DONGERHOOD༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽
༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽ YOU PASTARINO'D THE WRONG DONGERINO ༼ ºل͟º ༼ ºل͟º ༼ ºل͟º ༽ ºل͟º ༽ ºل͟º ༽
༼ ºل͟º༼ ºل͟º༽ºل͟º ༽ YOU COPERINO﻿ FRAPPUCCIONO PASTARINO'D THE WRONG DONGERINO ༼ ºل͟º༼ ºل͟º༽ºل͟º ༽
༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽You either die a DONG, or live long enough to become the DONGER༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽
ᕙ༼ຈل͜ຈ༽ᕗ. ʜᴀʀᴅᴇʀ,﻿ ʙᴇᴛᴛᴇʀ, ғᴀsᴛᴇʀ, ᴅᴏɴɢᴇʀ .ᕙ༼ຈل͜ຈ༽ᕗ
(ง ͠° ل͜ °)ง LET ME DEMONSTRATE DONGER DIPLOMACY (ง ͠° ل͜ °)ง
(ง'̀-'́)ง ＤＯＮＧ ＯＲ ＤＩＥ (ง'̀-'́)ง
ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ
ヽ༼ຈل͜ຈ༽ﾉ VOICE OF AN ANGEL ヽ༼ຈل͜ຈ༽ﾉ
ヽ༼ຈل͜ຈ༽ﾉ LETS GET DONGERATED ヽ༼ຈل͜ຈ༽ﾉ
ヽ༼ຈل͜ຈ༽ﾉ RAISE YOUR BARNO ヽ༼ຈل͜ຈ༽ﾉ
ヽ༼ຈل͜ຈ༽ﾉITS A HARD DONG LIFE ヽ༼ຈل͜ຈ༽ﾉ
ヽ༼ຈل͜ຈ༽ﾉ "I have a dong" ヽ༼ຈل͜ຈ༽ﾉ - Martin Luther King Jr.
ヽ༼ຈل͜ຈ༽ﾉ WHAT DOESNT KILL ME ONLY MAKES ME DONGER ᕙ༼ຈل͜ຈ༽ᕗ
ノ(ಠ_ಠノ ) ʟᴏᴡᴇʀ ʏᴏᴜʀ ᴅᴏɴɢᴇʀs ノ(ಠ_ಠノ)
ヽ༼Ὸل͜ຈ༽ﾉ HOIST THY DONGERS ヽ༼Ὸل͜ຈ༽ﾉ
༼ ºل͟º ༽ I AM A DONG ༼ ºل͟º ༽
༼ ºل͟º༽ I DIDN'T CHOOSE THE DONGLIFE, THE DONGLIFE CHOSE ME ༼ ºل͟º༽
༼ ºل͟º༽ NO ONE CARED WHO I WAS UNTIL I PUT ON THE DONG ༼ ºل͟º༽
༼ ºººººل͟ººººº ༽ I AM SUPER DONG ༼ ºººººل͟ººººº ༽
┌∩┐༼ ºل͟º ༽┌∩┐ SUCK MY DONGER ┌∩┐༼ ºل͟º ༽┌∩┐
ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ FINALLY A REAL DONG ζ༼Ɵ͆ل͜Ɵ͆༽ᶘ
<ᴍᴇssᴀɢᴇ ᴅᴏɴɢᴇʀᴇᴅ>
ヽ༼ʘ̚ل͜ʘ̚༽ﾉIS THAT A DONGER IN YOUR POCKET?ヽ༼ʘ̚ل͜ʘ̚༽ﾉ
༼ ͡■ل͜ ͡■༽ OPPA DONGER STYLE ༼ ͡■ل͜ ͡■༽
( ° ͜ ʖ °) REGI OP ( ° ͜ ʖ °)
(▀̿ ̿Ĺ̯̿̿▀̿ ̿) IM DONG,JAMES DONG (▀̿ ̿Ĺ̯̿̿▀̿ ̿)
(ง⌐□ل͜□)ง WOULD YOU HIT A DONGER WITH GLASSES (ง⌐□ل͜□)ง
ʕ•ᴥ•ʔ CUDDLE UR DONGERS ʕ•ᴥ•ʔ
ლ(́◉◞౪◟◉‵ლ) let me hold your donger for a while ლ(́◉◞౪◟◉‵ლ)
ヽ༼ຈل͜ຈ༽ง MY RIGHT DONG IS ALOT STRONGER THAN MY LEFT ONE ヽ ༼ຈل͜ຈ༽ง
(✌ﾟ∀ﾟ)☞ May the DONG be with you! ☚(ﾟヮﾟ☚)
Ѱζ༼ᴼل͜ᴼ༽ᶘѰ HIT IT WITH THE FORK Ѱζ༼ᴼل͜ᴼ༽ᶘѰ
(ง ͡ʘ ͜ʖ ͡ʘ)ง GO FABBBYYY GO (ง ͡ʘ ͜ʖ ͡ʘ)ง
( ° ͡ ͜ ͡ʖ ͡ °)ﾉ RAISE YOUR GENJAS ヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉ
༼ ºل͟º༼ ºل͟º༽ºل͟º ༽ Chester Cheeto Support our Dongers ༼ ºل͟º༼ ºل͟º༽ºل͟º ༽
ヽ༼ຈل͜ຈ༽ﾉ NEVER UNDERESTIMATE THE POWER OF THE DONG CODE ヽ༼ຈل͜ຈ༽ﾉ
ヽ༼° ل͜ °༽ﾉ DONGMACIA NOW AND FOREVER ヽ༼° ل͜ °༽ﾉ
(ง ͠° ل͜ °)ง DON'T YOU DONG ME, SUMMONER?? (ง ͠° ل͜ °)ง
ง ͠° ل͜ °)ง MASTER YOUR DONGER, MASTER THE ENEMY (ง ͠° ل͜ °)ง
(ง ͠° ل͜ °)ง FOR MY FATHER THE DONG (ง ͠° ل͜ °)ง
╭∩╮( °﻿ ͜ʖ͡°)wнαт doeѕɴт ĸιll мe мαĸeѕ мe doɴɢer ( °﻿ ͜ʖ͡°)╭∩╮
(ง ͠° ل͜ °)ง KNOWN IF THE DONGERS WERE TURNED I WOULD SHOW YOU NO DONG (ง ͠° ل͜ °)ง
(っ◕‿◕)っpenetrate nintendude's anus (っ◕‿◕)っ
(ง ͠° ل͜ °)ง Your donger belongs in a museum (ง ͠° ل͜ °)ง
ヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉ YOU CAME TO THE WRONG GENJAHOOD ヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉ
( ° ͜ʖ͡°) Mom always said my donger was big for my age ( ° ͜ʖ͡°)
( ° ͜ʖ͡°) I WAS BORN WITH A NEEDLESSLY LARGE DONGER ( ° ͜ʖ͡°)
( ° ͜ʖ͡°) IS THAT A DONGER IN YOUR POCKET? ( ° ͜ʖ͡°)
(ง ͠° ل͜ °)ง Vi? Stands For DONGER (ง ͠° ل͜ °)ง
ヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉ I BELIEVE I CAN DONGヽ( ° ͡ ͜ ͡ʖ ͡ °)ﾉ
Ψ༼ຈل͜ຈ༽Ψ﻿ HIT IT WITH A DONGER Ψ༼ຈل͜ຈ༽Ψ
༼ʘ̚ل͜ʘ̚༽ I NEED A DONGTOR ༼ʘ̚ل͜ʘ̚༽
ヽ༼ຈل͜ຈ༽ﾉ Darude your Sandstorms ヽ༼ຈل͜ຈ༽ﾉ
༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽ºل͟º ༽ 7 DEADLY DONGERS ༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽ºل͟º ༽
ヽ( ͝° ͜ʖ͡°)ﾉ IMAGINE IF I HAD A REAL DONGER ヽ( ͝° ͜ʖ͡°)ﾉ
~(˘▾˘~) Wave Your Dongers (~˘▾˘)~
work it ᕙ༼ຈل͜ຈ༽ᕗ harder make it (ง •̀_•́)ง better do it ᕦ༼ຈل͜ຈ༽ᕤ faster raise ur ヽ༼ຈل͜ຈ༽ﾉ donger
ɳ༼ຈل͜ຈ༽ɲ more than ever hour after ɳ༼ຈل͜ຈ༽ɲ
ヽ ༼ຈل͜ຈ༽ﾉ our work is always dongers ヽ༼ຈل͜ຈ༽ﾉ
ヽ༼ຈل͜ຈ༽ﾉ FOREVER DONG ヽ༼ຈل͜ຈ༽ﾉ
༼ ºل͟º ༼ ºل͟º ( ° ͡ ͜ ͡ʖ ͡ °) ºل͟º ༽ ºل͟º ༽ 5 MEN 1 DREAM 9 EYEBROWS ༼ ºل͟º ༼ ºل͟º( ° ͡ ͜ ͡ʖ ͡ °) ºل͟º ༽ ºل͟");
	}
	
	/* IMAGE COMMANDS */
	
	
	if(input === "-SEXMELEMON")
	{
		bot.sendMessage(message, "http://i.imgur.com/kZlyN61.gif");
	}
	
	if(input === "-MEME"){
		bot.sendMessage(message, "http://i.imgur.com/QAKFpPF.gif");
	}
	/* FEM COPYPASTAS*/
	
	/* COPY PASTAS */
	if(input === "-COPYPASTA1"){
		bot.sendMessage(message, "I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I'm fucking retarded but I don't care, I'm beautiful. I'm having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me \"Apache\" and respect my right to kill from above and kill needlessly. If you can't accept me you're a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.");
	}
	if(input === "-COPYPASTA2"){
		bot.sendMessage(message, "Gr8 b8, m8. I rel8, str8 appreci8, and congratul8. I r8 this b8 an 8/8. Plz no h8, I'm str8 ir8. Cr8 more, can't w8. We should convers8, I won't ber8, my number is 8888888, ask for N8. No calls l8 or out of st8. If on a d8, ask K8 to loc8. Even with a full pl8, I always have time to communic8 so don't hesit8. dont forget to medit8 and particip8 and masturb8 to allevi8 your ability to tabul8 the f8. We should meet up m8 and convers8 on how we can cre8 more gr8 b8, I'm sure everyone would appreci8, no h8. I don't mean to defl8 your hopes, but its hard to dict8 where the b8 will rel8 and we may end up with out being appreci8d, I'm sure you can rel8. We can cre8 b8 like alexander the gr8, stretch posts longer than the Nile's str8s. We'll be the captains of b8, 4chan our first m8s the growth r8 will spread to reddit and like real est8 and be a flow r8 of gr8 b8, like a blind d8 we'll coll8, meet me upst8 where we can convers8, or ice sk8 or lose w8 infl8 our hot air baloons and fly, tail g8. We could land in Kuw8, eat a soup pl8 followed by a dessert pl8 the payment r8 won't be too ir8 and hopefully our currency won't defl8. We'll head to the Israeli-St8, taker over like Herod the gr8 and b8 the jewish masses, 8 million, m8. We could interrel8 communism, thought it's past it's maturity d8, a department of st8, volunteer st8. reduce the infant mortality r8, all in the name of making gr8 b8 m8.");
	}
	if(input === "-COPYPASTA3"){
		bot.sendMessage(message, "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
	}
	if(input === "-COPYPASTA4"){
		bot.sendMessage(message, "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.");
	}
	if(input === "-COPYPASTA5"){
		bot.sendMessage(message, "Here in my garage with my pasta linguini, but you know what I like more than pasta linguini?  Macaroni.  That's why I bought 7 new cupboards and filled them with over 2,000 new Kraft macaroni and cheese boxes.  It's like the master chef Betty Crocker said, \"the more you eat, the more you pasta.\"  Now maybe you've seen my ted ex talk where I talk about how I eat a box of mac and cheese a day.  You know, I eat a box of mac and cheese once a day not to show off, again it's about the pasta.  In fact, the real reason I keep this pasta linguini isn't to show off.  It's a reminder that wet noodle dreams are still possible.  Not long ago, I was in a little town across the country, eating spaghetti scrap from an italian restaurant dumpster, no culinary arts degree to my name.  But you know what, something happened that day that changed my life.  I bumped into our lord and savior, the flying spaghetti monster, hallowed be his name.  He showed me what he did to become a true pasta lord.  Now this isn't a \"get pasta quick scheme\".  I'm not promising you that tomorrow you're gonna go out and buy yourself some pasta linguini, but what I am telling you is, it can happen faster than you think if you know the proven steps.  So, I record a little two minute video on my website.  Not too impressive, like I said, it's on my iphone, but it's real.  So, I'm gonna give you the three most important things you can do today.  Invest in macaroni.  Always start your pasta cooking with a rolling boil.  Don't be a crooked noodle.");
	}
	
});

bot.loginWithToken("MjAyOTYyODUxNjU1MDU3NDA4.Cmh_Yg.b6f5-evHXDwohl9H1F-mhtZIaAA");