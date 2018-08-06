
module z89 {
export class Boot extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Boot'
        });
    }

    preload() {
     


      var graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0xffff00, 1);
      graphics.fillRoundedRect(0, 0, 265, 50, 10);
      graphics.generateTexture('roundedBtn',265,50);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 1080, 720);
      graphics.generateTexture('menu-phone-bg',1080,720);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 250, 50);
      graphics.generateTexture('menuActionBtn',250,50);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 300, 720);
      graphics.generateTexture('menuAction',300,720);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0x000000, 1);
      graphics.fillRect(0, 0, 340, 50);
      graphics.generateTexture('baloonBg',340,50);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0xffffff, 1);
      graphics.fillRect(0, 0, 340, 5);
      graphics.generateTexture('baloonBorder',340,5);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0xffffff, 1);
      graphics.fillTriangle(0, 12.5, 25, 12.5,12.5, 25);
      graphics.generateTexture('baloonPin',25,25);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0xffffff, 1);
      graphics.fillRect(0,0,50,126);
      graphics.generateTexture('playerHitArea',50,126);
      graphics.clear();

      graphics =this.make.graphics({x: 0, y: 0, add: false});
      graphics.fillStyle(0xffffff, 1);
      graphics.fillRoundedRect(0,0,300,50,10);
      graphics.generateTexture('forkBtn',300,50);
      graphics.clear();

      

      

     
		


       
    

        console.log("Boot:preload")
    }

    create() {

        console.log("Boot:create");
        this.scene.start('Preloader');
    }
}

}

