const quotes = [
    "Gentlemen, you can't fight in here! This is the War Room.",
    "Just when I think you couldn't possibly be any dumber, you go and do somethin' like this -- and totally redeem yourself!",
    "Yeah I called her up, she gave me a bunch of crap about me not listenin' to her enough, or somethin'. I don't know, I wasn't really payin' attention.",
    "Badges? We don't need no stinkin' badges!",
    "I think everything must go back to the fact that I had a very anxious childhood. You know, my mother never had time for me. You know, when you're the middle child in a family of five million, you don't get any attention. I mean, how is it possible?",
    "...Nobody calls me Lebowski. You got the wrong guy. I'm the Dude, man.",
    "Hey, psycho - we're not gonna discuss this, OK, it's over. Please get out of my Van Halen T-shirt before you jinx the band and they break up.",
    "Surely you can't be serious. - I am serious. And don't call me Shirley.",
    "Looks like you've been missing a lot of work lately. - I wouldn't say I've been missing it, Bob.",
    "There's no reason to become alarmed, and we hope you'll enjoy the rest of your flight. By the way, is there anyone on board who knows how to fly a plane?",
    "I'm in a glass case of emotion!",
    "Why don't you just make ten louder and make ten be the top number and make that a little louder? - These go to eleven.",
    "Hello? Hello? Anybody home? Hey! Think, McFly. Think!",
    "I'm a mog - half man, half dog. I'm my own best friend.",
    "Jane, since I've met you, I've noticed things that I never knew were there before... birds singing, dew glistening on a newly formed leaf, stoplights.",
    "Are you crying? There's no crying! There's no crying in baseball!",
    "Ned, I would love to stand here and talk with you - but I'm not going to.",
    "It's where I keep all my things. Get a lot of compliments on this. Plus, it's not a man-purse. It's called a satchel. Indiana Jones wears one.",
    "If I'm not back in five minutes, just wait longer.",
    "...Bond. James Bond.",
    "I'll be back.",
    "My Mama always said, 'Life was like a box of chocolates; you never know what you're gonna get.",
    "They may take our lives, but they'll never take our freedom!",
    "You complete me.",
    "Chewie, we're home.",
    "I'm walking here! I'm walking here!",
    "They call it a Royale with cheese.",
    "They're here!",
    "Magic Mirror on the wall, who is the fairest one of all?",
    "Just when I thought I was out, they pull me back in.",
    "Yo, Adrian!",
    "Wax on, wax off.",
    "Elementary, my dear Watson.",
    "That'll do, pig. That'll do.",
    "My precious.",
    "It's alive! It's alive!",
    "I mean, funny like I'm a clown? I amuse you?",
    "Help me, Obi-Wan Kenobi. You're my only hope.",
    "Pay no attention to that man behind the curtain!",
    "The Dude abides.",
    "Hasta la vista, baby.",
    "I'll get you, my pretty, and your little dog, too!",
    "Just keep swimming.",
    "I'm the king of the world!",
    "Shaken, not stirred.",
    "What we've got here is a failure to communicate.",
    "Keep your friends close, but your enemies closer.",
    "Roads? Where we're going we don't need roads.",
    "I love the smell of napalm in the morning.",
    "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya punk?",
    "Show me the money!",
    "Here's Johnny!",
    "You had me at hello.",
    "Houston, we have a problem.",
    "To infinity and beyond!",
    "E.T. phone home.",
    "You can't handle the truth!",
    "I'll be back.",
    "This is the beginning of a beautiful friendship.",
    "I'll have what she's having.",
    "Why so serious?",
    "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
    "I am your father.",
    "The first rule of Fight Club is: You do not talk about Fight Club.",
    "There's no place like home.",
    "You talkin' to me?",
    "Of all the gin joints in all the towns in all the world, she walks into mine.",
    "I'm going to make him an offer he can't refuse.",
    "Toto, I've a feeling we're not in Kansas anymore.",
    "May the Force be with you.",
    "You're gonna need a bigger boat.",
    "Here's looking at you, kid.",
    "Frankly, my dear, I don't give a damn.",
    "It's just a flesh wound.",
    "She doesn't even go here!",
    "You keep using that word. I do not think it means what you think it means.",
    "It's naht a toomah!",
    "Human sacrifice! Dogs and cats living together. Mass hysteria!",
    "A hospital? What is it? - It's a big building with patients, but that's not important right now.",
    "Why are you so sweaty? - I was watching \"Cops\""
];

module.exports = function(){
    const len = quotes.length;
    const randomNum = Math.floor(Math.random() * len);

    return quotes[randomNum];
}
