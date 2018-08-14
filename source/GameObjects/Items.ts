module z89 {

    export class Items extends Phaser.GameObjects.Sprite {

        scene: GameCity;

      
        public itemObj: any;
        public id: number;
        public inventoryIndex: number;
        public tween: Phaser.Tweens.Tween;
        private _isInteractive:boolean;

        constructor(scene: GameCity, itemObj: any) {

            
            super(scene, itemObj.x, itemObj.y, itemObj.sprite);
            this.scene=scene;

            let config:AnimationConfig;
            let repeat:number=-1;
          
            if (itemObj.animations != undefined) {
             
                itemObj.animations.forEach(element => {

                    if(!element.loop) repeat=0;
                    config={
                        key: itemObj.id+"-"+element.name,
                        
                        frames: scene.anims.generateFrameNumbers(itemObj.sprite,{ frames:element.frames  }),
                        frameRate: element.rate,
                        repeat:repeat
                    };

                    this.anims.animationManager.create(config);

                });
                
                this.play(itemObj.id+"-"+itemObj.currentAnimation);
              
            }

        

            this.setDepth(this.y).setOrigin(0.5, 1).setInteractive();

            if (itemObj.scale != undefined) this.setScale(itemObj.scale);
            
            this.id = itemObj.id;
            this.itemObj = itemObj;
           
            this.name = itemObj.name;
            this._isInteractive = itemObj.interactive;

            if(itemObj.turnLeft!=undefined) this.turnLeft();

            if(this.isInteractive){

              

            this.on("pointerdown",() => {
            
                if(this.scene.isInteractionDisabled()) return;
                let _currentItem: Items = this.scene.getCurrentItem();

               if (this.scene.playerActions.IsOpen() && _currentItem != undefined && _currentItem.id != this.id) this.scene.playerActions.hide();

                let _playerDest: number = this.x;
                if (this.scene.player.x < this.x) {

                    _playerDest -= this.itemObj.offsetX;

                } else {

                    _playerDest += this.itemObj.offsetX;

                }

                this.scene.player.goTo(_playerDest, this.y, this);

            }, this);
        }

            this.scene.add.existing(this);
        }


        update() {

            
           if (this.itemObj.fixedToCamera) this.setX((this.scene.mainCamera.scrollX * -0.095) +  this.itemObj.x);

        }

        isInteractive(): boolean {

            return this._isInteractive;

        }

        turnLeft(): void {

            
            this.setFlipX(true);

        }

        turnRight(): void {
           
            this.setFlipX(false);

        }

        updateItemObj(_key:string,_value:any):void{

            this.itemObj[_key]=_value;
            if(_key=="name") this.name=_value;
            
        }

        playAnim(_anim:string):void{

            this.itemObj.currentAnimation=_anim;
            this.play(_anim);
           
            

        }

        start():void{

            
        }





    }

}