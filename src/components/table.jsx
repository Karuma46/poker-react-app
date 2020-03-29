import React, {useEffect, useState}from 'react'
import {Player, Card, Pick} from 'components/gameStuff'
import {Button2, Button} from 'components/inputs'
import Confetti from 'react-dom-confetti'

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
        console.log(cards, w, eachCardW, ml)

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
                <Card suit="diamond" rank="9" />
                <Card suit="heart" rank="4" />
                <Card suit="club" rank="A" />
                <Card suit="heart" rank="4" />
                <Card suit="club" rank="A" />
    
            </div>
        </>
    )
}


const Stash = () =>{
    return(
        <>  
            <span id="gameclock">
                <p className="alataFt white">
                    0:40
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
    return(
        <>
            <div id="picker">
                <Pick />
            </div>
        </>
    )
}

const Actions = () =>{
    return(
        <>
            <div id="actions">
                <Button2 icon="hand-paper" tooltip="Kadi!"/>
                <Button2 icon="forward" tooltip="Next" />
                <Button2 icon="undo-alt" tooltip="Undo" />
            </div>
        </>
    )
}

const ConfettiBlast = () =>{

    const [loading, setLoading] = useState()

    const mkBlast = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 1000);
    }

    const configLeft = {
        angle: "45",
        spread: "125",
        startVelocity: "100",
        elementCount: "200",
        dragFriction: 0.1,
        duration: "7990",
        stagger: 0,
        width: "10px",
        height: "10px",
        colors: ["#000", "#f00", "#fff"]
    }


    const configRight = {
        angle: "135",
        spread: "125",
        startVelocity: "100",
        elementCount: "200",
        dragFriction: 0.1,
        duration: "7990",
        stagger: 0,
        width: "10px",
        height: "10px",
        colors: ["#000", "#f00", "#fff"]
    }

    return(
        <>  
            <div id="blast">

                <div id="winner">
                    <h2 className="white">Game Over</h2>
                    <h1 className="alataFt red">STEVE WINS!</h1>
                </div>

                <div id="blast1">
                    <Confetti active={loading} config={configLeft } />
                </div>

                <div id="blast2">
                    <Confetti active={loading} config={configRight} />
                </div>

                <Button title="Blast!" onClick={mkBlast} />

            </div>
        </>
    )
}



const Table = () =>{
    return(
        <>
            <ConfettiBlast />
            <Players />
            <Hand />
            <Stash />
            <Picker />
            <Actions />
        </>
    )
}

export default Table