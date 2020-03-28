export const ShowPopup = (popupId) =>{
    const popupDiv = document.getElementById(popupId)

    if(popupDiv.style.display === 'block'){
        popupDiv.setAttribute('style', 'display:none')
    } else {
        popupDiv.setAttribute('style', 'display:block')
    }
}

export const ClosePopup = (popupId) =>{
    const popupDiv = document.getElementById(popupId)
    popupDiv.setAttribute('style', 'display:none')
}