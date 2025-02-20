import { skills } from '../../../data/skills'

export class CombatManager {
    constructor() {
        this.activeSkills = new Map()
        this.cooldowns = new Map()
    }

    executeSkill(character, skillName) {
        const skill = skills.find(s => s.name === skillName)
        if (!skill) return false

        if (this.isOnCooldown(skillName)) return false

        // Execute skill logic
        this.startCooldown(skillName, skill.skillCoolDown)
        return true
    }

    isOnCooldown(skillName) {
        return this.cooldowns.has(skillName) && 
               this.cooldowns.get(skillName) > Date.now()
    }

    startCooldown(skillName, duration) {
        this.cooldowns.set(skillName, Date.now() + duration)
    }
} 