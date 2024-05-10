import React, { useState } from 'react'
import axios from 'axios';

const Join_Info = ({ setAllfull, Allfull, setPass, phone, setPhone, checknumber, setChecknumber, name, setName, Id, setId, password, setPassword, passwordre, setPasswordre, passwordMsg, setPasswordMsg, phoneSendMsg, setPhoneSendMsg, phoneMsg, setPhoneMsg, IdMsg, setIdMsg}) => {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    const [phoneOk, setPhoneOk] = useState(false)
    const [IdOk, setIdOk] = useState(false)

    const SendInfo = () => {
        if (phone !== '' && checknumber !== '' && name !== '' && Id !== '' && password !== '' && passwordre !== '' && phoneOk && IdOk) {
            setAllfull(true)
        }

        if (phone !== '' && checknumber !== '' && name !== '' && Id !== '' && password !== '' && passwordre !== '') {
            setPass(true)
        } else {
            alert('정보를 모두 입력해주세요!')
        }
    }

    const CheckPhone = () => {
        axios.post(`${PROXY}/sms-certification/send`, {
            "phone": phone,
        })
            .then((res) => {
                console.log(res.data)
                setPhoneSendMsg('입력하신 휴대폰 번호로 인증번호를 전송하였습니다.')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // 인증문자 확인
    const CheckPhoneNumber = () => {
        axios.post('/sms-certification/confirm', {
            "phone": phone,
            "certificationNumber": checknumber
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res.status)
                    setPhoneMsg('인증 완료')
                    setPhoneOk(true)
                } else {
                    setPhoneMsg('인증 실패')
                }
            })
            .catch((err) => {
                console.log(err)
                setIdMsg('인증 실패')
            })
    }

    // 아이디 중복 확인
    const CheckNick = () => {
        if (Id !== '') {
            axios.get(`/members/check-id`, {
                params: {
                    "userId": Id
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.status)
                        setIdMsg('인증 완료')
                        setIdOk(true)
                    } else {
                        setIdMsg('인증 실패')
                    }
                })
                .catch((error) => {
                    console.error('Error checking nickname:', error);
                    setIdMsg('인증 실패')
                });
        }
    }

    return (

        <div className='join_info'>
            <h2>회원가입</h2>
            <div>
                <div>
                    <input type="number" placeholder='휴대폰 번호' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <button className={phone !== '' ? 'full' : ''} onClick={() => { CheckPhone() }}>인증 문자 받기</button>
                </div>
                <div>
                    <input type="text" placeholder='인증번호' value={checknumber} onChange={(e) => setChecknumber(e.target.value)} />
                    <p className='ok_msg'>{phoneMsg}</p>
                    <button className={checknumber !== '' ? 'full' : ''} onClick={() => { CheckPhoneNumber() }}>인증하기</button>
                    <p className='msg'>{phoneSendMsg}</p>
                </div>
                <input type="text" placeholder='이름' value={name} onChange={(e) => setName(e.target.value)} />
                <div>
                    <input type="text" placeholder='아이디' value={Id} onChange={(e) => setId(e.target.value)} />
                    <p className='ok_msg'>{IdMsg}</p>
                    <button className={Id !== '' ? 'full' : ''} onClick={() => { CheckNick() }}>중복 확인</button>
                </div>
                <input type="password" placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder='비밀번호 재확인' value={passwordre} onChange={(e) => setPasswordre(e.target.value)} className='password_re' />
                <p>{passwordMsg}</p>
            </div>
            <button className={Allfull ? 'next' : ''} onClick={() => { SendInfo() }}>다음 단계</button>
        </div>

    )
}

export default Join_Info