import axios from 'axios'
import React, { useEffect } from 'react'

const Comm_FriendOk = ({ setOkfriends, okFriendId, okFriendNick }) => {
    const PROXY = process.env.REACT_APP_SERVER_URL
    const OkFriends = () => {
        axios.post(`${PROXY}/friendship/approve/${okFriendId}`)
            .then((res) => {
                setOkfriends(false) 
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='ok_friend'>
            <div>
                <h2>친구 요청 수락하기</h2>
                <p>
                    {okFriendNick} 님과 친구하시겠습니까? <br />
                    친구가 되면 서로의 일정을 확인할 수 있습니다.
                </p>
                <div>
                    <button className='nope' onClick={() => { setOkfriends(false) }}>취소하기</button>
                    <button className='okay' onClick={() => { OkFriends() }}>수락하기</button>
                </div>
            </div>
        </div>
    )
}

export default Comm_FriendOk