import React from 'react'

const Friends_Search = ({setWantfriends}) => {
    return (
        <div className="header">
            <h3>친구 요청하기</h3>
            <div className="search_friends">
                <input type="text" placeholder='친구의 아이디를 검색해보세요.' />
                <button onClick={() => {setWantfriends(true)}}>친구 요청하기</button>
            </div>
        </div>
    )
}

export default Friends_Search