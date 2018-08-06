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
    private toggleBtn: Phaser.GameObjects.Sprite;
    private menuBg: Phaser.GameObjects.Sprite;
    private actionList: Array<string> = [
      "PUSH",
      "PULL",
      "GIVE",
      "OPEN",
      "CLOSE",
      "EXAMINE",
      "USE",
      "PICK UP",
      "DROP",
      "TALK TO"
    ];
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
      this.actionList.forEach((element, index) => {
        _btn = this.scene.add.sprite(30, index * 55, "menuActionBtn");
        _btn
          .setZ(index)
          .setName(element)
          .setDepth(100)
          .setScrollFactor(0)
          .setOrigin(0)
          .setInteractive();

        _txt = this.scene.add.bitmapText(0, 0, "commodore", element, 20);
        _txt
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
            this.setText(this.actionList[refBtn.z]);
            let _txt: Phaser.GameObjects.BitmapText = this.actionBntsTxt[
              refBtn.z
            ];
            _txt.tint = 0x00ff00;
            this.scene.doActionSequence();
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

      for (var index = 0; index < 4; index++) {
        _icon = this.scene.add.sprite(
          _iconPos[index].x,
          _iconPos[index].y,
          "inventory"
        );
        _icon.setInteractive().setScrollFactor(0);
        _icon.alpha = this.iconAlpha;

        _icon.on(
          "pointerdown",
          (icon: Phaser.GameObjects.Sprite) => {
            if (this.scene.isInteractionDisabled()) return;

            if (this.isInverntoryItemSelected(icon.z) != -1) {
              if (this.currentAction == -1) {
                this.scene.player.showBaloon(z89.getLabel(29));
              } else {
                icon.setFrame(0);
                this.scene.doActionSequence();
              }
            } else {
              if (this.currentAction == -1) {
                this.scene.player.showBaloon(z89.getLabel(29));
              } else {
                icon.setFrame(1);
                this.inventorySelected.push(icon.z);
                this.scene.doActionSequence();
              }
            }
          },
          this
        );

        this.add(_icon);
      }

      this.actionText = this.scene.add.bitmapText(
        320,
        690,
        "commodore",
        "",
        20
      );
      this.actionText.setAlpha(0).setScrollFactor(0);

      this.add(this.actionText);
      this.scene.add.existing(this);
    }

    btnClick(btn: Phaser.GameObjects.Sprite): void {
      console.log(this, btn);
      if (this.scene.isInteractionDisabled()) return;
      this.resetActions();
      this.currentAction = btn.z;
      this.setText(this.actionList[btn.z]);
      let _txt: Phaser.GameObjects.BitmapText = this.actionBntsTxt[btn.z];
      _txt.tint = 0x00ff00;
      this.scene.doActionSequence();
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
      //this.iconGroup.setAll("frame", 0);
    }

    getInventory(): Array<Items> {
      return this.inventory;
    }

    getInventorySelected(): Array<Items> {
      let _selectedItems: Array<Items> = [];
      this.inventorySelected.forEach(element => {
        _selectedItems.push(this.inventory[element]);
      });
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
        this.scene.disableInteraction();

        this.scene.tweens.add({
          targets: this,
          x: 0,
          duration: 400,
          ease: "Quad.easeInOut",
          onComplete: () => {
            this.isOpen = true;
            this.scene.enableInteraction();
          }
        });
      }
    }

    cleanAction(): void {
      this.actionBntsTxt.forEach((element: Phaser.GameObjects.BitmapText) => {
        element.tint = 0xffffff;
      });
    }

    resetActions(): void {
      //console.log("reset action")
      this.cleanAction();
      this.currentAction = -1;
      this.inventorySelected = [];
      //this.iconGroup.setAll("frame", 0);
    }

    hide() {
      if (!this.isOpen) return;

      this.scene.tweens.add({
        targets: this,
        x: -300,
        duration: 400,
        ease: "Quad.easeInOut",
        onComplete: () => {
          this.isOpen = false;
          this.currentAction = -1;

          this.deselectItems();
          this.resetActions();
          this.scene.setActionObject(null);
          this.setText("");
        }
      });

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

      this.actionText.setAlpha(0).setX(200);

      /* this.actionTextTween = this.game.add.tween(this.actionText).to({ alpha: 0, x: 500 }, 200, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);

            this.actionTextTween.onComplete.add(() => { this.actionText.x = 200; }, this);
            */
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
      return this.actionList[this.currentAction];
    }

    setText(_string: string): void {
      //console.log("setText",_string)
      this.actionText.text = _string;

      /* if (this.actionText.tint == 0x00ff00) {
                 this.actionText.tint = 0x00ffff
             } else { this.actionText.tint = 0x00ff00 }
             */
      this.actionText.tint = 0x00ff00;

      this.actionText.setAlpha(1).setX(320);

      if (this.actionTextTween != undefined) this.actionTextTween.stop();
      //this.actionTextTween = this.game.add.tween(this.actionText).to({ alpha: 1, x: 320 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
    }

    removeItems(items: Array<Items>): void {
      items.forEach(element => {
        this.removeItem(element);
      });
    }

    removeItem(item: Items): void {
      this.cleanInventoryIcons();
      this.cleanInventoryFromItem(item);
      this.remapInventoryItemsIndex();
      this.assignItemToIcon();

      //this.scene.saveGameObj.updatePlayerInventory(this.inventory);
    }

    private assignItemToIcon(): void {
      /*
            let _icon: Phaser.GameObjects.Sprite;
            this.inventory.forEach((element: Items, index: number) => {

                _icon = <Phaser.GameObjects.Sprite>this.iconGroup.getChildAt(index);
                let _inv: Phaser.GameObjects.Sprite = this.game.add.sprite(35, 35, element.itemObj.sprite);
                _inv.anchor.set(.5);
                _icon.addChild(_inv);

            });
            */
    }

    //remove child items from the inventory icons
    private cleanInventoryIcons(): void {
      /*
            this.iconGroup.forEach((icon: Phaser.Sprite) => {

                if (icon.children.length > 0) icon.removeChildAt(0);

            }, this);

            this.iconGroup.setAll("frame", 0);
            */
    }

    // remove itemes from inventory array
    private cleanInventoryFromItem(item: Items): void {
      this.inventory.splice(item.inventoryIndex, 1);
    }

    private remapInventoryItemsIndex() {
      this.inventory.forEach((element: Items, index: number) => {
        element.inventoryIndex = index;
      });
    }

    addItem(item: Items): void {
      item.inventoryIndex = this.inventory.length;
      this.inventory.push(item);

      /*
            let _icon: Phaser.Sprite = <Phaser.Sprite>this.iconGroup.getChildAt(this.inventory.length - 1)

            let _inv: Phaser.Sprite = this.game.add.sprite(35, 35, item.itemObj.sprite);
            _inv.anchor.set(.5);
            _icon.addChild(_inv);
*/
      //this.scene.saveGameObj.updatePlayerInventory(this.inventory);
    }

    isInInventory(item: Items): boolean {
      let match: boolean = false;
      this.inventory.forEach(element => {
        //console.log(item.itemObj.id, element.itemObj.id)
        if (item.itemObj.id == element.itemObj.id) match = true;
      });

      return match;
    }

    private dropItem(): void {}
  }
}
