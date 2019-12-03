

export const showbg = () => {
    const bgs = document.createElement('div');
    bgs.setAttribute('id', 'bgs')
    for(var i=0; i<4; i++){
      let bg = document.createElement('div')
      bg.setAttribute('class', 'suitsbg')
      bgs.appendChild(bg)
    }
    const wrp = document.getElementById('wrapper')
    wrp.appendChild(bgs)
}

export const createCard = (suit,rank) =>{

    // *** CREATES CARD ELEMENT ***#
    // 
    // <div class="card spade">
    //     <div class="label">
    //         <p>9</p>
    //         <span></span>
    //     </div>
    // </div>

    const card = document.createElement('div')
    card.setAttribute('class', `card ${suit}`)

    const label = document.createElement('div')
    label.setAttribute('class', 'label')

    const p = document.createElement('p')
    p.innerText = rank

    const span = document.createElement('span')
    
    label.appendChild(p)
    label.appendChild(span)

    card.appendChild(label)
    return card
}

export const showCards = () => {
    var cards = document.getElementById('welcomeCards');
    
    var card1 = createCard('spade','A')
    cards.appendChild(card1)
    var card2 = createCard('diamond','K')
    cards.appendChild(card2)
    var card3 = createCard('heart', '4')
    cards.appendChild(card3)
    var card4 = createCard('club', '7')
    cards.appendChild(card4)
}

export const showLogin = () =>{
    const registerForm = document.getElementById('registerForm')
    registerForm.setAttribute('style','display:none')

    const loginForm = document.getElementById('loginForm')
    loginForm.setAttribute('style','display:block')

    openSidebar()

}

export const showRegister = () =>{
    const registerForm = document.getElementById('registerForm')
    registerForm.setAttribute('style','display:block')

    const loginForm = document.getElementById('loginForm')
    loginForm.setAttribute('style','display:none')

    openSidebar()
}

export const openSidebar = () =>{
    const sidebar = document.getElementById('sidebar')
    sidebar.setAttribute('style','right:0px')
}

export const closeSidebar = () =>{
    const sidebar = document.getElementById('sidebar')
    sidebar.setAttribute('style','right:-400px')
}

