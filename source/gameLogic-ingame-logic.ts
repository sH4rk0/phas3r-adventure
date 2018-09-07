gameData.ingame.logic = {
  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  EMAMINE
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */
  // examine terminal
  EXAMINE_2: (cs: z89.GameCity) => {
    if (cs.getItem(2).itemObj.working) {
      cs.showPlayerBaloon(82);
    } else {
      cs.showPlayerBaloon(81);
    }
  },

  EXAMINE_14: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(139);
  },

  EXAMINE_29: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(181);
  },

  //examine screwdriver
  EXAMINE_10: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(149);
  },

  //examine bottle
  EXAMINE_8: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(143);
  },

  //examine floppy
  EXAMINE_9: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(146);
  },

  // examine terminal2
  EXAMINE_6: (cs: z89.GameCity) => {
    if (cs.getItem(6).itemObj.working) {
      cs.showPlayerBaloon(82);
    } else {
      cs.showPlayerBaloon(81);
    }
  },
  //examine gerardo
  EXAMINE_16: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(43);
  },
  // examine coins
  EXAMINE_3: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(26);
  },

  // examine coins
  EXAMINE_25: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(27);
  },

  // examine drink machine
  EXAMINE_1: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(6);
  },

  // devday palace
  EXAMINE_21: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(38);
  },

  // devday screen
  EXAMINE_22: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(75);
  },

  //examine garbage
  EXAMINE_4: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(62);
  },

  //examine scotch tape
  EXAMINE_24: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(58);
  },

  //examine energy box
  EXAMINE_23: (cs: z89.GameCity) => {
    if (cs.getItem(23).itemObj.fixed) {
      cs.showPlayerBaloon(60);
    } else {
      cs.showPlayerBaloon(59);
    }
  },

  //examine daniele
  EXAMINE_17: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(63);
  },

  //examine davide
  EXAMINE_18: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(64);
  },

  //examine michele
  EXAMINE_19: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(32);
  },

  //examine cloak
  EXAMINE_13: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(147);
  },

  //examine cloak
  EXAMINE_34: (cs: z89.GameCity) => {
    if (cs.getItem(34).itemObj.open) {
      cs.showPlayerBaloon(153);
    } else {
      cs.showPlayerBaloon(153);
    }
  },

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  USE
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */
  // use terminal
  USE_2: (cs: z89.GameCity) => {
    if (cs.getItem(2).itemObj.working) {
      cs.Terminal.show(0);
      cs.playerActions.hide();
    } else {
      cs.showPlayerBaloon(83);
    }
  },

  // use terminal 2
  USE_6: (cs: z89.GameCity) => {
    if (cs.getItem(6).itemObj.working) {
      cs.Terminal.show(0);
      cs.playerActions.hide();
    } else {
      cs.showPlayerBaloon(83);
    }
  },

  // use coins on drink machine
  USE_25_1: (cs: z89.GameCity) => {
    cs.playerAnimation("player-use");
    cs.removeInventoryItems();
    cs.addDelay(1000, () => {
      cs.addItem(3);
      cs.getItem(3).itemObj.onStart = true;
      cs.updateItems();
    });
  },

  // use bottle on trash
  USE_8_4: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(144);
  },

  // use bottle on trash2
  USE_8_7: (cs: z89.GameCity) => {
    cs.removeInventoryItems();
    cs.playerAnimation("player-use");
    cs.addDelay(300, () => {
      cs.showPlayerBaloon(182);
      cs.addItem(9);
      cs.getItem(9).itemObj.onStart = true;
      cs.updateItems();
    });
  },

  //use devday
  USE_21: (cs: z89.GameCity) => {
    cs.setUpConversation(z89.conversationObj("TALKTO_devday"));
  },

  //use jukoxeb
  USE_11: (cs: z89.GameCity) => {
    cs.setUpConversation(z89.conversationObj("USE_jukebox"));
  },

  //use interphone
  USE_29: (cs: z89.GameCity) => {
    cs.playerAnimation("player-use");

    console.log(cs.currentChapter);

    if (cs.currentChapter == 0) {
      cs.disableInteraction();
      cs.addDelay(2000, () => {
        cs.showPlayerBaloon(154, () => {
          cs.enableInteraction();
        });
      });
    }
    if (cs.currentChapter == 1) {
      cs.disableInteraction();
      cs.addDelay(2000, () => {
        cs.setUpConversation(z89.conversationObj("DADDY", cs.currentItem));
      });
    } else {
    }
  },

  //use jukoxeb
  USE_10_14: (cs: z89.GameCity) => {
    if (cs.getItem(20).getConversationStatus() == 0) {
      cs.playerAnimation("player-use");
      cs.updateItemObject(14, "fixed", true);
      cs.getItem(20).setConversationStatus(1);
      cs.showPlayerBaloon(150);
    } else {
      cs.showPlayerBaloon(151);
    }
  },

  //use scotch on broken cable
  USE_24_23: (cs: z89.GameCity) => {
    cs.playerAnimation("player-use");
    cs.removeInventoryItems();
    cs.addDelay(1000, () => {
      cs.getItem(23).playAnim("23-fixed");
      cs.getItem(22).start();
      cs.getItem(2).playAnim("2-working");
      cs.updateItemsObjects(
        [23, 23, 22, 19, 2],
        ["name", "fixed", "isStarted", "conversationStatus", "working"],
        [z89.getLabel(57), true, true, 1, true]
      );
      cs.updateItems();
      cs.chapterCompleted();
    });
  },

  USE_30_32: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(155);
    cs.removeInventoryItems();
    cs.addInventory(31, true);
  },

  USE_13: (cs: z89.GameCity) => {
    cs.removeInventoryItems();
    cs.player.setAlpha(0.5);
  },

  //use door
  USE_33: (cs: z89.GameCity) => {
    cs.disableInteraction();

    cs.addDelay(500, () => {
      cs.addTween({ targets: cs.player, alpha: 0 });
      cs.getItem(50).start();

      cs.addDelay(2500, () => {
        cs.addTween({
          targets: cs.player,
          alpha: 1,
          duration: 500,
          onComplete: () => {
            cs.enableInteraction();
            cs.chapterCompleted();
          }
        });
        const _item = cs.getItem(34);
        cs.addTween({ targets: _item, x: _item.x - 76, ease: "Quad.easeOut" });
        _item.itemObj.open = false;
        cs.updateItems();
      });
    });
  },

  //use zak mask
  USE_35: (cs: z89.GameCity) => {
    cs.player.useMask(true);
    cs.playerAnimation("player-idle");
  },

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  PUSH
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */
  //push garbage
  PUSH_4: (cs: z89.GameCity) => {
    let item: any = cs.getItem(4);
    if (!item.itemObj.moved) {
      cs.playerAnimation("player-use");
      item.itemObj.moved = true;
      if (cs.player.x < 450) {
        cs.addTween({
          targets: item,
          x: 500,
          duration: 500,
          ease: "Quad.easeOut",
          delay: 400
        });

        item.updateItemObj("x", 500);
      } else {
        cs.addTween({
          targets: item,
          x: 400,
          duration: 500,
          ease: "Quad.easeOut",
          delay: 400
        });
        item.updateItemObj("x", 400);
      }
    } else {
      cs.showPlayerBaloon(93);
    }
  },

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  GIVE
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */

  GIVE_9_21: (cs: z89.GameCity) => {
    cs.playerAnimation("player-use");
    cs.removeInventoryItems();

    cs.addDelay(500, () => {
      cs.disableInteraction();
      cs.setUpConversation(
        z89.conversationObj("TALKTO_21_GAME", cs.currentItem)
      );
    });
  },

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  OPEN
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */

  OPEN_34: (cs: z89.GameCity) => {
    cs.playerAnimation("player-use");
    const _item = cs.getItem(34);

    if (_item.itemObj.open) {
      cs.addDelay(500, () => {
        cs.addTween({ targets: _item, x: _item.x + 76, ease: "Quad.easeOut" });
      });
    } else {
      cs.showPlayerBaloon(156);
    }
  },
  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  CLOSE
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */

  CLOSE_34: (cs: z89.GameCity) => {
    cs.playerAnimation("player-use");
    const _item = cs.getItem(34);

    if (_item.itemObj.open) {
      cs.addDelay(500, () => {
        cs.addTween({ targets: _item, x: _item.x - 76, ease: "Quad.easeOut" });
      });
    } else {
      cs.showPlayerBaloon(157);
    }
  },

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  PICK UP
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */
  //pickup scotch
  PICKUP_24: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(24), false);
  },

  //pickup floppy
  PICKUP_9: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(9), false);
  },

  //pickup screwdriver
  PICKUP_10: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(10), false);
  },

  //pickup bottle
  PICKUP_8: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(8), false);
  },

  //pickup coke
  PICKUP_3: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(3), false);
  },

  //pickup coins
  PICKUP_25: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(25), false);
  },

  //pickup bitcoin
  PICKUP_30: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(30), false);
  },

  //pickup blockchain
  PICKUP_32: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(32), false);
  },

  //pickup jumper
  PICKUP_101: (cs: z89.GameCity) => {
    console.log("pickup jumper");
    cs.playerAnimation("player-use");
  },

  //pickup runner
  PICKUP_102: (cs: z89.GameCity) => {
    console.log("pickup runner");
    cs.playerAnimation("player-use");
  },

  //pickup camouflage
  PICKUP_13: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.getItem(13), false);
  },

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  DROP
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */

  //drop scotch
  DROP_24: (cs: z89.GameCity) => {
    cs.dropInventoryItem();
  },

  //drop bottle
  DROP_8: (cs: z89.GameCity) => {
    cs.dropInventoryItem();
  },

  //drop screwdriver
  DROP_10: (cs: z89.GameCity) => {
    cs.dropInventoryItem();
  },

  //drop scotch
  DROP_25: (cs: z89.GameCity) => {
    cs.dropInventoryItem();
  },

  //drop scotch
  DROP_30: (cs: z89.GameCity) => {
    cs.dropInventoryItem();
  },

  //drop scotch
  DROP_32: (cs: z89.GameCity) => {
    cs.dropInventoryItem();
  },

  //drop scotch
  DROP_13: (cs: z89.GameCity) => {
    cs.showPlayerBaloon(158);
  },

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  TALK TO
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */

  TALKTO_16: (cs: z89.GameCity) => {
    cs.setUpConversation(z89.conversationObj("TALKTO_16", cs.currentItem));
  },

  TALKTO_106: (cs: z89.GameCity) => {
    if (cs.currentChapter == 2) {
      //cake thief
    } else {
      cs.setUpConversation(z89.conversationObj("TALKTO_106", cs.currentItem));
    }
  },

  TALKTO_27: (cs: z89.GameCity) => {
    cs.setUpConversation(z89.conversationObj("TALKTO_27", cs.currentItem));
  },
  //sidney

  TALKTO_21: (cs: z89.GameCity) => {
    const item: any = cs.getItem(20);
    console.log(cs.getItem(21).getConversationStatus());
    switch (cs.getItem(21).getConversationStatus()) {
      case null:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_21_Null", cs.currentItem)
        );
        break;

      case 0:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_21_0", cs.currentItem)
        );
        break;
    }
  },

  //chris
  TALKTO_20: (cs: z89.GameCity) => {
    switch (cs.getItem(20).getConversationStatus()) {
      case null:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_20_Null", cs.currentItem)
        );

        break;

      case 0:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_20_0", cs.currentItem)
        );

        break;

      case 1:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_20_1", cs.currentItem)
        );
        break;

      case 2:
        cs.setUpConversation(z89.conversationObj("HELP_GAME", cs.currentItem));

        break;
    }
  },

  //talkto michele
  TALKTO_19: (cs: z89.GameCity) => {
    switch (cs.getItem(19).getConversationStatus()) {
      case null:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_19_null", cs.currentItem)
        );
        break;

      case 0:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_19_0", cs.currentItem)
        );
        break;

      case 1:
        cs.setUpConversation(
          z89.conversationObj("TALKTO_19_1", cs.currentItem)
        );
        break;
    }
  }
};
