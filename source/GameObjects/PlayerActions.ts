namespace z89 {
  export enum PlayerActionList {
    PUSH,
    PULL,
    GIVE,
    OPEN,
    CLOSE,
    EXAMINE,
    USE,
    PICKUP,
    DROP,
    TALKTO
  }

  export class PlayerActions extends Phaser.GameObjects.Container {
    scene: GameCity;

    private isOpen: boolean = false;
    private menuBg: Phaser.GameObjects.Sprite;

    private actionListFunctions: Array<string> = [
      "PUSH",
      "PULL",
      "GIVE",
      "OPEN",
      "CLOSE",
      "EXAMINE",
      "USE",
      "PICKUP",
      "DROP",
      "TALKTO"
    ];
    private actionText: Phaser.GameObjects.BitmapText;
    private currentAction: number = -1;
    private inventory: Array<Items> = [];
    private inventorySelected: Array<number> = [];
    private iconAlpha: number = 0.8;
    private actionTextTween: Phaser.Tweens.Tween;

    private actionBnts: Array<Phaser.GameObjects.Sprite> = [];
    private actionBntsTxt: Array<Phaser.GameObjects.BitmapText> = [];

    private inventoryBtns: Array<Phaser.GameObjects.Sprite> = [];
    private inventoryBtnsItems: Array<Phaser.GameObjects.Sprite> = [];

    private logicCombination: string;
    private actionTimer: Phaser.Time.TimerEvent;

    constructor(scene: GameCity) {
      super(scene);

      this.setX(-300);

      this.menuBg = this.scene.add.sprite(0, 0, "menuAction");
      this.scene = scene;
      this.menuBg
        .setAlpha(0.8)
        .setOrigin(0)
        .setScrollFactor(0);
      this.add(this.menuBg);

      //ACTION buttons
      let _btn: Phaser.GameObjects.Sprite;
      let _txt: Phaser.GameObjects.BitmapText;

      gameData.actions[currentLang].forEach((element, index) => {
        _btn = this.scene.add
          .sprite(30, index * 55, "menuActionBtn")
          .setZ(index)
          .setName(element)
          .setDepth(100)
          .setScrollFactor(0)
          .setOrigin(0)
          .setInteractive();

        _txt = this.scene.add
          .bitmapText(0, 0, "commodore", element, 20)
          .setName(element + "-text")
          .setTint(0xffffff)
          .setDepth(101)
          .setOrigin(0.5, 0)
          .setScrollFactor(0);

        Phaser.Display.Align.In.Center(_txt, _btn);

        //to find a better solution
        var refBtn = _btn;
        _btn.on(
          "pointerdown",
          () => {
            if (this.scene.isInteractionDisabled()) return;
            this.resetActions();
            this.currentAction = refBtn.z;
            this.setText(gameData.actions[currentLang][refBtn.z]);
            let _txt: Phaser.GameObjects.BitmapText = this.actionBntsTxt[
              refBtn.z
            ];
            _txt.tint = 0x00ff00;
            this.doActionSequence();
          },
          this
        );

        this.actionBnts.push(_btn);
        this.actionBntsTxt.push(_txt);
        this.add(_btn);
        this.add(_txt);
      });

      //inventory ICONS
      let _icon: Phaser.GameObjects.Sprite;
      let _iconPos: Array<any> = [
        { x: 107, y: 590 },
        { x: 197, y: 590 },
        { x: 107, y: 675 },
        { x: 197, y: 675 }
      ];

      [0, 1, 2, 3].forEach(element => {
        _icon = this.scene.add.sprite(
          _iconPos[element].x,
          _iconPos[element].y,
          "inventory"
        );

        _icon
          .setZ(element)
          .setInteractive()
          .setScrollFactor(0)
          .setAlpha(this.iconAlpha);

        var icon = _icon;
        _icon.on(
          "pointerdown",
          () => {
            if (this.scene.isInteractionDisabled()) return;

            if (this.isInverntoryItemSelected(icon.z) != -1) {
              if (this.currentAction == -1) {
                this.scene.player.showBaloon(z89.getLabel(29));
              } else {
                icon.setFrame(0);
                this.doActionSequence();
              }
            } else {
              if (this.currentAction == -1) {
                this.scene.player.showBaloon(z89.getLabel(29));
              } else {
                if (this.inventory[icon.z] == undefined) return;
                icon.setFrame(1);
                this.inventorySelected.push(icon.z);
                this.doActionSequence();
              }
            }
          },
          this
        );

        this.inventoryBtns.push(_icon);
        this.add(_icon);
      });

      this.actionText = this.scene.add.bitmapText(
        200,
        690,
        "commodore",
        "",
        20
      );
      this.actionText
        .setAlpha(0)
        .setScrollFactor(0)
        .setTint(0x00ff00);

      this.add(this.actionText);
      this.scene.add.existing(this);
    }

    setLanguage(): void {
      this.actionBntsTxt.forEach(
        (element: Phaser.GameObjects.BitmapText, index) => {
          element.text = gameData.actions[currentLang][index];
        }
      );
    }

    private isInverntoryItemSelected(itemIndex: number): number {
      let _itemAt: number = this.inventorySelected.indexOf(itemIndex);
      if (_itemAt != -1) {
        this.inventorySelected.splice(_itemAt, 1);
        return _itemAt;
      }
      return -1;
    }

    private deselectItems(): void {
      this.inventorySelected = [];
      this.unselectInventoryIcons();
      //this.iconGroup.setAll("frame", 0);
    }

    getInventory(): Array<Items> {
      return this.inventory;
    }

    setActionObject(value: any): void {
      this.logicCombination = value;
    }

    getInventorySelected(): Array<Items> {
      let _selectedItems: Array<Items> = [];
      //console.log(this.inventorySelected);
      if (this.inventorySelected.length > 0) {
        this.inventorySelected.forEach(element => {
          if (this.inventory[element] != undefined)
            _selectedItems.push(this.inventory[element]);
        });
      }

      return _selectedItems;
    }

    private toggle() {
      if (this.isOpen) {
        this.hide();
      } else {
        this.show();
      }
    }

    show() {
      if (!this.isOpen) {
        // this.scene.disableInteraction();

        if (this.scene.player.x < 400) {
          this.setX(1080);

          this.scene.tweens.add({
            targets: this,
            x: 780,
            alpha: 1,
            duration: 400,
            ease: "Quad.easeInOut",
            onComplete: () => {
              this.isOpen = true;
            }
          });

          this.actionText.setAlpha(0).setX(-800);
          this.actionTextTween = this.scene.tweens.add({
            targets: this.actionText,
            alpha: 1,
            x: -750,
            duration: 500,
            delay: 400,
            ease: "Quad.easeInOut",
            onComplete: () => {}
          });
        } else {
          this.scene.tweens.add({
            targets: this,
            x: 0,
            alpha: 1,
            duration: 400,
            ease: "Quad.easeInOut",
            onComplete: () => {
              this.isOpen = true;
            }
          });

          this.actionText.setAlpha(0).setX(280);
          this.actionTextTween = this.scene.tweens.add({
            targets: this.actionText,
            alpha: 1,
            x: 320,
            duration: 500,
            delay: 400,
            ease: "Quad.easeInOut",
            onComplete: () => {}
          });
        }
      }
    }

    cleanAction(): void {
      this.actionBntsTxt.forEach((element: Phaser.GameObjects.BitmapText) => {
        element.tint = 0xffffff;
      });
    }

    resetActions(): void {
      this.cleanAction();
      this.currentAction = -1;
      this.inventorySelected = [];
      this.unselectInventoryIcons();
      this.scene.currentItem = null;
    }

    hide() {
      if (!this.isOpen) return;

      if (this.scene.player.x < 400) {
        this.scene.tweens.add({
          targets: this,
          x: 1080,
          alpha: 0,
          duration: 400,
          ease: "Quad.easeInOut",
          onComplete: () => {
            this.setX(-300);
            this.isOpen = false;
            this.currentAction = -1;

            this.deselectItems();
            this.resetActions();
            this.uncheckInventoryIcons();
            this.setActionObject(null);
            this.setText("");
          }
        });
      } else {
        this.scene.tweens.add({
          targets: this,
          x: -300,
          alpha: 0,
          duration: 400,
          ease: "Quad.easeInOut",
          onComplete: () => {
            this.isOpen = false;
            this.currentAction = -1;

            this.deselectItems();
            this.resetActions();
            this.uncheckInventoryIcons();
            this.setActionObject(null);
            this.setText("");
          }
        });
      }

      this.hideText();
    }

    toogle(): void {
      if (this.isOpen) {
        this.hide();
      } else {
        this.show();
      }
    }

    hideText() {
      if (this.actionTextTween != undefined) this.actionTextTween.stop();

      //this.actionText.setAlpha(0).setX(200);

      this.actionTextTween = this.scene.tweens.add({
        targets: this.actionText,
        alpha: 0,
        duration: 500,
        delay: 200,
        ease: "Quad.easeInOut",
        onComplete: () => {}
      });

      // this.actionTextTween.onComplete.add(() => { this.actionText.x = 200; }, this);
    }

    IsOpen(): boolean {
      return this.isOpen;
    }

    getCurrentAction(): number {
      return this.currentAction;
    }
    getCurrentActionString(): string {
      return this.actionListFunctions[this.currentAction];
    }
    getCurrentActionLabel(): string {
      return gameData.actions[currentLang][this.currentAction];
    }

    setText(_string: string): void {
      //console.log("setText",_string)
      this.actionText.text = _string;

      /* if (this.actionText.tint == 0x00ff00) {
                 this.actionText.tint = 0x00ffff
             } else { this.actionText.tint = 0x00ff00 }
             */
      // this.actionText.tint = 0x00ff00;

      // this.actionText.setAlpha(1).setX(320);

      //if (this.actionTextTween != undefined) this.actionTextTween.stop();
      //this.actionTextTween = this.game.add.tween(this.actionText).to({ alpha: 1, x: 320 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
    }

    removeItems(items: Array<Items>): void {
      items.forEach(element => {
        this.removeItem(element);
      });
    }

    removeItem(item: Items): void {
      //console.log(item);

      this.cleanInventoryIcons();
      this.cleanInventoryFromItem(item);
      this.remapInventoryItemsIndex();
      this.assignItemToIcon();

      this.scene.saveGameObj.updatePlayerInventory(this.inventory);
    }

    private uncheckInventoryIcons(): void {
      this.inventoryBtns.forEach(
        (element: Phaser.GameObjects.Sprite, index: number) => {
          element.setFrame(0);
        }
      );
    }

    private unselectInventoryIcons(): void {
      this.inventoryBtns.forEach(
        (element: Phaser.GameObjects.Sprite, index: number) => {
          element.setFrame(0);
        }
      );
    }

    //remove child items from the inventory icons
    private cleanInventoryIcons(): void {
      this.inventoryBtns.forEach(
        (element: Phaser.GameObjects.Sprite, index: number) => {
          element.setFrame(0);
          if (this.inventoryBtnsItems[index] != undefined)
            this.inventoryBtnsItems[index].destroy();
        }
      );
      this.inventoryBtnsItems = [];
    }

    // remove itemes from inventory array
    private cleanInventoryFromItem(item: Items): void {
      //console.log("cleanInventoryFromItem before",this.inventory)

      //console.log("cleanInventoryFromItem index:",item.inventoryIndex);
      this.inventory.splice(item.inventoryIndex, 1);
      //console.log("cleanInventoryFromItem after",this.inventory)
    }

    private remapInventoryItemsIndex() {
      //console.log("remapInventoryItemsIndex before",this.inventory)
      this.inventory.forEach((element: Items, index: number) => {
        element.inventoryIndex = index;
      });
      //console.log("remapInventoryItemsIndex after",this.inventory)
    }

    private assignItemToIcon(): void {
      this.inventory.forEach((element: Items, index: number) => {
        let _inv: Phaser.GameObjects.Sprite = this.scene.add.sprite(
          35,
          35,
          element.itemObj.sprite
        );

        _inv
          .setOrigin(0.5)
          .setScrollFactor(0)
          .setFrame(0);
        Phaser.Display.Align.In.Center(_inv, this.inventoryBtns[index]);
        this.inventoryBtnsItems.push(_inv);
        this.add(_inv);
      });

      //console.log(this.inventory, this.inventoryBtns, this.inventoryBtnsItems);
    }

    addItem(item: Items): void {
      if (!this.isInInventory(item.id)) {
        item.inventoryIndex = this.inventory.length;
        this.inventory.push(item);

        let _icon: Phaser.GameObjects.Sprite = this.inventoryBtns[
          this.inventory.length - 1
        ];

        let _inv: Phaser.GameObjects.Sprite = this.scene.add.sprite(
          35,
          35,
          item.itemObj.sprite
        );
        _inv.setOrigin(0.5).setScrollFactor(0);

        Phaser.Display.Align.In.Center(_inv, _icon);
        this.inventoryBtnsItems.push(_inv);
        this.add(_inv);

        this.scene.saveGameObj.updatePlayerInventory(this.inventory);
      }
    }

    isInInventory(id: number): boolean {
      let match: boolean = false;
      this.inventory.forEach(element => {
        //console.log(item.itemObj.id, element.itemObj.id)
        if (id == element.itemObj.id) match = true;
      });

      return match;
    }

    //private dropItem(): void {}

    //  update(){console.log("update")}

    getActionObject(): any {
      return this.logicCombination;
    }

    doActionSequence(_item?: Items): void {
      this.createActionObject(); //create the action object based on action/inventory/items selection
      this.createActionText(); //create the action text based on the above selection
      let _actionObj = this.getActionObject();

      if (this.actionTimer != null) this.actionTimer.remove(false);

      //console.log(_actionObj);

      if (
        _actionObj.action != -1 &&
        (_actionObj.inventory.length > 0 || _actionObj.item != null) &&
        this.executeActionLogic(_item)
      ) {
        this.hide();
      } else {
        if (
          _actionObj.key != "noAction" &&
          _actionObj.key.indexOf("_") != -1 &&
          ((_actionObj.inventory.length > 0 && _actionObj.item != undefined) ||
            (_actionObj.inventory.length == 0 && _actionObj.item != undefined))
        )
          this.scene.player.illogicAction();
      }

      this.actionTimer = this.scene.time.delayedCall(
        3000,
        () => {
          this.resetActions();
          this.setActionObject(null);
          this.setText("");
          this.scene.playerBaloon.hideBaloon();
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
        _Item = this.scene.getCurrentItem();
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

      // console.log(returnObj);
      this.logicCombination = returnObj;

      //return this.logicCombination;
    }

    createActionText(): void {
      //console.log("createActionText")
      let _actionObj = this.getActionObject();

      let _actionText: string = "";

      if (_actionObj == null) {
        if (this.scene.getCurrentItem() != undefined)
          _actionText = this.scene.getCurrentItem().name;
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
              this.getCurrentActionLabel() + " " + _actionObj.inventory[0].name; //+ _destText;
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
      this.setText(_actionText);
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

          gameData.ingame.logic[_actionObj.key](this.scene);
          return true;
        } else if (
          _actionObj.inventory.length == 2 &&
          this.checkCombinedItems()
        ) {
          //console.log("logic item on item", _actionObj.key);

          gameData.ingame.logic[this.checkCombinedItemsKey()](this.scene);
          return true;
        }
      } else if (
        _actionObj.inventory.length == 0 &&
        _actionObj.item != null &&
        gameData.ingame.logic[_actionObj.key] != undefined
      ) {
        //console.log("logic 2", _actionObj.key);

        //if (_actionObj.item.itemObj.logic != undefined && _actionObj.item.itemObj.logic[this.getCurrentActionString()] != undefined) { _actionObj.item.itemObj.logic[this.getCurrentActionString()](this); return true; }

        gameData.ingame.logic[_actionObj.key](this.scene);
        return true;
      } else if (
        _actionObj.inventory.length > 0 &&
        _actionObj.item != null &&
        gameData.ingame.logic[_actionObj.key] != undefined
      ) {
        //console.log("logic 3", _actionObj.key);

        gameData.ingame.logic[_actionObj.key](this.scene);
        return true;
      }

      return false;
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

      this.scene.player.showBaloon(_mess);
    }

    addInventory(itemIndex: number, noAnimation?: boolean) {
      // console.log("addInventory", this.playerActions.isInInventory(itemIndex));
      if (!this.scene.playerActions.isInInventory(itemIndex)) {
        //  console.log("add to in");
        this.scene.gameItemsUtils.addItem(itemIndex);

        this.addInventoryItem(
          this.scene.gameItemsUtils.getItemById(itemIndex),
          noAnimation
        );
      }
    }

    addInventoryItem(item?: Items, noAnimation?: boolean): void {
      if (item != undefined && this.isInInventory(item.itemObj.id)) {
        this.scene.groupAll.remove(item, true, true);
        this.scene.player.play("player-pickdrop");
        return;
      }

      if (item != undefined) {
        this.addItem(item);

        this.scene.groupAll.remove(item, true, true);

        if (noAnimation != undefined && !noAnimation)
          this.scene.playerAnimation("player-pickdrop");
      } else {
        let _currActionObj: any = this.playerActions.getActionObject();

        if (_currActionObj != undefined) {
          let _item: Items;
          if (_currActionObj.item == null) {
            _item = _currActionObj.inventory[0];
          } else {
            _item = _currActionObj.item;
          }

          if (this.isInInventory(_item.id)) {
            this.scene.player.showBaloon(z89.getLabel(28));
            this.resetActions();
          } else {
            this.scene.playerAnimation("player-pickdrop");
            this.addItem(_item);
            this.scene.groupAll.remove(_item, true, true);
            this.scene.setCurrentItem(null);
          }
        }
      }

      this.scene.saveGameObj.updateItems();
    }
  }
}
