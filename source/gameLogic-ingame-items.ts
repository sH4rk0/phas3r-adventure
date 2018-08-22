
    gameData.ingame.items = [

      

        {
            id: 50,
            type: 4,
            onStart: true,
            sprite: "skills",
            name: z89.getLabel(79),
            x:1161+174,
            y: 4+215-48,
            interactive: false,
            offsetX: 0,
            isStarted:false,
            fixedToCamera: false,
            checkIntersect: false,
            working:false

        },
        {
            id: 21,
            type: 1,
            onStart: true,
            animations: [{ name: "idle", frames: [0, 1], rate: 1, loop: true }],
            sprite: "devday",
            currentAnimation:"idle",
            name: z89.getLabel(61),
            x: 869,
            y: 218-48,
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
            isStarted:false,
            contexts: ["devday"],
            //working:false

        },

        {
            id: 4,
            type: 1,
            onStart: true,
            sprite: "trash",
            name: z89.getLabel(16),
            x: 450,
            y: 649-48,
            interactive: true,
            firstMessage: [z89.getLabel(18)],
            offsetX: 50,
            fixedToCamera: false,
            checkIntersect: false,
            moved:false

        },

        
        {
            id: 19,
            type: 1,
            onStart: true,
            sprite: "michele",
            animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5, loop: true }],
            currentAnimation:"idle",
            conversationStatus:null,
            name: z89.getLabel(31),
            x: 800,
            y: 650-48,
            interactive: true,
            offsetX: 80,
            fixedToCamera: false,
            checkIntersect: false
           
         

        },
      
        {
            id: 100,
            type: 6,
            onStart: true,
            sprite: "walkers",
             animations: [{ name: "idle", frames: [40, 41, 42, 43], rate: 5, loop: true },{ name: "walking", frames: [44,45,46,47,48,49], rate: 5, loop: true },{ name: "running", frames: [50,51,52,53,54,55,56,57], rate: 8, loop: true }],

            currentAnimation:"idle",
            conversationStatus:null,
            name: "Bad Boy",//z89.getLabel(31),
            x: 1800,
            y: 700,
            interactive: true,
            offsetX: 80,
            fixedToCamera: false,
            checkIntersect: false,
            insight:{distance:100, behaviour:"idler", offsetY:30},
            walkRange:{start:100,end:3000},
            jumpChance:20

        }, 
        {
            id: 101,
            type: 6,
            onStart: true,
            sprite: "walkers",
            animations: [{ name: "idle", frames: [20, 21, 22, 23], rate: 5, loop: true },{ name: "walking", frames: [24,25,26,27,28,29], rate: 5, loop: true },{ name: "running", frames: [30,31,32,33,34,35,36,37], rate: 8, loop: true }],
            currentAnimation:"idle",
            conversationStatus:null,
            name: "Bad Boy 2",//z89.getLabel(31),
            x: 1000,
            y: 700,
            interactive: true,
            offsetX: 80,
            fixedToCamera: false,
            checkIntersect: false,
            insight:{distance:300, behaviour:"jumper", offsetY:50},
            walkRange:{start:100,end:3000},
            jumpChance:0

        }, 
       {
            id: 102,
            type: 6,
            onStart: true,
            sprite: "walkers",
          
           animations: [{ name: "idle", frames: [0, 1, 2, 3], rate: 5, loop: true },{ name: "walking", frames: [4,5,6,7,8,9], rate: 5, loop: true },{ name: "running", frames: [10,11,12,13,14,15,16,17], rate: 8, loop: true }],

            currentAnimation:"idle",
            conversationStatus:null,
            name: "Bad Boy 3",//z89.getLabel(31),
            x: 2000,
            y: 700,
            interactive: true,
            offsetX: 80,
            fixedToCamera: false,
            checkIntersect: false,
            insight:{distance:200, behaviour:"runner", offsetY:50},
            walkRange:{start:0,end:3600},
            jumpChance:0

        }, 
 
        {
            id: 103,
            type: 6,
            onStart: true,
            sprite: "walkers",
            animations: [{ name: "idle", frames: [60, 61, 62, 63], rate: 5, loop: true },{ name: "walking", frames: [64,65,66,67,68,69], rate: 5, loop: true },{ name: "running", frames: [70,71,72,73,74,75,76,77], rate: 8, loop: true }],
            currentAnimation:"idle",
            conversationStatus:null,
            name: "Bad Boy 4", //z89.getLabel(31),
            x: 2500,
            y: 610,
            interactive: true,
            offsetX: 80,
            fixedToCamera: false,
            checkIntersect: false,
            insight:{distance:100, behaviour:"idler", offsetY:30},
            walkRange:{start:100,end:3000},
            jumpChance:20

        },
        
        {
            id: 17,
            type: 1,
            onStart: true,
            sprite: "daniele",
            animations: [{ name: "idle", frames: [1, 2, 3, 0], rate: 4.5, loop: true }],
            name: z89.getLabel(41),
            currentAnimation:"idle",
            x: 1040,
            y: 650-48,
            turnLeft: true,
            interactive: true,
            offsetX: 80,
            fixedToCamera: false,
            checkIntersect: false,
            
        },{
            id: 27,
            type: 1,
            onStart: false,
            sprite: "daniele",
            animations: [{ name: "idle", frames: [1, 2, 3, 0], rate: 4.5, loop: true }],
            name: z89.getLabel(96),
            currentAnimation:"idle",
            x: 600,//1440,
            y: 650-48,
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
            currentAnimation:"idle",
            x: 950,
            y: 650-48,
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
            currentAnimation:"idle",
            x: 720,
            y: 650-48,
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
            name:  z89.getLabel(56),
            animations: [{ name: "fixed", frames: [9,8,7,6,5,4,3,2,1], rate: 15, loop: true },{ name: "broken", frames: [19,18,17,16,15,14,13,12,11,10], rate: 15, loop: true }],
            currentAnimation:"broken",
            x: 650,
            y: 600-48, 
            interactive: true,
            offsetX: 30,
            fixedToCamera: false,
            checkIntersect: false,
            fixed:false

        },

        {
            id: 24,
            type: 1,
            sprite: "scotch",
            onStart: true,
            name: z89.getLabel(55),
            x: 450,
            y: 648-48,
            interactive: true,
            offsetX: 30,
            fixedToCamera: false,
            checkIntersect: false

        }, 
        
        {
            id: 30,
            type: 1,
            sprite: "bitcoin",
            onStart: false,
            name: "bitcoin",//z89.getLabel(55),
            x: 400,
            y: 700-48,
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
            name: "blockchain",//z89.getLabel(55),
            x: 500,
            y: 700-48,
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
            name: "invite",//z89.getLabel(55),
            x: 400,
            y: 648-48,
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
            name: "coins",//z89.getLabel(55),
            x: 940,
            y: 740-48,
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
            animations: [{ name: "notWorking", frames: [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4], rate: 5, loop: true },{ name: "working", frames: [5, 6], rate: 1, loop: true }],
            currentAnimation:"notWorking",
            working:false,
            name: z89.getLabel(12),
            x: 1214,
            y: 644-48,
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
            animations: [{ name: "idle", frames: [0,1,2,3,4,5,6,7,8], rate: 10, loop: true }],
            currentAnimation:"idle",
            name: "cake",
            x: 1679,
            y: 290-48,
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
            y: 680,
            animations: [{ name: "idle", frames: [0,1], rate: 1, loop: true }],
            currentAnimation:"idle",
            onStart: true,
            interactive: true,
            offsetX: 70,
            fixedToCamera: true,
            checkIntersect: true


        },



        {
            id: 3,
            type: 1,
            sprite: "coke",
            onStart: false,
            name: z89.getLabel(10),
            x: 800,
            y: 724-48,
            interactive: true,
            offsetX: 30,
            fixedToCamera: false,
            checkIntersect: false

        }, 


        {
            id: 11,
            type: 1,
            sprite: "jukebox",
            name: z89.getLabel(88),
            x: 2450,
            y: 650-48,
            animations: [{ name: "idle", frames: [0], rate: 1, loop: false },{ name: "play", frames: [1,2,3,4,5,6,7,2,4,6,3,1,6,3,4,6,5,7,2,5,3,4], rate: 14, loop: true }],
            currentAnimation:"play",
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
         y: 650-48,
         currentAnimation:"idle",
         onStart: true,
         interactive: false,
         offsetX: 70,
         fixedToCamera: false,
         checkIntersect: false
 
 
     }




    ]













