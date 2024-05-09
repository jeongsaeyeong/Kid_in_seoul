import React, { useEffect, useState } from 'react'
import Add_headers from './Add_Date/Add_headers';
import Add_Main from './Add_Date/Add_Main';
import Add_Footer from './Add_Date/Add_Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Date_Plusschedule = ({ setShow }) => {
    const params = useParams()
    const [date, setDate] = useState('')
    const [type, setTpye] = useState('')
    const [title, setTitle] = useState('')
    const [widthChild, setWidthChild] = useState(0)
    const [facilityId, setFacilityId] = useState(0)
    const [startTime, setStartTime] = useState({
        hour: "0",
        minute: "0",
        second: "0",
        nano: "0"
    })

    const [endTime, setEndTime] = useState({
        hour: "0",
        minute: "0",
        second: "0",
        nano: "0"
    })

    useEffect(() => {
        setDate(params.dateId)
    }, [params])

    const AddToday = () => {
        // if (type === '' || title === '' || facilityId === '') {
        //     alert('빈칸을 모두 채워주세요!')
        //     return
        // }

        axios.post('/schedule/add', {
            "title": "더미 스케줄 1",
            "content": "더미 내용 1",
            "date": "2024-04-29",
            "startTime": "9:00",
            "endTime": "12:00",
            "isWithChild": 1,
            "facilityId": 1,
            "type": "어린이집"
        })
            .then(response => {
                console.log('일정 추가 성공:', response.data);
            })
            .catch(error => {
                console.error('일정 추가 실패:', error);
            });
    }

    return (
        <div className='puls_schedule'>
            <div>
                <Add_headers setTpye={setTpye} type={type} />
                <Add_Main title={title} setTitle={setTitle} facilityId={facilityId} setFacilityId={setFacilityId}
                    startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime}
                />
                <Add_Footer AddToday={AddToday} setShow={setShow} widthChild={widthChild} setWidthChild={setWidthChild}
                />
            </div>
        </div>
    )
}

export default Date_Plusschedule