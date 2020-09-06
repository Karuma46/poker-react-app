import React, {useEffect, useState} from 'react'
import Confetti from 'react-dom-confetti'
import {Button} from 'components/inputs'

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
        duration: "5090",
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
        duration: "5090",
        stagger: 0,
        width: "10px",
        height: "10px",
        colors: ["#000", "#f00", "#fff"]
    }

    const flash = () =>{
        let el = document.getElementById('flashyText')
        if(el.classList.contains("redFlash")){
            el.classList.add('whiteFlash')
            el.classList.remove('redFlash')
        } else {
            el.classList.add('redFlash')
            el.classList.remove('whiteFlash')
        }
    }
    

    useEffect(() => {
        mkBlast()

        setInterval(() => {
            flash()
        }, 300)

        setInterval(() => {
            mkBlast()
        }, 5100);
    },[])

    return(
        <>  
            <div id="blast">

                <div id="winner">
                    <h2 className="white">Game Over</h2>
                    <h1 className="alataFt redFlash" id="flashyText">STEVE WINS!</h1>
                </div>

                <div id="blast1">
                    <Confetti active={loading} config={configLeft } />
                </div>

                <div id="blast2">
                    <Confetti active={loading} config={configRight} />
                </div>

                <Button title="New Game" />

            </div>
        </>
    )
}

export default ConfettiBlast