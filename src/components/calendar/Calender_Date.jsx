import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"  // a plugin!
import { useNavigate } from 'react-router-dom';

const Calender_Date = () => {
    const params = useParams();
    const [Month, setMonth] = useState('');
    const [Today, setToday] = useState('');
    const [DayOfWeek, setDayOfWeek] = useState('');
    const navigate = useNavigate();

    const hours = Array.from({ length: 12 }, (_, index) => index + 1);

    useEffect(() => {
        const paramStr = params.dateId;
        const parts = paramStr.split('-');
        if (parts[1] !== '' && parts[2] !== '') {
            setMonth(parts[1]);
            setToday(parts[2]);
        }

        const date = new Date(params.dateId);
        let dayOfWeek = date.getDay();
        const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

        dayOfWeek = (dayOfWeek === 0) ? 7 : dayOfWeek;
        dayOfWeek += 1;
        const dayString = days[dayOfWeek - 1];
        setDayOfWeek(dayString);

        console.log(DayOfWeek)
    }, [params, DayOfWeek]);

    const backPage = () => {
        navigate(-1)
    }

    return (
        <div className='calender_date_wrap'>
            <div className='header'>
                <button onClick={() => { backPage() }}></button>
                <h2>{Month}월 {Today}일 {DayOfWeek}</h2>
            </div>
            <div className="left">
                <div className='rule'>
                    <div className="left">하루종일</div>
                    <div className="right"></div>
                </div>
                {hours.map(hour => (
                    <div key={hour}>
                        <div className="left">오전 {hour}시</div>
                        <div className="right"></div>
                    </div>
                ))}
                {hours.map(hour => (
                    <div key={hour}>
                        <div className="left">오후 {hour}시</div>
                        <div className="right"></div>
                    </div>
                ))}
            </div>
            <div className="right">
                <div className='fullCalendar_month'>
                    <FullCalendar
                        locale='kr'
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                    />
                </div>
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
                            <button>+</button>
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
                    <button>
                        <img src="" alt="" />
                        <p>일정 추가하기</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calender_Date