let languages = {
  en: [
    "drink machine", //00
    "It's too heavy!!!", //01
    "No way to pull it!", //02
    "Maybe it accept money!", //03
    "It's closed.", //04
    "It's already closed.", //05
    "Seems to be a standard drink machine.", //06
    "I have no money.", //07
    "Really!?!?!", //08
    "Do you really want to talk with it?", //09
    "Coke", //10
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
    "coins", //23
    "Quattrocchi, non mi far alterare o ti SCUMM a sangue!!", //24
    "4eyes", //25
    "A can of coke, what else!", //26
    "Some coins... just for a coke.", //27
    "I already have this!", //28
    "Select an ACTION first!", //29
    "I'm not stupid!", //30
    "Michele", //31
    "He is Mike. Founder of DEVDAY Salerno.", //32
    "Hey, Mike! What's up.", //33
    "Hey, Francesco, it's ok. Don't forget our next meetup.", //34
    "Sure! Where and when?", //35
    "Saturday 16th September at Puntolingue. We'll talk about blockchain and bitcoins", //36
    "AMAZING!!!", //37
    "Here the DEVDAY team organize montly tech meetups!!!", //38
    "@##@ @##@!!!", //39
    "Gerardo", //40
    "Daniele", //41
    "Davide", //42
    "He is Gerardo. Founder of DEVDAY Avellino.", //43
    "Chain", //44
    "A broken chain", //45
    "Block", //46
    "A concrete block", //47
    "DEVDAY in Bits", //48
    "A bunch of bits", //49
    "Blockchain", //50
    "A blockchain", //51
    "Bitcoin", //52
    "A bitcoin", //53
    "DEVDAY pass", //54
    "Scotch tape", //55
    "Broken energy box", //56
    "Fixed energy box", //57
    "Someone lost a new Scotch tape!", //58
    "Seems to be broken! I need something to fix it.", //59
    "The energy box now is fixed.", //60
    "DEVDAY PALACE", //61
    "What a stink!", //62
    "He is Daniele. Founder of DEVDAY Benevento.", //63
    "He is Davide. Founder of DEVDAY Napoli.", //64
    "$ git init\n$ git add *.c\n$ git add README\n$ git commit -m 'DEVDAY first commit'", //65
    "Hi Gerardo! What's up??", //66
    "Ehmm!! OK! OK!", //67
    "Hi Mike! What's going on??", //68
    "Hi Francesco! Big trouble!\nThe advertising screen is not working, i don't know why!\nSo we can't advice the developers about our events!!\nCould you help me?", //69
    "Sure!", //70
    "Francesco, any update?", //71
    "Not yet!", //72
    "Thanks Francesco! Now the main screen works properly.", //73
    "You welcome!", //74
    "The DEVDAY event screen!", //75
    "DEVDAY ADV screen", //76
    "Wow! My Skillset!", //77
    "I live on the third floor!", //78
    "building", //79
    "door", //80
    "Seems to be not connected.", //81
    "Wow! It's connected.", //82
    "It'not connected... maybe later!", //83
    "Hi! My name is Francesco Raimondo, Presentation Layer Architect @ Healthwareinternational.\nThis is an experimental website made using Phaz3r.js framework. Do you like it? :D", //84
    "DO YOU REALLY WANT TO RESTART?", //85
    "I want to thanks Richard Davey author of Phaser Framework,\nPAUL ROBERTSON and\nJASON TAMMEMAGI\nfor their unaware art contribution to this NON-COMMERCIAL experiment.", //86
    "Here some options!!", //87
    "Jukebox", //88
    "DEVDAY website", //89
    "Info", //90
    "I would like to listen...", //91
    "Woofer", //92
    "Nothing to do with this!", //93
    "Chapter completed.\n Would you like to continue?", //94
    "Tap me to access the menu.", //95
    "The GOVERNOR", //96
    "Hi!", //97
    "I'm the GOVERNOR... and you are nothing!", //98
    "Sidney C64", //99
    "Chris AGS guru", //100
    "Bad guy 1", //101
    "Bad guy 2", //102
    "Bad guy 3", //103
    "The Jumper", //104
    "The Runner", //105
    "Girl 1", //106
    "Pastry", //107
    "Invitation ticket", //108
    "Come back later!", //109
    "Already here? Try to use your brain sometimes! Come back later!", //110
    "Already here? Have you lost all your neurons? Come back later!", //111
    "No more to say!", //112
    "You have all information to solve this quest!", //113
    "Is this your first adventure? Play arond and come back later!", //114
    "Yo bro! I need your help to solve the ENIGMA!", //115
    "Yo bro! Do you have any clue on how to solve the quest?", //116
    "Yo bro! I dont know how to go forward!", //117
    "sugg 0_0", //118
    "sugg 0_1", //119
    "sugg 0_2", //120
    "sugg 1_0", //121
    "sugg 1_1", //122
    "sugg 1_2", //123
    "Do you want to restart the game?", //124
    "YES", //125
    "NO", //126
    "LEAVE THE GAME", //127
    "CREDITS", //128
    "BACK", //129
    "Nothing", //130
    "Some 8bit Tune", //131
    "Never played Zak McKracken and the Alien Mindbenders? Play it and come back later!", //132
    "Day of the Tentacle sounds new for you? Play it and come back later!", //133
    "You need to revise The Secret of Monkey Island! Play it and come back later!", //134
    "Ok, i'll try to find the solution!", //135
    "Ok, i'll be back!", //136
    "Gotcha!", //137
    "Good point!", //138,
    "Galaga is the first game I played!", //139
    "Mmmm, interesting...", //140
    "Welcome to my personal adventure website experiment.\nComplete the quests to access the website sections... or explore the website without solving the quest!", //141
    "Empty bottle", //142
    "Someone has not thrown the bottle in the trash.", //143
    "The trashbin is full!", //144
    "Old floppy disk", //145
    "WOW! It's an original copy of Zak McKracken... Should be worth a lot of $$$!!! ", //146
    "WOW! A real Cloak of Invisibility", //147
    "Screwdriver", //148
    "A tool for every season!", //149
    "Fixed!", //150
    "I don't want to break something!", //151
    "The door is open.", //152
    "The door is closed.", //153
    "No response!", //154
    "I GOT DEVDAY PASS!", //155
    "Damn! It's closed!", //156
    "It's already closed!", //157
    "Not a good idea!", //158
    "TIPs I GOT!", //159
    "Hi Chris! How are you?", //160
    "Not bad Francesco. I' would like to play this arcade, but there is something that block the coinbox.", //161
    "MMM... ok, but now I need your AGS GURU expertise to solve my adventure. Could you help me?", //162
    "Sure!...but I know you are a spare time ARCADE SENSEI... so, if you help me to repair this Arcade, I'll help you to solve your quest.", //163
    "OK! We have a deal! :D", //164
    "Hi Francesco, any news on how to fix the Arcade?", //165
    "Not yet!", //166
    "Who is???", //167
    "Me!", //168
    "Me who?", //169
    "Me!! DADDY! Please Noemi.. Open the door!", //170
    "OK...", //171
    "Is open Now?", //172
    "Let's try!", //173
    "Ok Chris, the Arcade is fixed!", //174
    "Wow!... Do you have also some coins??", //175
    "NO!!!", //176
    "OK.... I'll use mine! :D Come back later if you need some help!", //177
    "Select the language.", //178
    "ENGLISH", //179
    "ITALIAN", //180
    "The interphone seems to work.", //181
    "Something pulled off the trash!", //182
    "Hi! Do you want a piece of cake?", //183
    "No thanks! I'm on Diet. Too much sugar in your cakes! :D", //184
    "That's why are so sweet... Honey!", //185
    "Hi Sidney! How are you?", //186
    "Hi Francesco, I'm ok! You?", //187
    "Not to bad. I'm involved in this stupid retro adventure...", //188
    "RETRO ADVENTURE.... this remind me the amazing C64 era! How many memories!", //189
    "...Exactly! You are very lucky... i would like to have my name starting with a mighty 8bit music format... SID! ;)", //190
    "True... Nomen omen! So, do you wanna play an adventure?? I have a big archive, you know I'm a collector! ;)", //191
    "No thanks, I need to play around... finding my way! See you around! ;)", //192
    "Ok if you think back, I'm here! Bye! :D", //193
    "Do you changed idea?", //194
    "No thanks, maybe later!", //195
    "INCREDIBLE!!!... An original copy of Zak McKracken and the Alien Mindbenders. I have a perfect place in my collection, between the other 5 copy and the original Zak mask.", //196
    "You have already 5 copy of this game??", //197
    "You know...more is better than less!", //198
    "Depends on situation... but in this case I agree. So, do you really have an original Zak mask?", //199
    'Yes of course! ...it\'s one of... "MY PRECIOUS!!!!"', //200
    "I would like to try it. Do you think it's possible?", //201
    "Mmm... I don't know... it's MY PRECIOUS!!!!... Ok... Wait here!", //202
    "Immutable like... like... a blockchain transaction!!!", //203
    "Here again!", //204
    "AHHHHH!!! How are you???", //205
    'Seems that the mask works properly!...  "MY PRECIOUS!!!!" ....AHUAAAUAUHHA!!', //206
    "Hey... Gollum... Let me try the mask!", //207
    "Magic word?", //208
    "Please!", //209
    "Zak Mask", //210
    "The original Zak Mask", //211
    "Cake", //212
    "Cloak of Invisibility", //213
    "Galaga clone", //214
    "Phaser congress", //215
    "Interphone", //216
    "Stairs", //217
    "Photonstorm", //218
    "I can't teleport from this location", //219
    "commodore 64", //220
    "Zak Mc Kracken Poster", //221
    "Photo frame", //222
    "I was a Phaser speaker @ UNIVERSAL JS DAY 2017.\n Great experience!", //223
    "View more" //224
  ],
  it: [
    "distributore bevande", //00
    "Troppo pesante!!!", //01
    "Non c'è modo di tirarlo!", //02
    "Forse accetta monete!", //03
    "E' chiuso!", //04
    "E' già chiuso!", //05
    "Sembra un normale distributore di bevande.", //06
    "Non ho soldi.", //07
    "Davvero!?!?!", //08
    "Davvero pensi che voglia parlarci?", //09
    "Coca", //10
    "Chiedi a Francesco di sviluppare un algoritmo di pathfinding migliore!", //11
    "Terminale", //12
    "NO!", //13
    "Nulla di strano.", //14
    "Fa davvero caldo! Avrei bisogno di una bevanda.", //15
    "Cestino", //16
    "Idrante", //17
    "Spazzatura puzzolente.!", //18
    "Non è logico!", //19
    "Non voglio farlo!", //20
    "Scordatelo!", //21
    "Non posso lasciarlo!", //22
    "Monete", //23
    "Quattrocchi, non mi far alterare o ti SCUMM a sangue!!", //24
    "4eyes", //25
    "Una lattina di coca, che altro!", //26
    "Alcune monete...giuste per una coca.", //27
    "Ce l'ho già!", //28
    "Seleziona un azione!", //29
    "Non sono stupido!", //30
    "Michele", //31
    "Lui è michele, fondatore del DevDay Salerno.", //32
    "Ciao Mike! Comen va?", //33
    "Ciao, Francesco, Tutto ok. Non dimenticare il nostro prossimo Meetup.", //34
    "Sure! Where and when?", //35
    "Saturday 16th September at Puntolingue. We'll talk about blockchain and bitcoins", //36
    "AMAZING!!!", //37
    "Qui il DEVDAY organizza i meeting mensili!!!", //38
    "@##@ @##@!!!", //39
    "Gerardo", //40
    "Daniele", //41
    "Davide", //42
    "Lui è Gerardo. Founder del DEVDAY Avellino.", //43
    "Catena", //44
    "Catena rotta", //45
    "Blocco", //46
    "Un blocco di cemento", //47
    "DEVDAY in Bits", //48
    "Un pugno di bits", //49
    "Blockchain", //50
    "una blockchain", //51
    "Bitcoin", //52
    "un bitcoin", //53
    "DEVDAY pass", //54
    "Nastro adesivo", //55
    "Alimentatore rotto", //56
    "Alimentatore funzionante", //57
    "Qualcuno ha perso un rotolo di natro adesivo!", //58
    "Sembra rotto! Ho bisogno di qualcosa per aggiustarlo.", //59
    "L'alimentatore è riparato.", //60
    "DEVDAY PALACE", //61
    "Che puzza!", //62
    "Lui è Daniele. Founder del DEVDAY Benevento.", //63
    "Lui è Davide. Founder del DEVDAY Napoli.", //64
    "$ git init\n$ git add *.c\n$ git add README\n$ git commit -m 'DEVDAY first commit'", //65
    "Ciao Gerardo! Come va??", //66
    "Ehmm!! OK! OK!", //67
    "Ciao Mike! Come gira??", //68
    "Ciao Francesco! Un grosso guaio!\nLo schermo pubblicitario non funziona, e non so perchè!\nCosì non possiamo avvisare i Dev dei nostri dei prossimi eventi!!\nHai qualche idea?", //69
    "Sicuro!", //70
    "Francesco, novità?", //71
    "Non ancora!", //72
    "Grazie Francesco! Adesso lo schermo funziona correttamente.", //73
    "Di nulla!", //74
    "The DEVDAY event screen!", //75
    "DEVDAY ADV screen", //76
    "Wow! Le mie skills!", //77
    "Io vivo al terzo piano!", //78
    "palazzo", //79
    "porta", //80
    "Sembra non essere connesso.", //81
    "Wow! Ora è connesso.", //82
    "Non è connesso... forse più tardi!", //83
    "Ciao! Mi chiamo Francesco Raimondo, Presentation Layer Architect @ Healthwareinternational.\nQuesto è un esperimento realizzato usando il framework Phaz3r.js. Che ne pensi? :D", //84
    "DAVVERO VUOI RICOMINCIARE?", //85
    "I miei ringraziamenti vanno a Richard Davey autore di Phaser,\nPAUL ROBERTSON e\nJASON TAMMEMAGI\nper il loro inconsapevole contributo a questo esperimento NON COMMERCIALE.", //86
    "Qualche opzione!!", //87
    "Jukebox", //88
    "DEVDAY website", //89
    "Info", //90
    "Mi piacerebbe ascoltare...", //91
    "Woofer", //92
    "Nulla da fare con questo!", //93
    "Ho completato questa capitolo. Vuoi continuare?", //94
    "Tap per accedere al menu.", //95
    "Il Governatore", //96
    "Cioa!", //97
    "Io sono il Governatore... e tu non sei nessuno!", //98
    "Sidney C64", //99
    "Chris AGS guru", //100
    "Bad guy 1", //101
    "Bad guy 2", //102
    "Bad guy 3", //103
    "The Jumper", //104
    "The Runner", //105
    "Girl 1", //106
    "Pasticciera", //107
    "Invito", //108
    "Torna più tardi!", //109
    "Già qui? Prova ad usare il cervello ogni tanto! Torna più tardi!", //110
    "Già qui? Hai perso tutti i neuroni? Torna più tardi!", //111
    "Ho già detto tutto!", //112
    "Hai tutte le informazioni necessarie per risolvere questo capitolo!", //113
    "E' la tua prima avventura? fai qualche tentativo e poi torna!", //114
    "Yo bro! Ho bisogno del tuo aiuto per risolvere l' ENIGMA!", //115
    "Yo bro! Hai qualche indizio su come risolvere la quest?", //116
    "Yo bro! Non so come andare avanti!", //117
    "sugg 0_0", //118
    "sugg 0_1", //119
    "sugg 0_2", //120
    "sugg 1_0", //121
    "sugg 1_1", //122
    "sugg 1_2", //123
    "Vuoi ricominciare il gioco?", //124
    "SI", //125
    "NO", //126
    "ABBANDONA IL GIOCO", //127
    "CREDITI", //128
    "INDIETRO", //129
    "Nulla", //130
    "Musica a 8bit", //131
    'Mai giocato a "Zak McKracken and the Alien Mindbenders"? Giocaci e poi ritorna!', //132
    '"Day of the Tentacle" ti suona nuovo? Giocaci e torna più tardi!', //133
    'Hai bisogno di rigiocare "The Secret of Monkey Island"! Giocaci e poi ritorna!', //134
    "Ok, cercherò di trovare una soluzione!", //135
    "Ok, ritornerò!", //136
    "Capito!", //137
    "Ottimo spunto!", //138,
    "Galaga è il primo arcade a cui ho giocato!", //139
    "Mmmm, interessante...", //140
    "Benvenuto in questo esperimento.\nCompleta le quest per accedere alle sezioni del sito... oppure esplora il sito senza giocare!", //141
    "Bottiglia vuota", //142
    "Qualcuno non ha buttato la bottiglia nel cestino.", //143
    "Il cestino è pieno!", //144
    "Un vecchio floppy disk", //145
    "WOW! E' una copia originale di Zak McKracken... Dovrebbe valere un bel pò di $$$!!! ", //146
    "WOW! Un vero mantello di invisibilità!", //147
    "Cacciavite", //148
    "Uno strumento per tutte le stagioni!", //149
    "Riparato!", //150
    "Non voglio rompere nulla!", //151
    "La porta è aperta.", //152
    "La porta è chiusa.", //153
    "Nessuna risposta!", //154
    "I GOT DEVDAY PASS!", //155
    "Meledizione! E' chiusa!", //156
    "E' già chiusa!", //157
    "Non è una buona idea.!", //158
    "Suggerimenti!", //159
    "Ciao Chris! Come va?", //160
    "Non male Francesco. Mi piacerebbe giocare a questo Arcade, ma c'è qualcosa che blocca la gettoniera.", //161
    "MMM... ok, ma sono qui perchè ho bisogno della tua esperienza di AGS GURU per risolvere la mia avventura. Mi aiuteresti?", //162
    "Certo!...ma io so che tu sei un ARCADE SENSEI nel tempo libero... se tu mi aiuti a riparare l'Arcade, io ti aiuterò a risolvere la tua avventura.", //163
    "OK! Abbiamo un accordo! Stretta di mano con lo sputo?? :D", //164
    "Ciao Francesco, idee su come riparare l'Arcade?", //165
    "Non ancora!", //166
    "Chi è???", //167
    "Sono io!", //168
    "Io chi?", //169
    "Sono io!! PAPA'! Dai Noemi.. Apri il portone!", //170
    "OK...", //171
    "E' aperto??", //172
    "Provo!", //173
    "Ok Chris, l'Arcade è riparato!", //174
    "Wow!... Hai delle monete??", //175
    "NO!!!", //176
    "OK.... Userò le mie! :D Torna se hai bisogno di aiuto!", //177
    "Seleziona la lingua.", //178
    "INGLESE", //179
    "ITALIANO", //180
    "Il citofono sembra funzionare.", //181
    "Qualcosa è uscito dal cestino!", //182
    "Cio! Ti va una fetta di torta?", //183
    "No grazie! Sono a dieta. Troppo succhero nelle tue torte! :D", //184
    "Per questo sono così dolci... Caro!", //185
    "Ciao Sidney! Come butta?", //186
    "Ciao Francesco, tutto bene! Tu?", //187
    "Non male, ma mi hanno coinvolto in questa stupida RETRO avventura...", //188
    "RETRO AVVETURA.... questo mi ricorda i bei tempi del c64! Quanti ricordi!", //189
    "...Esattamente! Tu sei fortunato... mi piacerebbe che il mio nome iniziasse con il formato musicale del commodore... SID! ;)", //190
    "Vero... Nomen omen! Così stai giocando un avventura?? Io ho un grosso archivio, lo sai sono un collezionista! Facciamo una partita? ;)", //191
    "Non posso adesso... ci vediamo in giro! ;)", //192
    "Ok se ci ripensi, Io sono qui! Ciao! :D", //193
    "Hai cambiato idea?", //194
    "No, forse più tardi!", //195
    "INCREDIBILE!!!... Una copia originale di Zak McKracken and the Alien Mindbenders. Ho un posto perfetto nella mia collezione, tra le altre 5 copie e la maschera originale di Zak.", //196
    "Hai già 5 copie??", //197
    "Lo sai...più è meglio che meno!", //198
    "Dipende dalle situazioni... ma in questo caso concordo. Ma hai davvero la maschera originale di Zak?", //199
    'Certo! ...è uno dei... "MIEI TESSSSSOORI!!!!"', //200
    "Mi piacerebbe vederla, credi sia possibile?", //201
    "Mmm... non so... it's MY PRECIOUS!!!!... Ok... Aspetta qui!", //202
    "Immutabile come... come... a transazione nella blockchain!!!", //203
    "Eccomi di ritorno!", //204
    "AHHHHH!!! Chi sei???", //205
    'Sembra che la maschera funzioni!...  "IL MI TESSSORO!!!!" ....AHUAAAUAUHHA!!', //206
    "Hey... Gollum... Fammi provare la maschera!", //207
    "Parola magica?", //208
    "PER FAVORE!", //209
    "Maschera di ZAK", //210
    "La maschera originale di ZAK", //211
    "Torta", //212
    "Mantello di invisibilità", //213
    "Galaga clone", //214
    "Phaser Day", //215
    "Citofono", //216
    "Scale", //216
    "Photonstorm", //218
    "Non posso teletrasportarmi da qui!", //219
    "commodore 64", //220
    "Zak Mc Kracken Poster", //221
    "Photo frame", //222
    "Sono stato speaker agli Universal JS Day 2017.\n Bella esperienza.", //223
    "Scopri" //224
  ]
};

let actions = {
  en: [
    "PUSH",
    "PULL",
    "GIVE",
    "OPEN",
    "CLOSE",
    "EXAMINE",
    "USE",
    "PICK UP",
    "DROP",
    "TALK TO"
  ],
  it: [
    "SPINGI",
    "TIRA",
    "DAI",
    "APRI",
    "CHIUDI",
    "ESAMINA",
    "USA",
    "PRENDI",
    "LASCIA",
    "PARLA A"
  ]
};

let currentLang = "en";
let gameData = {
  chapters: null,
  ingame: { conversation: null, logic: null, items: null, scenes: null },
  assets: null,
  menuBlink: null,
  menuBtns: null,
  actions: actions,
  transitions: null,
  tips: {
    delay: 10,
    nomore: [112, 113],
    later: [114, 110, 111, 132, 133, 134],
    ok: [[118, 119, 120], [121, 122, 123]],
    nomoreA: [135],
    laterA: [136],
    okA: [137, 138, 140]
  },

  skills: [
    { s: "phaser", v: 60 },
    { s: "javascript", v: 70 },
    { s: "html", v: 75 },
    { s: "typescript", v: 60 },
    { s: "css", v: 65 },
    { s: ".net", v: 70 },
    { s: "c#", v: 65 },
    { s: "gamedev", v: 50 },
    { s: "design", v: 60 },
    { s: "ux", v: 65 },
    { s: "clm", v: 80 },
    { s: "tsql", v: 70 },
    { s: "firebase", v: 60 }
  ],
  photos: {
    phaser: [
      {
        image: "phaser-foto-1",
        text: "Universal JS day - Ferrara 2017",
        link: "https://vimeo.com/218937256"
      },
      { image: "phaser-foto-2", text: "Hello all!" },
      { image: "phaser-foto-3", text: "Let's start with phaser!" },
      { image: "phaser-foto-4", text: "Alert! The game is started..." },
      { image: "phaser-foto-5", text: "Game Over!" },
      { image: "phaser-foto-6", text: "Multiplayer example with Firebase..." },
      { image: "phaser-foto-7", text: "...ready to run!" },
      { image: "phaser-foto-8", text: "...winners and loosers!" }
    ],
    cake: [
      {
        image: "cake-foto-1",
        text: "Angry birds... Daniel 4th!"
      },
      { image: "cake-foto-2", text: "Angry birds detail... Daniel 4th!" },
      { image: "cake-foto-3", text: "Angry birds... Daniel 4th!" },
      { image: "cake-foto-4", text: "Simple halloween..." },
      { image: "cake-foto-5", text: "Little doll... Noemi 1th!" },
      { image: "cake-foto-6", text: "The padawan... Daniel 5th!" },
      { image: "cake-foto-7", text: "Peppa... Noemi 2nd!" },
      { image: "cake-foto-8", text: "Dalton... Daniel 6th!" },
      { image: "cake-foto-9", text: "Minions... Noemi 3th!" },
      { image: "cake-foto-10", text: "The Dark side... Daniel 7th!" },
      { image: "cake-foto-11", text: "Frozen... Noemi 4th!" }
    ]
  }
};

gameData.transitions = [
  {
    delay: 5,
    end: 150,
    sequence: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
      [9, 0],
      [10, 0],
      [11, 0],
      [12, 0],
      [13, 0],
      [14, 0],
      [15, 0],
      [16, 0],
      [17, 0],
      [18, 0],
      [19, 0],
      [20, 0],
      [21, 0],
      [22, 0],
      [23, 0],
      [24, 0],
      [25, 0],
      [26, 0],
      [27, 0],
      [28, 0],
      [29, 0],
      [30, 0],
      [31, 0],
      [32, 0],
      [33, 0],
      [34, 0],
      [35, 0],
      [36, 0],
      [37, 0],
      [38, 0],
      [39, 0],
      [40, 0],
      [41, 0],
      [42, 0],
      [43, 0],
      [44, 0],
      [45, 0],
      [46, 0],
      [47, 0],
      [48, 0],
      [49, 0],
      [50, 0],
      [51, 0],
      [52, 0],
      [53, 0],
      [54, 0],
      [55, 0],
      [56, 0],
      [57, 0],
      [58, 0],
      [59, 0],
      [60, 0],
      [61, 0],
      [62, 0],
      [63, 0],
      [64, 0],
      [65, 0],
      [66, 0],
      [67, 0],
      [68, 0],
      [69, 0],
      [70, 0],
      [71, 0],
      [72, 0],
      [73, 0],
      [74, 0],
      [75, 0],
      [76, 0],
      [77, 0],
      [78, 0],
      [79, 0],
      [80, 0],
      [81, 0],
      [82, 0],
      [83, 0],
      [84, 0],
      [85, 0],
      [86, 0],
      [87, 0],
      [88, 0],
      [89, 0],
      [90, 0],
      [91, 0],
      [92, 0],
      [93, 0],
      [94, 0],
      [95, 0],
      [96, 0],
      [97, 0],
      [98, 0],
      [99, 0],
      [100, 0],
      [101, 0],
      [102, 0],
      [103, 0],
      [104, 0],
      [105, 0],
      [106, 0],
      [107, 0],
      [108, 0],
      [109, 0],
      [110, 0],
      [111, 0],
      [112, 0],
      [113, 0],
      [114, 0],
      [115, 0],
      [116, 0],
      [117, 0],
      [118, 0],
      [119, 0],
      [120, 0],
      [121, 0],
      [122, 0],
      [123, 0],
      [124, 0],
      [125, 0],
      [126, 0],
      [127, 0],
      [128, 0],
      [129, 0],
      [130, 0],
      [131, 0],
      [132, 0],
      [133, 0],
      [134, 0],
      [135, 0],
      [136, 0],
      [137, 0],
      [138, 0],
      [139, 0],
      [140, 0],
      [141, 0],
      [142, 0],
      [143, 0],
      [144, 0],
      [145, 0],
      [146, 0],
      [147, 0],
      [148, 0],
      [149, 0],
      [150, 0]
    ]
  },
  {
    delay: 5,
    end: 80,
    sequence: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
      [5, 0],
      [6, 0],
      [7, 0],
      [8, 0],
      [9, 0],
      [10, 0],
      [11, 0],
      [12, 0],
      [13, 0],
      [14, 0],
      [15, 0],
      [30, 0],
      [45, 0],
      [60, 0],
      [75, 0],
      [90, 0],
      [105, 0],
      [120, 0],
      [135, 0],
      [150, 0],
      [149, 0],
      [148, 0],
      [147, 0],
      [146, 0],
      [145, 0],
      [144, 0],
      [143, 0],
      [142, 0],
      [141, 0],
      [140, 0],
      [139, 0],
      [138, 0],
      [137, 0],
      [136, 0],
      [121, 0],
      [106, 0],
      [91, 0],
      [76, 0],
      [61, 0],
      [46, 0],
      [31, 0],
      [16, 0],
      [17, 0],
      [18, 0],
      [19, 0],
      [20, 0],
      [21, 0],
      [22, 0],
      [23, 0],
      [24, 0],
      [25, 0],
      [26, 0],
      [27, 0],
      [28, 0],
      [29, 0],
      [44, 0],
      [59, 0],
      [74, 0],
      [89, 0],
      [104, 0],
      [119, 0],
      [134, 0],
      [133, 0],
      [132, 0],
      [131, 0],
      [130, 0],
      [129, 0],
      [128, 0],
      [127, 0],
      [126, 0],
      [125, 0],
      [124, 0],
      [123, 0],
      [122, 0],
      [107, 0],
      [92, 0],
      [77, 0],
      [62, 0],
      [47, 0],
      [32, 0],
      [33, 0],
      [34, 0],
      [35, 0],
      [36, 0],
      [37, 0],
      [38, 0],
      [39, 0],
      [40, 0],
      [41, 0],
      [42, 0],
      [43, 0],
      [58, 0],
      [73, 0],
      [88, 0],
      [103, 0],
      [118, 0],
      [117, 0],
      [116, 0],
      [115, 0],
      [114, 0],
      [113, 0],
      [112, 0],
      [111, 0],
      [110, 0],
      [109, 0],
      [108, 0],
      [93, 0],
      [78, 0],
      [63, 0],
      [48, 0],
      [49, 0],
      [50, 0],
      [51, 0],
      [52, 0],
      [53, 0],
      [54, 0],
      [55, 0],
      [56, 0],
      [57, 0],
      [72, 0],
      [87, 0],
      [102, 0],
      [101, 0],
      [100, 0],
      [99, 0],
      [98, 0],
      [97, 0],
      [96, 0],
      [95, 0],
      [94, 0],
      [79, 0],
      [64, 0],
      [65, 0],
      [66, 0],
      [67, 0],
      [68, 0],
      [69, 0],
      [70, 0],
      [71, 0],
      [86, 0],
      [85, 0],
      [84, 0],
      [83, 0],
      [82, 0],
      [81, 0],
      [80, 0]
    ]
  }
];

let eases = [
  "Linear",
  "Quad.easeIn",
  "Cubic.easeIn",
  "Quart.easeIn",
  "Quint.easeIn",
  "Sine.easeIn",
  "Expo.easeIn",
  "Circ.easeIn",
  "Back.easeIn",
  "Bounce.easeIn",
  "Quad.easeOut",
  "Cubic.easeOut",
  "Quart.easeOut",
  "Quint.easeOut",
  "Sine.easeOut",
  "Expo.easeOut",
  "Circ.easeOut",
  "Back.easeOut",
  "Bounce.easeOut",
  "Quad.easeInOut",
  "Cubic.easeInOut",
  "Quart.easeInOut",
  "Quint.easeInOut",
  "Sine.easeInOut",
  "Expo.easeInOut",
  "Circ.easeInOut",
  "Back.easeInOut",
  "Bounce.easeInOut"
];
