namespace z89 {
  export class conversationBaloon extends Phaser.GameObjects.Container {
    scene: GameCity;

    private baloonText: Phaser.GameObjects.Text;
    private baloonBg: Phaser.GameObjects.Image;
    private baloonBorder: Phaser.GameObjects.Image;
    private baloonPin: Phaser.GameObjects.Image;

    private baloonTarget: Items;
    private conversationKey: string;
    private conversationObj: any;
    private currentStep: number;

    private baloonX: number;
    private baloonY: number;
    private isPlaying: boolean;

    private timeEvent: Phaser.Time.TimerEvent;
    private isSkippable: boolean;

    // this.game.time.events

    constructor(scene: GameCity, x: number, y: number) {
      super(scene);

      this.setDepth(1000).setAlpha(0);
      this.isSkippable = true;
      this.isPlaying = false;

      this.baloonBg = this.scene.add.image(0, 20, "baloonBg");
      this.baloonBg
        .setOrigin(0.5, 1)
        .setAlpha(0.8)
        .on(
          "pointerdown",
          () => {
            this.skip();
          },
          this
        );

      this.add(this.baloonBg);

      this.baloonBorder = this.scene.add.image(0, 20, "baloonBorder");
      this.baloonBorder.setOrigin(0.5, 1);
      this.add(this.baloonBorder);

      this.baloonPin = this.scene.add.image(0, 30, "baloonPin");
      this.baloonPin.setOrigin(0.5, 1);
      this.add(this.baloonPin);

      this.baloonText = this.scene.add.text(0, 0, "", {
        fontFamily: "Arial",
        fontSize: 20
      });

      this.baloonText
        .setWordWrapWidth(320)
        .setTint(0x00ff00)
        .setOrigin(0.5)
        .setDepth(2001);
      this.add(this.baloonText);

      this.scene.add.existing(this);
    }

    skip(): void {
      if (!this.isSkippable) return;
      this.hideBaloon();

      //this.scene.time.events.remove(this.timeEvent);
      this.currentStep++;
      let _obj = this.conversationObj[this.currentStep];
      if (_obj != undefined) {
        this.displayStep();
      } else {
        this.isPlaying = false;
      }
      //console.log(_obj)

      //if(_obj.next!=undefined ){ this.displayStep(); }
    }

    public showBaloon(_text: string): void {
      if (_text == undefined) return;
      this.baloonText.setText(_text);

      this.fixSize();
      this.scene.tweens.add({
        targets: this,
        y: this.y + 10,
        alpha: 1,
        duration: 500
      });
    }

    public hideBaloon(): void {
        this.baloonText.setY(0);
        this.setAlpha(0);
    }

    stopConversation(): void {
      //this.forkBtns.children.removeAll();

      this.baloonText.y = 0;
      this.isPlaying = false;
      this.hideBaloon();

      if (this.baloonTarget != null) {
        this.baloonX = this.baloonTarget.x;
        this.baloonY = this.baloonTarget.y - this.baloonTarget.height - 50;
        this.showBaloon(z89.getLabel(39));
        // this.game.time.events.add(1500, () => { this.hideBaloon(); }, this);
      }
    }

    setUpConversation(_actionObj: any): void {
      this.isPlaying = true;
      this.currentStep = 0;
      if (_actionObj.item != null) this.setItemTarget(_actionObj.item);
      this.setConversationKey(_actionObj.key);
      this.setConversationObj(_actionObj.key);

      this.startConversation();
    }

    setItemTarget(item: Items): void {
      this.baloonTarget = item;
    }
    setConversationKey(key: string): void {
      this.conversationKey = key;
    }
    setConversationObj(key: string): void {
      if (gameData.ingame.conversation[key] != undefined)
        this.conversationObj = gameData.ingame.conversation[key];
    }

    fixSize(): void {
      this.setX(this.scene.player.x);
      this.setY(this.scene.player.y - this.scene.player.height - 50);
      this.baloonBg.setScale(1, (this.baloonText.getBounds().height + 20) / 50);

      var bound = this.baloonBg.getBounds();
      this.baloonText.setY(
        this.baloonText.y -
          (this.baloonText.getBounds().y - this.baloonBg.getBounds().y) +
          10
      );
    }

    startConversation(): void {
      if (this.baloonTarget != null) {
        if (this.scene.player.x < this.baloonTarget.x) {
          this.baloonTarget.turnLeft();
        } else {
          this.baloonTarget.turnRight();
        }
      }

      this.hideBaloon();
      this.displayStep();
    }

    displayStep(): void {
      this.baloonText.y = 0;
      // this.forkBtns.removeAll();
      this.isSkippable = true;
      if (!this.isPlaying) {
        return;
      }
      let _obj = this.conversationObj[this.currentStep];
      if (_obj == undefined) {
        this.hideBaloon();
        return;
      }

      if (_obj.isItem) {
        this.baloonText.tint = 0xffffff;
        this.baloonBorder.tint = 0xffffff;
        this.baloonPin.tint = 0xffffff;

        this.baloonX = this.baloonTarget.x;
        this.baloonY = this.baloonTarget.y - this.baloonTarget.height - 50;
      } else {
        this.baloonText.tint = 0x00ff00;
        this.baloonBorder.tint = 0x00ff00;
        this.baloonPin.tint = 0x00ff00;
        this.baloonX = this.scene.player.x;
        this.baloonY = this.scene.player.y - this.scene.player.height - 50;
      }

      /*
            if (_obj.next != undefined) { this.timeEvent = this.game.time.events.add(this.getTime(_obj.text.length), () => { this.currentStep++; this.displayStep(); }, this) }

            if (_obj.end != undefined) { this.timeEvent = this.game.time.events.add(this.getTime(_obj.text.length), () => { this.currentStep = 0; this.hideBaloon(); this.isPlaying = false; }, this) }
            */

      if (_obj.callback != undefined) {
        _obj.callback(this.scene);
      }

      if (_obj.fork != undefined) {
        this.isSkippable = false;
        this.showOptions(_obj);
        return;
      }

      this.showBaloon(_obj.text);
    }

    getTime(textLenght: number): number {
      let _time: number = (textLenght * 1000) / 15;

      if (_time < 1500) return 1500;

      return _time;
    }

    showOptions(_obj: any): void {
      if (_obj == undefined) return;
      this.x = this.baloonX;
      this.y = this.baloonY;

      let _btn: Phaser.GameObjects.Sprite;
      let _btnText: Phaser.GameObjects.Text;
      let _nextPos: number = 0;
      let _totHeight: number = 0;
      _obj.options.forEach((element, index) => {

        _btn = this.scene.add.sprite(0, _nextPos, "forkBtn");

        _btn.setOrigin(0.5, 1).setInteractive().on(
          "pointerdown",
          (a, b, c) => {
            if (c.goto != undefined) {
              this.currentStep = this.goToLabel(c.goto);
            }
            if (c.link != undefined) {
              this.currentStep++;
              window.open(c.link, "_blank");
            }
            if (c.action != undefined) {
              c.action(this.scene, this.baloonTarget);
              this.hideBaloon();
              return;
            }

            this.displayStep();
          },
          this
        );

        _btnText = this.scene.add.text(0, _nextPos - 10, element.option, {
          fontFamily: "Arial",
          fontSize: 10
        });

        _btnText.setOrigin(0.5, 1);

        if (_obj.isItem) {
          _btn.setTint(0x333333);
          _btnText.setTint(0xfefefe);
        } else {
          _btn.setTint(0x0f6c0f);
          _btnText.setTint(0xffffff);
        }

        _btn.height = _btnText.height + 30;
        _nextPos = _nextPos - (_btnText.height + 25) - 20;
        _totHeight = _totHeight + _btnText.height + 50;
       
      });

      if (_obj.text != undefined && _obj.text != "") {
        this.baloonText.text = _obj.text;
        this.baloonText.y = _nextPos;
        _totHeight += this.baloonText.height + 15;
      }

      this.baloonBg.height = _totHeight + 15;

      this.alpha = 1;

      this.add([_btn,_btnText]);

      //this.game.add.tween(this).to({ y: this.y + 10, alpha: 1 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
    }

    goToLabel(label: string): number {
      let _index: number = 0;
      this.conversationObj.forEach((element: any, index: number) => {
        if (element.label != undefined && element.label == label) {
          _index = index;
        }
      });

      return _index;
    }

    isConversationActive(): boolean {
      return this.isPlaying;
    }
  }
}
