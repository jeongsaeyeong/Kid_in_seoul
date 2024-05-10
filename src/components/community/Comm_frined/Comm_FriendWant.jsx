import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Comm_FriendWant = ({ setWantfriends, wantfrinedId }) => {

    const WantFriend = () => {
        if(wantfrinedId !== ''){
            axios.post(`/friendship/request/${wantfrinedId}`)
                .then((res) => {
                    alert('성공적으로 요청되었습니다.')
                    setWantfriends(false)
                })
                .catch((err) => {
                    if(404){
                        alert('존재하지 않는 아이디입니다.')
                        setWantfriends(false)
                    }
                })
        } else {
            alert('아이디를 입력해주세요!')
        }
    }

    return (
        <div className='ok_friend'>
            <div>
                <h2>친구 요청하기</h2>
                <p>
                    아이디 {wantfrinedId}님께 친구 요청하시겠습니까? <br />
                    친구가 되면 서로의 일정을 확인할 수 있습니다.
                </p>
                <div>
                    <button className='nope' onClick={() => { setWantfriends(false) }}>취소하기</button>
                    <button className='okay' onClick={() => {WantFriend()}}>수락하기</button>
                </div>
            </div>
        </div>
    )
}

export default Comm_FriendWant