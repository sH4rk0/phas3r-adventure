namespace z89 {
  export class GameItemsUtils {
    scene: GameCity;
    currentState: GameCity;

    constructor(scene: GameCity) {
      this.scene = scene;
    }

    addSavedItems(_items: Array<any>) {
      _items.forEach(element => {
        this.attachItem(element);
      });
    }

    addItem(id: number, randomId?: boolean): void {
      let _itemObj: any = this.getItemObjById(id);

      if (randomId != undefined) {
        _itemObj = JSON.parse(JSON.stringify(_itemObj));
        _itemObj.id = Phaser.Math.RND.integerInRange(1000, 100000);
      }
      // console.log(_itemObj);
      this.attachItem(_itemObj);
    }

    attachItem(_itemObj: any) {
      if (_itemObj != undefined) {
        switch (_itemObj.type) {
          case 2:
            //    this.scene.groupAll.add(new ItemsTruck(this.scene, _itemObj));
            break;

          case 3:
            this.scene.groupAll.add(new ItemsContent(this.scene, _itemObj));
            break;

          case 4:
            this.scene.groupAll.add(new ItemsSkill(this.scene, _itemObj));
            break;

          case 5:
            // this.scene.groupCity.add(new Items(this.scene, _itemObj));
            break;

          case 6:
            this.scene.groupAll.add(new ItemsWalking(this.scene, _itemObj));
            break;

          default:
            // console.log(_itemObj);
            this.scene.groupAll.add(new Items(this.scene, _itemObj));
            break;
        }
      }
    }

    getItemObjById(id: number): any {
      let _itemObj: any;
      gameData.ingame.items.forEach(element => {
        if (element.id == id) _itemObj = element;
      });
      return _itemObj;
    }

    getItemById(id: number): Items {
      let _itemObj: Items;

      this.scene.groupAll.children.each((element: any) => {
        if (element.id == id) _itemObj = element;
      }, this);

      // console.log(_itemObj);
      return _itemObj;
    }

    setLanguage(): void {
      this.scene.groupAll.children.each((item: any) => {
        if (item.itemObj != undefined) {
          item.name = z89.getLabel(item.itemObj.name);
        }
      }, this);
    }

    beamIn(item: Items, callback?: any) {
      if (item == undefined) return;
      item.setAlpha(0);

      let beam: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        item.x,
        0,
        "beam"
      );
      beam
        .setScale(0.5, item.y / 200)
        .setOrigin(0.5, 0)
        .setAlpha(0)
        .setDepth(item.y)
        .play("beam");
      this.scene.groupAll.add(beam);

      /*
      let color2 = new Phaser.Display.Color(255, 255, 255);
      let color1 = new Phaser.Display.Color(0, 255, 0);
      this.scene.gameUtils.tweenTint(this, color1, color2, 300, 300, null);
*/
      let tweenBeam: Phaser.Tweens.Tween = this.scene.tweens.add({
        targets: beam,
        scaleX: 1,
        alpha: 0.5,
        ease: "Power1",
        duration: 300,
        delay: 1000,
        repeat: 0,
        onComplete: () => {
          if (item == undefined) return;
          this.scene.tweens.add({
            targets: item,
            alpha: 1,
            duration: 300,
            repeat: 0,
            onComplete: () => {
              if (callback != undefined) callback();
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

    beamOut(item: Items, callback?: any) {
      if (item != undefined) {
        let beam: Phaser.GameObjects.Sprite = this.scene.add.sprite(
          item.x,
          0,
          "beam"
        );
        this.scene.groupAll.add(beam);
        beam
          .setScale(0.5, item.y / 200)
          .setOrigin(0.5, 0)
          .setAlpha(0)
          .setDepth(item.y)
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

        /*
      let color1 = new Phaser.Display.Color(255, 255, 255);
      let color2 = new Phaser.Display.Color(0, 255, 0);
      this.scene.gameUtils.tweenTint(item, color1, color2, 300, 400, null);
      */

        let test: Phaser.Tweens.Tween = this.scene.tweens.add({
          targets: item,
          scaleX: 1.5,
          scaleY: 0.5,

          ease: "Power1",
          alpha: 0.5,
          duration: 300,
          repeat: 0,
          delay: 500,
          onComplete: () => {
            this.scene.tweens.add({
              targets: item,
              y: item.y - 100,
              scaleX: 0.25,
              scaleY: 10,
              alpha: 0,
              duration: 300,
              ease: "Power1",
              repeat: 0,
              onComplete: () => {
                item.setScale(1).setY(item.itemObj.y);

                if (callback != undefined) callback();
                //to remove an item definitly
                //this.scene.removeItem(itemId);
                //this.scene.saveGameObj.updateItems();
              }
            });
          }
        });
      }
    }

    shootFromHigh(targets: Array<number>, shot?: any, callback?: any): void {
      shot = {
        delay: 1000,
        missile: {
          name: "meteor",
          animation: {
            frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            rate: 5,
            loop: true
          }
        },
        explosion: {
          name: "explosion",
          animation: {
            frames: [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28
            ],
            rate: 25,
            loop: false
          }
        }
      };

      let _shot: Phaser.GameObjects.Sprite;

      targets.forEach((element, index) => {
        this.scene.groupAll.children.each((sprite: any) => {
          if (sprite.id == element) {
            //console.log(sprite);

            _shot = this.scene.add.sprite(sprite.x, -100, shot.missile.name);
            _shot.setOrigin(0.5, 1).setDepth(1000);

            _shot.anims.animationManager.create({
              key: "run",
              frames: this.scene.anims.generateFrameNumbers("meteor", {
                frames: shot.missile.animation.frames
              }),
              frameRate: shot.missile.animation.rate,
              repeat: -1
            });

            _shot.play("run");

            this.scene.tweens.add({
              targets: _shot,
              y: sprite.y,
              duration: 1000,
              delay: shot.delay * index,
              ease: "Quad.easeIn",

              onComplete: () => {
                this.scene.mainCamera.flash(500, 255, 255, 255);
                this.scene.mainCamera.shake(700, 0.01);
                this.explosion(sprite.x, sprite.y, shot.explosion);
                this.scene.groupAll.remove(
                  this.getItemById(sprite.id),
                  true,
                  true
                );
                _shot.destroy();

                this.scene.saveGameObj.updateItems();
              }
            });
          }
        }, this);
      });
    }

    explosion(x: number, y: number, config: any): void {
      let _explosion: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        x,
        y,
        config.name
      );
      _explosion
        .setOrigin(0.5, 1)
        .setScale(2)
        .setDepth(1000);
      _explosion.anims.animationManager.create({
        key: "explode",
        frames: this.scene.anims.generateFrameNumbers(config.name, {
          frames: config.animation.frames
        }),
        frameRate: config.animation.rate,
        repeat: 0
      });

      _explosion.play("explode");

      _explosion.on("animationcomplete", () => {
        _explosion.destroy();
      });
    }
  }
}
