import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"

const Date_Calender = () => {
    return (
        <div className='fullCalendar_month'>
            <FullCalendar
                locale='kr'
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
            />
        </div>
    )
}

export default Date_Calender