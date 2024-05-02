import React from 'react'
import Delete from '../../../assets/img/delete_schedule.svg'
import Plus from '../../../assets/img/puls.svg'

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
                    <button>
                        <img src={Delete} alt="" />
                    </button>
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
                    <button>
                        <img src={Delete} alt="" />
                    </button>
                </div>
            </div>
            <button onClick={() => setShow(true)}>
                <img src={Plus} alt="" />
                <p>일정 추가하기</p>
            </button>
        </div>
    )
}

export default Date_schedule