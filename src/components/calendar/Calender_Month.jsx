import React from 'react'
import Calender_Month_C from './Calender_Month_C'
import Plus from '../../assets/img/puls.svg'

const Calender_Month = () => {
    return (
        <div className='calendar_month'>
            <h2>일정관리</h2>
            <div className="calendar_main">
                <Calender_Month_C />
                <div className="today_schedule">
                    <h2>4월 30일 화요일</h2>
                    <div className='schedule'>
                        <div className='left'>
                            <div className="cate care"></div>
                            <div className="time">09:00 -16:00</div>
                        </div>
                        <div className="right">
                            <h3>하원</h3>
                            <p className="place">돈암하늘채어린이집</p>
                        </div>
                    </div>
                    <div className='schedule'>
                        <div className='left'>
                            <div className="cate coparation"></div>
                            <div className="time">09:00 -16:00</div>
                        </div>
                        <div className="right">
                            <h3>하원</h3>
                            <p className="place">돈암하늘채어린이집</p>
                        </div>
                    </div>
                    <div className='schedule'>
                        <div className='left'>
                            <div className="cate etc"></div>
                            <div className="time">09:00 -16:00</div>
                        </div>
                        <div className="right">
                            <h3>하원</h3>
                            <p className="place">돈암하늘채어린이집</p>
                        </div>
                    </div>
                    <button>
                        <img src={Plus} alt="" />
                        <p>일정 추가하기</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calender_Month