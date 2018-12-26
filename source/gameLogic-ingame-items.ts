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
    x: 600, //1440,
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
