namespace z89 {
  export class Boot extends Phaser.Scene {
    constructor(test) {
      super({
        key: "Boot"
      });
    }

    preload() {

      var graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0xffff00, 1);
      graphics.fillRect(0, 0, 265, 50);
      graphics.generateTexture("roundedBtn", 265, 50);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 1080, 720);
      graphics.generateTexture("menu-phone-bg", 1080, 720);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 40, 40);
      graphics.generateTexture("keyboardKey", 40, 40);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 250, 50);
      graphics.generateTexture("menuActionBtn", 250, 50);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 300, 720);
      graphics.generateTexture("menuAction", 300, 720);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 340, 50);
      graphics.generateTexture("baloonBg", 340, 50);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0xffffff, 1);
      graphics.fillRect(0, 0, 340, 5);
      graphics.generateTexture("baloonBorder", 340, 5);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0xffffff, 1);
      graphics.fillTriangle(0, 12.5, 25, 12.5, 12.5, 25);
      graphics.generateTexture("baloonPin", 25, 25);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x00ff00, 1);
      graphics.fillRect(0, 0, 300, 50);
      graphics.generateTexture("forkBtn", 300, 50);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x00ff00, 1);
      graphics.fillRect(0, 0, 50, 50);
      graphics.generateTexture("btn", 50, 50);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x00ff00, 1);
      graphics.fillRect(0, 0, 316, 52);
      graphics.generateTexture("skill", 316, 52);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 640, 400);
      graphics.generateTexture("terminale", 640, 400);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x206000, 1);
      graphics.fillRect(0, 0, 300, 20);
      graphics.generateTexture("phone-options", 300, 20);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.lineStyle(10, 0x00ff00, 1);
      graphics.strokeRect(0, 0, 380, 80);
      graphics.generateTexture("guru-meditation", 380, 80);
      graphics.clear();

      graphics = this.make.graphics({ x: 0, y: 0, add: false });
      graphics.fillStyle(0x000000, .75);
      graphics.fillRect(0, 0, 1080, 200);
      graphics.generateTexture("chapterTitleBg", 1080, 200);
      graphics.clear();

      

      var graphics2 = this.make.graphics({ x: 0, y: 0, add: false });
      graphics2.fillRect(0, 0, 50, 126);
      graphics2.generateTexture("playerHitArea", 50, 126);
      graphics2.clear();

     
  
      

      this.load.bitmapFont("commodore", "assets/fonts/64_0.png", "assets/fonts/64.xml");
			this.load.bitmapFont("commodore2", "assets/fonts/64x32_0.png", "assets/fonts/64x32.xml");
			this.load.spritesheet("cursor", "assets/images/game/terminal/cursor.png",{
        frameWidth:16,
        frameHeight: 16,
        endFrame: 2
      } );


      if (this.game.device.input.touch && (this.game.device.os.iOS || this.game.device.os.android || this.game.device.os.windowsPhone)) {
				setDevice(true);
			}
			else {
				setDevice(false);
			}

      console.log("Boot:preload");
    }

    create() {
      console.log("Boot:create");
      this.scene.start("Preloader");
    }
  }
}
