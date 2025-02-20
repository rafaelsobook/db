export class InventoryManager {
    constructor() {
        this.items = new Map()
        this.maxSlots = 20
    }

    addItem(item, quantity = 1) {
        if (this.items.size >= this.maxSlots) return false
        
        const existingItem = this.items.get(item.name)
        if (existingItem) {
            existingItem.quantity += quantity
            return true
        }

        this.items.set(item.name, { ...item, quantity })
        return true
    }

    removeItem(itemName, quantity = 1) {
        const item = this.items.get(itemName)
        if (!item) return false

        item.quantity -= quantity
        if (item.quantity <= 0) {
            this.items.delete(itemName)
        }
        return true
    }
} 