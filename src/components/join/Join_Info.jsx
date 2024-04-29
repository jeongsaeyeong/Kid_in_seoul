import React from 'react'

const Join_Info = ({setPass}) => {
    return (
        <div className='join_info'>
            <h2>회원가입</h2>
            <div>
                <div>
                    <input type="text" placeholder='휴대폰 번호' />
                    <button>인증 문자 받기</button>
                </div>
                <div>
                    <input type="text" placeholder='인증번호' />
                    <button>인증하기</button>
                </div>
                <input type="text" placeholder='이름' />
                <div>
                    <input type="text" placeholder='중복 확인' />
                    <button>중복 확인</button>
                </div>
                <input type="text" placeholder='비밀번호' />
                <input type="text" placeholder='비밀번호 재확인' className='password_re' />
                <p>영문 대소문자+숫자+특수문자 조합으로 8-16자 입력해주세요.</p>
            </div>
            <button onClick={() => {setPass(true)}}>다음 단계</button>
        </div>
    )
}

export default Join_Info