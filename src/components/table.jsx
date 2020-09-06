import React, {useEffect, useState} from 'react'
import {Player, Card, Pick} from 'components/gameStuff'
import {Button2, Button} from 'components/inputs'
import Confetti from 'components/confetti'
import Loading from 'components/spinner'
import {ShowPopup} from 'functions/popups'
import {ExitGamePopup, GameInfoPopup} from 'components/popups'

export const Players = () =>{
    return(
        <>
            <div id="players">
                <Player name="You" />
                <Player name="Ann" />
                <Player name="Kev" />
                <Player name="Steve" />
                <Player name="Ann" />
            </div>
        </>
    )
}

const Hand = () =>{

    const arrangeCards = () =>{
        var w = (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) /2 - 50);
        var cards = document.getElementById("hand").childElementCount;
        var eachCardW = w/(cards + 1)
        var ml = 200 - (eachCardW)

        var els = document.querySelectorAll('.card');
        for (var i=0; i < els.length; i++) {
            if(i!== 0){
                els[i].setAttribute("style", "margin-left:-"+ml+"px");
            }
        }
    }
    useEffect(() => {
        arrangeCards()
    }, [])

    return(
        <>  
            
            <div id="hand">
                <h4 className="white">Your Hand:</h4>
                <div id="handWrap"> 
                    <Card suit="diamond" rank="9" />
                    <Card suit="heart" rank="4" />
                    <Card suit="club" rank="A" />
                </div>
            </div>
        </>
    )
}

const Stash = () =>{
    return(
        <>  
            <span id="gameclock">
                <p className="alataFt white">
                    Game Clock<span>: .40s</span>
                </p>
            </span>
            <div id="stash">
                <Card suit="spade" rank="5" />
                <Card suit="heart" rank="Q" />
                <Card suit="club" rank="K" />
                <Card suit="diamond" rank="Q" />
            </div>
        </>
    )
}

const Picker = () => {
    const addCard = () => {

    }
    return(
        <>
            <div id="picker" onClick={addCard}>
                <Pick />
            </div>
        </>
    )
}

const Actions = () =>{

    const ToggleGame = () =>{
        
    }

    return(
        <>
            <div id="actions">
                <Button2 icon="hand-paper" tooltip="Kadi!"/>
                <Button2 icon="forward" tooltip="Next" />
                <Button2 icon="undo-alt" tooltip="Undo" />
            </div>

            <div id="gameOptions">
                <span onClick={() => ShowPopup('exitGame')} >
                    <i className="fas fa-sign-out-alt white"></i>
                </span>

                <span onClick={() => ToggleGame} >
                    <i className="fas fa-play white"></i>
                </span>

                <span onClick={() => ShowPopup('gameInfo')} >
                    <i className="fas fa-info white"></i>
                </span>

            </div>
            <GameInfoPopup />
            <ExitGamePopup />
        </>
    )
}

const Game = () =>{
    return(
        <>
            <Hand />
            <Stash />
            <Picker />
            <Actions />
        </>
    )
}

const Table = () =>{    

    const [game, setGame] = useState({
        ready: true
    })

    return(
        <>
            {
                game.ready ? (
                    <Game />
                ) : (
                    <Loading text="Loading Game. Please Wait..." />
                )
            }
        </>
    )
}

export default Table