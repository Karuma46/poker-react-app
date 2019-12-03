import React, {useEffect} from 'react'
import {showbg, showCards, showLogin, closeSidebar, showRegister} from './helpers'
import {Input2, Button} from 'components/inputs'


const Login = () =>{
    return (
        <>
            <form id="loginForm">
                <h3>Login</h3>
                <Input2 type="text" label="Username" ph="Use a unique username" icon="user" />
                <Input2 type="password" label="Pin" ph="4 digit pin number" icon="lock" />
                <Button title="Login"/>
            </form>
        </>
    )
}

const Register = () =>{
    return(
        <>
            <form id="registerForm">
                <h3>Register</h3>
                <Input2 type="email" label="Email Address" ph="Use a valid email address" icon="envelope"/>
                <Input2 type="text" label="Username" ph="Use a unique username" icon="user"/>
                <Input2 type="password" label="Pin" ph="4 digit pin number" icon="lock" />
                <Button title="Register" />
            </form>
        </>
    )
}


const WelcomeDiv = () =>{
    return(
        <>
            <div id="welcome-header">
                <div id="w-title">
                    <p>WELCOME <br/> TO </p>
                    <h1>POKER</h1>
                </div>

                <div id="welcomeCards">
                </div>

                <div id="welcome-btns">
                    <Button title="Login" onClick={showLogin} />
                    <span></span>
                    <Button title="Register" onClick={showRegister}></Button>
                </div>
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
                <div id="sidebar">
                    <span className="close" onClick={closeSidebar}>
                        <i className="fas fa-times red"></i>
                    </span>
                    <Login />
                    <Register />
                </div>
                
            </div>
        </>
    )
}

export default Welcome