namespace z89 {
  export class ItemsWalking extends Items {
    public itemObj: any;
    private movingTween: Phaser.Tweens.Tween;
    private movingTimer: Phaser.Time.TimerEvent;
    private behaviour: boolean = true;
    private beaming: boolean = false;

    constructor(scene: GameCity, itemObj: any) {
      super(scene, itemObj);

      this.setAlpha(0);

      this.playAnim(this.itemObj.id + "-idle");

     
      this.movingTimer = this.scene.time.delayedCall(
        500,
        scene => {
          this.beamIn();
        },
        null,
        this
      );
    }

    beamIn() {
        this.beaming=true;
      this.scene.gameItemsUtils.beamIn(this, () => {
        this.playAnim(this.itemObj.id + "-idle");

        this.beaming=false;
        this.movingTimer = this.scene.time.delayedCall(
          1000,
          () => {
            this.startPath(Phaser.Math.RND.integerInRange(1, 1));
          },
          null,
          this
        );
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

      this.movingTween = this.scene.tweens.add({
        targets: this,
        x: this.x + _walk,
        duration: _walkSpeed,

        onComplete: () => {
          this.updateItemObj(
            "x",
            this.scene.mainCamera.scrollX * 0.095 + this.x
          );
          this.setIdle(true);
          this.playAnim(this.itemObj.id + "-idle");

          this.movingTimer = this.scene.time.delayedCall(
            Phaser.Math.RND.integerInRange(5000, 5000),
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
        this.beaming=true;
        this.scene.gameItemsUtils.beamOut(this, () => {
            this.beaming=false;
          let _jump: number = Phaser.Math.RND.integerInRange(-500, 500);
          this.updateItemObj(
            "x",
            this.scene.mainCamera.scrollX * 0.095 + (this.x + _jump)
          );
          this.x = this.x + _jump;
          this.beamIn();
        });
      } else {
        if (this.x > this.itemObj.walkRange.end) {
          _direction = 0;
        } else if (this.x < this.itemObj.walkRange.start) {
          _direction = 1;
        }

        this.startPath(_direction);
      }
    }


    checkYOffset():boolean{

        if(this.scene.player.y<this.y){

            if(this.y-this.scene.player.y<this.itemObj.insight.offsetY) return true; 

        }else{

            if(this.scene.player.y-this.y<this.itemObj.insight.offsetY) return true; 
        }
      
        return false;
    }

    update() {
      if (!this.beaming) {
        if (this.itemObj.insight.distance > 0) {
          if (
            (Math.round(
              Phaser.Math.Distance.Between(
                this.x,
                this.y,
                this.scene.player.x,
                this.scene.player.y
              )
            ) < this.itemObj.insight.distance) && this.checkYOffset()  
          ) {
            if (this.behaviour) {
              this.behaviour = !this.behaviour;

              switch (this.itemObj.insight.behaviour) {
                case "run":
                  break;

                case "jump":
                  break;

                case "stop":

            
                  console.log("stop",this.y,this.scene.player.y,this.checkYOffset());
                  if (this.movingTween != undefined) this.movingTween.stop();
                  if (this.movingTimer != undefined) this.movingTimer.remove(false);
                  this.updateItemObj(
                    "x",
                    this.scene.mainCamera.scrollX * 0.095 + this.x
                  );
                  this.setIdle(true);
                  this.playAnim(this.itemObj.id + "-idle");
                  if (this.scene.player.x <= this.x) {
                    this.turnLeft();
                  } else {
                    this.turnRight();
                  }
                  break;
              }
            }
          } else {
            //console.log("far");

            if (!this.behaviour) {
              console.log("restart");
              this.nextDirection();
            }

            this.behaviour = true;
          }
        }

        if (this.y > 660 && this.isIdle()) {
          this.setX(this.scene.mainCamera.scrollX * -0.095 + this.itemObj.x);
        }
      }
    }
  }
}
