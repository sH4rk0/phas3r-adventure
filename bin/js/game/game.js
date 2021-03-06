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
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 1080, 720);
            graphics.generateTexture("menu-phone-bg", 1080, 720);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 40, 40);
            graphics.generateTexture("keyboardKey", 40, 40);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 250, 50);
            graphics.generateTexture("menuActionBtn", 250, 50);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 300, 720);
            graphics.generateTexture("menuAction", 300, 720);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 340, 50);
            graphics.generateTexture("baloonBg", 340, 50);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillRect(0, 0, 340, 5);
            graphics.generateTexture("baloonBorder", 340, 5);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0xffffff, 1);
            graphics.fillTriangle(0, 12.5, 25, 12.5, 12.5, 25);
            graphics.generateTexture("baloonPin", 25, 25);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x00ff00, 1);
            graphics.fillRect(0, 0, 300, 50);
            graphics.generateTexture("forkBtn", 300, 50);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x00ff00, 1);
            graphics.fillRect(0, 0, 50, 50);
            graphics.generateTexture("btn", 50, 50);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x00ff00, 1);
            graphics.fillRect(0, 0, 316, 52);
            graphics.generateTexture("skill", 316, 52);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 640, 400);
            graphics.generateTexture("terminale", 640, 400);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x206000, 1);
            graphics.fillRect(0, 0, 300, 20);
            graphics.generateTexture("phone-options", 300, 20);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.lineStyle(10, 0x00ff00, 1);
            graphics.strokeRect(0, 0, 380, 80);
            graphics.generateTexture("guru-meditation", 380, 80);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 0.75);
            graphics.fillRect(0, 0, 1080, 200);
            graphics.generateTexture("chapterTitleBg", 1080, 200);
            //graphics.clear();
            graphics = this.make.graphics({ x: 0, y: 0, add: false });
            graphics.fillStyle(0x000000, 1);
            graphics.fillRect(0, 0, 73, 73);
            graphics.generateTexture("transitionBlock", 73, 73);
            //graphics.clear();
            /*var graphics2 = this.make.graphics({ x: 0, y: 0, add: false });
            graphics2.fillRect(0, 0, 50, 126);
            graphics2.generateTexture("playerHitArea", 50, 126);
            graphics2.clear();*/
            this.load.bitmapFont("commodore", "assets/fonts/64_0.png", "assets/fonts/64.xml");
            this.load.bitmapFont("commodore2", "assets/fonts/64x32_0.png", "assets/fonts/64x32.xml");
            this.load.spritesheet("cursor", "assets/images/game/terminal/cursor.png", {
                frameWidth: 16,
                frameHeight: 16,
                endFrame: 2
            });
            if (this.game.device.input.touch &&
                (this.game.device.os.iOS ||
                    this.game.device.os.android ||
                    this.game.device.os.windowsPhone)) {
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
                key: "Preloader",
                pack: {
                    files: [
                        {
                            type: "plugin",
                            key: "rexwebfontloaderplugin",
                            url: "/js/libs/webfonts.plugin.js",
                            start: true
                        }
                    ]
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
                gameData.assets.sounds.forEach(function (element) {
                    var _sound = _this.sound.add(element.name);
                    z89.pushSound(_sound);
                });
                _this.body.className = "";
                _this.scene.start("GameCity");
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
                this.plugins.get("rexwebfontloaderplugin").addToScene(this);
                var config = {
                    google: {
                        families: ["Roboto"]
                    }
                };
                this.load.rexWebFont(config);
            }
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
        function GameCity() {
            var _this = _super.call(this, { key: "GameCity" }) || this;
            _this.started = false;
            _this.gameCompleted = false;
            // private filters: Array<Phaser.Filter>;
            _this.gameInteraction = true;
            _this.currentChapter = 0;
            _this.parallax = [];
            return _this;
        }
        GameCity.prototype.preload = function () {
            console.log("GameCity:preload");
        };
        GameCity.prototype.create = function () {
            var _this = this;
            document.getElementsByTagName("body")[0].className = "game";
            console.log("GameCity:create");
            this.gameItemsUtils = new z89.GameItemsUtils(this);
            this.gameUtils = new z89.GameUtils(this);
            this.saveGameObj = new z89.saveGame(this);
            var backgroundPointer = this.add
                .image(0, 0, "bg-level0")
                .setInteractive()
                .setScrollFactor(0)
                .setOrigin(0, 0);
            // +++++++++++++++++++++++++++++++++++++++
            // group city
            // +++++++++++++++++++++++++++++++++++++++
            this.groupCity = this.add.group();
            // +++++++++++++++++++++++++++++++++++++++
            // group All
            // +++++++++++++++++++++++++++++++++++++++
            this.groupAll = this.add.group();
            this.groupAll.runChildUpdate = true;
            // +++++++++++++++++++++++++++++++++++++++
            // group Baloon
            // +++++++++++++++++++++++++++++++++++++++
            // this.groupBaloon = this.add.group();
            this.playerBaloon = new z89.PlayerBaloon(this);
            this.playerBaloon.setDepth(900);
            //this.groupBaloon.add(this.playerBaloon);
            this.conversationBaloon = new z89.conversationBaloon(this, 0, 0);
            this.conversationBaloon.setDepth(900);
            //this.groupBaloon.add(this.conversationBaloon);
            // +++++++++++++++++++++++++++++++++++++++
            // group Action
            // +++++++++++++++++++++++++++++++++++++++
            this.playerActions = new z89.PlayerActions(this);
            this.playerActions.setDepth(950);
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
            // +++++++++++++++++++++++++++++++++++++++
            // group transition
            // +++++++++++++++++++++++++++++++++++++++
            this.transition = new z89.Transition(this);
            this.transition.setDepth(2001);
            // +++++++++++++++++++++++++++++++++++++++
            // group Action
            // +++++++++++++++++++++++++++++++++++++++
            this.viewer = new z89.Viewer(this);
            this.viewer.setDepth(2002);
            // +++++++++++++++++++++++++++++++++++++++
            // saved game
            // +++++++++++++++++++++++++++++++++++++++
            this.player = new z89.Player(this);
            this.player.setAlpha(0);
            this.transition.show(function () {
                _this.start();
                _this.transition.hide();
            }, 1);
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
            // +++++++++++++++++++++++++++++++++++++++
            // GROUND
            // +++++++++++++++++++++++++++++++++++++++
            backgroundPointer.on("pointerdown", function (ground) {
                if (!_this.gameInteraction)
                    return;
                //if (this.playerActions.IsOpen()) this.playerActions.hide();
                _this.player.goTo(_this.input.x + _this.mainCamera.scrollX, _this.input.y);
            }, this);
            this.chapterTitleBg = this.add.image(0, 100, "chapterTitleBg");
            this.chapterTitleBg
                .setScrollFactor(0)
                .setOrigin(0)
                .setAlpha(0)
                .setDepth(909)
                .setVisible(false);
            this.chapterTitle = this.add.bitmapText(100, 200, "commodore2", "", 48);
            this.chapterTitle
                .setScrollFactor(0)
                .setOrigin(0)
                .setAlpha(0)
                .setDepth(910)
                .setVisible(false);
            z89.playSound(z89.gameSound.intro);
            //add an Items on scene && a copy of the same item with randomized id
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            //this.gameItemsUtils.addItem(100);
            /* this.gameItemsUtils.addItem(100,true);
            this.gameItemsUtils.addItem(100,true);
            this.gameItemsUtils.addItem(100,true);
            this.gameItemsUtils.addItem(100,true);
            this.gameItemsUtils.addItem(100,true);
            this.gameItemsUtils.addItem(100,true);
            this.gameItemsUtils.addItem(100,true);
            this.gameItemsUtils.addItem(100,true);
            */
            //add an existing item from group list to the inventory
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // this.addInventoryItem(this.gameItemsUtils.getItemById(24));
            //get an item from list and add to the inventory
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            //this.addInventory(13, true);
            //this.addInventory(35, true);
            //beam out existing Items
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            // this.gameItemsUtils.beamOut(27);
            //add an Item and beam In
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            //this.gameItemsUtils.addItem(27);
            //this.gameItemsUtils.beamIn(27);
            //shoot Items from high
            //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            //this.shootFromHigh([27]);
            //accessible global instance for backend ajax call
            _gamecity = this;
            /*
            let dijkstra = new Dijkstra();
            dijkstra.addVertex(
              new Vertex(
                "A",
                [
                  { nameOfVertex: "C", weight: 3 },
                  { nameOfVertex: "E", weight: 7 },
                  { nameOfVertex: "B", weight: 4 }
                ],
                1
              )
            );
            dijkstra.addVertex(
              new Vertex(
                "B",
                [
                  { nameOfVertex: "A", weight: 4 },
                  { nameOfVertex: "C", weight: 6 },
                  { nameOfVertex: "D", weight: 5 }
                ],
                1
              )
            );
            dijkstra.addVertex(
              new Vertex(
                "C",
                [
                  { nameOfVertex: "A", weight: 3 },
                  { nameOfVertex: "B", weight: 6 },
                  { nameOfVertex: "E", weight: 8 },
                  { nameOfVertex: "D", weight: 11 }
                ],
                1
              )
            );
            dijkstra.addVertex(
              new Vertex(
                "D",
                [
                  { nameOfVertex: "B", weight: 5 },
                  { nameOfVertex: "C", weight: 11 },
                  { nameOfVertex: "E", weight: 2 },
                  { nameOfVertex: "F", weight: 2 }
                ],
                1
              )
            );
            dijkstra.addVertex(
              new Vertex(
                "E",
                [
                  { nameOfVertex: "A", weight: 7 },
                  { nameOfVertex: "C", weight: 8 },
                  { nameOfVertex: "D", weight: 2 },
                  { nameOfVertex: "G", weight: 5 }
                ],
                1
              )
            );
            dijkstra.addVertex(
              new Vertex(
                "F",
                [{ nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 3 }],
                1
              )
            );
            dijkstra.addVertex(
              new Vertex(
                "G",
                [
                  { nameOfVertex: "D", weight: 10 },
                  { nameOfVertex: "E", weight: 5 },
                  { nameOfVertex: "F", weight: 3 }
                ],
                1
              )
            );
            console.log(dijkstra.findShortestWay("A", "F"));
      
            */
        };
        GameCity.prototype.start = function () {
            if (this.saveGameObj.gameIsSaved()) {
                this.processSavedGameMulti();
            }
            else {
                this.setUpScene("city");
                this.playerMenu.openOnStart();
                this.saveGameObj.updatePlayerPosition(this.player.x, this.player.y);
            }
            this.mainCamera = this.cameras.main;
            this.mainCamera.startFollow(this.player, true, 0.15, 1);
            this.started = true;
        };
        GameCity.prototype.setUpScene = function (name, _x, _y) {
            var _this = this;
            //console.log("setup scene");
            gameData.ingame.scenes.forEach(function (element) {
                if (element.name === name) {
                    _this.saveGameObj.setScene(name);
                    _this.currentScene = element;
                    /* clear all elements */
                    _this.groupAll.runChildUpdate = false;
                    _this.tweens.killAll();
                    _this.time.removeAllEvents();
                    _this.groupAll.clear(true, true);
                    _this.groupCity.clear(true, true);
                    /* ---------------------------- */
                    _this.setBackground(element.parallax, element.buildings);
                    element.startItems.forEach(function (itemId) {
                        _this.gameItemsUtils.addItem(itemId);
                    });
                    _this.groupAll.runChildUpdate = true;
                    _this.cameras.main.setBounds(element.cameraBounds.x, element.cameraBounds.y, element.cameraBounds.width, element.cameraBounds.height);
                    if (element.playerPosition.x != null &&
                        element.playerPosition.y != null) {
                        _this.player
                            .setX(element.playerPosition.x)
                            .setY(element.playerPosition.y)
                            .setDepth(element.playerPosition.y);
                    }
                    else {
                        _this.player
                            .setX(element.playerStartPosition.x)
                            .setY(element.playerStartPosition.y)
                            .setDepth(element.playerStartPosition.y);
                    }
                    if (_x != null && _y != null) {
                        _this.player
                            .setX(_x)
                            .setY(_y)
                            .setDepth(_y);
                    }
                    //this.gameUtils.composeVertexMap(element);
                    if (_this.graphics != undefined)
                        _this.graphics.clear();
                    _this.setSceneBounds(element.bounds, element.vertexList);
                    _this.setSceneObstacles(element.obstacles, element.vertexList);
                }
            });
            this.saveGameObj.updateItems();
        };
        GameCity.prototype.setBackground = function (parallaxes, buildings) {
            var _this = this;
            //console.log(parallaxes, buildings);
            var parallax;
            parallaxes.forEach(function (element) {
                parallax = _this.add.tileSprite(element.x, element.y, element.w, element.h, element.s);
                parallax
                    .setZ(element.scrollFactor)
                    .setScrollFactor(0)
                    .setOrigin(0, 0)
                    .setDepth(element.depth);
                _this.parallax.push(parallax);
                _this.groupCity.add(parallax);
            });
            //console.log(this.parallax);
            var building;
            buildings.forEach(function (element) {
                building = _this.add.image(element.x, element.y, element.s, 0);
                if (element.sf)
                    building.setScrollFactor(0);
                if (element.depth != undefined)
                    building.setDepth(element.depth);
                if (element.soZeroOne) {
                    building.setOrigin(0, 1);
                }
                else {
                    building.setOrigin(0, 0);
                }
                _this.groupCity.add(building);
            });
        };
        GameCity.prototype.setSceneObstacles = function (obstacles, vertexList) {
            var _this = this;
            return;
            obstacles.forEach(function (obstacle) {
                obstacle.bounds.forEach(function (bound) {
                    _this.graphics = _this.add.graphics();
                    _this.graphics.lineStyle(2, 0x00ff00, 1);
                    _this.graphics.lineBetween(vertexList[bound[0]].x, vertexList[bound[0]].y, vertexList[bound[1]].x, vertexList[bound[1]].y);
                });
            });
        };
        GameCity.prototype.setSceneBounds = function (bounds, vertexList) {
            var _this = this;
            this.sceneBounds = [];
            bounds.forEach(function (bound) {
                _this.sceneBounds.push(new Phaser.Geom.Line(vertexList[bound[0]].x, vertexList[bound[0]].y, vertexList[bound[1]].x, vertexList[bound[1]].y));
                /* this.graphics = this.add.graphics();
                this.graphics.lineStyle(2, 0x00ff00, 1);
                this.graphics.lineBetween(
                  vertexList[bound[0]].x,
                  vertexList[bound[0]].y,
                  vertexList[bound[1]].x,
                  vertexList[bound[1]].y
                );*/
            });
        };
        GameCity.prototype.processSavedGameMulti = function () {
            var _this = this;
            var _saved = this.saveGameObj.getSaved();
            //console.log(_saved);
            this.currentChapter = _saved.chapter.current;
            if (_saved.chapter.choice == null) {
                this.displayChapterOptions();
            }
            //this.setUpScene(_saved.currentScene);
            _saved.scenes.forEach(function (element) {
                if (element.name == _saved.currentScene) {
                    //console.log(element);
                    _saved.items = element.items;
                    _this.cameras.main.setBounds(element.cameraBounds.x, element.cameraBounds.y, element.cameraBounds.width, element.cameraBounds.height);
                    _this.player.x = element.playerPosition.x;
                    _this.player.y = element.playerPosition.y;
                    _this.currentScene = element;
                    //console.log(element);
                    _this.setBackground(element.parallax, element.buildings);
                    // this.gameUtils.composeVertexMap(element);
                    if (_this.graphics != undefined)
                        _this.graphics.clear();
                    _this.setSceneBounds(element.bounds, element.vertexList);
                    _this.setSceneObstacles(element.obstacles, element.vertexList);
                }
            });
            if (_saved.items != undefined) {
                this.gameItemsUtils.addSavedItems(_saved.items);
            }
            if (_saved.inventory != undefined && _saved.inventory.length > 0) {
                _saved.inventory.forEach(function (element) {
                    //console.log("add from cache" + element);
                    if (!_this.playerActions.isInInventory(element.id)) {
                        var item = void 0;
                        // console.log(element.type )
                        switch (element.type) {
                            default:
                                _this.groupAll.add(new z89.Items(_this, element));
                                break;
                        }
                        //console.log(element,this.getItemSpriteId(element))
                        _this.addInventoryItem(_this.gameItemsUtils.getItemById(element.id));
                    }
                });
            }
        };
        GameCity.prototype.setLanguage = function (language) {
            currentLang = language;
            this.gameItemsUtils.setLanguage();
            this.playerActions.setLanguage();
        };
        GameCity.prototype.setGameCompleted = function () {
            this.gameCompleted = true;
        };
        GameCity.prototype.stopSound = function () {
            z89.stopSoundAll();
        };
        GameCity.prototype.playSound = function (sound) {
            z89.stopSoundAll();
            z89.playSound(sound);
        };
        GameCity.prototype.restartGame = function () {
            this.saveGameObj.destroy();
            document.location.reload();
            //console.log("restart game");
        };
        GameCity.prototype.update = function (time, delta) {
            var _this = this;
            if (this.started) {
                this.parallax.forEach(function (element) {
                    element.tilePositionX = _this.mainCamera.scrollX * element.z;
                });
            }
            // console.log([ 'x: ' + this.mainCamera.scrollX, 'y: ' + this.mainCamera.scrollY ]);
        };
        GameCity.prototype.leaveGame = function () {
            var _this = this;
            this.saveGameObj.setChoiceChapter(true);
            gameData.chapters.forEach(function (element) {
                if (!element.completed)
                    element.complete(_this);
            });
            this.enableInteraction();
        };
        GameCity.prototype.getItem = function (id) {
            return this.gameItemsUtils.getItemById(id);
        };
        GameCity.prototype.render = function () {
            //this.debug.cameraInfo(this.game.camera, 500, 232);
            //this.game.debug.spriteCoords(this.player, 32, 32);
            //this.game.debug.bodyInfo(this.player, 32, 32);
            //this.game.debug.body(this.player.myArea)
        };
        GameCity.prototype.startConversation = function () {
            var _actionObj = this.playerActions.getActionObject();
            // this.conversationBaloon.setUpConversation(_actionObj);
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
        GameCity.prototype.transitionShow = function (callback) {
            this.transition.show(callback, 1);
        };
        GameCity.prototype.transitionHide = function () {
            this.transition.hide();
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
            this.gameInteraction = false;
        };
        GameCity.prototype.enableInteraction = function () {
            this.gameInteraction = true;
        };
        GameCity.prototype.isInteractionDisabled = function () {
            return !this.gameInteraction;
        };
        GameCity.prototype.addInventory = function (itemIndex, noAnimation) {
            this.playerActions.addInventory(itemIndex, noAnimation);
        };
        GameCity.prototype.addInventoryItem = function (item, noAnimation) {
            this.playerActions.addInventoryItem(item, noAnimation);
        };
        GameCity.prototype.updateItemObject = function (itemId, key, value) {
            this.gameItemsUtils.getItemById(itemId).updateItemObj(key, value);
        };
        GameCity.prototype.updateItemsObjects = function (items, keys, values) {
            var _this = this;
            items.forEach(function (element, index) {
                _this.updateItemObject(element, keys[index], values[index]);
            });
        };
        GameCity.prototype.removeInventoryItems = function () {
            this.playerActions.removeItems(this.playerActions.getActionObject().inventory);
        };
        GameCity.prototype.dropInventoryItem = function () {
            var _currActionObj = this.playerActions.getActionObject();
            var _item;
            if (_currActionObj.item == null) {
                _item = _currActionObj.inventory[0];
            }
            else {
                _item = _currActionObj.item;
            }
            if (!this.playerActions.isInInventory(_item.id)) {
                return;
            }
            // console.log(_item);
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
        GameCity.prototype.isChapterCompleted = function (chapterIndex) {
            return this.saveGameObj.getSaved().chapter.chapters[chapterIndex];
        };
        GameCity.prototype.chapterCompleted = function () {
            //console.log("chapter completed");
            this.saveGameObj.setChapterCompleted(this.currentChapter);
            this.currentChapter++;
            //this.currentChapter=this.saveGameObj.getSaved().chapter.current;
            gameData.chapters[this.currentChapter].completed = true;
            this.saveGameObj.setChoiceChapter(null);
            this.saveGameObj.setCurrentChapter(this.currentChapter);
            this.displayChapterOptions();
        };
        GameCity.prototype.displayChapterOptions = function () {
            //console.log("displayChapterOptions");
            this.conversationBaloon.setUpConversation({
                key: "CHAPTER_COMPLETED",
                action: null,
                inventory: null,
                item: null
            });
            this.playerMenu.hide();
            this.playerActions.hide();
            this.playerBaloon.hideBaloon();
            this.disableInteraction();
        };
        GameCity.prototype.nextChapter = function () {
            this.saveGameObj.setChoiceChapter(true);
            this.saveGameObj.clearTips();
            //console.log(this.saveGameObj.getSaved());
            this.currentChapter = this.saveGameObj.getSaved().chapter.current;
            this.displayChapterTitle(this.currentChapter);
            this.playerMenu.hide();
            this.playerActions.hide();
            this.playerBaloon.hideBaloon();
            this.conversationBaloon.hideBaloon();
            this.enableInteraction();
        };
        GameCity.prototype.displayChapterTitle = function (chapterIndex) {
            var _this = this;
            if (chapterIndex != undefined)
                this.currentChapter = chapterIndex;
            this.chapterTitle.setVisible(true);
            this.chapterTitleBg.setVisible(true);
            this.chapterTitle.text = gameData.chapters[this.currentChapter].title;
            Phaser.Display.Align.In.Center(this.chapterTitle, this.chapterTitleBg);
            this.tweens.add({
                targets: [this.chapterTitle, this.chapterTitleBg],
                duration: 1000,
                alpha: 1,
                yoyo: true,
                loop: 0,
                hold: 2000,
                onComplete: function () {
                    _this.chapterTitle.setVisible(false);
                    _this.chapterTitleBg.setVisible(false);
                }
            });
        };
        GameCity.prototype.removeItem = function (itemIndex) {
            this.groupAll.remove(this.gameItemsUtils.getItemById(itemIndex), true, true);
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
        GameCity.prototype.showPlayerBaloon = function (textId, callback) {
            this.player.showBaloon(z89.getLabel(textId), callback);
        };
        GameCity.prototype.addItem = function (id, randomId) {
            this.gameItemsUtils.addItem(id, randomId);
        };
        GameCity.prototype.addDelay = function (delay, callback) {
            this.gameUtils.addDelay(delay, callback);
        };
        GameCity.prototype.addTween = function (tweenObj) {
            this.tweens.add(tweenObj);
        };
        GameCity.prototype.playerAnimation = function (animation) {
            this.player.playAnimation(animation);
        };
        GameCity.prototype.setUpConversation = function (_actionObj) {
            this.conversationBaloon.setUpConversation(_actionObj);
        };
        GameCity.prototype.updateItems = function () {
            this.saveGameObj.updateItems();
        };
        GameCity.prototype.showViewer = function (images, callback) {
            this.viewer.preload(images, callback);
            //console.log("showViewer");
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
        GameItemsUtils.prototype.addItem = function (id, randomId) {
            var _itemObj = this.getItemObjById(id);
            if (randomId != undefined) {
                _itemObj = JSON.parse(JSON.stringify(_itemObj));
                _itemObj.id = Phaser.Math.RND.integerInRange(1000, 100000);
            }
            // console.log(_itemObj);
            this.attachItem(_itemObj);
        };
        GameItemsUtils.prototype.attachItem = function (_itemObj) {
            if (_itemObj != undefined) {
                switch (_itemObj.type) {
                    case 2:
                        //    this.scene.groupAll.add(new ItemsTruck(this.scene, _itemObj));
                        break;
                    case 3:
                        this.scene.groupAll.add(new z89.ItemsContent(this.scene, _itemObj));
                        break;
                    case 4:
                        this.scene.groupAll.add(new z89.ItemsSkill(this.scene, _itemObj));
                        break;
                    case 5:
                        // this.scene.groupCity.add(new Items(this.scene, _itemObj));
                        break;
                    case 6:
                        this.scene.groupAll.add(new z89.ItemsWalking(this.scene, _itemObj));
                        break;
                    default:
                        // console.log(_itemObj);
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
            // console.log(_itemObj);
            return _itemObj;
        };
        GameItemsUtils.prototype.setLanguage = function () {
            this.scene.groupAll.children.each(function (item) {
                if (item.itemObj != undefined) {
                    item.name = z89.getLabel(item.itemObj.name);
                }
            }, this);
        };
        GameItemsUtils.prototype.beamIn = function (item, callback) {
            var _this = this;
            if (item == undefined)
                return;
            item.setAlpha(0);
            var beam = this.scene.add.sprite(item.x, 0, "beam");
            beam
                .setScale(0.5, item.y / 200)
                .setOrigin(0.5, 0)
                .setAlpha(0)
                .setDepth(item.y)
                .play("beam");
            this.scene.groupAll.add(beam);
            /*
            let color2 = new Phaser.Display.Color(255, 255, 255);
            let color1 = new Phaser.Display.Color(0, 255, 0);
            this.scene.gameUtils.tweenTint(this, color1, color2, 300, 300, null);
      */
            var tweenBeam = this.scene.tweens.add({
                targets: beam,
                scaleX: 1,
                alpha: 0.5,
                ease: "Power1",
                duration: 300,
                delay: 1000,
                repeat: 0,
                onComplete: function () {
                    if (item == undefined)
                        return;
                    _this.scene.tweens.add({
                        targets: item,
                        alpha: 1,
                        duration: 300,
                        repeat: 0,
                        onComplete: function () {
                            if (callback != undefined)
                                callback();
                        }
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
        GameItemsUtils.prototype.beamOut = function (item, callback) {
            var _this = this;
            if (item != undefined) {
                var beam_1 = this.scene.add.sprite(item.x, 0, "beam");
                this.scene.groupAll.add(beam_1);
                beam_1
                    .setScale(0.5, item.y / 200)
                    .setOrigin(0.5, 0)
                    .setAlpha(0)
                    .setDepth(item.y)
                    .play("beam");
                var tweenBeam = this.scene.tweens.add({
                    targets: beam_1,
                    scaleX: 1,
                    alpha: 0.3,
                    ease: "Power1",
                    duration: 300,
                    delay: 500,
                    repeat: 0,
                    onComplete: function () {
                        _this.scene.tweens.add({
                            targets: beam_1,
                            alpha: 0,
                            ease: "Power1",
                            duration: 100,
                            repeat: 0,
                            onComplete: function () {
                                beam_1.destroy();
                            }
                        });
                    }
                });
                /*
              let color1 = new Phaser.Display.Color(255, 255, 255);
              let color2 = new Phaser.Display.Color(0, 255, 0);
              this.scene.gameUtils.tweenTint(item, color1, color2, 300, 400, null);
              */
                var test = this.scene.tweens.add({
                    targets: item,
                    scaleX: 1.5,
                    scaleY: 0.5,
                    ease: "Power1",
                    alpha: 0.5,
                    duration: 300,
                    repeat: 0,
                    delay: 500,
                    onComplete: function () {
                        _this.scene.tweens.add({
                            targets: item,
                            y: item.y - 100,
                            scaleX: 0.25,
                            scaleY: 10,
                            alpha: 0,
                            duration: 300,
                            ease: "Power1",
                            repeat: 0,
                            onComplete: function () {
                                item.setScale(1).setY(item.itemObj.y);
                                if (callback != undefined)
                                    callback();
                                //to remove an item definitly
                                //this.scene.removeItem(itemId);
                                //this.scene.saveGameObj.updateItems();
                            }
                        });
                    }
                });
            }
        };
        GameItemsUtils.prototype.shootFromHigh = function (targets, shot, callback) {
            var _this = this;
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
                            27,
                            28
                        ],
                        rate: 25,
                        loop: false
                    }
                }
            };
            var _shot;
            targets.forEach(function (element, index) {
                _this.scene.groupAll.children.each(function (sprite) {
                    if (sprite.id == element) {
                        //console.log(sprite);
                        _shot = _this.scene.add.sprite(sprite.x, -100, shot.missile.name);
                        _shot.setOrigin(0.5, 1).setDepth(1000);
                        _shot.anims.animationManager.create({
                            key: "run",
                            frames: _this.scene.anims.generateFrameNumbers("meteor", {
                                frames: shot.missile.animation.frames
                            }),
                            frameRate: shot.missile.animation.rate,
                            repeat: -1
                        });
                        _shot.play("run");
                        _this.scene.tweens.add({
                            targets: _shot,
                            y: sprite.y,
                            duration: 1000,
                            delay: shot.delay * index,
                            ease: "Quad.easeIn",
                            onComplete: function () {
                                _this.scene.mainCamera.flash(500, 255, 255, 255);
                                _this.scene.mainCamera.shake(700, 0.01);
                                _this.explosion(sprite.x, sprite.y, shot.explosion);
                                _this.scene.groupAll.remove(_this.getItemById(sprite.id), true, true);
                                _shot.destroy();
                                _this.scene.saveGameObj.updateItems();
                            }
                        });
                    }
                }, _this);
            });
        };
        GameItemsUtils.prototype.explosion = function (x, y, config) {
            var _explosion = this.scene.add.sprite(x, y, config.name);
            _explosion
                .setOrigin(0.5, 1)
                .setScale(2)
                .setDepth(1000);
            _explosion.anims.animationManager.create({
                key: "explode",
                frames: this.scene.anims.generateFrameNumbers(config.name, {
                    frames: config.animation.frames
                }),
                frameRate: config.animation.rate,
                repeat: 0
            });
            _explosion.play("explode");
            _explosion.on("animationcomplete", function () {
                _explosion.destroy();
            });
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
    var _gameSounds = [];
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
    function conversationObj(key, item) {
        var _item = item;
        return {
            key: key,
            action: null,
            inventory: null,
            item: _item
        };
    }
    z89.conversationObj = conversationObj;
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
        /*callbacks: {
          postBoot: (game) => {
              game.renderer.addPipeline(
                  'testPipeline',
                  new testPipeline({ 'game': game, 'renderer': game.renderer }));
          },
      },*/
    };
    var transitionType;
    (function (transitionType) {
        transitionType[transitionType["standard"] = 0] = "standard";
        transitionType[transitionType["spiral"] = 1] = "spiral";
    })(transitionType = z89.transitionType || (z89.transitionType = {}));
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
    var gameSound;
    (function (gameSound) {
        gameSound[gameSound["intro"] = 0] = "intro";
    })(gameSound = z89.gameSound || (z89.gameSound = {}));
    function pushSound(_sound) {
        _gameSounds.push(_sound);
    }
    z89.pushSound = pushSound;
    function getSound(_sound) {
        return _gameSounds[_sound];
    }
    z89.getSound = getSound;
    function playSound(_sound) {
        _gameSounds[_sound].play();
    }
    z89.playSound = playSound;
    function stopSound(_sound) {
        _gameSounds[_sound].stop();
    }
    z89.stopSound = stopSound;
    function stopSoundAll() {
        _gameSounds.forEach(function (sound) {
            sound.stop();
        });
    }
    z89.stopSoundAll = stopSoundAll;
    function pauseSound(_sound) {
        _gameSounds[_sound].stop();
    }
    z89.pauseSound = pauseSound;
    function setSoundVolume(_sound, _volume) {
        // _gameSounds[_sound].volume = _volume;
    }
    z89.setSoundVolume = setSoundVolume;
    var initGame = (function () {
        function initGame(config) {
            this.config = config;
            // console.log(navigator.onLine);
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
                canvas.style.height = windowWidth / gameRatio + "px";
            }
            else {
                canvas.style.width = windowHeight * gameRatio + "px";
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
        "A can of coke, what else!",
        "Some coins... just for a coke.",
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
        "Wow! It's connected.",
        "It'not connected... maybe later!",
        "Hi! My name is Francesco Raimondo, Presentation Layer Architect @ Healthwareinternational.\nThis is an experimental website made using Phaz3r.js framework. Do you like it? :D",
        "DO YOU REALLY WANT TO RESTART?",
        "I want to thanks Richard Davey author of Phaser Framework,\nPAUL ROBERTSON and\nJASON TAMMEMAGI\nfor their unaware art contribution to this NON-COMMERCIAL experiment.",
        "Here some options!!",
        "Jukebox",
        "DEVDAY website",
        "Info",
        "I would like to listen...",
        "Woofer",
        "Nothing to do with this!",
        "Chapter completed.\n Would you like to continue?",
        "Tap me to access the menu.",
        "The GOVERNOR",
        "Hi!",
        "I'm the GOVERNOR... and you are nothing!",
        "Sidney C64",
        "Chris AGS guru",
        "Bad guy 1",
        "Bad guy 2",
        "Bad guy 3",
        "The Jumper",
        "The Runner",
        "Girl 1",
        "Pastry",
        "Invitation ticket",
        "Come back later!",
        "Already here? Try to use your brain sometimes! Come back later!",
        "Already here? Have you lost all your neurons? Come back later!",
        "No more to say!",
        "You have all information to solve this quest!",
        "Is this your first adventure? Play arond and come back later!",
        "Yo bro! I need your help to solve the ENIGMA!",
        "Yo bro! Do you have any clue on how to solve the quest?",
        "Yo bro! I dont know how to go forward!",
        "sugg 0_0",
        "sugg 0_1",
        "sugg 0_2",
        "sugg 1_0",
        "sugg 1_1",
        "sugg 1_2",
        "Do you want to restart the game?",
        "YES",
        "NO",
        "LEAVE THE GAME",
        "CREDITS",
        "BACK",
        "Nothing",
        "Some 8bit Tune",
        "Never played Zak McKracken and the Alien Mindbenders? Play it and come back later!",
        "Day of the Tentacle sounds new for you? Play it and come back later!",
        "You need to revise The Secret of Monkey Island! Play it and come back later!",
        "Ok, i'll try to find the solution!",
        "Ok, i'll be back!",
        "Gotcha!",
        "Good point!",
        "Galaga is the first game I played!",
        "Mmmm, interesting...",
        "Welcome to my personal adventure website experiment.\nComplete the quests to access the website sections... or explore the website without solving the quest!",
        "Empty bottle",
        "Someone has not thrown the bottle in the trash.",
        "The trashbin is full!",
        "Old floppy disk",
        "WOW! It's an original copy of Zak McKracken... Should be worth a lot of $$$!!! ",
        "WOW! A real Cloak of Invisibility",
        "Screwdriver",
        "A tool for every season!",
        "Fixed!",
        "I don't want to break something!",
        "The door is open.",
        "The door is closed.",
        "No response!",
        "I GOT DEVDAY PASS!",
        "Damn! It's closed!",
        "It's already closed!",
        "Not a good idea!",
        "TIPs I GOT!",
        "Hi Chris! How are you?",
        "Not bad Francesco. I' would like to play this arcade, but there is something that block the coinbox.",
        "MMM... ok, but now I need your AGS GURU expertise to solve my adventure. Could you help me?",
        "Sure!...but I know you are a spare time ARCADE SENSEI... so, if you help me to repair this Arcade, I'll help you to solve your quest.",
        "OK! We have a deal! :D",
        "Hi Francesco, any news on how to fix the Arcade?",
        "Not yet!",
        "Who is???",
        "Me!",
        "Me who?",
        "Me!! DADDY! Please Noemi.. Open the door!",
        "OK...",
        "Is open Now?",
        "Let's try!",
        "Ok Chris, the Arcade is fixed!",
        "Wow!... Do you have also some coins??",
        "NO!!!",
        "OK.... I'll use mine! :D Come back later if you need some help!",
        "Select the language.",
        "ENGLISH",
        "ITALIAN",
        "The interphone seems to work.",
        "Something pulled off the trash!",
        "Hi! Do you want a piece of cake?",
        "No thanks! I'm on Diet. Too much sugar in your cakes! :D",
        "That's why are so sweet... Honey!",
        "Hi Sidney! How are you?",
        "Hi Francesco, I'm ok! You?",
        "Not to bad. I'm involved in this stupid retro adventure...",
        "RETRO ADVENTURE.... this remind me the amazing C64 era! How many memories!",
        "...Exactly! You are very lucky... i would like to have my name starting with a mighty 8bit music format... SID! ;)",
        "True... Nomen omen! So, do you wanna play an adventure?? I have a big archive, you know I'm a collector! ;)",
        "No thanks, I need to play around... finding my way! See you around! ;)",
        "Ok if you think back, I'm here! Bye! :D",
        "Do you changed idea?",
        "No thanks, maybe later!",
        "INCREDIBLE!!!... An original copy of Zak McKracken and the Alien Mindbenders. I have a perfect place in my collection, between the other 5 copy and the original Zak mask.",
        "You have already 5 copy of this game??",
        "You know...more is better than less!",
        "Depends on situation... but in this case I agree. So, do you really have an original Zak mask?",
        'Yes of course! ...it\'s one of... "MY PRECIOUS!!!!"',
        "I would like to try it. Do you think it's possible?",
        "Mmm... I don't know... it's MY PRECIOUS!!!!... Ok... Wait here!",
        "Immutable like... like... a blockchain transaction!!!",
        "Here again!",
        "AHHHHH!!! How are you???",
        'Seems that the mask works properly!...  "MY PRECIOUS!!!!" ....AHUAAAUAUHHA!!',
        "Hey... Gollum... Let me try the mask!",
        "Magic word?",
        "Please!",
        "Zak Mask",
        "The original Zak Mask",
        "Cake",
        "Cloak of Invisibility",
        "Galaga clone",
        "Phaser congress",
        "Interphone",
        "Stairs",
        "Photonstorm",
        "I can't teleport from this location",
        "commodore 64",
        "Zak Mc Kracken Poster",
        "Photo frame",
        "I was a Phaser speaker @ UNIVERSAL JS DAY 2017.\n Great experience!",
        "View more" //224
    ],
    it: [
        "distributore bevande",
        "Troppo pesante!!!",
        "Non c'è modo di tirarlo!",
        "Forse accetta monete!",
        "E' chiuso!",
        "E' già chiuso!",
        "Sembra un normale distributore di bevande.",
        "Non ho soldi.",
        "Davvero!?!?!",
        "Davvero pensi che voglia parlarci?",
        "Coca",
        "Chiedi a Francesco di sviluppare un algoritmo di pathfinding migliore!",
        "Terminale",
        "NO!",
        "Nulla di strano.",
        "Fa davvero caldo! Avrei bisogno di una bevanda.",
        "Cestino",
        "Idrante",
        "Spazzatura puzzolente.!",
        "Non è logico!",
        "Non voglio farlo!",
        "Scordatelo!",
        "Non posso lasciarlo!",
        "Monete",
        "Quattrocchi, non mi far alterare o ti SCUMM a sangue!!",
        "4eyes",
        "Una lattina di coca, che altro!",
        "Alcune monete...giuste per una coca.",
        "Ce l'ho già!",
        "Seleziona un azione!",
        "Non sono stupido!",
        "Michele",
        "Lui è michele, fondatore del DevDay Salerno.",
        "Ciao Mike! Comen va?",
        "Ciao, Francesco, Tutto ok. Non dimenticare il nostro prossimo Meetup.",
        "Sure! Where and when?",
        "Saturday 16th September at Puntolingue. We'll talk about blockchain and bitcoins",
        "AMAZING!!!",
        "Qui il DEVDAY organizza i meeting mensili!!!",
        "@##@ @##@!!!",
        "Gerardo",
        "Daniele",
        "Davide",
        "Lui è Gerardo. Founder del DEVDAY Avellino.",
        "Catena",
        "Catena rotta",
        "Blocco",
        "Un blocco di cemento",
        "DEVDAY in Bits",
        "Un pugno di bits",
        "Blockchain",
        "una blockchain",
        "Bitcoin",
        "un bitcoin",
        "DEVDAY pass",
        "Nastro adesivo",
        "Alimentatore rotto",
        "Alimentatore funzionante",
        "Qualcuno ha perso un rotolo di natro adesivo!",
        "Sembra rotto! Ho bisogno di qualcosa per aggiustarlo.",
        "L'alimentatore è riparato.",
        "DEVDAY PALACE",
        "Che puzza!",
        "Lui è Daniele. Founder del DEVDAY Benevento.",
        "Lui è Davide. Founder del DEVDAY Napoli.",
        "$ git init\n$ git add *.c\n$ git add README\n$ git commit -m 'DEVDAY first commit'",
        "Ciao Gerardo! Come va??",
        "Ehmm!! OK! OK!",
        "Ciao Mike! Come gira??",
        "Ciao Francesco! Un grosso guaio!\nLo schermo pubblicitario non funziona, e non so perchè!\nCosì non possiamo avvisare i Dev dei nostri dei prossimi eventi!!\nHai qualche idea?",
        "Sicuro!",
        "Francesco, novità?",
        "Non ancora!",
        "Grazie Francesco! Adesso lo schermo funziona correttamente.",
        "Di nulla!",
        "The DEVDAY event screen!",
        "DEVDAY ADV screen",
        "Wow! Le mie skills!",
        "Io vivo al terzo piano!",
        "palazzo",
        "porta",
        "Sembra non essere connesso.",
        "Wow! Ora è connesso.",
        "Non è connesso... forse più tardi!",
        "Ciao! Mi chiamo Francesco Raimondo, Presentation Layer Architect @ Healthwareinternational.\nQuesto è un esperimento realizzato usando il framework Phaz3r.js. Che ne pensi? :D",
        "DAVVERO VUOI RICOMINCIARE?",
        "I miei ringraziamenti vanno a Richard Davey autore di Phaser,\nPAUL ROBERTSON e\nJASON TAMMEMAGI\nper il loro inconsapevole contributo a questo esperimento NON COMMERCIALE.",
        "Qualche opzione!!",
        "Jukebox",
        "DEVDAY website",
        "Info",
        "Mi piacerebbe ascoltare...",
        "Woofer",
        "Nulla da fare con questo!",
        "Ho completato questa capitolo. Vuoi continuare?",
        "Tap per accedere al menu.",
        "Il Governatore",
        "Cioa!",
        "Io sono il Governatore... e tu non sei nessuno!",
        "Sidney C64",
        "Chris AGS guru",
        "Bad guy 1",
        "Bad guy 2",
        "Bad guy 3",
        "The Jumper",
        "The Runner",
        "Girl 1",
        "Pasticciera",
        "Invito",
        "Torna più tardi!",
        "Già qui? Prova ad usare il cervello ogni tanto! Torna più tardi!",
        "Già qui? Hai perso tutti i neuroni? Torna più tardi!",
        "Ho già detto tutto!",
        "Hai tutte le informazioni necessarie per risolvere questo capitolo!",
        "E' la tua prima avventura? fai qualche tentativo e poi torna!",
        "Yo bro! Ho bisogno del tuo aiuto per risolvere l' ENIGMA!",
        "Yo bro! Hai qualche indizio su come risolvere la quest?",
        "Yo bro! Non so come andare avanti!",
        "sugg 0_0",
        "sugg 0_1",
        "sugg 0_2",
        "sugg 1_0",
        "sugg 1_1",
        "sugg 1_2",
        "Vuoi ricominciare il gioco?",
        "SI",
        "NO",
        "ABBANDONA IL GIOCO",
        "CREDITI",
        "INDIETRO",
        "Nulla",
        "Musica a 8bit",
        'Mai giocato a "Zak McKracken and the Alien Mindbenders"? Giocaci e poi ritorna!',
        '"Day of the Tentacle" ti suona nuovo? Giocaci e torna più tardi!',
        'Hai bisogno di rigiocare "The Secret of Monkey Island"! Giocaci e poi ritorna!',
        "Ok, cercherò di trovare una soluzione!",
        "Ok, ritornerò!",
        "Capito!",
        "Ottimo spunto!",
        "Galaga è il primo arcade a cui ho giocato!",
        "Mmmm, interessante...",
        "Benvenuto in questo esperimento.\nCompleta le quest per accedere alle sezioni del sito... oppure esplora il sito senza giocare!",
        "Bottiglia vuota",
        "Qualcuno non ha buttato la bottiglia nel cestino.",
        "Il cestino è pieno!",
        "Un vecchio floppy disk",
        "WOW! E' una copia originale di Zak McKracken... Dovrebbe valere un bel pò di $$$!!! ",
        "WOW! Un vero mantello di invisibilità!",
        "Cacciavite",
        "Uno strumento per tutte le stagioni!",
        "Riparato!",
        "Non voglio rompere nulla!",
        "La porta è aperta.",
        "La porta è chiusa.",
        "Nessuna risposta!",
        "I GOT DEVDAY PASS!",
        "Meledizione! E' chiusa!",
        "E' già chiusa!",
        "Non è una buona idea.!",
        "Suggerimenti!",
        "Ciao Chris! Come va?",
        "Non male Francesco. Mi piacerebbe giocare a questo Arcade, ma c'è qualcosa che blocca la gettoniera.",
        "MMM... ok, ma sono qui perchè ho bisogno della tua esperienza di AGS GURU per risolvere la mia avventura. Mi aiuteresti?",
        "Certo!...ma io so che tu sei un ARCADE SENSEI nel tempo libero... se tu mi aiuti a riparare l'Arcade, io ti aiuterò a risolvere la tua avventura.",
        "OK! Abbiamo un accordo! Stretta di mano con lo sputo?? :D",
        "Ciao Francesco, idee su come riparare l'Arcade?",
        "Non ancora!",
        "Chi è???",
        "Sono io!",
        "Io chi?",
        "Sono io!! PAPA'! Dai Noemi.. Apri il portone!",
        "OK...",
        "E' aperto??",
        "Provo!",
        "Ok Chris, l'Arcade è riparato!",
        "Wow!... Hai delle monete??",
        "NO!!!",
        "OK.... Userò le mie! :D Torna se hai bisogno di aiuto!",
        "Seleziona la lingua.",
        "INGLESE",
        "ITALIANO",
        "Il citofono sembra funzionare.",
        "Qualcosa è uscito dal cestino!",
        "Cio! Ti va una fetta di torta?",
        "No grazie! Sono a dieta. Troppo succhero nelle tue torte! :D",
        "Per questo sono così dolci... Caro!",
        "Ciao Sidney! Come butta?",
        "Ciao Francesco, tutto bene! Tu?",
        "Non male, ma mi hanno coinvolto in questa stupida RETRO avventura...",
        "RETRO AVVETURA.... questo mi ricorda i bei tempi del c64! Quanti ricordi!",
        "...Esattamente! Tu sei fortunato... mi piacerebbe che il mio nome iniziasse con il formato musicale del commodore... SID! ;)",
        "Vero... Nomen omen! Così stai giocando un avventura?? Io ho un grosso archivio, lo sai sono un collezionista! Facciamo una partita? ;)",
        "Non posso adesso... ci vediamo in giro! ;)",
        "Ok se ci ripensi, Io sono qui! Ciao! :D",
        "Hai cambiato idea?",
        "No, forse più tardi!",
        "INCREDIBILE!!!... Una copia originale di Zak McKracken and the Alien Mindbenders. Ho un posto perfetto nella mia collezione, tra le altre 5 copie e la maschera originale di Zak.",
        "Hai già 5 copie??",
        "Lo sai...più è meglio che meno!",
        "Dipende dalle situazioni... ma in questo caso concordo. Ma hai davvero la maschera originale di Zak?",
        'Certo! ...è uno dei... "MIEI TESSSSSOORI!!!!"',
        "Mi piacerebbe vederla, credi sia possibile?",
        "Mmm... non so... it's MY PRECIOUS!!!!... Ok... Aspetta qui!",
        "Immutabile come... come... a transazione nella blockchain!!!",
        "Eccomi di ritorno!",
        "AHHHHH!!! Chi sei???",
        'Sembra che la maschera funzioni!...  "IL MI TESSSORO!!!!" ....AHUAAAUAUHHA!!',
        "Hey... Gollum... Fammi provare la maschera!",
        "Parola magica?",
        "PER FAVORE!",
        "Maschera di ZAK",
        "La maschera originale di ZAK",
        "Torta",
        "Mantello di invisibilità",
        "Galaga clone",
        "Phaser Day",
        "Citofono",
        "Scale",
        "Photonstorm",
        "Non posso teletrasportarmi da qui!",
        "commodore 64",
        "Zak Mc Kracken Poster",
        "Photo frame",
        "Sono stato speaker agli Universal JS Day 2017.\n Bella esperienza.",
        "Scopri" //224
    ]
};
var actions = {
    en: [
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
    ],
    it: [
        "SPINGI",
        "TIRA",
        "DAI",
        "APRI",
        "CHIUDI",
        "ESAMINA",
        "USA",
        "PRENDI",
        "LASCIA",
        "PARLA A"
    ]
};
var currentLang = "en";
var gameData = {
    chapters: null,
    ingame: { conversation: null, logic: null, items: null, scenes: null },
    assets: null,
    menuBlink: null,
    menuBtns: null,
    actions: actions,
    transitions: null,
    tips: {
        delay: 10,
        nomore: [112, 113],
        later: [114, 110, 111, 132, 133, 134],
        ok: [[118, 119, 120], [121, 122, 123]],
        nomoreA: [135],
        laterA: [136],
        okA: [137, 138, 140]
    },
    skills: [
        { s: "phaser", v: 60 },
        { s: "javascript", v: 70 },
        { s: "html", v: 75 },
        { s: "typescript", v: 60 },
        { s: "css", v: 65 },
        { s: ".net", v: 70 },
        { s: "c#", v: 65 },
        { s: "gamedev", v: 50 },
        { s: "design", v: 60 },
        { s: "ux", v: 65 },
        { s: "clm", v: 80 },
        { s: "tsql", v: 70 },
        { s: "firebase", v: 60 }
    ],
    photos: {
        phaser: [
            {
                image: "phaser-foto-1",
                url: "http://www.zero89.it/assets/images/foto/phaser/1.jpg",
                text: "Universal JS day - Ferrara 2017",
                link: "https://vimeo.com/218937256"
            },
            {
                image: "phaser-foto-2",
                text: "Hello all!",
                url: "http://www.zero89.it/assets/images/foto/phaser/2.jpg"
            },
            {
                image: "phaser-foto-3",
                text: "Let's start with phaser!",
                url: "http://www.zero89.it/assets/images/foto/phaser/3.jpg"
            },
            {
                image: "phaser-foto-4",
                text: "Alert! The game is started...",
                url: "http://www.zero89.it/assets/images/foto/phaser/4.jpg"
            },
            {
                image: "phaser-foto-5",
                text: "Game Over!",
                url: "http://www.zero89.it/assets/images/foto/phaser/5.jpg"
            },
            {
                image: "phaser-foto-6",
                text: "Multiplayer example with Firebase...",
                url: "http://www.zero89.it/assets/images/foto/phaser/6.jpg"
            },
            {
                image: "phaser-foto-7",
                text: "...ready to run!",
                url: "http://www.zero89.it/assets/images/foto/phaser/7.jpg"
            },
            {
                image: "phaser-foto-8",
                text: "...winners and loosers!",
                url: "http://www.zero89.it/assets/images/foto/phaser/8.jpg"
            }
        ],
        cake: [
            {
                image: "cake-foto-1",
                text: "Angry birds... Daniel 4th!"
            },
            { image: "cake-foto-2", text: "Angry birds detail... Daniel 4th!" },
            { image: "cake-foto-3", text: "Angry birds... Daniel 4th!" },
            { image: "cake-foto-4", text: "Simple halloween..." },
            { image: "cake-foto-5", text: "Little doll... Noemi 1th!" },
            { image: "cake-foto-6", text: "The padawan... Daniel 5th!" },
            { image: "cake-foto-7", text: "Peppa... Noemi 2nd!" },
            { image: "cake-foto-8", text: "Dalton... Daniel 6th!" },
            { image: "cake-foto-9", text: "Minions... Noemi 3th!" },
            { image: "cake-foto-10", text: "The Dark side... Daniel 7th!" },
            { image: "cake-foto-11", text: "Frozen... Noemi 4th!" }
        ]
    }
};
gameData.transitions = [
    {
        delay: 5,
        end: 150,
        sequence: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0],
            [13, 0],
            [14, 0],
            [15, 0],
            [16, 0],
            [17, 0],
            [18, 0],
            [19, 0],
            [20, 0],
            [21, 0],
            [22, 0],
            [23, 0],
            [24, 0],
            [25, 0],
            [26, 0],
            [27, 0],
            [28, 0],
            [29, 0],
            [30, 0],
            [31, 0],
            [32, 0],
            [33, 0],
            [34, 0],
            [35, 0],
            [36, 0],
            [37, 0],
            [38, 0],
            [39, 0],
            [40, 0],
            [41, 0],
            [42, 0],
            [43, 0],
            [44, 0],
            [45, 0],
            [46, 0],
            [47, 0],
            [48, 0],
            [49, 0],
            [50, 0],
            [51, 0],
            [52, 0],
            [53, 0],
            [54, 0],
            [55, 0],
            [56, 0],
            [57, 0],
            [58, 0],
            [59, 0],
            [60, 0],
            [61, 0],
            [62, 0],
            [63, 0],
            [64, 0],
            [65, 0],
            [66, 0],
            [67, 0],
            [68, 0],
            [69, 0],
            [70, 0],
            [71, 0],
            [72, 0],
            [73, 0],
            [74, 0],
            [75, 0],
            [76, 0],
            [77, 0],
            [78, 0],
            [79, 0],
            [80, 0],
            [81, 0],
            [82, 0],
            [83, 0],
            [84, 0],
            [85, 0],
            [86, 0],
            [87, 0],
            [88, 0],
            [89, 0],
            [90, 0],
            [91, 0],
            [92, 0],
            [93, 0],
            [94, 0],
            [95, 0],
            [96, 0],
            [97, 0],
            [98, 0],
            [99, 0],
            [100, 0],
            [101, 0],
            [102, 0],
            [103, 0],
            [104, 0],
            [105, 0],
            [106, 0],
            [107, 0],
            [108, 0],
            [109, 0],
            [110, 0],
            [111, 0],
            [112, 0],
            [113, 0],
            [114, 0],
            [115, 0],
            [116, 0],
            [117, 0],
            [118, 0],
            [119, 0],
            [120, 0],
            [121, 0],
            [122, 0],
            [123, 0],
            [124, 0],
            [125, 0],
            [126, 0],
            [127, 0],
            [128, 0],
            [129, 0],
            [130, 0],
            [131, 0],
            [132, 0],
            [133, 0],
            [134, 0],
            [135, 0],
            [136, 0],
            [137, 0],
            [138, 0],
            [139, 0],
            [140, 0],
            [141, 0],
            [142, 0],
            [143, 0],
            [144, 0],
            [145, 0],
            [146, 0],
            [147, 0],
            [148, 0],
            [149, 0],
            [150, 0]
        ]
    },
    {
        delay: 5,
        end: 80,
        sequence: [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0],
            [13, 0],
            [14, 0],
            [15, 0],
            [30, 0],
            [45, 0],
            [60, 0],
            [75, 0],
            [90, 0],
            [105, 0],
            [120, 0],
            [135, 0],
            [150, 0],
            [149, 0],
            [148, 0],
            [147, 0],
            [146, 0],
            [145, 0],
            [144, 0],
            [143, 0],
            [142, 0],
            [141, 0],
            [140, 0],
            [139, 0],
            [138, 0],
            [137, 0],
            [136, 0],
            [121, 0],
            [106, 0],
            [91, 0],
            [76, 0],
            [61, 0],
            [46, 0],
            [31, 0],
            [16, 0],
            [17, 0],
            [18, 0],
            [19, 0],
            [20, 0],
            [21, 0],
            [22, 0],
            [23, 0],
            [24, 0],
            [25, 0],
            [26, 0],
            [27, 0],
            [28, 0],
            [29, 0],
            [44, 0],
            [59, 0],
            [74, 0],
            [89, 0],
            [104, 0],
            [119, 0],
            [134, 0],
            [133, 0],
            [132, 0],
            [131, 0],
            [130, 0],
            [129, 0],
            [128, 0],
            [127, 0],
            [126, 0],
            [125, 0],
            [124, 0],
            [123, 0],
            [122, 0],
            [107, 0],
            [92, 0],
            [77, 0],
            [62, 0],
            [47, 0],
            [32, 0],
            [33, 0],
            [34, 0],
            [35, 0],
            [36, 0],
            [37, 0],
            [38, 0],
            [39, 0],
            [40, 0],
            [41, 0],
            [42, 0],
            [43, 0],
            [58, 0],
            [73, 0],
            [88, 0],
            [103, 0],
            [118, 0],
            [117, 0],
            [116, 0],
            [115, 0],
            [114, 0],
            [113, 0],
            [112, 0],
            [111, 0],
            [110, 0],
            [109, 0],
            [108, 0],
            [93, 0],
            [78, 0],
            [63, 0],
            [48, 0],
            [49, 0],
            [50, 0],
            [51, 0],
            [52, 0],
            [53, 0],
            [54, 0],
            [55, 0],
            [56, 0],
            [57, 0],
            [72, 0],
            [87, 0],
            [102, 0],
            [101, 0],
            [100, 0],
            [99, 0],
            [98, 0],
            [97, 0],
            [96, 0],
            [95, 0],
            [94, 0],
            [79, 0],
            [64, 0],
            [65, 0],
            [66, 0],
            [67, 0],
            [68, 0],
            [69, 0],
            [70, 0],
            [71, 0],
            [86, 0],
            [85, 0],
            [84, 0],
            [83, 0],
            [82, 0],
            [81, 0],
            [80, 0]
        ]
    }
];
var eases = [
    "Linear",
    "Quad.easeIn",
    "Cubic.easeIn",
    "Quart.easeIn",
    "Quint.easeIn",
    "Sine.easeIn",
    "Expo.easeIn",
    "Circ.easeIn",
    "Back.easeIn",
    "Bounce.easeIn",
    "Quad.easeOut",
    "Cubic.easeOut",
    "Quart.easeOut",
    "Quint.easeOut",
    "Sine.easeOut",
    "Expo.easeOut",
    "Circ.easeOut",
    "Back.easeOut",
    "Bounce.easeOut",
    "Quad.easeInOut",
    "Cubic.easeInOut",
    "Quart.easeInOut",
    "Quint.easeInOut",
    "Sine.easeInOut",
    "Expo.easeInOut",
    "Circ.easeInOut",
    "Back.easeInOut",
    "Bounce.easeInOut"
];
gameData.assets = {
    spritesheets: [
        {
            name: "player",
            path: "assets/images/game/player.png",
            width: 126,
            height: 126,
            frames: 64
        },
        {
            name: "terminal",
            path: "assets/images/game/items/terminal.png",
            width: 52,
            height: 132,
            frames: 7
        },
        {
            name: "arete",
            path: "assets/images/game/people/arete.png",
            width: 65,
            height: 138,
            frames: 4
        },
        {
            name: "daniele",
            path: "assets/images/game/people/daniele.png",
            width: 65,
            height: 138,
            frames: 4
        },
        {
            name: "davide",
            path: "assets/images/game/people/davide.png",
            width: 65,
            height: 138,
            frames: 4
        },
        {
            name: "michele",
            path: "assets/images/game/people/michele.png",
            width: 65,
            height: 138,
            frames: 4
        },
        {
            name: "chris",
            path: "assets/images/game/people/chris.png",
            width: 65,
            height: 138,
            frames: 4
        },
        {
            name: "sidney",
            path: "assets/images/game/people/sidney.png",
            width: 65,
            height: 138,
            frames: 8
        },
        {
            name: "walkers",
            path: "assets/images/game/people/walkers.png",
            width: 150,
            height: 150,
            frames: 120
        },
        {
            name: "inventory",
            path: "assets/images/game/inventory.png",
            width: 70,
            height: 70,
            frames: 2
        },
        {
            name: "icons",
            path: "assets/images/game/icons/icons.png",
            width: 80,
            height: 80,
            frames: 11
        },
        {
            name: "beam",
            path: "assets/images/game/beam.png",
            width: 200,
            height: 200,
            frames: 12
        },
        {
            name: "devday",
            path: "assets/images/game/items/devday.png",
            width: 320,
            height: 87,
            frames: 2
        },
        {
            name: "explosion",
            path: "assets/images/game/explosion.png",
            width: 80,
            height: 80,
            frames: 28
        },
        {
            name: "meteor",
            path: "assets/images/game/meteor.png",
            width: 80,
            height: 109,
            frames: 9
        },
        {
            name: "travolta",
            path: "assets/images/game/people/travolta2.png",
            width: 248,
            height: 200,
            frames: 25
        },
        {
            name: "cable",
            path: "assets/images/game/items/cable.png",
            width: 30,
            height: 40,
            frames: 20
        },
        {
            name: "cake",
            path: "assets/images/game/items/cake.png",
            width: 150,
            height: 177,
            frames: 9
        },
        {
            name: "drink-machine",
            path: "assets/images/game/items/drink-machine.png",
            width: 80,
            height: 124,
            frames: 2
        },
        {
            name: "jukebox",
            path: "assets/images/game/items/jukebox.png",
            width: 68,
            height: 136,
            frames: 8
        },
        {
            name: "phaser-logo",
            path: "assets/images/game/items/phaser-logo.png",
            width: 412,
            height: 93,
            frames: 2
        },
        {
            name: "photonstorm",
            path: "assets/images/game/items/photonstorm.png",
            width: 50,
            height: 50,
            frames: 3
        },
        {
            name: "floppy",
            path: "assets/images/game/items/floppy.png",
            width: 50,
            height: 50,
            frames: 2
        },
        {
            name: "screwdriver",
            path: "assets/images/game/items/screwdriver.png",
            width: 50,
            height: 50,
            frames: 2
        },
        {
            name: "interphone",
            path: "assets/images/game/items/interphone.png",
            width: 18,
            height: 27,
            frames: 2
        },
        {
            name: "room-64",
            path: "assets/images/game/rooms/home/room-64.png",
            width: 83,
            height: 59,
            frames: 2
        },
        {
            name: "tree",
            path: "assets/images/game/items/tree.png",
            width: 250,
            height: 305,
            frames: 6
        }
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
        { name: "amazonPack", path: "assets/images/game/items/amazonPack.png" },
        { name: "truck", path: "assets/images/game/items/truck.png" },
        { name: "truck-wheel", path: "assets/images/game/items/truck-wheel.png" },
        { name: "truck-empty", path: "assets/images/game/items/truck-empty.png" },
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
        {
            name: "terminalKeyboard",
            path: "assets/images/game/terminal/keyboard.png"
        },
        { name: "bg-home", path: "assets/images/game/buildings/home.png" },
        { name: "bg-devday", path: "assets/images/game/buildings/devday.png" },
        { name: "bg-skills", path: "assets/images/game/buildings/skills.png" },
        { name: "bg-cake", path: "assets/images/game/buildings/cake.png" },
        { name: "bg-arcade", path: "assets/images/game/buildings/arcade.png" },
        { name: "bg-aerosol", path: "assets/images/game/buildings/aerosol.png" },
        { name: "bg-contact", path: "assets/images/game/buildings/contact.png" },
        { name: "arcade", path: "assets/images/game/items/arcade.png" },
        { name: "bottle", path: "assets/images/game/items/bottle.png" },
        { name: "door", path: "assets/images/game/items/door.png" },
        { name: "stairs", path: "assets/images/game/items/stairs.png" },
        { name: "mask", path: "assets/images/game/items/mask.png" },
        { name: "room-home", path: "assets/images/game/rooms/home/room-home.png" },
        {
            name: "room-home-bed",
            path: "assets/images/game/rooms/home/room-home-bed.png"
        },
        {
            name: "room-zak-poster",
            path: "assets/images/game/rooms/home/room-zak-poster.png"
        },
        {
            name: "room-foto-frame",
            path: "assets/images/game/rooms/home/room-foto-frame.png"
        },
        {
            name: "room-door",
            path: "assets/images/game/rooms/home/room-door.png"
        }
        /*
        Photos
        -------------------------------------------------------------*/
        /*
        { name: "phaser-foto-1", path: "assets/images/foto/phaser/1.jpg" },
        { name: "phaser-foto-2", path: "assets/images/foto/phaser/2.jpg" },
        { name: "phaser-foto-3", path: "assets/images/foto/phaser/3.jpg" },
        { name: "phaser-foto-4", path: "assets/images/foto/phaser/4.jpg" },
        { name: "phaser-foto-5", path: "assets/images/foto/phaser/5.jpg" },
        { name: "phaser-foto-6", path: "assets/images/foto/phaser/6.jpg" },
        { name: "phaser-foto-7", path: "assets/images/foto/phaser/7.jpg" },
        { name: "phaser-foto-8", path: "assets/images/foto/phaser/8.jpg" },
    
        { name: "cake-foto-1", path: "assets/images/foto/cake/1.jpg" },
        { name: "cake-foto-2", path: "assets/images/foto/cake/2.jpg" },
        { name: "cake-foto-3", path: "assets/images/foto/cake/3.jpg" },
        { name: "cake-foto-4", path: "assets/images/foto/cake/4.jpg" },
        { name: "cake-foto-5", path: "assets/images/foto/cake/5.jpg" },
        { name: "cake-foto-6", path: "assets/images/foto/cake/6.jpg" },
        { name: "cake-foto-7", path: "assets/images/foto/cake/7.jpg" },
        { name: "cake-foto-8", path: "assets/images/foto/cake/8.jpg" },
        { name: "cake-foto-9", path: "assets/images/foto/cake/9.jpg" },
        { name: "cake-foto-10", path: "assets/images/foto/cake/10.jpg" },
        { name: "cake-foto-11", path: "assets/images/foto/cake/11.jpg" }
        */
    ],
    sounds: [
        {
            name: "intro",
            paths: ["assets/sounds/intro.ogg", "assets/sounds/intro.m4a"],
            volume: 1,
            loop: false
        }
    ],
    bitmapfont: [
        {
            name: "commodore",
            imgpath: "assets/fonts/carrier_command.png",
            xmlpath: "assets/fonts/carrier_command.xml"
        }
    ]
};
gameData.chapters = [
    {
        title: "CHAPTER ONE:\nTHE DEVDAY TROUBLE!",
        completed: false,
        choice: null,
        complete: function (cs) {
            cs.removeItem(24);
            cs.gameItemsUtils.getItemById(23).playAnim("23-fixed");
            cs.gameItemsUtils.getItemById(22).start();
            cs.gameItemsUtils.getItemById(2).playAnim("2-working");
            cs.updateItemsObjects([23, 23, 22, 19, 2], ["name", "fixed", "isStarted", "conversationStatus", "working"], [z89.getLabel(57), true, true, 1, true]);
            cs.saveGameObj.updateItems();
        }
    },
    {
        title: "CHAPTER TWO:\nHOUSE OF SKILLS!",
        completed: false,
        choice: null,
        complete: function (cs) {
            cs.gameItemsUtils.getItemById(50).start();
            cs.updateItemObject(22, "isStarted", true);
            cs.saveGameObj.updateItems();
        }
    },
    {
        title: "CHAPTER THREE:\nPIECE OF CAKE!",
        completed: false,
        choice: null,
        complete: function (cs) { }
    }
];
gameData.ingame.conversation = {
    CHECK_TIP_TIME: function (cs) {
        var lastTip = cs.saveGameObj.getSaved().tips.lastTip;
        if (lastTip != undefined) {
            lastTip = new Date(cs.saveGameObj.getSaved().tips.lastTip);
            var now = new Date();
            return (now.getTime() - lastTip.getTime()) / 1000;
        }
        return 0;
    },
    MANAGE_TIP: function (cs) {
        var tips = JSON.parse(JSON.stringify(cs.saveGameObj.getSaved().tips.tips));
        var nextTip = "";
        var diff = gameData.ingame.conversation.CHECK_TIP_TIME(cs);
        if (diff < gameData.tips.delay) {
            //later
            nextTip = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.later));
            //laterA
            gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.laterA));
        }
        if (tips.length == 0) {
            cs.saveGameObj.setTip(gameData.tips.ok[cs.currentChapter][0] + "");
            //ok
            nextTip = z89.getLabel(gameData.tips.ok[cs.currentChapter][0]);
            //okA
            gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.okA));
        }
        else {
            if (diff != null && diff > gameData.tips.delay) {
                if (tips.length < gameData.tips.ok[cs.currentChapter].length) {
                    gameData.tips.ok[cs.currentChapter].forEach(function (alltips, index) {
                        if (tips.indexOf(alltips + "") == -1 && nextTip == "") {
                            cs.saveGameObj.setTip(alltips + "");
                            //ok
                            nextTip = z89.getLabel(alltips);
                            //okA
                            gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.okA));
                        }
                    });
                }
                else {
                    //nomore
                    nextTip = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.nomore));
                    //nomoreA
                    gameData.ingame.conversation.MANAGE_TIP_ANSWER = z89.getLabel(Phaser.Utils.Array.GetRandom(gameData.tips.nomoreA));
                }
            }
        }
        //console.log("return",nextTip)
        return nextTip;
    },
    MANAGE_TIP_LIST: function (cs) {
        var _return = "";
        cs.saveGameObj.getSaved().tips.tips.forEach(function (element) {
            _return = _return + z89.getLabel(element) + "\n\n";
        });
        return _return;
    },
    MANAGE_TIP_ANSWER: "",
    HELP_GAME: function (cs) {
        return [
            {
                text: z89.getLabel(Phaser.Utils.Array.GetRandom([115, 116, 117])),
                isItem: false,
                next: true
            },
            {
                text: gameData.ingame.conversation.MANAGE_TIP(cs),
                isItem: true,
                next: true
            },
            {
                text: gameData.ingame.conversation.MANAGE_TIP_ANSWER,
                isItem: false,
                fork: true,
                options: [{ option: z89.getLabel(159), goto: "tiplist" }]
            },
            {
                label: "tiplist",
                text: gameData.ingame.conversation.MANAGE_TIP_LIST(cs),
                isItem: false,
                fork: false
            }
        ];
    },
    PHASER: function (cs) {
        return [
            {
                text: z89.getLabel(223),
                isItem: false,
                fork: false,
                options: [
                    {
                        option: z89.getLabel(224),
                        action: function (cs, target) {
                            cs.showViewer(gameData.photos.phaser, function () {
                                cs.playerBaloon.showBaloon("What a flashback! :D");
                            });
                        }
                    }
                ]
            }
        ];
    },
    RESTART: function (cs) {
        return [
            {
                text: z89.getLabel(124),
                isItem: false,
                fork: false,
                options: [
                    {
                        option: z89.getLabel(125),
                        action: function (cs, target) {
                            cs.restartGame();
                        }
                    },
                    {
                        option: z89.getLabel(126),
                        action: function (cs, target) {
                            cs.conversationBaloon.hideBaloon();
                        }
                    }
                ]
            }
        ];
    },
    LANGUAGE: function (cs) {
        return [
            {
                text: z89.getLabel(178),
                isItem: false,
                fork: false,
                options: [
                    {
                        option: z89.getLabel(179),
                        action: function (cs, target) {
                            cs.setLanguage("en");
                        }
                    },
                    {
                        option: z89.getLabel(180),
                        action: function (cs, target) {
                            cs.setLanguage("it");
                        }
                    }
                ]
            }
        ];
    },
    CHAPTER_COMPLETED: function (cs) {
        return [
            {
                text: z89.getLabel(94),
                isItem: false,
                fork: true,
                options: [
                    {
                        option: z89.getLabel(125),
                        action: function (cs, target) {
                            cs.nextChapter();
                        }
                    },
                    {
                        option: z89.getLabel(127),
                        action: function (cs, target) {
                            cs.leaveGame();
                        }
                    }
                ]
            }
        ];
    },
    INFO: function (cs) {
        return [
            {
                label: "info",
                text: z89.getLabel(84),
                isItem: false,
                fork: true,
                options: [{ option: z89.getLabel(128), goto: "credits" }]
            },
            {
                label: "credits",
                text: z89.getLabel(86),
                isItem: false,
                fork: true,
                options: [
                    { option: "PHASER.IO", link: "http://www.phaser.io" },
                    {
                        option: "PAUL WEBSITE",
                        link: "http://probertson.tumblr.com/"
                    },
                    { option: "JASON WEBSITE", link: "http://jasontammemagi.com/" }
                ]
            }
        ];
    },
    OPTIONS: function (cs) {
        return [
            {
                text: z89.getLabel(87),
                isItem: false
            }
        ];
    },
    TALKTO_devday: function (cs) {
        return [
            {
                text: z89.getLabel(89),
                isItem: false,
                fork: true,
                options: [
                    { option: "DEVDAY website", link: "http://www.devday.it" },
                    {
                        option: "DEVDAY on youtube",
                        link: "https://www.youtube.com/channel/UCUmykbn_rG5dExSncCgW9Nw"
                    },
                    { option: "DEVDAY galaxy", link: "http://dd.zero89.it" }
                ]
            }
        ];
    },
    USE_jukebox: function (cs) {
        return [
            {
                text: z89.getLabel(91),
                isItem: false,
                fork: true,
                options: [
                    {
                        option: z89.getLabel(130),
                        action: function (cs, target) {
                            cs.addDelay(500, function () {
                                var _jukebox = cs.gameItemsUtils.getItemById(11);
                                _jukebox.play("11-idle");
                                cs.stopSound();
                                // let _woofer=cs.gameItemsUtils.getItemById(12);
                                // _woofer.tween.pause();
                            });
                            cs.conversationBaloon.hideBaloon();
                            cs.playerAnimation("player-use");
                        }
                    },
                    {
                        option: z89.getLabel(131),
                        action: function (cs, target) {
                            cs.playSound(0);
                            cs.addDelay(500, function () {
                                var _jukebox = cs.gameItemsUtils.getItemById(11);
                                _jukebox.play("11-play");
                                // let _woofer=cs.gameItemsUtils.getItemById(12);
                                // _woofer.tween.resume();
                            });
                            cs.conversationBaloon.hideBaloon();
                            cs.playerAnimation("player-use");
                        }
                    }
                ]
            }
        ];
    },
    TALKTO_27: function (cs) {
        return [
            {
                text: z89.getLabel(97),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(98),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(67),
                isItem: false,
                end: true
            }
        ];
    },
    TALKTO_16: function (cs) {
        return [
            {
                text: z89.getLabel(66),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(65),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(67),
                isItem: false,
                end: true
            }
        ];
    },
    TALKTO_20_Null: function (cs) {
        return [
            {
                text: z89.getLabel(160),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(161),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(162),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(163),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(164),
                isItem: false,
                end: true,
                callback: function (cs) {
                    cs.getItem(20).setConversationStatus(0);
                }
            }
        ];
    },
    TALKTO_20_0: function (cs) {
        return [
            {
                text: z89.getLabel(165),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(166),
                isItem: false,
                end: true
            }
        ];
    },
    TALKTO_21_Null: function (cs) {
        return [
            { text: z89.getLabel(186), isItem: false, next: true },
            { text: z89.getLabel(187), isItem: true, next: true },
            { text: z89.getLabel(188), isItem: false, next: true },
            { text: z89.getLabel(189), isItem: true, next: true },
            { text: z89.getLabel(190), isItem: false, next: true },
            { text: z89.getLabel(191), isItem: true, next: true },
            { text: z89.getLabel(192), isItem: false, next: true },
            {
                text: z89.getLabel(193),
                isItem: true,
                end: true,
                isSkippable: false,
                callback: function (cs) {
                    cs.getItem(21).setConversationStatus(0);
                }
            }
        ];
    },
    TALKTO_21_0: function (cs) {
        return [
            {
                text: z89.getLabel(194),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(195),
                isItem: false,
                end: true
            }
        ];
    },
    TALKTO_21_GAME: function (cs) {
        return [
            { text: z89.getLabel(196), isItem: true, next: true },
            { text: z89.getLabel(197), isItem: false, next: true },
            { text: z89.getLabel(198), isItem: true, next: true },
            { text: z89.getLabel(199), isItem: false, next: true },
            { text: z89.getLabel(200), isItem: true, next: true },
            { text: z89.getLabel(201), isItem: false, next: true },
            {
                text: z89.getLabel(202),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(203),
                isItem: false,
                end: true,
                callback: function (cs) {
                    cs.gameItemsUtils.beamOut(cs.getItem(21), function () {
                        cs.addDelay(2000, function () {
                            cs.getItem(21).play("21-mask");
                            cs.gameItemsUtils.beamIn(cs.getItem(21), function () {
                                cs.setUpConversation(z89.conversationObj("TALKTO_21_GAME_BACK", cs.currentItem));
                            });
                        });
                    });
                }
            }
        ];
    },
    TALKTO_21_GAME_BACK: function (cs) {
        return [
            { text: z89.getLabel(204), isItem: true, next: true },
            { text: z89.getLabel(205), isItem: false, next: true },
            { text: z89.getLabel(206), isItem: true, next: true },
            { text: z89.getLabel(207), isItem: false, next: true },
            { text: z89.getLabel(208), isItem: true, next: true },
            {
                text: z89.getLabel(209),
                isItem: false,
                end: true,
                callback: function () {
                    cs.playerAnimation("player-use");
                    cs.getItem(21).play("21-idle");
                    cs.enableInteraction();
                    cs.gameItemsUtils.addItem(35);
                    cs.addInventoryItem(cs.getItem(35), true);
                }
            }
        ];
    },
    TALKTO_106: function (cs) {
        return [
            { text: z89.getLabel(183), isItem: true, next: true },
            { text: z89.getLabel(184), isItem: false, next: true },
            { text: z89.getLabel(185), isItem: true, end: true }
        ];
    },
    DADDY: function (cs) {
        return [
            {
                text: z89.getLabel(167),
                isItem: true,
                next: true,
                delay: 1000
            },
            {
                text: z89.getLabel(168),
                isItem: false,
                next: true,
                delay: 1000
            },
            {
                text: z89.getLabel(169),
                isItem: true,
                next: true,
                delay: 1000
            },
            {
                text: z89.getLabel(170),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(171),
                isItem: true,
                next: true,
                delay: 1000
            },
            {
                text: z89.getLabel(172),
                isItem: true,
                next: true,
                delay: 1000,
                isSkippable: false,
                callback: function (cs) {
                    cs.getItem(34).itemObj.open = true;
                    cs.updateItems();
                }
            },
            {
                text: z89.getLabel(173),
                isItem: false,
                end: true,
                isSkippable: false,
                callback: function (cs) {
                    cs.enableInteraction();
                }
            }
        ];
    },
    TALKTO_20_1: function (cs) {
        return [
            {
                text: z89.getLabel(174),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(175),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(176),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(177),
                isItem: true,
                end: true,
                callback: function (cs) {
                    cs.getItem(20).setConversationStatus(2);
                }
            }
        ];
    },
    TALKTO_19_null: function (cs) {
        return [
            {
                text: z89.getLabel(68),
                isItem: false,
                next: true
            },
            {
                text: z89.getLabel(69),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(70),
                isItem: false,
                end: true,
                callback: function (cs) {
                    cs.updateItemObject(19, "conversationStatus", 0);
                }
            }
        ];
    },
    TALKTO_19_0: function (cs) {
        return [
            {
                text: z89.getLabel(71),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(72),
                isItem: false,
                end: true
            }
        ];
    },
    TALKTO_19_1: function (cs) {
        return [
            {
                text: z89.getLabel(73),
                isItem: true,
                next: true
            },
            {
                text: z89.getLabel(74),
                isItem: false,
                end: true
            }
        ];
    }
};
/*https://www.amazon.com/Harry-Potter-Cloak-of-Invisibility/dp/B00421A5FS*/
// 1 "drink-machine", 2 "terminal", 3 "coke", 4 "trash", 5 "cake", 6 "terminal", 7 "trash", 8 "bottle", 9 "floppy", 10 "screwdriver", 11 "jukebox", 12 "woofer", 13 "amazonPack", 14 "arcade", 15 "phaser-logo", 16 "arete", 17 "daniele", 18 "davide", 19 "michele", 20 "chris", 21 "sidney", 22 "newsbg", 23 "cable", 24 "scotch", 25 "coins", 26 "devday", 27 "governor", 28 "photonstorm", 29 "interphone", 30 "bitcoins", 31 "invite", 32 "blockchain", 33 "stairs", 34 "door", 35 "mask", 36 "room-64", 37 "room-zak-poster", 38 "room-foto-frame", 39 "tree", 40 "room door", 50 "skills", 100 "badguy 1",  101 "jumper",  102 "runner", 103 "badguy 2", 104 "badguy 3", 105 "girl 1", 106 "pastry"
gameData.ingame.scenes = [
    {
        name: "city",
        cameraBounds: { x: 0, y: 0, width: 3670, height: 720 },
        vertexList: {
            v1: { x: 0, y: 600, childs: [], exclude: ["v1", "v2", "v3", "v4"] },
            v2: { x: 3600, y: 600, childs: [], exclude: ["v1", "v2", "v3", "v4"] },
            v3: { x: 3600, y: 720, childs: [], exclude: ["v1", "v2", "v3", "v4"] },
            v4: { x: 0, y: 720, childs: [], exclude: ["v1", "v2", "v3", "v4"] },
            v5: { x: 400, y: 620, childs: [], exclude: ["v5", "v6", "v7", "v8"] },
            v6: { x: 600, y: 620, childs: [], exclude: ["v5", "v6", "v7", "v8"] },
            v7: { x: 600, y: 660, childs: [], exclude: ["v5", "v6", "v7", "v8"] },
            v8: { x: 400, y: 660, childs: [], exclude: ["v5", "v6", "v7", "v8"] }
        },
        parallax: [
            {
                s: "bg-level1",
                x: 0,
                y: 0,
                w: 1080,
                h: 642,
                depth: 0,
                scrollFactor: 0.2
            },
            {
                s: "bg-level2",
                x: 0,
                y: 55,
                w: 1080,
                h: 548,
                depth: 0,
                scrollFactor: 0.7
            },
            {
                s: "street-level1",
                x: 0,
                y: 655,
                w: 1080,
                h: 65,
                depth: 0,
                scrollFactor: 1.095
            },
            {
                s: "street-level2",
                x: 0,
                y: 627,
                w: 1080,
                h: 720,
                depth: 800,
                scrollFactor: 1.25
            }
        ],
        buildings: [
            { s: "bg-home", x: 0, y: 592, sf: false, soZeroOne: true },
            { s: "bg-devday", x: 624, y: 592, sf: false, soZeroOne: true },
            { s: "bg-skills", x: 1114, y: 592, sf: false, soZeroOne: true },
            { s: "bg-cake", x: 1550, y: 604, sf: false, soZeroOne: true },
            { s: "bg-arcade", x: 1800, y: 592, sf: false, soZeroOne: true },
            { s: "bg-aerosol", x: 2400, y: 592, sf: false, soZeroOne: true },
            { s: "bg-contact", x: 3000, y: 604, sf: false, soZeroOne: true },
            { s: "street-level0", x: 0, y: 592, sf: true, soZeroOne: false }
        ],
        bounds: [["v1", "v2"], ["v2", "v3"], ["v3", "v4"], ["v4", "v1"]],
        obstacles: [
            {
                bounds: [["v5", "v6"], ["v6", "v7"], ["v7", "v8"], ["v8", "v5"]]
            }
        ],
        startItems: [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            10,
            11,
            12,
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
            //27,//governor
            28,
            29,
            33,
            34,
            39,
            50,
            100,
            101,
            102,
            103,
            104,
            105,
            106
        ],
        items: [],
        playerStartPosition: { x: 300, y: 602 },
        playerPosition: { x: null, y: null }
    },
    {
        name: "house",
        vertexList: {
            v1: { x: 275, y: 435, childs: [], exclude: [] },
            v2: { x: 265, y: 472, childs: [], exclude: [] },
            v3: { x: 480, y: 472, childs: [], exclude: [] },
            v4: { x: 472, y: 527, childs: [], exclude: [] },
            v5: { x: 930, y: 527, childs: [], exclude: [] },
            v6: { x: 854, y: 455, childs: [], exclude: [] },
            v7: { x: 578, y: 455, childs: [], exclude: [] },
            v8: { x: 578, y: 435, childs: [], exclude: [] }
        },
        parallax: [
            {
                s: "room-home",
                x: 0,
                y: 0,
                w: 1080,
                h: 720,
                depth: 0,
                scrollFactor: 0
            }
        ],
        buildings: [
            {
                s: "room-home-bed",
                x: 136,
                y: 527,
                sf: false,
                depth: 490,
                soZeroOne: true
            }
        ],
        bounds: [
            ["v1", "v2"],
            ["v2", "v3"],
            ["v3", "v4"],
            ["v4", "v5"],
            ["v5", "v6"],
            ["v6", "v7"],
            ["v7", "v8"],
            ["v8", "v1"]
        ],
        obstacles: [],
        cameraBounds: { x: 0, y: 0, width: 1080, height: 720 },
        startItems: [36, 37, 38, 40],
        items: [],
        playerStartPosition: { x: 852, y: 500 },
        playerPosition: { x: null, y: null }
    }
];
gameData.ingame.items = [
    {
        id: 1,
        type: 1,
        sprite: "drink-machine",
        name: 0,
        x: 800,
        y: 680,
        animations: [{ name: "idle", frames: [0, 1], rate: 1, loop: true }],
        currentAnimation: "idle",
        onStart: true,
        interactive: true,
        offsetX: 70,
        fixedToCamera: true,
        checkIntersect: true
    },
    {
        id: 2,
        type: 1,
        onStart: true,
        sprite: "terminal",
        animations: [
            {
                name: "notWorking",
                frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4],
                rate: 5,
                loop: true
            },
            { name: "working", frames: [5, 6], rate: 1, loop: true }
        ],
        currentAnimation: "notWorking",
        working: false,
        name: 12,
        x: 1214,
        y: 596,
        interactive: true,
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 3,
        type: 1,
        sprite: "coke",
        onStart: false,
        name: 10,
        x: 800,
        y: 724 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 4,
        type: 1,
        onStart: true,
        sprite: "trash",
        name: 16,
        x: 450,
        y: 601,
        interactive: true,
        firstMessage: [z89.getLabel(18)],
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false,
        moved: false
    },
    {
        id: 5,
        type: 1,
        onStart: true,
        sprite: "cake",
        animations: [
            {
                name: "idle",
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                rate: 10,
                loop: true
            }
        ],
        currentAnimation: "idle",
        name: 212,
        x: 1679,
        y: 290 - 48,
        interactive: true,
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 6,
        type: 1,
        onStart: true,
        sprite: "terminal",
        animations: [
            {
                name: "notWorking",
                frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4],
                rate: 5,
                loop: true
            },
            { name: "working", frames: [5, 6], rate: 1, loop: true }
        ],
        currentAnimation: "notWorking",
        working: false,
        name: 12,
        x: 3000,
        y: 644 - 48,
        interactive: true,
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 7,
        type: 1,
        onStart: true,
        sprite: "trash",
        name: 16,
        x: 1520,
        y: 601,
        interactive: true,
        firstMessage: [z89.getLabel(18)],
        offsetX: 50,
        fixedToCamera: false,
        checkIntersect: false,
        moved: false
    },
    {
        id: 8,
        type: 1,
        sprite: "bottle",
        onStart: true,
        name: 142,
        x: 490,
        y: 606,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 9,
        type: 1,
        sprite: "floppy",
        onStart: false,
        name: 145,
        animations: [{ name: "small", frames: [1], rate: 0, loop: false }],
        currentAnimation: "small",
        x: 1520,
        y: 608,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 10,
        type: 1,
        sprite: "screwdriver",
        onStart: true,
        name: 148,
        animations: [{ name: "small", frames: [1], rate: 0, loop: false }],
        currentAnimation: "small",
        x: 100,
        y: 680,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 11,
        type: 1,
        sprite: "jukebox",
        name: 88,
        x: 2450,
        y: 650 - 48,
        animations: [
            { name: "idle", frames: [0], rate: 1, loop: false },
            {
                name: "play",
                frames: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    2,
                    4,
                    6,
                    3,
                    1,
                    6,
                    3,
                    4,
                    6,
                    5,
                    7,
                    2,
                    5,
                    3,
                    4
                ],
                rate: 14,
                loop: true
            }
        ],
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
        name: 92,
        x: 2450,
        y: 650 - 48,
        currentAnimation: "idle",
        onStart: true,
        interactive: false,
        offsetX: 35,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 13,
        type: 1,
        sprite: "amazonPack",
        name: 213,
        x: 1300,
        y: 605,
        currentAnimation: "",
        onStart: false,
        interactive: true,
        offsetX: 70,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 14,
        type: 1,
        sprite: "arcade",
        name: 214,
        x: 1920,
        y: 602,
        fixed: false,
        currentAnimation: "",
        onStart: true,
        interactive: true,
        offsetX: 70,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 15,
        type: 1,
        sprite: "phaser-logo",
        name: 215,
        x: 70,
        y: 330,
        alpha: 0.7,
        animations: [{ name: "idle", frames: [0, 1], rate: 1.5, loop: true }],
        currentAnimation: "idle",
        onStart: true,
        interactive: true,
        offsetX: 70,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 16,
        type: 1,
        onStart: true,
        sprite: "arete",
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5.2, loop: true }],
        name: 40,
        currentAnimation: "idle",
        x: 720,
        y: 650 - 48,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        turnLeft: true
    },
    {
        id: 17,
        type: 1,
        onStart: true,
        sprite: "daniele",
        animations: [{ name: "idle", frames: [1, 2, 3, 0], rate: 4.5, loop: true }],
        name: 41,
        currentAnimation: "idle",
        x: 1040,
        y: 650 - 48,
        turnLeft: true,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 18,
        type: 1,
        onStart: true,
        sprite: "davide",
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5.5, loop: true }],
        name: 42,
        currentAnimation: "idle",
        x: 950,
        y: 650 - 48,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 19,
        type: 1,
        onStart: true,
        sprite: "michele",
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5, loop: true }],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 31,
        x: 800,
        y: 650 - 48,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 20,
        type: 1,
        onStart: true,
        sprite: "chris",
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5, loop: true }],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 100,
        x: 1860,
        y: 603,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 21,
        type: 1,
        onStart: true,
        sprite: "sidney",
        animations: [
            { name: "idle", frames: [0, 1, 2, 3], rate: 5.5, loop: true },
            { name: "mask", frames: [4, 5, 6, 7], rate: 5.5, loop: true }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 99,
        x: 1980,
        y: 603,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        turnLeft: true
    },
    {
        id: 22,
        type: 3,
        onStart: true,
        sprite: "newsbg",
        name: 76,
        x: 866,
        y: 291,
        interactive: true,
        offsetX: 0,
        fixedToCamera: false,
        isStarted: false,
        contexts: ["devday"]
        //working:false
    },
    {
        id: 23,
        type: 1,
        sprite: "cable",
        onStart: true,
        name: 56,
        animations: [
            {
                name: "fixed",
                frames: [9, 8, 7, 6, 5, 4, 3, 2, 1],
                rate: 15,
                loop: true
            },
            {
                name: "broken",
                frames: [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
                rate: 15,
                loop: true
            }
        ],
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
        name: 55,
        x: 450,
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
        name: 23,
        x: 940,
        y: 702,
        interactive: true,
        offsetX: 30,
        fixedToCamera: true,
        checkIntersect: false
    },
    {
        id: 26,
        type: 1,
        onStart: true,
        animations: [{ name: "idle", frames: [0, 1], rate: 1, loop: true }],
        sprite: "devday",
        currentAnimation: "idle",
        name: 61,
        x: 869,
        y: 218 - 48,
        interactive: true,
        offsetX: 0,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 27,
        type: 1,
        onStart: false,
        sprite: "daniele",
        animations: [{ name: "idle", frames: [1, 2, 3, 0], rate: 4.5, loop: true }],
        name: 96,
        currentAnimation: "idle",
        x: 600,
        y: 650 - 48,
        turnLeft: true,
        interactive: true,
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 28,
        type: 1,
        sprite: "photonstorm",
        name: 218,
        x: 345,
        y: 245,
        animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 4, loop: true }],
        currentAnimation: "idle",
        onStart: true,
        interactive: true,
        offsetX: 70,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 29,
        type: 1,
        sprite: "interphone",
        name: 216,
        x: 1310,
        y: 540,
        animations: [{ name: "idle", frames: [0, 1], rate: 1, loop: true }],
        currentAnimation: "idle",
        onStart: true,
        interactive: true,
        offsetX: 40,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 30,
        type: 1,
        sprite: "bitcoin",
        onStart: false,
        name: 52,
        x: 400,
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
        name: 108,
        x: 400,
        y: 648 - 48,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 32,
        type: 1,
        sprite: "blockchain",
        onStart: false,
        name: 50,
        x: 800,
        y: 514,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 33,
        type: 1,
        sprite: "stairs",
        name: 217,
        x: 1360,
        y: 592,
        onStart: true,
        interactive: true,
        offsetX: 40,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 34,
        type: 1,
        sprite: "door",
        name: 80,
        x: 1360,
        y: 592,
        open: false,
        onStart: true,
        interactive: true,
        offsetX: 40,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 35,
        type: 1,
        sprite: "mask",
        name: 210,
        x: 0,
        y: 0,
        open: true,
        onStart: false,
        interactive: true,
        offsetX: 0,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 36,
        type: 1,
        sprite: "room-64",
        name: 220,
        x: 760,
        y: 382,
        animations: [{ name: "idle", frames: [0, 1], rate: 1, loop: true }],
        currentAnimation: "idle",
        onStart: true,
        interactive: true,
        offsetX: 10,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 37,
        type: 1,
        sprite: "room-zak-poster",
        name: 221,
        x: 530,
        y: 368,
        onStart: true,
        interactive: true,
        offsetX: 40,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 38,
        type: 1,
        sprite: "room-foto-frame",
        name: 222,
        x: 625,
        y: 375,
        onStart: true,
        interactive: true,
        offsetX: 30,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 39,
        type: 1,
        sprite: "tree",
        animations: [
            { name: "light", frames: [0, 1, 2, 3, 4, 5], rate: 2, loop: true }
        ],
        currentAnimation: "light",
        name: 222,
        x: 100,
        y: 604,
        onStart: true,
        interactive: false,
        offsetX: 40,
        fixedToCamera: false,
        checkIntersect: true
    },
    {
        id: 40,
        type: 1,
        sprite: "room-door",
        name: 80,
        x: 910,
        y: 480,
        onStart: true,
        interactive: true,
        offsetX: 40,
        fixedToCamera: false,
        checkIntersect: false
    },
    {
        id: 50,
        type: 4,
        onStart: true,
        sprite: "skills",
        name: 79,
        x: 1161 + 174,
        y: 4 + 215 - 48,
        interactive: false,
        offsetX: 0,
        isStarted: false,
        fixedToCamera: false,
        checkIntersect: false,
        working: false
    },
    {
        id: 100,
        type: 6,
        onStart: true,
        sprite: "walkers",
        animations: [
            { name: "idle", frames: [40, 41, 42, 43], rate: 5, loop: true },
            {
                name: "walking",
                frames: [44, 45, 46, 47, 48, 49],
                rate: 5,
                loop: true
            },
            {
                name: "running",
                frames: [50, 51, 52, 53, 54, 55, 56, 57],
                rate: 8,
                loop: true
            }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 101,
        startX: 1800,
        x: 2800,
        y: 700,
        interactive: true,
        interactiveArea: { x: 35, y: 20, w: 80, h: 130 },
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        insight: { distance: 70, behaviour: "idler", offsetY: 10 },
        walkRange: {
            start: 100,
            end: 3000,
            step: { min: 200, max: 500 },
            idle: { min: 10000, max: 15000 }
        },
        jumpChance: 20
    },
    {
        id: 101,
        type: 6,
        onStart: true,
        sprite: "walkers",
        animations: [
            { name: "idle", frames: [20, 21, 22, 23], rate: 5, loop: true },
            {
                name: "walking",
                frames: [24, 25, 26, 27, 28, 29],
                rate: 5,
                loop: true
            },
            {
                name: "running",
                frames: [30, 31, 32, 33, 34, 35, 36, 37],
                rate: 8,
                loop: true
            }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 104,
        startX: 1000,
        x: 3000,
        y: 700,
        interactive: true,
        interactiveArea: { x: 35, y: 20, w: 80, h: 130 },
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        insight: { distance: 300, behaviour: "jumper", offsetY: 300 },
        walkRange: {
            start: 100,
            end: 3600,
            step: { min: 200, max: 500 },
            idle: { min: 3000, max: 4000 }
        },
        jumpChance: 0
    },
    {
        id: 102,
        type: 6,
        onStart: true,
        sprite: "walkers",
        animations: [
            { name: "idle", frames: [0, 1, 2, 3], rate: 5, loop: true },
            { name: "walking", frames: [4, 5, 6, 7, 8, 9], rate: 5, loop: true },
            {
                name: "running",
                frames: [10, 11, 12, 13, 14, 15, 16, 17],
                rate: 8,
                loop: true
            }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 105,
        startX: 2000,
        x: 1100,
        y: 700,
        interactive: true,
        interactiveArea: { x: 35, y: 20, w: 80, h: 130 },
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        insight: { distance: 200, behaviour: "runner", offsetY: 200 },
        walkRange: {
            start: 0,
            end: 3600,
            step: { min: 200, max: 500 },
            idle: { min: 3000, max: 4000 }
        },
        jumpChance: 0
    },
    {
        id: 103,
        type: 6,
        onStart: true,
        sprite: "walkers",
        animations: [
            { name: "idle", frames: [60, 61, 62, 63], rate: 5, loop: true },
            {
                name: "walking",
                frames: [64, 65, 66, 67, 68, 69],
                rate: 5,
                loop: true
            },
            {
                name: "running",
                frames: [70, 71, 72, 73, 74, 75, 76, 77],
                rate: 8,
                loop: true
            }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 102,
        startX: 2500,
        x: 2500,
        y: 610,
        interactive: true,
        interactiveArea: { x: 35, y: 20, w: 80, h: 130 },
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        insight: { distance: 70, behaviour: "idler", offsetY: 10 },
        walkRange: {
            start: 100,
            end: 3600,
            step: { min: 200, max: 500 },
            idle: { min: 1000, max: 1500 }
        },
        jumpChance: 20
    },
    {
        id: 104,
        type: 6,
        onStart: true,
        sprite: "walkers",
        animations: [
            { name: "idle", frames: [80, 81, 82, 83], rate: 5, loop: true },
            {
                name: "walking",
                frames: [84, 85, 86, 87, 88, 89],
                rate: 5,
                loop: true
            },
            {
                name: "running",
                frames: [90, 91, 92, 93, 94, 95, 96, 97],
                rate: 8,
                loop: true
            }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 103,
        startX: 1800,
        x: 1800,
        y: 700,
        interactive: true,
        interactiveArea: { x: 35, y: 20, w: 80, h: 130 },
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        insight: { distance: 70, behaviour: "idler", offsetY: 10 },
        walkRange: {
            start: 100,
            end: 3600,
            step: { min: 200, max: 500 },
            idle: { min: 1000, max: 1500 }
        },
        jumpChance: 20
    },
    {
        id: 105,
        type: 6,
        onStart: true,
        sprite: "walkers",
        animations: [
            { name: "idle", frames: [100, 101, 102, 103], rate: 5, loop: true },
            {
                name: "walking",
                frames: [104, 105, 106, 107, 108, 109],
                rate: 5,
                loop: true
            },
            {
                name: "running",
                frames: [110, 111, 112, 113, 114, 115, 116, 117],
                rate: 8,
                loop: true
            }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 106,
        startX: 500,
        x: 500,
        y: 700,
        interactive: true,
        interactiveArea: { x: 35, y: 20, w: 80, h: 130 },
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        insight: { distance: 70, behaviour: "idler", offsetY: 10 },
        walkRange: {
            start: 100,
            end: 3600,
            step: { min: 200, max: 500 },
            idle: { min: 1000, max: 1500 }
        },
        jumpChance: 50
    },
    {
        id: 106,
        type: 6,
        onStart: true,
        sprite: "walkers",
        animations: [
            { name: "idle", frames: [100, 101, 102, 103], rate: 5, loop: true },
            {
                name: "walking",
                frames: [104, 105, 106, 107, 108, 109],
                rate: 5,
                loop: true
            },
            {
                name: "running",
                frames: [110, 111, 112, 113, 114, 115, 116, 117],
                rate: 8,
                loop: true
            }
        ],
        currentAnimation: "idle",
        conversationStatus: null,
        name: 107,
        startX: 1650,
        x: 1600,
        y: 610,
        interactive: true,
        interactiveArea: { x: 35, y: 20, w: 80, h: 130 },
        offsetX: 80,
        fixedToCamera: false,
        checkIntersect: false,
        insight: { distance: 70, behaviour: "idler", offsetY: 10 },
        walkRange: {
            start: 1600,
            end: 1750,
            step: { min: 50, max: 80 },
            idle: { min: 3000, max: 4000 }
        },
        jumpChance: 0
    }
];
gameData.ingame.logic = {
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    EMAMINE
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    // examine terminal
    EXAMINE_2: function (cs) {
        if (cs.getItem(2).itemObj.working) {
            cs.showPlayerBaloon(82);
        }
        else {
            cs.showPlayerBaloon(81);
        }
    },
    // examine foto frame
    EXAMINE_38: function (cs) { },
    // examine phaser logo
    EXAMINE_15: function (cs) {
        cs.setUpConversation(z89.conversationObj("PHASER", cs.currentItem));
    },
    // examine phaser logo
    EXAMINE_5: function (cs) {
        cs.showViewer(gameData.photos.cake);
    },
    EXAMINE_14: function (cs) {
        cs.showPlayerBaloon(139);
    },
    EXAMINE_29: function (cs) {
        cs.showPlayerBaloon(181);
    },
    //examine screwdriver
    EXAMINE_10: function (cs) {
        cs.showPlayerBaloon(149);
    },
    //examine bottle
    EXAMINE_8: function (cs) {
        cs.showPlayerBaloon(143);
    },
    //examine floppy
    EXAMINE_9: function (cs) {
        cs.showPlayerBaloon(146);
    },
    // examine terminal2
    EXAMINE_6: function (cs) {
        if (cs.getItem(6).itemObj.working) {
            cs.showPlayerBaloon(82);
        }
        else {
            cs.showPlayerBaloon(81);
        }
    },
    //examine gerardo
    EXAMINE_16: function (cs) {
        cs.showPlayerBaloon(43);
    },
    // examine coins
    EXAMINE_3: function (cs) {
        cs.showPlayerBaloon(26);
    },
    // examine coins
    EXAMINE_25: function (cs) {
        cs.showPlayerBaloon(27);
    },
    // examine drink machine
    EXAMINE_1: function (cs) {
        cs.showPlayerBaloon(6);
    },
    // devday palace
    EXAMINE_21: function (cs) {
        cs.showPlayerBaloon(38);
    },
    // devday screen
    EXAMINE_22: function (cs) {
        cs.showPlayerBaloon(75);
    },
    //examine garbage
    EXAMINE_4: function (cs) {
        cs.showPlayerBaloon(62);
    },
    //examine scotch tape
    EXAMINE_24: function (cs) {
        cs.showPlayerBaloon(58);
    },
    //examine energy box
    EXAMINE_23: function (cs) {
        if (cs.getItem(23).itemObj.fixed) {
            cs.showPlayerBaloon(60);
        }
        else {
            cs.showPlayerBaloon(59);
        }
    },
    //examine daniele
    EXAMINE_17: function (cs) {
        cs.showPlayerBaloon(63);
    },
    //examine davide
    EXAMINE_18: function (cs) {
        cs.showPlayerBaloon(64);
    },
    //examine michele
    EXAMINE_19: function (cs) {
        cs.showPlayerBaloon(32);
    },
    //examine cloak
    EXAMINE_13: function (cs) {
        cs.showPlayerBaloon(147);
    },
    //examine cloak
    EXAMINE_34: function (cs) {
        if (cs.getItem(34).itemObj.open) {
            cs.showPlayerBaloon(153);
        }
        else {
            cs.showPlayerBaloon(153);
        }
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    USE
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    // use terminal
    USE_2: function (cs) {
        if (cs.getItem(2).itemObj.working) {
            cs.Terminal.show(0);
            cs.playerActions.hide();
        }
        else {
            cs.showPlayerBaloon(83);
        }
    },
    // use terminal 2
    USE_6: function (cs) {
        if (cs.getItem(6).itemObj.working) {
            cs.Terminal.show(0);
            cs.playerActions.hide();
        }
        else {
            cs.showPlayerBaloon(83);
        }
    },
    // use coins on drink machine
    USE_25_1: function (cs) {
        cs.playerAnimation("player-use");
        cs.removeInventoryItems();
        cs.addDelay(1000, function () {
            cs.addItem(3);
            cs.getItem(3).itemObj.onStart = true;
            cs.updateItems();
        });
    },
    // use bottle on trash
    USE_8_4: function (cs) {
        cs.showPlayerBaloon(144);
    },
    // use bottle on trash2
    USE_8_7: function (cs) {
        cs.removeInventoryItems();
        cs.playerAnimation("player-use");
        cs.addDelay(300, function () {
            cs.showPlayerBaloon(182);
            cs.addItem(9);
            cs.getItem(9).itemObj.onStart = true;
            cs.updateItems();
        });
    },
    //use devday
    USE_21: function (cs) {
        cs.setUpConversation(z89.conversationObj("TALKTO_devday"));
    },
    //use jukoxeb
    USE_11: function (cs) {
        cs.setUpConversation(z89.conversationObj("USE_jukebox"));
    },
    //use interphone
    USE_29: function (cs) {
        cs.playerAnimation("player-use");
        console.log(cs.currentChapter);
        if (cs.currentChapter == 0) {
            cs.disableInteraction();
            cs.addDelay(2000, function () {
                cs.showPlayerBaloon(154, function () {
                    cs.enableInteraction();
                });
            });
        }
        if (cs.currentChapter == 1) {
            cs.disableInteraction();
            cs.addDelay(2000, function () {
                cs.setUpConversation(z89.conversationObj("DADDY", cs.currentItem));
            });
        }
        else {
        }
    },
    //use jukoxeb
    USE_10_14: function (cs) {
        if (cs.getItem(20).getConversationStatus() == 0) {
            cs.playerAnimation("player-use");
            cs.updateItemObject(14, "fixed", true);
            cs.getItem(20).setConversationStatus(1);
            cs.showPlayerBaloon(150);
        }
        else {
            cs.showPlayerBaloon(151);
        }
    },
    //use scotch on broken cable
    USE_24_23: function (cs) {
        cs.playerAnimation("player-use");
        cs.removeInventoryItems();
        cs.addDelay(1000, function () {
            cs.getItem(23).playAnim("23-fixed");
            cs.getItem(22).start();
            cs.getItem(2).playAnim("2-working");
            cs.updateItemsObjects([23, 23, 22, 19, 2], ["name", "fixed", "isStarted", "conversationStatus", "working"], [z89.getLabel(57), true, true, 1, true]);
            cs.updateItems();
            cs.chapterCompleted();
        });
    },
    USE_30_32: function (cs) {
        cs.showPlayerBaloon(155);
        cs.removeInventoryItems();
        cs.addInventory(31, true);
    },
    USE_13: function (cs) {
        cs.removeInventoryItems();
        cs.player.setAlpha(0.5);
    },
    //use stairs
    USE_33: function (cs) {
        cs.addTween({
            targets: cs.player,
            alpha: 1,
            duration: 500,
            onComplete: function () {
                cs.transition.show(function () {
                    cs.setUpScene("house");
                    cs.transitionHide();
                }, 1);
            }
        });
        /*
        cs.addDelay(500, () => {
          cs.addTween({ targets: cs.player, alpha: 0 });
          cs.getItem(50).start();
    
          cs.addDelay(2500, () => {
            cs.addTween({
              targets: cs.player,
              alpha: 1,
              duration: 500,
              onComplete: () => {
                cs.enableInteraction();
                cs.chapterCompleted();
              }
            });
            const _item = cs.getItem(34);
            cs.addTween({ targets: _item, x: _item.x - 76, ease: "Quad.easeOut" });
            _item.itemObj.open = false;
            cs.updateItems();
          });
        });
        */
    },
    //use zak mask
    USE_35: function (cs) {
        cs.player.useMask(true);
        cs.playerAnimation("player-idle");
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    PUSH
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    //push garbage
    PUSH_4: function (cs) {
        var item = cs.getItem(4);
        if (!item.itemObj.moved) {
            cs.playerAnimation("player-use");
            item.itemObj.moved = true;
            if (cs.player.x < 450) {
                cs.addTween({
                    targets: item,
                    x: 500,
                    duration: 500,
                    ease: "Quad.easeOut",
                    delay: 400
                });
                item.updateItemObj("x", 500);
            }
            else {
                cs.addTween({
                    targets: item,
                    x: 400,
                    duration: 500,
                    ease: "Quad.easeOut",
                    delay: 400
                });
                item.updateItemObj("x", 400);
            }
        }
        else {
            cs.showPlayerBaloon(93);
        }
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    GIVE
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    GIVE_9_21: function (cs) {
        cs.playerAnimation("player-use");
        cs.removeInventoryItems();
        cs.addDelay(500, function () {
            cs.disableInteraction();
            cs.setUpConversation(z89.conversationObj("TALKTO_21_GAME", cs.currentItem));
        });
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    OPEN
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    OPEN_40: function (cs) {
        cs.addTween({
            targets: cs.player,
            alpha: 1,
            duration: 500,
            onComplete: function () {
                cs.transition.show(function () {
                    cs.setUpScene("city", 1360, 604);
                    cs.transitionHide();
                }, 1);
            }
        });
    },
    //open door
    OPEN_34: function (cs) {
        cs.playerAnimation("player-use");
        var _item = cs.getItem(34);
        if (_item.itemObj.open) {
            cs.addDelay(500, function () {
                cs.addTween({ targets: _item, x: _item.x + 76, ease: "Quad.easeOut" });
            });
        }
        else {
            cs.addDelay(500, function () {
                cs.showPlayerBaloon(156);
            });
        }
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    CLOSE
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    CLOSE_34: function (cs) {
        cs.playerAnimation("player-use");
        var _item = cs.getItem(34);
        if (_item.itemObj.open) {
            cs.addDelay(500, function () {
                cs.addTween({ targets: _item, x: _item.x - 76, ease: "Quad.easeOut" });
            });
        }
        else {
            cs.showPlayerBaloon(157);
        }
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    PICK UP
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    //pickup scotch
    PICKUP_24: function (cs) {
        cs.addInventoryItem(cs.getItem(24), false);
    },
    //pickup floppy
    PICKUP_9: function (cs) {
        cs.addInventoryItem(cs.getItem(9), false);
    },
    //pickup screwdriver
    PICKUP_10: function (cs) {
        cs.addInventoryItem(cs.getItem(10), false);
    },
    //pickup bottle
    PICKUP_8: function (cs) {
        cs.addInventoryItem(cs.getItem(8), false);
    },
    //pickup coke
    PICKUP_3: function (cs) {
        cs.addInventoryItem(cs.getItem(3), false);
    },
    //pickup coins
    PICKUP_25: function (cs) {
        cs.addInventoryItem(cs.getItem(25), false);
    },
    //pickup bitcoin
    PICKUP_30: function (cs) {
        cs.addInventoryItem(cs.getItem(30), false);
    },
    //pickup blockchain
    PICKUP_32: function (cs) {
        //to test scene transition
        /*cs.transition.show(() => {
          cs.setUpScene("city");
          cs.transitionHide();
        }, 1);
        */
        cs.addInventoryItem(cs.getItem(32), false);
    },
    //pickup jumper
    PICKUP_101: function (cs) {
        console.log("pickup jumper");
        cs.playerAnimation("player-use");
    },
    //pickup runner
    PICKUP_102: function (cs) {
        console.log("pickup runner");
        cs.playerAnimation("player-use");
    },
    //pickup camouflage
    PICKUP_13: function (cs) {
        cs.addInventoryItem(cs.getItem(13), false);
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    DROP
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    //drop scotch
    DROP_24: function (cs) {
        cs.dropInventoryItem();
    },
    //drop bottle
    DROP_8: function (cs) {
        cs.dropInventoryItem();
    },
    //drop screwdriver
    DROP_10: function (cs) {
        cs.dropInventoryItem();
    },
    //drop scotch
    DROP_25: function (cs) {
        cs.dropInventoryItem();
    },
    //drop scotch
    DROP_30: function (cs) {
        cs.dropInventoryItem();
    },
    //drop scotch
    DROP_32: function (cs) {
        cs.dropInventoryItem();
    },
    //drop scotch
    DROP_13: function (cs) {
        cs.showPlayerBaloon(158);
    },
    /*
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    TALK TO
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    TALKTO_16: function (cs) {
        cs.setUpConversation(z89.conversationObj("TALKTO_16", cs.currentItem));
    },
    TALKTO_106: function (cs) {
        if (cs.currentChapter == 2) {
            //cake thief
        }
        else {
            cs.setUpConversation(z89.conversationObj("TALKTO_106", cs.currentItem));
        }
    },
    TALKTO_27: function (cs) {
        cs.setUpConversation(z89.conversationObj("TALKTO_27", cs.currentItem));
    },
    //sidney
    TALKTO_21: function (cs) {
        var item = cs.getItem(20);
        console.log(cs.getItem(21).getConversationStatus());
        switch (cs.getItem(21).getConversationStatus()) {
            case null:
                cs.setUpConversation(z89.conversationObj("TALKTO_21_Null", cs.currentItem));
                break;
            case 0:
                cs.setUpConversation(z89.conversationObj("TALKTO_21_0", cs.currentItem));
                break;
        }
    },
    //chris
    TALKTO_20: function (cs) {
        switch (cs.getItem(20).getConversationStatus()) {
            case null:
                cs.setUpConversation(z89.conversationObj("TALKTO_20_Null", cs.currentItem));
                break;
            case 0:
                cs.setUpConversation(z89.conversationObj("TALKTO_20_0", cs.currentItem));
                break;
            case 1:
                cs.setUpConversation(z89.conversationObj("TALKTO_20_1", cs.currentItem));
                break;
            case 2:
                cs.setUpConversation(z89.conversationObj("HELP_GAME", cs.currentItem));
                break;
        }
    },
    //talkto michele
    TALKTO_19: function (cs) {
        switch (cs.getItem(19).getConversationStatus()) {
            case null:
                cs.setUpConversation(z89.conversationObj("TALKTO_19_null", cs.currentItem));
                break;
            case 0:
                cs.setUpConversation(z89.conversationObj("TALKTO_19_0", cs.currentItem));
                break;
            case 1:
                cs.setUpConversation(z89.conversationObj("TALKTO_19_1", cs.currentItem));
                break;
        }
    }
};
gameData.menuBlink = [
    { name: "HOME", frame: 0, to: 100, x: 0, y: 30 },
    { name: "DEVDAY", frame: 4, to: 875, x: 0, y: 140 },
    { name: "SKILLS", frame: 5, to: 1354, x: 100, y: 140 },
    { name: "CAKE", frame: 6, to: 1590, x: 200, y: 140 },
    { name: "ARCADE", frame: 7, to: 2100, x: 0, y: 250 },
    { name: "AEROSOL", frame: 8, to: 2580, x: 100, y: 250 },
    { name: "CONTACT", frame: 9, to: 3300, x: 200, y: 250 }
];
gameData.menuBtns = {
    actions: { name: "ACTIONS", frame: 1, x: 100, y: 30 },
    restart: { name: "RESTART", frame: 10, x: 200, y: 30 },
    info: { name: "INFO", frame: 2, x: 0, y: 360 },
    options: { name: "LANGUAGE", frame: 3, x: 100, y: 360 }
};
var z89;
(function (z89) {
    var saveGame = (function () {
        function saveGame(scene) {
            this.playerX = 0;
            this.playerY = 0;
            this.scenes = gameData.ingame.scenes;
            this.isSaved = false;
            this.firstChoice = null;
            this.current = 0;
            this.tips = [];
            this.choice = null;
            this.chapters = [];
            this.scene = scene;
            this.checkSaved();
            // this.game.time.events.repeat(5000, 10, this.updateItems, this);
        }
        saveGame.prototype.destroy = function () {
            this.clearSaved();
        };
        saveGame.prototype.updatePlayerPosition = function (x, y) {
            var _this = this;
            this.playerX = Math.round(x);
            this.playerY = Math.round(y);
            this.scenes.forEach(function (element) {
                if (element.name == _this.currentScene) {
                    element.playerPosition = { x: _this.playerX, y: _this.playerY };
                }
            });
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
            /*let _itemsObj: Array<any> = [];
      
            this.scene.groupAll.children.each((element: Items) => {
              if (element.itemObj != undefined) _itemsObj.push(element.itemObj);
            }, this);
      
            this.items = _itemsObj;
      */
            this.updateSceneItems();
            this.updateSaveObj();
        };
        saveGame.prototype.updateSceneItems = function () {
            var _this = this;
            var _itemsObj = [];
            this.scene.groupAll.children.each(function (element) {
                if (element.itemObj != undefined)
                    _itemsObj.push(element.itemObj);
            }, this);
            this.scenes.forEach(function (element) {
                if (element.name == _this.currentScene) {
                    element.playerPosition = { x: _this.playerX, y: _this.playerY };
                    element.items = _itemsObj;
                }
            });
        };
        saveGame.prototype.setFirstChoice = function (choice) {
            this.firstChoice = choice;
            this.updateSaveObj();
        };
        saveGame.prototype.getFirstChoice = function () {
            return this.firstChoice;
        };
        saveGame.prototype.setCurrentChapter = function (current) {
            //console.log("setCurrentChapter")
            this.current = current;
            this.updateSaveObj();
        };
        saveGame.prototype.setChoiceChapter = function (choice) {
            this.choice = choice;
            this.updateSaveObj();
        };
        saveGame.prototype.setChapterCompleted = function (chapterIndex) {
            this.chapters[chapterIndex] = true;
            this.updateSaveObj();
        };
        saveGame.prototype.setTip = function (tip) {
            this.lastTip = new Date();
            this.tips.push(tip);
            this.updateSaveObj();
        };
        saveGame.prototype.setScene = function (name) {
            this.currentScene = name;
            this.updateSaveObj();
        };
        saveGame.prototype.clearTips = function () {
            this.tips = [];
            this.updateSaveObj();
        };
        saveGame.prototype.gameIsSaved = function () {
            if (this.isSaved && this.firstChoice)
                return true;
            return false;
        };
        saveGame.prototype.setSaved = function (obj) {
            this.savedObj = obj;
            localStorage.setItem("savedObj", JSON.stringify(this.savedObj));
        };
        saveGame.prototype.clearSaved = function () {
            this.savedObj = null;
            localStorage.removeItem("savedObj");
        };
        saveGame.prototype.getSaved = function () {
            return this.savedObj;
        };
        saveGame.prototype.checkSaved = function () {
            var _obj = JSON.parse(localStorage.getItem("savedObj"));
            // console.log(_obj)
            if (_obj != null) {
                this.savedObj = _obj;
                this.inventory = this.savedObj.inventory;
                this.currentScene = this.savedObj.currentScene;
                this.scenes = this.savedObj.scenes;
                this.items = this.savedObj.items;
                this.playerX = this.savedObj.position.x;
                this.playerY = this.savedObj.position.y;
                this.isSaved = true;
                this.firstChoice = this.savedObj.firstChoice;
                this.current = this.savedObj.chapter.current;
                this.choice = this.savedObj.chapter.choice;
                this.chapters = this.savedObj.chapter.chapters;
                this.lastTip = this.savedObj.tips.lastTip;
                this.tips = this.savedObj.tips.tips;
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
                scenes: this.scenes,
                currentScene: this.currentScene,
                items: this.items,
                firstChoice: this.firstChoice,
                chapter: {
                    current: this.current,
                    choice: this.choice,
                    chapters: this.chapters
                },
                tips: { lastTip: this.lastTip, tips: this.tips }
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
            _this.setAlpha(0);
            _this.isSkippable = true;
            _this.isPlaying = false;
            _this.baloonBg = _this.scene.add.image(0, 20, "baloonBg");
            _this.baloonBg
                .setOrigin(0.5, 1)
                .setAlpha(0.8)
                .setInteractive()
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
            if (_obj != undefined && (_obj.next != undefined || _obj.end)) {
                this.displayStep();
            }
            else {
                this.isPlaying = false;
                this.scene.player.setConversation(false);
            }
            /* if (_obj!=undefined && (_obj.next != undefined || _obj.end))  {
              this.displayStep();
            } else {
              this.isPlaying = false;
            }*/
            /* if (_obj.next != undefined) {
              this.displayStep();
            }*/
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
            this.scene.player.setConversation(false);
            this.hideBaloon(function () {
                _this.removeForks();
                _this.baloonText.setY(0);
                _this.isPlaying = false;
                /*
                if (this.baloonTarget != null) {
                  this.baloonX = this.baloonTarget.x;
                  this.baloonY = this.baloonTarget.y - this.baloonTarget.height - 50;
                  this.showBaloon(z89.getLabel(39));
        
                  this.scene.time.addEvent({
                    delay: 500,
                    callback: () => {
                      this.hideBaloon();
                    },
                    callbackScope: this,
                    loop: false
                  });
                }
                */
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
                this.conversationObj = gameData.ingame.conversation[key](this.scene);
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
            this.scene.player.setConversation(true);
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
            var _delay = 1000;
            this.removeForks();
            this.baloonText.setY(0);
            this.isSkippable = true;
            if (!this.isPlaying) {
                return;
            }
            var _obj = this.conversationObj[this.currentStep];
            if (_obj != undefined) {
                if (_obj.isSkippable != undefined)
                    this.isSkippable = _obj.isSkippable;
                if (_obj.end != undefined)
                    this.isSkippable = false;
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
                    if (_obj.delay != undefined)
                        _delay = _obj.delay;
                    this.timeEvent = this.scene.time.addEvent({
                        delay: this.getTime(_obj.text.length) + _delay,
                        callback: function () {
                            _this.currentStep++;
                            _this.displayStep();
                        },
                        callbackScope: this,
                        loop: false
                    });
                }
                if (_obj.end != undefined) {
                    if (_obj.delay != undefined)
                        _delay = _obj.delay;
                    this.timeEvent = this.scene.time.addEvent({
                        delay: this.getTime(_obj.text.length) + _delay,
                        callback: function () {
                            _this.currentStep = 0;
                            _this.hideBaloon();
                            _this.isPlaying = false;
                            _this.scene.player.setConversation(false);
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
            }
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
            this.removeForks();
            //console.log(_obj.options);
            if (_obj.options != undefined) {
                _obj.options.forEach(function (element, index) {
                    //console.log(index);
                    _btn = _this.scene.add.sprite(0, 0, "forkBtn");
                    _btn.setZ(index);
                    var _option = element;
                    var btn = _btn;
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
                            //this.hideBaloon();
                            return;
                        }
                        if (_option.action != undefined) {
                            _option.action(_this.scene, _this.baloonTarget);
                            _this.hideBaloon();
                            return;
                        }
                        _this.displayStep();
                    }, _this)
                        .on("pointerover", function () {
                        // console.log(btn.z);
                        _this.scene.gameUtils.btnOverEffect(btn, _this.forkBtnsText[btn.z]);
                    })
                        .on("pointerout", function () {
                        // console.log(btn.z);
                        _this.scene.gameUtils.btnOutEffect(btn, _this.forkBtnsText[btn.z]);
                    });
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
            }
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
            // console.log(this.forkBtns, this.forkBtnsText);
            this.forkBtns.forEach(function (element, index) {
                // console.log("destroy "+index);
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
            this.scene.time.addEvent({
                delay: delay,
                callback: callback
            });
        };
        GameUtils.prototype.itemOverEffect = function (item) {
            this.scene.gameUtils.tweenTint(item, new Phaser.Display.Color(255, 255, 255), new Phaser.Display.Color(0, 255, 0), 100);
        };
        GameUtils.prototype.itemOutEffect = function (item) {
            this.scene.gameUtils.tweenTint(item, new Phaser.Display.Color(0, 255, 0), new Phaser.Display.Color(255, 255, 255), 100);
        };
        GameUtils.prototype.iconOverEffect = function (item) {
            this.scene.gameUtils.tweenTint(item, new Phaser.Display.Color(255, 255, 255), new Phaser.Display.Color(0, 255, 0), 100);
        };
        GameUtils.prototype.iconOutEffect = function (item) {
            this.scene.gameUtils.tweenTint(item, new Phaser.Display.Color(0, 255, 0), new Phaser.Display.Color(255, 255, 255), 100);
        };
        GameUtils.prototype.btnOverEffect = function (btn, text) {
            this.scene.gameUtils.tweenTint(btn, new Phaser.Display.Color(42, 118, 0), new Phaser.Display.Color(0, 255, 0), 100);
            this.scene.gameUtils.tweenTint(text, new Phaser.Display.Color(255, 255, 255), new Phaser.Display.Color(0, 0, 0), 500);
        };
        GameUtils.prototype.btnOutEffect = function (btn, text) {
            this.scene.gameUtils.tweenTint(btn, new Phaser.Display.Color(0, 255, 0), new Phaser.Display.Color(42, 118, 0), 100);
            this.scene.gameUtils.tweenTint(text, new Phaser.Display.Color(0, 0, 0), new Phaser.Display.Color(255, 255, 255), 500);
        };
        GameUtils.prototype.tweenTint = function (obj, startColor, endColor, duration, delay, callback) {
            if (duration === void 0) { duration = 250; }
            if (delay === void 0) { delay = 0; }
            if (callback === void 0) { callback = null; }
            if (obj == undefined)
                return;
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
        GameUtils.prototype.composeVertexMap = function (sceneObj) {
            sceneObj.lines = [];
            /*sceneObj.bounds.forEach((bound: any) => {
              sceneObj.lines.push(
                new Phaser.Geom.Line(
                  sceneObj.vertexList[bound[0]].x,
                  sceneObj.vertexList[bound[0]].y,
                  sceneObj.vertexList[bound[1]].x,
                  sceneObj.vertexList[bound[1]].y
                )
              );
            });*/
            sceneObj.obstacles.forEach(function (obstacle) {
                //this.sceneBounds.push(new Phaser.Geom.Line(bound.x1, bound.y1, bound.x2, bound.y2));
                obstacle.bounds.forEach(function (bound) {
                    sceneObj.lines.push(new Phaser.Geom.Line(sceneObj.vertexList[bound[0]].x, sceneObj.vertexList[bound[0]].y, sceneObj.vertexList[bound[1]].x, sceneObj.vertexList[bound[1]].y));
                });
            });
            // console.log(sceneObj.lines);
            var intersect = false;
            var _loop_1 = function (key1) {
                //console.log(sceneObj.vertexList.v1);
                var _loop_2 = function (key2) {
                    /*console.log(
                    key1,
                    key2,
                    sceneObj.vertexList[key1].exclude.indexOf(key2) == -1
                  );*/
                    intersect = false;
                    if (sceneObj.vertexList[key1].exclude.indexOf(key2) == -1) {
                        sceneObj.lines.forEach(function (element) {
                            if (Phaser.Geom.Intersects.LineToLine(new Phaser.Geom.Line(sceneObj.vertexList[key1].x + 2, sceneObj.vertexList[key1].y + 2, sceneObj.vertexList[key2].x - 2, sceneObj.vertexList[key2].y - 2), element)) {
                                intersect = true;
                                /* console.log("intersect", key1, key2);*/
                            }
                            else {
                                /* var graphics = this.scene.add.graphics();
                              graphics.lineStyle(2, 0x00ff00, 1);
                              graphics.lineBetween(
                                sceneObj.vertexList[key1].x,
                                sceneObj.vertexList[key1].y,
                                sceneObj.vertexList[key2].x,
                                sceneObj.vertexList[key2].y
                              );*/
                                /*console.log(
                              "not intersect",
                              key1,
                              sceneObj.vertexList[key1].childs,
                              key2
                            );*/
                            }
                            //console.log(element, key1, key2, intersect);
                        });
                        if (!intersect) {
                            graphics = this_1.scene.add.graphics();
                            graphics.lineStyle(2, 0x00ff00, 1);
                            graphics.lineBetween(sceneObj.vertexList[key1].x + 1, sceneObj.vertexList[key1].y + 1, sceneObj.vertexList[key2].x - 1, sceneObj.vertexList[key2].y - 1);
                            if (sceneObj.vertexList[key1].childs.indexOf(key2) == -1)
                                sceneObj.vertexList[key1].childs.push(key2);
                        }
                        else {
                            graphics = this_1.scene.add.graphics();
                            graphics.lineStyle(2, 0xff0000, 1);
                            graphics.lineBetween(sceneObj.vertexList[key1].x + 1, sceneObj.vertexList[key1].y + 1, sceneObj.vertexList[key2].x - 1, sceneObj.vertexList[key2].y - 1);
                        }
                        //console.log(sceneObj.vertexList[key1], sceneObj.vertexList[key2]);
                    }
                };
                for (var key2 in sceneObj.vertexList) {
                    _loop_2(key2);
                }
                console.log(sceneObj.vertexList);
            };
            var this_1 = this, graphics, graphics;
            for (var key1 in sceneObj.vertexList) {
                _loop_1(key1);
            }
        };
        return GameUtils;
    }());
    z89.GameUtils = GameUtils;
    var NodeVertex = (function () {
        function NodeVertex() {
        }
        return NodeVertex;
    }());
    z89.NodeVertex = NodeVertex;
    var Vertex = (function () {
        function Vertex(theName, theNodes, theWeight) {
            this.name = theName;
            this.nodes = theNodes;
            this.weight = theWeight;
        }
        return Vertex;
    }());
    z89.Vertex = Vertex;
    var Dijkstra = (function () {
        function Dijkstra() {
            this.vertices = {};
        }
        Dijkstra.prototype.addVertex = function (vertex) {
            this.vertices[vertex.name] = vertex;
        };
        Dijkstra.prototype.findPointsOfShortestWay = function (start, finish, weight) {
            var nextVertex = finish;
            var arrayWithVertex = [];
            while (nextVertex !== start) {
                var minWeigth = Number.MAX_VALUE;
                var minVertex = "";
                for (var _i = 0, _a = this.vertices[nextVertex].nodes; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
                        minWeigth = this.vertices[i.nameOfVertex].weight;
                        minVertex = i.nameOfVertex;
                    }
                }
                arrayWithVertex.push(minVertex);
                nextVertex = minVertex;
            }
            return arrayWithVertex;
        };
        Dijkstra.prototype.findShortestWay = function (start, finish) {
            var _this = this;
            var nodes = {};
            var visitedVertex = [];
            for (var i in this.vertices) {
                if (this.vertices[i].name === start) {
                    this.vertices[i].weight = 0;
                }
                else {
                    this.vertices[i].weight = Number.MAX_VALUE;
                }
                nodes[this.vertices[i].name] = this.vertices[i].weight;
            }
            while (Object.keys(nodes).length !== 0) {
                var sortedVisitedByWeight = Object.keys(nodes).sort(function (a, b) { return _this.vertices[a].weight - _this.vertices[b].weight; });
                var currentVertex = this.vertices[sortedVisitedByWeight[0]];
                for (var _i = 0, _a = currentVertex.nodes; _i < _a.length; _i++) {
                    var j = _a[_i];
                    var calculateWeight = currentVertex.weight + j.weight;
                    if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                        this.vertices[j.nameOfVertex].weight = calculateWeight;
                    }
                }
                delete nodes[sortedVisitedByWeight[0]];
            }
            var finishWeight = this.vertices[finish].weight;
            var arrayWithVertex = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();
            arrayWithVertex.push(finish);
            return arrayWithVertex;
        };
        return Dijkstra;
    }());
    z89.Dijkstra = Dijkstra;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var Items = (function (_super) {
        __extends(Items, _super);
        function Items(scene, itemObj) {
            var _this = _super.call(this, scene, itemObj.x, itemObj.y, itemObj.sprite) || this;
            _this._isIdle = true;
            _this.scene = scene;
            _this.itemObj = itemObj;
            var config = {
                key: null,
                frames: null,
                frameRate: null,
                repeat: null
            };
            var repeat = -1;
            //console.log(itemObj.sprite)
            if (itemObj.animations != undefined) {
                itemObj.animations.forEach(function (element) {
                    if (!element.loop) {
                        repeat = 0;
                    }
                    else {
                        repeat = -1;
                    }
                    config.key = itemObj.id + "-" + element.name;
                    config.frames = scene.anims.generateFrameNumbers(itemObj.sprite, {
                        frames: element.frames
                    });
                    config.frameRate = element.rate;
                    config.repeat = repeat;
                    _this.anims.animationManager.create(config);
                });
                _this.play(itemObj.id + "-" + itemObj.currentAnimation);
            }
            _this.setDepth(_this.y)
                .setOrigin(0.5, 1)
                .setX(itemObj.x);
            _this.id = _this.itemObj.id;
            _this.name = z89.getLabel(_this.itemObj.name);
            _this._isInteractive = _this.itemObj.interactive;
            _this.itemObj.scale != undefined
                ? _this.setScale(_this.itemObj.scale)
                : _this.setScale(1);
            _this.itemObj.alpha != undefined
                ? _this.setAlpha(_this.itemObj.alpha)
                : _this.setAlpha(1);
            if (_this.itemObj.conversationStatus != undefined)
                _this.setConversationStatus(_this.itemObj.conversationStatus);
            if (_this.itemObj.turnLeft != undefined)
                _this.turnLeft();
            if (_this.isInteractive()) {
                if (_this.itemObj.interactiveArea != undefined) {
                    _this.setInteractive(new Phaser.Geom.Rectangle(_this.itemObj.interactiveArea.x, itemObj.interactiveArea.y, _this.itemObj.interactiveArea.w, itemObj.interactiveArea.h), Phaser.Geom.Rectangle.Contains);
                }
                else {
                    _this.setInteractive();
                }
                _this.on("pointerdown", function () {
                    if (_this.scene.isInteractionDisabled())
                        return;
                    var _currentItem = _this.scene.getCurrentItem();
                    if (_this.scene.playerActions.IsOpen() &&
                        _currentItem != undefined &&
                        _currentItem.id != _this.id)
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
                /* .on("pointerover",()=>{
        
        
                        this.scene.gameUtils.itemOverEffect(this);
        
                    }).on("pointerout",()=>{
        
        
                        this.scene.gameUtils.itemOutEffect(this);
        
                    });
                    */
            }
            _this.scene.add.existing(_this);
            return _this;
        }
        Items.prototype.update = function () {
            ///if (this.itemObj.fixedToCamera) this.setX((this.scene.mainCamera.scrollX * -0.095) +  this.itemObj.x);
            if (this.y > 660 && this.isIdle()) {
                this.setX(this.scene.mainCamera.scrollX * -0.095 + this.itemObj.x);
            }
        };
        Items.prototype.getConversationStatus = function () {
            return this.itemObj.conversationStatus;
        };
        Items.prototype.setConversationStatus = function (value) {
            //console.log("setConversationStatus", value);
            this.itemObj.conversationStatus = value;
            this.scene.updateItems();
        };
        Items.prototype.isInteractive = function () {
            return this._isInteractive;
        };
        Items.prototype.setIdle = function (value) {
            this._isIdle = value;
        };
        Items.prototype.isIdle = function () {
            return this._isIdle;
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
            this.itemObj.currentAnimation = _anim.split("-")[1];
            this.play(_anim);
        };
        Items.prototype.start = function () { };
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
            _this.name = z89.getLabel(itemObj.name);
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
            _this.scene.groupCity.add(_this.contentImage);
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
            _this.guru = _this.scene.add.sprite(0, 0, "guru-meditation");
            _this.guru.setOrigin(0.5).setDepth(_this.y + 1);
            _this.guruTween = _this.scene.tweens.add({
                targets: _this.guru,
                delay: 1000,
                duration: 1000,
                alpha: 0,
                yoyo: true,
                loopDelay: 1000,
                loop: -1
            });
            Phaser.Display.Align.In.TopCenter(_this.guru, _this.contentImage, 0, -20);
            _this.scene.groupCity.add(_this.guru);
            var _style = {
                fill: "#00ff00",
                align: "center"
                //stroke: "#000000",
                //strokeThickness: 5
            };
            _this.contentTextTitle = _this.scene.add.text(0, 0, "        Software Failure.         Press any key to continue\n    Guru Meditation          #00000025.65045338", _style);
            _this.contentTextTitle
                .setFontFamily("Roboto")
                .setFontSize(16)
                .setOrigin(0)
                .setDepth(_this.y + 1)
                .setWordWrapWidth(380);
            Phaser.Display.Align.In.TopCenter(_this.contentTextTitle, _this.contentImage, -20, -40);
            _this.scene.groupCity.add(_this.contentTextTitle);
            _this.contentTextDescription = _this.scene.add.text(0, 0, "", _style);
            _this.contentTextDescription
                .setFontFamily("Roboto")
                .setFontSize(16)
                .setOrigin(0)
                .setDepth(_this.y + 1)
                .setWordWrapWidth(380);
            Phaser.Display.Align.To.BottomCenter(_this.contentTextDescription, _this.contentTextTitle, -20, -20);
            _this.scene.groupCity.add(_this.contentTextDescription);
            _this.contentTextDate = _this.scene.add.text(0, 0, "", _style);
            _this.contentTextDate
                .setFontFamily("Roboto")
                .setFontSize(16)
                .setOrigin(0)
                .setDepth(_this.y + 1)
                .setWordWrapWidth(380);
            Phaser.Display.Align.To.BottomCenter(_this.contentTextDate, _this.contentTextDescription, -20, -20);
            _this.scene.groupCity.add(_this.contentTextDate);
            //+++++++++++++++++++++++++
            // spinner
            //+++++++++++++++++++++++++
            _this.spinner = _this.scene.add.sprite(0, 0, "spinner");
            _this.spinner
                .setOrigin(0.5)
                .setAlpha(0)
                .setDepth(_this.y + 1);
            Phaser.Display.Align.In.Center(_this.spinner, _this.contentImage);
            _this.scene.groupCity.add(_this.spinner);
            //+++++++++++++++++++++++++
            // Arrow left
            //+++++++++++++++++++++++++
            _this.arrowLeft = _this.scene.add.sprite(0, 0, "triangleBtn");
            _this.arrowLeft
                .setOrigin(0.5)
                .setAlpha(0)
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
            _this.scene.groupCity.add(_this.arrowLeft);
            //+++++++++++++++++++++++++
            // Arrow right
            //+++++++++++++++++++++++++
            _this.arrowRight = _this.scene.add.sprite(0, 0, "triangleBtn");
            _this.arrowRight
                .setOrigin(0.5)
                .setScale(2)
                .setAlpha(0)
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
            _this.scene.groupCity.add(_this.arrowRight);
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
            _this.scene.groupCity.add(_this.btnGo);
            _this.btnGoText = _this.scene.add.bitmapText(0, 0, "commodore", "Read More", 16);
            _this.btnGoText
                .setOrigin(0.5)
                .setAlpha(0)
                .setDepth(_this.y + 1);
            Phaser.Display.Align.In.Center(_this.btnGoText, _this.btnGo);
            _this.scene.groupCity.add(_this.btnGoText);
            _this.scene.add.existing(_this);
            // let cropRect = new Phaser.Rectangle(0, 0, 400, 200);
            // this.contentImage.crop(cropRect);
            // this.filtersArr = [];
            // this.filtersArr.push(new grayShader(this.game));
            // this.filtersArr.push(new noiseShader(this.game));
            // this.filtersArr.push(new convergenceShader(this.game));
            // if (this.itemObj.isStarted) this.start();
            if (_this.itemObj.isStarted)
                _this.start();
            return _this;
        }
        ItemsContent.prototype.start = function () {
            var _this = this;
            if (!z89.isOnline()) {
                this.displayOffline();
                return;
            }
            this.guruTween.stop();
            this.guru.destroy();
            this.itemObj.isStarted = true;
            this.scene.tweens.add({
                targets: this.arrowRight,
                duration: 300,
                x: this.arrowRight.x + 40
            });
            this.scene.tweens.add({
                targets: [this.btnGo, this.arrowLeft, this.arrowRight, this.btnGoText],
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
        ItemsContent.prototype.displayOffline = function () { };
        ItemsContent.prototype.hideContent = function () {
            var _this = this;
            if (!z89.isOnline()) {
                this.displayOffline();
                return;
            }
            this.isAnimating = true;
            this.scene.tweens.add({
                targets: [
                    this.contentTextTitle,
                    this.contentTextDescription,
                    this.contentTextDate,
                    this.contentImage,
                    this.btnGo,
                    this.btnGoText
                ],
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
            if (!z89.isOnline()) {
                this.displayOffline();
                return;
            }
            this.scene.tweens.add({ targets: this.spinner, alpha: 0, duration: 300 });
            var _title = "", _description = "", _date = "";
            if (this.contents[this.currentIndex].a != undefined) {
                var _json = JSON.parse(this.contents[this.currentIndex].a);
                if (_json.link != undefined) {
                    this.contents[this.currentIndex].url = _json.link;
                }
                if (_json.dd != undefined) {
                    _title = "DEVDAY " + _json.dd;
                    _description = this.contents[this.currentIndex].t;
                }
                else {
                    _title = this.contents[this.currentIndex].t;
                }
                if (_json.date != undefined)
                    _date = _json.date;
            }
            //console.log(_title,_description,_date)
            this.contentTextTitle
                .setText(_title)
                .setColor("#ffffff")
                .setFontSize(30);
            Phaser.Display.Align.In.TopCenter(this.contentTextTitle, this, null, -20);
            this.contentTextDescription.setText(_description).setFontSize(20);
            Phaser.Display.Align.To.BottomCenter(this.contentTextDescription, this.contentTextTitle, null, 10);
            this.contentTextDate.setText(_date).setColor("#ffffff");
            Phaser.Display.Align.To.BottomCenter(this.contentTextDate, this.contentTextDescription, null, 20);
            this.scene.tweens.add({
                targets: [
                    this.contentTextTitle,
                    this.contentTextDescription,
                    this.contentTextDate,
                    this.btnGo,
                    this.btnGoText
                ],
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
            _this.skills = gameData.skills;
            var _text;
            var _bar;
            var _y = [-66, -164, -260, -355];
            _this.setOrigin(0.5).setDepth(_this.y).setAlpha(1);
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
    var ItemsWalking = (function (_super) {
        __extends(ItemsWalking, _super);
        function ItemsWalking(scene, itemObj) {
            var _this = _super.call(this, scene, itemObj) || this;
            _this.behaviour = true;
            _this.beaming = false;
            _this.distanceUpdate = true;
            _this.stopped = false;
            _this.setAlpha(0).setX(itemObj.startX);
            _this.playAnim(_this.itemObj.id + "-idle");
            _this.movingTimer = _this.scene.time.delayedCall(Phaser.Math.RND.integerInRange(0, 5000), function (scene) {
                _this.beamIn();
            }, null, _this);
            return _this;
        }
        ItemsWalking.prototype.stop = function () {
            console.log("walker destroy:" + this.name);
            this.stopped = true;
            this.movingTimer.remove(false);
            if (this.movingTween != undefined)
                this.movingTween.stop();
            //this.destroy();
        };
        ItemsWalking.prototype.beamIn = function () {
            var _this = this;
            if (this.stopped)
                return;
            this.beaming = true;
            this.scene.gameItemsUtils.beamIn(this, function () {
                _this.beaming = false;
                _this.movingTimer = _this.scene.time.delayedCall(1000, function () {
                    _this.nextDirection();
                }, null, _this);
            });
        };
        ItemsWalking.prototype.setDestinationY = function (bothSide) {
            if (!bothSide) {
                if (this.y < 680) {
                    return Phaser.Math.RND.integerInRange(605, 615);
                }
                else {
                    return Phaser.Math.RND.integerInRange(680, 720);
                }
            }
            else {
                if (Phaser.Math.RND.integerInRange(0, 1) == 0) {
                    return Phaser.Math.RND.integerInRange(605, 615);
                }
                else {
                    return Phaser.Math.RND.integerInRange(680, 720);
                }
            }
        };
        ItemsWalking.prototype.checkBounds = function () {
            if (this.x < this.itemObj.walkRange.start ||
                this.x > this.itemObj.walkRange.end)
                return true;
            return false;
        };
        ItemsWalking.prototype.startPath = function (direction) {
            var _this = this;
            //console.log("startpath")
            if (this.stopped)
                return;
            var _walk = Phaser.Math.RND.integerInRange(this.itemObj.walkRange.step.min, this.itemObj.walkRange.step.max);
            var _walkSpeed = _walk * 10;
            if (direction == 0) {
                this.turnLeft();
                _walk = _walk * -1;
            }
            else {
                this.turnRight();
            }
            this.setIdle(false);
            this.playAnim(this.itemObj.id + "-walking");
            this.movingTween = this.scene.tweens.add({
                targets: this,
                x: this.x + _walk,
                y: this.setDestinationY(false),
                duration: _walkSpeed,
                onUpdate: function () {
                    if (_this.stopped)
                        return;
                    _this.setDepth(_this.y);
                    if (_this.checkBounds() &&
                        _this.itemObj.insight.behaviour != "runner") {
                        //console.log("startpath update checkBounds");
                        if (_this.movingTween != undefined)
                            _this.movingTween.stop();
                        if (_this.movingTimer != undefined)
                            _this.movingTimer.remove(false);
                        _this.setXPosition(_this.x);
                        if (_this.x < _this.itemObj.walkRange.start) {
                            _this.turnRight();
                            _this.nextDirection(1);
                        }
                        else {
                            _this.turnLeft();
                            _this.nextDirection(0);
                        }
                    }
                },
                onComplete: function () {
                    //  console.log("startpath complete");
                    _this.setIdle(true);
                    _this.playAnim(_this.itemObj.id + "-idle");
                    _this.updateItemObj("x", _this.scene.mainCamera.scrollX * 0.095 + _this.x);
                    if (_this.itemObj.insight.behaviour == "runner" &&
                        _this.checkBounds()) {
                        _this.beaming = true;
                        _this.scene.gameItemsUtils.beamOut(_this, function () {
                            _this.setXPosition(Phaser.Math.RND.integerInRange(_this.itemObj.walkRange.start, _this.itemObj.walkRange.end));
                            if (Phaser.Math.RND.integerInRange(0, 1) == 0) {
                                _this.setYPosition(610);
                            }
                            else {
                                _this.setYPosition(700);
                            }
                            _this.beamIn();
                        });
                    }
                    else {
                        _this.movingTimer = _this.scene.time.delayedCall(Phaser.Math.RND.integerInRange(_this.itemObj.walkRange.idle.min, _this.itemObj.walkRange.idle.max), function (scene) {
                            _this.nextDirection();
                        }, null, _this);
                    }
                }
            });
        };
        ItemsWalking.prototype.setXPosition = function (value) {
            if (this.stopped)
                return;
            this.updateItemObj("x", this.scene.mainCamera.scrollX * 0.095 + value);
            this.setX(value);
        };
        ItemsWalking.prototype.setYPosition = function (value) {
            if (this.stopped)
                return;
            this.updateItemObj("y", value);
            this.setY(value).setDepth(value);
        };
        ItemsWalking.prototype.nextDirection = function (_setDirection) {
            var _this = this;
            //console.log("nextDirection",_setDirection);
            if (this.stopped)
                return;
            var _action = Phaser.Math.RND.integerInRange(0, 100);
            var _direction = Phaser.Math.RND.integerInRange(0, 1);
            if (_setDirection != undefined)
                _direction = _setDirection;
            if (_action > 100 - this.itemObj.jumpChance &&
                _setDirection == undefined) {
                //console.log("nextDirection jump")
                this.beaming = true;
                this.setIdle(true);
                this.playAnim(this.itemObj.id + "-idle");
                this.scene.gameItemsUtils.beamOut(this, function () {
                    _this.beaming = false;
                    _this.setXPosition(Phaser.Math.RND.integerInRange(_this.itemObj.walkRange.start, _this.itemObj.walkRange.end));
                    if (_direction == 0) {
                        _this.setYPosition(610);
                    }
                    else {
                        _this.setYPosition(700);
                    }
                    _this.beamIn();
                });
            }
            else {
                //console.log("nextDirection startPath")
                this.startPath(_direction);
            }
        };
        ItemsWalking.prototype.checkYOffset = function () {
            if (this.scene.player.y < this.y) {
                if (this.y - this.scene.player.y < this.itemObj.insight.offsetY)
                    return true;
            }
            else {
                if (this.scene.player.y - this.y < this.itemObj.insight.offsetY)
                    return true;
            }
            return false;
        };
        ItemsWalking.prototype.update = function () {
            var _this = this;
            if (this.stopped ||
                this.scene.player.alpha < 1 ||
                (this.scene.player.isMasked() && this.itemObj.id == 102)) {
                //this.setAlpha(0.5);
                return;
            }
            if (!this.beaming &&
                this.itemObj.insight.distance > 0 &&
                this.distanceUpdate &&
                !this.scene.player.isTalking()) {
                if (Math.round(Phaser.Math.Distance.Between(this.x, this.y, this.scene.player.x, this.scene.player.y)) < this.itemObj.insight.distance &&
                    this.checkYOffset()) {
                    if (this.behaviour) {
                        this.behaviour = !this.behaviour;
                        if (this.movingTween != undefined)
                            this.movingTween.stop();
                        if (this.movingTimer != undefined)
                            this.movingTimer.remove(false);
                        this.updateItemObj("x", this.scene.mainCamera.scrollX * 0.095 + this.x);
                        switch (this.itemObj.insight.behaviour) {
                            case "runner":
                                this.distanceUpdate = false;
                                /* if (this.scene.player.x <= this.x) {
                                this.turnRight();
                                this.startPath(1);
                              } else {
                                this.turnLeft();
                                this.startPath(0);
                              }
                              
                              return;*/
                                this.setIdle(false);
                                var _run = 500;
                                var _runSpeed = 1500;
                                if (this.scene.player.x <= this.x) {
                                    this.turnRight();
                                }
                                else {
                                    this.turnLeft();
                                    _run = -500;
                                }
                                this.playAnim(this.itemObj.id + "-running");
                                this.movingTween = this.scene.tweens.add({
                                    targets: this,
                                    x: this.x + _run,
                                    y: this.setDestinationY(false),
                                    duration: _runSpeed,
                                    onUpdate: function () {
                                        if (_this.stopped)
                                            return;
                                        _this.setDepth(_this.y);
                                    },
                                    onComplete: function () {
                                        _this.distanceUpdate = true;
                                    }
                                });
                                break;
                            case "jumper":
                                this.distanceUpdate = false;
                                this.setIdle(true);
                                this.playAnim(this.itemObj.id + "-idle");
                                this.beaming = true;
                                this.scene.gameItemsUtils.beamOut(this, function () {
                                    var _jump;
                                    if (_this.scene.player.x <= _this.x) {
                                        _this.turnRight();
                                        _jump = -400;
                                    }
                                    else {
                                        _this.turnLeft();
                                        _jump = 400;
                                    }
                                    _this.setYPosition(_this.setDestinationY(true));
                                    if (_this.scene.player.x + _jump <
                                        _this.itemObj.walkRange.start) {
                                        _this.setXPosition(_this.itemObj.walkRange.start);
                                    }
                                    else if (_this.scene.player.x + _jump >
                                        _this.itemObj.walkRange.end) {
                                        _this.setXPosition(_this.itemObj.walkRange.end);
                                    }
                                    else {
                                        _this.setXPosition(_this.scene.player.x + _jump);
                                    }
                                    _this.scene.gameItemsUtils.beamIn(_this, function () {
                                        _this.beaming = false;
                                        _this.distanceUpdate = true;
                                        _this.behaviour = true;
                                        _this.nextDirection();
                                    });
                                });
                                break;
                            case "idler":
                                // console.log("stop",this.y,this.scene.player.y,this.checkYOffset());
                                this.setIdle(true);
                                this.playAnim(this.itemObj.id + "-idle");
                                if (this.scene.player.x <= this.x) {
                                    this.turnLeft();
                                }
                                else {
                                    this.turnRight();
                                }
                                break;
                        }
                    }
                }
                else {
                    //console.log("far");
                    if (!this.behaviour) {
                        // console.log("restart");
                        this.nextDirection();
                    }
                    this.behaviour = true;
                }
            }
            if (this.y > 660 && this.isIdle()) {
                this.setX(this.scene.mainCamera.scrollX * -0.095 + this.itemObj.x);
            }
        };
        return ItemsWalking;
    }(z89.Items));
    z89.ItemsWalking = ItemsWalking;
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
            var _this = _super.call(this, scene, 0, 0, "player") || this;
            _this.direction = PlayerDirection.RIGHT;
            _this.playerState = PlayerStates.IDLE;
            _this._isMasked = false;
            _this._isTalking = false;
            _this.illogicText = [19, 20, 13, 21];
            _this.animations = [
                {
                    key: "player-idle",
                    frames: [8, 9, 10, 11],
                    frameRate: 5,
                    repeat: -1,
                    repeatDelay: 0
                },
                {
                    key: "player-walk",
                    frames: [0, 1, 2, 3, 4, 5, 6, 7],
                    frameRate: 7,
                    repeat: -1,
                    repeatDelay: 0
                },
                {
                    key: "player-pickdrop",
                    frames: [16, 17, 18, 19],
                    frameRate: 7,
                    repeat: 0,
                    repeatDelay: 0
                },
                {
                    key: "player-use",
                    frames: [19, 20, 21, 20, 19],
                    frameRate: 7,
                    repeat: 0,
                    repeatDelay: 0
                },
                {
                    key: "player-punch",
                    frames: [12, 13, 14, 15],
                    frameRate: 7,
                    repeat: 0,
                    repeatDelay: 0
                },
                {
                    key: "player-idle-mask",
                    frames: [32, 33, 34, 35],
                    frameRate: 5,
                    repeat: -1,
                    repeatDelay: 0
                },
                {
                    key: "player-walk-mask",
                    frames: [24, 25, 26, 27, 28, 29, 30, 31],
                    frameRate: 7,
                    repeat: -1,
                    repeatDelay: 0
                },
                {
                    key: "player-pickdrop-mask",
                    frames: [40, 41, 42, 43],
                    frameRate: 7,
                    repeat: 0,
                    repeatDelay: 0
                },
                {
                    key: "player-use-mask",
                    frames: [43, 44, 45, 44, 43],
                    frameRate: 7,
                    repeat: 0,
                    repeatDelay: 0
                },
                {
                    key: "player-punch-mask",
                    frames: [36, 37, 38, 39],
                    frameRate: 7,
                    repeat: 0,
                    repeatDelay: 0
                }
            ];
            //this.setPipeline("testPipeline");
            //this.pipeline.setFloat2('uResolution', this.width, this.height);
            /* this.scene.input.keyboard.on("keyup", event => {
              //console.log("player",event.key);
              if (event.key == "p") {
                // console.log("punch");
                this.playAnimation("player-punch");
              }
            });
            */
            _this.scene = scene;
            var config;
            _this.animations.forEach(function (element) {
                config = {
                    key: element.key,
                    frames: scene.anims.generateFrameNumbers("player", {
                        frames: element.frames
                    }),
                    frameRate: element.frameRate,
                    repeat: element.repeat,
                    repeatDelay: element.repeatDelay
                };
                _this.anims.animationManager.create(config);
            });
            _this.on("animationcomplete", function () {
                _this.playAnimation("player-idle");
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
            _this.playAnimation("player-idle");
            _this.setOrigin(0.5, 1)
                .setScale(1)
                .setY(608)
                .setAlpha()
                .setDepth(_this.y)
                .setInteractive(new Phaser.Geom.Rectangle(33, 0, 60, 80), Phaser.Geom.Rectangle.Contains)
                .setName("player")
                .on("pointerdown", function () {
                if (_this.scene.isInteractionDisabled())
                    return;
                _this.scene.playerMenu.toggle();
            });
            scene.add.existing(_this);
            return _this;
            //console.log(this.isTalking());
        }
        Player.prototype.isMasked = function () {
            return this._isMasked;
        };
        Player.prototype.useMask = function (value) {
            this._isMasked = value;
        };
        Player.prototype.isTalking = function () {
            return this._isTalking;
        };
        Player.prototype.setConversation = function (value) {
            this._isTalking = value;
        };
        Player.prototype.goTo = function (_x, _y, _item) {
            //console.log(_x, _y, _item, this.scene.currentItem);
            var _this = this;
            //console.log(this.isTalking());
            this.hideBaloon();
            if (this.scene.conversationBaloon.isConversationActive() &&
                (_x != this.x || _y != this.y - 5)) {
                this.scene.conversationBaloon.stopConversation();
            }
            if ((_item != undefined || _item != null) &&
                (this.scene.currentItem != undefined ||
                    this.scene.currentItem != null) &&
                this.scene.currentItem.itemObj.id == _item.itemObj.id)
                return;
            if (this.scene.playerActions.IsOpen() &&
                // (this.scene.currentItem == undefined || this.scene.currentItem == null) &&
                (_item == undefined || _item == null)) {
                this.scene.playerActions.hide();
            }
            // else{}
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
            //console.log(_intersect);
            if (_intersect.point != null) {
                var _offsetY = 0;
                var _offsetX = 0;
                if (this.y < _intersect.point.y) {
                    _offsetY = -5;
                }
                else {
                    _offsetY = 5;
                }
                if (this.x < _intersect.point.x) {
                    _offsetX = -5;
                }
                else {
                    _offsetX = 5;
                }
                _x = _intersect.point.x + _offsetX;
                _y = _intersect.point.y + _offsetY;
                this.intersect = true;
                if (_item != null) {
                    //console.log("my case");
                    //console.log(_item.itemObj.x, _x, _item.itemObj.y, _y);
                    if (_item.itemObj.y <= _y || _item.itemObj.y >= _y) {
                        if (_item.itemObj.x <= _x) {
                            _x = _item.itemObj.x + _item.itemObj.offsetX;
                        }
                        else {
                            _x = _item.itemObj.x - _item.itemObj.offsetX;
                        }
                    }
                    else if (_item.itemObj.x < _x || _item.itemObj.x > _x) {
                        if (_item.itemObj.y <= _y) {
                            _y = _item.itemObj.y - _item.itemObj.offsetY;
                        }
                        else {
                            _y = _item.itemObj.y + _item.itemObj.offsetY;
                        }
                    }
                }
                /**
                 * print destination point
                 */
                /* var graphics = this.scene.add.graphics({
                  fillStyle: { color: 0xff0000 }
                });
                var point1 = new Phaser.Geom.Point(_x, _y); // point at 0/0
                graphics.fillPointShape(point1, 2);
                *
                /
                /**
                 *
                 */
            }
            var distance = Phaser.Math.Distance.Between(this.x, this.y, _x, _y);
            var distanceX = Phaser.Math.Distance.Between(this.x, 0, _x, 0);
            var distanceY = Phaser.Math.Distance.Between(0, this.y, 0, _y);
            //console.log("distance:" + distance, "y:" + distanceX, "x:" + distanceY);
            if (this.playerTween != null) {
                this.playerTween.stop();
            }
            else {
                this.playAnimation("player-walk");
            }
            if (distance < 10 || (distanceX < 10 && distanceY < 10)) {
                this.playAnimation("player-idle");
                this.setDepth(this.y);
                this.scene.saveGameObj.updatePlayerPosition(this.x, this.y);
                if (_item != null) {
                    this.scene.setCurrentItem(_item);
                    if (this.x < _item.x) {
                        if (this.direction == PlayerDirection.LEFT)
                            this.changeDirection();
                    }
                    else {
                        if (this.direction == PlayerDirection.RIGHT)
                            this.changeDirection();
                    }
                    this.scene.playerActions.doActionSequence(_item);
                    // console.log(_item);
                    if (_item.isInteractive())
                        this.scene.playerActions.show();
                }
                return;
            }
            else {
                if (_item != null && _intersect.point != null) {
                    //console.log("my case");
                    //console.log(_item.itemObj.x, _x, _item.itemObj.y, _y);
                    if (_item.itemObj.y <= _y || _item.itemObj.y >= _y) {
                        if (_item.itemObj.x <= _x) {
                            _x = _item.itemObj.x + _item.itemObj.offsetX;
                        }
                        else {
                            _x = _item.itemObj.x - _item.itemObj.offsetX;
                        }
                        distance = Phaser.Math.Distance.Between(this.x, this.y, _x, _y);
                    }
                    else if (_item.itemObj.x < _x || _item.itemObj.x > _x) {
                        if (_item.itemObj.y <= _y) {
                            _y = _item.itemObj.y - _item.itemObj.offsetY;
                        }
                        else {
                            _y = _item.itemObj.y + _item.itemObj.offsetY;
                        }
                        distance = Phaser.Math.Distance.Between(this.x, this.y, _x, _y);
                    }
                }
            }
            /*
            if (distanceX > distanceY) {
              distance = distanceX;
            } else {
              distance = distanceY;
            }*/
            this.playerTween = this.scene.tweens.add({
                targets: this,
                x: _x,
                y: _y + 1,
                ease: null,
                duration: 7.5 * distance,
                loop: 0,
                onCompleteParams: [this.intersect],
                onUpdate: function () {
                    _this.setDepth(_this.y);
                },
                onComplete: function () {
                    //console.log(this.x, this.y, _x, _y, _item);
                    //console.log(this.x, this.y, _item);
                    _this.playerTween.stop();
                    _this.playerTween = null;
                    _this.scene.saveGameObj.updatePlayerPosition(_this.x, _this.y);
                    _this.playAnimation("player-idle");
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
                        _this.scene.playerActions.doActionSequence(_item);
                        if (_item.isInteractive())
                            _this.scene.playerActions.show();
                        /*let distance: number = Phaser.Math.Distance.Between(
                          this.x,
                          this.y,
                          _item.x,
                          _item.y
                        );
            
                        if (distance < 100) {
                          this.scene.playerActions.doActionSequence(_item);
                          
                        }
                        */
                        // console.log(_item);
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
            this.showBaloon(z89.getLabel(this.illogicText[Phaser.Math.RND.integerInRange(0, this.illogicText.length - 1)]));
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
            var _this = this;
            var _obj = { point: null };
            var line1 = new Phaser.Geom.Line(_toPosition.x1, _toPosition.y1, this.x, this.y);
            var toLeft = false;
            var intersectPoints = [];
            if (this.x > _toPosition.x1)
                toLeft = true;
            var line2;
            var intersectPoint = new Phaser.Geom.Point();
            this.scene.groupAll.children.each(function (sprite) {
                if (sprite.name != "player" &&
                    sprite.itemObj != undefined &&
                    sprite.itemObj.checkIntersect) {
                    line2 = new Phaser.Geom.Line(sprite.x - sprite.width / 2 - 10, sprite.y, sprite.x + sprite.width / 2 + 10, sprite.y);
                    intersectPoint.setTo(0, 0);
                    if (Phaser.Geom.Intersects.LineToLine(line1, line2, intersectPoint)) {
                        //console.log("item intersect", intersectPoint);
                        _obj.point = JSON.parse(JSON.stringify(intersectPoint));
                    }
                }
            }, this);
            var distance = null;
            var currentDistance = null;
            var index = 0;
            if (_obj.point == null) {
                this.scene.sceneBounds.forEach(function (bound) {
                    intersectPoint.setTo(0, 0);
                    if (Phaser.Geom.Intersects.LineToLine(line1, new Phaser.Geom.Line(bound.x1, bound.y1, bound.x2, bound.y2), intersectPoint)) {
                        //console.log("intersect");
                        //console.log("intersect", intersectPoint);
                        intersectPoints.push(JSON.parse(JSON.stringify(intersectPoint)));
                        if (toLeft) {
                            //console.log("toleft", intersectPoints[index].x);
                            //intersectPoints[index].x = intersectPoints[index].x + 10;
                        }
                        else {
                            //console.log("tor", intersectPoints[index].x);
                            //intersectPoints[index].x = intersectPoints[index].x - 10;
                        }
                        distance = Phaser.Math.Distance.Between(_this.x, _this.y, intersectPoints[index].x, intersectPoints[index].y);
                        if (distance < currentDistance || currentDistance == null) {
                            currentDistance = distance;
                            //console.log(currentDistance);
                            _obj.point = intersectPoints[index];
                        }
                        index++;
                    }
                });
            }
            // console.log(_obj);
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
                .setDepth(this.y)
                .play("beam");
            var color2 = new Phaser.Display.Color(255, 255, 255);
            var color1 = new Phaser.Display.Color(0, 255, 0);
            this.scene.gameUtils.tweenTint(this, color1, color2, 300, 300, null);
            this.setDepth(this.y);
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
                        repeat: 0,
                        onComplete: function () {
                            _this.scene.enableInteraction();
                        }
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
            this.scene.disableInteraction();
            var beam = this.scene.add.sprite(this.x, 0, "beam");
            beam
                .setScale(0.5, this.beamH())
                .setOrigin(0.5, 0)
                .setAlpha(0)
                .setDepth(this.y)
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
        Player.prototype.showBaloon = function (_text, _callback) {
            this.scene.playerBaloon.showBaloon(_text, _callback);
        };
        // public showBaloonExtra(_obj: any) { this.scene.playerBaloon.showBaloonExtra(_obj); }
        Player.prototype.hideBaloon = function () {
            this.scene.playerBaloon.hideBaloon();
        };
        Player.prototype.playAnimation = function (animation) {
            if (this.isMasked()) {
                this.play(animation + "-mask");
            }
            else {
                this.play(animation);
            }
        };
        Player.prototype.update = function () {
            //console.log("update player");
            //this.pipeline.setFloat1('rand', Phaser.Math.RND.realInRange(0, 1));
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
            gameData.actions[currentLang].forEach(function (element, index) {
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
                    _this.setText(gameData.actions[currentLang][refBtn.z]);
                    var _txt = _this.actionBntsTxt[refBtn.z];
                    _txt.tint = 0x00ff00;
                    _this.doActionSequence();
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
                            _this.doActionSequence();
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
                            _this.doActionSequence();
                        }
                    }
                }, _this);
                _this.inventoryBtns.push(_icon);
                _this.add(_icon);
            });
            _this.actionText = _this.scene.add.bitmapText(200, 690, "commodore", "", 20);
            _this.actionText
                .setAlpha(0)
                .setScrollFactor(0)
                .setTint(0x00ff00);
            _this.add(_this.actionText);
            _this.scene.add.existing(_this);
            return _this;
        }
        PlayerActions.prototype.setLanguage = function () {
            this.actionBntsTxt.forEach(function (element, index) {
                element.text = gameData.actions[currentLang][index];
            });
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
            this.unselectInventoryIcons();
            //this.iconGroup.setAll("frame", 0);
        };
        PlayerActions.prototype.getInventory = function () {
            return this.inventory;
        };
        PlayerActions.prototype.setActionObject = function (value) {
            this.logicCombination = value;
        };
        PlayerActions.prototype.getInventorySelected = function () {
            var _this = this;
            var _selectedItems = [];
            //console.log(this.inventorySelected);
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
                // this.scene.disableInteraction();
                if (this.scene.player.x < 400) {
                    this.setX(1080);
                    this.scene.tweens.add({
                        targets: this,
                        x: 780,
                        alpha: 1,
                        duration: 400,
                        ease: "Quad.easeInOut",
                        onComplete: function () {
                            _this.isOpen = true;
                        }
                    });
                    this.actionText.setAlpha(0).setX(-800);
                    this.actionTextTween = this.scene.tweens.add({
                        targets: this.actionText,
                        alpha: 1,
                        x: -750,
                        duration: 500,
                        delay: 400,
                        ease: "Quad.easeInOut",
                        onComplete: function () { }
                    });
                }
                else {
                    this.scene.tweens.add({
                        targets: this,
                        x: 0,
                        alpha: 1,
                        duration: 400,
                        ease: "Quad.easeInOut",
                        onComplete: function () {
                            _this.isOpen = true;
                        }
                    });
                    this.actionText.setAlpha(0).setX(280);
                    this.actionTextTween = this.scene.tweens.add({
                        targets: this.actionText,
                        alpha: 1,
                        x: 320,
                        duration: 500,
                        delay: 400,
                        ease: "Quad.easeInOut",
                        onComplete: function () { }
                    });
                }
            }
        };
        PlayerActions.prototype.cleanAction = function () {
            this.actionBntsTxt.forEach(function (element) {
                element.tint = 0xffffff;
            });
        };
        PlayerActions.prototype.resetActions = function () {
            this.cleanAction();
            this.currentAction = -1;
            this.inventorySelected = [];
            this.unselectInventoryIcons();
            this.scene.currentItem = null;
        };
        PlayerActions.prototype.hide = function () {
            var _this = this;
            if (!this.isOpen)
                return;
            if (this.scene.player.x < 400) {
                this.scene.tweens.add({
                    targets: this,
                    x: 1080,
                    alpha: 0,
                    duration: 400,
                    ease: "Quad.easeInOut",
                    onComplete: function () {
                        _this.setX(-300);
                        _this.isOpen = false;
                        _this.currentAction = -1;
                        _this.deselectItems();
                        _this.resetActions();
                        _this.uncheckInventoryIcons();
                        _this.setActionObject(null);
                        _this.setText("");
                    }
                });
            }
            else {
                this.scene.tweens.add({
                    targets: this,
                    x: -300,
                    alpha: 0,
                    duration: 400,
                    ease: "Quad.easeInOut",
                    onComplete: function () {
                        _this.isOpen = false;
                        _this.currentAction = -1;
                        _this.deselectItems();
                        _this.resetActions();
                        _this.uncheckInventoryIcons();
                        _this.setActionObject(null);
                        _this.setText("");
                    }
                });
            }
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
            //this.actionText.setAlpha(0).setX(200);
            this.actionTextTween = this.scene.tweens.add({
                targets: this.actionText,
                alpha: 0,
                duration: 500,
                delay: 200,
                ease: "Quad.easeInOut",
                onComplete: function () { }
            });
            // this.actionTextTween.onComplete.add(() => { this.actionText.x = 200; }, this);
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
            return gameData.actions[currentLang][this.currentAction];
        };
        PlayerActions.prototype.setText = function (_string) {
            //console.log("setText",_string)
            this.actionText.text = _string;
            /* if (this.actionText.tint == 0x00ff00) {
                       this.actionText.tint = 0x00ffff
                   } else { this.actionText.tint = 0x00ff00 }
                   */
            // this.actionText.tint = 0x00ff00;
            // this.actionText.setAlpha(1).setX(320);
            //if (this.actionTextTween != undefined) this.actionTextTween.stop();
            //this.actionTextTween = this.game.add.tween(this.actionText).to({ alpha: 1, x: 320 }, 500, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
        };
        PlayerActions.prototype.removeItems = function (items) {
            var _this = this;
            items.forEach(function (element) {
                _this.removeItem(element);
            });
        };
        PlayerActions.prototype.removeItem = function (item) {
            //console.log(item);
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
        PlayerActions.prototype.unselectInventoryIcons = function () {
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
                _inv
                    .setOrigin(0.5)
                    .setScrollFactor(0)
                    .setFrame(0);
                Phaser.Display.Align.In.Center(_inv, _this.inventoryBtns[index]);
                _this.inventoryBtnsItems.push(_inv);
                _this.add(_inv);
            });
            //console.log(this.inventory, this.inventoryBtns, this.inventoryBtnsItems);
        };
        PlayerActions.prototype.addItem = function (item) {
            if (!this.isInInventory(item.id)) {
                item.inventoryIndex = this.inventory.length;
                this.inventory.push(item);
                var _icon = this.inventoryBtns[this.inventory.length - 1];
                var _inv = this.scene.add.sprite(35, 35, item.itemObj.sprite);
                _inv.setOrigin(0.5).setScrollFactor(0);
                Phaser.Display.Align.In.Center(_inv, _icon);
                this.inventoryBtnsItems.push(_inv);
                this.add(_inv);
                this.scene.saveGameObj.updatePlayerInventory(this.inventory);
            }
        };
        PlayerActions.prototype.isInInventory = function (id) {
            var match = false;
            this.inventory.forEach(function (element) {
                //console.log(item.itemObj.id, element.itemObj.id)
                if (id == element.itemObj.id)
                    match = true;
            });
            return match;
        };
        //private dropItem(): void {}
        //  update(){console.log("update")}
        PlayerActions.prototype.getActionObject = function () {
            return this.logicCombination;
        };
        PlayerActions.prototype.doActionSequence = function (_item) {
            var _this = this;
            this.createActionObject(); //create the action object based on action/inventory/items selection
            this.createActionText(); //create the action text based on the above selection
            var _actionObj = this.getActionObject();
            if (this.actionTimer != null)
                this.actionTimer.remove(false);
            //console.log(_actionObj);
            if (_actionObj.action != -1 &&
                (_actionObj.inventory.length > 0 || _actionObj.item != null) &&
                this.executeActionLogic(_item)) {
                this.hide();
            }
            else {
                if (_actionObj.key != "noAction" &&
                    _actionObj.key.indexOf("_") != -1 &&
                    ((_actionObj.inventory.length > 0 && _actionObj.item != undefined) ||
                        (_actionObj.inventory.length == 0 && _actionObj.item != undefined))) {
                    this.scene.player.illogicAction();
                }
            }
            this.actionTimer = this.scene.time.delayedCall(3000, function () {
                _this.resetActions();
                _this.setActionObject(null);
                _this.setText("");
                _this.scene.playerBaloon.hideBaloon();
            }, null, this);
        };
        PlayerActions.prototype.createActionObject = function (_itemSelected) {
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
            //console.log(returnObj.inventory);
            var _Item;
            if (_itemSelected != undefined) {
                _Item = _itemSelected;
            }
            else {
                _Item = this.scene.getCurrentItem();
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
            // console.log(returnObj);
            this.logicCombination = returnObj;
            //return this.logicCombination;
        };
        PlayerActions.prototype.createActionText = function () {
            //console.log("createActionText")
            var _actionObj = this.getActionObject();
            var _actionText = "";
            if (_actionObj == null) {
                if (this.scene.getCurrentItem() != undefined)
                    _actionText = this.scene.getCurrentItem().name;
            }
            else {
                var _destText = "";
                if (_actionObj.action == PlayerActionList.GIVE) {
                    _destText = " to ";
                }
                else if (_actionObj.action == PlayerActionList.USE) {
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
                            this.getCurrentActionLabel() + " " + _actionObj.inventory[0].name; //+ _destText;
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
            this.setText(_actionText);
        };
        PlayerActions.prototype.checkCombinedItems = function () {
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
        PlayerActions.prototype.checkCombinedItemsKey = function () {
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
        PlayerActions.prototype.executeActionLogic = function (_item) {
            var _actionObj = this.getActionObject();
            //console.log(_actionObj);
            //console.log(this.checkCombinedItems())
            if (_actionObj.inventory.length > 0 && _actionObj.item == null) {
                // console.log("logic 0");
                //console.log(_actionObj.inventory.length, this.getCurrentActionString(), _actionObj.key)
                if (_actionObj.inventory.length == 1 &&
                    gameData.ingame.logic[_actionObj.key] != undefined) {
                    //console.log("logic 1");
                    gameData.ingame.logic[_actionObj.key](this.scene);
                    return true;
                }
                else if (_actionObj.inventory.length == 2 &&
                    this.checkCombinedItems()) {
                    //console.log("logic item on item", _actionObj.key);
                    gameData.ingame.logic[this.checkCombinedItemsKey()](this.scene);
                    return true;
                }
            }
            else if (_actionObj.inventory.length == 0 &&
                _actionObj.item != null &&
                gameData.ingame.logic[_actionObj.key] != undefined) {
                //console.log("logic 2", _actionObj.key);
                //if (_actionObj.item.itemObj.logic != undefined && _actionObj.item.itemObj.logic[this.getCurrentActionString()] != undefined) { _actionObj.item.itemObj.logic[this.getCurrentActionString()](this); return true; }
                gameData.ingame.logic[_actionObj.key](this.scene);
                return true;
            }
            else if (_actionObj.inventory.length > 0 &&
                _actionObj.item != null &&
                gameData.ingame.logic[_actionObj.key] != undefined) {
                //console.log("logic 3", _actionObj.key);
                gameData.ingame.logic[_actionObj.key](this.scene);
                return true;
            }
            return false;
        };
        PlayerActions.prototype.returnMessage = function () {
            var _currActionObj = this.getActionObject();
            var _item;
            if (_currActionObj.item == null) {
                _item = _currActionObj.inventory[0];
            }
            else {
                _item = _currActionObj.item;
            }
            var _mess = _item.itemObj.actions[_currActionObj.action].answer[Phaser.Math.RND.integerInRange(0, _item.itemObj.actions[_currActionObj.action].answer.length - 1)];
            this.scene.player.showBaloon(_mess);
        };
        PlayerActions.prototype.addInventory = function (itemIndex, noAnimation) {
            // console.log("addInventory", this.playerActions.isInInventory(itemIndex));
            if (!this.scene.playerActions.isInInventory(itemIndex)) {
                //  console.log("add to in");
                this.scene.gameItemsUtils.addItem(itemIndex);
                this.addInventoryItem(this.scene.gameItemsUtils.getItemById(itemIndex), noAnimation);
            }
        };
        PlayerActions.prototype.addInventoryItem = function (item, noAnimation) {
            if (item != undefined && this.isInInventory(item.itemObj.id)) {
                this.scene.groupAll.remove(item, true, true);
                this.scene.player.play("player-pickdrop");
                return;
            }
            if (item != undefined) {
                this.addItem(item);
                this.scene.groupAll.remove(item, true, true);
                if (noAnimation != undefined && !noAnimation)
                    this.scene.playerAnimation("player-pickdrop");
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
                    if (this.isInInventory(_item.id)) {
                        this.scene.player.showBaloon(z89.getLabel(28));
                        this.resetActions();
                    }
                    else {
                        this.scene.playerAnimation("player-pickdrop");
                        this.addItem(_item);
                        this.scene.groupAll.remove(_item, true, true);
                        this.scene.setCurrentItem(null);
                    }
                }
            }
            this.scene.saveGameObj.updateItems();
        };
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
            _this.setAlpha(0);
            _this.baloonBg = _this.scene.add.image(0, 20, "baloonBg");
            _this.baloonBg.setOrigin(0.5, 1).setAlpha(0.8);
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
        PlayerBaloon.prototype.showBaloon = function (_text, _callback) {
            if (_text == undefined)
                return;
            this.baloonText.setText(_text);
            this.fixSize();
            this.setY(this.y);
            this.scene.tweens.add({
                targets: this,
                y: this.y + 10,
                alpha: 1,
                duration: 500,
                onComplete: function () {
                    if (_callback != undefined)
                        _callback();
                }
            });
        };
        PlayerBaloon.prototype.hideBaloon = function () {
            this.scene.tweens.add({
                targets: this,
                y: this.y - 10,
                alpha: 0,
                duration: 200
            });
        };
        PlayerBaloon.prototype.fixSize = function () {
            this.setX(this.scene.player.x);
            this.setY(this.scene.player.y - this.scene.player.height - 50);
            this.baloonBg.setScale(1, (this.baloonText.getBounds().height + 20) / 50);
            var bound = this.baloonBg.getBounds();
            //console.log(this.baloonText.getBounds().y-this.baloonBg.getBounds().y);
            this.baloonText.setY(this.baloonText.y -
                (this.baloonText.getBounds().y - this.baloonBg.getBounds().y) +
                10);
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
                .setAlpha(1)
                .setScrollFactor(0)
                .setName("bg");
            _this.menuBg.on("pointerdown", function () {
                if (!_this.isOpenOnStart)
                    _this.hide();
            }, _this);
            _this.menuBgPhone = _this.scene.add
                .sprite(540, 450, "menu-phone")
                .setOrigin(0.5)
                .setScale(1)
                .setScrollFactor(0)
                .setName("bg-phone");
            _this.menuBgOptions = _this.scene.add
                .sprite(0, 0, "phone-options")
                .setOrigin(0)
                .setScale(1)
                .setScrollFactor(0)
                .setName("bg-phone");
            Phaser.Display.Align.In.TopCenter(_this.menuBgOptions, _this.menuBg, 0, -100);
            _this.add([_this.menuBgPhone, _this.menuBg, _this.menuBgOptions]);
            //blinks btns
            //+++++++++++++++++++++++++++++++++
            var blinkBtn;
            var blinkText;
            gameData.menuBlink.forEach(function (element, index) {
                blinkBtn = _this.scene.add.sprite(element.x + _this.btnOffsetX, element.y + _this.btnOffsetY, "icons", element.frame);
                element.sprite = blinkBtn;
                element.index = index;
                blinkBtn
                    .setInteractive()
                    .setScrollFactor(0)
                    .setName("iconsBtn")
                    .on("pointerdown", function () {
                    _this.hide();
                    if (_this.scene.currentScene.name == "city") {
                        _this.scene.player.blinkTo(element.to);
                    }
                    else {
                        _this.scene.showPlayerBaloon(219);
                    }
                }, _this)
                    .on("pointerover", function () {
                    _this.scene.gameUtils.iconOverEffect(element.sprite);
                })
                    .on("pointerout", function () {
                    _this.scene.gameUtils.iconOutEffect(element.sprite);
                });
                blinkText = _this.scene.add.bitmapText(0, 80, _this.fontFamily, element.name, _this.fontSize);
                blinkText.setName("iconsBtn").setScrollFactor(0);
                Phaser.Display.Align.In.Center(blinkText, blinkBtn, null, _this.textOffsetY);
                _this.add([blinkBtn, blinkText]);
            });
            //action btn
            //+++++++++++++++++++++++++++++++++
            _this.actionBtn = _this.scene.add.sprite(gameData.menuBtns.actions.x + _this.btnOffsetX, gameData.menuBtns.actions.y + _this.btnOffsetY, "icons", gameData.menuBtns.actions.frame);
            _this.actionBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerdown", function (pointer) {
                _this.scene.playerActions.toogle();
                _this.hide();
            }, _this)
                .on("pointerover", function () {
                _this.scene.gameUtils.iconOverEffect(_this.actionBtn);
            })
                .on("pointerout", function () {
                _this.scene.gameUtils.iconOutEffect(_this.actionBtn);
            });
            var actionText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.actions.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(actionText, _this.actionBtn, null, _this.textOffsetY);
            _this.add([_this.actionBtn, actionText]);
            //RESTART btn
            //+++++++++++++++++++++++++++++++++
            _this.restartBtn = _this.scene.add.sprite(gameData.menuBtns.restart.x + _this.btnOffsetX, gameData.menuBtns.restart.y + _this.btnOffsetY, "icons", gameData.menuBtns.restart.frame);
            _this.restartBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerdown", function (pointer) {
                _this.scene.setUpConversation({
                    key: "RESTART",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
            }, _this)
                .on("pointerover", function () {
                _this.scene.gameUtils.iconOverEffect(_this.restartBtn);
            })
                .on("pointerout", function () {
                _this.scene.gameUtils.iconOutEffect(_this.restartBtn);
            });
            var restartText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.restart.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(restartText, _this.restartBtn, null, _this.textOffsetY);
            _this.add([_this.restartBtn, restartText]);
            //info btn
            //+++++++++++++++++++++++++++++++++
            _this.infoBtn = _this.scene.add.sprite(gameData.menuBtns.info.x + _this.btnOffsetX, gameData.menuBtns.info.y + _this.btnOffsetY, "icons", gameData.menuBtns.info.frame);
            _this.infoBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerdown", function (pointer) {
                //console.log("info")
                _this.scene.conversationBaloon.setUpConversation({
                    key: "INFO",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
            }, _this)
                .on("pointerover", function () {
                _this.scene.gameUtils.iconOverEffect(_this.infoBtn);
            })
                .on("pointerout", function () {
                _this.scene.gameUtils.iconOutEffect(_this.infoBtn);
            });
            var infoText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.info.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(infoText, _this.infoBtn, null, _this.textOffsetY);
            _this.add([_this.infoBtn, infoText]);
            //options btn
            //+++++++++++++++++++++++++++++++++
            _this.optionBtn = _this.scene.add.sprite(gameData.menuBtns.options.x + _this.btnOffsetX, gameData.menuBtns.options.y + _this.btnOffsetY, "icons", 3);
            _this.optionBtn
                .setInteractive()
                .setScrollFactor(0)
                .setName("iconsBtn")
                .on("pointerdown", function (pointer) {
                //console.log("option")
                /*
                this.scene.conversationBaloon.setUpConversation({
                  key: "OPTIONS",
                  action: null,
                  inventory: null,
                  item: null
                });
    
                this.hide();*/
                _this.scene.setUpConversation({
                    key: "LANGUAGE",
                    action: null,
                    inventory: null,
                    item: null
                });
                _this.hide();
                //this.showMenu();
            }, _this)
                .on("pointerover", function () {
                _this.scene.gameUtils.iconOverEffect(_this.optionBtn);
            })
                .on("pointerout", function () {
                _this.scene.gameUtils.iconOutEffect(_this.optionBtn);
            });
            var optionText = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, gameData.menuBtns.options.name, _this.fontSize)
                .setName("iconsBtn");
            Phaser.Display.Align.In.Center(optionText, _this.optionBtn, null, _this.textOffsetY);
            _this.add([_this.optionBtn, optionText]);
            //+++++++++++++++++++++++++++++++++
            //Start buttons
            //+++++++++++++++++++++++++++++++++
            var introText = _this.scene.add
                .text(0, 0, z89.getLabel(141), {
                fontFamily: "Roboto",
                fontSize: 20
            })
                .setWordWrapWidth(280)
                .setTint(0xffffff)
                .setOrigin(0.5)
                .setName("start");
            Phaser.Display.Align.In.TopCenter(introText, _this.menuBgPhone, 0, -80);
            //+++++++++++++++++++++++++++++++++
            //new game btn
            //+++++++++++++++++++++++++++++++++
            _this.newGameBtn = _this.scene.add.sprite(0, 0, "roundedBtn");
            _this.newGameBtn
                .setName("start")
                .setInteractive()
                .setScrollFactor(0)
                .setTint(0x2a7600)
                .on("pointerdown", function (pointer) {
                _this.newGame();
            }, _this)
                .on("pointerover", function () {
                _this.scene.gameUtils.btnOverEffect(_this.newGameBtn, _this.newGameTxt);
            })
                .on("pointerout", function () {
                _this.scene.gameUtils.btnOutEffect(_this.newGameBtn, _this.newGameTxt);
            });
            Phaser.Display.Align.To.BottomCenter(_this.newGameBtn, introText, 0, 50);
            _this.newGameTxt = _this.scene.add.bitmapText(0, 0, _this.fontFamily, "NEW GAME", _this.fontSize + 10);
            _this.newGameTxt
                .setName("start")
                .setOrigin(0.5, 0)
                .setScrollFactor(0);
            Phaser.Display.Align.In.Center(_this.newGameTxt, _this.newGameBtn);
            //no game btn
            //+++++++++++++++++++++++++++++++++
            _this.noGameBtn = _this.scene.add.sprite(0, 0, "roundedBtn");
            _this.noGameBtn
                .setName("start")
                .setInteractive()
                .setScrollFactor(0)
                .setTint(0x2a7600)
                .on("pointerdown", function () {
                _this.noGame();
            }, _this)
                .on("pointerover", function () {
                _this.scene.gameUtils.btnOverEffect(_this.noGameBtn, _this.noGameTxt);
            })
                .on("pointerout", function () {
                _this.scene.gameUtils.btnOutEffect(_this.noGameBtn, _this.noGameTxt);
            });
            Phaser.Display.Align.To.BottomCenter(_this.noGameBtn, _this.newGameBtn, 0, 50);
            _this.noGameTxt = _this.scene.add
                .bitmapText(0, 0, _this.fontFamily, "NO GAME", _this.fontSize + 10)
                .setName("start")
                .setOrigin(0.5, 0)
                .setScrollFactor(0);
            Phaser.Display.Align.In.Center(_this.noGameTxt, _this.noGameBtn);
            _this.add([
                _this.noGameBtn,
                _this.newGameBtn,
                _this.noGameTxt,
                _this.newGameTxt,
                introText
            ]);
            _this.setVisible(false);
            _this.scene.add.existing(_this);
            return _this;
        }
        PlayerMenu.prototype.newGame = function () {
            //console.log("new game");
            this.scene.displayChapterTitle(0);
            this.scene.playerBaloon.showBaloon(z89.getLabel(95));
            this.isOpenOnStart = false;
            this.scene.saveGameObj.setFirstChoice(true);
            this.scene.saveGameObj.setChoiceChapter(true);
            this.hide();
        };
        PlayerMenu.prototype.noGame = function () {
            var _this = this;
            //console.log("no game");
            gameData.chapters.forEach(function (element) {
                element.complete(_this.scene);
            });
            this.scene.saveGameObj.setFirstChoice(false);
            this.scene.saveGameObj.setChoiceChapter(false);
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
            //this.scene.disableInteraction();
            this.scene.tweens.add({
                targets: this,
                y: 0,
                scaleY: 1,
                scaleX: 1,
                alpha: 1,
                ease: null,
                duration: 200,
                onComplete: function () {
                    _this.scene.playerBaloon.hideBaloon();
                    _this.isOpen = true;
                }
            });
        };
        PlayerMenu.prototype.showMenu = function () {
            var _this = this;
            this.getAll().forEach(function (element, index) {
                if (element.name == "iconsBtn") {
                    _this.scene.tweens.add({
                        targets: element,
                        duration: 100,
                        y: element.y + 20,
                        alpha: 0,
                        onComplete: function () {
                            element.setY(element.y - 20);
                        }
                    });
                }
            }, this);
            this.scene.tweens.add({
                targets: this.menuBgOptions,
                scaleY: 22,
                duration: 1000,
                ease: "Bounce.easeOut"
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
                    _this.menuBgOptions.setScale(1);
                    //this.scene.enableInteraction();
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
            _this.keys = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "*",
                '"',
                ",",
                ".",
                " ",
                "'"
            ];
            _this.scene = scene;
            _this.setScrollFactor(0)
                .setVisible(false)
                .setAlpha(0);
            var terminalBg = _this.scene.add.sprite(0, 0, "terminalBg");
            terminalBg.setOrigin(0);
            var terminal = _this.scene.add.sprite((1080 - 640) / 2, (720 - 500) / 2 - 20, "terminale");
            terminal.setOrigin(0);
            var closeBtn = _this.scene.add.sprite(670, 470, "btn");
            closeBtn
                .setOrigin(0)
                .setInteractive()
                .setAlpha(0)
                .on("pointerdown", function () {
                _this.hide();
            }, _this);
            _this.scene.input.keyboard.on("keydown", function (event) {
                // console.log(event.key);
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
            // console.log(key);
            // console.log(key.keyCode);
            //return;
            if (key == "Enter") {
                this.TerminalLogic.submitCommand();
            }
            else if (key == "Backspace") {
                this.TerminalLogic.removeChar();
            }
            else if (key == "ArrowUp") {
                //up
                this.TerminalLogic.charUp();
            }
            else if (key == "ArrowDown") {
                //down
                this.TerminalLogic.charDown();
            }
            else if (key == "ArrowLeft") {
                //left
                this.TerminalLogic.charLeft();
            }
            else if (key == "ArrowRight") {
                //right
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
            this.scene.tweens.add({
                targets: this,
                alpha: 0,
                duration: 400,
                onComplete: function () {
                    _this.setVisible(false);
                    _this.scene.enableInteraction();
                    _this.TerminalLogic.enableInput();
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
            // console.log("press:", _key);
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
            //console.log("destroy keyboard");
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
        msgs[msgs["amazonLogin"] = 16] = "amazonLogin";
        msgs[msgs["amazonOrder"] = 17] = "amazonOrder";
    })(msgs = z89.msgs || (z89.msgs = {}));
    var shell;
    (function (shell) {
        shell[shell["login"] = 0] = "login";
        shell[shell["gtw"] = 1] = "gtw";
        shell[shell["atp"] = 2] = "atp";
    })(shell = z89.shell || (z89.shell = {}));
    var TerminalLogic = (function () {
        function TerminalLogic(scene, terminal, tint) {
            this.rows = [
                "                                        ",
                "    **** COMMODORE 64  BASIC V5 ****    ",
                " 64K RAM SYSTEM    RUNNING IN WOPR MODE ",
                "READY.                                  ",
                "LIST OF COMMANDS:                       ",
                "----------------------------------------",
                "help, clear, quit, ver, credits, reset, ",
                'dir, load "gamename", run               ',
                " GREETINGS PROFESSOR FALKEN.            ",
                " WELCOME TO,                            ",
                " ###################################### ",
                ' #     "GLOBAL THERMONUCLEAR WAR"     # ',
                " PLEASE, ENTER THE LOCATION (LAT,LON)   ",
                " OF FIRST STRIKE! E.g. INTEGER,INTEGER  ",
                "MEDIA CONSOLE VERSION 1.0               ",
                "(C) FRANCESCO RAIMONDO 2018             ",
                "HTTP://WWW.ZERO89.IT                    ",
                "CREDIT LIST:                            ",
                "CODE: FRANCESO RAIMONDO                 ",
                "ART SPRITE: PAUL ROBERTSON              ",
                "ART BG: JASON TAMMEMAGI                 ",
                "ART MIXING: FRANCESO RAIMONDO           ",
                "MUSIC:                                  ",
                "ADDITIONAL FX: FRANCESO RAIMONDO        ",
                '0 "GAME LIST                  " 32 2A   ',
                '0    "BOCCONCINI DEV"              PRG  ',
                '0    "XMAS2K16"                    PRG  ',
                '0    "THE WRONG DIRECTION"         PRG  ',
                '0    "FALKEN\'S MAZE"               PRG  ',
                '0    "HWI20YEARS"                  PRG  ',
                '0    "GTW"                         PRG  ',
                "0 BLOCKS FREE.                     PRG  ",
                "?ERROR                                  ",
                "ACCESS DENIED!                          ",
                "PLEASE, USE YOUR CREDENTIAL TO LOGIN.   ",
                'Try with "help" command.                ',
                "Type quit to exit.                      ",
                " #          TARGET ACQUIRED!          # ",
                "              STRIKE IN...              ",
                "              555555555555              ",
                "              55                        ",
                "              55                        ",
                "              555555555555              ",
                "                        55              ",
                "                        55              ",
                "              555555555555              ",
                "                      44                ",
                "                    4444                ",
                "                  44  44                ",
                "                44    44                ",
                "              444444444444              ",
                "                      44                ",
                "                      44                ",
                "              333333333333              ",
                "                        33              ",
                "                        33              ",
                "              333333333333              ",
                "                        33              ",
                "                        33              ",
                "              333333333333              ",
                "              222222222222              ",
                "                        22              ",
                "                        22              ",
                "              222222222222              ",
                "              22                        ",
                "              22                        ",
                "              222222222222              ",
                "                    11                  ",
                "                  1111                  ",
                "                    11                  ",
                "                    11                  ",
                "                    11                  ",
                "                    11                  ",
                "                  111111                ",
                " #              TARGET HIT!           # ",
                "SEARCHING FOR ",
                "LOADING                                 ",
                "RUNNING A GAME FROM:                    ",
                "              ##############            ",
                "              # PROCESSING #            ",
                "Disconnecting....                       ",
                "# Welcome to Amazon Teleport Prime.    #",
                "# Enter the ATP Product Code followed  #",
                '0    "ATP"                         PRG  ',
                "# by your Personal Id to purchase our  #",
                "# products.   >:ProductId,yourID       #",
                "########################################",
                "# Dear Customer, thanks for your order #",
                "# The product will be shipped in few   #",
                "# seconds.                             #",
                "# The ATP team.                        #",
                "# For any questions or problems,       #",
                "# contact our free h24 support.        #",
                "#                                      #" //93
            ];
            this.msgs = [
                [0, 1, 0, 2, 0, 3],
                [0, 4, 5, 6, 7],
                [0, 8, 0, 9, 0, 10, 11, 10, 0, 12, 13, 0],
                [0, 14, 5, 15, 16, 3],
                [0, 17, 5, 18, 19, 20, 21, 22, 23, 3],
                [0, 24, 25, 26, 27, 28, 83, 29, 30, 31, 3],
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
                [0, 86, 93, 81, 93, 82, 84, 93, 85, 93, 86, 0],
                [0, 86, 93, 87, 88, 89, 91, 92, 93, 90, 93, 86, 0] //amazon order 17
            ];
            this.emptyString = this.rows[0];
            this.readyString = this.rows[3];
            this.errors = [
                "Too many fingers on keyboard error!     ",
                "Syntax Terror!                          ",
                "Something bad happened.                 ",
                "Guru meditation error!                  ",
                "Too much for this terminal.             ",
                "Catastrophic Failure Error!             ",
                "The master of all errors happened!      ",
                "This time, it’s the human’s fault.      ",
                "User fault, it’s not our error!         ",
                "You performed an illegal operation.     ",
                "Kernel Panic!                           ",
                "404 File Not Found!                     ",
                "Error 500 SERVER Not Found!             ",
                "Random error just to annoy you!         ",
                "User error - Replace user!              ",
                "This error should not occour!           ",
                "Run as fast as you can & don’t look back",
                "User error. Go stand in the corner!     "
            ];
            this.clearString = { text: this.emptyString, delay: 0 };
            this.lettersObj = [];
            this.currentElement = 0;
            this.tint = 0x6c5eb5;
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
                this.lettersObj.push(this.scene.add.bitmapText(220, 16 * i + 90, "commodore", "", 16));
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
            return index * 16 + this.cursorOffsetX;
        };
        TerminalLogic.prototype.setCursorY = function (index) {
            return index * 16 + this.cursorOffsetY;
        };
        TerminalLogic.prototype.getCursorCol = function () {
            return (this.cursor.x - this.cursorOffsetX) / 16;
        };
        TerminalLogic.prototype.getCursorRow = function () {
            return (this.cursor.y - this.cursorOffsetY) / 16;
        };
        TerminalLogic.prototype.reset = function () {
            // console.log("reset")
            this.clear();
            this.gameLoaded = "";
            this.writeMultiple(this.returnStaticString(msgs.reset, 0));
        };
        TerminalLogic.prototype.enableInput = function () {
            this.inputIsDisabled = false;
            this.showCursor();
        };
        TerminalLogic.prototype.disableInput = function () {
            //console.log("disable");
            this.inputIsDisabled = true;
            this.hideCursor();
        };
        TerminalLogic.prototype.hideCursor = function () {
            this.cursor.alpha = 0;
        };
        TerminalLogic.prototype.showCursor = function () {
            this.cursor.alpha = 1;
        };
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
        TerminalLogic.prototype.returnLogin = function () {
            return this.returnStaticString(msgs.loginError, 0);
        };
        TerminalLogic.prototype.returnAtp = function () {
            return this.returnStaticString(msgs.amazonLogin, 0);
        };
        TerminalLogic.prototype.returnCommands = function () {
            return this.returnStaticString(msgs.commandList, 0);
        };
        TerminalLogic.prototype.returnGames = function () {
            return this.returnStaticString(msgs.gameList, 0);
        };
        TerminalLogic.prototype.returnVersion = function () {
            return this.returnStaticString(msgs.version, 0);
        };
        TerminalLogic.prototype.returnCredits = function () {
            return this.returnStaticString(msgs.credits, 0);
        };
        TerminalLogic.prototype.returnProcessing = function () {
            return this.returnStaticString(msgs.processing, 0);
        };
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
                { text: this.rows[3], delay: 0 }
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
        TerminalLogic.prototype.displayAtpShell = function (error) {
            this.clear();
            this.isShell = true;
            this.shellType = shell.atp;
            this.returnAtpShell(">:", error);
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
            if (this.isShell) {
                if (col > this.shellStart) {
                    this.lettersObj[row].text = this.replaceAt(this.lettersObj[row].text, col - 1, " ");
                    this.cursor.x = this.setCursorX(col - 1);
                    this.login = this.login.substr(0, this.login.length - 1);
                }
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
            // console.log(key);
            var col = this.getCursorCol();
            var row = this.getCursorRow();
            if (this.isShell) {
                if (col == this.shellStart + this.shellEnd)
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
        TerminalLogic.prototype.returnAtpShell = function (shellString, error) {
            if (error === void 0) { error = false; }
            this.login = "";
            this.clear();
            this.writeMultiple(this.returnAtp());
            this.write(this.returnReady(shellString), false);
            this.setCursor(0, this.returnAtp().length + 1);
            if (error)
                this.writeMultiple(this.returnLoginError("ORDER NOT VALID!"));
            this.isShell = true;
            this.shellStart = shellString.length;
            this.shellEnd = 10;
            this.isShellLogin = false;
            this.setCursor(shellString.length, this.returnAtp().length);
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
        TerminalLogic.prototype.checkOrder = function (order) {
            //B071L9VDN4
            if (order == "quit")
                return 0;
            if (order.length > 15)
                return -1;
            var _pos = order.indexOf(",");
            if (_pos == -1 || _pos == 0 || _pos == order.length - 1)
                return -1;
            var _coo = order.split(",");
            if (!this.checkNumber(_coo[1]))
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
            this.writeMultiple([
                { text: this.rows[77], delay: 0 },
                { text: url, delay: 0 }
            ]);
            this.write(this.returnReady());
        };
        TerminalLogic.prototype.sendOrder = function (itemId) {
            var _this = this;
            //console.log(itemId);
            this.clear();
            this.clearShell();
            this.writeMultiple(this.returnStaticString(msgs.amazonOrder, 0));
            this.disableInput();
            this.scene.time.delayedCall(4000, function () {
                _this.terminal.hide();
                _this.scene.gameItemsUtils.addItem(13);
                _this.scene.gameItemsUtils.beamIn(_this.scene.gameItemsUtils.getItemById(13));
            }, null, this);
        };
        TerminalLogic.prototype.hitTarget = function () {
            //this.terminal.currentState.shootFromHigh([17]);
            //this.terminal.hide();
            //return;
            var _this = this;
            this.clearShell();
            this.clear();
            this.writeMultiple(this.returnStaticString(msgs.targetAquired, 0));
            var _loop_3 = function (i) {
                this_2.scene.time.addEvent({
                    delay: 1000 * i,
                    callback: function () {
                        _this.writeMultiple(_this.returnStaticString(8 + i, 0));
                        if (i == 5)
                            _this.scene.time.addEvent({
                                delay: 1000,
                                callback: function () {
                                    _this.terminal.hide();
                                    _this.terminal.scene.shootFromHigh([27]);
                                },
                                callbackScope: _this
                            });
                    },
                    callbackScope: this_2
                });
            };
            var this_2 = this;
            for (var i = 0; i < 6; i++) {
                _loop_3(i);
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
            /*console.log(
              "row: " + row,
              "command: " + command,
              "login: " + this.login,
              "shelltype: " + this.shellType
            );*/
            if (this.isShell) {
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
                    case 2:
                        switch (this.login) {
                            case "quit":
                                this.clear();
                                this.write(this.returnReady());
                                this.clearShell();
                                break;
                            default:
                                //console.log("atp default case");
                                this.ajaxCall({ who: "order", order: this.login });
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
                        switch (this.gameLoaded.toLowerCase()) {
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
                            case "falken":
                                this.writeMultiple([
                                    { text: this.emptyString, delay: 0 },
                                    {
                                        text: "Sintax error on line " +
                                            Phaser.Math.RND.integerInRange(1000, 2000),
                                        delay: 0
                                    },
                                    { text: "File corrupted.", delay: 0 },
                                    { text: this.rows[3], delay: 0 }
                                ]);
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
                    case 'load "bocconcini dev"':
                        this.writeMultiple(this.returnLoading("BOCCONCINI DEV"));
                        this.gameLoaded = "bocconcini dev";
                        break;
                    case 'load "xmas2k16"':
                        this.writeMultiple(this.returnLoading("XMAS2K16"));
                        this.gameLoaded = "xmas2k16";
                        break;
                    case 'load "hwi20years"':
                        this.writeMultiple(this.returnLoading("HWI20YEARS"));
                        this.gameLoaded = "hwi20years";
                        break;
                    case 'load "the wrong direction"':
                        this.writeMultiple(this.returnLoading("THE WRONG DIRECTION"));
                        this.gameLoaded = "the wrong direction";
                        break;
                    case 'load "falken\'s maze"':
                        this.writeMultiple(this.returnLoading("FALKEN'S MAZE"));
                        this.gameLoaded = "falken";
                        break;
                    case 'load "atp"':
                    case "load":
                        this.displayAtpShell(false);
                        break;
                    case 'load "gtw"':
                        //case "load":
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
            var _this = this;
            //console.log(data);
            this.disableInput();
            this.writeMultiple(this.returnProcessing());
            var _this = this;
            $.ajax({
                url: "http://www.zero89.it/api/script/adventure/core.aspx",
                dataType: "script",
                type: "GET",
                data: data
            })
                .done(function () {
                _this.enableInput();
            })
                .fail(function (xhr) {
                //console.log(xhr)
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
            letters.forEach(function (element) {
                _this.write(element);
            });
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
var z89;
(function (z89) {
    var Transition = (function (_super) {
        __extends(Transition, _super);
        function Transition(scene) {
            var _this = _super.call(this, scene, 0, 0) || this;
            _this.transitions = gameData.transitions;
            _this.scene = scene;
            _this.setScrollFactor(0);
            _this.transitions = gameData.transitions;
            _this.blocksGroup = _this.scene.add.group({
                key: "transitionBlock",
                repeat: 150,
                setScale: { x: 0, y: 0 }
            });
            Phaser.Actions.GridAlign(_this.blocksGroup.getChildren(), {
                width: 15,
                cellWidth: 72,
                cellHeight: 72,
                x: 36,
                y: 36
            });
            _this.scene.add.existing(_this);
            return _this;
        }
        Transition.prototype.show = function (callback, type) {
            this.scene.disableInteraction();
            type = 1;
            this.doTransition(true, type, callback);
        };
        Transition.prototype.hide = function () {
            this.scene.enableInteraction();
            this.scene.player.setAlpha(1);
            this.doTransition(false, 1);
        };
        Transition.prototype.doTransition = function (isIn, type, callback) {
            var _this = this;
            var _transition = this.transitions[type];
            var _scaleX = 1;
            var _scaleY = 1;
            if (!isIn) {
                _scaleX = 0;
                _scaleY = 0;
            }
            switch (type) {
                case z89.transitionType.standard:
                    _transition.sequence.forEach(function (element, index) {
                        //console.log(element, index);
                        var child = _this.blocksGroup.getFirstNth(index, true);
                        child
                            .setDepth(2000)
                            .setName("child-" + index)
                            .setScrollFactor(0);
                        //console.log(child);
                        _this.scene.tweens.add({
                            targets: child,
                            scaleX: _scaleX,
                            scaleY: _scaleY,
                            angle: 180,
                            _ease: "Sine.easeInOut",
                            ease: "Power2",
                            duration: 500,
                            delay: index * _transition.delay,
                            repeat: 0,
                            onComplete: function () {
                                if (child.name == "child-" + _transition.end && isIn) {
                                    if (callback != undefined)
                                        callback();
                                }
                            }
                        });
                    });
                    break;
                case z89.transitionType.spiral:
                    _transition.sequence.forEach(function (element, index) {
                        //console.log(element, index);
                        var child = _this.blocksGroup.getFirstNth(element[0], true);
                        child
                            .setDepth(2000)
                            .setName("child-" + element[0])
                            .setScrollFactor(0);
                        //console.log(child);
                        _this.scene.tweens.add({
                            targets: child,
                            scaleX: _scaleX,
                            scaleY: _scaleY,
                            angle: 180,
                            _ease: "Sine.easeInOut",
                            ease: "Power2",
                            duration: 500,
                            delay: index * _transition.delay,
                            repeat: 0,
                            onComplete: function () {
                                if (child.name == "child-" + _transition.end && isIn) {
                                    if (callback != undefined)
                                        callback();
                                }
                            }
                        });
                    });
                    break;
            }
        };
        return Transition;
    }(Phaser.GameObjects.Container));
    z89.Transition = Transition;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var Viewer = (function (_super) {
        __extends(Viewer, _super);
        function Viewer(scene) {
            var _this = _super.call(this, scene, -1080, 0) || this;
            _this.currentIndex = 0;
            _this.isAnim = false;
            _this.fontFamily = "commodore";
            _this.isLoading = false;
            _this.scene = scene;
            _this.setScrollFactor(0).setAlpha(0);
            _this.layer = _this.scene.add.sprite(540, 360, "menu-phone-bg");
            _this.layer
                .setInteractive()
                .setAlpha(0.75)
                .setScrollFactor(0)
                .addListener("pointerdown", function () {
                _this.hide();
            });
            _this.textLayer = _this.scene.add.sprite(540, 680, "chapterTitleBg");
            _this.textLayer.setAlpha(0.85);
            _this.text = _this.scene.add
                .bitmapText(540, 640, _this.fontFamily, "", 20)
                .setOrigin(0.5, 0)
                .setTint(0x00ff00)
                .setDepth(3000)
                .setScrollFactor(0);
            _this.arrowLeft = _this.scene.add.sprite(100, 360, "triangleBtn");
            _this.image = _this.scene.add.image(540, 360, "");
            _this.arrowLeft
                .setInteractive()
                .setAngle(-90)
                .setScale(2)
                .setScrollFactor(0);
            _this.arrowLeft.addListener("pointerdown", function () {
                _this.prevImage();
            });
            _this.arrowRight = _this.scene.add.sprite(980, 360, "triangleBtn");
            _this.arrowRight
                .setInteractive()
                .setAngle(90)
                .setScale(2)
                .setScrollFactor(0);
            _this.arrowRight.addListener("pointerdown", function () {
                _this.nextImage();
            });
            _this.spinner = _this.scene.add.sprite(540, 360, "spinner");
            _this.spinner.setOrigin(0.5).setAlpha(0);
            _this.add([
                _this.layer,
                _this.image,
                _this.arrowLeft,
                _this.arrowRight,
                _this.textLayer,
                _this.text,
                _this.spinner
            ]);
            _this.scene.add.existing(_this);
            return _this;
        }
        Viewer.prototype.prevImage = function () {
            if (this.isAnim)
                return;
            this.currentIndex--;
            if (this.currentIndex < 0)
                this.currentIndex = this.images.length - 1;
            //console.log("prev", this.currentIndex);
            this.displayImage();
        };
        Viewer.prototype.nextImage = function () {
            if (this.isAnim)
                return;
            this.currentIndex++;
            if (this.currentIndex > this.images.length - 1)
                this.currentIndex = 0;
            //console.log("next", this.currentIndex);
            this.displayImage();
        };
        Viewer.prototype.displayImage = function () {
            var _this = this;
            this.isAnim = true;
            this.scene.tweens.add({
                targets: this.text,
                duration: 100,
                alpha: 0,
                onComplete: function () {
                    _this.text.setText("");
                }
            });
            this.scene.tweens.add({
                targets: this.image,
                scaleY: 0,
                scaleX: 0,
                alpha: 0,
                ease: null,
                duration: 200,
                onComplete: function () {
                    if (_this.images[_this.currentIndex].text != undefined)
                        _this.text.setText(_this.images[_this.currentIndex].text);
                    else
                        _this.text.setText("");
                    // console.log("zeroImg" + this.images[this.currentIndex].image);
                    _this.image.setTexture("zeroImg" + _this.images[_this.currentIndex].image);
                    _this.scene.tweens.add({
                        targets: [_this.image, _this.text],
                        scaleY: 1,
                        scaleX: 1,
                        alpha: 1,
                        ease: "Bounce.easeOut",
                        duration: 500,
                        onComplete: function () {
                            _this.isAnim = false;
                        }
                    });
                }
            });
        };
        Viewer.prototype.preload = function (images, callback) {
            var _this = this;
            this.scene.tweens.add({
                targets: this.spinner,
                alpha: 1,
                ease: null,
                duration: 500,
                onComplete: function () { }
            });
            this.isLoading = true;
            this.image.setAlpha(0);
            this.images = images;
            if (callback != undefined)
                this.callback = callback;
            if (this.images.length == 1) {
                this.arrowLeft.setAlpha(0);
                this.arrowLeft.setAlpha(0);
            }
            this.setX(0);
            this.scene.disableInteraction();
            this.scene.tweens.add({
                targets: this,
                scaleY: 1,
                scaleX: 1,
                alpha: 1,
                ease: null,
                duration: 200,
                onComplete: function () { }
            });
            images.forEach(function (element) {
                _this.scene.load.image({
                    key: "zeroImg" + element.image,
                    url: element.url
                });
            });
            this.scene.load.on("fileprogress", function (file, progress) {
                if (_this.isLoading) {
                    _this.spinner.setAngle(_this.spinner.angle + 2);
                }
            });
            this.scene.load.on("complete", function () {
                _this.show();
                _this.isLoading = false;
            });
            this.scene.load.start();
        };
        Viewer.prototype.show = function () {
            this.scene.tweens.add({
                targets: this.image,
                alpha: 1,
                ease: null,
                duration: 500,
                onComplete: function () { }
            });
            this.scene.tweens.add({
                targets: this.spinner,
                alpha: 0,
                ease: null,
                duration: 500,
                onComplete: function () { }
            });
            this.image.setTexture("zeroImg" + this.images[0].image);
            if (this.images[this.currentIndex].text != undefined)
                this.text.setText(this.images[this.currentIndex].text).setAlpha(1);
            else
                this.text.setText("").setAlpha(1);
        };
        Viewer.prototype.hide = function () {
            var _this = this;
            this.currentIndex = 0;
            this.scene.enableInteraction();
            this.scene.tweens.add({
                targets: [this, this.text],
                scaleY: 1,
                scaleX: 1,
                alpha: 0,
                ease: null,
                duration: 200,
                onComplete: function () {
                    _this.setX(-1080);
                    if (_this.callback != undefined)
                        _this.callback();
                }
            });
        };
        return Viewer;
    }(Phaser.GameObjects.Container));
    z89.Viewer = Viewer;
})(z89 || (z89 = {}));
var z89;
(function (z89) {
    var testPipeline = (function (_super) {
        __extends(testPipeline, _super);
        function testPipeline(config) {
            var _this = this;
            config['fragShader'] = "\n\n            precision mediump float;\n            uniform float rand;\n            uniform vec4 uResolution;\n            uniform sampler2D uMainSampler;\n            varying vec2 outTexCoord;\n\nvoid main (void)\n{\n   vec4 col = texture2D(uMainSampler, outTexCoord);\n   vec4 col_r = texture2D(uMainSampler, outTexCoord + vec2((+25.5 / uResolution.x) * rand, 0));\n   vec4 col_l = texture2D(uMainSampler, outTexCoord + vec2((.0 / uResolution.x) * rand, 0));\n   vec4 col_g = texture2D(uMainSampler, outTexCoord + vec2((-25.5 / uResolution.x) * rand, 0));\n   col.g = col.g + col_l.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;\n   col.g = col.g + col_r.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;\n   col.g = col.g + col_g.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;\n   gl_FragColor.rgba = col.rgba;\n}\n\n\n\n\n\n            ";
            /*`



            precision mediump float;
            uniform float rand;
            uniform vec4 uResolution;
            uniform sampler2D uMainSampler;
            varying vec2 outTexCoord;

void main (void)
{
   vec4 col = texture2D(uMainSampler, outTexCoord);
   vec4 col_r = texture2D(uMainSampler, outTexCoord + vec2((+25.5 / uResolution.x) * rand, 0));
   vec4 col_l = texture2D(uMainSampler, outTexCoord + vec2((.0 / uResolution.x) * rand, 0));
   vec4 col_g = texture2D(uMainSampler, outTexCoord + vec2((-25.5 / uResolution.x) * rand, 0));
   col.g = col.g + col_l.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   col.g = col.g + col_r.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   col.g = col.g + col_g.g * max(1.0, sin(outTexCoord.y * uResolution.y * 1.2) * 2.5) * rand;
   gl_FragColor.rgba = col.rgba;
}



            precision mediump float;

            uniform sampler2D uMainSampler;
            uniform vec2 uResolution;
            uniform float uTime;

            varying vec2 outTexCoord;
            varying vec4 outTint;

            vec4 plasma()
            {
                vec2 pixelPos = gl_FragCoord.xy / uResolution * 20.0;
                float freq = 0.8;
                float value =
                    sin(uTime + pixelPos.x * freq) +
                    sin(uTime + pixelPos.y * freq) +
                    sin(uTime + (pixelPos.x + pixelPos.y) * freq) +
                    cos(uTime + sqrt(length(pixelPos - 0.5)) * freq * 2.0);

                return vec4(
                    cos(value),
                    sin(value),
                    sin(value * 3.14 * 2.0),
                    cos(value)
                );
            }

            void main()
            {
                vec4 texel = texture2D(uMainSampler, outTexCoord);
                texel *= vec4(outTint.rgb * outTint.a, outTint.a);
                gl_FragColor = texel * plasma();
            }

            `;*/
            _this = _super.call(this, config) || this;
            return _this;
        }
        return testPipeline;
    }(Phaser.Renderer.WebGL.Pipelines.TextureTintPipeline));
    z89.testPipeline = testPipeline;
})(z89 || (z89 = {}));
