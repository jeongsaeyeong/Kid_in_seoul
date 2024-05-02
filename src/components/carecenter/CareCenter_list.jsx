import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Search from '../../assets/img/search.svg'
import Left from '../../assets/img/left.svg'
import Right from '../../assets/img/right.svg'


const CareCenter_list = () => {
    const params = useParams();
    const [kind, setKind] = useState('내 주변 어린이집')

    useEffect(() => {
        console.log(params.night)
        if (params.night == ':night') {
            setKind('야간 365 어린이집')
        } 

        switch (params.art) {
            case 'art':
                setKind('서울시립미술관');
                break;
            case 'library':
                setKind('주변 도서관');
                break;
            case 'park':
                setKind('공원 등 외야 시설');
                break;
            case 'kidscafe':
                setKind('키즈카페');
                break;
        }
    }, [params, kind])

    return (
        <div className='carecenter_list'>
            <h2>{kind}</h2>
            <div className='search'>
                <img src={Search} alt="" />
                <input type="text" placeholder='지역, 어린이집을 검색해보세요' />
            </div>
            <div className='list'>
                <h5>현재 가까운 어린이집</h5>
                <p>돈암하늘채어린이집</p>
                <p>휴먼빌어린이집</p>
                <p>레미안숲어린이집</p>
                <p>안암래미안어린이집</p>
                <p>삼선예일어린이집</p>
                <p>해피래미안어린이집</p>
                <p>청명어린이집</p>
                <p>아뜰리에어린이집</p>
                <p>키즈맘어린이집</p>
                <p>엔젤어린이집</p>
            </div>
            <div className="pagenation">
                <img src={Left} alt="" />
                <p className='click'>1</p>
                <p>2</p>
                <p>3</p>
                <img src={Right} alt="" />
            </div>
        </div>
    )
}

export default CareCenter_list