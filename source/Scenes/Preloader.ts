namespace z89 {
  export class Preloader extends Phaser.Scene {
    body: HTMLElement;

    constructor(test) {
      super({
        key: "Preloader",
        pack: {
          files: [
            {
              type: "plugin",
              key: "rexwebfontloaderplugin",
              url: "/js/libs/webfonts.plugin.js",
              start: true
            }
          ]
        }
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

        gameData.assets.sounds.forEach(element => {
          var _sound: Phaser.Sound.BaseSound = this.sound.add(element.name);
          pushSound(_sound);
        });

        this.body.className = "";
        this.scene.start("GameCity");
        console.log("load assetts complete");
      });

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

      if (isOnline()) {
        getZero89Data().forEach(element => {
          this.load.image(
            "zeroImg" + element.key,
            "http://www.zero89.it/" + element.c
          );
        });

        this.plugins.get("rexwebfontloaderplugin").addToScene(this);

        var config = {
          google: {
            families: ["Roboto"]
          }
        };
        this.load.rexWebFont(config);
      }

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
