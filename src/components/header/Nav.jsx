import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav id="nav">
                <ul>
                    <li>
                        <Link to='/carecenter'>어린이집 확인</Link>
                        <ul>
                            <li><Link to='/carecenter'>내 주변 어린이집</Link></li>
                            <li><Link to='/carecenter/:night'>야간⋅365어린이집</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/place/:park'>아이와 함께</Link>
                        <ul>
                            <li><Link to='/place/park'>공원 등 외야 시설</Link></li>
                            <li><Link to='/place/art'>서울시립미술관</Link></li>
                            <li><Link to='/place/kidscafe'>서울형 키즈카페</Link></li>
                            <li><Link to='/place/library'>주변도서관</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/calender'>나의 달력</Link>
                        <ul>
                            <li><Link to='/calender'>일정 관리</Link></li>
                            <li><Link to='/calender_bothchild'>이번주 아이와 함께한 시간</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/community'>커뮤니티</Link>
                        <ul>
                            <li><Link to='/community'>타임라인</Link></li>
                            <li><Link to='/communitywrite'>게시글 작성</Link></li>
                            <li><Link to='/community_friend'>친구 관리</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/mypage'>마이페이지</Link>
                        <ul>
                            <li><Link to='/mypage_info'>회원정보 수정</Link></li>
                            <li><Link to='/mypage/area'>거주 자치구 변경</Link></li>
                            <li><Link to='/mypage_care'>소속 어린이집 등록 및 수정</Link></li>
                            <li><Link to='/mypage/:mark'>저장된 장소</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav