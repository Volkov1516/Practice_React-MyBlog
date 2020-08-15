import React from 'react'
import style from './Post.module.css'
import { NavLink } from 'react-router-dom'

const Post = (props) => {
    return (
        <article className={style.article}>
            <NavLink to={props.link}>
                <h3 className={style.headline}>{props.headline}</h3>
            </NavLink>
            <span>{props.date}</span>
            <p className={style.description}>{props.description}</p>
            
        </article>
    )
}

export default Post