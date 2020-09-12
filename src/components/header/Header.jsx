import React from 'react'
import { Route } from 'react-router-dom';
import style from './Header.module.css'
import Nav from './nav/Nav'
import Ad from './ad/Ad'

{/**header - это контейнер для дочерних компонент. 
    Nav - меню навигации. 
    Ad - блок объявлений. Рендерится, когда URL равен /home(компонента Home)*/}

const Header = () => {
    return (
        <header className={style.header}>
            <Nav />

            <Route path='/home' component={Ad} />
        </header>
    )
}

export default Header