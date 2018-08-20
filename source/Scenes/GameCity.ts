var _gamecity;
namespace z89 {
  export class GameCity extends Phaser.Scene {
    player: Player;
    playerMenu: PlayerMenu;
    playerActions: PlayerActions;
    playerBaloon: PlayerBaloon;
    conversationBaloon: conversationBaloon;
    currentItem: Items;
    Terminal: Terminal;

    public mainCamera: Phaser.Cameras.Scene2D.Camera;
    private controls: Phaser.Cameras.Controls.SmoothedKeyControl;
    private bgLevel1: Phaser.GameObjects.TileSprite;
    private bgLevel2: Phaser.GameObjects.TileSprite;
    private street: Phaser.GameObjects.TileSprite;
    private front: Phaser.GameObjects.TileSprite;
    private ground: Phaser.GameObjects.Sprite;

    private groupStreet: Phaser.GameObjects.Group;
    public groupAll: Phaser.GameObjects.Group;
    private groupBaloon: Phaser.GameObjects.Group;

    public groupCity: Phaser.GameObjects.Group;
    private groupFront: Phaser.GameObjects.Group;
    private groupMenu: Phaser.GameObjects.Group;
    private groupAction: Phaser.GameObjects.Group;
    private logicCombination: string;

    // private filters: Array<Phaser.Filter>;
    private gameInteracion: boolean = true;

    public saveGameObj: saveGame;
    public gameUtils: GameUtils;
    public gameItemsUtils: GameItemsUtils;

    public chapterTitle: Phaser.GameObjects.BitmapText;
    public currentChapter: number = 0;

    private half: Phaser.GameObjects.TileSprite;
    private actionTimer: Phaser.Time.TimerEvent;

    constructor(test) {
      super({
        key: "GameCity"
      });
    }

    preload() {
      console.log("GameCity:preload");
    }

    create() {
      document.getElementsByTagName("body")[0].className = "game";
      console.log("GameCity:create");
      this.cameras.main.setBounds(0, 0, 3670, 720);
      this.gameItemsUtils = new GameItemsUtils(this);
      this.gameUtils = new GameUtils(this);
      this.saveGameObj = new saveGame(this);
      //this.physics.world.setBounds(0, 0, 3670, 720);

      // +++++++++++++++++++++++++++++++++++++++
      // group city
      // +++++++++++++++++++++++++++++++++++++++
      this.groupCity = this.add.group();

      let bgLevel0: Phaser.GameObjects.Image = this.add
        .image(0, 0, "bg-level0")
        .setInteractive()
        .setScrollFactor(0)
        .setOrigin(0, 0);

      this.groupCity.add(bgLevel0);

      //palazzi sfondo bg lvl1
      this.bgLevel1 = this.add
        .tileSprite(0, 0, 1080, 642, "bg-level1")
        .setScrollFactor(0)
        .setOrigin(0, 0);
      this.groupCity.add(this.bgLevel1);

      //palazzi group bg lvl2
      this.bgLevel2 = this.add
        .tileSprite(0, 55, 1080, 548, "bg-level2")
        .setScrollFactor(0)
        .setOrigin(0, 0);

      this.groupCity.add(this.bgLevel2);

      let street: Phaser.GameObjects.Image = this.add
        .image(0, 592, "street-level0")
        .setScrollFactor(0)
        .setOrigin(0, 0);

      this.groupCity.add(street);

      let buildings: Array<any> = [
        { s: "bg-home", x: 0, y: 640 - 48 },
        { s: "bg-devday", x: 624, y: 640 - 48 },
        { s: "bg-skills", x: 1114, y: 640 - 48 },
        { s: "bg-cake", x: 1550, y: 640 - 36 },
        { s: "bg-arcade", x: 1800, y: 640 - 48 },
        { s: "bg-aerosol", x: 2400, y: 640 - 48 },
        { s: "bg-contact", x: 3000, y: 640 - 36 }
      ];
      let building: Phaser.GameObjects.Image;

      buildings.forEach(element => {
        building = this.add.image(element.x, element.y, element.s, 0);
        building.setOrigin(0, 1);
      });

      // +++++++++++++++++++++++++++++++++++++++
      // group street
      // +++++++++++++++++++++++++++++++++++++++
      this.groupStreet = this.add.group();
      this.street = this.add
        .tileSprite(0, 703 - 48, 1080, 65, "street-level1")
        .setScrollFactor(0)
        .setOrigin(0, 0);

      this.groupStreet.add(this.street);

      // +++++++++++++++++++++++++++++++++++++++
      // group All
      // +++++++++++++++++++++++++++++++++++++++
      this.groupAll = this.add.group();
      this.groupAll.runChildUpdate = true;

      this.player = new Player(this);

      this.groupAll.add(this.player);

      // +++++++++++++++++++++++++++++++++++++++
      // group Front
      // +++++++++++++++++++++++++++++++++++++++
      this.groupFront = this.add.group();

      this.front = this.add
        .tileSprite(0, 768 - 93 - 48, 1080, 720, "street-level2")
        .setScrollFactor(0)
        .setOrigin(0, 0)
        .setDepth(800);

      this.groupFront.add(this.front);

      // +++++++++++++++++++++++++++++++++++++++
      // group Baloon
      // +++++++++++++++++++++++++++++++++++++++
      this.groupBaloon = this.add.group();

      this.playerBaloon = new PlayerBaloon(this);
      this.playerBaloon.setDepth(900);
      this.groupBaloon.add(this.playerBaloon);

      this.conversationBaloon = new conversationBaloon(this, 0, 0);
      this.conversationBaloon.setDepth(900);
      this.groupBaloon.add(this.conversationBaloon);

      // +++++++++++++++++++++++++++++++++++++++
      // group Action
      // +++++++++++++++++++++++++++++++++++++++

      this.playerActions = new PlayerActions(this);
      this.playerActions.setDepth(950);

      // +++++++++++++++++++++++++++++++++++++++
      // group Menu
      // +++++++++++++++++++++++++++++++++++++++

      this.playerMenu = new PlayerMenu(this);
      this.playerMenu.setDepth(1000);

      // +++++++++++++++++++++++++++++++++++++++
      // group Terminal
      // +++++++++++++++++++++++++++++++++++++++

      this.Terminal = new Terminal(this);
      this.Terminal.setDepth(2000);

      // +++++++++++++++++++++++++++++++++++++++
      // saved game
      // +++++++++++++++++++++++++++++++++++++++

      if (this.saveGameObj.gameIsSaved()) {
        this.processSavedGame();
      } else {
        gameData.ingame.items.forEach(element => {
          if (element.onStart) {
            this.gameItemsUtils.addItem(element.id);
          }
        });
        this.saveGameObj.updatePlayerPosition(this.player.x, this.player.y);
        this.saveGameObj.updateItems();
        this.playerMenu.openOnStart();
      }

      /* var cursors = this.input.keyboard.createCursorKeys();

      var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
      };

      this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(
        controlConfig
      );*/

      this.mainCamera = this.cameras.main;
      this.mainCamera.startFollow(this.player, true, 0.15, 1);

      // +++++++++++++++++++++++++++++++++++++++
      // GROUND
      // +++++++++++++++++++++++++++++++++++++++

      bgLevel0.on(
        "pointerdown",
        (ground: Phaser.GameObjects.Sprite) => {
          if (!this.gameInteracion) return;

          //if (this.playerActions.IsOpen()) this.playerActions.hide();
          this.player.goTo(
            this.input.x + this.mainCamera.scrollX,
            this.input.y
          );
        },
        this
      );

      this.chapterTitle = this.add.bitmapText(100, 200, "commodore2", "", 48);
      this.chapterTitle
        .setScrollFactor(0)
        .setOrigin(0.5)
        .setAlpha(0)
        .setDepth(910);

      playSound(gameSound.intro);


   

   

      //get an item and add directly to the inventory
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      // this.addInventoryItem(this.gameItemsUtils.getItemById(24));
      // this.addInventoryItem(this.gameItemsUtils.getItemById(25));
      // this.addInventoryItem(this.gameItemsUtils.getItemById(30));
      // this.addInventoryItem(this.gameItemsUtils.getItemById(32));

      //beam out existing Items
      //+++++++++++++++++++++++++++++++++
      // this.gameItemsUtils.beamOut(27);

      //add an Item and beam In
      //+++++++++++++++++++++++++++++++++++
      //this.gameItemsUtils.addItem(27);
      //this.gameItemsUtils.beamIn(27);

      //shoot Items from high
      //++++++++++++++++++++++++++++++++++
      //this.shootFromHigh([27]);
      _gamecity = this;

      
    }

    stopSound(): void {
      stopSoundAll();
    }

    playSound(sound: gameSound): void {
      stopSoundAll();
      playSound(sound);
    }

    restartGame(): void {
      this.saveGameObj.destroy();
      document.location.reload();
      //console.log("restart game");
    }

    update(time, delta) {
      if (this.mainCamera.scrollX >= 0 && this.mainCamera.scrollX <= 2590) {
        this.bgLevel1.tilePositionX = this.mainCamera.scrollX * 0.2;
        this.bgLevel2.tilePositionX = this.mainCamera.scrollX * 0.7;
        this.street.tilePositionX = this.mainCamera.scrollX * 1.1;
        this.front.tilePositionX = this.mainCamera.scrollX * 1.25;
      }

      // console.log([ 'x: ' + this.mainCamera.scrollX, 'y: ' + this.mainCamera.scrollY ]);
    }

    leaveGame(): void {
      this.saveGameObj.setChoiceChapter(true);
      gameData.chapters.forEach(element => {
        if (!element.completed) element.complete(this);
      });
      this.enableInteraction();
    }

    processSavedGame(): void {
      let _saved = this.saveGameObj.getSaved();

      console.log(_saved);

      if (_saved.chapter.choice == null) {
        this.displayChapterOptions();
      }

      this.player.x = _saved.position.x;
      this.player.y = _saved.position.y;

      if (_saved.items != undefined) {
        this.gameItemsUtils.addSavedItems(_saved.items);
      }

      if (_saved.inventory != undefined && _saved.inventory.length > 0) {
        _saved.inventory.forEach(element => {
          let item: any;
          // console.log(element.type )
          switch (element.type) {
            case 2:
              // this.groupAll.add(new ItemsTruck(this.game, element));
              break;

            case 3:
              this.groupAll.add(new ItemsContent(this, element));
              break;

            case 4:
              this.groupAll.add(new ItemsSkill(this, element));
              break;

            default:
              this.groupAll.add(new Items(this, element));
              break;
          }

          //console.log(element,this.getItemSpriteId(element))

          this.addInventoryItem(this.gameItemsUtils.getItemById(element.id));
        });
      }
    }

    render() {
      //this.debug.cameraInfo(this.game.camera, 500, 232);
      //this.game.debug.spriteCoords(this.player, 32, 32);
      //this.game.debug.bodyInfo(this.player, 32, 32);
      //this.game.debug.body(this.player.myArea)
    }

    startConversation(): void {
      let _actionObj = this.getActionObject();

      // this.conversationBaloon.setUpConversation(_actionObj);
    }

    doActionSequence(_item?: Items): void {
      this.createActionObject(); //create the action object based on action/inventory/items selection
      this.createActionText(); //create the action text based on the above selection
      let _actionObj = this.getActionObject();

      if (this.actionTimer != null) this.actionTimer.remove(false);

      console.log(_actionObj);

      if (
        _actionObj.action != -1 &&
        (_actionObj.inventory.length > 0 || _actionObj.item != null) &&
        this.executeActionLogic(_item)
      ) {
        console.log("doActionSequence");
        //this.playerBaloon.hideBaloon();
        //this.playerActions.hide();
        //this.playerMenu.hide();

        /* this.time.delayedCall(
            3000,
            () => {
              this.playerActions.setText("");
            },
            null,
            this
          );
          */
      } else {
        console.log("doillogic");

        console.log(
          _actionObj.key,
          _actionObj.key.indexOf("_"),
          _actionObj.inventory.length,
          _actionObj.item
        );

        if (
          _actionObj.key != "noAction" &&
          _actionObj.key.indexOf("_") != -1 &&
          ((_actionObj.inventory.length > 0 && _actionObj.item != undefined) ||
            (_actionObj.inventory.length == 0 && _actionObj.item != undefined))
        )
          this.player.illogicAction();
      }

      this.actionTimer = this.time.delayedCall(
        3000,
        () => {
          this.resetActions();
          this.setActionObject(null);
          this.playerActions.setText("");
          this.playerBaloon.hideBaloon();
        },
        null,
        this
      );
    }

    createActionObject(_itemSelected?: Items): void {
      let returnObj: any = {
        key: null,
        action: null,
        inventory: null,
        item: null
      };

      let _currentAction: string = this.getCurrentActionString();
      let _currentActionValue: number = this.getCurrentAction();

      if (_currentAction == undefined) {
        _currentAction = "";
        returnObj.action = _currentActionValue = -1;
      } else {
        returnObj.action = _currentActionValue;
      }

      let _currentItem: Items;
      let _inventoryIds: Array<string> = [];
      let _Inventoryitems: string = "";

      returnObj.inventory = this.getInventorySelected();

      //console.log(returnObj.inventory);

      let _Item: Items;

      if (_itemSelected != undefined) {
        _Item = _itemSelected;
      } else {
        _Item = this.getCurrentItem();
      }
      let ItemId: string = "";
      returnObj.item = _Item;
      if (returnObj.item != null) ItemId = returnObj.item.id;

      returnObj.inventory.forEach((element: Items) => {
        if (element != undefined) _inventoryIds.push(element.itemObj.id);
      });

      if (_inventoryIds.length > 0) _Inventoryitems = _inventoryIds.join("_");

      if (ItemId != "" && _Inventoryitems != "")
        _Inventoryitems = _Inventoryitems + "_";

      let key: string = "";

      if (_currentAction != "" && _Inventoryitems != "" && ItemId != "") {
        returnObj.key = _currentAction + "_" + _Inventoryitems + ItemId;
      } else if (
        _currentAction != "" &&
        _Inventoryitems != "" &&
        ItemId == ""
      ) {
        returnObj.key = _currentAction + "_" + _Inventoryitems;
      } else if (
        _currentAction != "" &&
        _Inventoryitems == "" &&
        ItemId != ""
      ) {
        returnObj.key = _currentAction + "_" + ItemId;
      } else if (
        _currentAction != "" &&
        _Inventoryitems == "" &&
        ItemId == ""
      ) {
        returnObj.key = _currentAction;
      } else if (_currentAction == "") {
        returnObj.key = "noAction";
      }

      console.log(returnObj);
      this.logicCombination = returnObj;

      //return this.logicCombination;
    }

    createActionText(): void {
      //console.log("createActionText")
      let _actionObj = this.getActionObject();

      let _actionText: string = "";

      if (_actionObj == null) {
        if (this.getCurrentItem() != undefined)
          _actionText = this.getCurrentItem().name;
      } else {
        let _destText: string = "";

        if (_actionObj.action == PlayerActionList.GIVE) {
          _destText = " to ";
        } else if (_actionObj.action == PlayerActionList.USE) {
          _destText = " on ";
        }

        if (_actionObj.inventory.length == 0 && _actionObj.item == null) {
          //console.log("case 1")
          _actionText = this.getCurrentActionLabel();
        } else if (
          _actionObj.action != -1 &&
          _actionObj.inventory.length == 0 &&
          _actionObj.item != null
        ) {
          //console.log("case 2")
          _actionText =
            this.getCurrentActionLabel() + " " + _actionObj.item.name;
        } else if (_actionObj.inventory.length > 0 && _actionObj.item == null) {
          //console.log("case 3")
          //console.log(_actionObj.inventory.length)
          if (_actionObj.inventory.length == 1) {
            _actionText =
              this.getCurrentActionLabel() +
              " " +
              _actionObj.inventory[0].name +
              _destText;
          } else if (_actionObj.inventory.length == 2) {
            _actionText =
              this.getCurrentActionLabel() +
              " " +
              _actionObj.inventory[0].name +
              _destText +
              _actionObj.inventory[1].name;
          }
        } else if (_actionObj.inventory.length > 0 && _actionObj.item != null) {
          //console.log("case 4")

          if (_actionObj.inventory.length == 1) {
            _actionText =
              this.getCurrentActionLabel() +
              " " +
              _actionObj.inventory[0].name +
              _destText +
              _actionObj.item.name;
          }
        } else if (_actionObj.key == "noAction" && _actionObj.item != null) {
          //console.log("case 5", _actionObj.item.name);

          _actionText = _actionObj.item.name;
        }
      }

      //console.log(_actionText);
      this.setActionText(_actionText);
    }

    checkCombinedItems(): boolean {
      let _actionObj: any = this.getActionObject();
      if (_actionObj.inventory.length == 2) {
        let _key =
          this.getCurrentActionLabel() +
          "_" +
          _actionObj.inventory[0].id +
          "_" +
          _actionObj.inventory[1].id;
        // console.log(_key)
        if (gameData.ingame.logic[_key] != undefined) return true;
        _key =
          this.getCurrentActionLabel() +
          "_" +
          _actionObj.inventory[1].id +
          "_" +
          _actionObj.inventory[0].id;
        if (gameData.ingame.logic[_key] != undefined) return true;
        // console.log(_key)
      }
      return false;
    }

    checkCombinedItemsKey(): string {
      let _actionObj: any = this.getActionObject();
      if (_actionObj.inventory.length == 2) {
        let _key =
          this.getCurrentActionLabel() +
          "_" +
          _actionObj.inventory[0].id +
          "_" +
          _actionObj.inventory[1].id;
        // console.log(_key)
        if (gameData.ingame.logic[_key] != undefined) return _key;
        _key =
          this.getCurrentActionLabel() +
          "_" +
          _actionObj.inventory[1].id +
          "_" +
          _actionObj.inventory[0].id;
        if (gameData.ingame.logic[_key] != undefined) return _key;
        // console.log(_key)
      }
      return "";
    }

    executeActionLogic(_item?: any): boolean {
      let _actionObj: any = this.getActionObject();
      //console.log(_actionObj);
      //console.log(this.checkCombinedItems())
      if (_actionObj.inventory.length > 0 && _actionObj.item == null) {
        // console.log("logic 0");

        //console.log(_actionObj.inventory.length, this.getCurrentActionString(), _actionObj.key)
        if (
          _actionObj.inventory.length == 1 &&
          gameData.ingame.logic[_actionObj.key] != undefined
        ) {
          //console.log("logic 1");

          gameData.ingame.logic[_actionObj.key](this);
          return true;
        } else if (
          _actionObj.inventory.length == 2 &&
          this.checkCombinedItems()
        ) {
          //console.log("logic item on item", _actionObj.key);

          gameData.ingame.logic[this.checkCombinedItemsKey()](this);
          return true;
        }
      } else if (
        _actionObj.inventory.length == 0 &&
        _actionObj.item != null &&
        gameData.ingame.logic[_actionObj.key] != undefined
      ) {
        //console.log("logic 2", _actionObj.key);

        //if (_actionObj.item.itemObj.logic != undefined && _actionObj.item.itemObj.logic[this.getCurrentActionString()] != undefined) { _actionObj.item.itemObj.logic[this.getCurrentActionString()](this); return true; }

        gameData.ingame.logic[_actionObj.key](this);
        return true;
      } else if (
        _actionObj.inventory.length > 0 &&
        _actionObj.item != null &&
        gameData.ingame.logic[_actionObj.key] != undefined
      ) {
        //console.log("logic 3", _actionObj.key);

        gameData.ingame.logic[_actionObj.key](this);
        return true;
      }

      return false;
    }

    resetActions(): void {
      //console.log("resetActions ")
      this.playerActions.resetActions();
      this.currentItem = null;
    }

    returnMessage(): void {
      let _currActionObj: any = this.getActionObject();
      let _item: Items;
      if (_currActionObj.item == null) {
        _item = _currActionObj.inventory[0];
      } else {
        _item = _currActionObj.item;
      }

      let _mess: string =
        _item.itemObj.actions[_currActionObj.action].answer[
          Phaser.Math.RND.integerInRange(
            0,
            _item.itemObj.actions[_currActionObj.action].answer.length - 1
          )
        ];

      this.player.showBaloon(_mess);
    }

    /* returnMessageExtra(): void {
      let _currActionObj: any = this.getActionObject();
      let _item: Items;
      if (_currActionObj.item == null) {
        _item = _currActionObj.inventory[0];
      } else {
        _item = _currActionObj.item;
      }

      let _obj: any = _item.itemObj.actions[_currActionObj.action];
      this.player.showBaloonExtra(_obj);
    }
*/
    setCurrentItem(_item: Items): void {
      this.currentItem = _item;
    }

    getCurrentItem(): any {
      return this.currentItem;
    }

    getInventory(): Array<Items> {
      return this.playerActions.getInventory();
    }

    getInventorySelected(): Array<Items> {
      return this.playerActions.getInventorySelected();
    }

    setActionText(_text: string) {
      // console.log("setActionText: " + _text);
      this.playerActions.setText(_text);
    }

    getActionObject(): any {
      return this.logicCombination;
    }

    setActionObject(value: any): void {
      this.logicCombination = value;
    }

    getCurrentAction(): number {
      return this.playerActions.getCurrentAction();
    }

    getCurrentActionString(): string {
      return this.playerActions.getCurrentActionString();
    }

    getCurrentActionLabel(): string {
      return this.playerActions.getCurrentActionLabel();
    }

    getSprites(): Phaser.GameObjects.Group {
      return this.groupAll;
    }

    disableInteraction(): void {
      this.gameInteracion = false;
    }

    enableInteraction(): void {
      this.gameInteracion = true;
    }

    isInteractionDisabled(): boolean {
      return !this.gameInteracion;
    }

    addInventory(itemIndex: number, noAnimation?: boolean) {
      this.gameItemsUtils.addItem(itemIndex);
      this.addInventoryItem(
        this.gameItemsUtils.getItemById(itemIndex),
        noAnimation
      );
    }

    addInventoryItem(item?: Items, noAnimation?: boolean): void {
      if (item != undefined) {
        //console.log(item);

        this.playerActions.addItem(item);
        this.groupAll.remove(item, true);
        if (noAnimation != undefined && !noAnimation)
          this.player.play("player-pickdrop");
      } else {
        let _currActionObj: any = this.getActionObject();

        if (_currActionObj != undefined) {
          let _item: Items;
          if (_currActionObj.item == null) {
            _item = _currActionObj.inventory[0];
          } else {
            _item = _currActionObj.item;
          }

          if (this.playerActions.isInInventory(_item)) {
            this.player.showBaloon(z89.getLabel(28));
            this.playerActions.resetActions();
          } else {
            this.player.play("player-pickdrop");
            this.playerActions.addItem(_item);
            this.groupAll.remove(_item);
            this.setCurrentItem(null);
          }
        }
      }

      this.saveGameObj.updateItems();
    }

    updateItemObject(itemId: number, key: string, value: any): void {
      this.gameItemsUtils.getItemById(itemId).updateItemObj(key, value);
    }

    removeInventoryItems(): void {
      this.playerActions.removeItems(this.getActionObject().inventory);
    }

    dropInventoryItem(): void {
      let _currActionObj: any = this.getActionObject();
      let _item: Items;

      if (_currActionObj.item == null) {
        _item = _currActionObj.inventory[0];
      } else {
        _item = _currActionObj.item;
      }

      if (!this.playerActions.isInInventory(_item)) {
        return;
      }

      // console.log(_item);

      if (this.player.y >= 660) {
        _item.itemObj.fixedToCamera = true;

        let _x = this.player.x * 1.08;

        _item.itemObj.x = _x;
        _item.itemObj.y = this.player.y;
      } else {
        _item.itemObj.fixedToCamera = false;
        _item.itemObj.x = this.player.x;
        _item.itemObj.y = this.player.y + 10;
      }

      let _newItem = new Items(this, _item.itemObj);

      this.groupAll.add(_newItem);

      this.playerActions.removeItem(_item);
      _item.destroy();
      this.player.play("player-pickdrop");

      this.saveGameObj.updateItems();
    }

    chapterCompleted(): void {
      console.log("chapter completed");
      this.currentChapter++;

      //this.currentChapter=this.saveGameObj.getSaved().chapter.current;

      gameData.chapters[this.currentChapter].completed = true;

      this.saveGameObj.setChoiceChapter(null);
      this.saveGameObj.setCurrentChapter(this.currentChapter);

      this.displayChapterOptions();
    }

    displayChapterOptions(): void {
      this.conversationBaloon.setUpConversation({
        key: "CHAPTER_COMPLETED",
        action: null,
        inventory: null,
        item: null
      });
      this.disableInteraction();
    }

    nextChapter(): void {
      this.saveGameObj.setChoiceChapter(true);
      console.log(this.saveGameObj.getSaved());

      this.currentChapter = this.saveGameObj.getSaved().chapter.current;

      this.displayChapterTitle(this.currentChapter);
      this.playerMenu.hide();
      this.playerActions.hide();
      this.playerBaloon.hideBaloon();
      this.conversationBaloon.hideBaloon();
      this.enableInteraction();
    }

    displayChapterTitle(chapterIndex: number): void {
      if (chapterIndex != undefined) this.currentChapter = chapterIndex;

      this.chapterTitle.text = gameData.chapters[this.currentChapter].title;
      this.tweens.add({
        targets: this.chapterTitle,
        duration: 1000,
        alpha: 1,
        yoyo: true,
        loop: 0,
        hold: 2000
      });
    }

    removeItem(itemIndex: number): void {
      this.groupAll.remove(this.gameItemsUtils.getItemById(itemIndex), true);
    }

    getContentsBycontexts(contexts: Array<string>): Array<any> {
      let _arr: Array<any> = getZero89Data();
      // console.log(contexts,_arr)
      if (_arr == undefined) return [{}];
      let _con: Array<any>;
      let _result: Array<any> = [];
      let ele: boolean = false;

      _arr.forEach(element => {
        _con = element.contexts;

        if (_con != undefined) {
          _con.forEach(_context => {
            ele = false;
            _context.c.forEach(tag => {
              contexts.forEach(ctag => {
                if (ctag == tag.t && ele == false) {
                  ele = true;
                  _result.push(element);
                }
              });
            });
          });
        }
      });

      return _result;
    }

    explosion(x: number, y: number, config: any): void {
      let _explosion: Phaser.GameObjects.Sprite = this.add.sprite(
        x,
        y,
        config.name
      );
      _explosion
        .setOrigin(0.5, 1)
        .setScale(2)
        .setDepth(1000);
      _explosion.anims.animationManager.create({
        key: "explode",
        frames: this.anims.generateFrameNumbers(config.name, {
          frames: config.animation.frames
        }),
        frameRate: config.animation.rate,
        repeat: 0
      });

      _explosion.play("explode");

      _explosion.on("animationcomplete", () => {
        _explosion.destroy();
      });
    }

    shootFromHigh(targets: Array<number>, shot?: any, callback?: any): void {
      shot = {
        delay: 1000,
        missile: {
          name: "meteor",
          animation: {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            rate: 5,
            loop: true
          }
        },
        explosion: {
          name: "explosion",
          animation: {
            frames: [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28
            ],
            rate: 25,
            loop: false
          }
        }
      };

      let _shot: Phaser.GameObjects.Sprite;

      targets.forEach((element, index) => {
        this.groupAll.children.each((sprite: any) => {
          if (sprite.id == element) {
            //console.log(sprite);

            _shot = this.add.sprite(sprite.x, -100, shot.missile.name);
            _shot.setOrigin(0.5, 1).setDepth(1000);

            _shot.anims.animationManager.create({
              key: "run",
              frames: this.anims.generateFrameNumbers("meteor", {
                frames: shot.missile.animation.frames
              }),
              frameRate: shot.missile.animation.rate,
              repeat: -1
            });

            _shot.play("run");

            this.tweens.add({
              targets: _shot,
              y: sprite.y,
              duration: 1000,
              delay: shot.delay * index,
              ease: "Quad.easeIn",

              onComplete: () => {
                this.mainCamera.flash(500, 255, 255, 255);
                this.mainCamera.shake(700, 0.01);
                this.explosion(sprite.x, sprite.y, shot.explosion);
                this.groupAll.remove(
                  this.gameItemsUtils.getItemById(sprite.id),
                  true
                );
                _shot.destroy();

                this.saveGameObj.updateItems();
              }
            });
          }
        }, this);
      });
    }
  }
}
