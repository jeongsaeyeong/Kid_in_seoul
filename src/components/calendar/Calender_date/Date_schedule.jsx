import React, { useEffect, useState } from 'react'
import Delete from '../../../assets/img/delete_schedule.svg'
import Plus from '../../../assets/img/puls.svg'
import axios from 'axios'

const Date_schedule = ({ setShow, today, setChange, change }) => {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

    useEffect(() => {
        console.log('today', today)
    }, [today])

    const DelSchedule = (scheduleId) => {
        console.log(scheduleId);

        if (window.confirm("정말 삭제하시겠습니까?")) {
            axios.delete(`/schedule/delete/${scheduleId}`)
                .then((res) => {
                    console.log(res.status);
                    setChange(!change)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className="today_schedule">
            <h2>하루 일정</h2>
            {today.map((today, index) => (
                <div className='schedule' key={index}>
                    <div className='left'>
                        <div className={today.type === '어린이집 일정' ? 'cate violet' : (today.type === '회사 일정' ? 'cate pink' : 'cate blue')}></div>
                        <div className="time">{today.startTime[0]}:{today.startTime[1]} - {today.endTime[0]}:{today.endTime[1]}</div>
                    </div>
                    <div className="right">
                        <div>
                            <h3>{today.title}</h3>
                            <p className="place">{today.facilityName}</p>
                        </div>
                        <button onClick={() => { DelSchedule(today.id); }}>
                            <img src={Delete} alt="" />
                        </button>
                    </div>
                </div>
            ))}
            <button onClick={() => setShow(true)}>
                <img src={Plus} alt="" />
                <p>일정 추가하기</p>
            </button>
        </div>
    )
}

export default Date_schedule