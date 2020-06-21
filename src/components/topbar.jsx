import React from 'react'
import AvatarImg from 'assets/img/avatar.png'
import {ProfilePopup} from 'components/popups'
import {ShowPopup} from 'functions/popups'

export const Avatar = () =>{

    return(
        <>
            <div className="avatar" id="user">
                <div className="avatarImg" id="userAvatar" onClick={()=>ShowPopup('user_menu')}>
                    <img src={AvatarImg} alt="steve's avatar" />
                </div>

                <div className="av-menu" id="user_menu">
                    <span>
                        <span onClick={()=>ShowPopup('profilePopup')}>My Profile</span>
                    </span>

                    <span>
                        <span >Logout</span>
                    </span>
                </div>
            </div>
        </>
    )
}


const Topbar = () =>{
    return(
        <> 
            <div id="topbar">
                <div id="trapezoid">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>POKER</p>
            </div>
            {/* <div id="white-border"> </div> */}

            <Avatar />
            <ProfilePopup/>
        </>
    )
}

export default Topbar