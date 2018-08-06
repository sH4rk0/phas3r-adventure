var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var z89;
(function (z89) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot(test) {
            return _super.call(this, {
                key: 'Boot'
            }) || this;
        }
        Boot.prototype.preload = function () {
            var graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffff00, 1);
            graphics.fillRoundedRect(0, 0, 265, 50, 10);
            graphics.generateTexture('roundedBtn', 265, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 1080, 720);
            graphics.generateTexture('menu-phone-bg', 1080, 720);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 250, 50);
            graphics.generateTexture('menuActionBtn', 250, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 300, 720);
            graphics.generateTexture('menuAction', 300, 720);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 340, 50);
            graphics.generateTexture('baloonBg', 340, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillRect(0, 0, 340, 5);
            graphics.generateTexture('baloonBorder', 340, 5);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillTriangle(0, 12.5, 25, 12.5, 12.5, 25);
            graphics.generateTexture('baloonPin', 25, 25);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillRect(0, 0, 50, 126);
            graphics.generateTexture('playerHitArea', 50, 126);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillRoundedRect(0, 0, 300, 50, 10);
            graphics.generateTexture('forkBtn', 300, 50);
            graphics.clear();
            console.log("Boot:preload");
        };
        Boot.prototype.create = function () {
            console.log("Boot:create");
            this.scene.start('Preloader');
        };
        return Boot;
    }(Phaser.Scene));
    z89.Boot = Boot;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var Preloader = (function (_super) {
        __extends(Preloader, _super);
        function Preloader(test) {
            return _super.call(this, {
                key: "Preloader"
            }) || this;
        }
        Preloader.prototype.preload = function () {
            console.log("Preloader:preload");
            this.loadAssets();
        };
        Preloader.prototype.init = function () {
            this.body = document.getElementsByTagName("body")[0];
        };
        Preloader.prototype.create = function () {
            console.log("Preloader:create");
        };
        Preloader.prototype.loadAssets = function () {
            var _this = this;
            this.body.className = "loading";
            this.load.on("start", function () {
                //progress.destroy();
                console.log("load start");
            });
            this.load.on("fileprogress", function (file, value) {
                //console.log(file, value);
                /*if (file.key === 'goldrunner')
                        {
                            progress.clear();
                            progress.fillStyle(0xffffff, 0.4);
                            progress.fillRect(450, 500 - (value * 400), 200, value * 400);
                        }
                        */
            });
            this.load.on("complete", function () {
                //progress.destroy();
                _this.body.className = "";
                _this.scene.start('GameCity');
                console.log("load assetts complete");
            });
            //this.load.script("webfont", "js/libs/webfonts.js");
            //Assets Load
            //--------------------------
            // IMAGES
            gameData.assets.images.forEach(function (element) {
                // console.log(element);
                _this.load.image(element.name, element.path);
            });
            // SPRITESHEETS
            gameData.assets.spritesheets.forEach(function (element) {
                _this.load.spritesheet(element.name, element.path, {
                    frameWidth: element.width,
                    frameHeight: element.height,
                    endFrame: element.frames
                });
            });
            //bitmap fonts
            gameData.assets.bitmapfont.forEach(function (element) {
                _this.load.bitmapFont(element.name, element.imgpath, element.xmlpath);
            });
            // SOUNDS
            gameData.assets.sounds.forEach(function (element) {
                _this.load.audio(element.name, element.paths);
            });
            /*this.load.shader("noise", "js/game/fragments/noise.frag");
            this.load.shader("convergence", "js/game/fragments/convergence.frag");
            this.load.shader("gray", "js/game/fragments/gray.frag");
            this.load.shader("ripple", "js/game/fragments/ripple.frag");
            this.load.shader("ripple2", "js/game/fragments/ripple2.frag");
            this.load.shader("test", "js/game/fragments/test.frag");
            this.load.shader("water", "js/game/fragments/water.frag");
            */
        };
        return Preloader;
    }(Phaser.Scene));
    z89.Preloader = Preloader;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var GameCity = (function (_super) {
        __extends(GameCity, _super);
        function GameCity(test) {
            var _this = _super.call(this, {
                key: "GameCity"
            }) || this;
            // private filters: Array<Phaser.Filter>;
            _this.gameInteracion = true;
            return _this;
        }
        GameCity.prototype.preload = function () {
            console.log("GameCity:preload");
        };
        GameCity.prototype.create = function () {
            var _this = this;
            document.getElementsByTagName("body")[0].className = "game";
            console.log("GameCity:create");
            this.cameras.main.setBounds(0, 0, 3670, 720);
            this.gameItemsUtils = new z89.GameItemsUtils(this);
            this.gameUtils = new z89.GameUtils(this);
            //this.physics.world.setBounds(0, 0, 3670, 720);
            // +++++++++++++++++++++++++++++++++++++++
            // group city
            // +++++++++++++++++++++++++++++++++++++++
            this.groupCity = this.add.group();
            var bgLevel0 = this.add
                .image(0, 0, "bg-level0")
                .setInteractive()
                .setScrollFactor(0)
                .setOrigin(0, 0);
            this.groupCity.add(bgLevel0);
            //palazzi sfondo bg lvl1
            this.bgLevel1 = this.add
                .tileSprite(0, 0, 1080, 642, "bg-level1")
                .setScrollFactor(0)
                .setOrigin(0, 0);
            this.groupCity.add(this.bgLevel1);
            //palazzi group bg lvl2
            this.bgLevel2 = this.add
                .tileSprite(0, 55, 1080, 548, "bg-level2")
                .setScrollFactor(0)
                .setOrigin(0, 0);
            this.groupCity.add(this.bgLevel2);
            var street = this.add
                .image(0, 592, "street-level0")
                .setScrollFactor(0)
                .setOrigin(0, 0);
            this.groupCity.add(street);
            var buildings = [
                { s: "bg-home", x: 0, y: 640 - 48 },
                { s: "bg-devday", x: 624, y: 640 - 48 },
                { s: "bg-skills", x: 1114, y: 640 - 48 },
                { s: "bg-cake", x: 1550, y: 640 - 36 },
                { s: "bg-arcade", x: 1800, y: 640 - 48 },
                { s: "bg-aerosol", x: 2400, y: 640 - 48 },
                { s: "bg-contact", x: 3000, y: 640 - 36 }
            ];
            var building;
            buildings.forEach(function (element) {
                building = _this.add.image(element.x, element.y, element.s, 0);
                building.setOrigin(0, 1);
            });
            // +++++++++++++++++++++++++++++++++++++++
            // group street
            // +++++++++++++++++++++++++++++++++++++++
            this.groupStreet = this.add.group();
            this.street = this.add
                .tileSprite(0, 703 - 48, 1080, 65, "street-level1")
                .setScrollFactor(0)
                .setOrigin(0, 0);
            this.groupStreet.add(this.street);
            // +++++++++++++++++++++++++++++++++++++++
            // group All
            // +++++++++++++++++++++++++++++++++++++++
            this.groupAll = this.add.group();
            this.groupAll.runChildUpdate = true;
            this.player = new z89.Player(this);
            this.groupAll.add(this.player);
            gameData.ingame.items.forEach(function (element) {
                if (element.onStart) {
                    _this.gameItemsUtils.addItem(element.id);
                }
            });
            // +++++++++++++++++++++++++++++++++++++++
            // group Front
            // +++++++++++++++++++++++++++++++++++++++
            this.groupFront = this.add.group();
            this.front = this.add
                .tileSprite(0, 768 - 93 - 48, 1080, 720, "street-level2")
                .setScrollFactor(0)
                .setOrigin(0, 0)
                .setDepth(800);
            this.groupFront.add(this.front);
            // +++++++++++++++++++++++++++++++++++++++
            // group Baloon
            // +++++++++++++++++++++++++++++++++++++++
            this.groupBaloon = this.add.group();
            this.playerBaloon = new z89.PlayerBaloon(this);
            this.groupBaloon.add(this.playerBaloon);
            this.conversationBaloon = new z89.conversationBaloon(this, 0, 0);
            this.groupBaloon.add(this.conversationBaloon);
            // +++++++++++++++++++++++++++++++++++++++
            // group Action
            // +++++++++++++++++++++++++++++++++++++++
            this.playerActions = new z89.PlayerActions(this);
            this.playerActions.depth = 999;
            // +++++++++++++++++++++++++++++++++++++++
            // group Menu
            // +++++++++++++++++++++++++++++++++++++++
            this.playerMenu = new z89.PlayerMenu(this);
            this.playerMenu.depth = 1000;
            /* var cursors = this.input.keyboard.createCursorKeys();
      
            var controlConfig = {
              camera: this.cameras.main,
              left: cursors.left,
              right: cursors.right,
              up: cursors.up,
              down: cursors.down,
              acceleration: 0.06,
              drag: 0.0005,
              maxSpeed: 1.0
            };
      
            this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(
              controlConfig
            );*/
            this.mainCamera = this.cameras.main;
            this.mainCamera.startFollow(this.player, true, 0.1, 1);
            // +++++++++++++++++++++++++++++++++++++++
            // GROUND
            // +++++++++++++++++++++++++++++++++++++++
            /*this.ground = this.add.sprite(
              0,
              0,
              this.cache.getBitmapData("ground")
            );
            this.ground.input.enabled = true;
            this.ground.setDepth(0).setScrollFactor(0);
      */
            /* var graphics = this.make.graphics({x: 0, y: 0, add: false});
            graphics.fillStyle(0xffff00, 1);
            graphics.fillRect(0, 0, 1080, 720);
            graphics.generateTexture('ground',1080,720);
           
      
            this.ground = this.add.sprite(
              0,
              0,
              'ground'
            ).setInteractive();
            
            this.ground.setOrigin(0);
            this.ground.setAlpha(0,1);*/
            bgLevel0.on("pointerdown", function (ground) {
                if (!_this.gameInteracion)
                    return;
                //if (this.playerActions.IsOpen()) this.playerActions.hide();
                _this.player.goTo(_this.input.x + _this.mainCamera.scrollX, _this.input.y);
            }, this);
            /*   this.input.on(
              "pointerdown",
              function(pointer) {
                if (!this.gameInteracion) return;
                console.log("pointerdown");
                //if (this.playerActions.IsOpen()) this.playerActions.hide();
                this.player.goTo(
                  this.input.x + this.mainCamera.scrollX,
                  this.input.y
                );
              },
              this
            );
      */
        };
        GameCity.prototype.stopSound = function () {
            //stopSoundAll();
        };
        // playSound(sound: gameSound): void {
        //stopSoundAll();
        //playSound(sound);
        // }
        GameCity.prototype.restartGame = function () {
            //this.saveGameObj.destroy();
            document.location.reload();
            console.log("restart game");
        };
        GameCity.prototype.update = function (time, delta) {
            if (this.mainCamera.scrollX >= 0 && this.mainCamera.scrollX <= 2590) {
                this.bgLevel1.tilePositionX = this.mainCamera.scrollX * 0.2;
                this.bgLevel2.tilePositionX = this.mainCamera.scrollX * 0.7;
                this.street.tilePositionX = this.mainCamera.scrollX * 1.1;
                this.front.tilePositionX = this.mainCamera.scrollX * 1.25;
            }
            /*
          this.groupAll.children.each((element:Phaser.GameObjects.Sprite)=>{
      
            //console.log(element.name,element.y,element.depth);
            element.depth=element.y;
          },this)
          */
            // console.log([ 'x: ' + this.mainCamera.scrollX, 'y: ' + this.mainCamera.scrollY ]);
        };
        GameCity.prototype.processSavedGame = function () {
            /*
            let _saved = this.saveGameObj.getSaved();
            this.player.x = _saved.position.x;
            this.player.y = _saved.position.y;
      
            if (_saved.items != undefined) {
              this.gameItemsUtils.addSavedItems(_saved.items);
            }
      
            if (_saved.inventory != undefined && _saved.inventory.length > 0) {
              _saved.inventory.forEach(element => {
                let item: any;
                // console.log(element.type )
                switch (element.type) {
                  case 2:
                    this.groupAll.add(new ItemsTruck(this.game, element));
                    break;
      
                  case 3:
                    this.groupAll.add(new ItemsContent(this.game, element));
                    break;
      
                  default:
                    this.groupAll.add(new Items(this.game, element));
                    break;
                }
      
                //console.log(element,this.getItemSpriteId(element))
      
                this.addInventoryItem(this.gameItemsUtils.getItemById(element.id));
              });
            }
      
            */
        };
        GameCity.prototype.render = function () {
            //this.debug.cameraInfo(this.game.camera, 500, 232);
            //this.game.debug.spriteCoords(this.player, 32, 32);
            //this.game.debug.bodyInfo(this.player, 32, 32);
            //this.game.debug.body(this.player.myArea)
        };
        GameCity.prototype.startConversation = function () {
            var _actionObj = this.getActionObject();
            // this.conversationBaloon.setUpConversation(_actionObj);
        };
        GameCity.prototype.doActionSequence = function (_item) {
            var _this = this;
            // console.log("checkActions");
            this.createActionObject(); //create the action object based on action/inventory/items selection
            this.createActionText(); //create the action text based on the above selection
            var _actionObj = this.getActionObject();
            if (_actionObj.action != -1 &&
                (_actionObj.inventory.length > 0 || _actionObj.item != null)) {
                if (this.executeActionLogic(_item)) {
                    //this.playerBaloon.hideBaloon();
                    this.playerActions.hide();
                    //this.playerMenu.hide();
                    this.saveGame();
                    this.resetActions();
                    this.setActionObject(null);
                    this.time.delayedCall(3000, function () {
                        _this.playerActions.setText("");
                    }, null, this);
                }
            }
        };
        GameCity.prototype.saveGame = function () {
            console.log("game saved");
        };
        GameCity.prototype.createActionObject = function (_itemSelected) {
            // console.log("createActionObject");
            var returnObj = {
                key: null,
                action: null,
                inventory: null,
                item: null
            };
            var _currentAction = this.getCurrentActionString();
            var _currentActionValue = this.getCurrentAction();
            if (_currentAction == undefined) {
                _currentAction = "";
                returnObj.action = _currentActionValue = -1;
            }
            else {
                returnObj.action = _currentActionValue;
            }
            var _currentItem;
            var _inventoryIds = [];
            var _Inventoryitems = "";
            returnObj.inventory = this.getInventorySelected();
            var _Item;
            if (_itemSelected != undefined) {
                _Item = _itemSelected;
            }
            else {
                _Item = this.getCurrentItem();
            }
            var ItemId = "";
            returnObj.item = _Item;
            if (returnObj.item != null)
                ItemId = returnObj.item.id;
            returnObj.inventory.forEach(function (element) {
                _inventoryIds.push(element.itemObj.id);
            });
            if (_inventoryIds.length > 0)
                _Inventoryitems = _inventoryIds.join("_");
            if (ItemId != "" && _Inventoryitems != "")
                _Inventoryitems = _Inventoryitems + "_";
            var key = "";
            if (_currentAction != "" && _Inventoryitems != "" && ItemId != "") {
                returnObj.key = _currentAction + "_" + _Inventoryitems + ItemId;
            }
            else if (_currentAction != "" &&
                _Inventoryitems != "" &&
                ItemId == "") {
                returnObj.key = _currentAction + "_" + _Inventoryitems;
            }
            else if (_currentAction != "" &&
                _Inventoryitems == "" &&
                ItemId != "") {
                returnObj.key = _currentAction + "_" + ItemId;
            }
            else if (_currentAction != "" &&
                _Inventoryitems == "" &&
                ItemId == "") {
                returnObj.key = _currentAction;
            }
            else if (_currentAction == "") {
                returnObj.key = "noAction";
            }
            this.logicCombination = returnObj;
            return this.logicCombination;
        };
        GameCity.prototype.createActionText = function () {
            //console.log("createActionText")
            var _actionObj = this.getActionObject();
            var _actionText = "";
            if (_actionObj == null) {
                if (this.getCurrentItem() != undefined)
                    _actionText = this.getCurrentItem().name;
            }
            else {
                var _destText = "";
                if (_actionObj.action == z89.PlayerActionList.GIVE) {
                    _destText = " to ";
                }
                else if (_actionObj.action == z89.PlayerActionList.USE) {
                    _destText = " on ";
                }
                if (_actionObj.inventory.length == 0 && _actionObj.item == null) {
                    //console.log("case 1")
                    _actionText = this.getCurrentActionLabel();
                }
                else if (_actionObj.action != -1 &&
                    _actionObj.inventory.length == 0 &&
                    _actionObj.item != null) {
                    //console.log("case 2")
                    _actionText =
                        this.getCurrentActionLabel() + " " + _actionObj.item.name;
                }
                else if (_actionObj.inventory.length > 0 && _actionObj.item == null) {
                    //console.log("case 3")
                    //console.log(_actionObj.inventory.length)
                    if (_actionObj.inventory.length == 1) {
                        _actionText =
                            this.getCurrentActionLabel() +
                                " " +
                                _actionObj.inventory[0].name +
                                _destText;
                    }
                    else if (_actionObj.inventory.length == 2) {
                        _actionText =
                            this.getCurrentActionLabel() +
                                " " +
                                _actionObj.inventory[0].name +
                                _destText +
                                _actionObj.inventory[1].name;
                    }
                }
                else if (_actionObj.inventory.length > 0 && _actionObj.item != null) {
                    //console.log("case 4")
                    if (_actionObj.inventory.length == 1) {
                        _actionText =
                            this.getCurrentActionLabel() +
                                " " +
                                _actionObj.inventory[0].name +
                                _destText +
                                _actionObj.item.name;
                    }
                }
                else if (_actionObj.key == "noAction" && _actionObj.item != null) {
                    //console.log("case 5", _actionObj.item.name);
                    _actionText = _actionObj.item.name;
                }
            }
            //console.log(_actionText);
            this.setActionText(_actionText);
        };
        GameCity.prototype.checkCombinedItems = function () {
            var _actionObj = this.getActionObject();
            if (_actionObj.inventory.length == 2) {
                var _key = this.getCurrentActionLabel() +
                    "_" +
                    _actionObj.inventory[0].id +
                    "_" +
                    _actionObj.inventory[1].id;
                // console.log(_key)
                if (gameData.ingame.logic[_key] != undefined)
                    return true;
                _key =
                    this.getCurrentActionLabel() +
                        "_" +
                        _actionObj.inventory[1].id +
                        "_" +
                        _actionObj.inventory[0].id;
                if (gameData.ingame.logic[_key] != undefined)
                    return true;
                // console.log(_key)
            }
            return false;
        };
        GameCity.prototype.checkCombinedItemsKey = function () {
            var _actionObj = this.getActionObject();
            if (_actionObj.inventory.length == 2) {
                var _key = this.getCurrentActionLabel() +
                    "_" +
                    _actionObj.inventory[0].id +
                    "_" +
                    _actionObj.inventory[1].id;
                // console.log(_key)
                if (gameData.ingame.logic[_key] != undefined)
                    return _key;
                _key =
                    this.getCurrentActionLabel() +
                        "_" +
                        _actionObj.inventory[1].id +
                        "_" +
                        _actionObj.inventory[0].id;
                if (gameData.ingame.logic[_key] != undefined)
                    return _key;
                // console.log(_key)
            }
            return "";
        };
        GameCity.prototype.executeActionLogic = function (_item) {
            var _actionObj = this.getActionObject();
            console.log(_actionObj);
            //console.log(this.checkCombinedItems())
            if (_actionObj.inventory.length > 0 && _actionObj.item == null) {
                console.log("logic 0");
                //console.log(_actionObj.inventory.length, this.getCurrentActionString(), _actionObj.key)
                if (_actionObj.inventory.length == 1 &&
                    gameData.ingame.logic[_actionObj.key] != undefined) {
                    console.log("logic 1");
                    gameData.ingame.logic[_actionObj.key](this);
                    return true;
                }
                else if (_actionObj.inventory.length == 2 &&
                    this.checkCombinedItems()) {
                    console.log("logic item on item", _actionObj.key);
                    gameData.ingame.logic[this.checkCombinedItemsKey()](this);
                    return true;
                }
            }
            else if (_actionObj.inventory.length == 0 &&
                _actionObj.item != null &&
                gameData.ingame.logic[_actionObj.key] != undefined) {
                console.log("logic 2", _actionObj.key);
                //if (_actionObj.item.itemObj.logic != undefined && _actionObj.item.itemObj.logic[this.getCurrentActionString()] != undefined) { _actionObj.item.itemObj.logic[this.getCurrentActionString()](this); return true; }
                gameData.ingame.logic[_actionObj.key](this);
                return true;
            }
            else if (_actionObj.inventory.length > 0 &&
                _actionObj.item != null &&
                gameData.ingame.logic[_actionObj.key] != undefined) {
                console.log("logic 3", _actionObj.key);
                gameData.ingame.logic[_actionObj.key](this);
                return true;
            }
            else {
                this.player.illogicAction();
            }
            return false;
        };
        GameCity.prototype.resetActions = function () {
            //console.log("resetActions ")
            this.playerActions.resetActions();
            this.currentItem = null;
        };
        GameCity.prototype.returnMessage = function () {
            var _currActionObj = this.getActionObject();
            var _item;
            if (_currActionObj.item == null) {
                _item = _currActionObj.inventory[0];
            }
            else {
                _item = _currActionObj.item;
            }
            var _mess = _item.itemObj.actions[_currActionObj.action].answer[Phaser.Math.RND.integerInRange(0, _item.itemObj.actions[_currActionObj.action].answer.length - 1)];
            this.player.showBaloon(_mess);
        };
        GameCity.prototype.returnMessageExtra = function () {
            var _currActionObj = this.getActionObject();
            var _item;
            if (_currActionObj.item == null) {
                _item = _currActionObj.inventory[0];
            }
            else {
                _item = _currActionObj.item;
            }
            var _obj = _item.itemObj.actions[_currActionObj.action];
            this.player.showBaloonExtra(_obj);
        };
        GameCity.prototype.setCurrentItem = function (_item) {
            this.currentItem = _item;
        };
        GameCity.prototype.getCurrentItem = function () {
            return this.currentItem;
        };
        GameCity.prototype.getInventory = function () {
            return this.playerActions.getInventory();
        };
        GameCity.prototype.getInventorySelected = function () {
            return this.playerActions.getInventorySelected();
        };
        GameCity.prototype.setActionText = function (_text) {
            // console.log("setActionText: " + _text);
            this.playerActions.setText(_text);
        };
        GameCity.prototype.getActionObject = function () {
            return this.logicCombination;
        };
        GameCity.prototype.setActionObject = function (value) {
            this.logicCombination = value;
        };
        GameCity.prototype.getCurrentAction = function () {
            return this.playerActions.getCurrentAction();
        };
        GameCity.prototype.getCurrentActionString = function () {
            return this.playerActions.getCurrentActionString();
        };
        GameCity.prototype.getCurrentActionLabel = function () {
            return this.playerActions.getCurrentActionLabel();
        };
        GameCity.prototype.getSprites = function () {
            return this.groupAll;
        };
        GameCity.prototype.disableInteraction = function () {
            this.gameInteracion = false;
        };
        GameCity.prototype.enableInteraction = function () {
            this.gameInteracion = true;
        };
        GameCity.prototype.isInteractionDisabled = function () {
            return !this.gameInteracion;
        };
        GameCity.prototype.addInventoryItem = function (item) {
            if (item != undefined) {
                // console.log(item);
                this.playerActions.addItem(item);
                this.groupAll.remove(item);
                this.player.play("pickdrop");
            }
            else {
                var _currActionObj = this.getActionObject();
                var _item = void 0;
                if (_currActionObj.item == null) {
                    _item = _currActionObj.inventory[0];
                }
                else {
                    _item = _currActionObj.item;
                }
                //console.log(this.playerActions.isInInventory(_item));
                if (this.playerActions.isInInventory(_item)) {
                    this.player.showBaloon(z89.getLabel(28));
                }
                else {
                    this.player.play("pickdrop");
                    this.playerActions.addItem(_item);
                    this.groupAll.remove(_item);
                    this.setCurrentItem(null);
                }
            }
            //this.saveGameObj.updateItems();
        };
        GameCity.prototype.updateItemObject = function (itemId, key, value) {
            this.gameItemsUtils.getItemById(itemId).updateItemObj(key, value);
        };
        GameCity.prototype.removeInventoryItems = function () {
            this.playerActions.removeItems(this.getActionObject().inventory);
        };
        GameCity.prototype.dropInventoryItem = function () {
            var _currActionObj = this.getActionObject();
            var _item;
            if (_currActionObj.item == null) {
                _item = _currActionObj.inventory[0];
            }
            else {
                _item = _currActionObj.item;
            }
            if (!this.playerActions.isInInventory(_item)) {
                return;
            }
            if (this.player.y >= 705) {
                _item.itemObj.fixedToCamera = true;
                var _x = this.player.x * 1.08;
                _item.itemObj.x = _x;
                _item.itemObj.y = this.player.y;
            }
            else {
                _item.itemObj.fixedToCamera = false;
                _item.itemObj.x = this.player.x;
                _item.itemObj.y = this.player.y + 10;
            }
            var _newItem = new z89.Items(this, _item.itemObj);
            this.groupAll.add(_newItem);
            this.playerActions.removeItem(_item);
            _item.destroy();
            this.player.play("pickdrop");
            //this.saveGameObj.updateItems();
        };
        GameCity.prototype.displayChapterTitle = function (chapterIndex) {
            if (chapterIndex != undefined)
                this.currentChapter = chapterIndex;
            /*
            this.chapterTitle.text = gameData.chapters[this.currentChapter].title;
            this.add
              .tween(this.chapterTitle)
              .to({ alpha: 1 }, 1000, Phaser.Easing.Quadratic.In, true, 500, 0, false)
              .onComplete.add(() => {
                this.game.add
                  .tween(this.chapterTitle)
                  .to(
                    { alpha: 0 },
                    1000,
                    Phaser.Easing.Quadratic.In,
                    true,
                    2000,
                    0,
                    false
                  );
              }, this);
              */
        };
        GameCity.prototype.removeItem = function (itemIndex) {
            this.groupAll.remove(this.gameItemsUtils.getItemById(itemIndex), true);
        };
        GameCity.prototype.getContentsBycontexts = function (contexts) {
            var _arr; //= getZero89Data();
            // console.log(contexts,_arr)
            if (_arr == undefined)
                return [{}];
            var _con;
            var _result = [];
            var ele = false;
            _arr.forEach(function (element) {
                _con = element.contexts;
                if (_con != undefined) {
                    _con.forEach(function (_context) {
                        ele = false;
                        _context.c.forEach(function (tag) {
                            contexts.forEach(function (ctag) {
                                if (ctag == tag.t && ele == false) {
                                    ele = true;
                                    _result.push(element);
                                }
                            });
                        });
                    });
                }
            });
            return _result;
        };
        GameCity.prototype.shootFromHigh = function (targets, shot, callback) {
            //console.log(target);
            // obj example
            /*
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
                    27
                  ],
                  rate: 25,
                  loop: false
                }
              }
            };
      
            let _shot: Phaser.GameObjects.Sprite;
            let _explosion: Phaser.GameObjects.Sprite;
      
            targets.forEach((element, index) => {
              this.groupAll.children.each((sprite: any) => {
                if (sprite.id == element) {
                  //console.log(sprite);
      
                  _shot = this.add.sprite(sprite.x, -100, shot.missile.name);
                  _shot.anchor.set(0.5, 1);
                  _shot.animations
                    .add(
                      "run",
                      shot.missile.animation.frames,
                      shot.missile.animation.rate,
                      shot.missile.animation.loop
                    )
                    .play();
      
                  this.game.add
                    .tween(_shot)
                    .to(
                      { y: sprite.y },
                      1000,
                      Phaser.Easing.Quadratic.In,
                      true,
                      shot.delay * index,
                      0,
                      false
                    )
                    .onComplete.add((shoot: Phaser.Sprite) => {
                      this.game.camera.flash(0xffffff, 2000);
                      _explosion = this.game.add.sprite(
                        sprite.x,
                        sprite.y,
                        "explosion"
                      );
                      _explosion.setOrigin(0.5, 1);
                      _explosion.setScale(2);
                      this.groupAll.remove(
                        this.gameItemsUtils.getItemById(sprite.id)
                      );
                      _explosion.animations
                        .add(
                          "run",
                          shot.explosion.animation.frames,
                          shot.explosion.animation.rate,
                          shot.explosion.animation.loop
                        )
                        .play()
                        .onComplete.add((explosion: Phaser.GameObjects.Sprite) => {
                          explosion.destroy();
      
                          if (index == targets.length - 1) {
                            console.log("callaback");
                          }
                        }, _explosion);
      
                      shoot.kill();
                    }, this);
                }
              }, this);
            });
      
            /*
            _meteor.anchor.set(.5);
            _meteor.animations.add("run", [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true).play();
            this.game.add.tween(_meteor).to({ y: 600 }, 1000, Phaser.Easing.Quadratic.In, true, 0, 0, false).onComplete.add((a, b, c: Phaser.Sprite) => {
      
                    this.game.camera.flash();
                    this.groupAll.remove(this.getItemSpriteId(16));
                    let exp = this.game.add.sprite(600, 600, "explosion");
                    exp.anchor.set(.5);
                    exp.scale.set(2);
                    exp.animations.add("run", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 25, false).play().onComplete.add((a, b, c) => {
      
                            a.kill();
                            this.playerBaloon.showBaloon("Noooooooooo!!!! :D");
      
                    }, exp);
      
      
                    c.kill()
      
      
            }, this, null, _meteor);
      
            */
        };
        return GameCity;
    }(Phaser.Scene));
    z89.GameCity = GameCity;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var GameItemsUtils = (function () {
        function GameItemsUtils(scene) {
            this.scene = scene;
        }
        GameItemsUtils.prototype.addSavedItems = function (_items) {
            var _this = this;
            _items.forEach(function (element) {
                _this.attachItem(element);
            });
        };
        GameItemsUtils.prototype.addItem = function (id) {
            var _itemObj = this.getItemObjById(id);
            this.attachItem(_itemObj);
        };
        GameItemsUtils.prototype.attachItem = function (_itemObj) {
            if (_itemObj != undefined) {
                switch (_itemObj.type) {
                    case 2:
                        //    this.currentState.groupAll.add(new ItemsTruck(this.game, _itemObj));
                        break;
                    case 3:
                        //    this.currentState.groupAll.add(new ItemsContent(this.game, _itemObj));
                        break;
                    case 4:
                        //      this.currentState.groupAll.add(new ItemsSkill(this.game, _itemObj));
                        break;
                    case 5:
                        //console.log("5")
                        this.scene.groupCity.add(new z89.Items(this.scene, _itemObj));
                        break;
                    default:
                        this.scene.groupAll.add(new z89.Items(this.scene, _itemObj));
                        break;
                }
            }
        };
        GameItemsUtils.prototype.getItemObjById = function (id) {
            var _itemObj;
            gameData.ingame.items.forEach(function (element) { if (element.id == id)
                _itemObj = element; });
            return _itemObj;
        };
        GameItemsUtils.prototype.getItemById = function (id) {
            var _itemObj;
            this.scene.groupAll.children.each(function (element) {
                if (element.id == id)
                    _itemObj = element;
            }, this);
            return _itemObj;
        };
        return GameItemsUtils;
    }());
    z89.GameItemsUtils = GameItemsUtils;
})(z89 || (z89 = {}));
/// <reference path="Lib/phaser.d.ts"/>
/// <reference path="./Scenes/Boot.ts"/>
/// <reference path="./Scenes/Preloader.ts"/>
/// <reference path="./Scenes/GameCity.ts"/>
/// <reference path="GameObjects/GameItemsUtils.ts"/>
var z89;
(function (z89) {
    function getLabel(_index) {
        return languages[currentLang][_index];
    }
    z89.getLabel = getLabel;
    z89._game = null;
    z89._config = {
        type: Phaser.AUTO,
        pixelArt: true,
        roundPixels: true,
        parent: 'my-game',
        width: 1080,
        height: 720,
        scene: [
            z89.Boot,
            z89.Preloader,
            z89.GameCity
        ]
    };
    var c64ColorsEnum;
    (function (c64ColorsEnum) {
        c64ColorsEnum[c64ColorsEnum["black"] = 0] = "black";
        c64ColorsEnum[c64ColorsEnum["white"] = 16777215] = "white";
        c64ColorsEnum[c64ColorsEnum["red"] = 6829867] = "red";
        c64ColorsEnum[c64ColorsEnum["light_red"] = 10119001] = "light_red";
        c64ColorsEnum[c64ColorsEnum["cyan"] = 7382194] = "cyan";
        c64ColorsEnum[c64ColorsEnum["purple"] = 7290246] = "purple";
        c64ColorsEnum[c64ColorsEnum["green"] = 5803331] = "green";
        c64ColorsEnum[c64ColorsEnum["light_green"] = 10146436] = "light_green";
        c64ColorsEnum[c64ColorsEnum["blue"] = 3483769] = "blue";
        c64ColorsEnum[c64ColorsEnum["yellow"] = 12109679] = "yellow";
        c64ColorsEnum[c64ColorsEnum["orange"] = 7294757] = "orange";
        c64ColorsEnum[c64ColorsEnum["brown"] = 4405504] = "brown";
        c64ColorsEnum[c64ColorsEnum["dark_grey"] = 4473924] = "dark_grey";
        c64ColorsEnum[c64ColorsEnum["grey"] = 7105644] = "grey";
        c64ColorsEnum[c64ColorsEnum["light_blue"] = 7102133] = "light_blue";
        c64ColorsEnum[c64ColorsEnum["light_grey"] = 9803157] = "light_grey";
    })(c64ColorsEnum = z89.c64ColorsEnum || (z89.c64ColorsEnum = {}));
    function isSaved() { return true; }
    z89.isSaved = isSaved;
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split('&'), sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
    z89.getUrlParameter = getUrlParameter;
    ;
    var initGame = (function () {
        function initGame(config) {
            z89._game = new Phaser.Game(config);
        }
        return initGame;
    }());
    z89.initGame = initGame;
})(z89 || (z89 = {}));
window.onresize = function () { };
window.onload = function () { new z89.initGame(z89._config); };
/// <reference path="gameLanguages.ts"/>
/// <reference path="gameLogic-assets.ts"/>
/// <reference path="gameLogic-chapters.ts"/>
/// <reference path="gameLogic-ingame-conversation.ts"/>
/// <reference path="gameLogic-ingame-items.ts"/>
/// <reference path="gameLogic-ingame-logic.ts"/>
/// <reference path="gameLogic-menu.ts"/>
var languages = {
    en: [
        "drink machine",
        "It's too heavy!!!",
        "No way to pull it!",
        "Maybe it accept money!",
        "It's closed.",
        "It's already closed.",
        "Seems to be a standard drink machine.",
        "I have no money.",
        "Really!?!?!",
        "Do you really want to talk with it?",
        "Coke",
        "Please! Ask the developer to write a better pathfinding function!",
        "terminal",
        "No way!",
        "Nothing strange.",
        "It's really hot! I need something to drink.",
        "garbage bin",
        "hydrant",
        "A stinking garbage bin!",
        "It is illogic!",
        "I won't do that!",
        "Forget it!",
        "I can't drop it!",
        "coins",
        "Quattrocchi, non mi far alterare o ti SCUMM a sangue!!",
        "4eyes",
        "A coke can, what else!",
        "Some coins...",
        "I already have this!",
        "Select an ACTION first!",
        "I'm not stupid!",
        "Michele",
        "He is Mike. Founder of DEVDAY Salerno.",
        "Hey, Mike! What's up.",
        "Hey, Francesco, it's ok. Don't forget our next meetup.",
        "Sure! Where and when?",
        "Saturday 16th September at Puntolingue. We'll talk about blockchain and bitcoins",
        "AMAZING!!!",
        "Here the DEVDAY team organize montly tech meetups!!!",
        "@##@ @##@!!!",
        "Gerardo",
        "Daniele",
        "Davide",
        "He is Gerardo. Founder of DEVDAY Avellino.",
        "Chain",
        "A broken chain",
        "Block",
        "A concrete block",
        "DEVDAY in Bits",
        "A bunch of bits",
        "Blockchain",
        "A blockchain",
        "Bitcoin",
        "A bitcoin",
        "DEVDAY pass",
        "Scotch tape",
        "Broken energy box",
        "Fixed energy box",
        "Someone lost a new Scotch tape!",
        "Seems to be broken! I need something to fix it.",
        "The energy box now is fixed.",
        "DEVDAY PALACE",
        "What a stink!",
        "He is Daniele. Founder of DEVDAY Benevento.",
        "He is Davide. Founder of DEVDAY Napoli.",
        "$ git init\n$ git add *.c\n$ git add README\n$ git commit -m 'DEVDAY first commit'",
        "Hi Gerardo! What's up??",
        "Ehmm!! OK! OK!",
        "Hi Mike! What's going on??",
        "Hi Francesco! Big trouble!\nThe advertising screen is not working, i don't know why!\nSo we can't advice the developers about our events!!\nCould you help me?",
        "Sure!",
        "Francesco, any update?",
        "Not yet!",
        "Thanks Francesco! Now the main screen works properly.",
        "You welcome!",
        "The DEVDAY event screen!",
        "DEVDAY ADV screen",
        "Wow! My Skillset!",
        "I live on the third floor!",
        "building",
        "door",
        "Seems to be not connected.",
        "Wow! It\'s connected.",
        "It\'not connected... maybe later!",
        "This is an experimental website!\nI'm trying to mix the standard personal information website with and adventure game logic.\nDo you think it could work?",
        "DO YOU REALLY WANT TO RESTART?",
        "I want to thanks Richard Davey author of Phaser Framework, PAUL ROBERTSON and JASON TAMMEMAGI for their unaware art contribution to this experiment.",
        "Here some options!!",
        "Jukebox",
        "DEVDAY website",
        "Info",
        "I would like to listen...",
        "Woofer",
        "Nothing to do with this!",
        "I have completed this chapter. Would you like to continue?",
        "Tap me to access the menu.",
        "The GOVERNOR",
        "Hi!",
        "I'm the GOVERNOR... and you are nothing!",
    ]
};
var actions = {
    en: ["PUSH", "PULL", "GIVE", "OPEN", "CLOSE", "EXAMINE", "USE", "PICK UP", "DROP", "TALK TO"],
    it: ["SPINGI", "TIRA", "DAI", "APRI", "CHIUDI", "ESAMINA", "USA", "PRENDI", "LASCIA", "PARLA A"]
};
var currentLang = "en";
var gameData = {
    chapters: null,
    ingame: { conversation: null, logic: null, items: null },
    assets: null,
    menuBlink: null,
    skills: [{ s: "phaser", v: 60 }, { s: "javascript", v: 70 }, { s: "html", v: 75 }, { s: "typescript", v: 60 }, { s: "css", v: 65 }, { s: ".net", v: 70 }, { s: "c#", v: 65 }, { s: "gamedev", v: 50 }, { s: "design", v: 60 }, { s: "ux", v: 65 }, { s: "clm", v: 80 }, { s: "tsql", v: 70 }, { s: "firebase", v: 60 }]
};
var eases = [
    'Linear',
    'Quad.easeIn',
    'Cubic.easeIn',
    'Quart.easeIn',
    'Quint.easeIn',
    'Sine.easeIn',
    'Expo.easeIn',
    'Circ.easeIn',
    'Back.easeIn',
    'Bounce.easeIn',
    'Quad.easeOut',
    'Cubic.easeOut',
    'Quart.easeOut',
    'Quint.easeOut',
    'Sine.easeOut',
    'Expo.easeOut',
    'Circ.easeOut',
    'Back.easeOut',
    'Bounce.easeOut',
    'Quad.easeInOut',
    'Cubic.easeInOut',
    'Quart.easeInOut',
    'Quint.easeInOut',
    'Sine.easeInOut',
    'Expo.easeInOut',
    'Circ.easeInOut',
    'Back.easeInOut',
    'Bounce.easeInOut'
];
gameData.assets = {
    spritesheets: [
        { name: "player", path: "assets/images/game/player.png", width: 126, height: 126, frames: 64 },
        { name: "terminal", path: "assets/images/game/items/terminal.png", width: 52, height: 132, frames: 7 },
        { name: "arete", path: "assets/images/game/people/arete.png", width: 65, height: 138, frames: 4 },
        { name: "daniele", path: "assets/images/game/people/daniele.png", width: 65, height: 138, frames: 4 },
        { name: "davide", path: "assets/images/game/people/davide.png", width: 65, height: 138, frames: 4 },
        { name: "michele", path: "assets/images/game/people/michele.png", width: 65, height: 138, frames: 4 },
        { name: "inventory", path: "assets/images/game/inventory.png", width: 70, height: 70, frames: 2 },
        { name: "icons", path: "assets/images/game/icons/icons.png", width: 80, height: 80, frames: 11 },
        { name: "beam", path: "assets/images/game/beam.png", width: 200, height: 200, frames: 12 },
        { name: "devday", path: "assets/images/game/items/devday.png", width: 320, height: 87, frames: 2 },
        { name: "explosion", path: "assets/images/game/explosion.png", width: 80, height: 80, frames: 28 },
        { name: "meteor", path: "assets/images/game/meteor.png", width: 80, height: 109, frames: 9 },
        { name: "travolta", path: "assets/images/game/people/travolta2.png", width: 248, height: 200, frames: 25 },
        { name: "cable", path: "assets/images/game/items/cable.png", width: 30, height: 40, frames: 20 },
        { name: "cake", path: "assets/images/game/items/cake.png", width: 150, height: 177, frames: 9 },
        { name: "drink-machine", path: "assets/images/game/items/drink-machine.png", width: 80, height: 124, frames: 2 },
        { name: "jukebox", path: "assets/images/game/items/jukebox.png", width: 68, height: 136, frames: 8 },
    ],
    images: [
        { name: "bg-level0", path: "assets/images/game/bg-level0.png" },
        { name: "bg-level1", path: "assets/images/game/bg-level1.png" },
        { name: "bg-level2", path: "assets/images/game/bg-level2.png" },
        //{ name: "bg-level3", path: "assets/images/game/bg-level3.png" },
        { name: "street-level1", path: "assets/images/game/street-level1.png" },
        { name: "street-level0", path: "assets/images/game/street-level0.png" },
        { name: "street-level2", path: "assets/images/game/street-level2.png" },
        { name: "menu-phone", path: "assets/images/game/menu-phone.png" },
        { name: "trash", path: "assets/images/game/items/trash.png" },
        { name: "hydrant", path: "assets/images/game/items/hydrant.png" },
        { name: "coke", path: "assets/images/game/items/coke.png" },
        { name: "coins", path: "assets/images/game/items/coins.png" },
        { name: "truck", path: "assets/images/game/items/truck.png" },
        { name: "truck-wheel", path: "assets/images/game/items/truck-wheel.png" },
        { name: "truck-empty", path: "assets/images/game/items/truck-empty.png" },
        { name: "hack", path: "assets/images/game/items/hack.png" },
        { name: "chain", path: "assets/images/game/items/chain.png" },
        { name: "block", path: "assets/images/game/items/block.png" },
        { name: "bit", path: "assets/images/game/items/bit.png" },
        { name: "blockchain", path: "assets/images/game/items/blockchain.png" },
        { name: "bitcoin", path: "assets/images/game/items/bitcoin.png" },
        { name: "invite", path: "assets/images/game/items/invite.png" },
        { name: "skills", path: "assets/images/game/items/skills.png" },
        { name: "newsbg", path: "assets/images/game/items/news-bg.png" },
        { name: "woofer", path: "assets/images/game/items/woofer.png" },
        { name: "triangleBtn", path: "assets/images/game/triangle-btn.png" },
        { name: "scotch", path: "assets/images/game/items/scotch.png" },
        { name: "spinner", path: "assets/images/game/spinner.png" },
        { name: "scanlines", path: "assets/images/game/intro/scanlines.png" },
        { name: "halftone", path: "assets/images/game/halftone.png" },
        { name: "readmore", path: "assets/images/game/readmore.png" },
        { name: "terminalBg", path: "assets/images/game/terminal/terminal.png" },
        { name: "terminalKeyboard", path: "assets/images/game/terminal/keyboard.png" },
        { name: "bg-home", path: "assets/images/game/buildings/home.png" },
        { name: "bg-devday", path: "assets/images/game/buildings/devday.png" },
        { name: "bg-skills", path: "assets/images/game/buildings/skills.png" },
        { name: "bg-cake", path: "assets/images/game/buildings/cake.png" },
        { name: "bg-arcade", path: "assets/images/game/buildings/arcade.png" },
        { name: "bg-aerosol", path: "assets/images/game/buildings/aerosol.png" },
        { name: "bg-contact", path: "assets/images/game/buildings/contact.png" },
    ],
    sounds: [
        { name: "intro", paths: ["assets/sounds/intro.ogg", "assets/sounds/intro.m4a"], volume: 1, loop: false },
    ],
    bitmapfont: [
        { name: "commodore", imgpath: "assets/fonts/carrier_command.png", xmlpath: "assets/fonts/carrier_command.xml" }
    ]
};
gameData.chapters = [
    {
        title: "CHAPTER ONE:\nTHE DEVDAY TROUBLE!",
        completed: false,
        complete: function (cs) {
            cs.removeItem(24);
            cs.updateItemObject(23, "name", z89.getLabel(57));
            cs.gameItemsUtils.getItemById(23).playAnim("fixed");
            cs.gameItemsUtils.getItemById(23).itemObj.fixed = true;
            cs.gameItemsUtils.getItemById(22).start();
            cs.updateItemObject(2, "working", true);
            cs.gameItemsUtils.getItemById(2).playAnim("working");
            cs.updateItemObject(22, "isStarted", true);
            cs.updateItemObject(19, "conversationStatus", 1);
            //cs.saveGameObj.updateItems();
        }
    },
    {
        title: "CHAPTER TWO:\nBACK TO HOME!",
        completed: false,
        complete: function (cs) {
            cs.gameItemsUtils.getItemById(50).start();
            cs.updateItemObject(22, "isStarted", true);
            //cs.saveGameObj.updateItems();
        }
    }
];
gameData.ingame.conversation = {
    RESTART: [{
            text: z89.getLabel(85),
            isItem: false,
            fork: true,
            options: [
                { option: "YES", action: function (cs, target) { cs.restartGame(); } },
                { option: "NO", action: function (cs, target) { cs.conversationBaloon.hideBaloon(); } }
            ]
        }],
    CHAPTER_COMPLETED: [{
            text: z89.getLabel(94),
            isItem: false,
            fork: true,
            options: [
                { option: "LEAVE THE GAME", action: function (cs, target) {
                        gameData.chapters.forEach(function (element) {
                            if (!element.completed)
                                element.complete(cs);
                        });
                    } },
                { option: "YES", action: function (cs, target) {
                        cs.currentChapter++;
                        cs.displayChapterTitle(cs.currentChapter);
                        cs.playerMenu.hide();
                        cs.playerActions.hide();
                        cs.playerBaloon.hideBaloon();
                        cs.conversationBaloon.hideBaloon();
                    } }
            ]
        }],
    INFO: [{
            label: "info",
            text: z89.getLabel(84),
            isItem: false,
            fork: true,
            options: [
                { option: "Credits", goto: "credits" }
            ]
        },
        {
            label: "credits",
            text: z89.getLabel(86),
            isItem: false,
            fork: true,
            options: [
                { option: "back", goto: "info" }
            ]
        }],
    OPTIONS: [{
            text: z89.getLabel(87),
            isItem: false
        }],
    TALKTO_devday: [
        {
            text: z89.getLabel(89),
            isItem: false,
            fork: true,
            options: [{ option: "DEVDAY website", link: "http://www.devday.it" }, { option: "DEVDAY on youtube", link: "https://www.youtube.com/channel/UCUmykbn_rG5dExSncCgW9Nw" }, { option: "DEVDAY galaxy", link: "http://dd.zero89.it" }]
        }
    ],
    USE_jukebox: [
        {
            text: z89.getLabel(91),
            isItem: false,
            fork: true,
            options: [
                {
                    option: "Nothing", action: function (cs, target) {
                        cs.gameUtils.addDelay(500, function () {
                            var _jukebox = cs.gameItemsUtils.getItemById(11);
                            _jukebox.play("idle");
                            cs.stopSound();
                            var _woofer = cs.gameItemsUtils.getItemById(12);
                            _woofer.tween.pause();
                        });
                        cs.conversationBaloon.hideBaloon();
                        cs.player.play("use");
                    }
                },
                {
                    option: "Some 8bit Tune", action: function (cs, target) {
                        cs.playSound(0);
                        cs.gameUtils.addDelay(500, function () {
                            var _jukebox = cs.gameItemsUtils.getItemById(11);
                            _jukebox.play("play");
                            var _woofer = cs.gameItemsUtils.getItemById(12);
                            _woofer.tween.resume();
                        });
                        cs.conversationBaloon.hideBaloon();
                        cs.player.play("use");
                    }
                }
            ]
        }
    ],
    TALKTO_27: [
        {
            text: z89.getLabel(97),
            isItem: false,
            next: true,
        },
        {
            text: z89.getLabel(98),
            isItem: true,
            next: true,
        },
        {
            text: z89.getLabel(67),
            isItem: false,
            end: true,
        },
    ],
    TALKTO_16: [
        {
            text: z89.getLabel(66),
            isItem: false,
            next: true,
        },
        {
            text: z89.getLabel(65),
            isItem: true,
            next: true,
        },
        {
            text: z89.getLabel(67),
            isItem: false,
            end: true,
        },
    ],
    TALKTO_19_null: [
        {
            text: z89.getLabel(68),
            isItem: false,
            next: true,
        },
        {
            text: z89.getLabel(69),
            isItem: true,
            next: true,
        },
        {
            text: z89.getLabel(70),
            isItem: false,
            end: true,
            callback: function (cs) {
                cs.updateItemObject(19, "conversationStatus", 0);
            }
        }
    ],
    TALKTO_19_0: [
        {
            text: z89.getLabel(71),
            isItem: true,
            next: true,
        },
        {
            text: z89.getLabel(72),
            isItem: false,
            end: true,
        }
    ],
    TALKTO_19_1: [
        {
            text: z89.getLabel(73),
            isItem: true,
            next: true,
        },
        {
            text: z89.getLabel(74),
            isItem: false,
            end: true,
        }
    ]
};
gameData.ingame.items = [
    {
        id: 50,
        type: 4,
        onStart: true,
        sprite: "skills",
        name: z89.getLabel(79),
        x: 1161 + 174,
        y: 4 + 215 - 48,
        interactive: true,
        offsetX: 0,
        isStarted: false,
        fixedToCamera: false,
        checkIntersect: false,
        working: false
    },
    {
        id: 21,
        type: 1,
        onStart: true,
        animations: [{ name: "idle", frames: [0, 1], rate: 1, loop: true }],
        sprite: "devday",
        currentAnimation: "idle",
        name: z89.getLabel(61),
        x: 869,
        y: 218 - 48,
        interactive: true,
        offsetX: 0,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 22,
        type: 3,
        onStart: true,
        sprite: "newsbg",
        name: z89.getLabel(76),
        x: 866,
        y: 336 - 48,
        interactive: true,
        offsetX: 0,
        fixedToCamera: false,
        isStarted: false,
        contexts: ["devday"],
    },
    {
        id: 4,
        type: 1,
        onStart: true,
        sprite: "trash",
        name: z89.getLabel(16),
        x: 450,
        y: 649 - 48,
        interactive: true,
        firstMessage: [z89.getLabel(18)],
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false,
        moved: false
    },
    {
        id: 19,
        type: 1,
        onStart: true,
        sprite: "michele",
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5, loop: true }],
        currentAnimation: "idle",
        conversationStatus: null,
        name: z89.getLabel(31),
        x: 800,
        y: 650 - 48,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false
    }, {
        id: 17,
        type: 1,
        onStart: true,
        sprite: "daniele",
        animations: [{ name: "idle", frames: [1, 2, 3, 0], rate: 4.5, loop: true }],
        name: z89.getLabel(41),
        currentAnimation: "idle",
        x: 1040,
        y: 650 - 48,
        turnLeft: true,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
    }, {
        id: 27,
        type: 1,
        onStart: true,
        sprite: "daniele",
        animations: [{ name: "idle", frames: [1, 2, 3, 0], rate: 4.5, loop: true }],
        name: z89.getLabel(96),
        currentAnimation: "idle",
        x: 1440,
        y: 650 - 48,
        turnLeft: true,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
    },
    {
        id: 18,
        type: 1,
        onStart: true,
        sprite: "davide",
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5.5, loop: true }],
        name: z89.getLabel(42),
        currentAnimation: "idle",
        x: 950,
        y: 650 - 48,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 16,
        type: 1,
        onStart: true,
        sprite: "arete",
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5.2, loop: true }],
        name: z89.getLabel(40),
        currentAnimation: "idle",
        x: 720,
        y: 650 - 48,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        turnLeft: true,
    },
    {
        id: 23,
        type: 1,
        sprite: "cable",
        onStart: true,
        name: z89.getLabel(56),
        animations: [{ name: "fixed", frames: [9, 8, 7, 6, 5, 4, 3, 2, 1], rate: 15, loop: true }, { name: "broken", frames: [19, 18, 17, 16, 15, 14, 13, 12, 11, 10], rate: 15, loop: true }],
        currentAnimation: "broken",
        x: 650,
        y: 600 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false,
        fixed: false
    },
    {
        id: 24,
        type: 1,
        sprite: "scotch",
        onStart: true,
        name: z89.getLabel(55),
        x: 450,
        y: 648 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    }, {
        id: 2,
        type: 1,
        onStart: true,
        sprite: "terminal",
        animations: [{ name: "notWorking", frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4], rate: 5, loop: true }, { name: "working", frames: [5, 6], rate: 1, loop: true }],
        currentAnimation: "notWorking",
        working: false,
        name: z89.getLabel(12),
        x: 1214,
        y: 644 - 48,
        interactive: true,
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 5,
        type: 1,
        onStart: true,
        sprite: "cake",
        animations: [{ name: "idle", frames: [0, 1, 2, 3, 4, 5, 6, 7, 8], rate: 10, loop: true }],
        currentAnimation: "idle",
        name: "cake",
        x: 1679,
        y: 290 - 48,
        interactive: true,
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 1,
        type: 1,
        sprite: "drink-machine",
        name: z89.getLabel(0),
        x: 1700,
        y: 724 - 48,
        animations: [{ name: "idle", frames: [0, 1], rate: 1, loop: true }],
        currentAnimation: "idle",
        onStart: true,
        interactive: true,
        offsetX: 70,
        fixedToCamera: true,
        checkIntersect: true
    },
    ,
    {
        id: 11,
        type: 1,
        sprite: "jukebox",
        name: z89.getLabel(88),
        x: 2450,
        y: 650 - 48,
        animations: [{ name: "idle", frames: [0], rate: 1, loop: false }, { name: "play", frames: [1, 2, 3, 4, 5, 6, 7, 2, 4, 6, 3, 1, 6, 3, 4, 6, 5, 7, 2, 5, 3, 4], rate: 14, loop: true }],
        currentAnimation: "play",
        onStart: true,
        interactive: true,
        offsetX: 70,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 12,
        type: 1,
        sprite: "woofer",
        name: z89.getLabel(92),
        x: 2450,
        y: 650 - 48,
        currentAnimation: "idle",
        onStart: true,
        interactive: false,
        offsetX: 70,
        fixedToCamera: false,
        checkIntersect: false
    }
];
gameData.ingame.logic =
    {
        // examine terminal 
        EXAMINE_2: function (cs) {
            if (cs.gameItemsUtils.getItemById(2).itemObj.working) {
                cs.player.showBaloon(z89.getLabel(82));
            }
            else {
                cs.player.showBaloon(z89.getLabel(81));
            }
        },
        // use terminal
        USE_2: function (cs) {
            if (cs.gameItemsUtils.getItemById(2).itemObj.working) {
                cs.Terminal.show(0);
                cs.playerActions.hide();
            }
            else {
                cs.player.showBaloon(z89.getLabel(83));
            }
        },
        // examine drink machine
        EXAMINE_50: function (cs) {
            cs.player.showBaloon(z89.getLabel(78));
        },
        // examine drink machine
        EXAMINE_1: function (cs) {
            cs.player.showBaloon(z89.getLabel(6));
        },
        // devday palace
        EXAMINE_21: function (cs) {
            cs.player.showBaloon(z89.getLabel(38));
        },
        // devday screen
        EXAMINE_22: function (cs) {
            cs.player.showBaloon(z89.getLabel(75));
        },
        //use devday
        USE_21: function (cs) {
            var convObj = {
                key: "TALKTO_devday",
                action: null,
                inventory: null,
                item: null
            };
            cs.conversationBaloon.setUpConversation(convObj);
        },
        //use jukoxeb
        USE_11: function (cs) {
            var convObj = {
                key: "USE_jukebox",
                action: null,
                inventory: null,
                item: null
            };
            cs.conversationBaloon.setUpConversation(convObj);
        },
        //examine garbage 
        EXAMINE_4: function (cs) {
            cs.player.showBaloon(z89.getLabel(62));
        },
        //push garbage 
        PUSH_4: function (cs) {
            var item = cs.gameItemsUtils.getItemById(4);
            if (!item.itemObj.moved) {
                cs.player.play("use");
                item.itemObj.moved = true;
                if (cs.player.x < 450) {
                    cs.game.add.tween(item).to({ x: 500 }, 500, Phaser.Easing.Quadratic.Out, true, 400, 0, false);
                    item.updateItemObj("x", 500);
                }
                else {
                    cs.game.add.tween(item).to({ x: 400 }, 500, Phaser.Easing.Quadratic.Out, true, 400, 0, false);
                    item.updateItemObj("x", 400);
                }
            }
            else {
                cs.player.showBaloon(z89.getLabel(93));
            }
        },
        //examine scotch tape
        EXAMINE_24: function (cs) { cs.player.showBaloon(z89.getLabel(58)); },
        //examine energy box
        EXAMINE_23: function (cs) {
            if (cs.gameItemsUtils.getItemById(23).itemObj.fixed) {
                cs.player.showBaloon(z89.getLabel(60));
            }
            else {
                cs.player.showBaloon(z89.getLabel(59));
            }
        },
        //pickup scotch
        PICKUP_24: function (cs) { cs.addInventoryItem(cs.gameItemsUtils.getItemById(24)); },
        //drop scotch
        DROP_24: function (cs) { cs.dropInventoryItem(); },
        //use scotch on broken 
        USE_24_23: function (cs) {
            cs.player.play("use");
            cs.removeInventoryItems();
            cs.gameUtils.addDelay(1000, function () {
                cs.updateItemObject(23, "name", z89.getLabel(57));
                cs.gameItemsUtils.getItemById(23).playAnim("fixed");
                cs.gameItemsUtils.getItemById(23).itemObj.fixed = true;
                cs.gameItemsUtils.getItemById(22).start();
                cs.updateItemObject(22, "isStarted", true);
                cs.updateItemObject(19, "conversationStatus", 1);
                cs.updateItemObject(2, "working", true);
                cs.gameItemsUtils.getItemById(2).playAnim("working");
                cs.saveGameObj.updateItems();
                gameData.chapters[cs.currentChapter].completed = true;
                var convObj = {
                    key: "CHAPTER_COMPLETED",
                    action: null,
                    inventory: null,
                    item: null
                };
                cs.conversationBaloon.setUpConversation(convObj);
            });
        },
        //examine gerardo
        EXAMINE_16: function (cs) {
            cs.player.showBaloon(z89.getLabel(43));
        },
        TALKTO_16: function (cs) {
            cs.conversationBaloon.setUpConversation({
                key: "TALKTO_16",
                action: null,
                inventory: null,
                item: cs.currentItem
            });
        },
        TALKTO_27: function (cs) {
            cs.conversationBaloon.setUpConversation({
                key: "TALKTO_27",
                action: null,
                inventory: null,
                item: cs.currentItem
            });
        },
        //examine daniele
        EXAMINE_17: function (cs) {
            cs.player.showBaloon(z89.getLabel(63));
        },
        //examine davide
        EXAMINE_18: function (cs) {
            cs.player.showBaloon(z89.getLabel(64));
        },
        //examine michele
        EXAMINE_19: function (cs) {
            cs.player.showBaloon(z89.getLabel(32));
        },
        //talkto michele
        TALKTO_19: function (cs) {
            var item = cs.gameItemsUtils.getItemById(19);
            var convObj = {
                key: "",
                action: null,
                inventory: null,
                item: cs.currentItem
            };
            //console.log(item.itemObj.conversationStatus)
            switch (item.itemObj.conversationStatus) {
                case null:
                    convObj.key = "TALKTO_19_null";
                    break;
                case 0:
                    convObj.key = "TALKTO_19_0";
                    break;
                case 1:
                    convObj.key = "TALKTO_19_1";
                    break;
            }
            cs.conversationBaloon.setUpConversation(convObj);
        },
    };
/*

gameData.ingame.logic =

    {

        // devday palace
        EXAMINE_21: (cs: z89.GameCity) => {

            cs.player.showBaloon(z89.getLabel(38));
        },
        USE_21: (cs: z89.GameCity) => {

            cs.conversationBaloon.setUpConversation({
                key: "TALKTO_devday",
                action: null,
                inventory: null,
                item: null
            });

            cs.player.showBaloon(z89.getLabel(38));
        },

        // scotch tape
        EXAMINE_24: (cs: z89.GameCity) => {

            cs.player.showBaloon(z89.getLabel(58));
        },

        //broken energy box
        EXAMINE_23: (cs: z89.GameCity) => {

            if (cs.gameItemsUtils.getItemById(23).itemObj.fixed) {

                cs.player.showBaloon(z89.getLabel(60));
            } else {
                cs.player.showBaloon(z89.getLabel(59));

            }


        },

        PICKUP_24: (cs: z89.GameCity) => { cs.addInventoryItem(cs.gameItemsUtils.getItemById(24)); },
        DROP_24: (cs: z89.GameCity) => { cs.dropInventoryItem(); },

        USE_24_23: (cs: z89.GameCity) => {

            cs.player.play("use");
            cs.removeInventoryItems();
            cs.gameUtils.addDelay(1000, () => {
                cs.gameItemsUtils.getItemById(23).updateItemObj("name", z89.getLabel(57));
                cs.gameItemsUtils.getItemById(23).playAnim("fixed");
                cs.gameItemsUtils.getItemById(23).itemObj.fixed = true;
                cs.gameItemsUtils.getItemById(22).start();
                cs.saveGameObj.updateItems();

            });

        },

        //use money on drink machine
        USE_8_1: (cs: z89.GameCity) => {
            cs.player.play("use");
            cs.removeInventoryItems();
            cs.gameUtils.addDelay(2000, () => { cs.gameItemsUtils.addItem(7); });

        },

        //use coin o coin
        USE_8_15: (cs: z89.GameCity) => {
            console.log("coin on coins");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(7);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(7));

        },

        //use block on chain
        USE_8_28: (cs: z89.GameCity) => {
            console.log("block on chain");
            cs.playerBaloon.showBaloon("I GOT BLOCKCHAIN!");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(30);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(30));

        },
        //use bit o coin
        USE_29_15: (cs: z89.GameCity) => {
            console.log("bit on coin");
            cs.playerBaloon.showBaloon("I GOT A BITCOIN!");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(32);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(32));

        },
        USE_30_32: (cs: z89.GameCity) => {
            console.log("bitcoin on blockchain");
            cs.playerBaloon.showBaloon("I GOT DEVDAY PASS!");
            cs.removeInventoryItems();
            cs.gameItemsUtils.addItem(31);
            cs.addInventoryItem(cs.gameItemsUtils.getItemById(31));

        },

        GIVE_31_13: (cs: z89.GameCity) => {
            console.log("pass to daniele");
            cs.player.play("use");
            cs.removeInventoryItems();

            let convObj: any = {
                key: "TALKTO_custom",
                action: null,
                inventory: null,
                item: cs.currentItem
            }
            cs.gameUtils.addDelay(1000, () => {

                cs.conversationBaloon.setUpConversation(convObj);

            });


        }

    }

*/ 
gameData.menuBlink = [
    { name: "Home", frame: 0, to: 100, x: 0, y: 0 },
    { name: "DevDay", frame: 4, to: 875, x: 0, y: 110 },
    { name: "Skills", frame: 5, to: 1354, x: 100, y: 110 },
    { name: "Cake", frame: 6, to: 1590, x: 200, y: 110 },
    { name: "Arcade", frame: 7, to: 2100, x: 0, y: 220 },
    { name: "Aerosol", frame: 8, to: 2580, x: 100, y: 0 },
    { name: "Contact", frame: 9, to: 3300, x: 200, y: 0 },
];
var z89;
(function (z89) {
    var conversationBaloon = (function (_super) {
        __extends(conversationBaloon, _super);
        // this.game.time.events
        function conversationBaloon(scene, x, y) {
            var _this = _super.call(this, scene) || this;
            _this.setDepth(1000).setAlpha(0);
            _this.isSkippable = true;
            _this.isPlaying = false;
            _this.baloonBg = _this.scene.add.image(0, 20, "baloonBg");
            _this.baloonBg
                .setOrigin(0.5, 1)
                .setAlpha(0.8)
                .on("pointerdown", function () {
                _this.skip();
            }, _this);
            _this.add(_this.baloonBg);
            _this.baloonBorder = _this.scene.add.image(0, 20, "baloonBorder");
            _this.baloonBorder.setOrigin(0.5, 1);
            _this.add(_this.baloonBorder);
            _this.baloonPin = _this.scene.add.image(0, 30, "baloonPin");
            _this.baloonPin.setOrigin(0.5, 1);
            _this.add(_this.baloonPin);
            _this.baloonText = _this.scene.add.text(0, 0, "", {
                fontFamily: "Arial",
                fontSize: 20
            });
            _this.baloonText
                .setWordWrapWidth(320)
                .setTint(0x00ff00)
                .setOrigin(0.5)
                .setDepth(2001);
            _this.add(_this.baloonText);
            _this.scene.add.existing(_this);
            return _this;
        }
        conversationBaloon.prototype.skip = function () {
            if (!this.isSkippable)
                return;
            this.hideBaloon();
            //this.scene.time.events.remove(this.timeEvent);
            this.currentStep++;
            var _obj = this.conversationObj[this.currentStep];
            if (_obj != undefined) {
                this.displayStep();
            }
            else {
                this.isPlaying = false;
            }
            //console.log(_obj)
            //if(_obj.next!=undefined ){ this.displayStep(); }
        };
        conversationBaloon.prototype.showBaloon = function (_text) {
            if (_text == undefined)
                return;
            this.baloonText.setText(_text);
            this.fixSize();
            this.scene.tweens.add({
                targets: this,
                y: this.y + 10,
                alpha: 1,
                duration: 500
            });
        };
        conversationBaloon.prototype.hideBaloon = function () {
            this.baloonText.y = 0;
            this.alpha = 0;
        };
        conversationBaloon.prototype.stopConversation = function () {
            //this.forkBtns.children.removeAll();
            this.baloonText.y = 0;
            this.isPlaying = false;
            this.hideBaloon();
            if (this.baloonTarget != null) {
                this.baloonX = this.baloonTarget.x;
                this.baloonY = this.baloonTarget.y - this.baloonTarget.height - 50;
                this.showBaloon(z89.getLabel(39));
                // this.game.time.events.add(1500, () => { this.hideBaloon(); }, this);
            }
        };
        conversationBaloon.prototype.setUpConversation = function (_actionObj) {
            this.isPlaying = true;
            this.currentStep = 0;
            if (_actionObj.item != null)
                this.setItemTarget(_actionObj.item);
            this.setConversationKey(_actionObj.key);
            this.setConversationObj(_actionObj.key);
            this.startConversation();
        };
        conversationBaloon.prototype.setItemTarget = function (item) {
            this.baloonTarget = item;
        };
        conversationBaloon.prototype.setConversationKey = function (key) {
            this.conversationKey = key;
        };
        conversationBaloon.prototype.setConversationObj = function (key) {
            if (gameData.ingame.conversation[key] != undefined)
                this.conversationObj = gameData.ingame.conversation[key];
        };
        conversationBaloon.prototype.fixSize = function () {
            this.setX(this.scene.player.x);
            this.setY(this.scene.player.y - this.scene.player.height - 50);
            this.baloonBg.setScale(1, (this.baloonText.getBounds().height + 20) / 50);
            var bound = this.baloonBg.getBounds();
            this.baloonText.setY(this.baloonText.y -
                (this.baloonText.getBounds().y - this.baloonBg.getBounds().y) +
                10);
        };
        conversationBaloon.prototype.startConversation = function () {
            if (this.baloonTarget != null) {
                if (this.scene.player.x < this.baloonTarget.x) {
                    this.baloonTarget.turnLeft();
                }
                else {
                    this.baloonTarget.turnRight();
                }
            }
            this.hideBaloon();
            this.displayStep();
        };
        conversationBaloon.prototype.displayStep = function () {
            this.baloonText.y = 0;
            // this.forkBtns.removeAll();
            this.isSkippable = true;
            if (!this.isPlaying) {
                return;
            }
            var _obj = this.conversationObj[this.currentStep];
            if (_obj == undefined) {
                this.hideBaloon();
                return;
            }
            if (_obj.isItem) {
                this.baloonText.tint = 0xffffff;
                this.baloonBorder.tint = 0xffffff;
                this.baloonPin.tint = 0xffffff;
                this.baloonX = this.baloonTarget.x;
                this.baloonY = this.baloonTarget.y - this.baloonTarget.height - 50;
            }
            else {
                this.baloonText.tint = 0x00ff00;
                this.baloonBorder.tint = 0x00ff00;
                this.baloonPin.tint = 0x00ff00;
                this.baloonX = this.scene.player.x;
                this.baloonY = this.scene.player.y - this.scene.player.height - 50;
            }
            /*
                  if (_obj.next != undefined) { this.timeEvent = this.game.time.events.add(this.getTime(_obj.text.length), () => { this.currentStep++; this.displayStep(); }, this) }
      
                  if (_obj.end != undefined) { this.timeEvent = this.game.time.events.add(this.getTime(_obj.text.length), () => { this.currentStep = 0; this.hideBaloon(); this.isPlaying = false; }, this) }
                  */
            if (_obj.callback != undefined) {
                _obj.callback(this.scene);
            }
            if (_obj.fork != undefined) {
                this.isSkippable = false;
                this.showOptions(_obj);
                return;
            }
            this.showBaloon(_obj.text);
        };
        conversationBaloon.prototype.getTime = function (textLenght) {
            var _time = (textLenght * 1000) / 15;
            if (_time < 1500)
                return 1500;
            return _time;
        };
        conversationBaloon.prototype.showOptions = function (_obj) {
            var _this = this;
            if (_obj == undefined)
                return;
            this.x = this.baloonX;
            this.y = this.baloonY;
            var _btn;
            var _btnText;
            var _nextPos = 0;
            var _totHeight = 0;
            _obj.options.forEach(function (element, index) {
                _btn = _this.scene.add.sprite(0, _nextPos, "forkBtn");
                _btn.setOrigin(0.5, 1);
                _btn.on("pointerdown", function (a, b, c) {
                    if (c.goto != undefined) {
                        _this.currentStep = _this.goToLabel(c.goto);
                    }
                    if (c.link != undefined) {
                        _this.currentStep++;
                        window.open(c.link, "_blank");
                    }
                    if (c.action != undefined) {
                        c.action(_this.scene, _this.baloonTarget);
                        _this.hideBaloon();
                        return;
                    }
                    _this.displayStep();
                }, _this);
                _btnText = _this.scene.add.text(0, _nextPos - 10, element.option, {
                    fontFamily: "Arial",
                    fontSize: 10
                });
                //_btnText.maxWidth = 290;
                _btnText.setOrigin(0.5, 1);
                if (_obj.isItem) {
                    _btn.tint = 0x333333;
                    _btnText.tint = 0xfefefe;
                }
                else {
                    _btn.tint = 0x0f6c0f;
                    _btnText.tint = 0xffffff;
                }
                _btn.height = _btnText.height + 30;
                _nextPos = _nextPos - (_btnText.height + 25) - 20;
                _totHeight = _totHeight + _btnText.height + 50;
            });
            if (_obj.text != undefined && _obj.text != "") {
                this.baloonText.text = _obj.text;
                this.baloonText.y = _nextPos;
                _totHeight += this.baloonText.height + 15;
            }
            this.baloonBg.height = _totHeight + 15;
            this.alpha = 1;
            this.add([_btn, _btnText]);
            //this.game.add.tween(this).to({ y: this.y + 10, alpha: 1 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
        };
        conversationBaloon.prototype.goToLabel = function (label) {
            var _index = 0;
            this.conversationObj.forEach(function (element, index) {
                if (element.label != undefined && element.label == label) {
                    _index = index;
                }
            });
            return _index;
        };
        conversationBaloon.prototype.isConversationActive = function () {
            return this.isPlaying;
        };
        return conversationBaloon;
    }(Phaser.GameObjects.Container));
    z89.conversationBaloon = conversationBaloon;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var GameUtils = (function () {
        function GameUtils(scene) {
            this.scene = scene;
        }
        GameUtils.prototype.addDelay = function (delay, callback) {
            // this.scene.time.events.add(delay, callback);
        };
        GameUtils.prototype.tweenTint = function (obj, startColor, endColor, duration, delay, callback) {
            if (duration === void 0) { duration = 250; }
            if (delay === void 0) { delay = 0; }
            if (callback === void 0) { callback = null; }
            var color;
            this.tween = this.scene.tweens.addCounter({
                from: 0,
                to: 100,
                duration: duration,
                delay: delay,
                onUpdate: function (tween) {
                    color = Phaser.Display.Color.Interpolate.ColorWithColor(startColor, endColor, 100, tween.getValue());
                    obj.tint = Phaser.Display.Color.GetColor(color.r, color.g, color.b);
                },
                onComplete: callback
            });
        };
        return GameUtils;
    }());
    z89.GameUtils = GameUtils;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var Items = (function (_super) {
        __extends(Items, _super);
        function Items(scene, itemObj) {
            var _this = 
            //console.log(itemObj)
            _super.call(this, scene, itemObj.x, itemObj.y, itemObj.sprite) || this;
            _this.scene = scene;
            var config;
            var repeat = -1;
            // console.log(itemObj)
            if (itemObj.animations != undefined) {
                itemObj.animations.forEach(function (element) {
                    //console.log(element)
                    if (!element.loop)
                        repeat = 0;
                    config = {
                        key: itemObj.id + "-" + element.name,
                        frames: scene.anims.generateFrameNumbers(itemObj.sprite, { frames: true, outputArray: element.frames }),
                        frameRate: element.rate,
                        repeat: repeat
                    };
                    _this.anims.animationManager.create(config);
                });
                //console.log(itemObj.currentAnimation);
                _this.play(itemObj.id + "-" + itemObj.currentAnimation);
                _this.depth = _this.y;
            }
            _this.setOrigin(0.5, 1).setInteractive();
            if (itemObj.scale != undefined)
                _this.setScale(itemObj.scale);
            _this.id = itemObj.id;
            _this.itemObj = itemObj;
            _this.name = itemObj.name;
            _this._isInteractive = itemObj.interactive;
            if (itemObj.fixedToCamera)
                _this.setScrollFactor(0);
            if (itemObj.turnLeft != undefined)
                _this.turnLeft();
            if (_this.isInteractive) {
                //this.input.enabled = true;
                //this.input.priorityID = 1;
                _this.on("pointerdown", function () {
                    if (_this.scene.isInteractionDisabled())
                        return;
                    var _currentItem = _this.scene.getCurrentItem();
                    if (_this.scene.playerActions.IsOpen() && _currentItem != undefined && _currentItem.id != _this.id)
                        _this.scene.playerActions.hide();
                    var _playerDest = _this.x;
                    if (_this.scene.player.x < _this.x) {
                        _playerDest -= _this.itemObj.offsetX;
                    }
                    else {
                        _playerDest += _this.itemObj.offsetX;
                    }
                    _this.scene.player.goTo(_playerDest, _this.y, _this);
                }, _this);
            }
            _this.scene.add.existing(_this);
            return _this;
        }
        Items.prototype.update = function () {
            if (this.fixedToCamera)
                this.cameraOffset.x = (this.scene.camera.x * -1.1) + this.itemObj.x;
        };
        Items.prototype.isInteractive = function () {
            return this._isInteractive;
        };
        Items.prototype.turnLeft = function () {
            this.setFlipX(true);
        };
        Items.prototype.turnRight = function () {
            this.setFlipX(false);
        };
        Items.prototype.updateItemObj = function (_key, _value) {
            this.itemObj[_key] = _value;
            if (_key == "name")
                this.name = _value;
        };
        Items.prototype.playAnim = function (_anim) {
            this.itemObj.currentAnimation = _anim;
            this.play(_anim);
        };
        Items.prototype.start = function () {
        };
        return Items;
    }(Phaser.GameObjects.Sprite));
    z89.Items = Items;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var PlayerStates;
    (function (PlayerStates) {
        PlayerStates[PlayerStates["IDLE"] = 0] = "IDLE";
        PlayerStates[PlayerStates["WALKING"] = 1] = "WALKING";
        PlayerStates[PlayerStates["RUNNING"] = 2] = "RUNNING";
        PlayerStates[PlayerStates["JUMPING"] = 3] = "JUMPING";
    })(PlayerStates = z89.PlayerStates || (z89.PlayerStates = {}));
    var PlayerDirection;
    (function (PlayerDirection) {
        PlayerDirection[PlayerDirection["LEFT"] = 0] = "LEFT";
        PlayerDirection[PlayerDirection["RIGHT"] = 1] = "RIGHT";
        PlayerDirection[PlayerDirection["UP"] = 2] = "UP";
        PlayerDirection[PlayerDirection["DOWN"] = 3] = "DOWN";
        PlayerDirection[PlayerDirection["NONE"] = 4] = "NONE";
    })(PlayerDirection = z89.PlayerDirection || (z89.PlayerDirection = {}));
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(scene) {
            var _this = _super.call(this, scene, 300, 650 - 48, "player") || this;
            _this.yMin = 654 - 48;
            _this.yMax = 720;
            _this.direction = PlayerDirection.RIGHT;
            _this.playerState = PlayerStates.IDLE;
            _this.money = 10;
            _this.inventory = [];
            _this.illogicText = [z89.getLabel(19), z89.getLabel(20), z89.getLabel(13), z89.getLabel(21)];
            _this.scene = scene;
            var config = {
                key: 'player-idle',
                frames: scene.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
                frameRate: 5,
                repeat: -1,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            config = {
                key: 'player-walk',
                frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 7 }),
                frameRate: 7,
                repeat: -1,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            config = {
                key: 'player-pickdrop',
                frames: scene.anims.generateFrameNumbers('player', { start: 16, end: 19 }),
                frameRate: 7,
                repeat: -1,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            config = {
                key: 'player-use',
                frames: scene.anims.generateFrameNumbers('player', { start: 19, end: 21 }),
                frameRate: 7,
                repeat: -1,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            config = {
                key: 'beam',
                frames: _this.scene.anims.generateFrameNumbers('beam', { start: 0, end: 11 }),
                frameRate: 15,
                repeat: -1,
                repeatDelay: 0
            };
            scene.anims.create(config);
            /* this.animations.add("walk", [0, 1, 2, 3, 4, 5, 6, 7], 7, true);
             this.animations.add("punch", [12, 13, 14, 15], 7, false).onComplete.add(() => { this.play("idle"); }, this);
             this.animations.add("pickdrop", [16, 17, 18, 19], 7, false).onComplete.add(() => { this.play("idle"); }, this);
             this.animations.add("use", [19, 20, 21, 20, 19], 7, false).onComplete.add(() => { this.play("idle"); }, this);*/
            _this.play("player-idle");
            _this.setOrigin(0.5, 1).setScale(1).setY(608).setInteractive().setName("player").on('pointerdown', function () {
                if (_this.scene.isInteractionDisabled())
                    return;
                _this.scene.playerMenu.toggle();
            });
            /*
                    this.myArea=this.scene.add.sprite(0,0,"playerHitArea");
                    this.myArea.setInteractive({}});
                    this.myArea.setAlpha(0);
                    this.myArea.on('pointerdown',()=>{
            
                          
            
                        },this)
                       
               */
            scene.add.existing(_this);
            return _this;
        }
        Player.prototype.goTo = function (_x, _y, _item) {
            var _this = this;
            //console.log(_x,_y,_item);
            this.hideBaloon();
            if (this.scene.currentItem == undefined && _item == undefined)
                this.scene.playerActions.hide();
            if (this.scene.playerActions.IsOpen() && this.scene.currentItem != undefined && _item != undefined && this.scene.currentItem.itemObj.id != _item.itemObj.id)
                this.scene.playerActions.hide();
            if (this.scene.conversationBaloon.isConversationActive() && (_x != this.x || _y != this.y - 5)) {
                this.scene.conversationBaloon.stopConversation();
            }
            this.play("player-walk");
            if (this.playerTween != undefined)
                this.playerTween.stop();
            if (_item == undefined)
                this.scene.currentItem = null;
            if (this.direction == PlayerDirection.NONE) { }
            if (_x > this.x) {
                if (this.direction != PlayerDirection.RIGHT)
                    this.changeDirection();
            }
            else {
                if (this.direction != PlayerDirection.LEFT)
                    this.changeDirection();
            }
            this.intersect = false;
            var _intersect = this.checkIntersect({ x1: _x, y1: _y + 1 });
            if (_intersect.point != null) {
                var _offset = 0;
                if (this.y < _intersect.point.y) {
                    _offset = -5;
                }
                else {
                    _offset = +5;
                }
                _x = _intersect.point.x;
                _y = _intersect.point.y + _offset;
                _item = null;
                this.intersect = true;
            }
            if (_y > this.yMax)
                _y = this.yMax;
            if (_y < this.yMin)
                _y = this.yMin;
            var distance;
            var distanceX = Phaser.Math.Distance.Between(this.x, 0, _x, 0);
            var distanceY = Phaser.Math.Distance.Between(0, this.y, 0, _y);
            if (distanceX > distanceY) {
                distance = distanceX;
            }
            else {
                distance = distanceY;
            }
            this.playerTween = this.scene.tweens.add({
                targets: this,
                x: _x,
                y: _y + 1,
                ease: null,
                duration: 7.5 * distance,
                onCompleteParams: [this.intersect],
                onComplete: function (a, b, c) {
                    _this.depth = _this.y;
                    _this.play("player-idle");
                    if (_item != null) {
                        _this.scene.setCurrentItem(_item);
                        if (_this.x < _item.x) {
                            if (_this.direction == PlayerDirection.LEFT)
                                _this.changeDirection();
                        }
                        else {
                            if (_this.direction == PlayerDirection.RIGHT)
                                _this.changeDirection();
                        }
                        _this.scene.doActionSequence(_item);
                        if (_item.isInteractive())
                            _this.scene.playerActions.show();
                    }
                    if (_intersect[0])
                        _this.showBaloon(z89.getLabel(11));
                },
            });
        };
        Player.prototype.changeDirection = function () {
            if (this.direction == PlayerDirection.RIGHT) {
                this.turnLeft();
            }
            else {
                this.turnRight();
            }
        };
        Player.prototype.illogicAction = function () {
            this.showBaloon(this.illogicText[Phaser.Math.RND.integerInRange(0, this.illogicText.length - 1)]);
        };
        Player.prototype.turnLeft = function () {
            this.scaleX = -1;
            this.direction = PlayerDirection.LEFT;
        };
        Player.prototype.turnRight = function () {
            this.scaleX = 1;
            this.direction = PlayerDirection.RIGHT;
        };
        Player.prototype.checkIntersect = function (_toPosition) {
            var _obj = { point: null };
            var line1 = new Phaser.Geom.Line(_toPosition.x1, _toPosition.y1, this.x, this.y);
            var line2;
            var intersectPoint = new Phaser.Geom.Point();
            this.scene.getSprites().children.each(function (sprite) {
                if (sprite.name != "player" && sprite.itemObj.checkIntersect) {
                    line2 = new Phaser.Geom.Line(sprite.x - (sprite.width / 2) - 10, sprite.y, sprite.x + (sprite.width / 2) + 10, sprite.y);
                    intersectPoint.setTo(0, 0);
                    if (Phaser.Geom.Intersects.LineToLine(line1, line2, intersectPoint)) {
                        console.log(intersectPoint);
                        _obj.point = intersectPoint;
                    }
                }
            }, this);
            return _obj;
        };
        Player.prototype.blinkTo = function (_x) {
            if (this.scene.conversationBaloon.isConversationActive()) {
                this.scene.conversationBaloon.stopConversation();
            }
            this.hideBaloon();
            this.scene.playerActions.hide();
            this.beamOut(_x);
        };
        Player.prototype.beamIn = function (toX) {
            var _this = this;
            this.direction = PlayerDirection.RIGHT;
            this.y = 608;
            this.x = toX;
            this.alpha = 0;
            var beam = this.scene.add.sprite(toX, 0, "beam");
            beam.setScale(.5, this.beamH()).setOrigin(.5, 0).setAlpha(0).play("beam");
            var color2 = new Phaser.Display.Color(255, 255, 255);
            var color1 = new Phaser.Display.Color(0, 255, 0);
            this.scene.gameUtils.tweenTint(this, color1, color2, 300, 300, null);
            var tweenBeam = this.scene.tweens.add({
                targets: beam,
                scaleX: 1,
                alpha: 0.5,
                ease: 'Power1',
                duration: 300,
                delay: 1000,
                repeat: 0,
                onComplete: function () {
                    _this.scene.tweens.add({ targets: _this, alpha: 1, duration: 300, repeat: 0 });
                    _this.scene.tweens.add({ targets: beam, alpha: 0, duration: 300, repeat: 0 });
                }
            });
        };
        Player.prototype.beamH = function () { return this.y / 200; };
        Player.prototype.beamOut = function (toX) {
            var _this = this;
            var beam = this.scene.add.sprite(this.x, 0, "beam");
            beam.setScale(.5, this.beamH()).setOrigin(.5, 0).setAlpha(0).play("beam");
            var tweenBeam = this.scene.tweens.add({
                targets: beam,
                scaleX: 1,
                alpha: 0.3,
                ease: 'Power1',
                duration: 300,
                delay: 500,
                repeat: 0,
                onComplete: function () {
                    _this.scene.tweens.add({
                        targets: beam,
                        alpha: 0,
                        ease: 'Power1',
                        duration: 100,
                        repeat: 0,
                        onComplete: function () {
                            beam.destroy();
                        }
                    });
                }
            });
            var color1 = new Phaser.Display.Color(255, 255, 255);
            var color2 = new Phaser.Display.Color(0, 255, 0);
            this.scene.gameUtils.tweenTint(this, color1, color2, 300, 400, null);
            var test = this.scene.tweens.add({
                targets: this,
                scaleX: 1.5,
                scaleY: .5,
                ease: 'Power1',
                alpha: .5,
                duration: 300,
                repeat: 0,
                delay: 500,
                onComplete: function () {
                    _this.scene.tweens.add({ targets: _this, y: _this.y - 100, scaleX: .25, scaleY: 10, alpha: 0, duration: 300, ease: 'Power1', repeat: 0,
                        onComplete: function () {
                            _this.setScale(1);
                            _this.beamIn(toX);
                        } });
                }
            });
        };
        Player.prototype.showBaloon = function (_text) { this.scene.playerBaloon.showBaloon(_text); };
        Player.prototype.showBaloonExtra = function (_obj) { this.scene.playerBaloon.showBaloonExtra(_obj); };
        Player.prototype.hideBaloon = function () { this.scene.playerBaloon.hideBaloon(); };
        Player.prototype.update = function () {
            //  console.log("update player")
            this.depth = this.y;
            // Phaser.Display.Align.In.Center(this.myArea,this);
            //  console.log(this.name,this.depth)
            /*
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;

            

            if (this.cursors.left.isDown) {


                this.body.velocity.x = -140;
                if (this.direction != PlayerDirection.LEFT) {
                    this.turnLeft();
                    this.play('walk');
                    this.direction = PlayerDirection.LEFT;
                    this.playerState = PlayerStates.WALKING;
                }
            }
            else if (this.cursors.right.isDown) {

                this.body.velocity.x = 140;
                if (this.direction != PlayerDirection.RIGHT) {
                    this.turnRight();
                    this.play('walk');
                    this.direction = PlayerDirection.RIGHT;
                    this.playerState = PlayerStates.WALKING;
                }
            }

            else if (this.cursors.up.isDown) {

                if (this.y < this.yMin) return;
                this.body.velocity.y = -140;
                if (this.direction != PlayerDirection.UP) {
                    this.play('walk');
                    this.direction = PlayerDirection.UP;
                    this.playerState = PlayerStates.WALKING;
                }
            }
            else if (this.cursors.down.isDown) {

                console.log(this.x, this.cameraOffset.x)
                if (this.y > this.yMax) return;
                this.body.velocity.y = 140;
                if (this.direction != PlayerDirection.DOWN) {
                    this.play('walk');
                    this.direction = PlayerDirection.DOWN;
                    this.playerState = PlayerStates.WALKING;
                }
            }
            else {


                if (this.playerState != PlayerStates.IDLE) {
                    this.animations.stop();
                    this.play("idle");
                    this.playerState = PlayerStates.IDLE;
                    this.direction = PlayerDirection.NONE;
                }

            }

            */
        };
        return Player;
    }(Phaser.GameObjects.Sprite));
    z89.Player = Player;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var PlayerActionList;
    (function (PlayerActionList) {
        PlayerActionList[PlayerActionList["PUSH"] = 0] = "PUSH";
        PlayerActionList[PlayerActionList["PULL"] = 1] = "PULL";
        PlayerActionList[PlayerActionList["GIVE"] = 2] = "GIVE";
        PlayerActionList[PlayerActionList["OPEN"] = 3] = "OPEN";
        PlayerActionList[PlayerActionList["CLOSE"] = 4] = "CLOSE";
        PlayerActionList[PlayerActionList["EXAMINE"] = 5] = "EXAMINE";
        PlayerActionList[PlayerActionList["USE"] = 6] = "USE";
        PlayerActionList[PlayerActionList["PICKUP"] = 7] = "PICKUP";
        PlayerActionList[PlayerActionList["DROP"] = 8] = "DROP";
        PlayerActionList[PlayerActionList["TALKTO"] = 9] = "TALKTO";
    })(PlayerActionList = z89.PlayerActionList || (z89.PlayerActionList = {}));
    var PlayerActions = (function (_super) {
        __extends(PlayerActions, _super);
        function PlayerActions(scene) {
            var _this = _super.call(this, scene) || this;
            _this.isOpen = false;
            _this.actionList = [
                "PUSH",
                "PULL",
                "GIVE",
                "OPEN",
                "CLOSE",
                "EXAMINE",
                "USE",
                "PICK UP",
                "DROP",
                "TALK TO"
            ];
            _this.actionListFunctions = [
                "PUSH",
                "PULL",
                "GIVE",
                "OPEN",
                "CLOSE",
                "EXAMINE",
                "USE",
                "PICKUP",
                "DROP",
                "TALKTO"
            ];
            _this.currentAction = -1;
            _this.inventory = [];
            _this.inventorySelected = [];
            _this.iconAlpha = 0.8;
            _this.actionBnts = [];
            _this.actionBntsTxt = [];
            _this.setX(-300);
            _this.menuBg = _this.scene.add.sprite(0, 0, "menuAction");
            _this.scene = scene;
            _this.menuBg
                .setAlpha(0.8)
                .setOrigin(0)
                .setScrollFactor(0);
            _this.add(_this.menuBg);
            //ACTION buttons
            var _btn;
            var _txt;
            _this.actionList.forEach(function (element, index) {
                _btn = _this.scene.add.sprite(30, index * 55, "menuActionBtn");
                _btn
                    .setZ(index)
                    .setName(element)
                    .setDepth(100)
                    .setScrollFactor(0)
                    .setOrigin(0)
                    .setInteractive();
                _txt = _this.scene.add.bitmapText(0, 0, "commodore", element, 20);
                _txt
                    .setName(element + "-text")
                    .setTint(0xffffff)
                    .setDepth(101)
                    .setOrigin(0.5, 0)
                    .setScrollFactor(0);
                Phaser.Display.Align.In.Center(_txt, _btn);
                //to find a better solution
                var refBtn = _btn;
                _btn.on("pointerdown", function () {
                    if (_this.scene.isInteractionDisabled())
                        return;
                    _this.resetActions();
                    _this.currentAction = refBtn.z;
                    _this.setText(_this.actionList[refBtn.z]);
                    var _txt = _this.actionBntsTxt[refBtn.z];
                    _txt.tint = 0x00ff00;
                    _this.scene.doActionSequence();
                }, _this);
                _this.actionBnts.push(_btn);
                _this.actionBntsTxt.push(_txt);
                _this.add(_btn);
                _this.add(_txt);
            });
            //inventory ICONS
            var _icon;
            var _iconPos = [
                { x: 107, y: 590 },
                { x: 197, y: 590 },
                { x: 107, y: 675 },
                { x: 197, y: 675 }
            ];
            for (var index = 0; index < 4; index++) {
                _icon = _this.scene.add.sprite(_iconPos[index].x, _iconPos[index].y, "inventory");
                _icon.setInteractive().setScrollFactor(0);
                _icon.alpha = _this.iconAlpha;
                _icon.on("pointerdown", function (icon) {
                    if (_this.scene.isInteractionDisabled())
                        return;
                    if (_this.isInverntoryItemSelected(icon.z) != -1) {
                        if (_this.currentAction == -1) {
                            _this.scene.player.showBaloon(z89.getLabel(29));
                        }
                        else {
                            icon.setFrame(0);
                            _this.scene.doActionSequence();
                        }
                    }
                    else {
                        if (_this.currentAction == -1) {
                            _this.scene.player.showBaloon(z89.getLabel(29));
                        }
                        else {
                            icon.setFrame(1);
                            _this.inventorySelected.push(icon.z);
                            _this.scene.doActionSequence();
                        }
                    }
                }, _this);
                _this.add(_icon);
            }
            _this.actionText = _this.scene.add.bitmapText(320, 690, "commodore", "", 20);
            _this.actionText.setAlpha(0).setScrollFactor(0);
            _this.add(_this.actionText);
            _this.scene.add.existing(_this);
            return _this;
        }
        PlayerActions.prototype.btnClick = function (btn) {
            console.log(this, btn);
            if (this.scene.isInteractionDisabled())
                return;
            this.resetActions();
            this.currentAction = btn.z;
            this.setText(this.actionList[btn.z]);
            var _txt = this.actionBntsTxt[btn.z];
            _txt.tint = 0x00ff00;
            this.scene.doActionSequence();
        };
        PlayerActions.prototype.isInverntoryItemSelected = function (itemIndex) {
            var _itemAt = this.inventorySelected.indexOf(itemIndex);
            if (_itemAt != -1) {
                this.inventorySelected.splice(_itemAt, 1);
                return _itemAt;
            }
            return -1;
        };
        PlayerActions.prototype.deselectItems = function () {
            this.inventorySelected = [];
            //this.iconGroup.setAll("frame", 0);
        };
        PlayerActions.prototype.getInventory = function () {
            return this.inventory;
        };
        PlayerActions.prototype.getInventorySelected = function () {
            var _this = this;
            var _selectedItems = [];
            this.inventorySelected.forEach(function (element) {
                _selectedItems.push(_this.inventory[element]);
            });
            return _selectedItems;
        };
        PlayerActions.prototype.toggle = function () {
            if (this.isOpen) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        PlayerActions.prototype.show = function () {
            var _this = this;
            if (!this.isOpen) {
                this.scene.disableInteraction();
                this.scene.tweens.add({
                    targets: this,
                    x: 0,
                    duration: 400,
                    ease: "Quad.easeInOut",
                    onComplete: function () {
                        _this.isOpen = true;
                        _this.scene.enableInteraction();
                    }
                });
            }
        };
        PlayerActions.prototype.cleanAction = function () {
            this.actionBntsTxt.forEach(function (element) {
                element.tint = 0xffffff;
            });
        };
        PlayerActions.prototype.resetActions = function () {
            //console.log("reset action")
            this.cleanAction();
            this.currentAction = -1;
            this.inventorySelected = [];
            //this.iconGroup.setAll("frame", 0);
        };
        PlayerActions.prototype.hide = function () {
            var _this = this;
            if (!this.isOpen)
                return;
            this.scene.tweens.add({
                targets: this,
                x: -300,
                duration: 400,
                ease: "Quad.easeInOut",
                onComplete: function () {
                    _this.isOpen = false;
                    _this.currentAction = -1;
                    _this.deselectItems();
                    _this.resetActions();
                    _this.scene.setActionObject(null);
                    _this.setText("");
                }
            });
            this.hideText();
        };
        PlayerActions.prototype.toogle = function () {
            if (this.isOpen) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        PlayerActions.prototype.hideText = function () {
            if (this.actionTextTween != undefined)
                this.actionTextTween.stop();
            this.actionText.setAlpha(0).setX(200);
            /* this.actionTextTween = this.game.add.tween(this.actionText).to({ alpha: 0, x: 500 }, 200, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
      
                  this.actionTextTween.onComplete.add(() => { this.actionText.x = 200; }, this);
                  */
        };
        PlayerActions.prototype.IsOpen = function () {
            return this.isOpen;
        };
        PlayerActions.prototype.getCurrentAction = function () {
            return this.currentAction;
        };
        PlayerActions.prototype.getCurrentActionString = function () {
            return this.actionListFunctions[this.currentAction];
        };
        PlayerActions.prototype.getCurrentActionLabel = function () {
            return this.actionList[this.currentAction];
        };
        PlayerActions.prototype.setText = function (_string) {
            //console.log("setText",_string)
            this.actionText.text = _string;
            /* if (this.actionText.tint == 0x00ff00) {
                       this.actionText.tint = 0x00ffff
                   } else { this.actionText.tint = 0x00ff00 }
                   */
            this.actionText.tint = 0x00ff00;
            this.actionText.setAlpha(1).setX(320);
            if (this.actionTextTween != undefined)
                this.actionTextTween.stop();
            //this.actionTextTween = this.game.add.tween(this.actionText).to({ alpha: 1, x: 320 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
        };
        PlayerActions.prototype.removeItems = function (items) {
            var _this = this;
            items.forEach(function (element) {
                _this.removeItem(element);
            });
        };
        PlayerActions.prototype.removeItem = function (item) {
            this.cleanInventoryIcons();
            this.cleanInventoryFromItem(item);
            this.remapInventoryItemsIndex();
            this.assignItemToIcon();
            //this.scene.saveGameObj.updatePlayerInventory(this.inventory);
        };
        PlayerActions.prototype.assignItemToIcon = function () {
            /*
                  let _icon: Phaser.GameObjects.Sprite;
                  this.inventory.forEach((element: Items, index: number) => {
      
                      _icon = <Phaser.GameObjects.Sprite>this.iconGroup.getChildAt(index);
                      let _inv: Phaser.GameObjects.Sprite = this.game.add.sprite(35, 35, element.itemObj.sprite);
                      _inv.anchor.set(.5);
                      _icon.addChild(_inv);
      
                  });
                  */
        };
        //remove child items from the inventory icons
        PlayerActions.prototype.cleanInventoryIcons = function () {
            /*
                  this.iconGroup.forEach((icon: Phaser.Sprite) => {
      
                      if (icon.children.length > 0) icon.removeChildAt(0);
      
                  }, this);
      
                  this.iconGroup.setAll("frame", 0);
                  */
        };
        // remove itemes from inventory array
        PlayerActions.prototype.cleanInventoryFromItem = function (item) {
            this.inventory.splice(item.inventoryIndex, 1);
        };
        PlayerActions.prototype.remapInventoryItemsIndex = function () {
            this.inventory.forEach(function (element, index) {
                element.inventoryIndex = index;
            });
        };
        PlayerActions.prototype.addItem = function (item) {
            item.inventoryIndex = this.inventory.length;
            this.inventory.push(item);
            /*
                  let _icon: Phaser.Sprite = <Phaser.Sprite>this.iconGroup.getChildAt(this.inventory.length - 1)
      
                  let _inv: Phaser.Sprite = this.game.add.sprite(35, 35, item.itemObj.sprite);
                  _inv.anchor.set(.5);
                  _icon.addChild(_inv);
      */
            //this.scene.saveGameObj.updatePlayerInventory(this.inventory);
        };
        PlayerActions.prototype.isInInventory = function (item) {
            var match = false;
            this.inventory.forEach(function (element) {
                //console.log(item.itemObj.id, element.itemObj.id)
                if (item.itemObj.id == element.itemObj.id)
                    match = true;
            });
            return match;
        };
        PlayerActions.prototype.dropItem = function () { };
        return PlayerActions;
    }(Phaser.GameObjects.Container));
    z89.PlayerActions = PlayerActions;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var PlayerBaloon = (function (_super) {
        __extends(PlayerBaloon, _super);
        function PlayerBaloon(scene) {
            var _this = _super.call(this, scene, 0, 0) || this;
            _this.setDepth(1000).setAlpha(0);
            _this.baloonBg = _this.scene.add.image(0, 20, "baloonBg");
            _this.baloonBg
                .setOrigin(0.5, 1)
                .setAlpha(0.8);
            _this.baloonBorder = _this.scene.add.image(0, 20, "baloonBorder");
            _this.baloonBorder.setOrigin(0.5, 1).setTint(0x00ff00);
            _this.baloonPin = _this.scene.add.image(0, 30, "baloonPin");
            _this.baloonPin.setOrigin(0.5, 1).setTint(0x00ff00);
            _this.baloonText = _this.scene.add.text(0, 0, "", {
                fontFamily: "Arial",
                fontSize: 20
            });
            _this.baloonText
                .setWordWrapWidth(320)
                .setTint(0x00ff00)
                .setOrigin(.5)
                .setDepth(2001);
            _this.add([_this.baloonBg, _this.baloonBorder, _this.baloonPin, _this.baloonText]);
            _this.scene.add.existing(_this);
            return _this;
        }
        PlayerBaloon.prototype.showBaloonExtra = function (_obj) {
            /*
    
          if (_obj == undefined) return;
    
          let _btn: Phaser.GameObjects.Sprite;
          let _btnText: Phaser.GameObjects.Text;
          let _nextPos: number = 0;
          let _totHeight: number = 0;
          _obj.options.forEach((element, index) => {
            _btn = this.scene.add.sprite(0, _nextPos, "forkBtn");
    
            _btn.setOrigin(0.5, 1);
            _btn.tint = 0x0d3700;
    
            _btn.on(
              "pointerdown",
              (a, b, c) => {
                if (c.link != undefined) {
                  window.open(c.link, "_blank");
                }
              },
              this
            );
    
            _btnText = this.scene.add.text(0, _nextPos, element.option, {
              fontFamily: "Arial",
              fontSize: 16
            });
           
    
            _btnText.setOrigin(0.5, 1).setTint(0x00ff00);
            _btn.height = _btnText.height + 20;
            _nextPos = _nextPos - (_btnText.height + 20) - 20;
            _totHeight = _totHeight + _btnText.height + 40;
            this.add(_btn);
            this.add(_btnText);
          });
    
          if (_obj.answer != undefined && _obj.answer.length > 0) {
            this.baloonText.text =
              _obj.answer[
                Phaser.Math.RND.integerInRange(0, _obj.answer.length - 1)
              ];
            this.baloonText.y = _nextPos + 10;
            _totHeight += this.baloonText.height + 15;
          }
    
          this.baloonBg.height = _totHeight + 15;
          this.x = this.scene.player.x;
          this.y = this.scene.player.y - this.scene.player.height - 50;
    
          this.scene.tweens.add({
            target: this,
            y: this.y + 10,
            alpha: 1,
            duration: 500,
            repeat: -1
          });
    
          */
        };
        PlayerBaloon.prototype.showBaloon = function (_text) {
            if (_text == undefined)
                return;
            this.baloonText.setText(_text);
            this.fixSize();
            this.scene.tweens.add({
                targets: this,
                y: this.y + 10,
                alpha: 1,
                duration: 500
            });
        };
        PlayerBaloon.prototype.hideBaloon = function () {
            this.baloonText.y = 0;
            this.alpha = 0;
        };
        PlayerBaloon.prototype.fixSize = function () {
            this.setX(this.scene.player.x);
            this.setY(this.scene.player.y - this.scene.player.height - 50);
            this.baloonBg.setScale(1, ((this.baloonText.getBounds().height + 20) / 50));
            var bound = this.baloonBg.getBounds();
            //console.log(this.baloonText.getBounds().y-this.baloonBg.getBounds().y);
            this.baloonText.setY(this.baloonText.y - (this.baloonText.getBounds().y - this.baloonBg.getBounds().y) + 10);
        };
        return PlayerBaloon;
    }(Phaser.GameObjects.Container));
    z89.PlayerBaloon = PlayerBaloon;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var PlayerMenu = (function (_super) {
        __extends(PlayerMenu, _super);
        function PlayerMenu(scene) {
            var _this = _super.call(this, scene, 0, 0) || this;
            _this.isOpen = false;
            _this.isOpenOnStart = false;
            _this.btnOffsetX = 440;
            _this.btnOffsetY = 140;
            _this.scene = scene;
            _this.setScrollFactor(0);
            _this.menuBg = _this.scene.add
                .image(0, 0, "menu-phone-bg")
                .setOrigin(0)
                .setInteractive()
                .setDepth(999)
                .setAlpha(0.5)
                .setScrollFactor(0);
            _this.menuBg.name = "bg";
            _this.menuBg.on("pointerdown", function () {
                _this.hide();
                console.log("close menu bg");
            }, _this);
            _this.add(_this.menuBg);
            _this.menuBgPhone = _this.scene.add
                .sprite(540, 450, "menu-phone")
                .setOrigin(0.5)
                .setScale(1)
                .setDepth(1000)
                .setInteractive()
                .setScrollFactor(0);
            _this.menuBgPhone.name = "bg-phone";
            _this.menuBgPhone.on("pointerdown", function (pointer) {
                _this.hide();
                console.log("close menu phone");
                //if (!this.isOpenOnStart) this.hide();
            }, _this);
            _this.add(_this.menuBgPhone);
            //blinks btns
            //+++++++++++++++++++++++++++++++++
            var blinkBtn;
            var blinkText;
            gameData.menuBlink.forEach(function (element) {
                blinkBtn = _this.scene.add.sprite(element.x + _this.btnOffsetX, element.y + _this.btnOffsetY, "icons", element.frame);
                blinkBtn.setInteractive().setDepth(1001).setScrollFactor(0);
                blinkBtn.name = "iconsBtn";
                blinkBtn.on("pointerdown", function (pointer) {
                    _this.hide();
                    _this.scene.player.blinkTo(element.to);
                }, _this);
                blinkText = _this.scene.add.bitmapText(0, 80, "commodore", element.name, 10);
                blinkText.name = "iconsBtn";
                blinkText.setScrollFactor(0);
                Phaser.Display.Align.In.Center(blinkText, blinkBtn, null, 48);
                _this.add(blinkBtn);
                _this.add(blinkText);
            });
            //action btn
            //+++++++++++++++++++++++++++++++++
            var actionBtn;
            actionBtn = _this.scene.add.sprite(100 + _this.btnOffsetX, 220 + _this.btnOffsetY, "icons", 1);
            actionBtn.setInteractive().setScrollFactor(0);
            actionBtn.name = "iconsBtn";
            actionBtn.on("pointerdown", function (pointer) {
                _this.scene.playerActions.toogle();
                _this.hide();
            }, _this);
            var actionText = _this.scene.add.bitmapText(0, 80, "commodore", "Menu", 10);
            actionText.name = "iconsBtn";
            Phaser.Display.Align.In.Center(actionText, actionBtn, null, 48);
            _this.add(actionBtn);
            _this.add(actionText);
            //RESTART btn
            //+++++++++++++++++++++++++++++++++
            var restartBtn;
            restartBtn = _this.scene.add.sprite(200 + _this.btnOffsetX, 220 + _this.btnOffsetY, "icons", 10);
            restartBtn.setInteractive().setScrollFactor(0);
            restartBtn.name = "iconsBtn";
            restartBtn.on("pointerdown", function (pointer) {
                _this.scene.conversationBaloon.setUpConversation({
                    key: "RESTART",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
            }, _this);
            var restartText = _this.scene.add.bitmapText(0, 80, "commodore", "Restart", 10);
            restartText.name = "iconsBtn";
            Phaser.Display.Align.In.Center(restartText, restartBtn, null, 48);
            _this.add(restartBtn);
            _this.add(restartText);
            //info btn
            //+++++++++++++++++++++++++++++++++
            var infoBtn;
            infoBtn = _this.scene.add.sprite(_this.btnOffsetX, 330 + _this.btnOffsetY, "icons", 2);
            infoBtn.setInteractive().setScrollFactor(0);
            infoBtn.name = "iconsBtn";
            infoBtn.on("pointerdown", function (pointer) {
                /* this.scene.conversationBaloon.setUpConversation({
                          key: "INFO",
                          action: null,
                          inventory: null,
                          item: null
                      });
                      */
                _this.scene.playerBaloon.showBaloon("aaa");
                _this.hide();
            }, _this);
            var infoText = _this.scene.add.bitmapText(0, 80, "commodore", "Info", 10);
            infoText.name = "iconsBtn";
            Phaser.Display.Align.In.Center(infoText, infoBtn, null, 48);
            _this.add(infoBtn);
            _this.add(infoText);
            //options btn
            //+++++++++++++++++++++++++++++++++
            var optionBtn;
            optionBtn = _this.scene.add.sprite(100 + _this.btnOffsetX, 330 + _this.btnOffsetY, "icons", 3);
            optionBtn.setInteractive().setScrollFactor(0);
            optionBtn.name = "iconsBtn";
            optionBtn.on("pointerDown", function (pointer) {
                _this.scene.conversationBaloon.setUpConversation({
                    key: "OPTIONS",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
            }, _this);
            var optionText = _this.scene.add.bitmapText(0, 80, "commodore", "Options", 10);
            optionText.name = "iconsBtn";
            Phaser.Display.Align.In.Center(optionText, optionBtn, null, 48);
            _this.add(optionBtn);
            _this.add(optionText);
            //intro btn
            //+++++++++++++++++++++++++++++++++
            var introText = _this.scene.add.bitmapText(0, 0, "commodore", "Welcome to my adventure website experiment.\nComplete the quests to access the website sections... or explore the website without playing!", 12);
            introText.name = "start";
            //introText.width=300;
            _this.add(introText);
            //new game btn
            //+++++++++++++++++++++++++++++++++
            var newGame;
            newGame = _this.scene.add.sprite(-130, -80, "roundedBtn");
            newGame.name = "start";
            newGame.setInteractive().setScrollFactor(0);
            newGame.tint = 0x2a7600;
            newGame.on("pointerdown", function (pointer) {
                _this.newGame();
            }, _this);
            var newGameText = _this.scene.add.bitmapText(265 / 2, 18, "commodore", "NEW GAME", 16);
            newGameText.setOrigin(0.5, 0);
            Phaser.Display.Align.In.Center(newGameText, newGame);
            _this.add(newGame);
            _this.add(newGameText);
            //no game btn
            //+++++++++++++++++++++++++++++++++
            var noGame;
            noGame = _this.scene.add.sprite(-130, 0, "roundedBtn");
            noGame.name = "start";
            noGame.tint = 0x2a7600;
            noGame.on("pointerdown", function () {
                _this.noGame();
            }, _this);
            var noGameText = _this.scene.add.bitmapText(265 / 2, 18, "commodore", "NO GAME", 16);
            noGameText.setOrigin(0.5, 0);
            _this.add(noGame);
            _this.add(noGameText);
            _this.scene.add.existing(_this);
            _this.showState("iconsBtn");
            return _this;
        }
        PlayerMenu.prototype.newGame = function () {
            this.scene.displayChapterTitle(0);
            this.scene.playerBaloon.showBaloon(z89.getLabel(95));
            this.isOpenOnStart = false;
            this.hide();
        };
        PlayerMenu.prototype.noGame = function () {
            //console.log("nogame");
            var _this = this;
            gameData.chapters.forEach(function (element) {
                element.complete(_this.scene);
            });
            this.isOpenOnStart = false;
            this.hide();
        };
        PlayerMenu.prototype.resetGame = function () { };
        PlayerMenu.prototype.toggle = function () {
            if (this.isOpen) {
                this.hide();
            }
            else {
                //this.showState("iconsBtn");
                this.show();
            }
        };
        PlayerMenu.prototype.openOnStart = function () {
            this.isOpenOnStart = true;
            this.showState("start");
            this.show();
        };
        PlayerMenu.prototype.showState = function (state) {
            this.getAll().forEach(function (element) {
                //console.log(element);
                if (element.name == state) {
                    element.alpha = 1;
                }
                else if (element.name == "bg-phone") {
                    element.alpha = 1;
                }
                else if (element.name == "bg") {
                    element.alpha = .5;
                }
                else {
                    element.alpha = 0;
                }
            }, this);
        };
        PlayerMenu.prototype.show = function () {
            var _this = this;
            this.visible = true;
            this.scene.disableInteraction();
            this.scene.tweens.add({
                targets: this,
                y: 0,
                alpha: 1,
                ease: null,
                duration: 300,
                onComplete: function (a, b, c) {
                    _this.isOpen = true;
                }
            });
            /*
      
                  this.game.add.tween(this.cameraOffset).to({ y: 100 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false).onComplete.add(() => {
      
                      this.isOpen = true;
      
                  }, this);
      
      
                  this.game.add.tween(this.menuBg.scale).to({ y: 1, x: 1 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
                  this.game.add.tween(this.menuBg).to({ height: 774 }, 600, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
      */
        };
        PlayerMenu.prototype.hide = function () {
            var _this = this;
            this.scene.tweens.add({
                targets: this,
                y: 0,
                alpha: 0,
                ease: null,
                duration: 200,
                onComplete: function () {
                    _this.isOpen = false;
                    _this.visible = false;
                    _this.scene.enableInteraction();
                }
            });
            /*    this.game.add.tween(this.cameraOffset).to({ y: 710 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false).onComplete.add(() => {
      
                      this.isOpen = false;
                      this.currentState.enableInteraction();
      
                  }, this);
      
                  this.game.add.tween(this.menuBg.scale).to({ y: .7, x: .7 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
                  this.game.add.tween(this.menuBg).to({ height: 350 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
      
      */
        };
        return PlayerMenu;
    }(Phaser.GameObjects.Container));
    z89.PlayerMenu = PlayerMenu;
})(z89 || (z89 = {}));
