gameData.chapters = [
  {
    title: "CHAPTER ONE:\nTHE DEVDAY TROUBLE!",
    completed: false,
    choice: null,
    complete: (cs: z89.GameCity) => {
      cs.removeItem(24);
      cs.gameItemsUtils.getItemById(23).playAnim("23-fixed");
      cs.gameItemsUtils.getItemById(22).start();
      cs.gameItemsUtils.getItemById(2).playAnim("2-working");
      cs.updateItemsObjects(
        [23, 23, 22, 19, 2],
        ["name", "fixed", "isStarted", "conversationStatus", "working"],
        [z89.getLabel(57), true, true, 1, true]
      );
      cs.saveGameObj.updateItems();
    }
  },
  {
    title: "CHAPTER TWO:\nHOUSE OF SKILLS!",
    completed: false,
    choice: null,
    complete: (cs: z89.GameCity) => {
      cs.gameItemsUtils.getItemById(50).start();
      cs.updateItemObject(22, "isStarted", true);
      cs.saveGameObj.updateItems();
    }
  },

  {
    title: "CHAPTER THREE:\nPIECE OF CAKE!",
    completed: false,
    choice: null,
    complete: (cs: z89.GameCity) => {}
  }
];
