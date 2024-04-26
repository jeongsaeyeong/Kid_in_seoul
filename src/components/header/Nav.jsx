import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav id="nav">
                <ul>
                    <li><Link to={''}>어린이집 확인</Link></li>
                    <li><Link to={''}>아이와 함께</Link></li>
                    <li><Link to={'/calender'}>나의 달력</Link></li>
                    <li><Link to={'/community'}>커뮤니티</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav