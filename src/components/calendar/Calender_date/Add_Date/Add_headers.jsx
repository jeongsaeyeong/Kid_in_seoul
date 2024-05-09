import React from 'react'

const Add_headers = ({type, setTpye}) => {
    return (
        <div className="header">
            <div className="cate">
                <button className={type === '어린이집 일정' ? 'violet' : ''} onClick={() => { setTpye('어린이집 일정') }}>어린이집 일정</button>
                <button className={type === '회사 일정' ? 'pink' : ''} onClick={() => { setTpye('회사 일정') }}>회사 일정</button>
                <button className={type === '기타 일정' ? 'blue' : ''} onClick={() => { setTpye('기타 일정') }}>기타 일정</button>
            </div>
            <div className="box">
                <div className="keep">별</div>
                <div className="share">공</div>
            </div>
        </div>
    )
}

export default Add_headers