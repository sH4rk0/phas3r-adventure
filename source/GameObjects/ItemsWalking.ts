namespace z89 {
  export class ItemsWalking extends Items {
    public itemObj: any;
    private movingTween: Phaser.Tweens.Tween;
    private movingTimer: Phaser.Time.TimerEvent;
    private behaviour: boolean = true;
    private beaming: boolean = false;
    private distanceUpdate: boolean = true;
    private tweenBreak: boolean = false;


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
      this.beaming = true;
      this.scene.gameItemsUtils.beamIn(this, () => {
        this.beaming = false;
        this.movingTimer = this.scene.time.delayedCall(
          1000,
          () => {
            this.nextDirection();
          },
          null,
          this
        );
      });
    }

    setDestinationY(bothSide: boolean): number {
      if (!bothSide) {
        if (this.y < 680) {
          return Phaser.Math.RND.integerInRange(605, 615);
        } else {
          return Phaser.Math.RND.integerInRange(680, 720);
        }
      } else {
        if (Phaser.Math.RND.integerInRange(0, 1) == 0) {
          return Phaser.Math.RND.integerInRange(605, 615);
        } else {
          return Phaser.Math.RND.integerInRange(680, 720);
        }
      }
    }

    checkBounds(): boolean {
      if (
        this.x < this.itemObj.walkRange.start ||
        this.x > this.itemObj.walkRange.end
      )
        return true;
      return false;
    }

    startPath(direction: number): void {
        //console.log("startpath")
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
        y: this.setDestinationY(false),
        duration: _walkSpeed,
        onUpdate: () => {

          this.setDepth(this.y);

          if (this.checkBounds() && this.itemObj.insight.behaviour!="runner") {
            //console.log("startpath update checkBounds");
            if (this.movingTween != undefined) this.movingTween.stop();
            if (this.movingTimer != undefined) this.movingTimer.remove(false);
            this.setXPosition(this.x);

            if (this.x < this.itemObj.walkRange.start) {
              
              this.turnRight();
              this.nextDirection(1);
            } else {
                
              this.turnLeft();
              this.nextDirection(0);
            }
          }
        },

        onComplete: () => {
          //  console.log("startpath complete");
           

               


                  this.setIdle(true);
                  this.playAnim(this.itemObj.id + "-idle"); 
                  this.updateItemObj(
                    "x",
                    this.scene.mainCamera.scrollX * 0.095 + this.x
                  ); 

                  if(this.itemObj.insight.behaviour=="runner" && this.checkBounds()){

                    this.beaming = true;
                    
                    this.scene.gameItemsUtils.beamOut(this, () => {
                       
                        this.setXPosition(Phaser.Math.RND.integerInRange(this.itemObj.walkRange.start, this.itemObj.walkRange.end));
                       
                        if (Phaser.Math.RND.integerInRange(0, 1)==0) {
                          this.setYPosition(610);
                      
                        } else {
                          this.setYPosition(700);
                        }
              
                        this.beamIn();
                      });

                  

                  }else{


                 
                  
                  
        
                  this.movingTimer = this.scene.time.delayedCall(
                    Phaser.Math.RND.integerInRange(1000, 1500),
                    scene => {
                      this.nextDirection();
                    },
                    null,
                    this
                  );

                }
           
         
        }
      });
    }

    setXPosition(value:number):void{

        this.updateItemObj( "x", this.scene.mainCamera.scrollX * 0.095 + (value));
        this.setX(value);

    }

    setYPosition(value:number):void{

        this.updateItemObj( "y", value);
        this.setY(value).setDepth(value);

    }

    nextDirection(_setDirection?: number): void {
        //console.log("nextDirection",_setDirection);
      let _action: number = Phaser.Math.RND.integerInRange(0, 100);
      let _direction: number = Phaser.Math.RND.integerInRange(0, 1);

      if (_setDirection != undefined) _direction = _setDirection;

      if (_action > 100 - this.itemObj.jumpChance && _setDirection==undefined) {

        //console.log("nextDirection jump")
        this.beaming = true;
        this.setIdle(true);
        this.playAnim(this.itemObj.id + "-idle");

        this.scene.gameItemsUtils.beamOut(this, () => {
          this.beaming = false;
          this.setXPosition(Phaser.Math.RND.integerInRange(this.itemObj.walkRange.start, this.itemObj.walkRange.end));
         
          if (_direction == 0) {
            this.setYPosition(610);
        
          } else {
            this.setYPosition(700);
          }

          this.beamIn();
        });

      } else {
        //console.log("nextDirection startPath")
        this.startPath(_direction);

      }
    }

    checkYOffset(): boolean {
      if (this.scene.player.y < this.y) {
        if (this.y - this.scene.player.y < this.itemObj.insight.offsetY)
          return true;
      } else {
        if (this.scene.player.y - this.y < this.itemObj.insight.offsetY)
          return true;
      }
      return false;
    }

    update() {

       // if(this.itemObj.insight.behaviour=="runner") console.log(this.x);
    

      if (
        !this.beaming &&
        this.itemObj.insight.distance > 0 &&
        this.distanceUpdate
      ) {
        if (
          Math.round(
            Phaser.Math.Distance.Between(
              this.x,
              this.y,
              this.scene.player.x,
              this.scene.player.y
            )
          ) < this.itemObj.insight.distance &&
          this.checkYOffset()
        ) {
          if (this.behaviour) {
            this.behaviour = !this.behaviour;

            if (this.movingTween != undefined) this.movingTween.stop();
            if (this.movingTimer != undefined) this.movingTimer.remove(false);
            this.updateItemObj(
              "x",
              this.scene.mainCamera.scrollX * 0.095 + this.x
            );

            switch (this.itemObj.insight.behaviour) {

              case "runner":
              this.distanceUpdate = false;
             
             /* if (this.scene.player.x <= this.x) {
                this.turnRight();
                this.startPath(1);
              } else {
                this.turnLeft();
                this.startPath(0);
              }
              
              return;*/
              

                this.setIdle(false);
                let _run: number = 500;
                let _runSpeed: number = 1500;

                if (this.scene.player.x <= this.x) {
                  this.turnRight();
                } else {
                  this.turnLeft();
                  _run = -500;
                }

                this.playAnim(this.itemObj.id + "-running");

                this.movingTween = this.scene.tweens.add({
                  targets: this,
                  x: this.x + _run,
                  y: this.setDestinationY(false),
                  duration: _runSpeed,
                  onUpdate: () => {
                    this.setDepth(this.y);
                   
                    
                  },
                  onComplete: () => {
                    this.distanceUpdate = true;
                  }
                 
                });

                break;

              case "jumper":
                
                this.distanceUpdate = false;
                this.setIdle(true);
                this.playAnim(this.itemObj.id + "-idle");

                this.beaming = true;

                this.scene.gameItemsUtils.beamOut(this, () => {
                  let _jump: number;
                  
                  if (this.scene.player.x <= this.x) {
                    this.turnRight();
                    _jump = -400;
                  } else {
                    this.turnLeft();
                    _jump = 400;
                  }

                  this.setYPosition(this.setDestinationY(true));

                  if((this.scene.player.x + _jump)<this.itemObj.walkRange.start){

                    this.setXPosition(this.itemObj.walkRange.start);

                  }else if((this.scene.player.x + _jump)>this.itemObj.walkRange.end){

                    this.setXPosition(this.itemObj.walkRange.end);

                  }else{

                    this.setXPosition(this.scene.player.x + _jump);
                  }

                  this.scene.gameItemsUtils.beamIn(this, () => {
                    this.beaming = false;
                    this.distanceUpdate = true;
                    this.behaviour = true;
                    this.nextDirection();
                  });
                });

                break;

              case "idler":
                // console.log("stop",this.y,this.scene.player.y,this.checkYOffset());

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
           // console.log("restart");
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
