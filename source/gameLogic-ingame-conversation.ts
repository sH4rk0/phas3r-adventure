gameData.ingame.conversation = {


    RESTART: [{


        text: "Do you want to restart the game?", //z89.getLabel(85),
        isItem: false,
        fork: false,
        options: [
            { option: "YES", action: (cs: z89.GameCity, target: z89.Items) => { cs.restartGame(); } },
           { option: "NO", action: (cs: z89.GameCity, target: z89.Items) => { cs.conversationBaloon.hideBaloon(); } }
       ]

    }],

    CHAPTER_COMPLETED: [{

        text: z89.getLabel(94),
        isItem: false,
        fork: true,
        options: [
            { option: "YES", action: (cs: z89.GameCity, target: z89.Items) => { 

               cs.nextChapter();
            
            } },
            
            { option: "LEAVE THE GAME", action: (cs: z89.GameCity, target: z89.Items) => { 

                cs.leaveGame();
               
            } }
        ]

    }],


    INFO: [{
        label: "info",
        text: z89.getLabel(84),
        isItem: false,
        fork: true,
        options: [
            { option: "Credits", goto: "credits" }
        ]

    },

    {
        label: "credits",
        text: z89.getLabel(86),
        isItem: false,
        fork: true,
        options: [
            { option: "back", goto: "info" }
        ]


    }],

    OPTIONS: [{


        text: z89.getLabel(87),
        isItem: false

    }],

    TALKTO_devday: [

        {

            text: z89.getLabel(89),
            isItem: false,
            fork: true,

            options: [{ option: "DEVDAY website", link: "http://www.devday.it" }, { option: "DEVDAY on youtube", link: "https://www.youtube.com/channel/UCUmykbn_rG5dExSncCgW9Nw" }, { option: "DEVDAY galaxy", link: "http://dd.zero89.it" }]
        }],

    USE_jukebox: [

        {
            text: z89.getLabel(91),
            isItem: false,
            fork: true,
            options: [
                {
                    option: "Nothing", action: (cs: z89.GameCity, target: z89.Items) => {
                        cs.gameUtils.addDelay(500, () => { 
                            
                            let _jukebox=cs.gameItemsUtils.getItemById(11);
                            _jukebox.play("11-idle");
                            cs.stopSound();
                           // let _woofer=cs.gameItemsUtils.getItemById(12);
                           // _woofer.tween.pause();
                        });
                        cs.conversationBaloon.hideBaloon();
                        cs.player.play("player-use");
                       
                    }
                },
                {
                    option: "Some 8bit Tune", action: (cs: z89.GameCity, target: z89.Items) => {
                        cs.playSound(0);
                        cs.gameUtils.addDelay(500, () => { 
                            let _jukebox=cs.gameItemsUtils.getItemById(11);
                            _jukebox.play("11-play");
                           // let _woofer=cs.gameItemsUtils.getItemById(12);
                           // _woofer.tween.resume();
                        });
                       
                        cs.conversationBaloon.hideBaloon();
                        cs.player.play("player-use");
                       


                    }
                }
            ]
        }

    ],

    TALKTO_27: [

        {

            text: z89.getLabel(97),
            isItem: false,
            next: true,
        },

        {

            text: z89.getLabel(98),
            isItem: true,
            next: true,
        },

        {

            text: z89.getLabel(67),
            isItem: false,
            end: true,
        },

    ],


    TALKTO_16: [

        {

            text: z89.getLabel(66),
            isItem: false,
            next: true,
        },

        {

            text: z89.getLabel(65),
            isItem: true,
            next: true,
        },

        {

            text: z89.getLabel(67),
            isItem: false,
            end: true,
        },

    ],

    TALKTO_19_null: [

        {

            text: z89.getLabel(68),
            isItem: false,
            next: true,
        },

        {

            text: z89.getLabel(69),
            isItem: true,
            next: true,
        },
        {

            text: z89.getLabel(70),
            isItem: false,
            end: true,
            callback: (cs: z89.GameCity) => {

                cs.updateItemObject(19, "conversationStatus", 0)

            }
        }

    ],

    TALKTO_19_0: [

        {
            text: z89.getLabel(71),
            isItem: true,
            next: true,
        },

        {

            text: z89.getLabel(72),
            isItem: false,
            end: true,
        }

    ],

    TALKTO_19_1: [

        {
            text: z89.getLabel(73),
            isItem: true,
            next: true,
        },

        {

            text: z89.getLabel(74),
            isItem: false,
            end: true,
        }

    ]


}
