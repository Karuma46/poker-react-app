import React from 'react'
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
                <div className="menu-item" onClick={()=>ShowPopup('joinLobby')} >
                    <p>Join a private game</p>
                </div>

                <div className="menu-item" onClick={()=>ShowPopup('createLobby')} >
                    <p>Host a private game</p>
                </div>
            </div>
        </>
    )
}


const Waiting = () =>{
    return(
        <>  
            <Players />
            <div id="menu">
                <div>
                    <h2 className="white">Waiting for players to join...</h2>
                </div>
                <Button title="Start Game" />
            </div>
        </>
    )
}

const Dash = () =>{
    return(
        <>
            <div id="content">
                <Topbar/>
                {/* <Menu/> */}
                {/* <Waiting /> */}
                <CreateLobbyPopup />
                <JoinLobbyPopup />
                <Table/>
            </div>
        </>
    )
}

export default Dash