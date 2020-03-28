import React from 'react'
import AvatarImg from 'assets/img/avatar.png'
import Cardbg from 'assets/img/cardbg.png'
import {Button2} from 'components/inputs'



export const Player = ({name}) =>{
    return(
        <>  
            <div className="avatar player">
                <div className="avatarImg">
                    <img src={AvatarImg} alt={`${name}'s avatar`} />
                </div>
                <p>{name}</p>
            </div>
        </>
    )
}


export const Card = ({suit, rank}) => {
    return(
        <>

            <div className={`card ${suit}`}>
                <div className="label">
                    <p>{rank}</p>
                    <span></span>
                </div>
                <div className="actions">
                    <Button2 icon="play" tooltip="Play"/>
                </div>
            </div>  
            
        </>
    )
}



export const Pick = () => {
    return(
        <>
            <div className="card" id="pick"> 
                <img src={Cardbg} alt=""/>
            </div>
        </>
    )
}