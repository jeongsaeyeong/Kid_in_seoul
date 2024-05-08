import React, { useEffect, useState } from 'react'
import Join_Info from './Join_Info';
import Join_pickarea from './Join_pickarea';

const JoinArea = () => {
    const [Allfull, setAllfull] = useState(false);
    const [pass, setPass] = useState(false);
    const [phone, setPhone] = useState('');
    const [checknumber, setChecknumber] = useState('');
    const [name, setName] = useState('');
    const [Id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordre, setPasswordre] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('영문 대소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.')
    const [phoneSendMsg, setPhoneSendMsg] = useState('')
    const [phoneMsg, setPhoneMsg] = useState('')
    const [IdMsg, setIdMsg] = useState('')

    // 비밀번호랑 비밀번호 재확인 확인용 
    useEffect(() => {
        if (password !== passwordre) {
            setPasswordMsg('비밀번호가 일치하지 않습니다. 다시 입력해주세요.')
        } else {
            setPasswordMsg('영문 대소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.')
        }

    }, [password, passwordre])

    return (
        <div className='join_wrap'>
            {
                Allfull ? (
                    <Join_pickarea
                        password={password} name={name}
                        phone={phone} Id={Id}
                    />
                ) : (

                    <Join_Info
                        Allfull={Allfull} setAllfull={setAllfull}
                        pass={pass} setPass={setPass} phone={phone} setPhone={setPhone}
                        checknumber={checknumber} setChecknumber={setChecknumber}
                        name={name} setName={setName} Id={Id} setId={setId}
                        password={password} setPassword={setPassword} passwordre={passwordre} setPasswordre={setPasswordre}
                        passwordMsg={passwordMsg} setPasswordMsg={setPasswordMsg}
                        phoneSendMsg={phoneSendMsg} setPhoneSendMsg={setPhoneSendMsg}
                        phoneMsg={phoneMsg} setPhoneMsg={setPhoneMsg}
                        IdMsg={IdMsg} setIdMsg={setIdMsg}
                    />
                )
            }
        </div>
    )
}

export default JoinArea