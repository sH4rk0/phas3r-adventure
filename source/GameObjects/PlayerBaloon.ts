namespace z89 {
  export class PlayerBaloon extends Phaser.GameObjects.Container {
    scene: GameCity;

    private baloonText: Phaser.GameObjects.Text;
    private baloonBg: Phaser.GameObjects.Image;
    private baloonBorder: Phaser.GameObjects.Image;
    private baloonPin: Phaser.GameObjects.Image;

    constructor(scene: GameCity) {
      super(scene, 0, 0);

      this.setDepth(1000).setAlpha(0);

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




  /*

    public showBaloonExtra(_obj: any) {

      

      if (_obj == undefined) return;

      let _btn: Phaser.GameObjects.Sprite;
      let _btnText: Phaser.GameObjects.Text;
      let _nextPos: number = 0;
      let _totHeight: number = 0;
      _obj.options.forEach((element, index) => {
        _btn = this.scene.add.sprite(0, _nextPos, "forkBtn");

        _btn.setOrigin(0.5, 1);
        _btn.tint = 0x0d3700;

        _btn.on(
          "pointerdown",
          (a, b, c) => {
            if (c.link != undefined) {
              window.open(c.link, "_blank");
            }
          },
          this
        );

        _btnText = this.scene.add.text(0, _nextPos, element.option, {
          fontFamily: "Arial",
          fontSize: 16
        });
       

        _btnText.setOrigin(0.5, 1).setTint(0x00ff00);
        _btn.height = _btnText.height + 20;
        _nextPos = _nextPos - (_btnText.height + 20) - 20;
        _totHeight = _totHeight + _btnText.height + 40;
        this.add(_btn);
        this.add(_btnText);
      });

      if (_obj.answer != undefined && _obj.answer.length > 0) {
        this.baloonText.text =
          _obj.answer[
            Phaser.Math.RND.integerInRange(0, _obj.answer.length - 1)
          ];
        this.baloonText.y = _nextPos + 10;
        _totHeight += this.baloonText.height + 15;
      }

      this.baloonBg.height = _totHeight + 15;
      this.x = this.scene.player.x;
      this.y = this.scene.player.y - this.scene.player.height - 50;

      this.scene.tweens.add({
        target: this,
        y: this.y + 10,
        alpha: 1,
        duration: 500,
        repeat: -1
      });

      

    }*/

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
      this.baloonText.y = 0;
      this.alpha = 0;
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
