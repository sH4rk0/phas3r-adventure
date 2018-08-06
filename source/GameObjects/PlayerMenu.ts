namespace z89 {
  export class PlayerMenu extends Phaser.GameObjects.Container {
    scene: GameCity;
    private isOpen: boolean = false;
    private menuBg: Phaser.GameObjects.Image;
    private menuBgPhone: Phaser.GameObjects.Image;
    private isOpenOnStart: boolean = false;
    private btnOffsetX: number = 440;
    private btnOffsetY: number = 140;

    constructor(scene: GameCity) {
      super(scene, 0, 0);

      this.scene = scene;

      this.setScrollFactor(0);

      this.menuBg = this.scene.add
        .image(0, 0, "menu-phone-bg")
        .setOrigin(0)
        .setInteractive()
        .setDepth(999)
        .setAlpha(0.5)
        .setScrollFactor(0);
        this.menuBg.name="bg";
      this.menuBg.on(
        "pointerdown",
        () => {
            this.hide();
          console.log("close menu bg");
        },
        this
      );

      this.add(this.menuBg);

      this.menuBgPhone = this.scene.add
        .sprite(540, 450, "menu-phone")
        .setOrigin(0.5)
        .setScale(1)
        .setDepth(1000)
         .setInteractive()
         .setScrollFactor(0);
        this.menuBgPhone.name="bg-phone";
      this.menuBgPhone.on(
        "pointerdown",
        pointer => {
            this.hide();
          console.log("close menu phone");
          //if (!this.isOpenOnStart) this.hide();
        },
        this
      );

      this.add(this.menuBgPhone);

      //blinks btns
      //+++++++++++++++++++++++++++++++++
      let blinkBtn: Phaser.GameObjects.Sprite;
      let blinkText: Phaser.GameObjects.BitmapText
      gameData.menuBlink.forEach(element => {
        blinkBtn = this.scene.add.sprite(
          element.x + this.btnOffsetX,
          element.y + this.btnOffsetY,
          "icons",
          element.frame
        );
        blinkBtn.setInteractive().setDepth(1001).setScrollFactor(0);
        blinkBtn.name = "iconsBtn";

        blinkBtn.on(
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
          "commodore",
          element.name,
          10
        );
        blinkText.name = "iconsBtn";
        blinkText.setScrollFactor(0);
        Phaser.Display.Align.In.Center(blinkText, blinkBtn, null, 48);

        this.add(blinkBtn);
        this.add(blinkText);
      });

      //action btn
      //+++++++++++++++++++++++++++++++++
      let actionBtn: Phaser.GameObjects.Sprite;
      actionBtn = this.scene.add.sprite(
        100 + this.btnOffsetX,
        220 + this.btnOffsetY,
        "icons",
        1
      );
      actionBtn.setInteractive().setScrollFactor(0);
      actionBtn.name = "iconsBtn";
      actionBtn.on(
        "pointerdown",
        pointer => {
          this.scene.playerActions.toogle();
          this.hide();
        },
        this
      );
      let actionText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        0,
        80,
        "commodore",
        "Menu",
        10
      );
      actionText.name = "iconsBtn";
      Phaser.Display.Align.In.Center(actionText, actionBtn, null, 48);
      this.add(actionBtn);
      this.add(actionText);

      //RESTART btn
      //+++++++++++++++++++++++++++++++++
      let restartBtn: Phaser.GameObjects.Sprite;
      restartBtn = this.scene.add.sprite(
        200 + this.btnOffsetX,
        220 + this.btnOffsetY,
        "icons",
        10
      );
      restartBtn.setInteractive().setScrollFactor(0);
      restartBtn.name = "iconsBtn";
      restartBtn.on(
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

      let restartText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        0,
        80,
        "commodore",
        "Restart",
        10
      );
      restartText.name = "iconsBtn";
      Phaser.Display.Align.In.Center(restartText, restartBtn, null, 48);
      this.add(restartBtn);
      this.add(restartText);

      //info btn
      //+++++++++++++++++++++++++++++++++
      let infoBtn: Phaser.GameObjects.Sprite;
      infoBtn = this.scene.add.sprite(
        this.btnOffsetX,
        330 + this.btnOffsetY,
        "icons",
        2
      );
      infoBtn.setInteractive().setScrollFactor(0);
      infoBtn.name = "iconsBtn";
      infoBtn.on(
        "pointerdown",
        pointer => {


          /* this.scene.conversationBaloon.setUpConversation({
                    key: "INFO",
                    action: null,
                    inventory: null,
                    item: null
                });
                */

                this.scene.playerBaloon.showBaloon("aaa");
          this.hide();
        },
        this
      );
      let infoText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        0,
        80,
        "commodore",
        "Info",
        10
      );
      infoText.name = "iconsBtn";
      Phaser.Display.Align.In.Center(infoText, infoBtn, null, 48);
      this.add(infoBtn);
      this.add(infoText);

    

      //options btn
      //+++++++++++++++++++++++++++++++++
      let optionBtn: Phaser.GameObjects.Sprite;
      optionBtn = this.scene.add.sprite( 100+this.btnOffsetX,
        330 + this.btnOffsetY, "icons", 3);
      optionBtn.setInteractive().setScrollFactor(0);
      optionBtn.name = "iconsBtn";
      optionBtn.on(
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

      let optionText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        0,
        80,
        "commodore",
        "Options",
        10
      );
      optionText.name = "iconsBtn";
      Phaser.Display.Align.In.Center(optionText, optionBtn , null, 48);
      this.add(optionBtn);
      this.add(optionText);

 

      //intro btn
      //+++++++++++++++++++++++++++++++++
      let introText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        0,
        0,
        "commodore",
        "Welcome to my adventure website experiment.\nComplete the quests to access the website sections... or explore the website without playing!",
        12
      );
      introText.name = "start";
      //introText.width=300;
      this.add(introText);

      //new game btn
      //+++++++++++++++++++++++++++++++++
      let newGame: Phaser.GameObjects.Sprite;
      newGame = this.scene.add.sprite(-130, -80, "roundedBtn");
      newGame.name = "start";
      newGame.setInteractive().setScrollFactor(0);
      newGame.tint = 0x2a7600;
      newGame.on(
        "pointerdown",
        pointer => {
          this.newGame();
        },
        this
      );
      let newGameText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        265 / 2,
        18,
        "commodore",
        "NEW GAME",
        16
      );
      newGameText.setOrigin(0.5, 0);
      Phaser.Display.Align.In.Center(newGameText, newGame);
      this.add(newGame);
      this.add(newGameText);

      //no game btn
      //+++++++++++++++++++++++++++++++++
      let noGame: Phaser.GameObjects.Sprite;
      noGame = this.scene.add.sprite(-130, 0, "roundedBtn");
      noGame.name = "start";

      noGame.tint = 0x2a7600;
      noGame.on(
        "pointerdown",
        () => {
          this.noGame();
        },
        this
      );
      let noGameText: Phaser.GameObjects.BitmapText = this.scene.add.bitmapText(
        265 / 2,
        18,
        "commodore",
        "NO GAME",
        16
      );
      noGameText.setOrigin(0.5, 0);

      this.add(noGame);
      this.add(noGameText);

      this.scene.add.existing(this);

      this.showState("iconsBtn");

    
      
    }



    newGame(): void {
      this.scene.displayChapterTitle(0);
      this.scene.playerBaloon.showBaloon(getLabel(95));
      this.isOpenOnStart = false;
      this.hide();
    }

    noGame(): void {
      //console.log("nogame");

      gameData.chapters.forEach(element => {
        element.complete(this.scene);
      });
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
            //console.log(element);
        if (element.name == state) {
          element.alpha = 1;
    
        } 
        else if(element.name=="bg-phone") {
            element.alpha = 1;
          }

        else if(element.name=="bg") {
            element.alpha = .5;
          }
        else  {
          element.alpha = 0;
        }

      }, this);
    }

    show() {
    this.visible=true;
      this.scene.disableInteraction();
      this.scene.tweens.add({
        targets: this,
        y: 0,
        alpha:1,
        ease: null,
        duration: 300,
        onComplete: (a, b, c) => {
          this.isOpen = true;
        }
      });

      /*

            this.game.add.tween(this.cameraOffset).to({ y: 100 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false).onComplete.add(() => {

                this.isOpen = true;

            }, this);


            this.game.add.tween(this.menuBg.scale).to({ y: 1, x: 1 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
            this.game.add.tween(this.menuBg).to({ height: 774 }, 600, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
*/
    }

    hide() {

        this.scene.tweens.add({
            targets: this,
            y: 0,
            alpha:0,
            ease: null,
            duration: 200,
            onComplete: () => {
              this.isOpen = false;
              this.visible=false;
              this.scene.enableInteraction();
            }
          });
       
      /*    this.game.add.tween(this.cameraOffset).to({ y: 710 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false).onComplete.add(() => {

                this.isOpen = false;
                this.currentState.enableInteraction();

            }, this);

            this.game.add.tween(this.menuBg.scale).to({ y: .7, x: .7 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
            this.game.add.tween(this.menuBg).to({ height: 350 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);

*/
    }


  }
}
