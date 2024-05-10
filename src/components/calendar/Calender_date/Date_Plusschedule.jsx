import React, { useEffect, useState } from 'react'
import Add_headers from './Add_Date/Add_headers';
import Add_Main from './Add_Date/Add_Main';
import Add_Footer from './Add_Date/Add_Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Date_Plusschedule = ({ setShow, setChange, change }) => {
    const PROXY = process.env.REACT_APP_SERVER_URL;
    const user = useSelector((state => state.user))
    const params = useParams()
    const [date, setDate] = useState('')
    const [type, setTpye] = useState('')
    const [title, setTitle] = useState('')
    const [widthChild, setWidthChild] = useState(0)
    const [facilityId, setFacilityId] = useState(0)
    const [startTime, setStartTime] = useState('00:00')
    const [endTime, setEndTime] = useState('12:00')

    useEffect(() => {
        setDate(params.dateId)
    }, [params])

    const AddToday = () => {
        if (type === '' || title === '' || facilityId === '') {
            alert('빈칸을 모두 채워주세요!')
            return
        }

        axios.post(`${PROXY}/schedule/add`, {
            "title": title,
            "content": "",
            "date": date,
            "startTime": startTime,
            "endTime": endTime,
            "isWithChild": widthChild,
            "facilityId": facilityId.id,
            "type": type
        })
            .then(response => {
                console.log('일정 추가 성공:', response.data);
                setChange(!change)
                setShow(false)
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