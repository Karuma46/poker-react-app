import React from 'react'

export const Input2 = ({type, label, ph, icon}) => {
    return(
        <div className="input2">
            <label htmlFor="">{label}:</label>
            <input type={type} placeholder={ph} />
            <span><i className={`fas far fa-${icon}`}></i></span>
        </div>
    )
}

export const Button = ({title, onClick}) => {
    return(
        <button className="button" onClick={onClick}>
            {title}
        </button>
    )
}

export const Button2 = ({title, icon, tooltip}) => {
    return(
        <>
            <button className="round_btn" title={tooltip}>
                <span>
                    <i className={`fas fa-${icon} red`}></i>
                </span>
                <p>{title}</p>
            </button>
        </>
    )
}