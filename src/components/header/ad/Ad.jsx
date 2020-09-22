import React from 'react'
import style from './Ad.module.css'

{/**Ad - компонента для облока объявлений*/}

const Ad = () => {
    return (
        <div className={style.wrapper}>
            <b className={style.text}>The website is not completed! This is beta of the site</b> 
        </div>
    )
}

export default Ad