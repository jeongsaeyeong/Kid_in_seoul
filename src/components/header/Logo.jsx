import { Link } from 'react-router-dom'
import React from 'react'

const Logo = () => {

    return (
        <>
            <div className="logo">
                <ul>
                    <li><Link to='/'>Kid in Seoul</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Logo