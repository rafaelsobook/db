import { Vector3, Quaternion } from 'babylonjs'

export class Character {
    constructor(scene, position) {
        this.scene = scene
        this.position = position
        this.mesh = null
        this.animations = []
        this.isMoving = false
        this.isAttacking = false
    }

    async load() {
        // Load character mesh and animations
    }

    move(direction) {
        if (this.isAttacking) return
        
        this.isMoving = true
        // Movement logic
    }

    attack() {
        if (this.isMoving) return
        
        this.isAttacking = true
        // Attack logic
    }
} 