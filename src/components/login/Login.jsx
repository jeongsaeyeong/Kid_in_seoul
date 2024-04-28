import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [getId, setGetId] = useState('');
    const [getpassword, setGetPassword] = useState('');
    const [all, setAll] = useState(false);

    useEffect(() => {
        if (getId !== '' && getpassword !== '') {
            setAll(true)
        }
    }, [getId, getpassword])

    return (
        <div className='login_wrap'>
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
                <button
                style={{backgroundColor:'var(--black300)', color:'var(--white)'}}
                >로그인</button>
            ) : (
                <button>로그인</button>
            )}
            <Link to='/join'>회원가입하기</Link>
        </div>
    )
}

export default Login