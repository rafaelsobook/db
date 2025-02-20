export const createElement = (elemName, classN, textInside, callB) => {
    const newElem = document.createElement(elemName)
    newElem.className = classN
    newElem.innerHTML = textInside || ''
    if(callB) newElem.addEventListener("click", callB)
    return newElem
}

export const displayElems = (arrayOfElem, display) => {
    arrayOfElem.forEach(elem => elem.style.display = display)
} 