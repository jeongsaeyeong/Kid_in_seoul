import React from 'react'

const Join_pickarea = () => {
  return (
    <div className='choice_area'>
        <h2>자치구 선택</h2>
        <p>
            현재 거주하고 있는 서울특별시의 자치구를 선택해주세요. <br />
            선택하신 자치구 맞춤 정보 및 커뮤니티를 제공해드립니다.
        </p>
        <div className='area'>
            <div>
                <p>강남구</p>
                <p>강동구</p>
                <p>강북구</p>
                <p>강서구</p>
                <p>관악구</p>
            </div>
            <div>
                <p>광진구</p>
                <p>구로구</p>
                <p>금천구</p>
                <p>노원구</p>
                <p>도봉구</p>
            </div>
            <div>
                <p>동대문구</p>
                <p>동작구</p>
                <p>마포구</p>
                <p>서대문구</p>
                <p>서초구</p>
            </div>
            <div>
                <p>성동구</p>
                <p>성북구</p>
                <p>송파구</p>
                <p>양천구</p>
                <p>영등포구</p>
            </div>
            <div>
                <p>용산구</p>
                <p>은평구</p>
                <p>종로구</p>
                <p>중구</p>
                <p>중랑구</p>
            </div>
        </div>
        <button>Kids in Seoul 시작하기</button>
    </div>
  )
}

export default Join_pickarea