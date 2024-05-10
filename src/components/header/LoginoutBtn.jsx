import React, { useEffect, useState } from 'react'
import Union from '../../assets/img/Union.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { clearUser } from '../../Store/userSlice';

const LoginoutBtn = () => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    const handleClick = () => {
        axios.post('/members/logout')
            .then((res) => {
                console.log(res)
                localStorage.clear()
            })
        dispatch(clearUser())
    }

    useEffect(() => {
        if(user.accessToken !== ''){
            axios.get('/members/me')
                .then((res) => {
                    setName(res.data.name)
                })
        }
    })

    return (
        <>
            {user.accessToken === '' ? (
                <div className="login_btnwrap">
                    <img src={Union} alt="/" />
                    <button className='login' onClick={() => { navigate('/login'); }}>로그인</button>
                </div>
            ) : (
                <div className="login_btnwrap">
                    <img src={Union} alt="/" />
                    <p>{name}님</p>
                    <button className='login' onClick={() => { handleClick() }}>로그아웃</button>
                </div>
            )}
        </>
    )
}

export default LoginoutBtn