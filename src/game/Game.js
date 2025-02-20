import { SceneManager } from '../babylon/SceneManager'
import { Character } from './entities/Character'
import { CombatManager } from './systems/combat/CombatManager'
import { InventoryManager } from './systems/inventory/InventoryManager'
import { CraftingManager } from './systems/crafting/CraftingManager'
import { QuestManager } from './systems/quest/QuestManager'

export class Game {
    constructor(canvas) {
        this.sceneManager = new SceneManager(canvas)
        this.combatManager = new CombatManager()
        this.inventoryManager = new InventoryManager()
        this.craftingManager = new CraftingManager(this.inventoryManager)
        this.questManager = new QuestManager()
        
        this.player = null
        this.npcs = new Map()
        
        this.init()
    }

    async init() {
        const scene = this.sceneManager.createScene()
        this.sceneManager.activeScene = scene
        
        await this.loadPlayer()
        await this.loadNPCs()
        
        this.setupEventListeners()
        this.sceneManager.startRenderLoop()
    }

    async loadPlayer() {
        this.player = new Character(this.sceneManager.activeScene, new Vector3(0, 0, 0))
        await this.player.load()
    }

    async loadNPCs() {
        // Load NPCs from data
    }

    setupEventListeners() {
        // Setup input handlers
    }

    saveGame() {
        const gameState = {
            player: this.player.getState(),
            inventory: Array.from(this.inventoryManager.items.entries()),
            quests: {
                active: Array.from(this.questManager.activeQuests.entries()),
                completed: Array.from(this.questManager.completedQuests)
            }
        }
        
        sessionStorage.setItem('dungeonborn', JSON.stringify(gameState))
    }

    loadGame() {
        const savedState = JSON.parse(sessionStorage.getItem('dungeonborn'))
        if (!savedState) return false

        // Restore game state
        return true
    }
} 