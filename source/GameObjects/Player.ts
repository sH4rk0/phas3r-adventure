namespace z89 {
  export enum PlayerStates {
    IDLE,
    WALKING,
    RUNNING,
    JUMPING
  }
  export enum PlayerDirection {
    LEFT,
    RIGHT,
    UP,
    DOWN,
    NONE
  }

  export class Player extends Phaser.GameObjects.Sprite {
    scene: GameCity;
    private yMin: number = 654 - 48;
    private yMax: number = 720;
    private direction: PlayerDirection = PlayerDirection.RIGHT;
    private playerState: PlayerStates = PlayerStates.IDLE;
    private playerTween: Phaser.Tweens.Tween;
    private money: number = 10;
    private inventory: Array<string> = [];
    private intersect: boolean;
    private myArea: Phaser.GameObjects.Sprite;

    private illogicText: Array<string> = [
      z89.getLabel(19),
      z89.getLabel(20),
      z89.getLabel(13),
      z89.getLabel(21)
    ];

    

    private customPipeline:any;

    constructor(scene: GameCity) {
      super(scene, 300, 650 - 48, "player");

      //this.setPipeline("testPipeline");
      //this.pipeline.setFloat2('uResolution', this.width, this.height);
      
      this.scene = scene;

      let config: AnimationConfig = {
        key: "player-idle",
        frames: scene.anims.generateFrameNumbers("player", {
          start: 8,
          end: 11
        }),
        frameRate: 5,
        repeat: -1,
        repeatDelay: 0
      };
      this.anims.animationManager.create(config);

      config = {
        key: "player-walk",
        frames: scene.anims.generateFrameNumbers("player", {
          start: 0,
          end: 7
        }),
        frameRate: 7,
        repeat: -1,
        repeatDelay: 0
      };
      this.anims.animationManager.create(config);

      config = {
        key: "player-pickdrop",
        frames: scene.anims.generateFrameNumbers("player", {
          start: 16,
          end: 19
        }),
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      };
      this.anims.animationManager.create(config);

      config = {
        key: "player-use",
        frames: scene.anims.generateFrameNumbers("player", {
          frames: [19, 20, 21, 20, 19]
        }),
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      };
      this.anims.animationManager.create(config);

      this.on(
        "animationcomplete",
        () => {
          this.play("player-idle");
        },
        this
      );

      config = {
        key: "beam",
        frames: this.scene.anims.generateFrameNumbers("beam", {
          start: 0,
          end: 11
        }),
        frameRate: 15,
        repeat: -1,
        repeatDelay: 0
      };
      scene.anims.create(config);

      this.play("player-idle");

      this.setOrigin(0.5, 1)
        .setScale(1)
        .setY(608);

      /*.setInteractive(new Phaser.Geom.Rectangle(0,0,50,126),Phaser.Geom.Rectangle.Contains).setName("player").on('pointerdown',()=>{

                if(this.scene.isInteractionDisabled()) return;
                this.scene.playerMenu.toggle();

                });
                */

      this.myArea = this.scene.add.sprite(0, 0, "playerHitArea");
      this.myArea.setInteractive();
      this.myArea.setAlpha(0.01);
      this.myArea.on(
        "pointerdown",
        () => {
          if (this.scene.isInteractionDisabled()) return;
          this.scene.playerMenu.toggle();
        },
        this
      );

      scene.add.existing(this);
    }

    

    goTo(_x: number, _y: number, _item?: Items): void {
     
       // console.log(_x, _y, _item, this.scene.currentItem);
   

      this.hideBaloon();

      if (
        this.scene.conversationBaloon.isConversationActive() &&
        (_x != this.x || _y != this.y - 5)
      ) {
        this.scene.conversationBaloon.stopConversation();
      }


      if(   (_item != undefined || _item != null) 
      
          && (this.scene.currentItem != undefined || this.scene.currentItem != null)
          
          && ( this.scene.currentItem.itemObj.id == _item.itemObj.id))  return;


      // this.scene.playerActions.hide();

      /*
      if (this.scene.currentItem == undefined && _item == undefined)
        this.scene.playerActions.hide();
 */
      if (
        this.scene.playerActions.IsOpen() &&
       // (this.scene.currentItem == undefined || this.scene.currentItem == null) &&
        (_item == undefined || _item == null)
        //&& this.scene.currentItem.itemObj.id != _item.itemObj.id
      ){ this.scene.playerActions.hide();}
       

    

       

        if (this.playerTween != null) {
          
          this.playerTween.stop();

        }else{

          this.play("player-walk");
        }

        if (_item == undefined) this.scene.currentItem = null;

        if (this.direction == PlayerDirection.NONE) {
        }
        if (_x > this.x) {
          if (this.direction != PlayerDirection.RIGHT) this.changeDirection();
        } else {
          if (this.direction != PlayerDirection.LEFT) this.changeDirection();
        }

        this.intersect = false;

        let _intersect: any = this.checkIntersect({ x1: _x, y1: _y + 1 });

        if (_intersect.point != null) {
          let _offset: number = 0;
          if (this.y < _intersect.point.y) {
            _offset = -5;
          } else {
            _offset = +5;
          }
          _x = _intersect.point.x;
          _y = _intersect.point.y + _offset;
          _item = null;
          this.intersect = true;
        }

        if (_y > this.yMax) _y = this.yMax;
        if (_y < this.yMin) _y = this.yMin;

        let distance: number;
        let distanceX: number = Phaser.Math.Distance.Between(this.x, 0, _x, 0);
        let distanceY: number = Phaser.Math.Distance.Between(0, this.y, 0, _y);

        if (distanceX > distanceY) {
          distance = distanceX;
        } else {
          distance = distanceY;
        }

        this.playerTween = this.scene.tweens.add({
          targets: this,
          x: _x,
          y: _y + 1,
          ease: null,
          duration: 7.5 * distance,
          loop:0,
          onCompleteParams: [this.intersect],
          onComplete: () => {
            this.depth = this.y;
            this.playerTween.stop();
            this.playerTween=null;
            this.scene.saveGameObj.updatePlayerPosition(this.x, this.y);
            this.play("player-idle");

          
            if (_item != null) {
              this.scene.setCurrentItem(_item);

              if (this.x < _item.x) {
                if (this.direction == PlayerDirection.LEFT)
                  this.changeDirection();
              } else {
                if (this.direction == PlayerDirection.RIGHT)
                  this.changeDirection();
              }

              this.scene.doActionSequence(_item);

              if (_item.isInteractive()) this.scene.playerActions.show();
            }

            if (_intersect[0]) this.showBaloon(z89.getLabel(11));
          }
        });
      


    }

    changeDirection(): void {
      if (this.direction == PlayerDirection.RIGHT) {
        this.turnLeft();
      } else {
        this.turnRight();
      }
    }

    illogicAction() {
      this.showBaloon(
        this.illogicText[
          Phaser.Math.RND.integerInRange(0, this.illogicText.length - 1)
        ]
      );
    }

    turnLeft(): void {
      this.scaleX = -1;
      this.direction = PlayerDirection.LEFT;
    }

    turnRight(): void {
      this.scaleX = 1;
      this.direction = PlayerDirection.RIGHT;
    }

    checkIntersect(_toPosition: any): any {
      let _obj: any = { point: null };

      let line1: Phaser.Geom.Line = new Phaser.Geom.Line(
        _toPosition.x1,
        _toPosition.y1,
        this.x,
        this.y
      );
      let line2: Phaser.Geom.Line;
      let intersectPoint: Phaser.Geom.Point = new Phaser.Geom.Point();

      this.scene.groupAll.children.each(sprite => {
        if (
          sprite.name != "player" &&
          sprite.itemObj != undefined &&
          sprite.itemObj.checkIntersect
        ) {
          line2 = new Phaser.Geom.Line(
            sprite.x - sprite.width / 2 - 10,
            sprite.y,
            sprite.x + sprite.width / 2 + 10,
            sprite.y
          );
          intersectPoint.setTo(0, 0);

          if (Phaser.Geom.Intersects.LineToLine(line1, line2, intersectPoint)) {
           // console.log(intersectPoint);
            _obj.point = intersectPoint;
          }
        }
      }, this);

      return _obj;
    }

    public blinkTo(_x: number) {
      if (this.scene.conversationBaloon.isConversationActive()) {
        this.scene.conversationBaloon.stopConversation();
      }

      this.hideBaloon();
      this.scene.playerActions.hide();
      this.beamOut(_x);
    }

    beamIn(toX: number) {
      this.direction = PlayerDirection.RIGHT;
      this.y = 608;
      this.x = toX;
      this.alpha = 0;

      let beam: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        toX,
        0,
        "beam"
      );
      beam
        .setScale(0.5, this.beamH())
        .setOrigin(0.5, 0)
        .setAlpha(0)
        .setDepth(this.y)
        .play("beam");



      let color2 = new Phaser.Display.Color(255, 255, 255);
      let color1 = new Phaser.Display.Color(0, 255, 0);
      this.scene.gameUtils.tweenTint(this, color1, color2, 300, 300, null);

      let tweenBeam: Phaser.Tweens.Tween = this.scene.tweens.add({
        targets: beam,
        scaleX: 1,
        alpha: 0.5,
        ease: "Power1",
        duration: 300,
        delay: 1000,
        repeat: 0,
        onComplete: () => {
          this.scene.tweens.add({
            targets: this,
            alpha: 1,
            duration: 300,
            repeat: 0
          });
          this.scene.tweens.add({
            targets: beam,
            alpha: 0,
            duration: 300,
            repeat: 0
          });
        }
      });
    }

    beamH(): number {
      return this.y / 200;
    }

    beamOut(toX: number) {
      let beam: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        this.x,
        0,
        "beam"
      );
      beam
        .setScale(0.5, this.beamH())
        .setOrigin(0.5, 0)
        .setAlpha(0)
        .setDepth(this.y)
        .play("beam");

      let tweenBeam: Phaser.Tweens.Tween = this.scene.tweens.add({
        targets: beam,
        scaleX: 1,
        alpha: 0.3,
        ease: "Power1",
        duration: 300,
        delay: 500,
        repeat: 0,

        onComplete: () => {
          this.scene.tweens.add({
            targets: beam,
            alpha: 0,
            ease: "Power1",
            duration: 100,
            repeat: 0,
            onComplete: () => {
              beam.destroy();
            }
          });
        }
      });

      let color1 = new Phaser.Display.Color(255, 255, 255);
      let color2 = new Phaser.Display.Color(0, 255, 0);
      this.scene.gameUtils.tweenTint(this, color1, color2, 300, 400, null);

      let test: Phaser.Tweens.Tween = this.scene.tweens.add({
        targets: this,
        scaleX: 1.5,
        scaleY: 0.5,

        ease: "Power1",
        alpha: 0.5,
        duration: 300,
        repeat: 0,
        delay: 500,
        onComplete: () => {
          this.scene.tweens.add({
            targets: this,
            y: this.y - 100,
            scaleX: 0.25,
            scaleY: 10,
            alpha: 0,
            duration: 300,
            ease: "Power1",
            repeat: 0,
            onComplete: () => {
              this.setScale(1);
              this.beamIn(toX);
            }
          });
        }
      });
    }

    public showBaloon(_text: string) {
      this.scene.playerBaloon.showBaloon(_text);
    }
    // public showBaloonExtra(_obj: any) { this.scene.playerBaloon.showBaloonExtra(_obj); }
    public hideBaloon() {
      this.scene.playerBaloon.hideBaloon();
    }

    update(): void {

      //this.pipeline.setFloat1('rand', Phaser.Math.RND.realInRange(0, 1));
     
      this.setDepth(this.y);
      this.myArea.setDepth(this.y - 1);
      Phaser.Display.Align.In.Center(this.myArea, this);

      //  console.log(this.name,this.depth)
      /*
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            

            if (this.cursors.left.isDown) {


                this.body.velocity.x = -140;
                if (this.direction != PlayerDirection.LEFT) {
                    this.turnLeft();
                    this.play('walk');
                    this.direction = PlayerDirection.LEFT;
                    this.playerState = PlayerStates.WALKING;
                }
            }
            else if (this.cursors.right.isDown) {

                this.body.velocity.x = 140;
                if (this.direction != PlayerDirection.RIGHT) {
                    this.turnRight();
                    this.play('walk');
                    this.direction = PlayerDirection.RIGHT;
                    this.playerState = PlayerStates.WALKING;
                }
            }

            else if (this.cursors.up.isDown) {

                if (this.y < this.yMin) return;
                this.body.velocity.y = -140;
                if (this.direction != PlayerDirection.UP) {
                    this.play('walk');
                    this.direction = PlayerDirection.UP;
                    this.playerState = PlayerStates.WALKING;
                }
            }
            else if (this.cursors.down.isDown) {

                console.log(this.x, this.cameraOffset.x)
                if (this.y > this.yMax) return;
                this.body.velocity.y = 140;
                if (this.direction != PlayerDirection.DOWN) {
                    this.play('walk');
                    this.direction = PlayerDirection.DOWN;
                    this.playerState = PlayerStates.WALKING;
                }
            }
            else {


                if (this.playerState != PlayerStates.IDLE) {
                    this.animations.stop();
                    this.play("idle");
                    this.playerState = PlayerStates.IDLE;
                    this.direction = PlayerDirection.NONE;
                }

            }

            */
    }
  }
}
