namespace z89 {
  export class Preloader extends Phaser.Scene {
    body: HTMLElement;

    constructor(test) {
      super({
        key: "Preloader"
      });
    }

    preload() {
	  console.log("Preloader:preload");
	  
	  this.loadAssets();

    }

    init() {
      this.body = document.getElementsByTagName("body")[0];
      
    }

    create() {
	  console.log("Preloader:create");
	 
    }

    loadAssets(): void {
      this.body.className = "loading";

      this.load.on("start", () => {
        //progress.destroy();

        console.log("load start");
      });

      this.load.on("fileprogress", (file, value) => {
        //console.log(file, value);
        /*if (file.key === 'goldrunner')
				{
					progress.clear();
					progress.fillStyle(0xffffff, 0.4);
					progress.fillRect(450, 500 - (value * 400), 200, value * 400);
				}
				*/
      });

      this.load.on("complete", () => {
        //progress.destroy();
		this.body.className = "";
		this.scene.start('GameCity');
        console.log("load assetts complete");
      });

      //this.load.script("webfont", "js/libs/webfonts.js");

      //Assets Load
      //--------------------------
      // IMAGES
      gameData.assets.images.forEach(element => {
		 // console.log(element);
        this.load.image(element.name, element.path);
      });

      // SPRITESHEETS
      gameData.assets.spritesheets.forEach(element => {
        this.load.spritesheet(element.name, element.path, {
          frameWidth: element.width,
          frameHeight: element.height,
          endFrame: element.frames
        });
      });

      //bitmap fonts
      gameData.assets.bitmapfont.forEach(element => {
        this.load.bitmapFont(element.name, element.imgpath, element.xmlpath);
      });

      // SOUNDS
      gameData.assets.sounds.forEach(element => {
        this.load.audio(element.name, element.paths);
      });

      /*this.load.shader("noise", "js/game/fragments/noise.frag");
      this.load.shader("convergence", "js/game/fragments/convergence.frag");
      this.load.shader("gray", "js/game/fragments/gray.frag");
      this.load.shader("ripple", "js/game/fragments/ripple.frag");
      this.load.shader("ripple2", "js/game/fragments/ripple2.frag");
      this.load.shader("test", "js/game/fragments/test.frag");
	  this.load.shader("water", "js/game/fragments/water.frag");
	  */
    }
  }
}
