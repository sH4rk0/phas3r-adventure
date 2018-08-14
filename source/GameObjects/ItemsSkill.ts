module z89 {

    export class ItemsSkill extends Items {

        public itemObj: any;

        private isStarted: boolean = false;
        private skills: Array<any> = [];
        private skillsBarObj: Array<Phaser.GameObjects.Sprite> = [];
        private skillsTextObj: Array<Phaser.GameObjects.BitmapText> = [];

        constructor(scene: GameCity, itemObj: any) {

            super(scene, itemObj);

            this.setOrigin(0.5);
            this.skills = gameData.skills;

            let _text: Phaser.GameObjects.BitmapText;
            let _bar: Phaser.GameObjects.Sprite;

            let _y: Array<number> = [-66, -164, -260, -355];

            this.setDepth(this.y);
            this.setAlpha(1);

           [0,1,2,3].forEach((element)=>{

            _bar = this.scene.add.sprite(0, 0, "skill");
            _bar.setOrigin(0).setScale(0,1).setAlpha(.4).setDepth(this.y+1);
            this.skillsBarObj.push(_bar);
            Phaser.Display.Align.In.TopLeft(_bar,this,-20,_y[element]);

            _text = this.scene.add.bitmapText(0, 0, "commodore", "", 24);
            _text.setAlpha(0).setOrigin(0).setDepth(this.y+1);
            this.skillsTextObj.push(_text);
            Phaser.Display.Align.In.TopLeft(_text,_bar,-10,-15);

           });
           
            if (this.itemObj.isStarted) this.start();

        }

        start() {
            this.itemObj.isStarted = true;
            this.rewrite();
            this.scene.time.addEvent({ delay: 5000, callback: this.rewrite, callbackScope: this, loop: true });
         
        }

        rewrite() {

            console.log("rewrite");
            let _arr: Array<any> = this.skills.slice();
            Phaser.Utils.Array.Shuffle(_arr)
          
            let _text: Phaser.GameObjects.BitmapText;
          
            this.skillsBarObj.forEach((element: Phaser.GameObjects.Sprite, index: number) => {
           
                this.scene.tweens.add({targets:element, scaleX: _arr[index].v / 100,  duration:1000, delay:200*index, ease:"Bounce.easeOut", repeat:0, });

                _text = this.skillsTextObj[index];
                _text.setText(_arr[index].s).setAlpha(0);
                
                this.scene.tweens.add({targets:_text, alpha: 1, duration:500, delay:100*index, repeat:0, ease:"" });

            });

        }



    }

}