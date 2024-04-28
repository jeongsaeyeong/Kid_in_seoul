import React from 'react'
import Union from '../../assets/img/Union.svg'
import { useNavigate } from 'react-router-dom'

const LoginoutBtn = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login')
    }

    return (
        <>
            <div className="login">
                <img src={Union} alt="/" />
                <button className='login' onClick={()=>{handleClick()}}>로그인</button>
            </div>
        </>
    )
}

export default LoginoutBtn