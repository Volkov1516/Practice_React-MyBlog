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
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1946/1946488.svg" 
                        alt="home" className={style.img} />
                </div>
            </NavLink>
            <NavLink to='/about'>
                <div className={style.navBtn}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1828/1828940.svg" 
                        alt="about" className={style.img} />
                </div>
            </NavLink>
            <NavLink to='/login'>
                <div className={style.navBtn}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1077/1077063.svg" 
                        alt="login" className={style.img} />
                </div>
            </NavLink>
            <NavLink to='/options'>
                <div className={style.navBtn}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2099/2099058.svg" 
                        alt="language" className={style.img} />
                </div>
            </NavLink>
        </nav>     
    )
}

export default Nav