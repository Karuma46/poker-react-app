import React, {useEffect} from 'react'
import {showbg, showCards} from './helpers'
import {input2} from 'components/inputs'


const Login = () =>{
    return (
        <>
            <div className="sidebar">
                <form action="">
                    <input2 type="text" label="Username" ph="Username" icon="user" />
                </form>
            </div>
        </>
    )
}


const WelcomeDiv = () =>{
    return(
        <>
        
            <div id="welcome-header">
                <p>WELCOME <br/> TO </p>
                <h1>POKER</h1>
            </div>
            <div id="welcomeCards">
            </div>
        </>
    )
}

const Welcome = () =>{
    useEffect(() => {
        showbg()
        showCards()
    },[])
    
    return(
        <>
            <div id="welcomewrap">
                <WelcomeDiv/>
                <Login />
            </div>
        </>
    )
}

export default Welcome