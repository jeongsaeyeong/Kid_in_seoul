import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender_Month = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar_month'>
            <h2>일정관리</h2>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default Calender_Month