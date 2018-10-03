namespace z89 {
  export class Viewer extends Phaser.GameObjects.Container {
    scene: GameCity;

    private image: Phaser.GameObjects.Image;
    private images: Array<any>;
    private arrowLeft: Phaser.GameObjects.Sprite;
    private arrowRight: Phaser.GameObjects.Sprite;
    private layer: Phaser.GameObjects.Sprite;
    private currentIndex: number = 0;
    private text: Phaser.GameObjects.BitmapText;
    private textLayer: Phaser.GameObjects.Sprite;
    private isAnim: boolean = false;
    private fontFamily: string = "commodore";
    private callback: any;

    constructor(scene: GameCity) {
      super(scene, -1080, 0);
      this.scene = scene;
      this.setScrollFactor(0).setAlpha(0);

      this.layer = this.scene.add.sprite(540, 360, "menu-phone-bg");
      this.layer
        .setInteractive()
        .setAlpha(0.75)
        .setScrollFactor(0)
        .addListener("pointerdown", () => {
          this.hide();
        });

      this.textLayer = this.scene.add.sprite(540, 680, "chapterTitleBg");
      this.textLayer.setAlpha(0.85);

      this.text = this.scene.add
        .bitmapText(540, 640, this.fontFamily, "", 20)
        .setOrigin(0.5, 0)
        .setTint(0x00ff00)
        .setDepth(3000)
        .setScrollFactor(0);

      this.add(this.layer);
      this.arrowLeft = this.scene.add.sprite(100, 360, "triangleBtn");
      this.image = this.scene.add.image(540, 360, "");
      this.arrowLeft
        .setInteractive()
        .setAngle(-90)
        .setScale(2)
        .setScrollFactor(0);
      this.arrowLeft.addListener("pointerdown", () => {
        this.prevImage();
      });
      this.arrowRight = this.scene.add.sprite(980, 360, "triangleBtn");
      this.arrowRight
        .setInteractive()
        .setAngle(90)
        .setScale(2)
        .setScrollFactor(0);
      this.arrowRight.addListener("pointerdown", () => {
        this.nextImage();
      });

      this.add([
        this.layer,
        this.image,
        this.arrowLeft,
        this.arrowRight,
        this.textLayer,
        this.text
      ]);
      this.scene.add.existing(this);
    }

    prevImage(): void {
      if (this.isAnim) return;
      this.currentIndex--;
      if (this.currentIndex < 0) this.currentIndex = this.images.length - 1;
      console.log("prev", this.currentIndex);
      this.displayImage();
    }

    nextImage(): void {
      if (this.isAnim) return;
      this.currentIndex++;
      if (this.currentIndex > this.images.length - 1) this.currentIndex = 0;
      console.log("next", this.currentIndex);
      this.displayImage();
    }

    displayImage(): void {
      this.isAnim = true;

      this.scene.tweens.add({
        targets: this.text,
        duration: 100,
        alpha: 0,
        onComplete: () => {
          this.text.setText("");
        }
      });
      this.scene.tweens.add({
        targets: this.image,
        scaleY: 0,
        scaleX: 0,
        alpha: 0,
        ease: null,
        duration: 200,
        onComplete: () => {
          if (this.images[this.currentIndex].text != undefined)
            this.text.setText(this.images[this.currentIndex].text);
          else this.text.setText("");

          this.image.setTexture(this.images[this.currentIndex].image);
          this.scene.tweens.add({
            targets: [this.image, this.text],
            scaleY: 1,
            scaleX: 1,
            alpha: 1,
            ease: "Bounce.easeOut",
            duration: 500,
            onComplete: () => {
              this.isAnim = false;
            }
          });
        }
      });
    }

    show(images: Array<any>, callback?: any): void {
      this.images = images;
      if (callback != undefined) this.callback = callback;
      if (this.images.length == 1) {
        this.arrowLeft.setAlpha(0);
        this.arrowLeft.setAlpha(0);
      }
      this.setX(0);
      this.scene.disableInteraction();
      this.image.setTexture(images[0].image);
      if (this.images[this.currentIndex].text != undefined)
        this.text.setText(this.images[this.currentIndex].text).setAlpha(1);
      else this.text.setText("").setAlpha(1);

      this.scene.tweens.add({
        targets: this,
        scaleY: 1,
        scaleX: 1,
        alpha: 1,
        ease: null,
        duration: 200,
        onComplete: () => {}
      });
    }

    hide(): void {
      this.currentIndex = 0;
      this.scene.enableInteraction();
      this.scene.tweens.add({
        targets: [this, this.text],
        scaleY: 1,
        scaleX: 1,
        alpha: 0,
        ease: null,
        duration: 200,
        onComplete: () => {
          this.setX(-1080);
          if (this.callback != undefined) this.callback();
        }
      });
    }
  }
}
