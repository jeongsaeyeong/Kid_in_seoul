import React from 'react'

const Comm_FriendOk = ({setOkfriends}) => {
  return (
    <div className='ok_friend'>
        <div>
            <h2>친구 요청 수락하기</h2>
            <p>
                유진맘 님과 친구하시겠습니까? <br />
                친구가 되면 서로의 일정을 확인할 수 있습니다.
            </p>
            <div>
                <button className='nope' onClick={()=> {setOkfriends(false)}}>취소하기</button>
                <button className='okay'>수락하기</button>
            </div>
        </div>
    </div>
  )
}

export default Comm_FriendOk