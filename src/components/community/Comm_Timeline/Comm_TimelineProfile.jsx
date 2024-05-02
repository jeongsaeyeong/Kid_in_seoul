import React from 'react'
import CommLogo from '../../../assets/img/community_logo.svg'

const Comm_TimelineProfile = () => {
    return (
        <div className="left">
            <div className="profile">
                <p>내 프로필</p>
                <div>
                    <div className="picture"></div>
                    <div>
                        <h4>수정맘(QWE123)</h4>
                        <p>성북구</p>
                    </div>
                </div>
            </div>
            <div className="friends">
                <div className='frined_title'>
                    <p>친구 목록</p>
                    <button>친구 추가하기</button>
                </div>
                <div className='frined_list'>
                    <p>딸기</p>
                    <p>mommy</p>
                    <p>현수현서맘</p>
                    <p>가나다라마바사</p>
                    <p>서울사람</p>
                </div>
                <div className='paginetion'>
                    <img src="" alt="" />
                    <p>1</p>
                    <p>2</p>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="community_list">
                <p>가입한 커뮤니티</p>
                <div>
                    <img src={CommLogo} alt="" />
                    <h4>성북구 지역 커뮤니티</h4>
                </div>
            </div>
        </div>
    )
}

export default Comm_TimelineProfile