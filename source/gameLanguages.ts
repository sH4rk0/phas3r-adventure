let languages={
    en:[
        "drink machine",//00
        "It's too heavy!!!",//01
        "No way to pull it!",//02
        "Maybe it accept money!",//03
        "It's closed.",//04
        "It's already closed.",//05
        "Seems to be a standard drink machine.",//06
        "I have no money.",//07
        "Really!?!?!",//08
        "Do you really want to talk with it?",//09
        "Coke",//10
        "Please! Ask the developer to write a better pathfinding function!", //11
        "terminal", //12
        "No way!", //13
        "Nothing strange.", //14
        "It's really hot! I need something to drink.", //15
        "garbage bin", //16
        "hydrant", //17
        "A stinking garbage bin!", //18
        "It is illogic!", //19
        "I won't do that!", //20
        "Forget it!", //21
        "I can't drop it!", //22
        "coins",//23
        "Quattrocchi, non mi far alterare o ti SCUMM a sangue!!",//24
        "4eyes",//25
        "A can of coke, what else!",//26
        "Some coins... just for a coke.",//27
        "I already have this!",//28
        "Select an ACTION first!",//29
        "I'm not stupid!",//30
        "Michele",//31
        "He is Mike. Founder of DEVDAY Salerno.",//32
        "Hey, Mike! What's up.",//33
        "Hey, Francesco, it's ok. Don't forget our next meetup.",//34
        "Sure! Where and when?",//35
        "Saturday 16th September at Puntolingue. We'll talk about blockchain and bitcoins",//36
        "AMAZING!!!",//37
        "Here the DEVDAY team organize montly tech meetups!!!",//38
        "@##@ @##@!!!",//39
        "Gerardo",//40
        "Daniele",//41
        "Davide",//42
        "He is Gerardo. Founder of DEVDAY Avellino.",//43
        "Chain",//44
        "A broken chain",//45
        "Block",//46
        "A concrete block",//47
        "DEVDAY in Bits",//48
        "A bunch of bits",//49
        "Blockchain",//50
        "A blockchain",//51
        "Bitcoin",//52
        "A bitcoin",//53
        "DEVDAY pass",//54
        "Scotch tape",//55
        "Broken energy box",//56
        "Fixed energy box",//57
        "Someone lost a new Scotch tape!",//58
        "Seems to be broken! I need something to fix it.",//59
        "The energy box now is fixed.",//60
        "DEVDAY PALACE",//61
        "What a stink!",//62
        "He is Daniele. Founder of DEVDAY Benevento.",//63
        "He is Davide. Founder of DEVDAY Napoli.",//64
        "$ git init\n$ git add *.c\n$ git add README\n$ git commit -m 'DEVDAY first commit'",//65
        "Hi Gerardo! What's up??",//66
        "Ehmm!! OK! OK!",//67
        "Hi Mike! What's going on??",//68
        "Hi Francesco! Big trouble!\nThe advertising screen is not working, i don't know why!\nSo we can't advice the developers about our events!!\nCould you help me?",//69
        "Sure!",//70
        "Francesco, any update?",//71
        "Not yet!",//72
        "Thanks Francesco! Now the main screen works properly.",//73
        "You welcome!",//74
        "The DEVDAY event screen!",//75
        "DEVDAY ADV screen",//76
        "Wow! My Skillset!",//77
        "I live on the third floor!",//78
        "building",//79
        "door",//80
        "Seems to be not connected.",//81
        "Wow! It\'s connected.",//82
        "It\'not connected... maybe later!",//83
        "This is an experimental website!\nI'm trying to mix the standard personal information website with and adventure game logic.\nDo you think it could work?",//84
        "DO YOU REALLY WANT TO RESTART?",//85
        "I want to thanks Richard Davey author of Phaser Framework, PAUL ROBERTSON and JASON TAMMEMAGI for their unaware art contribution to this experiment.",//86
        "Here some options!!",//87
        "Jukebox",//88
        "DEVDAY website",//89
        "Info",//90
        "I would like to listen...",//91
        "Woofer",//92
        "Nothing to do with this!",//93
        "I have completed this chapter. Would you like to continue?",//94
        "Tap me to access the menu.",//95
        "The GOVERNOR",//96
        "Hi!",//97
        "I'm the GOVERNOR... and you are nothing!",//98
        "Sidney C64",//99
        "Chris AGS guru",//100
        "Bad guy 1",//101
        "Bad guy 2",//102
        "Bad guy 3",//103
        "The Jumper",//104
        "The Runner",//105
        "Girl 1",//106
        "Pastry",//107
        "Invitation ticket",//108
        "Come back later!",//109
        "Already here? Try to use your brain sometimes! Come back later!",//110
        "Already here? Have you lost all your neurons? Come back later!",//111
        "No more to say!",//112
        "You have all information to solve this quest!",//113
        "Is this your first adventure? Play arond and come back later!",//114
        "Yo bro! I need your help to solve the ENIGMA!", //115
        "Yo bro! Do you have any clue on how to solve the quest?", //116
        "Yo bro! I dont know how to go forward!", //117
        "sugg 0_0", //118
        "sugg 0_1", //119
        "sugg 0_2", //120
        "sugg 1_0", //121
        "sugg 1_1", //122
        "sugg 1_2", //123
        "Do you want to restart the game?",//124
        "YES",//125
        "NO",//126
        "LEAVE THE GAME",//127
        "CREDITS", //128
        "BACK", //129
        "Nothing", //130
        "Some 8bit Tune", //131
        "Never played Zak McKracken and the Alien Mindbenders? Play it and come back later!", //132
        "Day of the Tentacle sounds new for you? Play it and come back later!", //133
        "You need to revise The Secret of Monkey Island! Play it and come back later!", //134
        "Ok, i'll try to find the solution!",//135
        "Ok, i'll be back!",//136
        "Gotcha!",//137
        "Good point!",//138,
        "Galaga is the first game I played!",//139
        "Mmmm, interesting...",//140
        "Welcome to my personal adventure website experiment.\nComplete the quests to access the website sections... or explore the website without solving the quest!",//141
        "Empty bottle",//142
        "Someone has not thrown the bottle in the trash.", //143
        "The trashbin is full!", //144
        "Old floppy disk", //145
        "WOW! It's an original copy of Zak McKracken... Should be worth a lot of $$$!!! ", //146
        "WOW! A real Cloak of Invisibility",//147
        
    ]};

let actions={

    en:["PUSH", "PULL", "GIVE", "OPEN", "CLOSE", "EXAMINE", "USE", "PICK UP", "DROP", "TALK TO"],
    it:["SPINGI", "TIRA", "DAI", "APRI", "CHIUDI", "ESAMINA", "USA", "PRENDI", "LASCIA", "PARLA A"]
}    

let currentLang = "en";
let gameData={

    chapters:null,
    ingame:{conversation:null,logic:null,items:null},
    assets:null,
    menuBlink:null,
    menuBtns:null,
    tips:{
        delay:10,
        nomore:[112,113],
        later:[114,110,111,132,133,134],
        ok:[[118,119,120], [121,122,123]],
        nomoreA:[135],
        laterA:[136],
        okA:[137,138,140]
    },

    skills:[{s:"phaser",v:60},{s:"javascript",v:70},{s:"html",v:75},{s:"typescript",v:60},{s:"css",v:65},{s:".net",v:70},{s:"c#",v:65},{s:"gamedev",v:50},{s:"design",v:60},{s:"ux",v:65},{s:"clm",v:80},{s:"tsql",v:70},{s:"firebase",v:60}]
}

let eases = [
    'Linear',
    'Quad.easeIn',
    'Cubic.easeIn',
    'Quart.easeIn',
    'Quint.easeIn',
    'Sine.easeIn',
    'Expo.easeIn',
    'Circ.easeIn',
    'Back.easeIn',
    'Bounce.easeIn',
    'Quad.easeOut',
    'Cubic.easeOut',
    'Quart.easeOut',
    'Quint.easeOut',
    'Sine.easeOut',
    'Expo.easeOut',
    'Circ.easeOut',
    'Back.easeOut',
    'Bounce.easeOut',
    'Quad.easeInOut',
    'Cubic.easeInOut',
    'Quart.easeInOut',
    'Quint.easeInOut',
    'Sine.easeInOut',
    'Expo.easeInOut',
    'Circ.easeInOut',
    'Back.easeInOut',
    'Bounce.easeInOut'
];