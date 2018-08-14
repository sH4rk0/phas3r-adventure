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

    addItem(id: number): void {
      let _itemObj: any = this.getItemObjById(id);

      this.attachItem(_itemObj);
    }

    attachItem(_itemObj: any) {
      if (_itemObj != undefined) {
        switch (_itemObj.type) {
          case 2:
            //    this.currentState.groupAll.add(new ItemsTruck(this.game, _itemObj));
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

          default:
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

      return _itemObj;
    }
  }
}
