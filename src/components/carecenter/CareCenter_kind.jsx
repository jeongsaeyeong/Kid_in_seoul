import React from 'react'
import Filter from '../../assets/img/filter.svg'

const CareCenter_kind = ({ filter, setFilter }) => {
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
                        <div>
                            <input type="checkbox" name="kind" id="kind" />
                            <label htmlFor="kind"></label>
                            <p>가정</p>
                        </div>
                        <div>
                            <input type="checkbox" name="kind" id="kind" />
                            <label htmlFor="kind"></label>
                            <p>국공립</p>
                        </div>
                        <div>
                            <input type="checkbox" name="kind" id="kind" />
                            <label htmlFor="kind"></label>
                            <p>민간</p>
                        </div>
                        <div>
                            <input type="checkbox" name="kind" id="kind" />
                            <label htmlFor="kind"></label>
                            <p>법인 단체 등</p>
                        </div>
                        <div>
                            <input type="checkbox" name="kind" id="kind" />
                            <label htmlFor="kind"></label>
                            <p>사회복지법인</p>
                        </div>
                        <div>
                            <input type="checkbox" name="kind" id="kind" />
                            <label htmlFor="kind"></label>
                            <p>직장</p>
                        </div>
                        <div>
                            <input type="checkbox" name="kind" id="kind" />
                            <label htmlFor="kind"></label>
                            <p>협동</p>
                        </div>
                    </div>
                    <button onClick={() => {setFilter(!filter)}}>임시</button>
                </div>
            )}
        </>
    )
}

export default CareCenter_kind