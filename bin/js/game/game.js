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
                key: "Boot"
            }) || this;
        }
        Boot.prototype.preload = function () {
            var graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffff00, 1);
            graphics.fillRect(0, 0, 265, 50);
            graphics.generateTexture("roundedBtn", 265, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 1080, 720);
            graphics.generateTexture("menu-phone-bg", 1080, 720);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 40, 40);
            graphics.generateTexture("keyboardKey", 40, 40);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 250, 50);
            graphics.generateTexture("menuActionBtn", 250, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 300, 720);
            graphics.generateTexture("menuAction", 300, 720);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 340, 50);
            graphics.generateTexture("baloonBg", 340, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillRect(0, 0, 340, 5);
            graphics.generateTexture("baloonBorder", 340, 5);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillTriangle(0, 12.5, 25, 12.5, 12.5, 25);
            graphics.generateTexture("baloonPin", 25, 25);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x00ff00, 1);
            graphics.fillRect(0, 0, 300, 50);
            graphics.generateTexture("forkBtn", 300, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x00ff00, 1);
            graphics.fillRect(0, 0, 50, 50);
            graphics.generateTexture("btn", 50, 50);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x00ff00, 1);
            graphics.fillRect(0, 0, 316, 52);
            graphics.generateTexture("skill", 316, 52);
            graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 640, 400);
            graphics.generateTexture("terminale", 640, 400);
            graphics.clear();
            var graphics2 = this.make.graphics({ x: 0, y: 0, add: false });
            graphics2.fillRect(0, 0, 50, 126);
            graphics2.generateTexture("playerHitArea", 50, 126);
            graphics2.clear();
            this.load.bitmapFont("commodore", "assets/fonts/64_0.png", "assets/fonts/64.xml");
            this.load.bitmapFont("commodore2", "assets/fonts/64x32_0.png", "assets/fonts/64x32.xml");
            this.load.spritesheet("cursor", "assets/images/game/terminal/cursor.png", {
                frameWidth: 16,
                frameHeight: 16,
                endFrame: 2
            });
            if (this.game.device.input.touch && (this.game.device.os.iOS || this.game.device.os.android || this.game.device.os.windowsPhone)) {
                z89.setDevice(true);
            }
            else {
                z89.setDevice(false);
            }
            console.log("Boot:preload");
        };
        Boot.prototype.create = function () {
            console.log("Boot:create");
            this.scene.start("Preloader");
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
                key: 'Preloader',
                pack: {
                    files: [{
                            type: 'plugin',
                            key: 'rexwebfontloaderplugin',
                            url: '/js/libs/webfonts.plugin.js',
                            start: true
                        }]
                }
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
            if (z89.isOnline()) {
                z89.getZero89Data().forEach(function (element) {
                    _this.load.image("zeroImg" + element.key, "http://www.zero89.it/" + element.c);
                });
                this.plugins.get('rexwebfontloaderplugin').addToScene(this);
                var config = {
                    google: {
                        families: ['Roboto']
                    }
                };
                this.load.rexWebFont(config);
            }
            //
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
var _gamecity;
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
            this.saveGameObj = new z89.saveGame(this);
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
            this.playerActions.setDepth(999);
            // +++++++++++++++++++++++++++++++++++++++
            // group Menu
            // +++++++++++++++++++++++++++++++++++++++
            this.playerMenu = new z89.PlayerMenu(this);
            this.playerMenu.setDepth(1000);
            // +++++++++++++++++++++++++++++++++++++++
            // group Terminal
            // +++++++++++++++++++++++++++++++++++++++
            this.Terminal = new z89.Terminal(this);
            this.Terminal.setDepth(2000);
            ///this.Terminal.fixedToCamera = true;
            ///this.Terminal.cameraOffset.x = 0; //(1080 - 640) / 2;
            ///this.Terminal.cameraOffset.y = 0; //(720 - 500) / 2;
            ///this.Terminal.inputEnableChildren = false;
            // +++++++++++++++++++++++++++++++++++++++
            // saved game
            // +++++++++++++++++++++++++++++++++++++++
            if (this.saveGameObj.gameIsSaved()) {
                this.processSavedGame();
            }
            else {
                gameData.ingame.items.forEach(function (element) {
                    if (element.onStart) {
                        _this.gameItemsUtils.addItem(element.id);
                    }
                });
                this.saveGameObj.updatePlayerPosition(this.player.x, this.player.y);
                this.saveGameObj.updateItems();
                this.playerMenu.openOnStart();
            }
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
            this.mainCamera.startFollow(this.player, true, 0.15, 1);
            // +++++++++++++++++++++++++++++++++++++++
            // GROUND
            // +++++++++++++++++++++++++++++++++++++++
            bgLevel0.on("pointerdown", function (ground) {
                if (!_this.gameInteracion)
                    return;
                //if (this.playerActions.IsOpen()) this.playerActions.hide();
                _this.player.goTo(_this.input.x + _this.mainCamera.scrollX, _this.input.y);
            }, this);
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
            /*  this.add
              .text(100, 100, "Hello ", {
                fontFamily: "Ranga",
                fontSize: 50
              })
              .setScrollFactor(0)
              .setDepth(5000);
      
              this.input.on(
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
            this.addInventoryItem(this.gameItemsUtils.getItemById(24));
            this.addInventoryItem(this.gameItemsUtils.getItemById(25));
            this.addInventoryItem(this.gameItemsUtils.getItemById(30));
            this.addInventoryItem(this.gameItemsUtils.getItemById(32));
            _gamecity = this;
        };
        GameCity.prototype.stopSound = function () {
            //stopSoundAll();
        };
        // playSound(sound: gameSound): void {
        //stopSoundAll();
        //playSound(sound);
        // }
        GameCity.prototype.restartGame = function () {
            this.saveGameObj.destroy();
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
            // console.log([ 'x: ' + this.mainCamera.scrollX, 'y: ' + this.mainCamera.scrollY ]);
        };
        GameCity.prototype.processSavedGame = function () {
            var _this = this;
            var _saved = this.saveGameObj.getSaved();
            this.player.x = _saved.position.x;
            this.player.y = _saved.position.y;
            if (_saved.items != undefined) {
                this.gameItemsUtils.addSavedItems(_saved.items);
            }
            if (_saved.inventory != undefined && _saved.inventory.length > 0) {
                _saved.inventory.forEach(function (element) {
                    var item;
                    // console.log(element.type )
                    switch (element.type) {
                        case 2:
                            // this.groupAll.add(new ItemsTruck(this.game, element));
                            break;
                        case 3:
                            _this.groupAll.add(new z89.ItemsContent(_this, element));
                            break;
                        case 4:
                            _this.groupAll.add(new z89.ItemsSkill(_this, element));
                            break;
                        default:
                            _this.groupAll.add(new z89.Items(_this, element));
                            break;
                    }
                    //console.log(element,this.getItemSpriteId(element))
                    _this.addInventoryItem(_this.gameItemsUtils.getItemById(element.id));
                });
            }
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
            console.log("checkActions");
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
            console.log(returnObj.inventory);
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
                if (element != undefined)
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
        /* returnMessageExtra(): void {
          let _currActionObj: any = this.getActionObject();
          let _item: Items;
          if (_currActionObj.item == null) {
            _item = _currActionObj.inventory[0];
          } else {
            _item = _currActionObj.item;
          }
    
          let _obj: any = _item.itemObj.actions[_currActionObj.action];
          this.player.showBaloonExtra(_obj);
        }
    */
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
        GameCity.prototype.addInventory = function (itemIndex, noAnimation) {
            this.gameItemsUtils.addItem(31);
            this.addInventoryItem(this.gameItemsUtils.getItemById(31), noAnimation);
        };
        GameCity.prototype.addInventoryItem = function (item, noAnimation) {
            if (item != undefined) {
                //console.log(item);
                this.playerActions.addItem(item);
                this.groupAll.remove(item, true);
                if (noAnimation != undefined && !noAnimation)
                    this.player.play("player-pickdrop");
            }
            else {
                var _currActionObj = this.getActionObject();
                if (_currActionObj != undefined) {
                    var _item = void 0;
                    if (_currActionObj.item == null) {
                        _item = _currActionObj.inventory[0];
                    }
                    else {
                        _item = _currActionObj.item;
                    }
                    if (this.playerActions.isInInventory(_item)) {
                        this.player.showBaloon(z89.getLabel(28));
                    }
                    else {
                        this.player.play("player-pickdrop");
                        this.playerActions.addItem(_item);
                        this.groupAll.remove(_item);
                        this.setCurrentItem(null);
                    }
                }
            }
            this.saveGameObj.updateItems();
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
            console.log(_item);
            if (this.player.y >= 660) {
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
            this.player.play("player-pickdrop");
            this.saveGameObj.updateItems();
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
            var _arr = z89.getZero89Data();
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
                        this.scene.groupAll.add(new z89.ItemsContent(this.scene, _itemObj));
                        break;
                    case 4:
                        this.scene.groupAll.add(new z89.ItemsSkill(this.scene, _itemObj));
                        break;
                    case 5:
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
            gameData.ingame.items.forEach(function (element) {
                if (element.id == id)
                    _itemObj = element;
            });
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
var _initGame;
var z89;
(function (z89) {
    var _089Data;
    var _ismobile;
    function getLabel(_index) {
        return languages[currentLang][_index];
    }
    z89.getLabel = getLabel;
    z89._game = null;
    function setZero89Data(_values) {
        _089Data = _values;
    }
    z89.setZero89Data = setZero89Data;
    function getZero89Data() {
        return _089Data;
    }
    z89.getZero89Data = getZero89Data;
    function isOnline() {
        return navigator.onLine;
    }
    z89.isOnline = isOnline;
    function isMobile() {
        return _ismobile;
    }
    z89.isMobile = isMobile;
    function setDevice(isMobile) {
        _ismobile = isMobile;
    }
    z89.setDevice = setDevice;
    z89._config = {
        type: Phaser.AUTO,
        pixelArt: true,
        roundPixels: true,
        parent: "my-game",
        width: 1080,
        height: 720,
        scene: [z89.Boot, z89.Preloader, z89.GameCity]
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
    function isSaved() {
        return true;
    }
    z89.isSaved = isSaved;
    function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)), sURLVariables = sPageURL.split("&"), sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
    z89.getUrlParameter = getUrlParameter;
    var initGame = (function () {
        function initGame(config) {
            this.config = config;
            console.log(navigator.onLine);
            if (isOnline()) {
                this.getContents();
            }
            else {
                this.startLoading();
            }
        }
        initGame.prototype.startLoading = function () {
            z89._game = new Phaser.Game(this.config);
            this.resize();
        };
        initGame.prototype.getContents = function () {
            $.ajax({
                url: "http://www.zero89.it/api/jsonp/api/core.aspx",
                dataType: "jsonp",
                type: "GET",
                data: {
                    token: "084068108072071097080066109079102085089083089118076100077050122071115089108097114118097053107074066112086106070047054051080100048121075083114116057050047047110048075074075065076120097088097043",
                    format: "json"
                }
            })
                .done(function (data) {
                setZero89Data(data.values.value);
                _initGame.startLoading();
            })
                .fail(function (xhr) {
                console.log("error", xhr);
                _initGame.startLoading();
            });
        };
        initGame.prototype.resize = function () {
            var canvas = document.querySelector("canvas");
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var windowRatio = windowWidth / windowHeight;
            var gameRatio = z89._config.width / z89._config.height;
            if (windowRatio < gameRatio) {
                canvas.style.width = windowWidth + "px";
                canvas.style.height = (windowWidth / gameRatio) + "px";
            }
            else {
                canvas.style.width = (windowHeight * gameRatio) + "px";
                canvas.style.height = windowHeight + "px";
            }
        };
        return initGame;
    }());
    z89.initGame = initGame;
})(z89 || (z89 = {}));
window.onresize = function () {
    _initGame.resize();
};
window.onload = function () {
    _initGame = new z89.initGame(z89._config);
};
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
    menuBtns: null,
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
        { name: "terminalBg", path: "assets/images/game/terminal/terminalBg.png" },
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
            text: "Do you want to restart the game?",
            isItem: false,
            fork: false,
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
                        //cs.playSound(0);
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
        y: 291,
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
        x: 400,
        y: 648 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 30,
        type: 1,
        sprite: "bitcoin",
        onStart: true,
        name: "bitcoin",
        x: 400,
        y: 700 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 32,
        type: 1,
        sprite: "blockchain",
        onStart: true,
        name: "blockchain",
        x: 500,
        y: 700 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 31,
        type: 1,
        sprite: "invite",
        onStart: false,
        name: "invite",
        x: 400,
        y: 648 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 25,
        type: 1,
        sprite: "coins",
        onStart: true,
        name: "coins",
        x: 940,
        y: 740 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: true,
        checkIntersect: false
    },
    {
        id: 2,
        type: 1,
        onStart: true,
        sprite: "terminal",
        animations: [{ name: "notWorking", frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4], rate: 5, loop: true }, { name: "working", frames: [5, 6], rate: 1, loop: true }],
        currentAnimation: "notWorking",
        working: true,
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
        x: 800,
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
                cs.player.play("player-use");
                item.itemObj.moved = true;
                if (cs.player.x < 450) {
                    cs.tweens.add({ targets: item, x: 500, duration: 500, ease: "Quad.easeOut", delay: 400 });
                    item.updateItemObj("x", 500);
                }
                else {
                    cs.tweens.add({ targets: item, x: 400, duration: 500, ease: "Quad.easeOut", delay: 400 });
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
        //pickup scotch
        PICKUP_25: function (cs) { cs.addInventoryItem(cs.gameItemsUtils.getItemById(25)); },
        //pickup scotch
        PICKUP_30: function (cs) { cs.addInventoryItem(cs.gameItemsUtils.getItemById(30)); },
        //pickup scotch
        PICKUP_32: function (cs) { cs.addInventoryItem(cs.gameItemsUtils.getItemById(32)); },
        //drop scotch
        DROP_24: function (cs) { cs.dropInventoryItem(); },
        //drop scotch
        DROP_25: function (cs) { cs.dropInventoryItem(); },
        //drop scotch
        DROP_30: function (cs) { cs.dropInventoryItem(); },
        //drop scotch
        DROP_32: function (cs) { cs.dropInventoryItem(); },
        //use scotch on broken 
        USE_24_23: function (cs) {
            cs.player.play("player-use");
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
        USE_30_32: function (cs) {
            console.log("bitcoin on blockchain");
            cs.playerBaloon.showBaloon("I GOT DEVDAY PASS!");
            cs.removeInventoryItems();
            cs.addInventory(31, true);
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
    { name: "HOME", frame: 0, to: 100, x: 0, y: 0 },
    { name: "DEVDAY", frame: 4, to: 875, x: 0, y: 110 },
    { name: "SKILLS", frame: 5, to: 1354, x: 100, y: 110 },
    { name: "CAKE", frame: 6, to: 1590, x: 200, y: 110 },
    { name: "ARCADE", frame: 7, to: 2100, x: 0, y: 220 },
    { name: "AEROSOL", frame: 8, to: 2580, x: 100, y: 220 },
    { name: "CONTACT", frame: 9, to: 3300, x: 200, y: 220 }
];
gameData.menuBtns = {
    actions: { name: "ACTIONS", frame: 1, x: 100, y: 0 },
    restart: { name: "RESTART", frame: 10, x: 200, y: 0 },
    info: { name: "INFO", frame: 2, x: 0, y: 330 },
    options: { name: "OPTIONS", frame: 3, x: 100, y: 330 },
};
var z89;
(function (z89) {
    var saveGame = (function () {
        function saveGame(scene) {
            this.playerX = 0;
            this.playerY = 0;
            this.isSaved = false;
            this.firstChoice = null;
            this.scene = scene;
            this.checkSaved();
            // this.game.time.events.repeat(5000, 10, this.updateItems, this);
        }
        saveGame.prototype.destroy = function () {
            this.clearSaved();
        };
        saveGame.prototype.updatePlayerPosition = function (x, y) {
            this.playerX = x;
            this.playerY = y;
            this.updateSaveObj();
        };
        saveGame.prototype.updatePlayerInventory = function (inventory) {
            var _inventory = [];
            inventory.forEach(function (item) {
                _inventory.push(item.itemObj);
            });
            this.inventory = _inventory;
            this.updateItems();
            this.updateSaveObj();
        };
        saveGame.prototype.updateItems = function () {
            var _itemsObj = [];
            this.scene.groupAll.children.each(function (element) {
                if (element.itemObj != undefined)
                    _itemsObj.push(element.itemObj);
            }, this);
            //console.log(_itemsObj)
            this.items = _itemsObj;
            this.updateSaveObj();
        };
        saveGame.prototype.setFirstChoice = function (choice) {
            this.firstChoice = choice;
            this.updateSaveObj();
        };
        saveGame.prototype.getFirstChoice = function () {
            return this.firstChoice;
        };
        saveGame.prototype.gameIsSaved = function () {
            if (this.isSaved && this.firstChoice)
                return true;
            return false;
        };
        saveGame.prototype.setSaved = function (obj) {
            this.savedObj = obj;
            localStorage.setItem('savedObj', JSON.stringify(this.savedObj));
        };
        saveGame.prototype.clearSaved = function () {
            this.savedObj = null;
            localStorage.removeItem("savedObj");
        };
        saveGame.prototype.getSaved = function () { return this.savedObj; };
        saveGame.prototype.checkSaved = function () {
            var _obj = JSON.parse(localStorage.getItem("savedObj"));
            // console.log(_obj)
            if (_obj != null) {
                this.savedObj = _obj;
                this.inventory = this.savedObj.inventory;
                this.items = this.savedObj.items;
                this.playerX = this.savedObj.position.x;
                this.playerY = this.savedObj.position.y;
                this.isSaved = true;
                this.firstChoice = this.savedObj.firstChoice;
            }
            else {
                this.savedObj = null;
                this.isSaved = false;
            }
        };
        saveGame.prototype.updateSaveObj = function () {
            var obj;
            obj = {
                position: { x: this.playerX, y: this.playerY },
                inventory: this.inventory,
                items: this.items,
                firstChoice: this.firstChoice
            };
            //console.log(obj);
            this.setSaved(obj);
        };
        return saveGame;
    }());
    z89.saveGame = saveGame;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var conversationBaloon = (function (_super) {
        __extends(conversationBaloon, _super);
        function conversationBaloon(scene, x, y) {
            var _this = _super.call(this, scene) || this;
            _this.forkBtns = [];
            _this.forkBtnsText = [];
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
            _this.baloonBorder = _this.scene.add.image(0, 20, "baloonBorder");
            _this.baloonBorder.setOrigin(0.5, 1);
            _this.baloonPin = _this.scene.add.image(0, 30, "baloonPin");
            _this.baloonPin.setOrigin(0.5, 1);
            _this.baloonText = _this.scene.add.text(0, 0, "", {
                fontFamily: "Roboto",
                fontSize: 20
            });
            _this.baloonText
                .setWordWrapWidth(320)
                .setTint(0x00ff00)
                .setOrigin(0.5)
                .setDepth(2001);
            _this.add([
                _this.baloonBg,
                _this.baloonBorder,
                _this.baloonPin,
                _this.baloonText
            ]);
            _this.scene.add.existing(_this);
            return _this;
        }
        conversationBaloon.prototype.skip = function () {
            if (!this.isSkippable)
                return;
            this.hideBaloon();
            this.timeEvent.remove(false);
            this.currentStep++;
            var _obj = this.conversationObj[this.currentStep];
            if (_obj != undefined) {
                this.displayStep();
            }
            else {
                this.isPlaying = false;
            }
            if (_obj.next != undefined) {
                this.displayStep();
            }
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
        conversationBaloon.prototype.hideBaloon = function (callback) {
            this.scene.tweens.add({
                targets: this,
                y: this.y - 10,
                alpha: 0,
                duration: 200,
                onComplete: function () {
                    if (callback != undefined)
                        callback();
                }
            });
        };
        conversationBaloon.prototype.stopConversation = function () {
            var _this = this;
            this.hideBaloon(function () {
                _this.removeForks();
                _this.baloonText.setY(0);
                _this.isPlaying = false;
                if (_this.baloonTarget != null) {
                    _this.baloonX = _this.baloonTarget.x;
                    _this.baloonY = _this.baloonTarget.y - _this.baloonTarget.height - 50;
                    _this.showBaloon(z89.getLabel(39));
                    _this.scene.time.addEvent({
                        delay: 500,
                        callback: function () {
                            _this.hideBaloon();
                        },
                        callbackScope: _this,
                        loop: false
                    });
                }
            });
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
            this.setX(this.baloonX);
            this.setY(this.baloonY);
            this.baloonBg.setScale(1, (this.baloonText.getBounds().height + 20) / 50);
            var bound = this.baloonBg.getBounds();
            this.baloonText.setY(this.baloonText.y -
                (this.baloonText.getBounds().y - this.baloonBg.getBounds().y) +
                10);
        };
        conversationBaloon.prototype.startConversation = function () {
            var _this = this;
            if (this.baloonTarget != null) {
                if (this.scene.player.x < this.baloonTarget.x) {
                    this.baloonTarget.turnLeft();
                }
                else {
                    this.baloonTarget.turnRight();
                }
            }
            this.hideBaloon(function () {
                _this.displayStep();
            });
        };
        conversationBaloon.prototype.displayStep = function () {
            var _this = this;
            this.removeForks();
            this.baloonText.setY(0);
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
            if (_obj.next != undefined) {
                this.timeEvent = this.scene.time.addEvent({
                    delay: this.getTime(_obj.text.length),
                    callback: function () {
                        _this.currentStep++;
                        _this.displayStep();
                    },
                    callbackScope: this,
                    loop: false
                });
            }
            if (_obj.end != undefined) {
                this.timeEvent = this.scene.time.addEvent({
                    delay: this.getTime(_obj.text.length),
                    callback: function () {
                        _this.currentStep = 0;
                        _this.hideBaloon();
                        _this.isPlaying = false;
                    },
                    callbackScope: this,
                    loop: false
                });
            }
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
            this.baloonText.setText(_obj.text);
            this.x = this.baloonX;
            this.y = this.baloonY;
            var _btn;
            var _btnText;
            //options loop
            _obj.options.forEach(function (element, index) {
                _btn = _this.scene.add.sprite(0, 0, "forkBtn");
                var _option = element;
                _btn
                    .setOrigin(0.5, 1)
                    .setInteractive()
                    .on("pointerdown", function () {
                    if (_option.goto != undefined) {
                        _this.currentStep = _this.goToLabel(_option.goto);
                    }
                    if (_option.link != undefined) {
                        _this.currentStep++;
                        window.open(_option.link, "_blank");
                    }
                    if (_option.action != undefined) {
                        _option.action(_this.scene, _this.baloonTarget);
                        _this.hideBaloon();
                        return;
                    }
                    _this.displayStep();
                }, _this);
                _btnText = _this.scene.add.bitmapText(0, 80, "commodore", element.option, 20);
                _btnText.setOrigin(0.5, 1);
                if (_obj.isItem) {
                    _btn.setTint(0x333333);
                    _btnText.setTint(0xfefefe);
                }
                else {
                    _btn.setTint(0x0f6c0f);
                    _btnText.setTint(0xffffff);
                }
                _this.forkBtns.push(_btn);
                _this.forkBtnsText.push(_btnText);
                _this.add([_btn, _btnText]);
            });
            this.displayItems();
            this.scene.tweens.add({
                targets: this,
                duration: 300,
                y: this.y + 10,
                alpha: 1
            });
        };
        conversationBaloon.prototype.displayItems = function () {
            var _this = this;
            var totH = this.forkBtns.length * 70 + this.baloonText.getBounds().height;
            this.setX(this.scene.player.x);
            this.setY(this.scene.player.y - this.scene.player.height - 50);
            this.baloonBg.setScale(1, (totH + 20) / 50);
            this.baloonText.setY(this.baloonText.y -
                (this.baloonText.getBounds().y - this.baloonBg.getBounds().y) +
                10);
            this.forkBtns.forEach(function (element, index) {
                element.setY(-(_this.forkBtns.length - 1 - index) * 70);
                Phaser.Display.Align.In.Center(_this.forkBtnsText[index], element);
            });
        };
        conversationBaloon.prototype.removeForks = function () {
            var _this = this;
            this.forkBtns.forEach(function (element, index) {
                element.destroy();
                _this.forkBtnsText[index].destroy();
            });
            this.forkBtns = [];
            this.forkBtnsText = [];
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
            this.scene.time.addEvent({ delay: delay, callback: callback });
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
            var _this = _super.call(this, scene, itemObj.x, itemObj.y, itemObj.sprite) || this;
            _this.scene = scene;
            var config;
            var repeat = -1;
            if (itemObj.animations != undefined) {
                itemObj.animations.forEach(function (element) {
                    if (!element.loop)
                        repeat = 0;
                    config = {
                        key: itemObj.id + "-" + element.name,
                        frames: scene.anims.generateFrameNumbers(itemObj.sprite, { frames: element.frames }),
                        frameRate: element.rate,
                        repeat: repeat
                    };
                    _this.anims.animationManager.create(config);
                });
                _this.play(itemObj.id + "-" + itemObj.currentAnimation);
            }
            _this.setDepth(_this.y).setOrigin(0.5, 1).setInteractive();
            if (itemObj.scale != undefined)
                _this.setScale(itemObj.scale);
            _this.id = itemObj.id;
            _this.itemObj = itemObj;
            _this.name = itemObj.name;
            _this._isInteractive = itemObj.interactive;
            if (itemObj.turnLeft != undefined)
                _this.turnLeft();
            if (_this.isInteractive) {
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
            if (this.itemObj.fixedToCamera)
                this.setX((this.scene.mainCamera.scrollX * -0.095) + this.itemObj.x);
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
    var ItemsContent = (function (_super) {
        __extends(ItemsContent, _super);
        function ItemsContent(scene, itemObj) {
            var _this = _super.call(this, scene, itemObj) || this;
            _this.currentIndex = 0;
            _this.isAnimating = false;
            // private filtersArr: Array<Phaser.Filter>;
            _this.isStarted = false;
            _this.setOrigin(0.5);
            if (itemObj.scale != undefined)
                _this.setScale(itemObj.scale);
            _this.id = itemObj.id;
            _this.itemObj = itemObj;
            _this.name = itemObj.name;
            _this.interactive = itemObj.interactive;
            _this.contexts = itemObj.contexts;
            if (z89.isOnline()) {
                _this.contents = _this.scene.getContentsBycontexts(_this.contexts);
            }
            //+++++++++++++++++++++++++
            // content Image
            //+++++++++++++++++++++++++
            _this.contentImage = _this.scene.add.image(0, 0, itemObj.sprite);
            _this.contentImage
                .setOrigin(0)
                .setTint(0x555555)
                .setDepth(_this.y + 1)
                .setName("contentImage");
            Phaser.Display.Align.In.TopCenter(_this.contentImage, _this);
            var shape = _this.scene.make.graphics({
                x: _this.contentImage.x + 1,
                y: _this.contentImage.y,
                add: true
            });
            shape.fillStyle(0xffffff);
            shape.beginPath();
            shape.fillRect(0, 0, 398, 200);
            var mask = shape.createGeometryMask();
            _this.contentImage.setMask(mask);
            //+++++++++++++++++++++++++
            // content text
            //+++++++++++++++++++++++++
            var _style = {
                fill: "#ffffff",
            };
            _this.contentText = _this.scene.add.text(0, 0, "OFFLINE", _style);
            _this.contentText
                .setFontFamily("Roboto")
                .setFontSize(20)
                .setOrigin(0)
                .setDepth(_this.y + 1)
                .setWordWrapWidth(380);
            Phaser.Display.Align.In.TopLeft(_this.contentText, _this.contentImage, -20, -20);
            //+++++++++++++++++++++++++
            // spinner
            //+++++++++++++++++++++++++
            _this.spinner = _this.scene.add.sprite(0, 0, "spinner");
            _this.spinner
                .setOrigin(0.5)
                .setAlpha(0)
                .setDepth(_this.y + 1);
            Phaser.Display.Align.In.Center(_this.spinner, _this.contentImage);
            //+++++++++++++++++++++++++
            // Arrow left
            //+++++++++++++++++++++++++
            _this.arrowLeft = _this.scene.add.sprite(0, 0, "triangleBtn");
            _this.arrowLeft
                .setOrigin(0.5)
                .setScale(2)
                .setDepth(_this.y + 1)
                .setAngle(-90)
                .setTint(0x222222);
            Phaser.Display.Align.In.LeftCenter(_this.arrowLeft, _this.contentImage);
            _this.arrowLeft.on("pointerdown", function () {
                _this.arrowLeft.tint = 0x00ff00;
                _this.goPrev();
            }, _this);
            _this.arrowLeft.on("pointerup", function () {
                _this.arrowLeft.tint = 0xffffff;
            }, _this);
            //+++++++++++++++++++++++++
            // Arrow right
            //+++++++++++++++++++++++++
            _this.arrowRight = _this.scene.add.sprite(0, 0, "triangleBtn");
            _this.arrowRight
                .setOrigin(0.5)
                .setScale(2)
                .setAngle(90)
                .setDepth(_this.y + 1)
                .setTint(0x222222);
            Phaser.Display.Align.In.RightCenter(_this.arrowRight, _this.contentImage);
            _this.arrowRight.on("pointerdown", function () {
                _this.arrowRight.tint = 0x00ff00;
                _this.goNext();
            }, _this);
            _this.arrowRight.on("pointerup", function () {
                _this.arrowRight.tint = 0xffffff;
            }, _this);
            //+++++++++++++++++++++++++
            // readmore
            //+++++++++++++++++++++++++
            _this.btnGo = _this.scene.add.sprite(0, 0, "readmore");
            _this.btnGo
                .setOrigin(0.5)
                .setAlpha(0)
                .setDepth(_this.y + 1);
            _this.btnGo.on("pointerdown", function () {
                _this.goDetail();
            }, _this);
            Phaser.Display.Align.In.BottomCenter(_this.btnGo, _this.contentImage, 0, 54);
            _this.btnGoText = _this.scene.add.bitmapText(0, 0, "commodore", "Read More", 16);
            _this.btnGoText
                .setOrigin(0.5)
                .setAlpha(0)
                .setDepth(_this.y + 1);
            Phaser.Display.Align.In.Center(_this.btnGoText, _this.btnGo);
            _this.scene.add.existing(_this);
            // let cropRect = new Phaser.Rectangle(0, 0, 400, 200);
            // this.contentImage.crop(cropRect);
            // this.filtersArr = [];
            // this.filtersArr.push(new grayShader(this.game));
            // this.filtersArr.push(new noiseShader(this.game));
            // this.filtersArr.push(new convergenceShader(this.game));
            // if (this.itemObj.isStarted) this.start();
            if (_this.isStarted)
                _this.start();
            return _this;
        }
        ItemsContent.prototype.start = function () {
            var _this = this;
            this.itemObj.isStarted = true;
            this.scene.tweens.add({
                targets: this.arrowRight,
                duration: 300,
                x: this.arrowRight.x + 40
            });
            this.scene.tweens.add({
                targets: [this.btnGo, this.btnGoText],
                alpha: 1,
                onComplete: function () { }
            });
            this.scene.gameUtils.tweenTint(this.arrowLeft, new Phaser.Display.Color(10, 10, 10), new Phaser.Display.Color(255, 255, 255), 300, 0, null);
            this.scene.gameUtils.tweenTint(this.arrowRight, new Phaser.Display.Color(10, 10, 10), new Phaser.Display.Color(255, 255, 255), 300, 0, null);
            this.scene.tweens.add({
                targets: this.arrowLeft,
                x: this.arrowLeft.x - 40,
                duration: 300,
                onComplete: function () {
                    _this.isStarted = true;
                    _this.arrowLeft.setInteractive();
                    _this.arrowRight.setInteractive();
                    _this.btnGo.setInteractive();
                    //this.scene.gameUtils.tweenTint(this.contentImage, 0x222222, 0xffffff, 1000, 0, null);
                    //this.contentImage.filters = [this.filtersArr[0], this.filtersArr[1]];
                    //this.contentText.filters = [this.filtersArr[1]];
                    //this.spinner.filters = [this.filtersArr[1]];
                    _this.isAnimating = true;
                    _this.hideContent();
                }
            });
        };
        ItemsContent.prototype.update = function () {
            if (this.isStarted) {
                //this.filtersArr[1].randomize();
                if (this.isAnimating) {
                    this.spinner.setAngle(this.spinner.angle + 2);
                }
            }
        };
        ItemsContent.prototype.goNext = function () {
            this.currentIndex++;
            if (this.currentIndex > this.contents.length - 1)
                this.currentIndex = 0;
            this.goTo();
        };
        ItemsContent.prototype.goPrev = function () {
            if (this.isAnimating)
                return;
            this.currentIndex--;
            if (this.currentIndex < 0)
                this.currentIndex = this.contents.length - 1;
            this.goTo();
        };
        ItemsContent.prototype.goTo = function () {
            if (this.isAnimating)
                return;
            this.isAnimating = true;
            // this.hideContent();
            this.hideContent();
        };
        ItemsContent.prototype.goDetail = function () {
            //console.log("detail", this.contents[this.currentIndex]);
            window.open(this.contents[this.currentIndex].url, "_blank");
        };
        ItemsContent.prototype.isInteractive = function () {
            return this.interactive;
        };
        ItemsContent.prototype.hideContent = function () {
            var _this = this;
            this.isAnimating = true;
            this.scene.tweens.add({
                targets: [this.contentText, this.contentImage, this.btnGo, this.btnGoText],
                alpha: 0,
                duration: 300
            });
            this.scene.tweens.add({
                targets: this.spinner,
                alpha: 1,
                duration: 300,
                onComplete: function () {
                    _this.scene.tweens.add({
                        targets: [_this.spinner],
                        alpha: 0,
                        duration: 300,
                        onComplete: function () {
                            _this.contentImage.setTexture("zeroImg" + _this.contents[_this.currentIndex].key);
                            _this.showContent();
                        }
                    });
                }
            });
        };
        ItemsContent.prototype.showContent = function () {
            var _this = this;
            console.log("show content");
            this.scene.tweens.add({ targets: this.spinner, alpha: 0, duration: 300 });
            var _text = "";
            //let colors: Array<number> = [];
            //colors.push(this.contents[this.currentIndex].t.length);
            if (this.contents[this.currentIndex].a != undefined) {
                var _json = JSON.parse(this.contents[this.currentIndex].a);
                if (_json.link != undefined) {
                    this.contents[this.currentIndex].url = _json.link;
                }
                if (_json.dd != undefined) {
                    _text =
                        "DEVDAY " + _json.dd + "\n" + this.contents[this.currentIndex].t;
                    //colors.push(_json.dd.length + 7);
                }
                if (_json.date != undefined)
                    _text += "\n\n" + _json.date;
            }
            this.contentText.setText(_text);
            //this.contentText.addColor('#00ff00', 0);
            //this.contentText.addColor('#ffffff', colors[1]);
            //this.contentText.addColor('#aaaaaa', colors[0]);
            this.scene.tweens.add({
                targets: [this.contentText, this.btnGo, this.btnGoText],
                alpha: 1,
                duration: 500,
                onComplete: function () {
                    _this.isAnimating = false;
                }
            });
            this.scene.tweens.add({
                targets: this.contentImage,
                alpha: 0.8,
                duration: 300
            });
        };
        return ItemsContent;
    }(z89.Items));
    z89.ItemsContent = ItemsContent;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var ItemsSkill = (function (_super) {
        __extends(ItemsSkill, _super);
        function ItemsSkill(scene, itemObj) {
            var _this = _super.call(this, scene, itemObj) || this;
            _this.isStarted = false;
            _this.skills = [];
            _this.skillsBarObj = [];
            _this.skillsTextObj = [];
            _this.setOrigin(0.5);
            _this.skills = gameData.skills;
            var _text;
            var _bar;
            var _y = [-66, -164, -260, -355];
            _this.setDepth(_this.y);
            _this.setAlpha(1);
            [0, 1, 2, 3].forEach(function (element) {
                _bar = _this.scene.add.sprite(0, 0, "skill");
                _bar.setOrigin(0).setScale(0, 1).setAlpha(.4).setDepth(_this.y + 1);
                _this.skillsBarObj.push(_bar);
                Phaser.Display.Align.In.TopLeft(_bar, _this, -20, _y[element]);
                _text = _this.scene.add.bitmapText(0, 0, "commodore", "", 24);
                _text.setAlpha(0).setOrigin(0).setDepth(_this.y + 1);
                _this.skillsTextObj.push(_text);
                Phaser.Display.Align.In.TopLeft(_text, _bar, -10, -15);
            });
            if (_this.itemObj.isStarted)
                _this.start();
            return _this;
        }
        ItemsSkill.prototype.start = function () {
            this.itemObj.isStarted = true;
            this.rewrite();
            this.scene.time.addEvent({ delay: 5000, callback: this.rewrite, callbackScope: this, loop: true });
        };
        ItemsSkill.prototype.rewrite = function () {
            var _this = this;
            console.log("rewrite");
            var _arr = this.skills.slice();
            Phaser.Utils.Array.Shuffle(_arr);
            var _text;
            this.skillsBarObj.forEach(function (element, index) {
                _this.scene.tweens.add({ targets: element, scaleX: _arr[index].v / 100, duration: 1000, delay: 200 * index, ease: "Bounce.easeOut", repeat: 0, });
                _text = _this.skillsTextObj[index];
                _text.setText(_arr[index].s).setAlpha(0);
                _this.scene.tweens.add({ targets: _text, alpha: 1, duration: 500, delay: 100 * index, repeat: 0, ease: "" });
            });
        };
        return ItemsSkill;
    }(z89.Items));
    z89.ItemsSkill = ItemsSkill;
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
            _this.illogicText = [
                z89.getLabel(19),
                z89.getLabel(20),
                z89.getLabel(13),
                z89.getLabel(21)
            ];
            _this.scene = scene;
            var config = {
                key: "player-idle",
                frames: scene.anims.generateFrameNumbers("player", {
                    start: 8,
                    end: 11
                }),
                frameRate: 5,
                repeat: -1,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            config = {
                key: "player-walk",
                frames: scene.anims.generateFrameNumbers("player", {
                    start: 0,
                    end: 7
                }),
                frameRate: 7,
                repeat: -1,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            config = {
                key: "player-pickdrop",
                frames: scene.anims.generateFrameNumbers("player", {
                    start: 16,
                    end: 19
                }),
                frameRate: 7,
                repeat: 0,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            config = {
                key: "player-use",
                frames: scene.anims.generateFrameNumbers("player", {
                    frames: [19, 20, 21, 20, 19]
                }),
                frameRate: 7,
                repeat: 0,
                repeatDelay: 0
            };
            _this.anims.animationManager.create(config);
            _this.on("animationcomplete", function () {
                _this.play("player-idle");
            }, _this);
            config = {
                key: "beam",
                frames: _this.scene.anims.generateFrameNumbers("beam", {
                    start: 0,
                    end: 11
                }),
                frameRate: 15,
                repeat: -1,
                repeatDelay: 0
            };
            scene.anims.create(config);
            _this.play("player-idle");
            _this.setOrigin(0.5, 1)
                .setScale(1)
                .setY(608);
            /*.setInteractive(new Phaser.Geom.Rectangle(0,0,50,126),Phaser.Geom.Rectangle.Contains).setName("player").on('pointerdown',()=>{
      
                      if(this.scene.isInteractionDisabled()) return;
                      this.scene.playerMenu.toggle();
      
                      });
                      */
            _this.myArea = _this.scene.add.sprite(0, 0, "playerHitArea");
            _this.myArea.setInteractive();
            _this.myArea.setAlpha(0.01);
            _this.myArea.on("pointerdown", function () {
                if (_this.scene.isInteractionDisabled())
                    return;
                _this.scene.playerMenu.toggle();
            }, _this);
            scene.add.existing(_this);
            return _this;
        }
        Player.prototype.goTo = function (_x, _y, _item) {
            var _this = this;
            //console.log(_x,_y,_item);
            this.hideBaloon();
            this.scene.playerActions.hide();
            /*
            if (this.scene.currentItem == undefined && _item == undefined)
              this.scene.playerActions.hide();
      
            if (
              this.scene.playerActions.IsOpen() &&
              this.scene.currentItem != undefined &&
              _item != undefined &&
              this.scene.currentItem.itemObj.id != _item.itemObj.id
            )
              this.scene.playerActions.hide();
      
              */
            if (this.scene.conversationBaloon.isConversationActive() &&
                (_x != this.x || _y != this.y - 5)) {
                this.scene.conversationBaloon.stopConversation();
            }
            this.play("player-walk");
            if (this.playerTween != undefined)
                this.playerTween.stop();
            if (_item == undefined)
                this.scene.currentItem = null;
            if (this.direction == PlayerDirection.NONE) {
            }
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
                    _this.scene.saveGameObj.updatePlayerPosition(_this.x, _this.y);
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
                }
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
            this.scene.groupAll.children.each(function (sprite) {
                if (sprite.name != "player" &&
                    sprite.itemObj != undefined &&
                    sprite.itemObj.checkIntersect) {
                    line2 = new Phaser.Geom.Line(sprite.x - sprite.width / 2 - 10, sprite.y, sprite.x + sprite.width / 2 + 10, sprite.y);
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
            beam
                .setScale(0.5, this.beamH())
                .setOrigin(0.5, 0)
                .setAlpha(0)
                .setDepth(10000)
                .play("beam");
            var color2 = new Phaser.Display.Color(255, 255, 255);
            var color1 = new Phaser.Display.Color(0, 255, 0);
            this.scene.gameUtils.tweenTint(this, color1, color2, 300, 300, null);
            var tweenBeam = this.scene.tweens.add({
                targets: beam,
                scaleX: 1,
                alpha: 0.5,
                ease: "Power1",
                duration: 300,
                delay: 1000,
                repeat: 0,
                onComplete: function () {
                    _this.scene.tweens.add({
                        targets: _this,
                        alpha: 1,
                        duration: 300,
                        repeat: 0
                    });
                    _this.scene.tweens.add({
                        targets: beam,
                        alpha: 0,
                        duration: 300,
                        repeat: 0
                    });
                }
            });
        };
        Player.prototype.beamH = function () {
            return this.y / 200;
        };
        Player.prototype.beamOut = function (toX) {
            var _this = this;
            var beam = this.scene.add.sprite(this.x, 0, "beam");
            beam
                .setScale(0.5, this.beamH())
                .setOrigin(0.5, 0)
                .setAlpha(0)
                .setDepth(10000)
                .play("beam");
            var tweenBeam = this.scene.tweens.add({
                targets: beam,
                scaleX: 1,
                alpha: 0.3,
                ease: "Power1",
                duration: 300,
                delay: 500,
                repeat: 0,
                onComplete: function () {
                    _this.scene.tweens.add({
                        targets: beam,
                        alpha: 0,
                        ease: "Power1",
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
                scaleY: 0.5,
                ease: "Power1",
                alpha: 0.5,
                duration: 300,
                repeat: 0,
                delay: 500,
                onComplete: function () {
                    _this.scene.tweens.add({
                        targets: _this,
                        y: _this.y - 100,
                        scaleX: 0.25,
                        scaleY: 10,
                        alpha: 0,
                        duration: 300,
                        ease: "Power1",
                        repeat: 0,
                        onComplete: function () {
                            _this.setScale(1);
                            _this.beamIn(toX);
                        }
                    });
                }
            });
        };
        Player.prototype.showBaloon = function (_text) {
            this.scene.playerBaloon.showBaloon(_text);
        };
        // public showBaloonExtra(_obj: any) { this.scene.playerBaloon.showBaloonExtra(_obj); }
        Player.prototype.hideBaloon = function () {
            this.scene.playerBaloon.hideBaloon();
        };
        Player.prototype.update = function () {
            this.setDepth(this.y);
            this.myArea.setDepth(this.y - 1);
            Phaser.Display.Align.In.Center(this.myArea, this);
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
            _this.inventoryBtns = [];
            _this.inventoryBtnsItems = [];
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
                _btn = _this.scene.add
                    .sprite(30, index * 55, "menuActionBtn")
                    .setZ(index)
                    .setName(element)
                    .setDepth(100)
                    .setScrollFactor(0)
                    .setOrigin(0)
                    .setInteractive();
                _txt = _this.scene.add
                    .bitmapText(0, 0, "commodore", element, 20)
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
            [0, 1, 2, 3].forEach(function (element) {
                _icon = _this.scene.add.sprite(_iconPos[element].x, _iconPos[element].y, "inventory");
                _icon
                    .setZ(element)
                    .setInteractive()
                    .setScrollFactor(0)
                    .setAlpha(_this.iconAlpha);
                var icon = _icon;
                _icon.on("pointerdown", function () {
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
                            if (_this.inventory[icon.z] == undefined)
                                return;
                            icon.setFrame(1);
                            _this.inventorySelected.push(icon.z);
                            _this.scene.doActionSequence();
                        }
                    }
                }, _this);
                _this.inventoryBtns.push(_icon);
                _this.add(_icon);
            });
            _this.actionText = _this.scene.add.bitmapText(320, 690, "commodore", "", 20);
            _this.actionText.setAlpha(0).setScrollFactor(0);
            _this.add(_this.actionText);
            _this.scene.add.existing(_this);
            return _this;
        }
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
            console.log(this.inventorySelected);
            if (this.inventorySelected.length > 0) {
                this.inventorySelected.forEach(function (element) {
                    if (_this.inventory[element] != undefined)
                        _selectedItems.push(_this.inventory[element]);
                });
            }
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
                    x: -30,
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
                    _this.uncheckInventoryIcons();
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
            console.log(item);
            this.cleanInventoryIcons();
            this.cleanInventoryFromItem(item);
            this.remapInventoryItemsIndex();
            this.assignItemToIcon();
            this.scene.saveGameObj.updatePlayerInventory(this.inventory);
        };
        PlayerActions.prototype.uncheckInventoryIcons = function () {
            this.inventoryBtns.forEach(function (element, index) {
                element.setFrame(0);
            });
        };
        //remove child items from the inventory icons
        PlayerActions.prototype.cleanInventoryIcons = function () {
            var _this = this;
            this.inventoryBtns.forEach(function (element, index) {
                element.setFrame(0);
                if (_this.inventoryBtnsItems[index] != undefined)
                    _this.inventoryBtnsItems[index].destroy();
            });
            this.inventoryBtnsItems = [];
        };
        // remove itemes from inventory array
        PlayerActions.prototype.cleanInventoryFromItem = function (item) {
            //console.log("cleanInventoryFromItem before",this.inventory)
            //console.log("cleanInventoryFromItem index:",item.inventoryIndex);
            this.inventory.splice(item.inventoryIndex, 1);
            //console.log("cleanInventoryFromItem after",this.inventory)
        };
        PlayerActions.prototype.remapInventoryItemsIndex = function () {
            //console.log("remapInventoryItemsIndex before",this.inventory)
            this.inventory.forEach(function (element, index) {
                element.inventoryIndex = index;
            });
            //console.log("remapInventoryItemsIndex after",this.inventory)
        };
        PlayerActions.prototype.assignItemToIcon = function () {
            var _this = this;
            this.inventory.forEach(function (element, index) {
                var _inv = _this.scene.add.sprite(35, 35, element.itemObj.sprite);
                _inv.setOrigin(0.5).setScrollFactor(0);
                Phaser.Display.Align.In.Center(_inv, _this.inventoryBtns[index]);
                _this.inventoryBtnsItems.push(_inv);
                _this.add(_inv);
            });
            console.log(this.inventory, this.inventoryBtns, this.inventoryBtnsItems);
        };
        PlayerActions.prototype.addItem = function (item) {
            item.inventoryIndex = this.inventory.length;
            this.inventory.push(item);
            var _icon = this.inventoryBtns[this.inventory.length - 1];
            var _inv = this.scene.add.sprite(35, 35, item.itemObj.sprite);
            _inv.setOrigin(0.5).setScrollFactor(0);
            Phaser.Display.Align.In.Center(_inv, _icon);
            this.inventoryBtnsItems.push(_inv);
            this.add(_inv);
            this.scene.saveGameObj.updatePlayerInventory(this.inventory);
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
        /*
      
          public showBaloonExtra(_obj: any) {
      
            
      
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
      
            
      
          }*/
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
            _this.fontSize = 12;
            _this.fontFamily = "commodore";
            _this.textOffsetY = 48;
            _this.scene = scene;
            _this.setScrollFactor(0).setAlpha(0);
            _this.menuBg = _this.scene.add
                .image(0, 0, "menu-phone-bg")
                .setOrigin(0)
                .setInteractive()
                .setDepth(999)
                .setAlpha(1)
                .setScrollFactor(0)
                .setName("bg");
            _this.menuBg.on("pointerdown", function () {
                if (!_this.isOpenOnStart)
                    _this.hide();
            }, _this);
            _this.add(_this.menuBg);
            _this.menuBgPhone = _this.scene.add
                .sprite(540, 450, "menu-phone")
                .setOrigin(0.5)
                .setScale(1)
                .setDepth(1000)
                .setScrollFactor(0)
                .setName("bg-phone");
            _this.add(_this.menuBgPhone);
            //blinks btns
            //+++++++++++++++++++++++++++++++++
            var blinkBtn;
            var blinkText;
            gameData.menuBlink.forEach(function (element) {
                blinkBtn = _this.scene.add.sprite(element.x + _this.btnOffsetX, element.y + _this.btnOffsetY, "icons", element.frame);
                blinkBtn
                    .setInteractive()
                    .setDepth(1001)
                    .setScrollFactor(0)
                    .setName("iconsBtn")
                    .on("pointerdown", function (pointer) {
                    _this.hide();
                    _this.scene.player.blinkTo(element.to);
                }, _this);
                blinkText = _this.scene.add.bitmapText(0, 80, _this.fontFamily, element.name, _this.fontSize);
                blinkText.setName("iconsBtn").setScrollFactor(0);
                Phaser.Display.Align.In.Center(blinkText, blinkBtn, null, _this.textOffsetY);
                _this.add(blinkBtn);
                _this.add(blinkText);
            });
            //action btn
            //+++++++++++++++++++++++++++++++++
            var actionBtn = _this.scene.add.sprite(gameData.menuBtns.actions.x + _this.btnOffsetX, gameData.menuBtns.actions.y + _this.btnOffsetY, "icons", gameData.menuBtns.actions.frame);
            actionBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerdown", function (pointer) {
                _this.scene.playerActions.toogle();
                _this.hide();
            }, _this);
            var actionText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.actions.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(actionText, actionBtn, null, _this.textOffsetY);
            _this.add(actionBtn);
            _this.add(actionText);
            //RESTART btn
            //+++++++++++++++++++++++++++++++++
            var restartBtn = _this.scene.add.sprite(gameData.menuBtns.restart.x + _this.btnOffsetX, gameData.menuBtns.restart.y + _this.btnOffsetY, "icons", gameData.menuBtns.restart.frame);
            restartBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerdown", function (pointer) {
                _this.scene.conversationBaloon.setUpConversation({
                    key: "RESTART",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
            }, _this);
            var restartText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.restart.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(restartText, restartBtn, null, _this.textOffsetY);
            _this.add(restartBtn);
            _this.add(restartText);
            //info btn
            //+++++++++++++++++++++++++++++++++
            var infoBtn = _this.scene.add.sprite(gameData.menuBtns.info.x + _this.btnOffsetX, gameData.menuBtns.info.y + _this.btnOffsetY, "icons", gameData.menuBtns.info.frame);
            infoBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerdown", function (pointer) {
                _this.scene.conversationBaloon.setUpConversation({
                    key: "INFO",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
            }, _this);
            var infoText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.info.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(infoText, infoBtn, null, _this.textOffsetY);
            _this.add(infoBtn);
            _this.add(infoText);
            //options btn
            //+++++++++++++++++++++++++++++++++
            var optionBtn = _this.scene.add.sprite(gameData.menuBtns.options.x + _this.btnOffsetX, gameData.menuBtns.options.y + _this.btnOffsetY, "icons", 3);
            optionBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerDown", function (pointer) {
                _this.scene.conversationBaloon.setUpConversation({
                    key: "OPTIONS",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
            }, _this);
            var optionText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.options.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(optionText, optionBtn, null, _this.textOffsetY);
            _this.add(optionBtn);
            _this.add(optionText);
            //+++++++++++++++++++++++++++++++++
            //intro Text
            //+++++++++++++++++++++++++++++++++
            var introText = _this.scene.add
                .text(0, 0, "Welcome to my adventure website experiment.\nComplete the quests to access the website sections... or explore the website without playing!", {
                fontFamily: "Roboto",
                fontSize: 20
            }).setWordWrapWidth(280)
                .setTint(0xffffff)
                .setOrigin(0.5)
                .setName("start");
            Phaser.Display.Align.In.TopCenter(introText, _this.menuBgPhone, 0, -30);
            //+++++++++++++++++++++++++++++++++
            //new game btn
            //+++++++++++++++++++++++++++++++++
            var newGame = _this.scene.add.sprite(0, 0, "roundedBtn");
            newGame
                .setName("start")
                .setInteractive()
                .setScrollFactor(0)
                .setTint(0x2a7600)
                .on("pointerdown", function (pointer) {
                _this.newGame();
            }, _this);
            Phaser.Display.Align.In.TopCenter(newGame, _this.menuBgPhone, 0, -200);
            var newGameText = _this.scene.add.bitmapText(0, 0, _this.fontFamily, "NEW GAME", _this.fontSize + 10);
            newGameText.setName("start").setOrigin(0.5, 0).setScrollFactor(0);
            Phaser.Display.Align.In.Center(newGameText, newGame);
            //no game btn
            //+++++++++++++++++++++++++++++++++
            var noGame = _this.scene.add.sprite(0, 0, "roundedBtn");
            noGame
                .setName("start")
                .setInteractive()
                .setScrollFactor(0)
                .setTint(0x2a7600)
                .on("pointerdown", function () {
                _this.noGame();
            }, _this);
            Phaser.Display.Align.In.TopCenter(noGame, _this.menuBgPhone, 0, -300);
            var noGameText = _this.scene.add.bitmapText(0, 0, _this.fontFamily, "NO GAME", _this.fontSize + 10).setName("start").setOrigin(0.5, 0).setScrollFactor(0);
            Phaser.Display.Align.In.Center(noGameText, noGame);
            _this.add([noGame, newGame, noGameText, newGameText, introText]);
            _this.setVisible(false);
            _this.scene.add.existing(_this);
            return _this;
        }
        PlayerMenu.prototype.newGame = function () {
            console.log("new game");
            this.scene.displayChapterTitle(0);
            this.scene.playerBaloon.showBaloon(z89.getLabel(95));
            this.isOpenOnStart = false;
            this.scene.saveGameObj.setFirstChoice(true);
            this.hide();
        };
        PlayerMenu.prototype.noGame = function () {
            var _this = this;
            console.log("no game");
            gameData.chapters.forEach(function (element) {
                element.complete(_this.scene);
            });
            this.scene.saveGameObj.setFirstChoice(false);
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
                if (element.name == state) {
                    element.alpha = 1;
                }
                else if (element.name == "bg-phone") {
                    element.alpha = 1;
                }
                else if (element.name == "bg") {
                    // element.alpha = 0.5;
                }
                else {
                    element.alpha = 0;
                }
            }, this);
        };
        PlayerMenu.prototype.show = function () {
            var _this = this;
            if (this.isOpenOnStart) {
                this.showState("start");
            }
            else {
                this.showState("iconsBtn");
            }
            this.menuBg.setAlpha(0.01);
            this.setVisible(true);
            this.scene.disableInteraction();
            this.scene.tweens.add({
                targets: this,
                y: 0,
                scaleY: 1,
                scaleX: 1,
                alpha: 1,
                ease: null,
                duration: 200,
                onComplete: function () {
                    _this.isOpen = true;
                }
            });
        };
        PlayerMenu.prototype.hide = function () {
            var _this = this;
            this.scene.tweens.add({
                targets: this,
                y: this.y + 400,
                scaleY: 0.75,
                scaleX: 1,
                alpha: 0,
                ease: null,
                duration: 200,
                onComplete: function () {
                    _this.isOpen = false;
                    _this.setVisible(false);
                    _this.scene.enableInteraction();
                }
            });
        };
        return PlayerMenu;
    }(Phaser.GameObjects.Container));
    z89.PlayerMenu = PlayerMenu;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var Terminal = (function (_super) {
        __extends(Terminal, _super);
        function Terminal(scene) {
            var _this = _super.call(this, scene, 0, 0) || this;
            _this.keyboard = [];
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
            _this.keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "*", "\"", ",", "."];
            _this.scene = scene;
            _this.setScrollFactor(0).setVisible(false).setAlpha(0);
            var terminalBg = _this.scene.add.sprite(0, 0, "terminalBg");
            terminalBg.setOrigin(0);
            var terminal = _this.scene.add.sprite((1080 - 640) / 2, ((720 - 500) / 2) - 20, "terminale");
            terminal.setOrigin(0);
            var closeBtn = _this.scene.add.sprite(670, 470, "btn");
            closeBtn.setOrigin(0).setInteractive().setAlpha(0)
                .on('pointerdown', function () {
                _this.hide();
            }, _this);
            _this.scene.input.keyboard.on('keydown', function (event) {
                //console.log(event.key);
                _this.addChar(event.key);
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
            _this.add([terminalBg, terminal, closeBtn]);
            _this.TerminalLogic = new z89.TerminalLogic(_this.scene, _this, 0x00ff00);
            if (z89.isMobile()) {
                _this.TerminalKeyboard = new z89.TerminalKeyboard(_this.scene, _this);
            }
            //console.log(Phaser.Keyboard.PERIOD,Phaser.Keyboard.A,Phaser.Keyboard.DOWN);
            _this.scene.add.existing(_this);
            return _this;
        }
        Terminal.prototype.addChar = function (key) {
            console.log(key);
            // console.log(key.keyCode);
            //return;
            if (key == "Enter") {
                this.TerminalLogic.submitCommand();
            }
            else if (key == "Backspace") {
                this.TerminalLogic.removeChar();
            }
            else if (key == "ArrowUp") {
                this.TerminalLogic.charUp();
            }
            else if (key == "ArrowDown") {
                this.TerminalLogic.charDown();
            }
            else if (key == "ArrowLeft") {
                this.TerminalLogic.charLeft();
            }
            else if (key == "ArrowRight") {
                this.TerminalLogic.charRight();
            }
            else {
                if (this.keys.indexOf(key) != -1)
                    this.TerminalLogic.addChar(key);
            }
        };
        Terminal.prototype.clear = function () { };
        Terminal.prototype.show = function (index) {
            this.setVisible(true);
            this.scene.tweens.add({ targets: this, alpha: 1, duration: 400 });
            this.scene.disableInteraction();
            this.TerminalLogic.reset();
        };
        Terminal.prototype.hide = function () {
            var _this = this;
            this.TerminalLogic.writeMultiple(this.TerminalLogic.returnStaticString(z89.msgs.disconnecting, 0));
            this.scene.tweens.add({ targets: this, alpha: 0, duration: 400, onComplete: function () {
                    _this.setVisible(false);
                    _this.scene.enableInteraction();
                    // this.destroy();
                }
            });
        };
        Terminal.prototype.destroy = function () {
            ///this.inputEnableChildren = false;
            if (this.TerminalLogic != undefined)
                this.TerminalLogic.destroy();
            if (this.TerminalKeyboard != undefined)
                this.TerminalKeyboard.destroy();
        };
        return Terminal;
    }(Phaser.GameObjects.Container));
    z89.Terminal = Terminal;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var TerminalKeyboard = (function () {
        function TerminalKeyboard(scene, terminal) {
            var _this = this;
            this.keys = [
                { v: "Q", x: 192 + 40 + 6, y: 49 + 510, w: 1, h: 1 },
                { v: 'W', x: 192 + (40 * 2) + (6 * 2), y: 49 + 510, w: 1, h: 1 },
                { v: 'E', x: 192 + (40 * 3) + (6 * 3), y: 49 + 510, w: 1, h: 1 },
                { v: 'R', x: 192 + (40 * 4) + (6 * 4), y: 49 + 510, w: 1, h: 1 },
                { v: 'T', x: 192 + (40 * 5) + (6 * 5), y: 49 + 510, w: 1, h: 1 },
                { v: 'Y', x: 192 + (40 * 6) + (6 * 6), y: 49 + 510, w: 1, h: 1 },
                { v: 'U', x: 192 + (40 * 7) + (6 * 7), y: 49 + 510, w: 1, h: 1 },
                { v: 'I', x: 192 + (40 * 8) + (6 * 8), y: 49 + 510, w: 1, h: 1 },
                { v: 'O', x: 192 + (40 * 9) + (6 * 9), y: 49 + 510, w: 1, h: 1 },
                { v: 'P', x: 192 + (40 * 10) + (6 * 10), y: 49 + 510, w: 1, h: 1 },
                { v: 'backspace', x: 192 + (40 * 11) + (6 * 11), y: 49 + 510, w: 1, h: 1 },
                { v: '7', x: 192 + (40 * 13) + (6 * 13), y: 49 + 510, w: 1, h: 1 },
                { v: '8', x: 192 + (40 * 14) + (6 * 14), y: 49 + 510, w: 1, h: 1 },
                { v: '9', x: 192 + (40 * 15) + (6 * 15), y: 49 + 510, w: 1, h: 1 },
                { v: 'A', x: 192 + 40 + 6, y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'S', x: 192 + (40 * 2) + (6 * 2), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'D', x: 192 + (40 * 3) + (6 * 3), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'F', x: 192 + (40 * 4) + (6 * 4), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'G', x: 192 + (40 * 5) + (6 * 5), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'H', x: 192 + (40 * 6) + (6 * 6), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'J', x: 192 + (40 * 7) + (6 * 7), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'K', x: 192 + (40 * 8) + (6 * 8), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'L', x: 192 + (40 * 9) + (6 * 9), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'enter', x: 192 + (40 * 11) + (6 * 11), y: 49 + 51 + 50 + 510, w: 1, h: 2 },
                { v: '4', x: 192 + (40 * 13) + (6 * 13), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: '5', x: 192 + (40 * 14) + (6 * 14), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: '6', x: 192 + (40 * 15) + (6 * 15), y: 49 + 51 + 510, w: 1, h: 1 },
                { v: 'Z', x: 192 + 40 + 6, y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'X', x: 192 + (40 * 2) + (6 * 2), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'C', x: 192 + (40 * 3) + (6 * 3), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'V', x: 192 + (40 * 4) + (6 * 4), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'B', x: 192 + (40 * 5) + (6 * 5), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'N', x: 192 + (40 * 6) + (6 * 6), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'M', x: 192 + (40 * 7) + (6 * 7), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'doublequote', x: 192 + (40 * 8) + (6 * 8), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'comma', x: 192 + (40 * 9) + (6 * 9), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'dot', x: 192 + (40 * 10) + (6 * 10), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: '1', x: 192 + (40 * 13) + (6 * 13), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: '2', x: 192 + (40 * 14) + (6 * 14), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: '3', x: 192 + (40 * 15) + (6 * 15), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'up', x: 192 + (40 * 16) + (6 * 16), y: 49 + 51 + 50 + 510, w: 1, h: 1 },
                { v: 'space', x: 192 + (40 * 2) + (6 * 2), y: 49 + 51 + 50 + 50 + 510, w: 9, h: 1 },
                { v: '0', x: 192 + (40 * 13) + (6 * 13), y: 49 + 51 + 50 + 50 + 510, w: 1, h: 1 },
                { v: 'left', x: 192 + (40 * 15) + (6 * 15), y: 49 + 51 + 50 + 50 + 510, w: 1, h: 1 },
                { v: 'down', x: 192 + (40 * 16) + (6 * 16), y: 49 + 51 + 50 + 50 + 510, w: 1, h: 1 },
                { v: 'right', x: 192 + (40 * 17) + (6 * 17), y: 49 + 51 + 50 + 50 + 510, w: 1, h: 1 },
                { v: 'help', x: 10 + 40 + 6, y: 49 + 510, w: 2, h: 1 },
                { v: 'clear', x: 10 + 40 + 6, y: 49 + 51 + 510, w: 2, h: 1 },
                { v: 'dir', x: 10 + 40 + 6, y: 49 + 51 + 50 + 510, w: 2, h: 1 },
                { v: 'exit', x: 10 + 40 + 6, y: 49 + 51 + 50 + 50 + 510, w: 2, h: 1 },
            ];
            this.scene = scene;
            this.terminal = terminal;
            this.keyboard = this.scene.add.sprite(0, 510, "terminalKeyboard");
            this.keyboard.setOrigin(0);
            this.terminal.add([this.keyboard]);
            // Phaser.Display.Align.In.BottomCenter(this.keyboard,this.terminal);
            var sprite;
            this.keys.forEach(function (e) {
                sprite = _this.scene.add
                    .sprite(e.x, e.y, "keyboardKey")
                    .setOrigin(0, 1)
                    .setName(e.v)
                    .setScale(e.w, e.h)
                    .setAlpha(.2)
                    .setInteractive()
                    .setScrollFactor(0);
                var _sprite = sprite;
                sprite.on("pointerdown", function () {
                    _this.pressKey(_sprite.name);
                    _sprite.alpha = .5;
                });
                sprite.on("pointerup", function () {
                    _sprite.alpha = .2;
                });
                _this.terminal.add(sprite);
            });
        }
        TerminalKeyboard.prototype.pressKey = function (_key) {
            console.log("press:", _key);
            switch (_key) {
                case "enter":
                    this.terminal.TerminalLogic.submitCommand();
                    break;
                case "backspace":
                    this.terminal.TerminalLogic.removeChar();
                    break;
                case "up":
                    this.terminal.TerminalLogic.charUp();
                    break;
                case "down":
                    this.terminal.TerminalLogic.charDown();
                    break;
                case "left":
                    this.terminal.TerminalLogic.charLeft();
                    break;
                case "right":
                    this.terminal.TerminalLogic.charRight();
                    break;
                case "help":
                    this.terminal.TerminalLogic.addChars("help");
                    this.terminal.TerminalLogic.submitCommand();
                    break;
                case "clear":
                    this.terminal.TerminalLogic.addChars("clear");
                    this.terminal.TerminalLogic.submitCommand();
                    break;
                case "exit":
                    this.terminal.TerminalLogic.addChars("exit");
                    this.terminal.TerminalLogic.submitCommand();
                    break;
                case "dir":
                    this.terminal.TerminalLogic.addChars("dir");
                    this.terminal.TerminalLogic.submitCommand();
                    break;
                default:
                    var char = "";
                    switch (_key) {
                        case "doublequote":
                            char = '"';
                            break;
                        case "space":
                            char = " ";
                            break;
                        case "dot":
                            char = ".";
                            break;
                        case "comma":
                            char = ",";
                            break;
                        default:
                            char = _key;
                            break;
                    }
                    this.terminal.TerminalLogic.addChar(char);
                    break;
            }
        };
        TerminalKeyboard.prototype.destroy = function () {
            this.keyboard.destroy();
            console.log("destroy keyboard");
        };
        return TerminalKeyboard;
    }());
    z89.TerminalKeyboard = TerminalKeyboard;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var msgs;
    (function (msgs) {
        msgs[msgs["reset"] = 0] = "reset";
        msgs[msgs["commandList"] = 1] = "commandList";
        msgs[msgs["gtw"] = 2] = "gtw";
        msgs[msgs["version"] = 3] = "version";
        msgs[msgs["credits"] = 4] = "credits";
        msgs[msgs["gameList"] = 5] = "gameList";
        msgs[msgs["loginError"] = 6] = "loginError";
        msgs[msgs["targetAquired"] = 7] = "targetAquired";
        msgs[msgs["t5"] = 8] = "t5";
        msgs[msgs["t4"] = 9] = "t4";
        msgs[msgs["t3"] = 10] = "t3";
        msgs[msgs["t2"] = 11] = "t2";
        msgs[msgs["t1"] = 12] = "t1";
        msgs[msgs["hit"] = 13] = "hit";
        msgs[msgs["processing"] = 14] = "processing";
        msgs[msgs["disconnecting"] = 15] = "disconnecting";
    })(msgs = z89.msgs || (z89.msgs = {}));
    var shell;
    (function (shell) {
        shell[shell["login"] = 0] = "login";
        shell[shell["gtw"] = 1] = "gtw";
        shell[shell["call"] = 2] = "call";
    })(shell = z89.shell || (z89.shell = {}));
    var TerminalLogic = (function () {
        function TerminalLogic(scene, terminal, tint) {
            this.rows = [
                '                                        ',
                '    **** COMMODORE 64  BASIC V5 ****    ',
                ' 64K RAM SYSTEM    RUNNING IN WOPR MODE ',
                'READY.                                  ',
                'LIST OF COMMANDS:                       ',
                '----------------------------------------',
                'help, clear, quit, ver, credits, reset, ',
                'dir, load "gamename", run               ',
                ' GREETINGS PROFESSOR FALKEN.            ',
                ' WELCOME TO,                            ',
                ' ###################################### ',
                ' #     "GLOBAL THERMONUCLEAR WAR"     # ',
                ' PLEASE, ENTER THE LOCATION (LAT,LON)   ',
                ' OF FIRST STRIKE! E.g. INTEGER,INTEGER  ',
                'MEDIA CONSOLE VERSION 1.0               ',
                '(C) FRANCESCO RAIMONDO 2018             ',
                'HTTP://WWW.ZERO89.IT                    ',
                'CREDIT LIST:                            ',
                'CODE: FRANCESO RAIMONDO                 ',
                'ART SPRITE: PAUL ROBERTSON              ',
                'ART BG: JASON TAMMEMAGI                 ',
                'ART MIXING: FRANCESO RAIMONDO           ',
                'MUSIC:                                  ',
                'ADDITIONAL FX: FRANCESO RAIMONDO        ',
                '0 "GAME LIST                  " 32 2A   ',
                '0    "BOCCONCINI DEV"              PRG  ',
                '0    "XMAS2K16"                    PRG  ',
                '0    "THE WRONG DIRECTION"         PRG  ',
                '0    "FALKEN\'S MAZE"               PRG  ',
                '0    "HWI20YEARS"                  PRG  ',
                '0    "GTW"                         PRG  ',
                '0 BLOCKS FREE.                     PRG  ',
                '?ERROR                                  ',
                'ACCESS DENIED!                          ',
                'PLEASE, USE YOUR CREDENTIAL TO LOGIN.   ',
                'Try with "help" command.                ',
                'Type quit to exit.                      ',
                ' #          TARGET ACQUIRED!          # ',
                '              STRIKE IN...              ',
                '              555555555555              ',
                '              55                        ',
                '              55                        ',
                '              555555555555              ',
                '                        55              ',
                '                        55              ',
                '              555555555555              ',
                '                      44                ',
                '                    4444                ',
                '                  44  44                ',
                '                44    44                ',
                '              444444444444              ',
                '                      44                ',
                '                      44                ',
                '              333333333333              ',
                '                        33              ',
                '                        33              ',
                '              333333333333              ',
                '                        33              ',
                '                        33              ',
                '              333333333333              ',
                '              222222222222              ',
                '                        22              ',
                '                        22              ',
                '              222222222222              ',
                '              22                        ',
                '              22                        ',
                '              222222222222              ',
                '                    11                  ',
                '                  1111                  ',
                '                    11                  ',
                '                    11                  ',
                '                    11                  ',
                '                    11                  ',
                '                  111111                ',
                ' #              TARGET HIT!           # ',
                'SEARCHING FOR ',
                'LOADING                                 ',
                'RUNNING A GAME FROM:                    ',
                '              ##############            ',
                '              # PROCESSING #            ',
                'Disconnecting....                       ',
            ];
            this.msgs = [
                [0, 1, 0, 2, 0, 3],
                [0, 4, 5, 6, 7],
                [0, 8, 0, 9, 0, 10, 11, 10, 0, 12, 13, 0],
                [0, 14, 5, 15, 16, 3],
                [0, 17, 5, 18, 19, 20, 21, 22, 23, 3],
                [0, 24, 25, 26, 27, 28, 29, 30, 31, 3],
                [0, 33, 34],
                [0, 10, 37, 10, 0, 38],
                [0, 39, 40, 41, 42, 43, 44, 45, 0],
                [0, 46, 47, 48, 49, 50, 51, 52, 0],
                [0, 53, 54, 55, 56, 57, 58, 59, 0],
                [0, 60, 61, 62, 63, 64, 65, 66, 0],
                [0, 67, 68, 69, 70, 71, 72, 73, 0],
                [0, 10, 74, 10, 0, 3],
                [0, 78, 79, 78, 0],
                [80],
            ];
            this.emptyString = this.rows[0];
            this.readyString = this.rows[3];
            this.errors = [
                'Too many fingers on keyboard error!     ',
                'Syntax Terror!                          ',
                'Something bad happened.                 ',
                'Guru meditation error!                  ',
                'Too much for this terminal.             ',
                'Catastrophic Failure Error!             ',
                'The master of all errors happened!      ',
                'This time, it’s the human’s fault.      ',
                'User fault, it’s not our error!         ',
                'You performed an illegal operation.     ',
                'Kernel Panic!                           ',
                '404 File Not Found!                     ',
                'Error 500 SERVER Not Found!             ',
                'Random error just to annoy you!         ',
                'User error - Replace user!              ',
                'This error should not occour!           ',
                'Run as fast as you can & don’t look back',
                'User error. Go stand in the corner!     ',
            ];
            this.clearString = { text: this.emptyString, delay: 0 };
            this.lettersObj = [];
            this.currentElement = 0;
            this.tint = 0x6C5EB5;
            this.logged = false;
            this.isShell = false;
            this.shellStart = 0;
            this.shellEnd = 0;
            this.shellType = 0;
            this.isShellLogin = false;
            this.login = "";
            this.gameLoaded = "";
            this.inputIsDisabled = false;
            this.cursorOffsetX = 228;
            this.cursorOffsetY = 98;
            this.scene = scene;
            this.terminal = terminal;
            if (tint != null)
                this.tint = tint;
            this.cursor = this.scene.add.sprite(0, 0, "cursor");
            this.cursor.setTint(this.tint);
            this.cursor.anims.animationManager.create({
                key: "blink",
                frames: scene.anims.generateFrameNumbers("cursor", {
                    frames: [0, 1]
                }),
                frameRate: 2,
                repeat: -1,
                repeatDelay: 0
            });
            this.cursor.anims.animationManager.create({
                key: "hide",
                frames: scene.anims.generateFrameNumbers("cursor", {
                    frames: [1]
                }),
                frameRate: 0,
                repeat: 0,
                repeatDelay: 0
            });
            this.cursor.anims.animationManager.create({
                key: "stop",
                frames: scene.anims.generateFrameNumbers("cursor", {
                    frames: [0]
                }),
                frameRate: 0,
                repeat: 0,
                repeatDelay: 0
            });
            this.cursor.x = this.setCursorX(0);
            this.cursor.y = this.setCursorY(0);
            this.cursor.play("blink");
            for (var i = 0; i < 25; i++) {
                this.lettersObj.push(this.scene.add.bitmapText(220, (16 * i) + 90, "commodore", "", 16));
                this.lettersObj[i].setTint(this.tint);
                this.terminal.add(this.lettersObj[i]);
            }
            this.terminal.add(this.cursor);
        }
        TerminalLogic.prototype.setCursor = function (x, y) {
            this.cursor.x = this.setCursorX(x);
            this.cursor.y = this.setCursorY(y);
        };
        TerminalLogic.prototype.setCursorX = function (index) {
            return (index * 16) + this.cursorOffsetX;
        };
        TerminalLogic.prototype.setCursorY = function (index) {
            return (index * 16) + this.cursorOffsetY;
        };
        TerminalLogic.prototype.getCursorCol = function () {
            return (this.cursor.x - this.cursorOffsetX) / 16;
        };
        ;
        TerminalLogic.prototype.getCursorRow = function () {
            return (this.cursor.y - this.cursorOffsetY) / 16;
        };
        ;
        TerminalLogic.prototype.reset = function () {
            console.log("reset");
            this.clear();
            this.writeMultiple(this.returnStaticString(msgs.reset, 0));
        };
        ;
        TerminalLogic.prototype.enableInput = function () { this.inputIsDisabled = false; this.showCursor(); };
        TerminalLogic.prototype.disableInput = function () { this.inputIsDisabled = true; this.hideCursor(); };
        TerminalLogic.prototype.hideCursor = function () { this.cursor.alpha = 0; };
        TerminalLogic.prototype.showCursor = function () { this.cursor.alpha = 1; };
        TerminalLogic.prototype.returnStaticString = function (msg, delay) {
            var _this = this;
            var _obj = [];
            var elem;
            this.msgs[msg].forEach(function (element) {
                elem = { text: _this.rows[element], delay: delay };
                _obj.push(elem);
            });
            return _obj;
        };
        TerminalLogic.prototype.returnReady = function (txt) {
            var _ready = { text: this.readyString, delay: 0 };
            this.cursor.x = this.setCursorX(0);
            // _ready.row = this.currentRow; this.cursor.y = this.currentRow * 16;
            if (txt != undefined) {
                _ready.text = txt;
                this.cursor.x = this.setCursorX(txt.length);
            }
            this.cursor.play("blink");
            return _ready;
        };
        TerminalLogic.prototype.returnLogin = function () { return this.returnStaticString(msgs.loginError, 0); };
        TerminalLogic.prototype.returnCommands = function () { return this.returnStaticString(msgs.commandList, 0); };
        TerminalLogic.prototype.returnGames = function () { return this.returnStaticString(msgs.gameList, 0); };
        TerminalLogic.prototype.returnVersion = function () { return this.returnStaticString(msgs.version, 0); };
        TerminalLogic.prototype.returnCredits = function () { return this.returnStaticString(msgs.credits, 0); };
        TerminalLogic.prototype.returnProcessing = function () { return this.returnStaticString(msgs.processing, 0); };
        TerminalLogic.prototype.returnError = function (error) {
            var _error = this.errors[Phaser.Math.RND.integerInRange(0, this.errors.length - 1)];
            if (error != undefined)
                _error = error;
            return [
                { text: this.emptyString, delay: 0 },
                { text: this.rows[32], delay: 0 },
                { text: _error, delay: 0 },
                { text: this.rows[5], delay: 0 },
                { text: this.rows[35], delay: 0 },
                { text: this.rows[3], delay: 0 }
            ];
        };
        TerminalLogic.prototype.returnLoading = function (game) {
            return [
                { text: this.emptyString, delay: 0 },
                { text: this.rows[75] + game, delay: 0 },
                { text: this.rows[76], delay: 0 },
                { text: this.rows[3], delay: 0 },
            ];
        };
        TerminalLogic.prototype.returnLoginError = function (error) {
            var _error = this.errors[Phaser.Math.RND.integerInRange(0, this.errors.length - 1)];
            if (error != undefined)
                _error = error;
            return [
                { text: this.emptyString, delay: 0 },
                { text: this.rows[32], delay: 0 },
                { text: _error, delay: 0, cDelay: 0 },
                { text: this.rows[5], delay: 0 },
                { text: this.rows[36], delay: 0 }
            ];
        };
        TerminalLogic.prototype.charUp = function () {
            if (this.isShell || this.inputIsDisabled)
                return;
            var col = this.getCursorCol();
            var row = this.getCursorRow();
            if (row > 0) {
                this.cursor.y = this.setCursorY(row - 1);
            }
        };
        TerminalLogic.prototype.charDown = function () {
            if (this.isShell || this.inputIsDisabled)
                return;
            var col = this.getCursorCol();
            var row = this.getCursorRow();
            if (row < 24) {
                this.cursor.y = this.setCursorY(row + 1);
            }
            else {
                this.scrollDown();
            }
        };
        TerminalLogic.prototype.charLeft = function () {
            if (this.isShell || this.inputIsDisabled)
                return;
            var col = this.getCursorCol();
            var row = this.getCursorRow();
            if (col == 0) {
                if (row > 0) {
                    this.cursor.y = this.setCursorY(row - 1);
                    this.cursor.x = this.setCursorX(39);
                }
            }
            else {
                this.cursor.x = this.setCursorX(col - 1);
            }
        };
        TerminalLogic.prototype.charRight = function () {
            if (this.isShell || this.inputIsDisabled)
                return;
            var col = this.getCursorCol();
            var row = this.getCursorRow();
            if (col == 39) {
                this.cursor.y = this.setCursorY(row + 1);
                this.cursor.x = this.setCursorX(0);
            }
            else {
                this.cursor.x = this.setCursorX(col + 1);
            }
        };
        TerminalLogic.prototype.scrollDown = function () {
            for (var i = 0; i < 25; i++) {
                if (i < 24) {
                    this.lettersObj[i].text = this.lettersObj[i + 1].text;
                }
                else {
                    this.lettersObj[i].text = this.emptyString;
                }
            }
        };
        TerminalLogic.prototype.removeChar = function () {
            if (this.inputIsDisabled)
                return;
            var col = this.getCursorCol();
            var row = this.getCursorRow();
            if (this.isShell && (this.shellStart < col)) {
                this.lettersObj[row].text = this.replaceAt(this.lettersObj[row].text, col - 1, " ");
                this.cursor.x = this.setCursorX(col - 1);
                this.login = this.login.substr(0, this.login.length - 1);
            }
            else {
                this.lettersObj[row].text = this.replaceAt(this.lettersObj[row].text, col, " ");
                if (col == 0) {
                    if (row > 0) {
                        this.cursor.y = this.setCursorY(row - 1);
                        this.cursor.x = this.setCursorX(39);
                    }
                }
                else {
                    this.cursor.x = this.setCursorX(col - 1);
                }
            }
        };
        TerminalLogic.prototype.addChar = function (key) {
            if (this.inputIsDisabled)
                return;
            var col = this.getCursorCol();
            var row = this.getCursorRow();
            if (this.isShell) {
                if (col == (this.shellStart + this.shellEnd))
                    return;
                this.login = this.login + key;
                if (this.isShellLogin)
                    key = "*";
            }
            this.lettersObj[row].setText(this.replaceAt(this.lettersObj[row].text, col, key));
            this.cursor.x = this.setCursorX(col + 1);
            col++;
            if (col == 40) {
                this.cursor.x = this.setCursorX(0);
                this.cursor.y = this.setCursorY(row + 1);
                row++;
                if (row > 24) {
                    this.scrollDown();
                    this.cursor.y = this.setCursorY(row - 1);
                }
            }
        };
        TerminalLogic.prototype.addChars = function (key) {
            for (var i = 0; i < key.length; i++) {
                this.addChar(key.charAt(i));
            }
        };
        TerminalLogic.prototype.replaceAt = function (string, index, replace) {
            return string.substring(0, index) + replace + string.substring(index + 1);
        };
        TerminalLogic.prototype.returnShellError = function (shellString, error) {
            if (error === void 0) { error = false; }
            this.login = "";
            this.clear();
            this.writeMultiple(this.returnLogin());
            this.write(this.returnReady(shellString), false);
            this.setCursor(0, this.returnLogin().length + 1);
            if (error)
                this.writeMultiple(this.returnLoginError("PASSWORD NOT VALID!"));
            this.isShell = true;
            this.shellStart = shellString.length;
            this.shellEnd = 10;
            this.isShellLogin = true;
            this.setCursor(shellString.length, this.returnLogin().length);
        };
        TerminalLogic.prototype.returnLogged = function (error) {
            if (error === void 0) { error = false; }
        };
        TerminalLogic.prototype.checkCoordinates = function (coordinates) {
            if (coordinates == "quit")
                return 0;
            if (coordinates.length > 7)
                return -1;
            var _pos = coordinates.indexOf(",");
            if (_pos == -1 || _pos == 0 || _pos == coordinates.length - 1)
                return -1;
            var _coo = coordinates.split(",");
            if (!this.checkNumber(_coo[0]) || !this.checkNumber(_coo[1]))
                return -1;
            return 1;
        };
        TerminalLogic.prototype.checkNumber = function (val) {
            var pattern = /^\d+$/;
            return pattern.test(val);
        };
        TerminalLogic.prototype.openGame = function (url) {
            window.open(url, "_blank");
            this.gameLoaded = "";
            this.writeMultiple([{ text: this.rows[77], delay: 0 }, { text: url, delay: 0 }]);
            this.write(this.returnReady());
        };
        TerminalLogic.prototype.hitTarget = function () {
            //this.terminal.currentState.shootFromHigh([17]);
            //this.terminal.hide();
            //return;
            var _this = this;
            this.clearShell();
            this.clear();
            this.writeMultiple(this.returnStaticString(msgs.targetAquired, 0));
            var _loop_1 = function (i) {
                this_1.scene.time.addEvent({ delay: 1000 * i, callback: function () {
                        _this.writeMultiple(_this.returnStaticString(8 + i, 0));
                        if (i == 5)
                            _this.scene.time.addEvent({ delay: 1000, callback: function () {
                                    _this.terminal.hide();
                                    _this.terminal.scene.shootFromHigh([27]);
                                }, callbackScope: _this });
                    }, callbackScope: this_1 });
            };
            var this_1 = this;
            for (var i = 0; i < 6; i++) {
                _loop_1(i);
            }
        };
        TerminalLogic.prototype.submitCommand = function () {
            var row = this.getCursorRow();
            var command = this.lettersObj[row].text.toLowerCase().trim();
            this.cursor.y = this.setCursorY(row + 1);
            row++;
            if (row > 24) {
                this.scrollDown();
                this.cursor.y = this.setCursorY(row - 1);
            }
            // console.log(command)
            if (this.isShell) {
                // console.log(this.login)
                switch (this.shellType) {
                    case 0:
                        switch (this.login) {
                            case "quit":
                                this.clear();
                                this.write(this.returnReady());
                                this.clearShell();
                                break;
                            default:
                                this.ajaxCall({ who: "login", login: this.login });
                                break;
                        }
                        break;
                    case 1:
                        switch (this.checkCoordinates(this.login)) {
                            case -1:
                                this.returnLogged(this, true);
                                break;
                            case 1:
                                this.ajaxCall({ who: "coordinates", coordinates: this.login });
                                break;
                            case 0:
                                this.clear();
                                this.write(this.returnReady());
                                this.clearShell();
                                break;
                        }
                        break;
                }
            }
            else {
                this.clearShell();
                switch (command) {
                    case "hit":
                        this.hitTarget();
                        break;
                    case "":
                        break;
                    case "run":
                        if (this.gameLoaded == "")
                            this.writeMultiple(this.returnError("NO GAME LOADED"));
                        switch (this.gameLoaded) {
                            case "bocconcini dev":
                                this.openGame("http://bocconcinidev.zero89.it");
                                break;
                            case "xmas2k16":
                                this.openGame("http://xmas2016.zero89.it");
                                break;
                            case "hwi20years":
                                this.openGame("http://20years.zero89.it");
                                break;
                            case "the wrong direction":
                                this.openGame("http://twd.zero89.it");
                                break;
                        }
                        break;
                    case "version":
                    case "ver":
                        this.writeMultiple(this.returnVersion());
                        break;
                    case "credits":
                    case "cred":
                        this.writeMultiple(this.returnCredits());
                        break;
                    case "load \"bocconcini dev\"":
                        this.writeMultiple(this.returnLoading("BOCCONCINI DEV"));
                        this.gameLoaded = "bocconcini dev";
                        break;
                    case "load \"xmas2k16\"":
                        this.writeMultiple(this.returnLoading("XMAS2K16"));
                        this.gameLoaded = "xmas2k16";
                        break;
                    case "load \"hwi20years\"":
                        this.writeMultiple(this.returnLoading("HWI20YEARS"));
                        this.gameLoaded = "hwi20years";
                        break;
                    case "load \"the wrong direction\"":
                        this.writeMultiple(this.returnLoading("THE WRONG DIRECTION"));
                        this.gameLoaded = "the wrong direction";
                        break;
                    case "load \"gtw\"":
                    case "load":
                        if (!this.logged) {
                            this.shellType = shell.login;
                            this.returnShellError(">:");
                        }
                        else {
                            this.returnLogged(this);
                        }
                        break;
                    case "dir":
                    case "list":
                        this.writeMultiple(this.returnGames());
                        break;
                    case "help":
                        this.writeMultiple(this.returnCommands());
                        break;
                    case "clear":
                        this.clear();
                        this.write(this.returnReady());
                        break;
                    case "quit":
                    case "exit":
                        this.terminal.hide();
                        break;
                    case "reset":
                    case "sys64738":
                        this.reset();
                        break;
                    default:
                        this.writeMultiple(this.returnError());
                        break;
                }
            }
        };
        TerminalLogic.prototype.ajaxCall = function (data) {
            this.disableInput();
            this.writeMultiple(this.returnProcessing());
            var _this = this;
            $.ajax({
                url: "http://www.zero89.it/api/script/adventure/core.aspx",
                dataType: "script",
                type: "GET",
                data: data
            }).done(function (data) { _this.enableInput(); }).fail(function (xhr) {
                console.log(xhr);
            });
        };
        TerminalLogic.prototype.clearShell = function () {
            this.isShell = false;
            this.shellStart = 0;
            this.shellEnd = 0;
            this.isShellLogin = false;
            this.shellType = -1;
        };
        TerminalLogic.prototype.clear = function (start, end) {
            var _start = 0;
            var _end = 25;
            if (start != undefined)
                _start = start;
            if (end != undefined)
                _end = end;
            this.currentColumn = 0;
            this.currentRow = 0;
            var _clear = this.clearString;
            for (var i = _start; i < _end; i++) {
                _clear.row = i;
                this.lettersObj[i].text = this.emptyString;
            }
            this.cursor.y = this.setCursorY(0);
            this.cursor.x = this.setCursorX(0);
        };
        TerminalLogic.prototype.removeLines = function () {
            this.lettersObj.forEach(function (element) {
                element.destroy();
            });
        };
        TerminalLogic.prototype.destroy = function () {
            //console.log("destroy writer")
            this.removeLines();
            this.cursor.destroy();
        };
        TerminalLogic.prototype.writeMultiple = function (letters) {
            var _this = this;
            letters.forEach(function (element) { _this.write(element); });
            //this.cursor.y+=16;
        };
        TerminalLogic.prototype.someLogic = function () {
            return 66;
        };
        TerminalLogic.prototype.write = function (obj, cursorNext) {
            if (cursorNext === void 0) { cursorNext = true; }
            var element = obj;
            var textObj;
            var cDelay = 0;
            var row = this.getCursorRow();
            if (row == 25) {
                this.scrollDown();
                row--;
            }
            textObj = this.lettersObj[row];
            if (element.cursor != undefined)
                this.cursor.play(element.cursor);
            if (element.cDelay != undefined)
                cDelay = element.cDelay;
            if (element.tint != undefined)
                this.tint = element.tint;
            textObj.tint = this.tint;
            textObj.text = element.text;
            if (cursorNext) {
                this.cursor.x = this.setCursorX(0);
                this.cursor.y = this.setCursorY(row + 1);
                row = this.getCursorRow();
                if (row == 25) {
                    this.scrollDown();
                    this.cursor.y = this.setCursorY(row - 1);
                }
            }
            /*  if (cDelay == 0) {
  
                  textObj.text = element.text;
  
                  this.cursor.x=0;
                  this.cursor.y=(row*16)+16;
      
                 
                  
  
              } else {
  
                  let nextText = element.text.substring(0, i);
                  let cursorX: number;
                  for (var i = 0; i <= element.text.length; i++) {
  
                      let nextText = element.text.substring(0, i);
  
                      this.game.time.events.add((cDelay * i) + element.delay, () => {
  
                          textObj.text = nextText;
                          cursorX = nextText.length * 16;
                          this.cursor.y = 16 * row;
  
                          if (cursorX == 640) { cursorX = 0; this.cursor.y += 16; }
                          this.cursor.x = cursorX;
  
                      });
  
                  }
  
                   
   
                   
  
              }
  
              */
        };
        return TerminalLogic;
    }());
    z89.TerminalLogic = TerminalLogic;
})(z89 || (z89 = {}));
