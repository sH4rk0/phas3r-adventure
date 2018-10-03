namespace z89 {
  export class ItemsContent extends Items {
    public itemObj: any;
    private arrowLeft: Phaser.GameObjects.Sprite;
    private arrowRight: Phaser.GameObjects.Sprite;
    private guru: Phaser.GameObjects.Sprite;
    private guruTween: Phaser.Tweens.Tween;
    private btnGo: Phaser.GameObjects.Sprite;
    private btnGoText: Phaser.GameObjects.BitmapText;
    private contents: Array<any>;
    private contexts: Array<string>;
    private contentImage: Phaser.GameObjects.Image;

    private contentTextTitle: Phaser.GameObjects.Text;
    private contentTextDescription: Phaser.GameObjects.Text;
    private contentTextDate: Phaser.GameObjects.Text;

    private currentIndex: number = 0;
    private isAnimating: boolean = false;
    // private filtersArr: Array<Phaser.Filter>;
    private isStarted: boolean = false;
    private spinner: Phaser.GameObjects.Sprite;
    private interactive: boolean;

    constructor(scene: GameCity, itemObj: any) {
      super(scene, itemObj);

      this.setOrigin(0.5);

      if (itemObj.scale != undefined) this.setScale(itemObj.scale);

      this.id = itemObj.id;
      this.itemObj = itemObj;
      this.name = z89.getLabel(itemObj.name);
      this.interactive = itemObj.interactive;
      this.contexts = itemObj.contexts;
      if (isOnline()) {
        this.contents = this.scene.getContentsBycontexts(this.contexts);
      }

      //+++++++++++++++++++++++++
      // content Image
      //+++++++++++++++++++++++++
      this.contentImage = this.scene.add.image(0, 0, itemObj.sprite);
      this.contentImage
        .setOrigin(0)
        .setTint(0x555555)
        .setDepth(this.y + 1)
        .setName("contentImage");

      this.scene.groupCity.add(this.contentImage);

      Phaser.Display.Align.In.TopCenter(this.contentImage, this);

      let shape = this.scene.make.graphics({
        x: this.contentImage.x + 1,
        y: this.contentImage.y,
        add: true
      });
      shape.fillStyle(0xffffff);
      shape.beginPath();
      shape.fillRect(0, 0, 398, 200);

      let mask = shape.createGeometryMask();

      this.contentImage.setMask(mask);

      //+++++++++++++++++++++++++
      // content text
      //+++++++++++++++++++++++++

      this.guru = this.scene.add.sprite(0, 0, "guru-meditation");
      this.guru.setOrigin(0.5).setDepth(this.y + 1);

      this.guruTween = this.scene.tweens.add({
        targets: this.guru,
        delay: 1000,
        duration: 1000,
        alpha: 0,
        yoyo: true,
        loopDelay: 1000,
        loop: -1
      });
      Phaser.Display.Align.In.TopCenter(this.guru, this.contentImage, 0, -20);

      this.scene.groupCity.add(this.guru);

      let _style = {
        fill: "#00ff00",
        align: "center"
        //stroke: "#000000",
        //strokeThickness: 5
      };
      this.contentTextTitle = this.scene.add.text(
        0,
        0,
        "        Software Failure.         Press any key to continue\n    Guru Meditation          #00000025.65045338",
        _style
      );
      this.contentTextTitle
        .setFontFamily("Roboto")
        .setFontSize(16)
        .setOrigin(0)
        .setDepth(this.y + 1)
        .setWordWrapWidth(380);

      Phaser.Display.Align.In.TopCenter(
        this.contentTextTitle,
        this.contentImage,
        -20,
        -40
      );

      this.scene.groupCity.add(this.contentTextTitle);

      this.contentTextDescription = this.scene.add.text(0, 0, "", _style);
      this.contentTextDescription
        .setFontFamily("Roboto")
        .setFontSize(16)
        .setOrigin(0)
        .setDepth(this.y + 1)
        .setWordWrapWidth(380);

      Phaser.Display.Align.To.BottomCenter(
        this.contentTextDescription,
        this.contentTextTitle,
        -20,
        -20
      );

      this.scene.groupCity.add(this.contentTextDescription);

      this.contentTextDate = this.scene.add.text(0, 0, "", _style);
      this.contentTextDate
        .setFontFamily("Roboto")
        .setFontSize(16)
        .setOrigin(0)
        .setDepth(this.y + 1)
        .setWordWrapWidth(380);

      Phaser.Display.Align.To.BottomCenter(
        this.contentTextDate,
        this.contentTextDescription,
        -20,
        -20
      );

      this.scene.groupCity.add(this.contentTextDate);

      //+++++++++++++++++++++++++
      // spinner
      //+++++++++++++++++++++++++
      this.spinner = this.scene.add.sprite(0, 0, "spinner");
      this.spinner
        .setOrigin(0.5)
        .setAlpha(0)
        .setDepth(this.y + 1);
      Phaser.Display.Align.In.Center(this.spinner, this.contentImage);

      this.scene.groupCity.add(this.spinner);

      //+++++++++++++++++++++++++
      // Arrow left
      //+++++++++++++++++++++++++
      this.arrowLeft = this.scene.add.sprite(0, 0, "triangleBtn");
      this.arrowLeft
        .setOrigin(0.5)
        .setAlpha(0)
        .setScale(2)
        .setDepth(this.y + 1)
        .setAngle(-90)
        .setTint(0x222222);
      Phaser.Display.Align.In.LeftCenter(this.arrowLeft, this.contentImage);

      this.arrowLeft.on(
        "pointerdown",
        () => {
          this.arrowLeft.tint = 0x00ff00;
          this.goPrev();
        },
        this
      );
      this.arrowLeft.on(
        "pointerup",
        () => {
          this.arrowLeft.tint = 0xffffff;
        },
        this
      );
      this.scene.groupCity.add(this.arrowLeft);
      //+++++++++++++++++++++++++
      // Arrow right
      //+++++++++++++++++++++++++
      this.arrowRight = this.scene.add.sprite(0, 0, "triangleBtn");
      this.arrowRight
        .setOrigin(0.5)
        .setScale(2)
        .setAlpha(0)
        .setAngle(90)
        .setDepth(this.y + 1)
        .setTint(0x222222);
      Phaser.Display.Align.In.RightCenter(this.arrowRight, this.contentImage);

      this.arrowRight.on(
        "pointerdown",
        () => {
          this.arrowRight.tint = 0x00ff00;
          this.goNext();
        },
        this
      );
      this.arrowRight.on(
        "pointerup",
        () => {
          this.arrowRight.tint = 0xffffff;
        },
        this
      );
      this.scene.groupCity.add(this.arrowRight);

      //+++++++++++++++++++++++++
      // readmore
      //+++++++++++++++++++++++++
      this.btnGo = this.scene.add.sprite(0, 0, "readmore");
      this.btnGo
        .setOrigin(0.5)
        .setAlpha(0)
        .setDepth(this.y + 1);
      this.btnGo.on(
        "pointerdown",
        () => {
          this.goDetail();
        },
        this
      );

      Phaser.Display.Align.In.BottomCenter(
        this.btnGo,
        this.contentImage,
        0,
        54
      );

      this.scene.groupCity.add(this.btnGo);

      this.btnGoText = this.scene.add.bitmapText(
        0,
        0,
        "commodore",
        "Read More",
        16
      );
      this.btnGoText
        .setOrigin(0.5)
        .setAlpha(0)
        .setDepth(this.y + 1);
      Phaser.Display.Align.In.Center(this.btnGoText, this.btnGo);

      this.scene.groupCity.add(this.btnGoText);

      this.scene.add.existing(this);

      // let cropRect = new Phaser.Rectangle(0, 0, 400, 200);
      // this.contentImage.crop(cropRect);
      // this.filtersArr = [];
      // this.filtersArr.push(new grayShader(this.game));
      // this.filtersArr.push(new noiseShader(this.game));
      // this.filtersArr.push(new convergenceShader(this.game));
      // if (this.itemObj.isStarted) this.start();

      if (this.itemObj.isStarted) this.start();
    }

    start(): void {
      if (!isOnline()) {
        this.displayOffline();
        return;
      }

      this.guruTween.stop();
      this.guru.destroy();
      this.itemObj.isStarted = true;

      this.scene.tweens.add({
        targets: this.arrowRight,
        duration: 300,
        x: this.arrowRight.x + 40
      });

      this.scene.tweens.add({
        targets: [this.btnGo, this.arrowLeft, this.arrowRight, this.btnGoText],
        alpha: 1,
        onComplete: () => {}
      });

      this.scene.gameUtils.tweenTint(
        this.arrowLeft,
        new Phaser.Display.Color(10, 10, 10),
        new Phaser.Display.Color(255, 255, 255),
        300,
        0,
        null
      );

      this.scene.gameUtils.tweenTint(
        this.arrowRight,
        new Phaser.Display.Color(10, 10, 10),
        new Phaser.Display.Color(255, 255, 255),
        300,
        0,
        null
      );

      this.scene.tweens.add({
        targets: this.arrowLeft,
        x: this.arrowLeft.x - 40,
        duration: 300,
        onComplete: () => {
          this.isStarted = true;
          this.arrowLeft.setInteractive();
          this.arrowRight.setInteractive();
          this.btnGo.setInteractive();

          //this.scene.gameUtils.tweenTint(this.contentImage, 0x222222, 0xffffff, 1000, 0, null);
          //this.contentImage.filters = [this.filtersArr[0], this.filtersArr[1]];
          //this.contentText.filters = [this.filtersArr[1]];
          //this.spinner.filters = [this.filtersArr[1]];

          this.isAnimating = true;
          this.hideContent();
        }
      });
    }

    update(): void {
      if (this.isStarted) {
        //this.filtersArr[1].randomize();

        if (this.isAnimating) {
          this.spinner.setAngle(this.spinner.angle + 2);
        }
      }
    }

    goNext(): void {
      this.currentIndex++;
      if (this.currentIndex > this.contents.length - 1) this.currentIndex = 0;
      this.goTo();
    }
    goPrev(): void {
      if (this.isAnimating) return;
      this.currentIndex--;
      if (this.currentIndex < 0) this.currentIndex = this.contents.length - 1;
      this.goTo();
    }

    goTo(): void {
      if (this.isAnimating) return;

      this.isAnimating = true;
      // this.hideContent();
      this.hideContent();
    }

    goDetail(): void {
      //console.log("detail", this.contents[this.currentIndex]);

      window.open(this.contents[this.currentIndex].url, "_blank");
    }

    isInteractive(): boolean {
      return this.interactive;
    }

    displayOffline(): void {}

    hideContent(): void {
      if (!isOnline()) {
        this.displayOffline();
        return;
      }
      this.isAnimating = true;

      this.scene.tweens.add({
        targets: [
          this.contentTextTitle,
          this.contentTextDescription,
          this.contentTextDate,
          this.contentImage,
          this.btnGo,
          this.btnGoText
        ],
        alpha: 0,
        duration: 300
      });

      this.scene.tweens.add({
        targets: this.spinner,
        alpha: 1,
        duration: 300,
        onComplete: () => {
          this.scene.tweens.add({
            targets: [this.spinner],
            alpha: 0,
            duration: 300,
            onComplete: () => {
              this.contentImage.setTexture(
                "zeroImg" + this.contents[this.currentIndex].key
              );
              this.showContent();
            }
          });
        }
      });
    }

    showContent(): void {
      if (!isOnline()) {
        this.displayOffline();
        return;
      }
      this.scene.tweens.add({ targets: this.spinner, alpha: 0, duration: 300 });
      let _title: string = "",
        _description = "",
        _date = "";

      if (this.contents[this.currentIndex].a != undefined) {
        let _json = JSON.parse(this.contents[this.currentIndex].a);

        if (_json.link != undefined) {
          this.contents[this.currentIndex].url = _json.link;
        }

        if (_json.dd != undefined) {
          _title = "DEVDAY " + _json.dd;
          _description = this.contents[this.currentIndex].t;
        } else {
          _title = this.contents[this.currentIndex].t;
        }

        if (_json.date != undefined) _date = _json.date;
      }

      //console.log(_title,_description,_date)

      this.contentTextTitle
        .setText(_title)
        .setColor("#ffffff")
        .setFontSize(30);
      Phaser.Display.Align.In.TopCenter(this.contentTextTitle, this, null, -20);

      this.contentTextDescription.setText(_description).setFontSize(20);
      Phaser.Display.Align.To.BottomCenter(
        this.contentTextDescription,
        this.contentTextTitle,
        null,
        10
      );

      this.contentTextDate.setText(_date).setColor("#ffffff");
      Phaser.Display.Align.To.BottomCenter(
        this.contentTextDate,
        this.contentTextDescription,
        null,
        20
      );

      this.scene.tweens.add({
        targets: [
          this.contentTextTitle,
          this.contentTextDescription,
          this.contentTextDate,
          this.btnGo,
          this.btnGoText
        ],
        alpha: 1,
        duration: 500,
        onComplete: () => {
          this.isAnimating = false;
        }
      });

      this.scene.tweens.add({
        targets: this.contentImage,
        alpha: 0.8,
        duration: 300
      });
    }
  }
}
