import React from 'react'
import AvatarImg from 'assets/img/avatar.png'
import {ProfilePopup} from 'components/popups'

export const Avatar = () =>{

    const showMenu = () =>{
        const user_menu = document.getElementById('user_menu')
        user_menu.setAttribute('style', 'display:block')
        console.log('user')
    }

    const showProfile = () =>{
        const profile = document.getElementById('profilePopup')
        profile.setAttribute('style', 'display:block')
          
        const user_menu = document.getElementById('user_menu')
        user_menu.setAttribute('style', 'display:none')
    }

    // var specifiedElement = document.getElementById('user_menu');
    // document.addEventListener('click', function(event) {
    // var isClickInside = specifiedElement.contains(event.target);
    // if (!isClickInside) {
    //     specifiedElement.setAttribute('style', 'display:block');
    // }
    // });

    return(
        <>
            <div className="avatar" id="user">
                <div className="avatarImg" id="userAvatar" onClick={showMenu}>
                    <img src={AvatarImg} alt="steve's avatar" />
                </div>

                <div className="av-menu" id="user_menu">
                    <span>
                        <a href="#" onClick={showProfile}>My Profile</a>
                    </span>

                    <span>
                        <a href="#">Logout</a>
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