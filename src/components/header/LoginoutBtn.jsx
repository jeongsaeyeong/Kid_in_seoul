import React, { useEffect } from 'react'
import Union from '../../assets/img/Union.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { clearUser } from '../../Store/userSlice';

const LoginoutBtn = () => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        axios.post('/members/logout')
            .then((res) => {
                console.log(res)
            })
        dispatch(clearUser())
    }

    useEffect(() => {
    })

    return (
        <>
            {user.accessToken === '' ? (
                <div className="login">
                    <img src={Union} alt="/" />
                    <button className='login' onClick={() => { navigate('/login'); }}>로그인</button>
                </div>
            ) : (
                <div className="login">
                    <img src={Union} alt="/" />
                    <button className='login' onClick={() => { handleClick() }}>로그아웃</button>
                </div>
            )}
        </>
    )
}

export default LoginoutBtn