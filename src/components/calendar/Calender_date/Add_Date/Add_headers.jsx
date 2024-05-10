import React, { useState } from 'react'
import Start from '../../../../assets/img/star.svg'
import StartFull from '../../../../assets/img/sharefull.svg'
import Share from '../../../../assets/img/share.svg'

const Add_headers = ({type, setTpye}) => {
    const [click, setClick] = useState(false)

    return (
        <div className="header">
            <div className="cate">
                <button className={type === '어린이집 일정' ? 'violet' : ''} onClick={() => { setTpye('어린이집 일정') }}>어린이집 일정</button>
                <button className={type === '회사 일정' ? 'pink' : ''} onClick={() => { setTpye('회사 일정') }}>회사 일정</button>
                <button className={type === '기타 일정' ? 'blue' : ''} onClick={() => { setTpye('기타 일정') }}>기타 일정</button>
            </div>
            <div className="box">
                {click ? (
                    <div className="keep">
                        <img src={Start} alt="" />
                    </div>
                ) : (
                    <div className="keep">
                        <img src={StartFull} alt="" />
                    </div>
                )}
                <div className="share">
                    <img src={Share} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Add_headers