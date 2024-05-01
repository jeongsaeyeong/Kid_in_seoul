import React from 'react'

const Comm_FriendWant = ({setWantfriends}) => {
    return (
        <div className='ok_friend'>
            <div>
                <h2>친구 요청하기</h2>
                <p>
                    갈릭포테이토 님께 친구 요청하시겠습니까? <br />
                    친구가 되면 서로의 일정을 확인할 수 있습니다.
                </p>
                <div>
                    <button className='nope' onClick={() => { setWantfriends(false) }}>취소하기</button>
                    <button className='okay'>수락하기</button>
                </div>
            </div>
        </div>
    )
}

export default Comm_FriendWant