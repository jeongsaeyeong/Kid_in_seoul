import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Date_header = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [Month, setMonth] = useState('');
    const [Today, setToday] = useState('');
    const [DayOfWeek, setDayOfWeek] = useState('');

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
        <div className='header'>
            <button onClick={() => { backPage() }}></button>
            <h2>{Month}월 {Today}일 {DayOfWeek}</h2>
        </div>
    )
}

export default Date_header