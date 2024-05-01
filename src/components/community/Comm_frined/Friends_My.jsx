import React from 'react'

const Friends_My = ({showMonth, setShowMonth}) => {
    return (
        <div className="my_friends_list">
            <h4>친구 목록</h4>
            <div className='list'>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>임시</button>
                </div>
            </div>
            <div className="pagenation">
                <button><img src="" alt="" /></button>
                <p className='click'>1</p>
                <p>2</p>
                <button><img src="" alt="" /></button>
            </div>
        </div>
    )
}

export default Friends_My