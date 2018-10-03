namespace z89 {
  export class Transition extends Phaser.GameObjects.Container {
    scene: GameCity;
    blocksGroup: Phaser.GameObjects.Group;
    transitions: Array<any> = gameData.transitions;

    constructor(scene: GameCity) {
      super(scene, 0, 0);
      this.scene = scene;
      this.setScrollFactor(0);
      this.transitions = gameData.transitions;
      this.blocksGroup = this.scene.add.group({
        key: "transitionBlock",
        repeat: 150,
        setScale: { x: 0, y: 0 }
      });

      Phaser.Actions.GridAlign(this.blocksGroup.getChildren(), {
        width: 15,
        cellWidth: 72,
        cellHeight: 72,
        x: 36,
        y: 36
      });

      this.scene.add.existing(this);
    }

    show(callback: any, type: transitionType): void {
      this.scene.disableInteraction();
      type = 1;

      this.doTransition(true, type, callback);
    }

    hide(): void {
      this.scene.enableInteraction();
      this.scene.player.setAlpha(1);
      this.doTransition(false, 1);
    }

    doTransition(isIn: boolean, type: transitionType, callback?: any) {
      const _transition = this.transitions[type];
      let _scaleX: number = 1;
      let _scaleY: number = 1;

      if (!isIn) {
        _scaleX = 0;
        _scaleY = 0;
      }

      switch (type) {
        case transitionType.standard:
          _transition.sequence.forEach((element, index) => {
            //console.log(element, index);
            let child: Phaser.GameObjects.Sprite = this.blocksGroup.getFirstNth(
              index,
              true
            );
            child
              .setDepth(2000)
              .setName("child-" + index)
              .setScrollFactor(0);
            //console.log(child);
            this.scene.tweens.add({
              targets: child,
              scaleX: _scaleX,
              scaleY: _scaleY,
              angle: 180,
              _ease: "Sine.easeInOut",
              ease: "Power2",
              duration: 500,
              delay: index * _transition.delay,
              repeat: 0,
              onComplete: () => {
                if (child.name == "child-" + _transition.end && isIn) {
                  if (callback != undefined) callback();
                }
              }
            });
          });

          break;

        case transitionType.spiral:
          _transition.sequence.forEach((element, index) => {
            //console.log(element, index);
            let child: Phaser.GameObjects.Sprite = this.blocksGroup.getFirstNth(
              element[0],
              true
            );
            child
              .setDepth(2000)
              .setName("child-" + element[0])
              .setScrollFactor(0);
            //console.log(child);
            this.scene.tweens.add({
              targets: child,
              scaleX: _scaleX,
              scaleY: _scaleY,
              angle: 180,
              _ease: "Sine.easeInOut",
              ease: "Power2",
              duration: 500,
              delay: index * _transition.delay,
              repeat: 0,
              onComplete: () => {
                if (child.name == "child-" + _transition.end && isIn) {
                  if (callback != undefined) callback();
                }
              }
            });
          });

          break;
      }
    }
  }
}
