import tips from '../../data/tips/tips'

export function showLoadingScreen(dura, imgName, totalLoad) {
    const lScreen = document.getElementById("loadingScreen")
    const loadingCap = document.querySelector(".lc-cap") 
    const tipsLabel = document.querySelector(".ls-tips")
    const loadScreenImg = document.querySelector(".lc-img")
    const loadPercent = document.querySelector(".ls-percent")

    isLoading = true
    lScreen.style.display = "flex"
    lScreen.classList.remove("screenFadeOff")
    loadingCap.innerHTML = loadingWhat
    loadingCap.style.color = `rgb(199, 199, 199)`

    const theTip = tips[Math.floor(Math.random() * tips.length)]
    tipsLabel.innerHTML = theTip.tip

    // Rest of loading screen logic...
} 