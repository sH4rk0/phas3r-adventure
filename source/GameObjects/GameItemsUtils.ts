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

    addItem(id: number, randomId?:boolean): void {

      let _itemObj: any = this.getItemObjById(id);

     
      if(randomId!=undefined){

        _itemObj=JSON.parse(JSON.stringify(_itemObj));
        _itemObj.id=Phaser.Math.RND.integerInRange(1000,100000);

      }
      //console.log(_itemObj)
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
            this.scene.groupCity.add(new Items(this.scene, _itemObj));
            break;

          case 6:
            this.scene.groupAll.add(new ItemsWalking(this.scene, _itemObj));
            break;

          default:
            this.scene.groupAll.add(new Items(this.scene, _itemObj));
            break;
        }
      }
    }

    getItemObjById(id: number): any {
      let _itemObj: any;
      gameData.ingame.items.forEach(element => { if (element.id == id) _itemObj = element; });
      return _itemObj;
    }

    getItemById(id: number): Items {
      let _itemObj: Items;

      this.scene.groupAll.children.each((element: any) => {
        if (element.id == id) _itemObj = element;
      }, this);

      return _itemObj;
    }


  


    beamIn(item:Items,callback?:any){

    
      item.setAlpha(0);

      let beam: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        item.x,
        0,
        "beam"
      );
      beam
        .setScale(0.5,(item.y / 200))
        .setOrigin(0.5, 0)
        .setAlpha(0)
        .setDepth(item.y)
        .play("beam");


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
          this.scene.tweens.add({
            targets: item,
            alpha: 1,
            duration: 300,
            repeat: 0,
            onComplete:()=>{
              if(callback!=undefined) callback();
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


    beamOut(item:Items,callback?:any){

    
   
      if(item!=undefined){
      let beam: Phaser.GameObjects.Sprite = this.scene.add.sprite(
        item.x,
        0,
        "beam"
      );
      beam
        .setScale(0.5, (item.y / 200))
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
              
              if(callback!=undefined) callback();
              //to remove an item definitly
              //this.scene.removeItem(itemId);
              //this.scene.saveGameObj.updateItems();
              
            }
          });
        }
      });


    }
    }


  }
}
