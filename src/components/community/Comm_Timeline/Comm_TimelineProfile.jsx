import React, { useEffect, useState } from 'react'
import CommLogo from '../../../assets/img/community_logo.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Comm_TimelineProfile = () => {
    const [friendList, setFreindList] = useState([])
    const navigate = useNavigate();

    const GoingFriend = () => {
        navigate('/community_friend')
    }

    useEffect(() => {
        axios.get('/friendship/list')
            .then((res) => {
                setFreindList(res.data)
            })
    }, [])

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
                    <button onClick={() => { GoingFriend() }}>친구 추가하기</button>
                </div>
                <div className='frined_list'>
                    {friendList.length === 0 ? (
                        <p>아직 친구가 없습니다.</p>
                    ) : (
                        <>
                            {friendList.map((friend, index) => (
                                <div key={index}>
                                    <p>{friend.nickname}</p>
                                </div>
                            ))}
                        </>
                    )}
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