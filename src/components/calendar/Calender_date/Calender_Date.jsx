import React, { useEffect, useState } from 'react'
import Date_header from './Date_header'
import Date_Hour from './Date_Hour'
import Date_Calender from './Date_Calender'
import Date_schedule from './Date_schedule'
import Date_Plusschedule from './Date_Plusschedule'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Calender_Date = () => {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

    const user = useSelector((state) => (state.user))
    const [change, setChange] = useState(false)
    const [show, setShow] = useState(false)
    const [today, setToday] = useState([])

    const params = useParams()

    useEffect(() => {
        const date = params.dateId;
        const parts = date.split('-').map(part => part.toString());

        if (user.accessToken !== '') {
            axios.get('/schedule/view-day', {
                params: {
                    year: parts[0],
                    month: parts[1],
                    day: parts[2]
                }
            })
                .then((res) => {
                    setToday(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }


    }, [user, change])

    return (
        <>
            <div className='calender_date_wrap'>
                <Date_header />
                <Date_Hour today={today}/>
                <div className="right">
                    <Date_Calender />
                    <Date_schedule setShow={setShow} today={today} setChange={setChange} change={change}/>
                </div>
            </div>
            {show ? (
                <Date_Plusschedule setShow={setShow} setChange={setChange} change={change}/>
            ) : (
                <></>
            )}
        </>
    )
}

export default Calender_Date