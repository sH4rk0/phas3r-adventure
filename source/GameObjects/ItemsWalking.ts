namespace z89 {
  export class ItemsWalking extends Items {
    public itemObj: any;

    constructor(scene: GameCity, itemObj: any) {
      super(scene, itemObj);

      this.setAlpha(0);

      this.playAnim(this.itemObj.id + "-idle");

      this.scene.time.delayedCall(
        500,
        scene => {
          this.beamIn();
        },
        null,
        this
      );
    }

    beamIn() {
      this.scene.gameItemsUtils.beamIn(this, () => {

        this.playAnim(this.itemObj.id + "-idle");
        this.scene.time.delayedCall(1000,()=>{ this.startPath(Phaser.Math.RND.integerInRange(1,1));},null,this);
      });
    }

 
    startPath(direction: number): void {
      let _walk: number = Phaser.Math.RND.integerInRange(200, 500);
      let _walkSpeed: number = _walk * 10;
      if (direction == 0) {
        this.turnLeft();
        _walk = _walk * -1;
      } else {
        this.turnRight();
      }

      this.setIdle(false);
      this.playAnim(this.itemObj.id + "-walking");

      this.scene.tweens.add({
        targets: this,
        x: this.x + _walk,
        duration: _walkSpeed,
        onComplete: () => {

          this.updateItemObj("x", (this.scene.mainCamera.scrollX * 0.095) + this.x);
          this.setIdle(true);
          this.playAnim(this.itemObj.id + "-idle");

          this.scene.time.delayedCall(
            Phaser.Math.RND.integerInRange(500, 1500),
            scene => {
              this.nextDirection();
            },
            null,
            this
          );
        }
      });
    }

    nextDirection(): void {


      let _action: number = Phaser.Math.RND.integerInRange(0, 100);
      let _direction: number = Phaser.Math.RND.integerInRange(0, 1);

      if (_action > 80) {
        this.scene.gameItemsUtils.beamOut(this, () => {  
        
            let _jump:number=Phaser.Math.RND.integerInRange(-500,500)
            this.updateItemObj("x", (this.scene.mainCamera.scrollX * 0.095) + (this.x + (_jump)));
            this.x=this.x+(_jump);
            this.beamIn();


        });

      } else {


        if (this.x>3670){_direction=0;}else if(this.x<0){_direction=1}

        this.startPath(_direction);
      }
    }

   
  }
}
