namespace z89 {
  export class GameUtils {
    scene: GameCity;
    currentState: GameCity;
    tween: Phaser.Tweens.Tween;

    constructor(scene: GameCity) {
      this.scene = scene;
    }

    addDelay(delay: number, callback: any): void {
      // this.scene.time.events.add(delay, callback);

      this.scene.time.addEvent({ delay:delay, callback:callback})
    }

    itemOverEffect(item:Items):void{

      this.scene.gameUtils.tweenTint(
        item,
        new Phaser.Display.Color(255, 255, 255),
        new Phaser.Display.Color(0, 255, 0),
       
        100
      );

    }

    itemOutEffect(item:Items):void{

      this.scene.gameUtils.tweenTint(
        item,
     
        new Phaser.Display.Color(0, 255, 0),
        new Phaser.Display.Color(255, 255, 255),
        100
      );

    }

    iconOverEffect(item:any):void{

      this.scene.gameUtils.tweenTint(
        item,
        new Phaser.Display.Color(255, 255, 255),
        new Phaser.Display.Color(0, 255, 0),
       
        100
      );

    }

    iconOutEffect(item:any):void{

      this.scene.gameUtils.tweenTint(
        item,
     
        new Phaser.Display.Color(0, 255, 0),
        new Phaser.Display.Color(255, 255, 255),
        100
      );

    }




    btnOverEffect(btn:any,text:any):void{

      this.scene.gameUtils.tweenTint(
        btn,
        new Phaser.Display.Color(42, 118, 0),
        new Phaser.Display.Color(0, 255, 0),
        100
      );
      this.scene.gameUtils.tweenTint(
        text,
        new Phaser.Display.Color(255, 255, 255),
        new Phaser.Display.Color(0, 0, 0),
        500
      );

    }


    btnOutEffect(btn:any,text:any):void{

      this.scene.gameUtils.tweenTint(
        btn,
        new Phaser.Display.Color(0, 255, 0),
        new Phaser.Display.Color(42, 118, 0),
        100
      );
      this.scene.gameUtils.tweenTint(
        text,
        new Phaser.Display.Color(0, 0, 0),
        new Phaser.Display.Color(255, 255, 255),
        500
      );



    }


    tweenTint(
      obj: any,
      startColor: Phaser.Display.Color,
      endColor: Phaser.Display.Color,
      duration: number = 250,
      delay: number = 0,
      callback: any = null
    ):void {

      if (obj==undefined) return;
        let color:any;
      this.tween = this.scene.tweens.addCounter({
        from: 0,
        to: 100,
        duration: duration,
        delay:delay,
        onUpdate: tween => {
        
          color=Phaser.Display.Color.Interpolate.ColorWithColor(
            startColor,
            endColor,
            100,
            tween.getValue()
          );

          obj.tint = Phaser.Display.Color.GetColor(color.r,color.g,color.b);
        },
        onComplete: callback
      });

     
    }
  }
}
