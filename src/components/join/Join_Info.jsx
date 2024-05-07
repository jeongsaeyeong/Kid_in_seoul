import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Join_Info = () => {
    const [Allfull, setAllfull] = useState(false);
    const [pass, setPass] = useState(false);
    const [phone, setPhone] = useState('');
    const [checknumber, setChecknumber] = useState('');
    const [name, setName] = useState('');
    const [Id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordre, setPasswordre] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('영문 대소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.')

    const navigate = useNavigate();

    const SendInfo = () => {
        if (phone !== '' && checknumber !== '' && name !== '' && Id !== '' && password !== '' && passwordre !== '') {
            setPass(true)
        } else {
            alert('정보를 모두 입력해주세요!')
        }
        if (pass) {
            navigate('/join_area')
        }
    }

    const CheckPhone = () => {
        // axios.post('/members/join', {
        //     name: "임시34",
        //     nickname: "임시34",
        //     userId: "ooooo051645",
        //     password: "Testpass123!",
        //     phoneNum: "01012345678",
        //     regionId: 12,
        //     birthDate: "2024-04-28"
        // })
        //     .then((res) => {
        //         console.log(res.data)
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })

        // console.log(phone)
        // axios.post("/sms-certification/send", { "phone": phone }
        // )
        //     .then((res) => {
        //         if (res.data) {
        //             console.log(res.data)
        //         }
        //     })
        //     .catch((error) => {
        //         console.error('Error sending phone verification:', error);
        //         // Handle error, e.g., show error message to the user
        //     });
    }

    const CheckNick = () => {
        if (Id !== '') {
            axios({
                url: 'http://3.39.179.50:8080/members/check-id', // 통신할 웹문서
                method: 'get', // 통신할 방식
                data: {
                  userId: 'abcde134'
                }
              })
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.error('Error checking nickname:', error);
                    // Handle error, e.g., show error message to the user
                });
        }
    }

    useEffect(() => {
        if (password !== passwordre) {
            setPasswordMsg('비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
        } else {
            setPasswordMsg('영문 대소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.')
        }

    }, [password, passwordre])

    useEffect(() => {
        if (phone !== '' && checknumber !== '' && name !== '' && Id !== '' && password !== '' && passwordre !== '') {
            setAllfull(true)
        }
    }, [pass, phone, checknumber, name, Id, password, passwordre])

    return (
        <div className='join_wrap'>
            <div className='join_info'>
                <h2>회원가입</h2>
                <div>
                    <div>
                        <input type="number" placeholder='휴대폰 번호' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <button className={phone !== '' ? 'full' : ''} onClick={() => { CheckPhone() }}>인증 문자 받기</button>
                    </div>
                    <div>
                        <input type="text" placeholder='인증번호' value={checknumber} onChange={(e) => setChecknumber(e.target.value)} />
                        <button className={checknumber !== '' ? 'full' : ''}>인증하기</button>
                    </div>
                    <input type="text" placeholder='이름' value={name} onChange={(e) => setName(e.target.value)} />
                    <div>
                        <input type="text" placeholder='아이디' value={Id} onChange={(e) => setId(e.target.value)} />
                        <button className={Id !== '' ? 'full' : ''} onClick={() => { CheckNick() }}>중복 확인</button>
                    </div>
                    <input type="password" placeholder='비밀번호' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder='비밀번호 재확인' value={passwordre} onChange={(e) => setPasswordre(e.target.value)} className='password_re' />
                    <p>{passwordMsg}</p>
                </div>
                <button className={Allfull ? 'next' : ''} onClick={() => { SendInfo() }}>다음 단계</button>
            </div>
        </div>
    )
}

export default Join_Info