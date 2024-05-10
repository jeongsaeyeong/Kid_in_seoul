import React, { useEffect, useState } from 'react'

const Date_Hour = ({today}) => {
    const [hour, sethour] = useState({
        
    })
    
    useEffect(() => {
        today.map((day, key) => {
            console.log(day.startTime)
            console.log(day.endTime)
        })
    }, [today])

    const hours = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
        <div className="left">
            <div className='rule'>
                <div className="left">하루종일</div>
                <div className="right"></div>
            </div>
            {hours.map(hour => (
                <div key={hour}>
                    <div className="left">오전 {hour}시</div>
                    <div className="right"></div>
                </div>
            ))}
            {hours.map(hour => (
                <div key={hour}>
                    <div className="left">오후 {hour}시</div>
                    <div className="right"></div>
                </div>
            ))}
        </div>
    )
}

export default Date_Hour