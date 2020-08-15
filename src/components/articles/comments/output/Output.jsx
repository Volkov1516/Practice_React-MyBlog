import React from 'react'
import style from './Output.module.css'

const Output = (props) => {
    return (
        <ul>
            <li>
                {props.text}
                <br/>
                {props.date}    
            </li>
        </ul>
    )
}

export default Output