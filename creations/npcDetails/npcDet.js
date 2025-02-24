import AllCrafts from "../crafts/crafts.js" // lagi dapat may JS to

const npcDet = {
    _id: '',
    isAStoryNpc: false,
    name: "", 
    x: 0, 
    z: 57,
    nType: 'standby', 
    gender: 'male', 
    toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0.25,g: 0.08,b:0.08} }, 
    displayW: {name: "none", isHide: false},
    armor: {name: "none"},
    place: "heartland",
    maxDistance: "none",
    _moving: false,
    _attacking: false,
    _minning: false,
    _training: false,
    _talking: false,
    mode: 'stand',
    spd: .1,
    condition: "none",
    dirTarg: {x: -5, z: 0},
    speech: [{name: 'barney', message: "don't talk to me peasant ..."}, {name: 'barney', message: "Mind you own business ..."}],
    secSpeech: [{name: 'barney', message: "How's the journey going in ..."}, {name: 'barney', message: "I heard there are some evil spirit at night ..."}, {name: 'barney', message: "hmm ... I wonder If they are strong ..."}],
} 
const randomNum = () => {
    return Math.random().toString().split(".")[1]
}
const npcInfos = [
    {
        _id: 'npc101', 
        isAStoryNpc: false,
        name: "oaklin", 
        x: 5, 
        z: 13,
        nType: 'standby', 
        gender: 'male', 
        toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0.25,g: 0.08,b:0.08} }, 
        displayW: {name: "huntingsword", isHide: false},
        armor: {name: "chiefplate"},
        place: "heartland",
        _moving: false,
        _attacking: false,
        _minning: false,
        _training: false,
        mode: 'stand',
        spd: .1,
        condition: function (player) {
            if(player.rank === "none") return this.speech
            return this.secSpeech
        },
        dirTarg: {x: 4, z: 15},
        speech: [{name: 'oaklin', message: "Hi there, Just Go Straight and you will find the guild house"}, {name: 'oaklin', message: "I'm an Adventurer but I only take smaller quest. I'm not risking my life like the others did for a small amount of money..."}],
        secSpeech: [{name: 'oaklin', message: "Always watch your back outthere"}, {name: 'oaklin', message: "Not only the monsters that we should be afraid off ..."}]
    },
    {
        _id: 'npc9213club', 
        isAStoryNpc: false,
        name: "Bernard", 
        x: 13.5, 
        z: 7.8,
        nType: 'standby', 
        gender: 'male', 
        toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0.25,g: 0.08,b:0.08} }, 
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        place: "hl_club",
        _moving: false,
        _attacking: false,
        _minning: false,
        _training: false,
        mode: 'stand',
        spd: .1,
        condition: "none",
        dirTarg: {x: 13, z: 5},
        speech: [{name: 'Bernard', message: "Hi there, Just Go Straight and you will find the guild house"}]
    },
    {
        _id: 'npc102', 
        name: "Eugo",
        isAStoryNpc: false, 
        x: -5, 
        z: 57,
        nType: 'standby', 
        gender: 'male', 
        toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0.25,g: 0.08,b:0.08} }, 
        displayW: {name: "huntingsword", isHide: false},
        armor: {name: "chiefplate"},
        place: "heartland",
        _moving: false,
        _attacking: false,
        _minning: false,
        _training: false,
        mode: 'stand',
        spd: .1,
        condition: function (player) {
            if(player.rank === "none") return this.speech
            return this.secSpeech
        },
        dirTarg: {x: -5, z: 0},
        speech: [{name: 'Eugo', message: "Do you want to be an Adventurer as well ..."}, {name: 'Eugo', message: "Goodluck with that kid ..."}],
        secSpeech: [{name: 'Eugo', message: "How's the Adventurer Life"}, {name: 'Eugo', message: "If you leave here, Out in the swamp forest ... you might find a cave"}, {name: 'Eugo', message: "beyond that leads to an unknown place.. I heard there's a lot of things going there"}],
    },
    {
        _id: 'npc43223', 
        name: "Anton", 
        isAStoryNpc: false,
        x: -3.7, 
        z: -7,
        nType: 'standby', 
        gender: 'male', 
        toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0,g: 0.08,b:0.08} }, 
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        place: "heartland",
        _moving: false,
        _attacking: false,
        _minning: false,
        _training: false,
        mode: 'stand',
        spd: .1,
        condition: function (player) {
            if(!player.places.some(plcName => plcName === "swampforest")) return this.speech
            return this.secSpeech
        },
        dirTarg: {x: 0, z: 0},
        speech: [{name: 'Anton', message: "That Gate ahead is old, Older than me but stronger than anyone in here ... Haha"}, {name: 'Anton', message: "Adventurers should always take an extra careful outside ..."}, {name: 'Anton', message: "No one knows what might show in there ..."}],
        secSpeech: [{name: 'Anton', message: "Have you seen it ?"}, {name: 'Anton', message: "That red skin in human form ..."}, {name: 'Eugo', message: "Hundreds of them are killed, but no one beleived me ..."}],
    },
    {
        _id: 'npcGuard42', 
        name: "Juleus Guard", 
        isAStoryNpc: false,
        x: 4.31, 
        z: -77.9,
        nType: 'standby', 
        gender: 'male', 
        toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0,g: 0.08,b:0.08} }, 
        displayW: {name: "dgerSpear", isHide: false},
        armor: {name: "karba"},
        place: "heartland",
        _moving: false,
        _attacking: false,
        _minning: false,
        _training: false,
        mode: 'stand',
        spd: .1,
        condition: function (player) {
            if(!player.places.some(plcName => plcName === "swampforest")) return this.speech
            return this.secSpeech
        },
        dirTarg: {x: 4.31, z: -60},
        speech: [{name: 'Juleus', message: "Haven't seen you around here ..."}, {name: 'Juleus', message: "You already know the risk boy ..."}],
        secSpeech: [{name: 'Juleus', message: "I sworn to protect this village no matter what's beyond"}, {name: 'Juleus', message: "I will stand firm !"}],
    },
    {
        _id: 'npcGuard4221', 
        name: "Adonis Guard", 
        isAStoryNpc: false,
        x: -4.31, 
        z: -77.9,
        nType: 'standby', 
        gender: 'male', 
        toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0,g: 0.08,b:0.08} }, 
        displayW: {name: "villageSpear", isHide: false},
        armor: {name: "chiefplate"},
        place: "heartland",
        _moving: false,
        _attacking: false,
        _minning: false,
        _training: false,
        mode: 'stand',
        spd: .1,
        condition: function (player) {
            if(player.lvl > 10) return this.secSpeech
            return this.speech
        },
        dirTarg: {x: -4.31, z: -60},
        speech: [{name: 'Adonis', message: "Can you treat me some beer kid"}, {name: 'Adonis', message: "Ahhh ... I'm thirsty standing here ..."}],
        secSpeech: [{name: 'Adonis', message: "Never saw a High Level Adventurer Before"}, {name: 'Adonis', message: "Seems you've killed a lot of monsters out there"}],
    },
    {...npcDet,
        _id: 'npc104342',
        name: 'Barney',
        nType: "walker",
        x: 0,
        z: 57,
        toWear: {hair: "antaenus", cloth: "inigma", pants: "brown", boots: "classic", hairColor: {r: 0.65,g: 0.02,b:0.07} },
        displayW: {name: "oakblade", isHide: false},
        armor: {name: "cladarmor"},
        place: "heartland",
        maxDistance: { x: -1.7, z: -5.2, chaceToStop: 8},
        _moving: true,
        spd: .1,
        condition: function (player) {
            if(player.lvl <= 3) return this.speech
            return [{name: 'barney', message: "Sorry about last time, By the way I heard your name on the guild ..."}, {name: 'barney', message: "Not all Adventurer have an aptitude for magic ... "}, {name: 'barney', message: `Ohhh ... And You're already lvl ${player.lvl} ... SANA ALL !`}]
        },
        dirTarg: {x: -1.7, z: -5.2},
        speech: [{name: 'barney', message: "don't talk to me peasant ... Move Away !"}, {name: 'barney', message: "Mind your own business ..."}],
    },
    {...npcDet,
        _id: "npc5sdas",
        name: 'aegon',
        nType: "walker",
        x: 40,
        z: -14,
        toWear: {hair: "aegon", cloth: "grand", pants: "brown", boots: "classic", hairColor: {r: 0.065,g: 0.02,b:0.07} },
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        place: "heartland",
        maxDistance: { x: 2, z: -15, chaceToStop: 8},
        _moving: true,
        spd: .1,
        condition: function (player) {
            console.log(player.lvl)
            if(parseInt(player.lvl) <= 5) {
                
                return this.speech
            }
            
            return this.secSpeech
        },
        dirTarg: {x: 2, z: -15},
        speech: [{name: 'aegon', message: "I'm thinking something ..."}, {name: 'aegon', message: "Should I go explore the dungeon ..."}, {name: 'aegon', message: "I heard people never came back after going there ..."}],
        secSpeech: [{name: 'aegon', message: "I can feel your strength ..."}, {name: 'aegon', message: "Maybe you're already above level 5"}, {name: 'barney', message: "I wish I can be as strong as you ... hays"}],
    },
    {...npcDet,
        _id: "npc5218",
        name: 'capricorn',
        nType: "walker",
        x: 30,
        z: -10,
        toWear: {hair: "isveltte", cloth: "inigma", pants: "brown", boots: "sinbad", hairColor: {r: 0.26,g: 0.16,b:0.88}},
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        place: "heartland",
        maxDistance: { x: -20, z: -13, chaceToStop: 8},
        _moving: true,
        spd: .1,
        condition: function (player) {
            if(parseInt(player.lvl) <= 5) {
                return this.speech
            }
            return this.secSpeech
        },
        dirTarg: {x: -20, z: -13},
        speech: [{name: 'capricorn', message: "I want to go outside the gate"}, {name: 'capricorn', message: "But I heard there are lots of goblin outside ..."}],
        secSpeech: [{name: 'capricorn', message: "You must be a goblin slayer ..."}, {name: 'capricorn', message: "You look so strong ..."}, {name: 'barney', message: "Still ... Be careful out there"}],
    },
    {...npcDet,
        _id: "npc68",
        name: 'lucard',
        nType: "walker",
        x: 0,
        z: -10,
        toWear: {hair: "antaenus", cloth: "capkelvins", pants: "martiz", boots: "sinbad", hairColor: {r: 0.26,g: 0.16,b:0.88}},
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        place: "heartland",
        maxDistance: { x: -50, z: -13, chaceToStop: 5},
        _moving: true,
        spd: .1,
        condition: function (player) {
            if(parseInt(player.lvl) <= 5) {
                return this.speech
            }
            return this.secSpeech
        },
        dirTarg: {x: -50, z: -13},
        speech: [{name: 'lucard', message: "There's a huge Monster on the forest ..."}, {name: 'lucard', message: "I heard It kills more than enough of adventurers ..."}],
        secSpeech: [{name: 'lucard', message: "!! You are the Monster Slayer ..."}, {name: 'lucard', message: "We Are Grateful for your service ..."}, {name: 'lucard', message: "Take care on your Journey ..."}],
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'fox',
        nType: "walker",
        x: 35,
        z: -18,
        toWear: {hair: "antaenus", cloth: "none", pants: "brown", boots: "sinbad", hairColor: {r: 0,g: 0,b:0}},
        displayW: {name: "grimblue", isHide: false},
        armor: {name: "hydra"},
        place: "heartland",
        maxDistance: { x: -50, z: -20, chaceToStop: 5},
        _moving: true,
        spd: .1,
        condition: function(player){
            if(player.weapon.name === 'grimblue') return this.secSpeech
            return this.speech
        },
        dirTarg: {x: -50, z: -20},
        speech: [{name: 'fox', message: "Hmmm ... What's that ?"}, {name: 'fox', message: "Yeah thought So ...."}],
        secSpeech: [{name: 'fox', message: "Your sword ..."}, {name: 'fox', message: "Never mind ... Name is fox see you around."}],
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'orland',
        nType: "walker",
        x: 55,
        z: -57,
        toWear: {hair: "isveltte", cloth: "zyger", pants: "martiz", boots: "sinbad", hairColor: {r: 1,g: 1,b:0}},
        displayW: {name: "huntingsword", isHide: false},
        armor: {name: "none"},
        place: "heartland",
        maxDistance: { x: -50, z: -58, chaceToStop: 3},
        _moving: true,
        spd: .1,
        condition: 'none',
        dirTarg: {x: -50, z: -58},
        speech: [{name: 'orland', message: "I'm looking for herbs right now ..."}, {name: 'orland', message: "I used it to treat my wounds ... see yah !"}],
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'Zalt',
        nType: "walker",
        x: -55,
        z: -60,
        toWear: {hair: "aegon", cloth: "zyger", pants: "martiz", boots: "sinbad", hairColor: {r: .2,g: .4,b:.01}},
        displayW: {name: "ruztysword", isHide: false},
        armor: {name: "chiefplate"},
        place: "heartland",
        maxDistance: { x: 30, z: -60, chaceToStop: 3},
        _moving: true,
        spd: .1,
        condition: 'none',
        dirTarg: {x: 30, z: -60},
        speech: [{name: 'Zalt', message: "I almost had him !"}, {name: 'zalt', message: "If only that boy didn't show up ! ..."}],
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'stephen',
        nType: "standby",
        x: -10,
        z: -20,
        toWear: {hair: "aegon", cloth: "zyger", pants: "brown", boots: "sinbad", hairColor: {r: 0,g: .2,b:.7}},
        displayW: {name: "huntingsword", isHide: false},
        armor: {name: "none"},
        place: "swampforest",
        maxDistance: 'none',
        _moving: true,
        spd: .1,
        condition: 'none',
        dirTarg: {x:0, z: 0},
        speech: [{name: 'stephen', message: "I want to go Inside but I'm still scared ..."}, {name: 'stephen', message: "I hear there's so many demon inside that even heroes are afraid of it ..."}],
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'chad',
        nType: "standby",
        x: 6,
        z: -63.7,
        toWear: {hair: "aegon", cloth: "grand", pants: "brown", boots: "sinbad", hairColor: {r: .5,g: 0,b:.7}},
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        place: "heartland",
        maxDistance: 'none',
        _moving: false,
        spd: .1,
        condition: 'none',
        dirTarg: {x:0, z: -80},
        speech: [{name: 'chad', message: "I'm waiting for my brother, It's been a week since he go out this gate"}, {name: 'chad', message: "He Promised he will return after taking one of the dungeon's Orb "}],
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'Nick',
        isAStoryNpc: true,
        nType: "standby",
        x: 10.4,
        z: 11.5,
        toWear: {hair: "aegon", cloth: "grand", pants: "brown", boots: "sinbad", hairColor: {r: .1,g: .1,b:1}},
        displayW: {name: "majesty", isHide: false},
        armor: {name: "cladarmor"},
        place: "heartland",
        maxDistance: 'none',
        _moving: false,
        spd: .1,
        condition: function(playerDet){
            if(playerDet.storyQue.some(stry => stry === "firstFriend")){
                console.log('still have it ', playerDet.storyQue )
  
                return this.speech(playerDet.name)
            }
            if(playerDet.storyQue.some(stry => stry === "firstGoblinKilled")){
                return this.goblinKillSpeech(playerDet.name)
            }
            if(playerDet.storyQue.some(stry => stry === "firstGolemKilled")){
                return this.golemKillSpeech(playerDet.name)
            }
            if(playerDet.storyQue.some(stry => stry === "firstCraftingFinished")){
                return this.firstCraftingSpeech(playerDet.name)
            }
            else{
                return this.normSpeech
            }
        },
        dirTarg: {x:9, z: 13.5},
        speech: function(mainName){
            return [
            { name: mainName, message: "Are you ...." },
            {name: 'Nick', message: "Greetings ..., I'm Informed I will see you here..."}, 
            {name: 'Nick', message: "I'm Nick, They sent me to give you some things you need"}, 
            {name: 'Nick', message: "I Know the Person who sent you here, No One must know where you came from ..."}, 
            {name: 'Nick', message: "I'm here to support you with ..."}]
        },
        goblinKillSpeech: function (mainName){
            return [
                { name: mainName, message: "Nick !, Right on time, I have killed a goblin ", animName: "tellinghappy"},
                { name: mainName, message: "those monsters, I can't beleive they really are here and I have killed one" },
                {name: 'Nick', message: "Good to know you are fine ... !"},
                {name: 'Nick', message: "The magiots will definitely get mad if something happen to you"},
                {name: mainName, message: "Magos ..., magiots ?"},
                {name: 'Nick', message: "The one who summoned you, they are the a̾ꙅ𝖆^ҽçհ ҟ. azxricks in common"},
                {name: 'Nick', message: "Most people don't know them but they are the founders of this world"},
                {name: 'Nick', message: "They created the scrolls that can change a human's race"},
                {name: 'Nick', message: "The dungeons outside is also a living proof of their powers"},
                {name: 'Nick', message: "Magiots, The Four Magos ... azxrick is their leader and the one who summoned you"},
                {name: 'Nick', message: "Simply, They are known as One Two Three and Four. Number five known as daviot ..."},
                {name: 'Nick', message: "He is the reason why the balance of this world is ruined and the magiots cannot return"},
                {name: 'Nick', message: "We need to get stronger so we can take daviot's core, and release the magiots"},
                {name: mainName, message: "I understand, Get strong and defeat number five"},
                {name: 'Nick', message: "Easier said than done ...No matter, We have all the time we need"},
                {name: 'Nick', message: "This Village has a lot of problem right now ..."},
                {name: 'Nick', message: "Outside the village, There is a Golem that they found that causing havoc"},
                {name: 'Nick', message: "I tried killing one, But seems like they keep on coming"},
                {name: mainName, message:"(whispers)... hmmm seems like you want me to-" },
                {name: 'Nick', message: "You think you can take one ? "},
                {name: mainName, message: "(whispers)... knew it !!"},
                {name: mainName, message: "I will try but are they not strong ?"},
                {name: 'Nick', message: `${mainName} You are summoned here for a reason that you have what it takes to be a Hero`},
                {name: mainName, message: `Yeah but, I don't think I can handle tha-`},
                {name: 'Nick', message: `I need to go now, there's a tower that I need to watch ... Be careful out there`},
                {name: mainName, message: `Wait tell me more about the Golem yaa ... nevermind`, animName: "tellingwait"},
            ]
        },
        golemKillSpeech: function (mainName){
            this.normSpeech = [
                {name: "Nick", message: "We are almost ready to face the real danger"}
            ]
            return [
                { name: "Nick", message: "here you are, How's adventuring "},
                { name: mainName, message: "I killed the Golem and took its core"},
                { name: mainName, message: "What are we gonna do with this .."},
                { name: "Nick", message: "I'm Impressed, You defeated a Golem for a short period of time"},
                { name: "Nick", message: "You have potential..."},
                { name: "Nick", message: "Take the core to dwarven shop, Craft sword using that core"},
                { name: "Nick", message: "After that we can start take things seriously"},
                { name: "Nick", message: "Crafting weapon requires iron and cores"},                
            ]
        },
        firstCraftingSpeech: function (mainName){
            return [
                { name: "Nick", message: `Well done ${mainName} ! I can see you have successfully crafted a weapon`},
                { name: "Nick", message: "Tho you have to be aware ... crafting or enhancing weapon can sometimes fail"},
                { name: "Nick", message: "Enough of that ! We have an emergency !"},                
                { name: "Nick", message: "Lots of Tree Monsters are showing in the mist"},                
                { name: "Nick", message: "You think you can test your new sword on them ?"},                
                { name: "Nick", message: "I know it's hard ! hundreds of adventurers already died !"},                
                { name: "Nick", message: "Only 10 survived ! .. According to them they saw the monsters in the mist !"},                
                { name: "Nick", message: "After the hidden land... That is where the massacre happens "},                
                { name: "Nick", message: "I'll go there Immediately ! there's no time "},                
            ]
        },
        normSpeech: [
            {name: "Nick", message: "It is still early for you to see your goal"},
            {name: "Nick", message: "Get Strong ... Explore the forest or dungeon outside"},
            {name: "Nick", message: "Be Careful Out there ..."},
        ]
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'jericho',
        nType: "walker",
        x: 20,
        z: 0,
        toWear: {hair: "antaenus", cloth: "grand", pants: "magios", boots: "sinbad", hairColor: {r: .7,g: .2,b:0}},
        displayW: {name: "none", isHide: false},
        armor: {name: "karparmor"},
        place: "heartland",
        maxDistance: { x: -3, z: -1, chaceToStop: 1},
        _moving: true,
        spd: .1,
        condition: function(player){
            let toReturn = {theSpeech: undefined, additionalDet: undefined}
            let toLearn = [];
            let crftNames = []
            if(!player.mycrafts.length) return {theSpeech: this.speechForBonfire, additionalDet: [AllCrafts[0]]}
            
            AllCrafts.forEach(crft => {
                if(crft.name === "bonfire") return
                if(crft.rqrdLvl <= player.lvl){
                    const isLearned = player.mycrafts.some(mycrft => mycrft.name === crft.name)
                    if(isLearned) return
                    crftNames.push(crft.name)
                    toLearn.push(crft);
                }
            })

            if(!toLearn.length) return {theSpeech: this.speech, additionalDet: undefined}
            
            return {theSpeech: this.nextSpeech(crftNames), additionalDet: toLearn}
        },
        dirTarg: {x: -3, z: -1},
        speechForBonfire: [{name: 'jericho', message: "Here you are, I've heard you from nick ..."},{name: 'jericho', message: "For your safety, I will teach you a craft ..."}, {name: 'jericho', message: "I'll teach you how to make bonfire, a useful craft for survival"},{name: 'jericho', message: "There's a lot I want to teach you, for now try exploring swampforest and gain exp from monsters"}],
        nextSpeech: function (crftNames) { return [{name: "jericho", message: "You are good out there ..."}, {name: "jericho", message: `Let me teach you a new craft ...`},{name: "jericho", message: `learn how to craft ${crftNames.length > 1 ? crftNames.join(" and ") : crftNames[0]}`}] },
        speech: [{name: 'jericho', message: "I hope this crafts will help you in your journey"}, {name: 'jericho', message: "Enjoy Adventuring ! Be Safe there ..."}],
        errSpeech: [{name: "jericho", message: "hmmm ... I don't know what crafts are in my mind right now"}]
    },
    {
        _id: 'npc23542', 
        name: "Bart", 
        x: 17, 
        z: 56,
        nType: 'standby', 
        gender: 'male', 
        toWear: {hair: "antaenus", cloth: "grand", pants: "brown", boots: "silver", hairColor: {r: 0.25,g: 0.08,b:0.08} }, 
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        helmet: {name: "farmerhat"},
        place: "heartland",
        _moving: false,
        _attacking: false,
        _minning: false,
        _training: false,
        mode: 'stand',
        spd: .1,
        condition: "none",
        dirTarg: {x: 14, z: 53},
        speech: [{name: 'Bart', message: "It is not safe to travel right now, due to monsters"}, {name: 'Bart', message: "We wait for the guild to comply ..."}]
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'markus',
        nType: "standby",
        x: 0,
        z: 2,
        toWear: {hair: "antaenus", cloth: "grand", pants: "magios", boots: "sinbad", hairColor: {r: .7,g: .2,b:0}},
        displayW: {name: "staffofmare", isHide: false},
        armor: {name: "none"},
        helmet: {name: "mawhat"},
        place: "heartland",
        maxDistance: { x: 50, z: 0, chaceToStop: 1},
        _moving: true,
        spd: .1,
        condition: "none",
        // condition: function(player){
        //     let toReturn = {theSpeech: undefined, additionalDet: undefined}
        //     let toLearn = [];
        //     let crftNames = []

        //     if(player.storyQue.some(stry => stry === "taskFromMarkus")){
        //         return {theSpeech: this.taskSpeech(), additionalDet: undefined}
        //     }
        //     if(player.storyQue.some(stry => stry === "receiveFirstSkill")){
        //         return {theSpeech: this.wellDoneSpeech(), additionalDet: undefined}
        //     }
        //     if(!player.mycrafts.length) return {theSpeech: this.speechForBonfire, additionalDet: [AllCrafts[0]]}
            
        //     AllCrafts.forEach(crft => {
        //         if(crft.name === "bonfire") return
        //         if(crft.rqrdLvl <= player.lvl){
        //             const isLearned = player.mycrafts.some(mycrft => mycrft.name === crft.name)
        //             if(isLearned) return
        //             crftNames.push(crft.name)
        //             toLearn.push(crft);
        //         }
        //     })

        //     if(!toLearn.length) return {theSpeech: this.speech, additionalDet: undefined}
            
        //     return {theSpeech: this.nextSpeech(crftNames), additionalDet: toLearn}
        // },
        dirTarg: {x: 2, z: 4.3},
        speechForBonfire: [{name: 'jericho', message: "Are you a traveler, I've never seen you here ..."},{name: 'jericho', message: "For your safety, I will teach you a craft ..."}, {name: 'jericho', message: "For now I'll teach you how to make a bonfire, a useful craft for survival"},{name: 'jericho', message: "If you are out in the wild you can simply craft it so evil spirits will not attempt to touch you"}],
        wellDoneSpeech: function (crftNames) { return [{name: "jericho", message: "You are good out there ..."}, {name: "jericho", message: `Let me teach you a new craft ...`},{name: "jericho", message: `learn how to craft ${crftNames.length > 1 ? crftNames.join(" and ") : crftNames[0]}`}] },
        speech: [{name: 'markus', message: "This beast is causing havoc outside, fortunately I'm strong enough to capture it"}, {name: 'markus', message: "I'm just waiting for the guild to collect this monster"}, {name: 'markus', message: "If you see one outside, call for help immediately !"}],
        errSpeech: [{name: "jericho", message: "hmmm ... I don't know what crafts are in my mind right now"}],
        taskSpeech: function(player){
            return [
            {name: "markus", message: "I have been waiting for you .."},
            {name:player.name, message: "You know me ?"},
            {name:"markus", message: "Pretty well ... I know your not from here"},
            {name:"markus", message: "I sense him in you ... the person who can create world and dungeons"},
            {name:player.name, message: "I don't know him that much, No wonder he can summon me from another world"},
            {name:"markus", message: "Summon ? From what ? Another world ?"},
            {name:player.name, message: "Oh sorry nothing ... I was on my way to somewhere now. Goodbye !"},
            {name:"markus", message: "Interesting fellow ... Hmmm, What if ..."},
            {name:"markus", message: "What if ... I teach you some skill in exchange for a small task ?"},
            {name:player.name, message: "Skill ?? You mean magic ?"},
            {name: "markus", message: "Yeah You haven't heard of it before ? There are diffrent types .."},
            {name: "markus", message: "Offensive magic, magic for defense and a lot more"},
            {name: "markus", message: "If you accomplish a task for me, I will teach you"},
            {name: "markus", message: "If you accomplish a task for me, What do you say ?"},
            ]
        }
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'wiz',
        nType: "standby",
        x: 9,
        z: 7.96,
        toWear: {hair: "antaenus", cloth: "grand", pants: "magios", boots: "danes", hairColor: {r: .7,g: .2,b:0}},
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        helmet: {name: "mawhat"},
        place: "guildhouse",
        maxDistance: { x: 50, z: 0, chaceToStop: 1},
        _moving: true,
        spd: .1,
        condition: "none",
        dirTarg: {x: 9, z: 20},
        speech: [{name: 'wiz', message: "Hi I sell important stuff for your travels"}],
        errSpeech: [{name: "jericho", message: "hmmm ... I don't know what crafts are in my mind right now"}],
        taskSpeech: function(player){
            return [
            {name: "markus", message: "I have been waiting for you .."},
            {name:player.name, message: "You know me ?"},
            {name:"markus", message: "Pretty well ... I know your not from here"},
            {name:"markus", message: "I sense him in you ... the person who can create world and dungeons"},
            {name:player.name, message: "I don't know him that much, No wonder he can summon me from another world"},
            {name:"markus", message: "Summon ? From what ? Another world ?"},
            {name:player.name, message: "Oh sorry nothing ... I was on my way to somewhere now. Goodbye !"},
            {name:"markus", message: "Interesting fellow ... Hmmm, What if ..."},
            {name:"markus", message: "What if ... I teach you some skill in exchange for a small task ?"},
            {name:player.name, message: "Skill ?? You mean magic ?"},
            {name: "markus", message: "Yeah You haven't heard of it before ? There are diffrent types .."},
            {name: "markus", message: "Offensive magic, magic for defense and a lot more"},
            {name: "markus", message: "If you accomplish a task for me, I will teach you"}
            ]
        }
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'Justin',
        nType: "standby",
        x: 50,
        z: -14.4,
        toWear: {hair: "isveltte", cloth: "grand", pants: "magios", boots: "sinbad", hairColor: {r: 1,g: 1,b:0}},
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        helmet: {name: "none"},
        place: "heartland",
        maxDistance: { x: 50, z: 0, chaceToStop: 1},
        _moving: true,
        spd: .1,
        condition: "none",
        dirTarg: {x: 0, z: 2},
        speech: [{name: 'Justin', message: "Ohh I can't wait for my men to arrive here"}, {name: 'Justin', message: "They caught lot of monsters in the forest"}, {name: 'Justin', message: "I will sell them with higher price ... especially the rare breeds"}, {name: 'Justin', message: "Ohh and meet my dragon, He's shy around many people"}],
    },
    {...npcDet,
        _id: `npc${randomNum()}`,
        name: 'Smythe',
        nType: "standby",
        x: 0,
        z: 6.4,
        toWear: {hair: "antaenus", cloth: "grand", pants: "magios", boots: "sinbad", hairColor: {r: 1,g: 1,b:1}},
        displayW: {name: "none", isHide: false},
        armor: {name: "none"},
        helmet: {name: "karpred"},
        place: "crafthouse",
        maxDistance: { x: 50, z: 0, chaceToStop: 1},
        _moving: true,
        spd: .1,
        condition: "none",
        dirTarg: {x: 0, z: 2},
    },
]


export default npcInfos