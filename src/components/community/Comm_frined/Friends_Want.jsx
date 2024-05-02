import React from 'react'
import Left from '../../../assets/img/left.svg'
import Right from '../../../assets/img/right.svg'

const Friends_Want = ({setOkfriends}) => {
    return (
        <div className="want_friends_list">
            <h4>친구 요청 목록</h4>
            <div className='list'>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setOkfriends(true) }}>수락</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setOkfriends(true) }}>수락</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setOkfriends(true) }}>수락</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setOkfriends(true) }}>수락</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setOkfriends(true) }}>수락</button>
                </div>
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