import { Engine, Scene, Vector3, Matrix, Texture, ShadowGenerator, GlowLayer } from 'babylonjs'
import "babylonjs-loaders"

export class SceneManager {
    constructor(canvas) {
        this.canvas = canvas
        this.engine = new Engine(canvas, true)
        this.activeScene = null
        this.shadowGenerators = new Map()
        this.glowLayer = null
    }

    createScene() {
        const scene = new Scene(this.engine)
        
        // Setup physics if needed
        scene.enablePhysics()
        
        // Setup basic scene features
        this.setupGlow(scene)
        this.setupShadows(scene)
        
        return scene
    }

    setupGlow(scene) {
        this.glowLayer = new GlowLayer("glow", scene)
        this.glowLayer.intensity = 0.5
    }

    setupShadows(scene) {
        // Setup shadow generators based on lights
    }

    startRenderLoop() {
        this.engine.runRenderLoop(() => {
            if (this.activeScene) {
                this.activeScene.render()
            }
        })
    }
} 