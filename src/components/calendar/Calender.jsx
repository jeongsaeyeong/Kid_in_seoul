import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UnionFull from '../../assets/img/Union_full.svg'
import Calender_Month from './Calender_Month'

const Calender = () => {
    const [login, setLogin] = useState(true)

    return (
        <>
            {login ? (
                <>
                    <Calender_Month />
                </>
            ) : (
                <div className='no_login'>
                    <div>
                        <img src={UnionFull} alt="" />
                        <p>
                            해당 기능은 로그인 후 이용 가능합니다.<br />
                            회원가입 후 다양한 서비스를 이용해보세요!
                        </p>
                        <button onClick={() => { setLogin(true) }}>
                            <Link to={''}>로그인 및 회원가입</Link>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Calender