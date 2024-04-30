import React from 'react'
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"  // a plugin!
import { useNavigate } from 'react-router-dom';

const Calender_Month = () => {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    const handleDateClick = (arg) => {
        navigate(`/calender/${arg.dateStr}`)
    }

    return (
        <div className='calendar_month'>
            <h2>일정관리</h2>
            <div className="calendar_main">
                <div className='fullCalendar_month'>
                    <FullCalendar
                        locale='kr'
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'event 2', date: '2024-04-30' }
                        ]}
                        dateClick={handleDateClick}
                    />
                </div>
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
                        <img src="" alt="" />
                        <p>일정 추가하기</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calender_Month