import React from 'react'
import {Route, Link} from 'react-router-dom'
import Topbar from 'components/topbar'
import Table from 'components/table'
import {CreateLobbyPopup, JoinLobbyPopup} from 'components/popups'
import {ShowPopup} from 'functions/popups'
import {Button} from 'components/inputs'
import {Players} from 'components/table'

const Menu = () =>{
    return(
        <>
            <div id="menu">
                {/* <div className="menu-item" onClick={()=>ShowPopup('joinLobby')} >
                    <p>Join a private game</p>
                </div>

                <div className="menu-item" onClick={()=>ShowPopup('createLobby')} >
                    <p>Host a private game</p>
                </div> */}

                <div className="menu-item">
                    <Link to="/dash/game">
                        <p>New game</p>
                    </Link>
                </div>
            </div>

            <CreateLobbyPopup />
            <JoinLobbyPopup />
        </>
    )
}

// const Waiting = () =>{
//     return(
//         <>  
//             <Players />
//             <div id="menu">
//                 <div>
//                     <h2 className="white">Creating New Game...</h2>
//                 </div>
//                 <Button title="Start Game" />
//             </div>
//         </>
//     )
// }

const Dash = () =>{
    return(
        <>
            <div id="content">
                <Topbar/>
                <Route exact path="/dash" component={Menu} />
                <Route exact path="/dash/game" render={() => <Table /> } />
            </div>
        </>
    )
}

export default Dash