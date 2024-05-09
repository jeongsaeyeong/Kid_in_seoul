import React from 'react'

const Out_Member = ({ setShow }) => {
    return (
        <div className='out_Member'>
            <div >
                <h2>회원 탈퇴하기</h2>
                <p>정말 탈퇴하시겠습니까? <br />
                    저장된 정보와 데이터는 모두 삭제됩니다.</p>
                <div className="btn">
                    <button className="not_cancel" onClick={() => { setShow(false) }}>취소</button>
                    <button className="ok">탈퇴하기</button>
                </div>
            </div>
        </div>
    )
}

export default Out_Member