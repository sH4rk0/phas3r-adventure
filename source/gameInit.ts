/// <reference path="Lib/phaser.d.ts"/>
/// <reference path="./Scenes/Boot.ts"/>
/// <reference path="./Scenes/Preloader.ts"/>
/// <reference path="./Scenes/GameCity.ts"/>
/// <reference path="GameObjects/GameItemsUtils.ts"/>

var _initGame;
namespace z89 {
  let _089Data: any;
  let _ismobile: boolean;
  let _gameSounds: Array<Phaser.Sound.BaseSound> = [];

  export function getLabel(_index: number): string {
    return languages[currentLang][_index];
  }

  export let _game: Phaser.Game = null;

  export function setZero89Data(_values: any): void {
    _089Data = _values;
  }
  export function getZero89Data(): any {
    return _089Data;
  }

  export function isOnline(): any {
    return navigator.onLine;
  }

  export function isMobile(): boolean {

    return _ismobile;
}

export function setDevice(isMobile: boolean): void {

    _ismobile = isMobile;
}

  export const _config = {
    type: Phaser.AUTO,
    pixelArt: true,
    roundPixels: true,
    parent: "my-game",
    width: 1080,
    height: 720,
    scene: [Boot, Preloader, GameCity],
    callbacks: {
      postBoot: (game) => {
          game.renderer.addPipeline(
              'testPipeline',
              new testPipeline({ 'game': game, 'renderer': game.renderer }));
      },
  },
  };

  export enum c64ColorsEnum {
    black = 0x000000,
    white = 0xffffff,
    red = 0x68372b,
    light_red = 0x9a6759,
    cyan = 0x70a4b2,
    purple = 0x6f3d86,
    green = 0x588d43,
    light_green = 0x9ad284,
    blue = 0x352879,
    yellow = 0xb8c76f,
    orange = 0x6f4f25,
    brown = 0x433900,
    dark_grey = 0x444444,
    grey = 0x6c6c6c,
    light_blue = 0x6c5eb5,
    light_grey = 0x959595
  }

  export function isSaved(): boolean {
    return true;
  }

  export function getUrlParameter(sParam: string): any {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  }

  export enum gameSound {
    intro
  }

  export function pushSound(_sound: Phaser.Sound.BaseSound): void {

     _gameSounds.push(_sound)

}

  export function getSound(_sound: gameSound): Phaser.Sound.BaseSound {

    return _gameSounds[_sound];

}

export function playSound(_sound: gameSound): void {

    _gameSounds[_sound].play();

}

export function stopSound(_sound: gameSound): void {

    _gameSounds[_sound].stop();

}

export function stopSoundAll(): void {

    _gameSounds.forEach((sound)=>{
        sound.stop();

    })
  

}



export function pauseSound(_sound: gameSound): void {

    _gameSounds[_sound].stop();

}

export function setSoundVolume(_sound: gameSound, _volume: number): void {

    _gameSounds[_sound].volume = _volume;

}

  export class initGame {
    private config: GameConfig;

    constructor(config: GameConfig) {
      this.config = config;
      
     // console.log(navigator.onLine);
      if(isOnline()){this.getContents()}else{ this.startLoading()}
    
    }

    startLoading() {
      _game = new Phaser.Game(this.config);
      this.resize();
    }

    getContents() {
      $.ajax({
        url: "http://www.zero89.it/api/jsonp/api/core.aspx",
        dataType: "jsonp",
        type: "GET",
        data: {
          token:
            "084068108072071097080066109079102085089083089118076100077050122071115089108097114118097053107074066112086106070047054051080100048121075083114116057050047047110048075074075065076120097088097043",
          format: "json"
        }
      })
        .done(function(data) {
          setZero89Data(data.values.value);
          _initGame.startLoading();
        })
        .fail(function(xhr) {
          console.log("error", xhr);

          _initGame.startLoading();
        });
    }

    resize() {

        var canvas = document.querySelector("canvas");
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        var gameRatio = z89._config.width / z89._config.height;
        if (windowRatio < gameRatio) {
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        } else {
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    
      }


  }


}

window.onresize = () => {

   _initGame.resize();

};

window.onload = () => {
  _initGame = new z89.initGame(z89._config);
};

/// <reference path="gameLanguages.ts"/>
/// <reference path="gameLogic-assets.ts"/>
/// <reference path="gameLogic-chapters.ts"/>
/// <reference path="gameLogic-ingame-conversation.ts"/>
/// <reference path="gameLogic-ingame-items.ts"/>
/// <reference path="gameLogic-ingame-logic.ts"/>
/// <reference path="gameLogic-menu.ts"/>
