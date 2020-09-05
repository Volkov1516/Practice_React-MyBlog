import React from 'react'
import { Route } from 'react-router-dom';
import style from './Header.module.css'
import Nav from './nav/Nav'
import Ad from './ad/Ad'


const Header = () => {
    return (
        <header className={style.header}>
            <Nav />

            <Route path='/home' component={Ad} />
        </header>
    )
}

export default Header