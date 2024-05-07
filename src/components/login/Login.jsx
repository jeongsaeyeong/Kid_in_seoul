import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../Store/userSlice'

const Login = () => {
    const [getId, setGetId] = useState('');
    const [getpassword, setGetPassword] = useState('');
    const [nopeMsg, setNopeMsg] = useState('')
    const [all, setAll] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        if (getId !== '' && getpassword !== '') {
            setAll(true)
        }
    }, [getId, getpassword])

    const CheckLogin = () => {
        if (getId === '' || getpassword === '') {
            alert('아이디와 비밀번호를 입력해주세요.');
            return
        }

        console.log(getId)
        console.log(getpassword)

        axios({
            url: 'http://3.39.179.50:8080/members/login', // 통신할 웹문서
            method: 'post', // 통신할 방식
            data: {
                userId: 'hi',
                password: '111'
            }
        })
            .then((res) => {
                if (res.data.accessToken !== '') {
                    const accessToken = res.data.accessToken;
                    dispatch((loginUser(res.data)))

                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `${accessToken}`;

                    console.log(res.data)
                    navigate('/')
                }
            })
            .catch((err) => {
                console.log(err)
                setNopeMsg('입력하신 아이디/비밀번호와 일치하는 로그인 정보가 없습니다.')
                setTimeout(() => {
                    setNopeMsg('')
                }, 3000)
            })
    }

    return (
        <div className='login_wrap'>
            <p>{nopeMsg}</p>
            <input
                value={getId}
                type="text"
                placeholder='아이디'
                onChange={(e) => setGetId(e.target.value)}
            />
            <input
                value={getpassword}
                type="password"
                placeholder='비밀번호'
                onChange={(e) => setGetPassword(e.target.value)}
            />
            {all ? (
                <>
                    <button
                        onClick={() => { CheckLogin() }}
                        style={{ backgroundColor: 'var(--black300)', color: 'var(--white)' }}
                    >로그인</button>
                </>
            ) : (
                <button
                    onClick={() => { CheckLogin() }}
                >로그인</button>
            )}
            <Link to='/join'>회원가입하기</Link>
        </div>
    )
}

export default Login