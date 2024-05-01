import React, { useState } from 'react'
import Date_header from './Date_header'
import Date_Hour from './Date_Hour'
import Date_Calender from './Date_Calender'
import Date_schedule from './Date_schedule'
import Date_Plusschedule from './Date_Plusschedule'

const Calender_Date = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='calender_date_wrap'>
                <Date_header />
                <Date_Hour />
                <div className="right">
                    <Date_Calender />
                    <Date_schedule setShow={setShow}/>
                </div>
            </div>
            {show ? (
                <Date_Plusschedule setShow={setShow}/>
            ) : (
                <></>
            )}  
        </>
    )
}

export default Calender_Date