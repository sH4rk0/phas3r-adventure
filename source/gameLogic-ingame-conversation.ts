gameData.ingame.conversation = {
  //TIPS: [[z89.getLabel(118), z89.getLabel(119), z89.getLabel(120)], [z89.getLabel(121), z89.getLabel(122), z89.getLabel(123)]],

  CHECK_TIP_TIME: (cs: z89.GameCity) =>{

    let lastTip: any = cs.saveGameObj.getSaved().tips.lastTip;
    if (lastTip != undefined) {
        lastTip = new Date(cs.saveGameObj.getSaved().tips.lastTip);
        let now: any = new Date();
        return (now.getTime() - lastTip.getTime()) / 1000;
  
        
      }
      return 0;

  },


  /*
  MANAGE_TIP: (cs: z89.GameCity) => {
    console.log("MANAGE_TIP");
    let tips: Array<String> = JSON.parse(
      JSON.stringify(cs.saveGameObj.getSaved().tips.tips)
    );

    
    let nextTip: String = "";
    let diff: number = gameData.ingame.conversation.CHECK_TIP_TIME(cs);

    if (diff < 60) {
        nextTip = z89.getLabel(Phaser.Utils.Array.GetRandom([114,110,111,132,133,134]));
        gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom([136]));
      }

      if (tips.length == 0) {
        cs.saveGameObj.setTip(
          gameData.ingame.conversation.TIPS[cs.currentChapter][0]
        );
        nextTip = gameData.ingame.conversation.TIPS[cs.currentChapter][0];
        gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom([137,138,140]));

      } else {

        if (diff != null && diff > 60) {
        if (tips.length < gameData.ingame.conversation.TIPS[cs.currentChapter].length) {
          gameData.ingame.conversation.TIPS[cs.currentChapter].forEach(
            (alltips,index) => {
                
              if (tips.indexOf(alltips) == -1 && nextTip == "") {
                cs.saveGameObj.setTip(alltips);
                nextTip = alltips;
                gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom([137,138,140]));

              }
            }
          );
        }else{
            nextTip = z89.getLabel(Phaser.Utils.Array.GetRandom([112,113]));
            gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom([135]));
        }
      }

    }
    //console.log("return",nextTip)
    return nextTip;
  },*/

  MANAGE_TIP: (cs: z89.GameCity) => {
    console.log("MANAGE_TIP");
    let tips: Array<String> = JSON.parse(
      JSON.stringify(cs.saveGameObj.getSaved().tips.tips)
    );

    
    let nextTip: String = "";
    let diff: number = gameData.ingame.conversation.CHECK_TIP_TIME(cs);

    if (diff < gameData.tips.delay) {
        //later
        nextTip = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.later));
        //laterA
        gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.laterA));
      }

      if (tips.length == 0) {
        cs.saveGameObj.setTip(
            gameData.tips.ok[cs.currentChapter][0]+""
        );
        //ok
        nextTip = z89.getLabel( gameData.tips.ok[cs.currentChapter][0]);
        //okA
        gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.okA));

      } else {

        if (diff != null && diff > gameData.tips.delay) {
        if (tips.length < gameData.tips.ok[cs.currentChapter].length) {
          gameData.tips.ok[cs.currentChapter].forEach(
            (alltips,index) => {
                
              if (tips.indexOf(alltips+"") == -1 && nextTip == "") {
                cs.saveGameObj.setTip(alltips+"");
                //ok
                nextTip = z89.getLabel(alltips);
                //okA
                gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.okA));

              }
            }
          );
        }else{
            //nomore
            nextTip = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.nomore));
            //nomoreA
            gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.nomoreA));
        }
      }

    }
    //console.log("return",nextTip)
    return nextTip;
  },


MANAGE_TIP_LIST: (cs)=>{

        let _return:String="";
       cs.saveGameObj.getSaved().tips.tips.forEach(element => {
           

_return=_return+z89.getLabel(element)+"\n\n"
       }); 
       
       return _return
},


  MANAGE_TIP_ANSWER: "",
 
  HELP_GAME: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(Phaser.Utils.Array.GetRandom([115,116,117])),
        isItem: false,
        next: true
      },

      {
        text: gameData.ingame.conversation.MANAGE_TIP(cs),
        isItem: true,
        next: true
      },

      {
        text: gameData.ingame.conversation.MANAGE_TIP_ANSWER,
        isItem: false,
        fork: true,
        options: [{ option: "TIPs I GOT!", goto: "tiplist" }]
      },

      {
        label: "tiplist",
        text: gameData.ingame.conversation.MANAGE_TIP_LIST(cs),
        isItem: false,
        fork: false,
      
      }


    ];
  },

  RESTART: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(124),
        isItem: false,
        fork: false,
        options: [
          {
            option: z89.getLabel(125),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.restartGame();
            }
          },
          {
            option: z89.getLabel(126),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.conversationBaloon.hideBaloon();
            }
          }
        ]
      }
    ];
  },

  CHAPTER_COMPLETED: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(94),
        isItem: false,
        fork: true,
        options: [
          {
            option: z89.getLabel(125),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.nextChapter();
            }
          },

          {
            option: z89.getLabel(127),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.leaveGame();
            }
          }
        ]
      }
    ];
  },

  INFO: (cs: z89.GameCity) => {
    return [
      {
        label: "info",
        text: z89.getLabel(84),
        isItem: false,
        fork: true,
        options: [{ option: z89.getLabel(128), goto: "credits" }]
      },

      {
        label: "credits",
        text: z89.getLabel(86),
        isItem: false,
        fork: true,
        options: [{ option: z89.getLabel(129), goto: "info" }]
      }
    ];
  },

  OPTIONS: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(87),
        isItem: false
      }
    ];
  },

  TALKTO_devday: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(89),
        isItem: false,
        fork: true,

        options: [
          { option: "DEVDAY website", link: "http://www.devday.it" },
          {
            option: "DEVDAY on youtube",
            link: "https://www.youtube.com/channel/UCUmykbn_rG5dExSncCgW9Nw"
          },
          { option: "DEVDAY galaxy", link: "http://dd.zero89.it" }
        ]
      }
    ];
  },

  USE_jukebox: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(91),
        isItem: false,
        fork: true,
        options: [
          {
            option: z89.getLabel(130),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.gameUtils.addDelay(500, () => {
                let _jukebox = cs.gameItemsUtils.getItemById(11);
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
            option: z89.getLabel(131),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.playSound(0);
              cs.gameUtils.addDelay(500, () => {
                let _jukebox = cs.gameItemsUtils.getItemById(11);
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
    ];
  },

  TALKTO_27: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(97),
        isItem: false,
        next: true
      },

      {
        text: z89.getLabel(98),
        isItem: true,
        next: true
      },

      {
        text: z89.getLabel(67),
        isItem: false,
        end: true
      }
    ];
  },

  TALKTO_16: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(66),
        isItem: false,
        next: true
      },

      {
        text: z89.getLabel(65),
        isItem: true,
        next: true
      },

      {
        text: z89.getLabel(67),
        isItem: false,
        end: true
      }
    ];
  },

  TALKTO_19_null: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(68),
        isItem: false,
        next: true
      },

      {
        text: z89.getLabel(69),
        isItem: true,
        next: true
      },
      {
        text: z89.getLabel(70),
        isItem: false,
        end: true,
        callback: (cs: z89.GameCity) => {
          cs.updateItemObject(19, "conversationStatus", 0);
        }
      }
    ];
  },

  TALKTO_19_0: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(71),
        isItem: true,
        next: true
      },

      {
        text: z89.getLabel(72),
        isItem: false,
        end: true
      }
    ];
  },

  TALKTO_19_1: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(73),
        isItem: true,
        next: true
      },

      {
        text: z89.getLabel(74),
        isItem: false,
        end: true
      }
    ];
  }
};

/*https://www.amazon.com/Harry-Potter-Cloak-of-Invisibility/dp/B00421A5FS*/
