namespace z89 {
  export class PlayerMenu extends Phaser.GameObjects.Container {
    scene: GameCity;
    private isOpen: boolean = false;
    private menuBg: Phaser.GameObjects.Image;
    private menuBgPhone: Phaser.GameObjects.Image;
    private menuBgOptions: Phaser.GameObjects.Image;
    private isOpenOnStart: boolean = false;
    private btnOffsetX: number = 440;
    private btnOffsetY: number = 140;
    private fontSize: number = 12;
    private fontFamily: string = "commodore";
    private textOffsetY: number = 48;

    private noGameBtn: Phaser.GameObjects.Sprite;
    private noGameTxt: Phaser.GameObjects.BitmapText;
    private newGameBtn: Phaser.GameObjects.Sprite;
    private newGameTxt: Phaser.GameObjects.BitmapText;

    private actionBtn: Phaser.GameObjects.Sprite;
    private restartBtn: Phaser.GameObjects.Sprite;
    private infoBtn: Phaser.GameObjects.Sprite;
    private optionBtn: Phaser.GameObjects.Sprite;

    constructor(scene: GameCity) {
      super(scene, 0, 0);

      this.scene = scene;

      this.setScrollFactor(0).setAlpha(0);

      this.menuBg = this.scene.add
        .image(0, 0, "menu-phone-bg")
        .setOrigin(0)
        .setInteractive()
        .setAlpha(1)
        .setScrollFactor(0)
        .setName("bg");

      this.menuBg.on(
        "pointerdown",
        () => {
          if (!this.isOpenOnStart) this.hide();
        },
        this
      );

      this.menuBgPhone = this.scene.add
        .sprite(540, 450, "menu-phone")
        .setOrigin(0.5)
        .setScale(1)
        .setScrollFactor(0)
        .setName("bg-phone");

      this.menuBgOptions = this.scene.add
        .sprite(0, 0, "phone-options")
        .setOrigin(0)
        .setScale(1)
        .setScrollFactor(0)
        .setName("bg-phone");

      Phaser.Display.Align.In.TopCenter(
        this.menuBgOptions,
        this.menuBg,
        0,
        -100
      );

      this.add([this.menuBgPhone, this.menuBg, this.menuBgOptions]);

      //blinks btns
      //+++++++++++++++++++++++++++++++++
      let blinkBtn: Phaser.GameObjects.Sprite;
      let blinkText: Phaser.GameObjects.BitmapText;

      gameData.menuBlink.forEach((element, index) => {
        blinkBtn = this.scene.add.sprite(
          element.x + this.btnOffsetX,
          element.y + this.btnOffsetY,
          "icons",
          element.frame
        );

        element.sprite = blinkBtn;
        element.index = index;

        blinkBtn
          .setInteractive()
          .setScrollFactor(0)
          .setName("iconsBtn")
          .on(
            "pointerdown",
            () => {
              this.hide();
              if (this.scene.currentScene.name == "city") {
                this.scene.player.blinkTo(element.to);
              } else {
                this.scene.showPlayerBaloon(219);
              }
            },
            this
          )
          .on("pointerover", () => {
            this.scene.gameUtils.iconOverEffect(element.sprite);
          })
          .on("pointerout", () => {
            this.scene.gameUtils.iconOutEffect(element.sprite);
          });

        blinkText = this.scene.add.bitmapText(
          0,
          80,
          this.fontFamily,
          element.name,
          this.fontSize
        );
        blinkText.setName("iconsBtn").setScrollFactor(0);
        Phaser.Display.Align.In.Center(
          blinkText,
          blinkBtn,
          null,
          this.textOffsetY
        );

        this.add([blinkBtn, blinkText]);
      });

      //action btn
      //+++++++++++++++++++++++++++++++++

      this.actionBtn = this.scene.add.sprite(
        gameData.menuBtns.actions.x + this.btnOffsetX,
        gameData.menuBtns.actions.y + this.btnOffsetY,
        "icons",
        gameData.menuBtns.actions.frame
      );

      this.actionBtn
        .setInteractive()
        .setScrollFactor(0)
        .setName("iconsBtn")
        .on(
          "pointerdown",
          pointer => {
            this.scene.playerActions.toogle();
            this.hide();
          },
          this
        )
        .on("pointerover", () => {
          this.scene.gameUtils.iconOverEffect(this.actionBtn);
        })
        .on("pointerout", () => {
          this.scene.gameUtils.iconOutEffect(this.actionBtn);
        });

      let actionText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(
          0,
          0,
          this.fontFamily,
          gameData.menuBtns.actions.name,
          this.fontSize
        )
        .setName("iconsBtn");
      Phaser.Display.Align.In.Center(
        actionText,
        this.actionBtn,
        null,
        this.textOffsetY
      );
      this.add([this.actionBtn, actionText]);

      //RESTART btn
      //+++++++++++++++++++++++++++++++++

      this.restartBtn = this.scene.add.sprite(
        gameData.menuBtns.restart.x + this.btnOffsetX,
        gameData.menuBtns.restart.y + this.btnOffsetY,
        "icons",
        gameData.menuBtns.restart.frame
      );
      this.restartBtn
        .setInteractive()
        .setScrollFactor(0)
        .setName("iconsBtn")
        .on(
          "pointerdown",
          pointer => {
            this.scene.setUpConversation({
              key: "RESTART",
              action: null,
              inventory: null,
              item: null
            });

            this.hide();
          },
          this
        )
        .on("pointerover", () => {
          this.scene.gameUtils.iconOverEffect(this.restartBtn);
        })
        .on("pointerout", () => {
          this.scene.gameUtils.iconOutEffect(this.restartBtn);
        });

      let restartText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(
          0,
          0,
          this.fontFamily,
          gameData.menuBtns.restart.name,
          this.fontSize
        )
        .setName("iconsBtn");
      Phaser.Display.Align.In.Center(
        restartText,
        this.restartBtn,
        null,
        this.textOffsetY
      );
      this.add([this.restartBtn, restartText]);

      //info btn
      //+++++++++++++++++++++++++++++++++

      this.infoBtn = this.scene.add.sprite(
        gameData.menuBtns.info.x + this.btnOffsetX,
        gameData.menuBtns.info.y + this.btnOffsetY,
        "icons",
        gameData.menuBtns.info.frame
      );
      this.infoBtn
        .setInteractive()
        .setScrollFactor(0)
        .setName("iconsBtn")
        .on(
          "pointerdown",
          pointer => {
            //console.log("info")
            this.scene.conversationBaloon.setUpConversation({
              key: "INFO",
              action: null,
              inventory: null,
              item: null
            });

            this.hide();
          },
          this
        )
        .on("pointerover", () => {
          this.scene.gameUtils.iconOverEffect(this.infoBtn);
        })
        .on("pointerout", () => {
          this.scene.gameUtils.iconOutEffect(this.infoBtn);
        });

      let infoText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(
          0,
          0,
          this.fontFamily,
          gameData.menuBtns.info.name,
          this.fontSize
        )
        .setName("iconsBtn");

      Phaser.Display.Align.In.Center(
        infoText,
        this.infoBtn,
        null,
        this.textOffsetY
      );
      this.add([this.infoBtn, infoText]);

      //options btn
      //+++++++++++++++++++++++++++++++++

      this.optionBtn = this.scene.add.sprite(
        gameData.menuBtns.options.x + this.btnOffsetX,
        gameData.menuBtns.options.y + this.btnOffsetY,
        "icons",
        3
      );
      this.optionBtn
        .setInteractive()
        .setScrollFactor(0)
        .setName("iconsBtn")
        .on(
          "pointerdown",
          pointer => {
            //console.log("option")
            /*
            this.scene.conversationBaloon.setUpConversation({
              key: "OPTIONS",
              action: null,
              inventory: null,
              item: null
            });

            this.hide();*/

            this.scene.setUpConversation({
              key: "LANGUAGE",
              action: null,
              inventory: null,
              item: null
            });

            this.hide();

            //this.showMenu();
          },
          this
        )
        .on("pointerover", () => {
          this.scene.gameUtils.iconOverEffect(this.optionBtn);
        })
        .on("pointerout", () => {
          this.scene.gameUtils.iconOutEffect(this.optionBtn);
        });

      let optionText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(
          0,
          0,
          this.fontFamily,
          gameData.menuBtns.options.name,
          this.fontSize
        )
        .setName("iconsBtn");
      Phaser.Display.Align.In.Center(
        optionText,
        this.optionBtn,
        null,
        this.textOffsetY
      );
      this.add([this.optionBtn, optionText]);

      //+++++++++++++++++++++++++++++++++
      //Start buttons
      //+++++++++++++++++++++++++++++++++
      let introText: Phaser.GameObjects.Text = this.scene.add
        .text(0, 0, z89.getLabel(141), {
          fontFamily: "Roboto",
          fontSize: 20
        })
        .setWordWrapWidth(280)
        .setTint(0xffffff)
        .setOrigin(0.5)
        .setName("start");

      Phaser.Display.Align.In.TopCenter(introText, this.menuBgPhone, 0, -80);

      //+++++++++++++++++++++++++++++++++
      //new game btn
      //+++++++++++++++++++++++++++++++++
      this.newGameBtn = this.scene.add.sprite(0, 0, "roundedBtn");
      this.newGameBtn
        .setName("start")
        .setInteractive()
        .setScrollFactor(0)
        .setTint(0x2a7600)
        .on(
          "pointerdown",
          pointer => {
            this.newGame();
          },
          this
        )
        .on("pointerover", () => {
          this.scene.gameUtils.btnOverEffect(this.newGameBtn, this.newGameTxt);
        })
        .on("pointerout", () => {
          this.scene.gameUtils.btnOutEffect(this.newGameBtn, this.newGameTxt);
        });

      Phaser.Display.Align.To.BottomCenter(this.newGameBtn, introText, 0, 50);

      this.newGameTxt = this.scene.add.bitmapText(
        0,
        0,
        this.fontFamily,
        "NEW GAME",
        this.fontSize + 10
      );
      this.newGameTxt
        .setName("start")
        .setOrigin(0.5, 0)
        .setScrollFactor(0);
      Phaser.Display.Align.In.Center(this.newGameTxt, this.newGameBtn);

      //no game btn
      //+++++++++++++++++++++++++++++++++

      this.noGameBtn = this.scene.add.sprite(0, 0, "roundedBtn");
      this.noGameBtn
        .setName("start")
        .setInteractive()
        .setScrollFactor(0)
        .setTint(0x2a7600)
        .on(
          "pointerdown",
          () => {
            this.noGame();
          },
          this
        )
        .on("pointerover", () => {
          this.scene.gameUtils.btnOverEffect(this.noGameBtn, this.noGameTxt);
        })
        .on("pointerout", () => {
          this.scene.gameUtils.btnOutEffect(this.noGameBtn, this.noGameTxt);
        });
      Phaser.Display.Align.To.BottomCenter(
        this.noGameBtn,
        this.newGameBtn,
        0,
        50
      );

      this.noGameTxt = this.scene.add
        .bitmapText(0, 0, this.fontFamily, "NO GAME", this.fontSize + 10)
        .setName("start")
        .setOrigin(0.5, 0)
        .setScrollFactor(0);
      Phaser.Display.Align.In.Center(this.noGameTxt, this.noGameBtn);

      this.add([
        this.noGameBtn,
        this.newGameBtn,
        this.noGameTxt,
        this.newGameTxt,
        introText
      ]);

      this.setVisible(false);
      this.scene.add.existing(this);
    }

    newGame(): void {
      //console.log("new game");
      this.scene.displayChapterTitle(0);
      this.scene.playerBaloon.showBaloon(getLabel(95));
      this.isOpenOnStart = false;
      this.scene.saveGameObj.setFirstChoice(true);
      this.scene.saveGameObj.setChoiceChapter(true);
      this.hide();
    }

    noGame(): void {
      //console.log("no game");
      gameData.chapters.forEach(element => {
        element.complete(this.scene);
      });
      this.scene.saveGameObj.setFirstChoice(false);
      this.scene.saveGameObj.setChoiceChapter(false);
      this.isOpenOnStart = false;
      this.hide();
    }

    resetGame(): void {}

    toggle() {
      if (this.isOpen) {
        this.hide();
      } else {
        //this.showState("iconsBtn");
        this.show();
      }
    }

    openOnStart() {
      this.isOpenOnStart = true;
      this.showState("start");
      this.show();
    }

    showState(state: string) {
      this.getAll().forEach((element: Phaser.GameObjects.Sprite) => {
        if (element.name == state) {
          element.alpha = 1;
        } else if (element.name == "bg-phone") {
          element.alpha = 1;
        } else if (element.name == "bg") {
          // element.alpha = 0.5;
        } else {
          element.alpha = 0;
        }
      }, this);
    }

    show() {
      if (this.isOpenOnStart) {
        this.showState("start");
      } else {
        this.showState("iconsBtn");
      }
      this.menuBg.setAlpha(0.01);
      this.setVisible(true);
      //this.scene.disableInteraction();
      this.scene.tweens.add({
        targets: this,
        y: 0,
        scaleY: 1,
        scaleX: 1,
        alpha: 1,
        ease: null,
        duration: 200,
        onComplete: () => {
          this.scene.playerBaloon.hideBaloon();
          this.isOpen = true;
        }
      });
    }

    showMenu() {
      this.getAll().forEach((element: Phaser.GameObjects.Sprite, index) => {
        if (element.name == "iconsBtn") {
          this.scene.tweens.add({
            targets: element,
            duration: 100,
            y: element.y + 20,
            alpha: 0,
            onComplete: () => {
              element.setY(element.y - 20);
            }
          });
        }
      }, this);

      this.scene.tweens.add({
        targets: this.menuBgOptions,
        scaleY: 22,
        duration: 1000,
        ease: "Bounce.easeOut"
      });
    }

    hide() {
      this.scene.tweens.add({
        targets: this,
        y: this.y + 400,
        scaleY: 0.75,
        scaleX: 1,
        alpha: 0,
        ease: null,
        duration: 200,
        onComplete: () => {
          this.isOpen = false;
          this.setVisible(false);
          this.menuBgOptions.setScale(1);
          //this.scene.enableInteraction();
        }
      });
    }
  }
}
