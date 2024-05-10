import React, { useEffect, useState } from 'react'
import Left from '../../../assets/img/left.svg'
import Right from '../../../assets/img/right.svg'
import axios from 'axios'

const Friends_Want = ({ setOkfriends, setOkFriendId, setOkFreindNick }) => {
    const PROXY = process.env.REACT_APP_SERVER_URL
    const [OkList, setOkList] = useState([])

    useEffect(() => {
        axios.get(`${PROXY}/friendship/received`)
            .then((res) => {
                setOkList([...res.data])
            })
    }, [])

    return (
        <div className="want_friends_list">
            <h4>친구 요청 목록</h4>
            <div className='list'>
                {OkList.map((item, index) => (
                    <div key={index}>
                        <p>{item.friendNickname}</p>
                        <button onClick={() => { setOkfriends(true); setOkFriendId(item.friendshipId); setOkFreindNick(item.friendNickname) }}>수락</button>
                    </div>
                ))}
            </div>
            <div className="pagenation">
                <button><img src={Left} alt="" /></button>
                <p className='click'>1</p>
                <button><img src={Right} alt="" /></button>
            </div>
        </div>
    )
}

export default Friends_Want