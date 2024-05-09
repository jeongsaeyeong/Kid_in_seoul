import React, { useEffect, useState } from 'react'
import CommLogo from '../../../assets/img/community_logo.svg'
import Left from '../../../assets/img/left.svg'
import Right from '../../../assets/img/right.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Comm_TimelineProfile = ({ userInfo }) => {
    const [friendList, setFreindList] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

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


    const itemsPerPage = 10;

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="left">
            <div className="profile">
                <p>내 프로필</p>
                <div>
                    <div className="picture"></div>
                    <div>
                        <h4>{userInfo.nickname} ({userInfo.userId})님</h4>
                        <p>{userInfo.regionName}</p>
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
                <div className="pagenation">
                    <button><img src={Left} alt="" onClick={() => setCurrentPage(prevPage => prevPage === 1 ? prevPage : prevPage - 1)} /></button>
                    {Array.from({ length: Math.ceil(friendList.length / itemsPerPage) }, (v, i) => (
                        (currentPage - 2 <= i && i <= currentPage + 2) && (
                            <p key={i} className={currentPage === i + 1 ? 'click' : ''} onClick={() => paginate(i + 1)}>{i + 1}</p>
                        )
                    ))}
                    <button><img src={Right} alt="" onClick={() => setCurrentPage(prevPage => prevPage === Math.ceil(friendList.length / itemsPerPage) ? prevPage : prevPage + 1)} /></button>
                </div>
            </div>
            <div className="community_list">
                <p>가입한 커뮤니티</p>
                <div>
                    <img src={CommLogo} alt="" />
                    <h4>{userInfo.regionName} 지역 커뮤니티</h4>
                </div>
            </div>
        </div>
    )
}

export default Comm_TimelineProfile