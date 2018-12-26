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

    private direction: PlayerDirection = PlayerDirection.RIGHT;
    private playerState: PlayerStates = PlayerStates.IDLE;
    private playerTween: Phaser.Tweens.Tween;
    private _isMasked: boolean = false;
    private _isTalking: boolean = false;
    private intersect: boolean;

    private illogicText: Array<number> = [19, 20, 13, 21];

    private animations = [
      {
        key: "player-idle",
        frames: [8, 9, 10, 11],
        frameRate: 5,
        repeat: -1,
        repeatDelay: 0
      },
      {
        key: "player-walk",
        frames: [0, 1, 2, 3, 4, 5, 6, 7],
        frameRate: 7,
        repeat: -1,
        repeatDelay: 0
      },
      {
        key: "player-pickdrop",
        frames: [16, 17, 18, 19],
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      },
      {
        key: "player-use",
        frames: [19, 20, 21, 20, 19],
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      },
      {
        key: "player-punch",
        frames: [12, 13, 14, 15],
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      },

      {
        key: "player-idle-mask",
        frames: [32, 33, 34, 35],
        frameRate: 5,
        repeat: -1,
        repeatDelay: 0
      },
      {
        key: "player-walk-mask",
        frames: [24, 25, 26, 27, 28, 29, 30, 31],
        frameRate: 7,
        repeat: -1,
        repeatDelay: 0
      },
      {
        key: "player-pickdrop-mask",
        frames: [40, 41, 42, 43],
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      },
      {
        key: "player-use-mask",
        frames: [43, 44, 45, 44, 43],
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      },
      {
        key: "player-punch-mask",
        frames: [36, 37, 38, 39],
        frameRate: 7,
        repeat: 0,
        repeatDelay: 0
      }
    ];

    private customPipeline: any;

    constructor(scene: GameCity) {
      super(scene, 0, 0, "player");

      //this.setPipeline("testPipeline");
      //this.pipeline.setFloat2('uResolution', this.width, this.height);

      /* this.scene.input.keyboard.on("keyup", event => {
        //console.log("player",event.key);
        if (event.key == "p") {
          // console.log("punch");
          this.playAnimation("player-punch");
        }
      });
      */

      this.scene = scene;

      let config: AnimationConfig;
      this.animations.forEach(element => {
        config = {
          key: element.key,
          frames: scene.anims.generateFrameNumbers("player", {
            frames: element.frames
          }),
          frameRate: element.frameRate,
          repeat: element.repeat,
          repeatDelay: element.repeatDelay
        };
        this.anims.animationManager.create(config);
      });

      this.on(
        "animationcomplete",
        () => {
          this.playAnimation("player-idle");
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

      this.playAnimation("player-idle");

      this.setOrigin(0.5, 1)
        .setScale(1)
        .setY(608)
        .setAlpha()
        .setDepth(this.y)

        .setInteractive(
          new Phaser.Geom.Rectangle(33, 0, 60, 80),
          Phaser.Geom.Rectangle.Contains
        )
        .setName("player")
        .on("pointerdown", () => {
          if (this.scene.isInteractionDisabled()) return;
          this.scene.playerMenu.toggle();
        });

      scene.add.existing(this);

      //console.log(this.isTalking());
    }

    isMasked(): boolean {
      return this._isMasked;
    }

    useMask(value: boolean): void {
      this._isMasked = value;
    }

    isTalking(): boolean {
      return this._isTalking;
    }

    setConversation(value: boolean) {
      this._isTalking = value;
    }

    goTo(_x: number, _y: number, _item?: Items): void {
      //console.log(_x, _y, _item, this.scene.currentItem);

      //console.log(this.isTalking());
      this.hideBaloon();

      if (
        this.scene.conversationBaloon.isConversationActive() &&
        (_x != this.x || _y != this.y - 5)
      ) {
        this.scene.conversationBaloon.stopConversation();
      }

      if (
        (_item != undefined || _item != null) &&
        (this.scene.currentItem != undefined ||
          this.scene.currentItem != null) &&
        this.scene.currentItem.itemObj.id == _item.itemObj.id
      )
        return;

      if (
        this.scene.playerActions.IsOpen() &&
        // (this.scene.currentItem == undefined || this.scene.currentItem == null) &&
        (_item == undefined || _item == null)
        //&& this.scene.currentItem.itemObj.id != _item.itemObj.id
      ) {
        this.scene.playerActions.hide();
      }

      // else{}

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

      //console.log(_intersect);

      if (_intersect.point != null) {
        let _offsetY: number = 0;
        let _offsetX: number = 0;

        if (this.y < _intersect.point.y) {
          _offsetY = -5;
        } else {
          _offsetY = 5;
        }

        if (this.x < _intersect.point.x) {
          _offsetX = -5;
        } else {
          _offsetX = 5;
        }

        _x = _intersect.point.x + _offsetX;
        _y = _intersect.point.y + _offsetY;
        this.intersect = true;

        if (_item != null) {
          //console.log("my case");
          //console.log(_item.itemObj.x, _x, _item.itemObj.y, _y);

          if (_item.itemObj.y <= _y || _item.itemObj.y >= _y) {
            if (_item.itemObj.x <= _x) {
              _x = _item.itemObj.x + _item.itemObj.offsetX;
            } else {
              _x = _item.itemObj.x - _item.itemObj.offsetX;
            }
          } else if (_item.itemObj.x < _x || _item.itemObj.x > _x) {
            if (_item.itemObj.y <= _y) {
              _y = _item.itemObj.y - _item.itemObj.offsetY;
            } else {
              _y = _item.itemObj.y + _item.itemObj.offsetY;
            }
          }
        }
        /**
         * print destination point
         */
        /* var graphics = this.scene.add.graphics({
          fillStyle: { color: 0xff0000 }
        });
        var point1 = new Phaser.Geom.Point(_x, _y); // point at 0/0
        graphics.fillPointShape(point1, 2);
        *
        /
        /**
         *
         */
      }

      let distance: number = Phaser.Math.Distance.Between(
        this.x,
        this.y,
        _x,
        _y
      );

      let distanceX: number = Phaser.Math.Distance.Between(this.x, 0, _x, 0);
      let distanceY: number = Phaser.Math.Distance.Between(0, this.y, 0, _y);
      //console.log("distance:" + distance, "y:" + distanceX, "x:" + distanceY);

      if (this.playerTween != null) {
        this.playerTween.stop();
      } else {
        this.playAnimation("player-walk");
      }

      if (distance < 10 || (distanceX < 10 && distanceY < 10)) {
        this.playAnimation("player-idle");
        this.setDepth(this.y);
        this.scene.saveGameObj.updatePlayerPosition(this.x, this.y);

        if (_item != null) {
          this.scene.setCurrentItem(_item);

          if (this.x < _item.x) {
            if (this.direction == PlayerDirection.LEFT) this.changeDirection();
          } else {
            if (this.direction == PlayerDirection.RIGHT) this.changeDirection();
          }

          this.scene.playerActions.doActionSequence(_item);

          // console.log(_item);
          if (_item.isInteractive()) this.scene.playerActions.show();
        }

        return;
      } else {
        if (_item != null && _intersect.point != null) {
          //console.log("my case");
          //console.log(_item.itemObj.x, _x, _item.itemObj.y, _y);

          if (_item.itemObj.y <= _y || _item.itemObj.y >= _y) {
            if (_item.itemObj.x <= _x) {
              _x = _item.itemObj.x + _item.itemObj.offsetX;
            } else {
              _x = _item.itemObj.x - _item.itemObj.offsetX;
            }
            distance = Phaser.Math.Distance.Between(this.x, this.y, _x, _y);
          } else if (_item.itemObj.x < _x || _item.itemObj.x > _x) {
            if (_item.itemObj.y <= _y) {
              _y = _item.itemObj.y - _item.itemObj.offsetY;
            } else {
              _y = _item.itemObj.y + _item.itemObj.offsetY;
            }
            distance = Phaser.Math.Distance.Between(this.x, this.y, _x, _y);
          }
        }
      }

      /*
      if (distanceX > distanceY) {
        distance = distanceX;
      } else {
        distance = distanceY;
      }*/

      this.playerTween = this.scene.tweens.add({
        targets: this,
        x: _x,
        y: _y + 1,
        ease: null,
        duration: 7.5 * distance,
        loop: 0,
        onCompleteParams: [this.intersect],
        onUpdate: () => {
          this.setDepth(this.y);
        },
        onComplete: () => {
          //console.log(this.x, this.y, _x, _y, _item);
          //console.log(this.x, this.y, _item);

          this.playerTween.stop();
          this.playerTween = null;
          this.scene.saveGameObj.updatePlayerPosition(this.x, this.y);
          this.playAnimation("player-idle");

          if (_item != null) {
            this.scene.setCurrentItem(_item);

            if (this.x < _item.x) {
              if (this.direction == PlayerDirection.LEFT)
                this.changeDirection();
            } else {
              if (this.direction == PlayerDirection.RIGHT)
                this.changeDirection();
            }

            this.scene.playerActions.doActionSequence(_item);

            // console.log(_item);
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
        z89.getLabel(
          this.illogicText[
            Phaser.Math.RND.integerInRange(0, this.illogicText.length - 1)
          ]
        )
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

      let toLeft: boolean = false;
      let intersectPoints: Array<Phaser.Geom.Point> = [];

      if (this.x > _toPosition.x1) toLeft = true;

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
            //console.log("item intersect", intersectPoint);
            _obj.point = JSON.parse(JSON.stringify(intersectPoint));
          }
        }
      }, this);

      let distance: number = null;
      let currentDistance: number = null;
      let index: number = 0;

      if (_obj.point == null) {
        this.scene.sceneBounds.forEach((bound: Phaser.Geom.Line) => {
          intersectPoint.setTo(0, 0);

          if (
            Phaser.Geom.Intersects.LineToLine(
              line1,
              new Phaser.Geom.Line(bound.x1, bound.y1, bound.x2, bound.y2),
              intersectPoint
            )
          ) {
            //console.log("intersect");
            //console.log("intersect", intersectPoint);

            intersectPoints.push(JSON.parse(JSON.stringify(intersectPoint)));

            if (toLeft) {
              //console.log("toleft", intersectPoints[index].x);
              //intersectPoints[index].x = intersectPoints[index].x + 10;
            } else {
              //console.log("tor", intersectPoints[index].x);
              //intersectPoints[index].x = intersectPoints[index].x - 10;
            }

            distance = Phaser.Math.Distance.Between(
              this.x,
              this.y,
              intersectPoints[index].x,
              intersectPoints[index].y
            );

            if (distance < currentDistance || currentDistance == null) {
              currentDistance = distance;
              //console.log(currentDistance);
              _obj.point = intersectPoints[index];
            }
            index++;
          }
        });
      }

      // console.log(_obj);

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
      this.setDepth(this.y);
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
            repeat: 0,
            onComplete: () => {
              this.scene.enableInteraction();
            }
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
      this.scene.disableInteraction();
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

    public showBaloon(_text: string, _callback?: any) {
      this.scene.playerBaloon.showBaloon(_text, _callback);
    }
    // public showBaloonExtra(_obj: any) { this.scene.playerBaloon.showBaloonExtra(_obj); }
    public hideBaloon() {
      this.scene.playerBaloon.hideBaloon();
    }

    playAnimation(animation: string): void {
      if (this.isMasked()) {
        this.play(animation + "-mask");
      } else {
        this.play(animation);
      }
    }

    update(): void {
      //console.log("update player");
      //this.pipeline.setFloat1('rand', Phaser.Math.RND.realInRange(0, 1));
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
