namespace z89 {
  export class PlayerMenu extends Phaser.GameObjects.Container {
    scene: GameCity;
    private isOpen: boolean = false;
    private menuBg: Phaser.GameObjects.Image;
    private menuBgPhone: Phaser.GameObjects.Image;
    private isOpenOnStart: boolean = false;
    private btnOffsetX: number = 440;
    private btnOffsetY: number = 140;
    private fontSize:number = 12;
    private fontFamily:string = "commodore";
    private textOffsetY:number = 48;

    constructor(scene: GameCity) {
      super(scene, 0, 0);

      this.scene = scene;

      this.setScrollFactor(0).setAlpha(0);

      this.menuBg = this.scene.add
        .image(0, 0, "menu-phone-bg")
        .setOrigin(0)
        .setInteractive()
        .setDepth(999)
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

      this.add(this.menuBg);

      this.menuBgPhone = this.scene.add
        .sprite(540, 450, "menu-phone")
        .setOrigin(0.5)
        .setScale(1)
        .setDepth(1000)
        
        .setScrollFactor(0)
        .setName("bg-phone");

      this.add(this.menuBgPhone);

      //blinks btns
      //+++++++++++++++++++++++++++++++++
      let blinkBtn: Phaser.GameObjects.Sprite;
      let blinkText: Phaser.GameObjects.BitmapText;

      gameData.menuBlink.forEach(element => {
        blinkBtn = this.scene.add.sprite(
          element.x + this.btnOffsetX,
          element.y + this.btnOffsetY,
          "icons",
          element.frame
        );
        blinkBtn
          .setInteractive()
          .setDepth(1001)
          .setScrollFactor(0)
          .setName("iconsBtn")
          .on(
            "pointerdown",
            pointer => {
              this.hide();
              this.scene.player.blinkTo(element.to);
            },
            this
          );

        blinkText = this.scene.add.bitmapText(
          0,
          80,
          this.fontFamily,
          element.name,
          this.fontSize
        );
        blinkText.setName("iconsBtn").setScrollFactor(0);
        Phaser.Display.Align.In.Center(blinkText, blinkBtn, null, this.textOffsetY);

        this.add(blinkBtn);
        this.add(blinkText);
      });

      //action btn
      //+++++++++++++++++++++++++++++++++

      let actionBtn: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        gameData.menuBtns.actions.x + this.btnOffsetX,
        gameData.menuBtns.actions.y + this.btnOffsetY,
        "icons",
        gameData.menuBtns.actions.frame
      );
      actionBtn
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
        );

      let actionText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(0, 0, this.fontFamily,  gameData.menuBtns.actions.name, this.fontSize)
        .setName("iconsBtn");
      Phaser.Display.Align.In.Center(actionText, actionBtn, null, this.textOffsetY);
      this.add(actionBtn);
      this.add(actionText);

      //RESTART btn
      //+++++++++++++++++++++++++++++++++

      let restartBtn: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        gameData.menuBtns.restart.x + this.btnOffsetX,
        gameData.menuBtns.restart.y + this.btnOffsetY,
        "icons",
        gameData.menuBtns.restart.frame
      );
      restartBtn
        .setInteractive()
        .setScrollFactor(0)
        .setName("iconsBtn")
        .on(
          "pointerdown",
          pointer => {
            this.scene.conversationBaloon.setUpConversation({
              key: "RESTART",
              action: null,
              inventory: null,
              item: null
            });
            this.hide();
          },
          this
        );

      let restartText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(0, 0, this.fontFamily,  gameData.menuBtns.restart.name, this.fontSize)
        .setName("iconsBtn");
      Phaser.Display.Align.In.Center(restartText, restartBtn, null, this.textOffsetY);
      this.add(restartBtn);
      this.add(restartText);

      //info btn
      //+++++++++++++++++++++++++++++++++

      let infoBtn: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        gameData.menuBtns.info.x + this.btnOffsetX,
        gameData.menuBtns.info.y + this.btnOffsetY,
        "icons",
        gameData.menuBtns.info.frame
      );
      infoBtn
        .setInteractive()
        .setScrollFactor(0)
        .setName("iconsBtn")
        .on(
          "pointerdown",
          pointer => {
            this.scene.conversationBaloon.setUpConversation({
              key: "INFO",
              action: null,
              inventory: null,
              item: null
            });

            this.hide();
          },
          this
        );
      let infoText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(0, 0, this.fontFamily,  gameData.menuBtns.info.name, this.fontSize)
        .setName("iconsBtn");

      Phaser.Display.Align.In.Center(infoText, infoBtn, null, this.textOffsetY);
      this.add(infoBtn);
      this.add(infoText);

      //options btn
      //+++++++++++++++++++++++++++++++++

      let optionBtn: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        gameData.menuBtns.options.x + this.btnOffsetX,
        gameData.menuBtns.options.y + this.btnOffsetY,
        "icons",
        3
      );
      optionBtn
        .setInteractive()
        .setScrollFactor(0)
        .setName("iconsBtn")
        .on(
          "pointerDown",
          pointer => {

            this.scene.conversationBaloon.setUpConversation({
              key: "OPTIONS",
              action: null,
              inventory: null,
              item: null
            });

            this.hide();
          },
          this
        );

      let optionText: Phaser.GameObjects.BitmapText = this.scene.add
        .bitmapText(0, 0, this.fontFamily,  gameData.menuBtns.options.name, this.fontSize)
        .setName("iconsBtn");
      Phaser.Display.Align.In.Center(optionText, optionBtn, null, this.textOffsetY);
      this.add(optionBtn);
      this.add(optionText);



      //+++++++++++++++++++++++++++++++++
      //intro Text
      //+++++++++++++++++++++++++++++++++
      let introText: Phaser.GameObjects.Text = this.scene.add
        .text(0, 0,  "Welcome to my adventure website experiment.\nComplete the quests to access the website sections... or explore the website without playing!", {
          fontFamily: "Roboto",
          fontSize: 20
        }

        ).setWordWrapWidth(280)
        .setTint(0xffffff)
        .setOrigin(0.5)
        .setName("start");

      Phaser.Display.Align.In.TopCenter(introText,this.menuBgPhone,0,-30)

      //+++++++++++++++++++++++++++++++++
      //new game btn
      //+++++++++++++++++++++++++++++++++
      let newGame: Phaser.GameObjects.Sprite = this.scene.add.sprite(
       0,0,
        "roundedBtn"
      );
      newGame
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
        );
        Phaser.Display.Align.In.TopCenter(newGame,this.menuBgPhone,0,-200);
        
      let newGameText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        0,0,
        this.fontFamily,
        "NEW GAME",
        this.fontSize+10
      );
      newGameText.setName("start").setOrigin(0.5, 0).setScrollFactor(0);
      Phaser.Display.Align.In.Center(newGameText, newGame);
     

    
      //no game btn
      //+++++++++++++++++++++++++++++++++

      let noGame: Phaser.GameObjects.Sprite = this.scene.add.sprite(
       0,0,
        "roundedBtn"
      );
      noGame
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
        );
        Phaser.Display.Align.In.TopCenter(noGame,this.menuBgPhone,0,-300)

      let noGameText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
       0,0,
        this.fontFamily,
        "NO GAME",
       this.fontSize+10
      ).setName("start").setOrigin(0.5, 0).setScrollFactor(0);
      Phaser.Display.Align.In.Center(noGameText, noGame);
     

      this.add([noGame,newGame,noGameText,newGameText,introText]);
     

     
      this.setVisible(false);
      this.scene.add.existing(this);


    }

    newGame(): void {
      console.log("new game")
      this.scene.displayChapterTitle(0);
      this.scene.playerBaloon.showBaloon(getLabel(95));
      this.isOpenOnStart = false;
      this.scene.saveGameObj.setFirstChoice(true);
      this.hide();
    }

    noGame(): void {
      console.log("no game")
      gameData.chapters.forEach(element => {
        element.complete(this.scene);
      });
      this.scene.saveGameObj.setFirstChoice(false);
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
      if(this.isOpenOnStart){this.showState("start");}else{this.showState("iconsBtn");}
      this.menuBg.setAlpha(0.01);
      this.setVisible(true);
      this.scene.disableInteraction();
      this.scene.tweens.add({
        targets: this,
        y: 0,
        scaleY:1,
        scaleX:1,
        alpha: 1,
        ease: null,
        duration: 200,
        onComplete: () => {
         
          this.isOpen = true;
        }
      });

    }

    hide() {
      this.scene.tweens.add({
        targets: this,
        y: this.y+400,
        scaleY:0.75,
        scaleX:1,
        alpha: 0,
        ease: null,
        duration: 200,
        onComplete: () => {
          this.isOpen = false;
          this.setVisible(false);
          this.scene.enableInteraction();
        }
      });

    }
  }
}
