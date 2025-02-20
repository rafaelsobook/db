import { Vector3, SceneLoader, MeshBuilder } from 'babylonjs'

export class NPC {
    constructor(scene, BABYLON, pos, dirTarg, suit) {
        this.scene = scene
        this.BABYLON = BABYLON
        this.pos = pos
        this.dirTarg = dirTarg
        this.suit = suit
    }

    async init() {
        const npcId = Math.random().toString().split(".")[1]
        // ... rest of initialization code
    }

    // ... other methods
} 