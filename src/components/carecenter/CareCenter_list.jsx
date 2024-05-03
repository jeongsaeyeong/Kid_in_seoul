import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Search from '../../assets/img/search.svg'
import Left from '../../assets/img/left.svg'
import Right from '../../assets/img/right.svg'


const CareCenter_list = ({ setSearch, search }) => {
    const params = useParams();
    const [kind, setKind] = useState('내 주변 어린이집')
    const [clicklist, setClicklist] = useState('')
    const [currentPage, setCurrentPage] = useState(1);

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

    useEffect(() => {
        setSearch(clicklist)
        console.log(search)
    }, [clicklist])

    const childcares = Array.from({ length: 30 }, (v, i) => `어린이집 ${i + 1}`);
    const itemsPerPage = 10;

    // 현재 페이지의 데이터를 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = childcares.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지를 변경하는 함수
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='carecenter_list'>
            <h2>{kind}</h2>
            <div className='search'>
                <img src={Search} alt="" />
                <input
                    value={search}
                    type="text"
                    placeholder='지역, 어린이집을 검색해보세요'
                    onChange={(e) => { setSearch(e.target.value) }}
                />
            </div>
            <div className='list'>
                <h5>현재 가까운 어린이집</h5>
                {currentItems.map((childcare, index) => (
                    <p key={index} onClick={() => setClicklist(childcare)}>{childcare}</p>
                ))}
            </div>
            <div className="pagenation">
                <img src={Left} alt="" onClick={() => setCurrentPage(prevPage => prevPage === 1 ? prevPage : prevPage - 1)} />
                {Array.from({ length: Math.ceil(childcares.length / itemsPerPage) }, (v, i) => (
                    <p key={i} className={currentPage === i + 1 ? 'click' : ''} onClick={() => paginate(i + 1)}>{i + 1}</p>
                ))}
                <img src={Right} alt="" onClick={() => setCurrentPage(prevPage => prevPage === Math.ceil(childcares.length / itemsPerPage) ? prevPage : prevPage + 1)} />
            </div>
        </div>
    )
}

export default CareCenter_list