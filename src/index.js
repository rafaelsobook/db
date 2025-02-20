import * as BABYLON from 'babylonjs'
import "babylonjs-loaders"
import { io } from "socket.io-client"
import * as GUI from 'babylonjs-gui'
import Conversation from "rpg-convers"

import { normalNpc } from '@/game/entities/NPC'
import { records } from '@/data/items/records'
import { shopItems } from '@/data/items/shop'
import { monsterLoot } from '@/data/items/monsterLoot'
import { tips } from '@/data/tips/tips'
import { foodInfo } from '@/data/items/foodInfo'
import { npcInfos } from '@/data/npcs/npcDetails'
import { ranks } from '@/data/ranks/ranks'
import { objectives } from '@/data/quests/objectives'
import { starterBlessings } from '@/data/blessings/starters'
import { introSpeech } from '@/data/world/dialogues'
import { bonusItems } from '@/data/items/bonusItems'
import { bonusInfos } from '@/data/bonuses/bonusInfo'
import { elements } from '@/data/items/elements'
import { skills } from '@/data/skills'
import { demons } from '@/data/entities/demons'
import { monsters } from '@/data/monsters'

const convers = new Conversation(document, 60) 