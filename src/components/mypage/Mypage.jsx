import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MypageImg from '../../assets/img/mypage.svg'
import Address from '../../assets/img/addresswhite.svg'
import Home from '../../assets/img/home.svg'
import Mark from '../../assets/img/bookmark.svg'
import Out_Member from './Out_Member'

const Mypage = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='mypage'>
                <h2>마이페이지</h2>
                <Link to='/mypage_info'>
                    <div>
                        <img src={MypageImg} alt="" />
                        <p>회원정보 수정</p>
                    </div>
                </Link>
                <Link to='/mypage_area'>
                    <div>
                        <img src={Address} alt="" />
                        <div>
                            <p>거주 자치구 변경</p>
                            <p className='info'>성북구</p>
                        </div>
                    </div>
                </Link>
                <Link to='/mypage_care'>
                    <div>
                        <img src={Home} alt="" />
                        <div>
                            <p>소속 어린이집 등록 및 수정</p>
                            <p className='info'>미등록</p>
                        </div>
                    </div>
                </Link>
                <Link to='/mypage/:mark'>
                    <div>
                        <img src={Mark} alt="" />
                        <div>
                            <p>저장된 장소</p>
                            <p className='info'>4개</p>
                        </div>
                    </div>
                </Link>
                <button onClick={() => { setShow(true) }}>탈퇴하기</button>

            </div>
            {show ? (
                <Out_Member setShow={setShow}/>
            ) : (
                <></>
            )}
        </>
    )
}

export default Mypage