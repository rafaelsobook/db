import { crafts } from '@data/crafting/crafts'

export class CraftingManager {
    constructor(inventory) {
        this.inventory = inventory
        this.availableCrafts = new Map()
        this.initializeCrafts()
    }

    initializeCrafts() {
        crafts.forEach(craft => {
            this.availableCrafts.set(craft.name, craft)
        })
    }

    canCraft(craftName) {
        const craft = this.availableCrafts.get(craftName)
        if (!craft) return false

        return craft.requirements.every(req => {
            const item = this.inventory.items.get(req.name)
            return item && item.quantity >= req.qnty
        })
    }

    craft(craftName) {
        if (!this.canCraft(craftName)) return false

        const craft = this.availableCrafts.get(craftName)
        
        // Remove materials
        craft.requirements.forEach(req => {
            this.inventory.removeItem(req.name, req.qnty)
        })

        // Add crafted item
        this.inventory.addItem({
            name: craft.name,
            // ... other item properties
        })

        return true
    }
} 