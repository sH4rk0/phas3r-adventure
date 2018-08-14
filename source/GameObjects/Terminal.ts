module z89 {
    export class Terminal extends Phaser.GameObjects.Container {

        scene:GameCity;

        private keyboard: Array<Phaser.Input.Keyboard.Key> = [];

        //48-57 0-9
        //65-90 a-z
        //13 return

        //32 space
        //50 "
        //188 ,
        //190 .
        //8 backspace
        //38 40 37 49 up down left right
        //private keys: Array<number> = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 13, 44, 32, 8, 38, 40, 37, 39, 188, 190];

        private keys: Array<string> = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","*","\"",",","."];

        private terminalGroup: Phaser.GameObjects.Group;
        public TerminalLogic: TerminalLogic;
        private TerminalKeyboard: TerminalKeyboard;


        constructor(scene: GameCity) {

            super(scene,0,0);

            this.scene=scene;
            this.setScrollFactor(0).setVisible(false).setAlpha(0);

            let terminalBg:Phaser.GameObjects.Image=this.scene.add.sprite(0, 0, "terminalBg");
            terminalBg.setOrigin(0)

            let terminal:Phaser.GameObjects.Image=this.scene.add.sprite((1080 - 640) / 2, ((720 - 500) / 2)-20, "terminale")
            terminal.setOrigin(0);

            let closeBtn: Phaser.GameObjects.Sprite = this.scene.add.sprite(670, 470, "btn");
            closeBtn.setOrigin(0).setInteractive().setAlpha(0)
            .on('pointerdown',() => {  
                this.hide();
            }, this);
           



            this.scene.input.keyboard.on('keydown', (event) =>{

                //console.log(event.key);
                this.addChar(event.key);
               
        
            });

            /*
            if (!isMobile()) {

                this.keys.forEach((element: number, index: number) => {

                    this.keyboard.push(scene.input.keyboard.addKey(element));
                    ////this.keyboard[index].on(this.addChar, this, null, this.keyboard[index]);

                });

            } else {


                this.keys.forEach((element: number, index: number) => {

                    this.keyboard.push(scene.input.keyboard.addKey(element));
                    this.keyboard[index].isDown(this.addChar, this, null, this.keyboard[index]);

                });

            }

            */



            this.add([terminalBg,terminal,closeBtn]);


            this.TerminalLogic = new TerminalLogic(this.scene, this, 0x00ff00);
           

            if(isMobile()){

               this.TerminalKeyboard = new TerminalKeyboard(this.scene,this);

            }

            //console.log(Phaser.Keyboard.PERIOD,Phaser.Keyboard.A,Phaser.Keyboard.DOWN);
                 this.scene.add.existing(this);



        }

        addChar(key): void {

            console.log(key);
           // console.log(key.keyCode);

            //return;
            if (key == "Enter") {
                this.TerminalLogic.submitCommand();

            } else if (key == "Backspace") {
                this.TerminalLogic.removeChar();

            } else if (key == "ArrowUp") {//up
                this.TerminalLogic.charUp();

            } else if (key == "ArrowDown") {//down
                this.TerminalLogic.charDown();

            } else if (key == "ArrowLeft") {//left
                this.TerminalLogic.charLeft();

            } else if (key == "ArrowRight") {//right
                this.TerminalLogic.charRight();
            }

            else {
               if(this.keys.indexOf(key)!=-1)  this.TerminalLogic.addChar(key);
               
            }


        }

        

        clear(): void { }

        show(index: number): void {

            this.setVisible(true);
            this.scene.tweens.add({targets:this, alpha: 1, duration:400 });
            this.scene.disableInteraction();
            this.TerminalLogic.reset();
            
        }

        hide(): void {

            this.TerminalLogic.writeMultiple(this.TerminalLogic.returnStaticString(msgs.disconnecting, 0))
            this.scene.tweens.add({ targets:this, alpha: 0, duration:400, onComplete:() => {
                this.setVisible(false);
                this.scene.enableInteraction();
               // this.destroy();
            }

        });

        }

        destroy(): void {
            ///this.inputEnableChildren = false;
           
                if (this.TerminalLogic != undefined) this.TerminalLogic.destroy();
                if (this.TerminalKeyboard != undefined) this.TerminalKeyboard.destroy();
               
            }









    }
}

