import { objectives, questTypes, questStatus } from '@data/quests/objectives'

export class QuestManager {
    constructor() {
        this.activeQuests = new Map()
        this.completedQuests = new Set()
        this.questTypes = questTypes
        this.questStatus = questStatus
    }

    startQuest(questName) {
        const quest = objectives.find(q => q.name === questName)
        if (!quest || this.activeQuests.has(questName)) return false

        this.activeQuests.set(questName, {
            ...quest,
            status: this.questStatus.IN_PROGRESS,
            objectives: quest.objectives.map(obj => ({...obj, current: 0}))
        })
        return true
    }

    updateQuestProgress(questName, objectiveType, target, amount = 1) {
        const quest = this.activeQuests.get(questName)
        if (!quest) return false

        const objective = quest.objectives.find(
            obj => obj.type === objectiveType && obj.target === target
        )

        if (objective) {
            objective.current = Math.min(objective.current + amount, objective.count)
            if (this.checkQuestCompletion(quest)) {
                this.completeQuest(questName)
            }
            return true
        }
        return false
    }

    checkQuestCompletion(quest) {
        return quest.objectives.every(obj => obj.current >= obj.count)
    }

    completeQuest(questName) {
        const quest = this.activeQuests.get(questName)
        if (!quest) return false

        quest.status = this.questStatus.COMPLETED
        this.completedQuests.add(questName)
        this.activeQuests.delete(questName)
        return true
    }
} 