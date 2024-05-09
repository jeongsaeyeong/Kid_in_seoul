import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Add_Main = ({ title, setTitle, setFacilityId, setStartTime, setEndTime }) => {
    const [search, setSearch] = useState('')
    const [AllList, setAllList] = useState([])
    const [List, setList] = useState([])
    const [getId, setGetId] = useState(0)

    const PutTheStartTime = (e) => {
        const time = e;
        const [hour, minute] = time.split(':').map(Number);

        setStartTime({
            hour,
            minute,
            second: 0,
            nano: 0
        });
    };

    const PutTheEndTime = (e) => {
        const time = e;
        const [hour, minute] = time.split(':').map(Number);

        setEndTime({
            hour,
            minute,
            second: 0,
            nano: 0
        });
    };

    const Allday = () => {
        setStartTime({
            hour: 0,
            minute: 0,
            second: 0,
            nano: 0
        });

        setEndTime({
            hour: 23,
            minute: 59,
            second: 59,
            nano: 59
        });
    }

    // 모든 시설 정보 리스트

    useEffect(() => {
        axios.get('/all')
            .then((res) => {
                setAllList(res.data)
                searchList('성신')
            })
    }, [])

    const searchList = (searchKeyword) => {
        const keyword = searchKeyword.toLowerCase();
        const filteredList = AllList.filter(item => {
            return item.name.toLowerCase().includes(keyword);
        });
        setList(filteredList.slice(0, 5));
    }

    useEffect(() => {
        if (List.length !== 0) {
            const State = List[0];
            setFacilityId(State)
        }
    }, [List])

    return (
        <div className="main">
            <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='일정 제목' className='title' />
            <div className="timeset">
                <div>
                    <div className="start">
                        <input type="time" onChange={(e) => PutTheStartTime(e.target.value)} />
                    </div>
                    <div className="end">
                        <input type="time" onChange={(e) => PutTheEndTime(e.target.value)} />
                    </div>
                </div>
                <button className='all' onClick={() => { Allday() }}>하루종일</button>
            </div>
            <div className='place'>
                <img src="" alt="" />
                <input value={search} type="text" placeholder='장소' onChange={(e) => { searchList(e.target.value); setSearch(e.target.value) }} />
            </div>
            <div className='map_wrap'>
                {List.map((list, key) => (
                    <p key={key} onClick={() => { setSearch(list.name); setGetId(list.id) }}>{list.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Add_Main