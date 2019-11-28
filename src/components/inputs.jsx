import React from 'react'


export const input2 = ({obj}) => {
    return(
        <div class="input2">
            <label for="">{obj.label}:</label>
            <input type={obj.type} placeholder={obj.ph} />
            <span><i class={`fas fa-${obj.icon}`}></i></span>
        </div>
    )
}