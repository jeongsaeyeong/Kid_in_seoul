import React, { useState } from 'react'
import Calender_Month_C from '../../calendar/Calender_Month_C'
import Comm_FriendOk from './Comm_FriendOk'
import Friends_My from './Friends_My'
import Friends_Want from './Friends_Want'
import Friends_Search from './Friends_Search'
import Comm_FriendWant from './Comm_FriendWant'

const Comm_Friend = () => {
    const [showMonth, setShowMonth] = useState(false)
    const [okfriends, setOkfriends] = useState(false)
    const [wantfriends, setWantfriends] = useState(false)

    return (
        <div className='comm_friend_wrap'>
            <Friends_Search setWantfriends={setWantfriends}/>
            <div className="main">
                <Friends_My showMonth={showMonth} setShowMonth={setShowMonth}/>
                <Friends_Want okfriends={okfriends} setOkfriends={setOkfriends}/>
            </div>
            {showMonth ? (
                <div className='calendar_month call'>
                    <div className="calendar_main">
                        <h2>딸기님의 일정</h2>
                        <Calender_Month_C />
                    </div>
                </div>
            ) : (
                <></>
            )}
            {okfriends ? (
                <Comm_FriendOk setOkfriends={setOkfriends}/>
            ) : (
                <></>
            )}
            {wantfriends ? (
                <Comm_FriendWant  setWantfriends={setWantfriends}/>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Comm_Friend