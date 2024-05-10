import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import { useNavigate } from 'react-router-dom';

const Calender_Month_C = ({ monthS }) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        console.log('monthS', monthS)
        const newEvents = monthS.map(month => ({
            title: month.title,
            date: `${month.date[0]}-0${month.date[1]}-${month.date[2]}`,
            color: `${month.type === '어린이집 일정' ? '#E2DAFF' : (month.type === '회사 일정' ? '#FFDCDA' : '#DAF4FF')}`,
            textColor: 'var(--black)'
        }));

        setEvents(newEvents)
        console.log(events)
    }, [monthS]);

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
                events={events}
                dateClick={handleDateClick}
            />
        </div>
    )
}

export default Calender_Month_C