import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NoLogin from '../NoLogin';
import axios from 'axios';


const Calender_BothChild = () => {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    
    const [Loading, setLoading] = useState(false)
    const user = useSelector((state => state.user))
    const [data, setData] = useState([
        {
            name: '일',
            pv: 12,
            amt: 12,
        },
        {
            name: '월',
            pv: 7,
            amt: 12,
        },
        {
            name: '화',
            pv: 5,
            amt: 12,
        },
        {
            name: '수',
            pv: 8,
            amt: 12,
        },
        {
            name: '목',
            pv: 5,
            amt: 12,
        },
        {
            name: '금',
            pv: 3,
            amt: 12,
        },
        {
            name: '토',
            pv: 12,
            amt: 12,
        },
    ])

    useEffect(() => {
        if (user.accessToken !== '') {
            setLoading(true);
            axios.get(`${PROXY}/schedule/view/with-child`)
                .then((res) => {
                    const receivedData = res.data;
                    const newData = receivedData.map((item, index) => ({
                        name: item.day.substring(0, 1),
                        pv: parseInt(item.time),
                        amt: parseInt(item.time),
                    }));
                    setData(newData);
                    setLoading(true);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    setLoading(false);
                });
        }

        console.log(data)
    }, [user]);

    return (
        <>
            {Loading ? (
                <div id='chart_weekly'>
                    <h2>이번주 아이와 함께한 시간</h2>
                    <div>
                        <div className='left'>
                            <ResponsiveContainer width="90%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="pv" fill="var(--main)" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="right">
                            <div>
                                <div>
                                    <h3>이번주 아이와 보낸 일일 평균 시간</h3>
                                    <div>
                                        <p className="time">14시간 30분</p>
                                        <p className="info">지난주보다<br /> 10% 증가</p>
                                    </div>
                                </div>
                                <div>
                                    <h3>다른 사용자가 아이와 보낸 일일 평균 시간</h3>
                                    <div>
                                        <p className="time">12시간 30분</p>
                                        <p className="info">다른 사용자보다<br />2시간 많음</p>
                                    </div>
                                </div>
                            </div>
                            <p>
                                나의 달력에 입력한 일정 정보를 바탕으로 계산된 통계로,<br />
                                아이와 보낸 시간은 어린이집 시간 및 회사 근무 시간 등이 제외된 시간입니다.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <NoLogin />
                </>
            )}

        </>
    )
}

export default Calender_BothChild