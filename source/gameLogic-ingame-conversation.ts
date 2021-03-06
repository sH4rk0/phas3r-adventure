gameData.ingame.conversation = {
  CHECK_TIP_TIME: (cs: z89.GameCity) => {
    let lastTip: any = cs.saveGameObj.getSaved().tips.lastTip;
    if (lastTip != undefined) {
      lastTip = new Date(cs.saveGameObj.getSaved().tips.lastTip);
      let now: any = new Date();
      return (now.getTime() - lastTip.getTime()) / 1000;
    }
    return 0;
  },

  MANAGE_TIP: (cs: z89.GameCity) => {
    let tips: Array<String> = JSON.parse(
      JSON.stringify(cs.saveGameObj.getSaved().tips.tips)
    );

    let nextTip: String = "";
    let diff: number = gameData.ingame.conversation.CHECK_TIP_TIME(cs);

    if (diff < gameData.tips.delay) {
      //later
      nextTip = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.later));
      //laterA
      gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(
        Phaser.Utils.Array.GetRandom(gameData.tips.laterA)
      );
    }

    if (tips.length == 0) {
      cs.saveGameObj.setTip(gameData.tips.ok[cs.currentChapter][0] + "");
      //ok
      nextTip = z89.getLabel(gameData.tips.ok[cs.currentChapter][0]);
      //okA
      gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(
        Phaser.Utils.Array.GetRandom(gameData.tips.okA)
      );
    } else {
      if (diff != null && diff > gameData.tips.delay) {
        if (tips.length < gameData.tips.ok[cs.currentChapter].length) {
          gameData.tips.ok[cs.currentChapter].forEach((alltips, index) => {
            if (tips.indexOf(alltips + "") == -1 && nextTip == "") {
              cs.saveGameObj.setTip(alltips + "");
              //ok
              nextTip = z89.getLabel(alltips);
              //okA
              gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(
                Phaser.Utils.Array.GetRandom(gameData.tips.okA)
              );
            }
          });
        } else {
          //nomore
          nextTip = z89.getLabel(
            Phaser.Utils.Array.GetRandom(gameData.tips.nomore)
          );
          //nomoreA
          gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(
            Phaser.Utils.Array.GetRandom(gameData.tips.nomoreA)
          );
        }
      }
    }
    //console.log("return",nextTip)
    return nextTip;
  },

  MANAGE_TIP_LIST: cs => {
    let _return: String = "";
    cs.saveGameObj.getSaved().tips.tips.forEach(element => {
      _return = _return + z89.getLabel(element) + "\n\n";
    });

    return _return;
  },

  MANAGE_TIP_ANSWER: "",

  HELP_GAME: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(Phaser.Utils.Array.GetRandom([115, 116, 117])),
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
        options: [{ option: z89.getLabel(159), goto: "tiplist" }]
      },

      {
        label: "tiplist",
        text: gameData.ingame.conversation.MANAGE_TIP_LIST(cs),
        isItem: false,
        fork: false
      }
    ];
  },

  PHASER: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(223),
        isItem: false,
        fork: false,
        options: [
          {
            option: z89.getLabel(224),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.showViewer(gameData.photos.phaser, () => {
                cs.playerBaloon.showBaloon("What a flashback! :D");
              });
            }
          }
        ]
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

  LANGUAGE: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(178),
        isItem: false,
        fork: false,
        options: [
          {
            option: z89.getLabel(179),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.setLanguage("en");
            }
          },
          {
            option: z89.getLabel(180),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.setLanguage("it");
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
        options: [
          { option: "PHASER.IO", link: "http://www.phaser.io" },
          {
            option: "PAUL WEBSITE",
            link: "http://probertson.tumblr.com/"
          },
          { option: "JASON WEBSITE", link: "http://jasontammemagi.com/" }
        ]
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
              cs.addDelay(500, () => {
                let _jukebox = cs.gameItemsUtils.getItemById(11);
                _jukebox.play("11-idle");
                cs.stopSound();
                // let _woofer=cs.gameItemsUtils.getItemById(12);
                // _woofer.tween.pause();
              });
              cs.conversationBaloon.hideBaloon();
              cs.playerAnimation("player-use");
            }
          },
          {
            option: z89.getLabel(131),
            action: (cs: z89.GameCity, target: z89.Items) => {
              cs.playSound(0);
              cs.addDelay(500, () => {
                let _jukebox = cs.gameItemsUtils.getItemById(11);
                _jukebox.play("11-play");
                // let _woofer=cs.gameItemsUtils.getItemById(12);
                // _woofer.tween.resume();
              });

              cs.conversationBaloon.hideBaloon();
              cs.playerAnimation("player-use");
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

  TALKTO_20_Null: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(160),
        isItem: false,
        next: true
      },
      {
        text: z89.getLabel(161),
        isItem: true,
        next: true
      },
      {
        text: z89.getLabel(162),
        isItem: false,
        next: true
      },
      {
        text: z89.getLabel(163),
        isItem: true,
        next: true
      },
      {
        text: z89.getLabel(164),
        isItem: false,
        end: true,
        callback: (cs: z89.GameCity) => {
          cs.getItem(20).setConversationStatus(0);
        }
      }
    ];
  },

  TALKTO_20_0: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(165),
        isItem: true,
        next: true
      },
      {
        text: z89.getLabel(166),
        isItem: false,
        end: true
      }
    ];
  },

  TALKTO_21_Null: (cs: z89.GameCity) => {
    return [
      { text: z89.getLabel(186), isItem: false, next: true },
      { text: z89.getLabel(187), isItem: true, next: true },
      { text: z89.getLabel(188), isItem: false, next: true },
      { text: z89.getLabel(189), isItem: true, next: true },
      { text: z89.getLabel(190), isItem: false, next: true },
      { text: z89.getLabel(191), isItem: true, next: true },
      { text: z89.getLabel(192), isItem: false, next: true },
      {
        text: z89.getLabel(193),
        isItem: true,
        end: true,
        isSkippable: false,
        callback: (cs: z89.GameCity) => {
          cs.getItem(21).setConversationStatus(0);
        }
      }
    ];
  },

  TALKTO_21_0: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(194),
        isItem: true,
        next: true
      },
      {
        text: z89.getLabel(195),
        isItem: false,
        end: true
      }
    ];
  },

  TALKTO_21_GAME: (cs: z89.GameCity) => {
    return [
      { text: z89.getLabel(196), isItem: true, next: true },
      { text: z89.getLabel(197), isItem: false, next: true },
      { text: z89.getLabel(198), isItem: true, next: true },
      { text: z89.getLabel(199), isItem: false, next: true },
      { text: z89.getLabel(200), isItem: true, next: true },
      { text: z89.getLabel(201), isItem: false, next: true },
      {
        text: z89.getLabel(202),
        isItem: true,
        next: true
      },
      {
        text: z89.getLabel(203),
        isItem: false,
        end: true,
        callback: (cs: z89.GameCity) => {
          cs.gameItemsUtils.beamOut(cs.getItem(21), () => {
            cs.addDelay(2000, () => {
              cs.getItem(21).play("21-mask");
              cs.gameItemsUtils.beamIn(cs.getItem(21), () => {
                cs.setUpConversation(
                  z89.conversationObj("TALKTO_21_GAME_BACK", cs.currentItem)
                );
              });
            });
          });
        }
      }
    ];
  },

  TALKTO_21_GAME_BACK: (cs: z89.GameCity) => {
    return [
      { text: z89.getLabel(204), isItem: true, next: true },
      { text: z89.getLabel(205), isItem: false, next: true },
      { text: z89.getLabel(206), isItem: true, next: true },
      { text: z89.getLabel(207), isItem: false, next: true },
      { text: z89.getLabel(208), isItem: true, next: true },
      {
        text: z89.getLabel(209),
        isItem: false,
        end: true,
        callback: () => {
          cs.playerAnimation("player-use");
          cs.getItem(21).play("21-idle");
          cs.enableInteraction();
          cs.gameItemsUtils.addItem(35);
          cs.addInventoryItem(cs.getItem(35), true);
        }
      }
    ];
  },

  TALKTO_106: (cs: z89.GameCity) => {
    return [
      { text: z89.getLabel(183), isItem: true, next: true },
      { text: z89.getLabel(184), isItem: false, next: true },
      { text: z89.getLabel(185), isItem: true, end: true }
    ];
  },

  DADDY: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(167),
        isItem: true,
        next: true,
        delay: 1000
      },
      {
        text: z89.getLabel(168),
        isItem: false,
        next: true,
        delay: 1000
      },
      {
        text: z89.getLabel(169),
        isItem: true,
        next: true,
        delay: 1000
      },
      {
        text: z89.getLabel(170),
        isItem: false,
        next: true
      },
      {
        text: z89.getLabel(171),
        isItem: true,
        next: true,
        delay: 1000
      },
      {
        text: z89.getLabel(172),
        isItem: true,
        next: true,
        delay: 1000,
        isSkippable: false,
        callback: (cs: z89.GameCity) => {
          cs.getItem(34).itemObj.open = true;
          cs.updateItems();
        }
      },

      {
        text: z89.getLabel(173),
        isItem: false,
        end: true,
        isSkippable: false,
        callback: (cs: z89.GameCity) => {
          cs.enableInteraction();
        }
      }
    ];
  },

  TALKTO_20_1: (cs: z89.GameCity) => {
    return [
      {
        text: z89.getLabel(174),
        isItem: false,
        next: true
      },
      {
        text: z89.getLabel(175),
        isItem: true,
        next: true
      },
      {
        text: z89.getLabel(176),
        isItem: false,
        next: true
      },
      {
        text: z89.getLabel(177),
        isItem: true,
        end: true,
        callback: (cs: z89.GameCity) => {
          cs.getItem(20).setConversationStatus(2);
        }
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
