import React from 'react'
import Union from '../../assets/img/Union.svg'

const LoginoutBtn = () => {
    return (
        <>
            <div className="login">
                <img src={Union} alt="/" />
                <button className='login'>로그아웃</button>
            </div>
        </>
    )
}

export default LoginoutBtn