import React, {useEffect}from 'react'
import {Player, Card} from 'components/gameStuff' 


const Players = () =>{
    return(
        <>
            <div id="players">
                <Player name="Steve" />
                <Player name="Ann" />
                <Player name="Kev" />
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
                <Card suit="heart" rank="4" />
                <Card suit="club" rank="A" />
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
            <div id="stash">
                <Card suit="spade" rank="5" />
                <Card suit="heart" rank="Q" />
                <Card suit="club" rank="K" />
                <Card suit="diamond" rank="Q" />
                <Card suit="spade" rank="K" />
            </div>
        </>
    )
}

const Table = () =>{
    return(
        <>
            <Players />
            <Hand />
            <Stash />
        </>
    )
}

export default Table