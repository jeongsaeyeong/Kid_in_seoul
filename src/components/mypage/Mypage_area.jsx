import React, { useState } from 'react'

const Mypage_area = () => {
    const [full, setfull] = useState(false);
    const [selectedAreaIndex, setSelectedAreaIndex] = useState(null);

    const areas = [
        ['강남구', '강동구', '강북구', '강서구', '관악구'],
        ['광진구', '구로구', '금천구', '노원구', '도봉구'],
        ['동대문구', '동작구', '마포구', '서대문구', '서초구'],
        ['성동구', '성북구', '송파구', '양천구', '영등포구'],
        ['용산구', '은평구', '종로구', '중구', '중랑구']
    ];

    const handleAreaClick2 = (areaIndex) => {
        setSelectedAreaIndex(areaIndex);
    };

    return (
        <div className='join_wrap'>
            <div className='choice_area'>
                <h2>자치구 재설정</h2>
                <p>
                    현재 거주하고 있는 서울특별시의 자치구를 선택해주세요. <br />
                    선택하신 자치구 맞춤 정보 및 커뮤니티를 제공해드립니다.
                </p>
                <div className='area'>
                    {areas.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            {row.map((area, index) => {
                                const areaIndex = rowIndex * areas.length + index + 1;
                                return (
                                    <p
                                        key={index}
                                        className={selectedAreaIndex === areaIndex ? 'full' : ''}
                                        onClick={() => handleAreaClick2(areaIndex)}
                                    >
                                        {area}
                                    </p>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <button className={full ? 'next' : ''}>새로 설정하기</button>
            </div>
        </div>
    )
}

export default Mypage_area