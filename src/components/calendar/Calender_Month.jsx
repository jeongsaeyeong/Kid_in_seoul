import React, { useEffect, useState } from 'react'
import Calender_Month_C from './Calender_Month_C'
import Plus from '../../assets/img/puls.svg'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Calender_Month = () => {
    const user = useSelector((state) => (state.user))
    const [today, setToday] = useState([]);
    const [monthS, setMonthS] = useState([])
    const navigate = useNavigate();

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const dayNumber = currentDate.getDay();

    const dayOfWeek = (dayNumber) => {
        const days = ['일', '월', '화', '수', '목', '금', '토'];
        return days[dayNumber];
    };
    
    const currentDayOfWeek = dayOfWeek(dayNumber);

    useEffect(() => {
        if (user.accessToken !== '') {
            axios.get('/schedule/view-month', {
                params: {
                    year: year,
                    month: month
                }
            })
                .then((res) => {
                    setMonthS(res.data)

                    axios.get('/schedule/view-day', {
                        params: {
                            year: year,
                            month: month,
                            day: date
                        }
                    })
                        .then((res) => {
                            setToday(res.data)

                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
        }
    }, [user.accessToken])

    return (
        <div className='calendar_month'>
            <h2>일정관리</h2>
            <div className="calendar_main">
                <Calender_Month_C monthS={monthS}/>
                <div className="today_schedule">
                    <h2>{month}월 {date}일 {currentDayOfWeek}요일</h2>
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
                            </div>
                        </div>
                    ))}
                    <button onClick={() => {navigate(`/calender/${year}-0${month}-${date}`)}}>
                        <img src={Plus} alt="" />
                        <p>일정 추가하기</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calender_Month