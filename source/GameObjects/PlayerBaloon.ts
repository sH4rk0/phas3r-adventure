namespace z89 {
  export class PlayerBaloon extends Phaser.GameObjects.Container {
    scene: GameCity;

    private baloonText: Phaser.GameObjects.Text;
    private baloonBg: Phaser.GameObjects.Image;
    private baloonBorder: Phaser.GameObjects.Image;
    private baloonPin: Phaser.GameObjects.Image;

    constructor(scene: GameCity) {
      super(scene, 0, 0);

      this.setAlpha(0);

      this.baloonBg = this.scene.add.image(0, 20, "baloonBg");
      this.baloonBg
        .setOrigin(0.5, 1)
        .setAlpha(0.8)
     

      this.baloonBorder = this.scene.add.image(0, 20, "baloonBorder");
      this.baloonBorder.setOrigin(0.5, 1).setTint(0x00ff00);
     

      this.baloonPin = this.scene.add.image(0, 30, "baloonPin");
      this.baloonPin.setOrigin(0.5, 1).setTint(0x00ff00);
     

      this.baloonText = this.scene.add.text(0, 0, "", {
        fontFamily: "Arial",
        fontSize: 20
      });

      this.baloonText
        .setWordWrapWidth(320)
        .setTint(0x00ff00)
        .setOrigin(.5)
        .setDepth(2001);

      this.add([this.baloonBg,this.baloonBorder,this.baloonPin,this.baloonText]);

      this.scene.add.existing(this);
    }

    public showBaloon(_text: string) {

        
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

    public hideBaloon() {

      this.scene.tweens.add({
        targets: this,
        y: this.y - 10,
        alpha: 0,
        duration: 200
      });

    }

    fixSize() {
      this.setX(this.scene.player.x);
      this.setY(this.scene.player.y - this.scene.player.height - 50);
      this.baloonBg.setScale(1,((this.baloonText.getBounds().height+20)/50));
       
      var bound=this.baloonBg.getBounds();
      

      //console.log(this.baloonText.getBounds().y-this.baloonBg.getBounds().y);

     
      this.baloonText.setY(this.baloonText.y-(this.baloonText.getBounds().y-this.baloonBg.getBounds().y)+10);

    }
  }
}
