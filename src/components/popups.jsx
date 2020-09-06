import React from 'react'
import {Input2, Button} from 'components/inputs'
import AvatarImg from 'assets/img/avatar.png'
import {ClosePopup} from 'functions/popups'

export const ProfilePopup = () =>{
    
    const ClosePopup = () =>{
        const profile = document.getElementById('profilePopup')
        profile.setAttribute('style', 'display:none')
    }

    return(
        <>
            <div className="popup-wrap" id="profilePopup">
                <div className="popup-blur"></div>
                <div className="popup">
                    <span id="close" onClick={ClosePopup}> <i className="fas fa-times"></i> </span>
                    <div className="profile">
                        <div id="profile-avatar">
                            <div className="avatar">
                                <div className="avatarImg">
                                    <img src={AvatarImg} alt="profile avatar"/>
                                </div>
                            </div>
                            <h2 className="text-center">Steve</h2>
                        </div>
                        <div id="profile-stats">
                            <div className="stat">
                                <p>Games Played: <span> 40 </span></p>
                            </div>

                            <div className="stat">
                                <p>Games Won: <span> 40 </span></p>
                            </div>

                            <div className="stat">
                                <p>Most Cards Held: <span> 40 </span></p>
                            </div>

                            <div className="stat">
                                <p>Joined: <span> Jan 1, 1970 </span></p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CreateLobbyPopup = () =>{
    return(
        <>
            <div className="popup-wrap" id="createLobby" style={{display:'none'}}>
                <div className="popup-blur"></div>
                <div className="popup">
                    <span id="close" onClick={()=>ClosePopup('createLobby')}> <i className="fas fa-times"></i> </span>

                    <h3>Create a Lobby</h3>

                    <form>
                        <Input2 label="Name" ph="Give the lobby a name" icon="hotel" />
                        <Input2 label="Pin" ph="4 digit pin members use to join" icon="lock" />
                        <Button title="Create" />
                    </form>
                </div>
            </div>
        </>
    )
}

export const JoinLobbyPopup = () =>{
    return(
        <>
            <div className="popup-wrap" id="joinLobby" style={{display:'none'}} >
                <div className="popup-blur"></div>
                <div className="popup">
                    <span id="close" onClick={()=>ClosePopup('joinLobby')} ><i className="fas fa-times"></i></span>
                    <h3>Join Lobby</h3>

                    <form>
                        <Input2 label="Name" ph="Lobby name" icon="hotel" />
                        <Input2 label="Pin" ph="4 digit pin" icon="lock" />
                        <Button title="Join" />
                    </form>
                </div>
            </div>
        </>
    )
}

export const ExitGamePopup = () => {

    const closeGame = () => {
        window.location.href = '/dash'
    }

    return(
        <>
            <div className="popup-wrap" id="exitGame" style={{display:'none'}} >
                <div className="popup-blur"></div>
                <div className="popup">
                    <span id="close" onClick={()=>ClosePopup('exitGame')} ><i className="fas fa-times"></i></span>
                    <h3>Exit Game?</h3>
                    <p>Are you sure? All progress will be lost.</p>
                    <form className="fl-btw" onSubmit={(e) => e.preventDefault()}>
                        <Button title="Exit" onClick={closeGame} />
                        <Button title="Cancel" onClick={()=>{ClosePopup('exitGame')}} />
                    </form>
                </div>
            </div>
        </>
    )
}


export const GameInfoPopup = () => {
    return(
        <>
            <div className="popup-wrap" id="gameInfo" style={{display:'none'}} >
                <div className="popup-blur"></div>
                <div className="popup">
                    <span id="close" onClick={()=>ClosePopup('gameInfo')} ><i className="fas fa-times"></i></span>
                    <h3>Game Info</h3>
                    <p>Instructions on how to play.</p>
                    <form action="">
                        <Button title="Okay" onClick={()=>{ClosePopup('gameInfo')}} />               
                    </form>
                </div>
            </div>
        </>
    )
}