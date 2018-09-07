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

    private gameCompleted: boolean = false;

    public mainCamera: Phaser.Cameras.Scene2D.Camera;
    private controls: Phaser.Cameras.Controls.SmoothedKeyControl;
    private bgLevel1: Phaser.GameObjects.TileSprite;
    private bgLevel2: Phaser.GameObjects.TileSprite;
    private street: Phaser.GameObjects.TileSprite;
    private front: Phaser.GameObjects.TileSprite;

    private groupStreet: Phaser.GameObjects.Group;
    public groupAll: Phaser.GameObjects.Group;
    private groupBaloon: Phaser.GameObjects.Group;

    public groupCity: Phaser.GameObjects.Group;
    private groupFront: Phaser.GameObjects.Group;

    // private filters: Array<Phaser.Filter>;
    private gameInteraction: boolean = true;

    public saveGameObj: saveGame;
    public gameUtils: GameUtils;
    public gameItemsUtils: GameItemsUtils;

    public chapterTitle: Phaser.GameObjects.BitmapText;
    public chapterTitleBg: Phaser.GameObjects.Image;
    public currentChapter: number = 0;

    constructor() {
      super({ key: "GameCity" });
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

      /*
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
      */

      if (this.saveGameObj.gameIsSaved()) {
        this.processSavedGameMulti();
      } else {
        this.setUpScene("city");
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
          if (!this.gameInteraction) return;

          //if (this.playerActions.IsOpen()) this.playerActions.hide();
          this.player.goTo(
            this.input.x + this.mainCamera.scrollX,
            this.input.y
          );
        },
        this
      );

      this.chapterTitleBg = this.add.image(0, 100, "chapterTitleBg");
      this.chapterTitleBg
        .setScrollFactor(0)
        .setOrigin(0)
        .setAlpha(0)
        .setDepth(909)
        .setVisible(false);

      this.chapterTitle = this.add.bitmapText(100, 200, "commodore2", "", 48);
      this.chapterTitle
        .setScrollFactor(0)
        .setOrigin(0)
        .setAlpha(0)
        .setDepth(910)
        .setVisible(false);

      playSound(gameSound.intro);

      //add an Items on scene && a copy of the same item with randomized id
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //this.gameItemsUtils.addItem(100);
      /* this.gameItemsUtils.addItem(100,true);
      this.gameItemsUtils.addItem(100,true);
      this.gameItemsUtils.addItem(100,true);
      this.gameItemsUtils.addItem(100,true);
      this.gameItemsUtils.addItem(100,true);
      this.gameItemsUtils.addItem(100,true);
      this.gameItemsUtils.addItem(100,true);
      this.gameItemsUtils.addItem(100,true);
      */

      //add an existing item from group list to the inventory
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      // this.addInventoryItem(this.gameItemsUtils.getItemById(24));

      //get an item from list and add to the inventory
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //this.addInventory(13, true);
      //this.addInventory(35, true);

      //beam out existing Items
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      // this.gameItemsUtils.beamOut(27);

      //add an Item and beam In
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //this.gameItemsUtils.addItem(27);
      //this.gameItemsUtils.beamIn(27);

      //shoot Items from high
      //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
      //this.shootFromHigh([27]);

      //accessible global instance for backend ajax call
      _gamecity = this;
    }

    setUpScene(name: string) {
      console.log("setup scene");
      gameData.ingame.scenes.forEach(element => {
        if (element.name === name) {
          this.saveGameObj.setScene(name);
          element.startItems.forEach(itemId => {
            this.gameItemsUtils.addItem(itemId);
          });
        }
      });

      this.saveGameObj.updateItems();
    }

    processSavedGameMulti(): void {
      let _saved = this.saveGameObj.getSaved();

      console.log(_saved);

      this.currentChapter = _saved.chapter.current;
      if (_saved.chapter.choice == null) {
        this.displayChapterOptions();
      }

      _saved.scenes.forEach(element => {
        if (element.name == _saved.currentScene) {
          console.log(element);
          _saved.items = element.items;
          this.player.x = element.playerPosition.x;
          this.player.y = element.playerPosition.y;
        }
      });

      if (_saved.items != undefined) {
        this.gameItemsUtils.addSavedItems(_saved.items);
      }

      if (_saved.inventory != undefined && _saved.inventory.length > 0) {
        _saved.inventory.forEach(element => {
          //console.log("add from cache" + element);
          if (!this.playerActions.isInInventory(element.id)) {
            let item: any;
            // console.log(element.type )
            switch (element.type) {
              default:
                this.groupAll.add(new Items(this, element));
                break;
            }

            //console.log(element,this.getItemSpriteId(element))

            this.addInventoryItem(this.gameItemsUtils.getItemById(element.id));
          }
        });
      }
    }

    setLanguage(language: string): void {
      currentLang = language;
      this.gameItemsUtils.setLanguage();
      this.playerActions.setLanguage();
    }

    setGameCompleted(): void {
      this.gameCompleted = true;
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

      //console.log(_saved);
      this.currentChapter = _saved.chapter.current;
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
          //console.log("add from cache" + element);
          if (!this.playerActions.isInInventory(element.id)) {
            let item: any;
            // console.log(element.type )
            switch (element.type) {
              default:
                this.groupAll.add(new Items(this, element));
                break;
            }

            //console.log(element,this.getItemSpriteId(element))

            this.addInventoryItem(this.gameItemsUtils.getItemById(element.id));
          }
        });
      }
    }

    getItem(id: number) {
      return this.gameItemsUtils.getItemById(id);
    }

    render() {
      //this.debug.cameraInfo(this.game.camera, 500, 232);
      //this.game.debug.spriteCoords(this.player, 32, 32);
      //this.game.debug.bodyInfo(this.player, 32, 32);
      //this.game.debug.body(this.player.myArea)
    }

    startConversation(): void {
      let _actionObj = this.playerActions.getActionObject();

      // this.conversationBaloon.setUpConversation(_actionObj);
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
      this.gameInteraction = false;
    }

    enableInteraction(): void {
      this.gameInteraction = true;
    }

    isInteractionDisabled(): boolean {
      return !this.gameInteraction;
    }

    addInventory(itemIndex: number, noAnimation?: boolean) {
      this.playerActions.addInventory(itemIndex, noAnimation);
    }

    addInventoryItem(item?: Items, noAnimation?: boolean): void {
      this.playerActions.addInventoryItem(item, noAnimation);
    }

    updateItemObject(itemId: number, key: string, value: any): void {
      this.gameItemsUtils.getItemById(itemId).updateItemObj(key, value);
    }

    updateItemsObjects(
      items: Array<number>,
      keys: Array<string>,
      values: Array<any>
    ): void {
      items.forEach((element, index) => {
        this.updateItemObject(element, keys[index], values[index]);
      });
    }

    removeInventoryItems(): void {
      this.playerActions.removeItems(
        this.playerActions.getActionObject().inventory
      );
    }

    dropInventoryItem(): void {
      let _currActionObj: any = this.playerActions.getActionObject();
      let _item: Items;

      if (_currActionObj.item == null) {
        _item = _currActionObj.inventory[0];
      } else {
        _item = _currActionObj.item;
      }

      if (!this.playerActions.isInInventory(_item.id)) {
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

    isChapterCompleted(chapterIndex: number): boolean {
      return this.saveGameObj.getSaved().chapter.chapters[chapterIndex];
    }

    chapterCompleted(): void {
      //console.log("chapter completed");

      this.saveGameObj.setChapterCompleted(this.currentChapter);
      this.currentChapter++;

      //this.currentChapter=this.saveGameObj.getSaved().chapter.current;

      gameData.chapters[this.currentChapter].completed = true;

      this.saveGameObj.setChoiceChapter(null);
      this.saveGameObj.setCurrentChapter(this.currentChapter);

      this.displayChapterOptions();
    }

    displayChapterOptions(): void {
      //console.log("displayChapterOptions");
      this.conversationBaloon.setUpConversation({
        key: "CHAPTER_COMPLETED",
        action: null,
        inventory: null,
        item: null
      });

      this.playerMenu.hide();
      this.playerActions.hide();
      this.playerBaloon.hideBaloon();
      this.disableInteraction();
    }

    nextChapter(): void {
      this.saveGameObj.setChoiceChapter(true);
      this.saveGameObj.clearTips();
      //console.log(this.saveGameObj.getSaved());

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
      this.chapterTitle.setVisible(true);
      this.chapterTitleBg.setVisible(true);
      this.chapterTitle.text = gameData.chapters[this.currentChapter].title;
      Phaser.Display.Align.In.Center(this.chapterTitle, this.chapterTitleBg);
      this.tweens.add({
        targets: [this.chapterTitle, this.chapterTitleBg],
        duration: 1000,
        alpha: 1,
        yoyo: true,
        loop: 0,
        hold: 2000,
        onComplete: () => {
          this.chapterTitle.setVisible(false);
          this.chapterTitleBg.setVisible(false);
        }
      });
    }

    removeItem(itemIndex: number): void {
      this.groupAll.remove(
        this.gameItemsUtils.getItemById(itemIndex),
        true,
        true
      );
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

    showPlayerBaloon(textId: number, callback?: any): void {
      this.player.showBaloon(z89.getLabel(textId), callback);
    }

    addItem(id: number, randomId?: boolean): void {
      this.gameItemsUtils.addItem(id, randomId);
    }

    addDelay(delay: number, callback: any): void {
      this.gameUtils.addDelay(delay, callback);
    }

    addTween(tweenObj: any): void {
      this.tweens.add(tweenObj);
    }

    playerAnimation(animation: string): void {
      this.player.playAnimation(animation);
    }

    setUpConversation(_actionObj: any): void {
      this.conversationBaloon.setUpConversation(_actionObj);
    }

    updateItems(): void {
      this.saveGameObj.updateItems();
    }
  }
}
