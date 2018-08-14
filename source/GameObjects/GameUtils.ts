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

    tweenTint(
      obj: Phaser.GameObjects.Sprite,
      startColor: Phaser.Display.Color,
      endColor: Phaser.Display.Color,
      duration: number = 250,
      delay: number = 0,
      callback: any = null
    ) {
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
