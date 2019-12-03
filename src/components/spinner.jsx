import React from 'react'
import Spinner from 'assets/svg/spinner.svg'

const spinner =  () =>{
    return(
        <div className="spinner">
            <img src={Spinner} alt="loading gif"/>
            <p className="text-center white alataFt">Loading. Please wait...</p>
        </div>
    )
}

export default spinner