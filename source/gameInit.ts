/// <reference path="Lib/phaser.d.ts"/>
/// <reference path="./Scenes/Boot.ts"/>
/// <reference path="./Scenes/Preloader.ts"/>
/// <reference path="./Scenes/GameCity.ts"/>
/// <reference path="GameObjects/GameItemsUtils.ts"/>

module z89 {

    export function getLabel(_index: number): string {
        return languages[currentLang][_index];
    }

    export let _game:Phaser.Game=null;

    export const _config = {
         
        type: Phaser.AUTO,
        pixelArt: true,
        roundPixels: true,
        parent: 'my-game',
        width: 1080,
        height: 720,
        scene: [
            Boot,
            Preloader,
            GameCity
        ]
    };

    export enum c64ColorsEnum {
        black = 0x000000,
        white = 0xffffff,
        red = 0x68372b,
        light_red = 0x9A6759,
        cyan = 0x70A4B2,
        purple =  0x6F3D86,
        green = 0x588D43,
        light_green = 0x9AD284,
        blue = 0x352879,
        yellow = 0xB8C76F,
        orange = 0x6F4F25,
        brown = 0x433900,
        dark_grey = 0x444444,
        grey = 0x6C6C6C,
        light_blue = 0x6C5EB5,
        light_grey = 0x959595
    }

    export function isSaved(): boolean { return true; }

    export function getUrlParameter(sParam: string): any {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };


    export class initGame{


        constructor(config: GameConfig) {

           
            _game= new Phaser.Game(config);


        }


        

        }

       

    }


    window.onresize = () => { }

    window.onload = () => {  new z89.initGame(z89._config); }






/// <reference path="gameLanguages.ts"/>
/// <reference path="gameLogic-assets.ts"/>
/// <reference path="gameLogic-chapters.ts"/>
/// <reference path="gameLogic-ingame-conversation.ts"/>
/// <reference path="gameLogic-ingame-items.ts"/>
/// <reference path="gameLogic-ingame-logic.ts"/>
/// <reference path="gameLogic-menu.ts"/>



