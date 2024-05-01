import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useNavigate } from 'react-router-dom';

const Calender_Month_C = () => {
    const navigate = useNavigate();

    const handleDateClick = (arg) => {
        navigate(`/calender/${arg.dateStr}`)
    }

    return (
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
    )
}

export default Calender_Month_C