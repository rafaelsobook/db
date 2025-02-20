const starterBlessings = [
    {
        name: "undying",
        dn: "Apollo's Grace",
        desc: "Apollo the healing God will support you by watching your health as you heal",
        activate: function (det){
            const newRegens = {...det.regens, hp: det.regens.hp+= 2}
            const newDet = {...det, regens: newRegens}
            return newDet
        },
        kolur: 'limegreen'
    },
    // ... rest of blessings
]

export default starterBlessings; 