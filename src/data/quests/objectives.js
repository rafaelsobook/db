export const objectives = [
    {
        id: "q1",
        name: "beginnerQuest",
        title: "A New Adventure",
        description: "Complete your basic training",
        objectives: [
            {
                type: "kill",
                target: "trainingDummy",
                count: 3,
                current: 0
            }
        ],
        rewards: {
            exp: 100,
            gold: 50,
            items: [
                { name: "basicSword", quantity: 1 }
            ]
        },
        level: 1,
        isStoryQuest: true
    },
    {
        id: "q2", 
        name: "gatheringQuest",
        title: "Resource Gatherer",
        description: "Gather basic materials for crafting",
        objectives: [
            {
                type: "gather",
                target: "wood",
                count: 5,
                current: 0
            },
            {
                type: "gather",
                target: "iron",
                count: 3,
                current: 0
            }
        ],
        rewards: {
            exp: 150,
            gold: 75,
            items: [
                { name: "craftingTools", quantity: 1 }
            ]
        },
        level: 2
    },
    {
        id: "q3",
        name: "monsterHunt",
        title: "Monster Hunter",
        description: "Clear the forest of dangerous creatures",
        objectives: [
            {
                type: "kill",
                target: "goblin",
                count: 5,
                current: 0
            },
            {
                type: "kill",
                target: "wolf",
                count: 3,
                current: 0
            }
        ],
        rewards: {
            exp: 300,
            gold: 200,
            items: [
                { name: "hunterBadge", quantity: 1 }
            ]
        },
        level: 5
    }
]

export const questTypes = {
    KILL: "kill",
    GATHER: "gather",
    EXPLORE: "explore",
    ESCORT: "escort",
    DEFEND: "defend"
}

export const questStatus = {
    AVAILABLE: "available",
    IN_PROGRESS: "inProgress",
    COMPLETED: "completed",
    FAILED: "failed"
} 