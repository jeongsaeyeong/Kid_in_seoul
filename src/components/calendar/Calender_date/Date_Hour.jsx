import React, { useEffect, useState } from 'react';

const Date_Hour = ({ today }) => {
    const [hoursData, setHoursData] = useState([]);

    useEffect(() => {
        if (today.length !== 0) {
            const splitHours = () => {
                const hours = [];
                for (let i = 0; i < 24; i++) {
                    const time = `${i}:00`;
                    const schedule = today.filter(({ startTime, endTime }) => {
                        const startHour = startTime[0];
                        const endHour = endTime[0];
                        return i >= startHour && i < endHour;
                    });
                    hours.push({
                        time: time,
                        day: schedule,
                    });
                }
                return hours;
            };

            const allHours = splitHours();
            setHoursData(allHours);
        }
    }, [today]);

    console.log('hoursData', hoursData);

    const renderScheduleBoxes = (schedules) => {
        return schedules.map((schedule, index) => {
            let boxClassName = "box";
    
            if (schedule.type === "어린이집 일정") {
                boxClassName += " violet";
            } else if (schedule.type === "회사 일정") {
                boxClassName += " pink";
            } else {
                boxClassName += " blue";
            }
    
            return (
                <div key={index} className={boxClassName}>
                    <h3>{schedule.title}</h3>
                    <p>{schedule.facilityName}</p>
                </div>
            );
        });
    };
    

    return (
        <div className="left">
            <div className='rule'>
                <div className="left">하루종일</div>
                <div className="right"></div>
            </div>
            {hoursData.map(({ time, day }) => (
                <div key={time}>
                    <div className="left">{time}</div>
                    <div className="right" id={time}>
                        {renderScheduleBoxes(day)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Date_Hour;
