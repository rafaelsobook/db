export const crafts = [
    {
        name: "basicSword",
        requirements: [
            { name: "iron", qnty: 2 },
            { name: "wood", qnty: 1 }
        ],
        result: {
            name: "basicSword",
            type: "weapon",
            damage: 10
        },
        level: 1
    },
    {
        name: "leatherArmor",
        requirements: [
            { name: "leather", qnty: 4 },
            { name: "thread", qnty: 2 }
        ],
        result: {
            name: "leatherArmor",
            type: "armor",
            defense: 5
        },
        level: 1
    },
    {
        name: "healthPotion",
        requirements: [
            { name: "herbs", qnty: 2 },
            { name: "water", qnty: 1 }
        ],
        result: {
            name: "healthPotion",
            type: "consumable",
            healing: 50
        },
        level: 1
    }
] 