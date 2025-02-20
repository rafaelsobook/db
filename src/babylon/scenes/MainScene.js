import { Scene, Engine, Vector3, HemisphericLight, ArcRotateCamera } from 'babylonjs'

export class MainScene {
    constructor(canvas) {
        this.engine = new Engine(canvas, true)
        this.scene = new Scene(this.engine)
        
        this.setupCamera()
        this.setupLights()
        
        // Start render loop
        this.engine.runRenderLoop(() => {
            this.scene.render()
        })
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.engine.resize()
        })
    }

    setupCamera() {
        this.camera = new ArcRotateCamera(
            "camera",
            0, Math.PI / 3,
            10,
            Vector3.Zero(),
            this.scene
        )
        this.camera.attachControl(this.scene.getEngine().getRenderingCanvas(), true)
    }

    setupLights() {
        new HemisphericLight("light", new Vector3(0, 1, 0), this.scene)
    }
} 