module z89 {

    export class saveGame {

        private scene: GameCity;
        private playerX: number = 0;
        private playerY: number = 0;
        private savedObj: any;
        private isSaved: boolean = false;
        private inventory: Array<any>;
        private items: Array<any>;
        private firstChoice:boolean=null;
        private current:number=0;
     
        private choice:boolean=null;

        constructor(scene: GameCity) {

            this.scene = scene;
            
            this.checkSaved();
           // this.game.time.events.repeat(5000, 10, this.updateItems, this);


        }

        destroy(){

            this.clearSaved();
        }

        updatePlayerPosition(x: number, y: number): void {

            this.playerX = x;
            this.playerY = y;
            this.updateSaveObj();


        }

        updatePlayerInventory(inventory: Array<Items>) {
            
                                    let _inventory: Array<any> = [];
            
                                    inventory.forEach((item) => {
            
                                            _inventory.push(item.itemObj);
            
                                    })
                                    this.inventory = _inventory;
                                    this.updateItems();
                                    this.updateSaveObj();
                                   
            
                            }

       

        updateItems() {


            let _itemsObj: Array<any> = [];

            this.scene.groupAll.children.each((element: Items) => {

                if (element.itemObj != undefined)  _itemsObj.push(element.itemObj)
             
            },this);

            //console.log(_itemsObj)
            this.items = _itemsObj;

            this.updateSaveObj();

        }

        setFirstChoice(choice:boolean):void{
            this.firstChoice=choice;
            this.updateSaveObj();
        }

        getFirstChoice():boolean{

            return this.firstChoice;

        }


        setCurrentChapter(current:number){
console.log("setCurrentChapter")
            this.current=current;
            this.updateSaveObj();
        }

        setChoiceChapter(choice:boolean){

            this.choice=choice;
            this.updateSaveObj();
        }


        gameIsSaved(): boolean {

         if(this.isSaved && this.firstChoice) return true;
         return false;
        }

        setSaved(obj: any) {

            this.savedObj = obj;
            localStorage.setItem('savedObj', JSON.stringify(this.savedObj));

        }

        clearSaved(): void {

            this.savedObj = null;
            localStorage.removeItem("savedObj");

        }

        getSaved(): any { return this.savedObj; }

        checkSaved(): void {

            let _obj: any = JSON.parse(localStorage.getItem("savedObj"));
            // console.log(_obj)
            if (_obj != null) {
                this.savedObj = _obj;
                this.inventory = this.savedObj.inventory;
                this.items = this.savedObj.items;
                this.playerX = this.savedObj.position.x;
                this.playerY = this.savedObj.position.y;
                this.isSaved = true;
                this.firstChoice= this.savedObj.firstChoice;
                this.current = this.savedObj.chapter.current;
                this.choice = this.savedObj.chapter.choice;
            } else {
                this.savedObj = null;
                this.isSaved = false;

            }

        }

        updateSaveObj(): any {

            let obj: any;

            obj = {

                position: { x: this.playerX, y: this.playerY },
                inventory: this.inventory,
                items: this.items,
                firstChoice: this.firstChoice,
                chapter: {current:this.current,choice:this.choice}

            }

            //console.log(obj);
            this.setSaved(obj);

        }

    }


}