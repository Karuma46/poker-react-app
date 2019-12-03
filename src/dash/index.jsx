import React from 'react'
import Topbar from 'components/topbar'
import Table from 'components/table'



const Menu = () =>{
    return(
        <>
            <div id="menu">
                <div className="menu-item">
                    <p>Join a private game</p>
                </div>

                <div className="menu-item">
                    <p>Host a private game</p>
                </div>
            </div>
        </>
    )
}

const Dash = () =>{
    return(
        <>
            <div id="content">
                <Topbar/>
                {/* <Menu/>  */}
                <Table/>
            </div>
        </>
    )
}

export default Dash