import React, { useState } from 'react'

const Comm_Join = ({setHave}) => {
    const [nickName, setNickName] = useState('');
    const [noMsg, setNoMsg] = useState('')

    const CheckNick = () => {
        if (nickName === '') {
            setNoMsg('사용할 수 없는 닉네임입니다');
            setTimeout(() => {
                setNoMsg('')
            }, 4000);
        } else {
            setHave(true);
        }
    }

    return (
        <div className='comm_join'>
            <div>
                {noMsg ? (
                    <input
                        style={{ borderBottom: '1px solid red' }}
                        value={nickName}
                        type="text"
                        placeholder='닉네임'
                        onChange={(e) => {
                            setNickName(e.target.value);
                        }}
                    />
                ) : (
                    <input
                        value={nickName}
                        type="text"
                        placeholder='닉네임'
                        onChange={(e) => {
                            setNickName(e.target.value);
                        }}
                    />
                )}

                <p className='noMsg'>{noMsg}</p>
                <p>
                    닉네임은 한/영 2자에서 8자 사이로 설정 가능합니다.<br />
                    띄어쓰기와 특수문자 사용이 불가합니다.<br />
                    부적절한 단어 사용시 추후 사용이 정지될 수 있습니다.
                </p>
                <div>
                    <button className="back">이전</button>
                    <button className="next" onClick={() => CheckNick()}>다음</button>
                </div>
            </div>
        </div>
    )
}

export default Comm_Join