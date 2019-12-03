import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

import AvatarImg from 'assets/img/avatar.png'
import {Button2} from 'components/inputs'



export const Player = ({name}) =>{
    return(
        <>  
            <div className="inTurn avatar player ">
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
            <Draggable draggableId={rank} index={rank}>
                <div className={`card ${suit}`}>
                    <div className="label">
                        <p>{rank}</p>
                        <span></span>
                    </div>
                    <div className="actions">
                        <Button2 title="Play" icon="play"/>
                    </div>
                </div>  
            </Draggable>
        </>
    )
}