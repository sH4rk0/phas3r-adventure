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
    if (cs.gameItemsUtils.getItemById(2).itemObj.working) {
      cs.player.showBaloon(z89.getLabel(82));
    } else {
      cs.player.showBaloon(z89.getLabel(81));
    }
  },
  //examine gerardo
  EXAMINE_16: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(43));
  },
  // examine coins
  EXAMINE_3: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(26));
  },

  // examine coins
  EXAMINE_25: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(27));
  },

  // examine drink machine
  EXAMINE_1: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(6));
  },

  // devday palace
  EXAMINE_21: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(38));
  },

  // devday screen
  EXAMINE_22: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(75));
  },

  //examine garbage
  EXAMINE_4: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(62));
  },

  //examine scotch tape
  EXAMINE_24: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(58));
  },

  //examine energy box
  EXAMINE_23: (cs: z89.GameCity) => {
    if (cs.gameItemsUtils.getItemById(23).itemObj.fixed) {
      cs.player.showBaloon(z89.getLabel(60));
    } else {
      cs.player.showBaloon(z89.getLabel(59));
    }
  },

  //examine daniele
  EXAMINE_17: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(63));
  },

  //examine davide
  EXAMINE_18: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(64));
  },

  //examine michele
  EXAMINE_19: (cs: z89.GameCity) => {
    cs.player.showBaloon(z89.getLabel(32));
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
    if (cs.gameItemsUtils.getItemById(2).itemObj.working) {
      cs.Terminal.show(0);
      cs.playerActions.hide();
    } else {
      cs.player.showBaloon(z89.getLabel(83));
    }
  },

  // use coins on drink machine
  USE_25_1: (cs: z89.GameCity) => {
    console.log("coins on drink");
    cs.player.play("player-use");
    cs.removeInventoryItems();
    cs.gameUtils.addDelay(1000, () => {

      cs.gameItemsUtils.addItem(3);
      cs.gameItemsUtils.getItemById(3).itemObj.onStart=true;
      cs.saveGameObj.updateItems();
    
    
    });


  },

   // use coins on drink machine
  /* USE_25: (cs: z89.GameCity) => {
    console.log("use coin test");
 
 
  },*/

  //use devday
  USE_21: (cs: z89.GameCity) => {
    let convObj: any = {
      key: "TALKTO_devday",
      action: null,
      inventory: null,
      item: null
    };

    cs.conversationBaloon.setUpConversation(convObj);
  },

  //use jukoxeb
  USE_11: (cs: z89.GameCity) => {
    let convObj: any = {
      key: "USE_jukebox",
      action: null,
      inventory: null,
      item: null
    };

    cs.conversationBaloon.setUpConversation(convObj);
  },

  //use scotch on broken cable
  USE_24_23: (cs: z89.GameCity) => {
    cs.player.play("player-use");
    cs.removeInventoryItems();
    cs.gameUtils.addDelay(1000, () => {
      cs.updateItemObject(23, "name", z89.getLabel(57));

      cs.gameItemsUtils.getItemById(23).playAnim("23-fixed");
      cs.gameItemsUtils.getItemById(23).itemObj.fixed = true;
      cs.gameItemsUtils.getItemById(22).start();

      cs.updateItemObject(22, "isStarted", true);
      cs.updateItemObject(19, "conversationStatus", 1);

      cs.updateItemObject(2, "working", true);
      cs.gameItemsUtils.getItemById(2).playAnim("2-working");

      cs.saveGameObj.updateItems();

      cs.chapterCompleted();
    });
  },
  USE_30_32: (cs: z89.GameCity) => {
    console.log("bitcoin on blockchain");
    cs.playerBaloon.showBaloon("I GOT DEVDAY PASS!");
    cs.removeInventoryItems();
    cs.addInventory(31, true);
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
    let item: any = cs.gameItemsUtils.getItemById(4);
    if (!item.itemObj.moved) {
      cs.player.play("player-use");
      item.itemObj.moved = true;
      if (cs.player.x < 450) {
        cs.tweens.add({
          targets: item,
          x: 500,
          duration: 500,
          ease: "Quad.easeOut",
          delay: 400
        });

        item.updateItemObj("x", 500);
      } else {
        cs.tweens.add({
          targets: item,
          x: 400,
          duration: 500,
          ease: "Quad.easeOut",
          delay: 400
        });
        item.updateItemObj("x", 400);
      }
    } else {
      cs.player.showBaloon(z89.getLabel(93));
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
    cs.addInventoryItem(cs.gameItemsUtils.getItemById(24), false);
  },

   //pickup coke
   PICKUP_3: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.gameItemsUtils.getItemById(3), false);
  },

  //pickup coins
  PICKUP_25: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.gameItemsUtils.getItemById(25), false);
  },

  //pickup bitcoin
  PICKUP_30: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.gameItemsUtils.getItemById(30), false);
  },

  //pickup blockchain
  PICKUP_32: (cs: z89.GameCity) => {
    cs.addInventoryItem(cs.gameItemsUtils.getItemById(32), false);
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

  /*
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  TALK TO
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   */

  TALKTO_16: (cs: z89.GameCity) => {
    cs.conversationBaloon.setUpConversation({
      key: "TALKTO_16",
      action: null,
      inventory: null,
      item: cs.currentItem
    });
  },
  TALKTO_27: (cs: z89.GameCity) => {
    cs.conversationBaloon.setUpConversation({
      key: "TALKTO_27",
      action: null,
      inventory: null,
      item: cs.currentItem
    });
  },

  //talkto michele
  TALKTO_19: (cs: z89.GameCity) => {
    let item: any = cs.gameItemsUtils.getItemById(19);
    let convObj: any = {
      key: "",
      action: null,
      inventory: null,
      item: cs.currentItem
    };

    //console.log(item.itemObj.conversationStatus)
    switch (item.itemObj.conversationStatus) {
      case null:
        convObj.key = "TALKTO_19_null";
        break;

      case 0:
        convObj.key = "TALKTO_19_0";
        break;

      case 1:
        convObj.key = "TALKTO_19_1";
        break;
    }

    cs.conversationBaloon.setUpConversation(convObj);
  },

  
};

/*

gameData.ingame.logic =

    {

        // devday palace
        EXAMINE_21: (cs: z89.GameCity) => {

            cs.player.showBaloon(z89.getLabel(38));
        },
        USE_21: (cs: z89.GameCity) => {

            cs.conversationBaloon.setUpConversation({
                key: "TALKTO_devday",
                action: null,
                inventory: null,
                item: null
            });

            cs.player.showBaloon(z89.getLabel(38));
        },

        // scotch tape
        EXAMINE_24: (cs: z89.GameCity) => {

            cs.player.showBaloon(z89.getLabel(58));
        },

        //broken energy box
        EXAMINE_23: (cs: z89.GameCity) => {

            if (cs.gameItemsUtils.getItemById(23).itemObj.fixed) {

                cs.player.showBaloon(z89.getLabel(60));
            } else {
                cs.player.showBaloon(z89.getLabel(59));

            }


        },

        PICKUP_24: (cs: z89.GameCity) => { cs.addInventoryItem(cs.gameItemsUtils.getItemById(24)); },
        DROP_24: (cs: z89.GameCity) => { cs.dropInventoryItem(); },

        USE_24_23: (cs: z89.GameCity) => {

            cs.player.play("use");
            cs.removeInventoryItems();
            cs.gameUtils.addDelay(1000, () => {
                cs.gameItemsUtils.getItemById(23).updateItemObj("name", z89.getLabel(57));
                cs.gameItemsUtils.getItemById(23).playAnim("fixed");
                cs.gameItemsUtils.getItemById(23).itemObj.fixed = true;
                cs.gameItemsUtils.getItemById(22).start();
                cs.saveGameObj.updateItems();

            });

        },

        //use money on drink machine
        USE_8_1: (cs: z89.GameCity) => {
            cs.player.play("use");
            cs.removeInventoryItems();
            cs.gameUtils.addDelay(2000, () => { cs.gameItemsUtils.addItem(7); });

        },

        //use coin o coin
        USE_8_15: (cs: z89.GameCity) => {
            console.log("coin on coins");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(7);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(7));

        },

        //use block on chain
        USE_8_28: (cs: z89.GameCity) => {
            console.log("block on chain");
            cs.playerBaloon.showBaloon("I GOT BLOCKCHAIN!");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(30);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(30));

        },
        //use bit o coin
        USE_29_15: (cs: z89.GameCity) => {
            console.log("bit on coin");
            cs.playerBaloon.showBaloon("I GOT A BITCOIN!");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(32);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(32));

        },
        USE_30_32: (cs: z89.GameCity) => {
            console.log("bitcoin on blockchain");
            cs.playerBaloon.showBaloon("I GOT DEVDAY PASS!");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(31);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(31));

        },

        GIVE_31_13: (cs: z89.GameCity) => {
            console.log("pass to daniele");
            cs.player.play("use");
            cs.removeInventoryItems();

            let convObj: any = {
                key: "TALKTO_custom",
                action: null,
                inventory: null,
                item: cs.currentItem
            }
            cs.gameUtils.addDelay(1000, () => {

                cs.conversationBaloon.setUpConversation(convObj);

            });


        }

    }

*/
