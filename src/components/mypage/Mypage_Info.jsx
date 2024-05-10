import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Mypage_Info = () => {
    const PROXY =process.env.REACT_APP_SERVER_URL
    const [nickMsg, setNickMsg] = useState('')
    const [userInfo, setUserInfo] = useState([])
    const [changeNick, setChangeNick] = useState('')
    const [AllOk, setAllOk] = useState(false)

    useEffect(() => {
        axios.get(`${PROXY}/members/me`)
            .then((res) => {
                setUserInfo(res.data)
            })
    }, [])

    const checkNick = () => {
        if (changeNick === '') {
            alert('빈칸을 모두 채워주세요!')
            return
        }

        axios.get(`${PROXY}/members/check-nickname`, {
            params: {
                "nickname": changeNick
            }
        })
            .then((res) => {
                if (res.status === 200) {
                    setNickMsg('사용 가능')
                    setAllOk(true)
                }
            })
    }

    const Change = () => {
        if (!(AllOk)) {
            alert('변경사항이 없습니다.')
            return
        }

        axios.patch(`${PROXY}/members/update`, {
            "userId": userInfo.userId,
            "nickname": changeNick,
            "name": userInfo.name,
            "phoneNum": userInfo.phoneNum,
            "regionId": userInfo.regionId
        })
            .then((res) => {
                console.log(res.status)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='mypage_Info'>
            <h2>회원정보 수정</h2>
            <div>
                <div>
                    <p className="kind">휴대폰 번호</p>
                    <p className='info'>{userInfo.phoneNum}</p>
                </div>
                <div>
                    <p className="kind">이름</p>
                    <p className='info'>{userInfo.name}</p>
                </div>
                <div>
                    <p className="kind">아이디</p>
                    <p className='info'>{userInfo.userId}</p>
                </div>
                <div>
                    <p className="kind">닉네임</p>
                    <input type="text" placeholder={userInfo.nickname} className='info'
                        value={changeNick} onChange={(e) => { setChangeNick(e.target.value) }}
                    />
                    <button className={changeNick ? 'full' : ''} onClick={() => { checkNick() }}>닉네임 중복검사</button>
                    <p className='ok'>{nickMsg}</p>
                </div>
            </div>
            <button className={AllOk ? 'full' : ''} onClick={() => { Change() }}>저장하기</button>
        </div>
    )
}

export default Mypage_Info