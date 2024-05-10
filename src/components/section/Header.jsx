import React from 'react'
import Logo from '../header/Logo'
import Nav from '../header/Nav'
import LoginoutBtn from '../header/LoginoutBtn'

const Header = () => {
    return (
        <header id='header'>
            <div>
                <Logo />
                <Nav />
                <LoginoutBtn />
            </div>
        </header>
    )
}

export default Header