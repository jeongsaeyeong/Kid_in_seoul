import React, { useState } from 'react'
import Filter from '../../assets/img/filter.svg'
import Up from '../../assets/img/up.svg'

const CareCenter_kind = ({ filter, setFilter, setType }) => {
    const kinds = ['가정', '국공립', '민간', '법인 단체 등', '사회복지법인', '직장', '협동'];

    const [selectedKind, setSelectedKind] = useState(null);

    const handleCheckboxChange = (index) => {
        setSelectedKind(index === selectedKind ? null : index);
        setType(kinds[index]); // 수정: index를 사용하여 해당 항목을 선택하도록 수정
    };

    return (
        <>
            {filter ? (
                <div
                    className='kind_of_carecenter'
                    onClick={() => { setFilter(!filter) }}
                >
                    <div>
                        <img src={Filter} alt="" />
                        <p>어린이집 유형 선택</p>
                    </div>
                </div>
            ) : (
                <div
                    className='kind_of_carecenter on'
                >
                    <div>
                        <img src={Filter} alt="" />
                        <p>어린이집 유형 선택</p>
                    </div>
                    <div className='list'>
                        {kinds.map((kind, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    name="kind"
                                    id={`kind${index}`}
                                    checked={index === selectedKind}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                                <label htmlFor={`kind${index}`}></label>
                                <p>{kind}</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => { setFilter(!filter) }}>
                        <img src={Up} alt="" />
                    </button>
                </div>
            )}
        </>
    )
}

export default CareCenter_kind