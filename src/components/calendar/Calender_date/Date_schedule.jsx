import React from 'react'

const Date_schedule = ({ setShow }) => {
    return (
        <div className="today_schedule">
            <h2>하루 일정</h2>
            <div className='schedule'>
                <div className='left'>
                    <div className="cate care"></div>
                    <div className="time">09:00 -16:00</div>
                </div>
                <div className="right">
                    <div>
                        <h3>하원</h3>
                        <p className="place">돈암하늘채어린이집</p>
                    </div>
                    <button >+</button>
                </div>
            </div>
            <div className='schedule'>
                <div className='left'>
                    <div className="cate coparation"></div>
                    <div className="time">09:00 -16:00</div>
                </div>
                <div className="right">
                    <div>
                        <h3>하원</h3>
                        <p className="place">돈암하늘채어린이집</p>
                    </div>
                    <button>+</button>
                </div>
            </div>
            <button onClick={() => setShow(true)}>
                <img src="" alt="" />
                <p>일정 추가하기</p>
            </button>
        </div>
    )
}

export default Date_schedule