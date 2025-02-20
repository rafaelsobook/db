// From creations/monsterInfo.js
export const monsters = [
    { 
        monsId: makeRandNum(), 
        place: "hiddenland",
        monsLvl: 2,
        monsName: "golem",
        // ... other monster properties
    },
    // ... other monsters
]

function makeRandNum() {
    return Math.random().toString().split(".")[1]
} 