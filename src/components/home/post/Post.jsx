import React from 'react'
import style from './Post.module.css'
import { NavLink } from 'react-router-dom'

const Post = (props) => {
    return (
        <div className={style.post}>
            <NavLink to={props.link}>       
                <h3 className={style.headline}>{props.headline}</h3>
            </NavLink>
            <span>{props.date}</span>
            <p className={style.description}>{props.description}</p>
        </div>
    )
}

export default Post