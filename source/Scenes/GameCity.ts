var _gamecity;
namespace z89 {
  export class GameCity extends Phaser.Scene {
    player: Player;
    playerMenu: PlayerMenu;
    playerActions: PlayerActions;
    playerBaloon: PlayerBaloon;
    transition: Transition;
    viewer: Viewer;
    conversationBaloon: conversationBaloon;
    currentItem: Items;
    Terminal: Terminal;
    graphics: Phaser.GameObjects.Graphics;
    private started: boolean = false;

    private gameCompleted: boolean = false;

    public mainCamera: Phaser.Cameras.Scene2D.Camera;
    private controls: Phaser.Cameras.Controls.SmoothedKeyControl;

    /*private bgLevel1: Phaser.GameObjects.TileSprite;
    private bgLevel2: Phaser.GameObjects.TileSprite;
    private street: Phaser.GameObjects.TileSprite;
    private front: Phaser.GameObjects.TileSprite;
*/

    public sceneBounds: Array<Phaser.Geom.Line>;
    public currentScene: any;

    public groupAll: Phaser.GameObjects.Group;
    public groupCity: Phaser.GameObjects.Group;

    // private filters: Array<Phaser.Filter>;
    private gameInteraction: boolean = true;

    public saveGameObj: saveGame;
    public gameUtils: GameUtils;
    public gameItemsUtils: GameItemsUtils;

    public chapterTitle: Phaser.GameObjects.BitmapText;
    public chapterTitleBg: Phaser.GameObjects.Image;
    public currentChapter: number = 0;

    parallax: Array<Phaser.GameObjects.TileSprite> = [];

    constructor() {
      super({ key: "GameCity" });
    }

    preload() {
      console.log("GameCity:preload");
    }

    create() {
      document.getElementsByTagName("body")[0].className = "game";
      console.log("GameCity:create");

      this.gameItemsUtils = new GameItemsUtils(this);
      this.gameUtils = new GameUtils(this);
      this.saveGameObj = new saveGame(this);

      let backgroundPointer: Phaser.GameObjects.Image = this.add
        .image(0, 0, "bg-level0")
        .setInteractive()
        .setScrollFactor(0)
        .setOrigin(0, 0);

      // +++++++++++++++++++++++++++++++++++++++
      // group city
      // +++++++++++++++++++++++++++++++++++++++
      this.groupCity = this.add.group();

      // +++++++++++++++++++++++++++++++++++++++
      // group All
      // +++++++++++++++++++++++++++++++++++++++
      this.groupAll = this.add.group();
      this.groupAll.runChildUpdate = true;

      // +++++++++++++++++++++++++++++++++++++++
      // group Baloon
      // +++++++++++++++++++++++++++++++++++++++
      // this.groupBaloon = this.add.group();

      this.playerBaloon = new PlayerBaloon(this);
      this.playerBaloon.setDepth(900);
      //this.groupBaloon.add(this.playerBaloon);

      this.conversationBaloon = new conversationBaloon(this, 0, 0);
      this.conversationBaloon.setDepth(900);
      //this.groupBaloon.add(this.conversationBaloon);

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
      // group transition
      // +++++++++++++++++++++++++++++++++++++++

      this.transition = new Transition(this);
      this.transition.setDepth(2001);

      // +++++++++++++++++++++++++++++++++++++++
      // group Action
      // +++++++++++++++++++++++++++++++++++++++

      this.viewer = new Viewer(this);
      this.viewer.setDepth(2002);

      // +++++++++++++++++++++++++++++++++++++++
      // saved game
      // +++++++++++++++++++++++++++++++++++++++

      this.player = new Player(this);
      this.player.setAlpha(0);

      this.transition.show(() => {
        this.start();
        this.transition.hide();
      }, 1);

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

      // +++++++++++++++++++++++++++++++++++++++
      // GROUND
      // +++++++++++++++++++++++++++++++++++++++

      backgroundPointer.on(
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

      /*
      let dijkstra = new Dijkstra();
      dijkstra.addVertex(
        new Vertex(
          "A",
          [
            { nameOfVertex: "C", weight: 3 },
            { nameOfVertex: "E", weight: 7 },
            { nameOfVertex: "B", weight: 4 }
          ],
          1
        )
      );
      dijkstra.addVertex(
        new Vertex(
          "B",
          [
            { nameOfVertex: "A", weight: 4 },
            { nameOfVertex: "C", weight: 6 },
            { nameOfVertex: "D", weight: 5 }
          ],
          1
        )
      );
      dijkstra.addVertex(
        new Vertex(
          "C",
          [
            { nameOfVertex: "A", weight: 3 },
            { nameOfVertex: "B", weight: 6 },
            { nameOfVertex: "E", weight: 8 },
            { nameOfVertex: "D", weight: 11 }
          ],
          1
        )
      );
      dijkstra.addVertex(
        new Vertex(
          "D",
          [
            { nameOfVertex: "B", weight: 5 },
            { nameOfVertex: "C", weight: 11 },
            { nameOfVertex: "E", weight: 2 },
            { nameOfVertex: "F", weight: 2 }
          ],
          1
        )
      );
      dijkstra.addVertex(
        new Vertex(
          "E",
          [
            { nameOfVertex: "A", weight: 7 },
            { nameOfVertex: "C", weight: 8 },
            { nameOfVertex: "D", weight: 2 },
            { nameOfVertex: "G", weight: 5 }
          ],
          1
        )
      );
      dijkstra.addVertex(
        new Vertex(
          "F",
          [{ nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 3 }],
          1
        )
      );
      dijkstra.addVertex(
        new Vertex(
          "G",
          [
            { nameOfVertex: "D", weight: 10 },
            { nameOfVertex: "E", weight: 5 },
            { nameOfVertex: "F", weight: 3 }
          ],
          1
        )
      );
      console.log(dijkstra.findShortestWay("A", "F"));

      */
    }

    start() {
      if (this.saveGameObj.gameIsSaved()) {
        this.processSavedGameMulti();
      } else {
        this.setUpScene("city");

        this.playerMenu.openOnStart();
        this.saveGameObj.updatePlayerPosition(this.player.x, this.player.y);
      }
      this.mainCamera = this.cameras.main;
      this.mainCamera.startFollow(this.player, true, 0.15, 1);
      this.started = true;
    }

    setUpScene(name: string, _x?: integer, _y?: integer) {
      //console.log("setup scene");
      gameData.ingame.scenes.forEach(element => {
        if (element.name === name) {
          this.saveGameObj.setScene(name);
          this.currentScene = element;

          /* clear all elements */
          this.groupAll.runChildUpdate = false;
          this.tweens.killAll();
          this.time.removeAllEvents();
          this.groupAll.clear(true, true);
          this.groupCity.clear(true, true);
          /* ---------------------------- */
          this.setBackground(element.parallax, element.buildings);

          element.startItems.forEach(itemId => {
            this.gameItemsUtils.addItem(itemId);
          });

          this.groupAll.runChildUpdate = true;

          this.cameras.main.setBounds(
            element.cameraBounds.x,
            element.cameraBounds.y,
            element.cameraBounds.width,
            element.cameraBounds.height
          );

          if (
            element.playerPosition.x != null &&
            element.playerPosition.y != null
          ) {
            this.player
              .setX(element.playerPosition.x)
              .setY(element.playerPosition.y)
              .setDepth(element.playerPosition.y);
          } else {
            this.player
              .setX(element.playerStartPosition.x)
              .setY(element.playerStartPosition.y)
              .setDepth(element.playerStartPosition.y);
          }

          if (_x != null && _y != null) {
            this.player
              .setX(_x)
              .setY(_y)
              .setDepth(_y);
          }

          //this.gameUtils.composeVertexMap(element);
          if (this.graphics != undefined) this.graphics.clear();
          this.setSceneBounds(element.bounds, element.vertexList);
          this.setSceneObstacles(element.obstacles, element.vertexList);
        }
      });

      this.saveGameObj.updateItems();
    }

    setBackground(parallaxes: Array<any>, buildings: Array<any>) {
      //console.log(parallaxes, buildings);
      let parallax: Phaser.GameObjects.TileSprite;

      parallaxes.forEach(element => {
        parallax = this.add.tileSprite(
          element.x,
          element.y,
          element.w,
          element.h,
          element.s
        );
        parallax
          .setZ(element.scrollFactor)
          .setScrollFactor(0)
          .setOrigin(0, 0)
          .setDepth(element.depth);

        this.parallax.push(parallax);

        this.groupCity.add(parallax);
      });

      //console.log(this.parallax);

      let building: Phaser.GameObjects.Image;

      buildings.forEach(element => {
        building = this.add.image(element.x, element.y, element.s, 0);

        if (element.sf) building.setScrollFactor(0);
        if (element.depth != undefined) building.setDepth(element.depth);
        if (element.soZeroOne) {
          building.setOrigin(0, 1);
        } else {
          building.setOrigin(0, 0);
        }
        this.groupCity.add(building);
      });
    }

    setSceneObstacles(obstacles: Array<any>, vertexList: any): void {
      return;

      obstacles.forEach(obstacle => {
        obstacle.bounds.forEach((bound: any) => {
          this.graphics = this.add.graphics();
          this.graphics.lineStyle(2, 0x00ff00, 1);
          this.graphics.lineBetween(
            vertexList[bound[0]].x,
            vertexList[bound[0]].y,
            vertexList[bound[1]].x,
            vertexList[bound[1]].y
          );
        });
      });
    }

    setSceneBounds(bounds: Array<any>, vertexList: any): void {
      this.sceneBounds = [];
      bounds.forEach((bound: any) => {
        this.sceneBounds.push(
          new Phaser.Geom.Line(
            vertexList[bound[0]].x,
            vertexList[bound[0]].y,
            vertexList[bound[1]].x,
            vertexList[bound[1]].y
          )
        );

        /* this.graphics = this.add.graphics();
        this.graphics.lineStyle(2, 0x00ff00, 1);
        this.graphics.lineBetween(
          vertexList[bound[0]].x,
          vertexList[bound[0]].y,
          vertexList[bound[1]].x,
          vertexList[bound[1]].y
        );*/
      });
    }

    processSavedGameMulti(): void {
      let _saved = this.saveGameObj.getSaved();

      //console.log(_saved);

      this.currentChapter = _saved.chapter.current;
      if (_saved.chapter.choice == null) {
        this.displayChapterOptions();
      }

      //this.setUpScene(_saved.currentScene);

      _saved.scenes.forEach(element => {
        if (element.name == _saved.currentScene) {
          //console.log(element);
          _saved.items = element.items;
          this.cameras.main.setBounds(
            element.cameraBounds.x,
            element.cameraBounds.y,
            element.cameraBounds.width,
            element.cameraBounds.height
          );
          this.player.x = element.playerPosition.x;
          this.player.y = element.playerPosition.y;
          this.currentScene = element;
          //console.log(element);
          this.setBackground(element.parallax, element.buildings);
          // this.gameUtils.composeVertexMap(element);
          if (this.graphics != undefined) this.graphics.clear();
          this.setSceneBounds(element.bounds, element.vertexList);
          this.setSceneObstacles(element.obstacles, element.vertexList);
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
      if (this.started) {
        this.parallax.forEach(element => {
          element.tilePositionX = this.mainCamera.scrollX * element.z;
        });
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

    transitionShow(callback: any): void {
      this.transition.show(callback, 1);
    }

    transitionHide(): void {
      this.transition.hide();
    }

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

    showViewer(images: Array<any>, callback?: any): void {
      this.viewer.preload(images, callback);
      //console.log("showViewer");
    }
  }
}
