import React from 'react'
import CoummunityIcon from '../../assets/img/community.svg'

const Comm_no = ({setClick}) => {
    return (
        <div className='no_comm'>
            <div>
                <img src={CoummunityIcon} alt="" />
                <p>
                    커뮤니티 가입 시 다른 사용자들과 지역 및 육아에<br />
                    관한 정보 공유 및 소통이 가능합니다.
                </p>
                <button onClick={()=> {setClick(true)}}>커뮤니티 시작하기</button>
            </div>
        </div>
    )
}

export default Comm_no