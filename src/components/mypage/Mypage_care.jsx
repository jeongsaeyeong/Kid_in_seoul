import React from 'react'
import Map_All from '../Map_All'

const Mypage_care = () => {
    return (
        <div className='carecenter_wrap'>
            <div className='carecenter_list'>
                <h2>나의 어린이집</h2>
                <p>현재 등록된 어린이집이 없습니다.</p>
            </div>
            <Map_All />
        </div>
    )
}

export default Mypage_care