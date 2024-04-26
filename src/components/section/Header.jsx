import React from 'react'
import Logo from '../header/Logo'
import Nav from '../header/Nav'
import LoginoutBtn from '../header/LoginoutBtn'

const Header = () => {
    return (
        <header id='header'>
            <Logo />
            <Nav />
            <LoginoutBtn />
        </header>
    )
}

export default Header