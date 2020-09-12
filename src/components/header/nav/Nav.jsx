import React from 'react'
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

{/**NavLink - кнопки меню, которые меняют URL.
    Последняя кнопка обычный div, который отвечает за выбор языка(ф-я будет реализована потом)*/}

const Nav = () => {
    return (
        <nav className={style.nav}>
            <NavLink to='/home'>
                <div className={style.navBtn}>
                    <img src="https://image.flaticon.com/icons/png/512/95/95020.png" 
                        alt="home" className={style.img} />
                </div>
            </NavLink>
            <NavLink to='/about'>
                <div className={style.navBtn}>
                    <img src="https://image.flaticon.com/icons/png/512/108/108153.png" 
                        alt="about" className={style.img} />
                </div>
            </NavLink>
            <NavLink to='/login'>
                <div className={style.navBtn}>
                    <img src="https://image.flaticon.com/icons/png/512/16/16480.png" 
                        alt="login" className={style.img} />
                </div>
            </NavLink>

            <div className={style.navBtn} onClick={() => alert("This function is not available right now!")}>
                <img src="https://image.flaticon.com/icons/png/512/104/104081.png" 
                    alt="language" className={style.img} />
            </div>
        </nav>     
    )
}

export default Nav