import React from 'react'
import Left from '../../../assets/img/left.svg'
import Right from '../../../assets/img/right.svg'
import Month from '../../../assets/img/month.svg'

const Friends_My = ({showMonth, setShowMonth}) => {
    return (
        <div className="my_friends_list">
            <h4>친구 목록</h4>
            <div className='list'>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
                <div>
                    <p>딸기</p>
                    <button onClick={() => { setShowMonth(!showMonth) }}>
                        <img src={Month} alt="" />
                    </button>
                </div>
            </div>
            <div className="pagenation">
                <button><img src={Left} alt="" /></button>
                <p className='click'>1</p>
                <p>2</p>
                <button><img src={Right} alt="" /></button>
            </div>
        </div>
    )
}

export default Friends_My