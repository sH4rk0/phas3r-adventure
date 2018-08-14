namespace z89 {
  export class TerminalKeyboard {
    private scene: GameCity;
    private terminal: Terminal;
    private keys: Array<any> = [
      { v: "Q", x: 192 + 40 + 6, y: 49+510, w: 1, h: 1 },

   
            { v: 'W', x: 192 + (40 * 2) + (6 * 2), y: 49+510, w: 1, h: 1 },
            { v: 'E', x: 192 + (40 * 3) + (6 * 3), y: 49+510, w: 1, h: 1 },
            { v: 'R', x: 192 + (40 * 4) + (6 * 4), y: 49+510, w: 1, h: 1 },
            { v: 'T', x: 192 + (40 * 5) + (6 * 5), y: 49+510, w: 1, h: 1 },
            { v: 'Y', x: 192 + (40 * 6) + (6 * 6), y: 49+510, w: 1, h: 1 },
            { v: 'U', x: 192 + (40 * 7) + (6 * 7), y: 49+510, w: 1, h: 1 },
            { v: 'I', x: 192 + (40 * 8) + (6 * 8), y: 49+510, w: 1, h: 1 },
            { v: 'O', x: 192 + (40 * 9) + (6 * 9), y: 49+510, w: 1, h: 1 },
            { v: 'P', x: 192 + (40 * 10) + (6 * 10), y: 49+510, w: 1, h: 1 },
            { v: 'backspace', x: 192 + (40 * 11) + (6 * 11), y: 49+510, w: 1, h: 1 },

            { v: '7', x: 192 + (40 * 13) + (6 * 13), y: 49+510, w: 1, h: 1 },
            { v: '8', x: 192 + (40 * 14) + (6 * 14), y: 49+510, w: 1, h: 1 },
            { v: '9', x: 192 + (40 * 15) + (6 * 15), y: 49+510, w: 1, h: 1 },

            { v: 'A', x: 192 + 40 + 6, y: 49 + 51+510, w: 1, h: 1 },
            { v: 'S', x: 192 + (40 * 2) + (6 * 2), y: 49 + 51+510, w: 1, h: 1 },
            { v: 'D', x: 192 + (40 * 3) + (6 * 3), y: 49 + 51+510, w: 1, h: 1 },
            { v: 'F', x: 192 + (40 * 4) + (6 * 4), y: 49 + 51+510, w: 1, h: 1 },
            { v: 'G', x: 192 + (40 * 5) + (6 * 5), y: 49 + 51+510, w: 1, h: 1 },
            { v: 'H', x: 192 + (40 * 6) + (6 * 6), y: 49 + 51+510, w: 1, h: 1 },
            { v: 'J', x: 192 + (40 * 7) + (6 * 7), y: 49 + 51+510, w: 1, h: 1 },
            { v: 'K', x: 192 + (40 * 8) + (6 * 8), y: 49 + 51+510, w: 1, h: 1 },
            { v: 'L', x: 192 + (40 * 9) + (6 * 9), y: 49 + 51+510, w: 1, h: 1 },

            { v: 'enter', x: 192 + (40 * 11) + (6 * 11), y: 49 + 51 + 50+510, w: 1, h: 2  },

            { v: '4', x: 192 + (40 * 13) + (6 * 13), y: 49 + 51+510, w: 1, h: 1 },
            { v: '5', x: 192 + (40 * 14) + (6 * 14), y: 49 + 51+510, w: 1, h: 1 },
            { v: '6', x: 192 + (40 * 15) + (6 * 15), y: 49 + 51+510, w: 1, h: 1 },

            { v: 'Z', x: 192 + 40 + 6, y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'X', x: 192 + (40 * 2) + (6 * 2), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'C', x: 192 + (40 * 3) + (6 * 3), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'V', x: 192 + (40 * 4) + (6 * 4), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'B', x: 192 + (40 * 5) + (6 * 5), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'N', x: 192 + (40 * 6) + (6 * 6), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'M', x: 192 + (40 * 7) + (6 * 7), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'doublequote', x: 192 + (40 * 8) + (6 * 8), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'comma', x: 192 + (40 * 9) + (6 * 9), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'dot', x: 192 + (40 * 10) + (6 * 10), y: 49 + 51 + 50+510, w: 1, h: 1 },

            { v: '1', x: 192 + (40 * 13) + (6 * 13), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: '2', x: 192 + (40 * 14) + (6 * 14), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: '3', x: 192 + (40 * 15) + (6 * 15), y: 49 + 51 + 50+510, w: 1, h: 1 },
            { v: 'up', x: 192 + (40 * 16) + (6 * 16), y: 49 + 51 + 50+510, w: 1, h: 1 },

            { v: 'space', x: 192 + (40 * 2) + (6 * 2), y: 49 + 51 + 50 + 50+510, w: 9, h: 1 },

            { v: '0', x: 192 + (40 * 13) + (6 * 13), y: 49 + 51 + 50 + 50+510, w: 1, h: 1 },
            { v: 'left', x: 192 + (40 * 15) + (6 * 15), y: 49 + 51 + 50 + 50+510, w: 1, h: 1 },
            { v: 'down', x: 192 + (40 * 16) + (6 * 16), y: 49 + 51 + 50 + 50+510, w: 1, h: 1 },
            { v: 'right', x: 192 + (40 * 17) + (6 * 17), y: 49 + 51 + 50 + 50+510, w: 1, h: 1 },

            { v: 'help', x: 10 + 40 + 6, y: 49+510, w: 2, h: 1 },
            { v: 'clear', x: 10 + 40 + 6, y: 49 + 51+510, w: 2, h: 1 },
            { v: 'dir', x: 10 + 40 + 6, y: 49 + 51 + 50+510, w: 2, h: 1 },
            { v: 'exit', x: 10 + 40 + 6, y: 49 + 51 + 50 + 50+510, w: 2, h: 1 },
            
    ];

    private keyboard: Phaser.GameObjects.Sprite;

    constructor(scene: GameCity, terminal: Terminal) {
      this.scene = scene;

      this.terminal = terminal;

      
      this.keyboard = this.scene.add.sprite(0, 510, "terminalKeyboard");

      this.keyboard.setOrigin(0);
      
      this.terminal.add([this.keyboard]);


      // Phaser.Display.Align.In.BottomCenter(this.keyboard,this.terminal);

      let sprite: Phaser.GameObjects.Sprite;

      this.keys.forEach(e => {
        sprite = this.scene.add
          .sprite(e.x, e.y, "keyboardKey")
          .setOrigin(0, 1)
          .setName(e.v)
          .setScale(e.w,e.h)
          .setAlpha(.2)
          .setInteractive()
          .setScrollFactor(0);

          var _sprite=sprite;
        sprite.on("pointerdown", () => {
         
           this.pressKey(_sprite.name);
           _sprite.alpha = .5;
        });

        sprite.on("pointerup", () => {
            _sprite.alpha = .2;
         });

        this.terminal.add(sprite);

       
      });
    }

    pressKey(_key: string): void {
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
          let char = "";
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
    }

    destroy(): void {
      this.keyboard.destroy();
      console.log("destroy keyboard");
    }
  }
}
