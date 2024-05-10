import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Search from '../../assets/img/search.svg'
import Left from '../../assets/img/left.svg'
import Right from '../../assets/img/right.svg'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CareCenter_list = ({ loading, setSearch, search, setAddress, type, setSelect, setAdd }) => {
    const user = useSelector((state => state.user))
    const params = useParams();
    const [kind, setKind] = useState('내 주변 어린이집')
    const [clicklist, setClicklist] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [Alllist, setAllList] = useState([])
    const [List, setList] = useState([])
    const navigate = useNavigate()

    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Alllist.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        if (params.night === ':night') {
            setKind('야간 365 어린이집')
            axios.get('/kindergarden/view-region/night')
                .then((res) => {
                    console.log(res.data)
                    setAllList([...res.data])
                    setList(List)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            if (loading && kind === '내 주변 어린이집') {
                axios.get('/kindergarden/view-region')
                    .then((res) => {
                        setAllList([...res.data])
                        setList(List)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } 
        }

        if (params.mark === ':mark') {
            setKind('저장한 장소')
            axios.get('/members/preferred-facility')
                .then((res) => {
                    setAllList([...res.data])
                    console.log(Alllist)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        switch (params.art) {
            case 'art':
                setKind('서울시립미술관');
                axios.get('/art-gallery/list')
                    .then((res) => {
                        console.log('서울시립미술관', res.data)
                        setAllList([...res.data])
                        setList(List)
                        setAdd(true)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                break;
            case 'library':
                setKind('주변 도서관');
                axios.get('/library/list')
                    .then((res) => {
                        console.log('도서관', res.data)
                        setAllList([...res.data])
                        setList(List)
                        setAdd(true)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                break;
            case 'park':
                setKind('공원 등 외야 시설');
                axios.get('/outdoor-facility/list')
                    .then((res) => {
                        console.log('공원', res.data)
                        setAllList([...res.data])
                        setList(List)
                        setAdd(true)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                break;
            case 'kidscafe':
                setKind('키즈카페');
                axios.get('/kids-cafe/list')
                    .then((res) => {
                        console.log('키즈카페', res.data)
                        setAllList([...res.data])
                        setList(List)
                        setAdd(true)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                break;
        }
    }, [params, kind, loading, user])

    const searchList = (searchKeyword) => {
        const keyword = searchKeyword.toLowerCase();

        const filteredList = Alllist.filter(item => {
            return item.name.toLowerCase().includes(keyword);
        });

        if (filteredList[0]) {
            if (params.art === 'library') {
                setAddress(filteredList[0].postNum)
            } else {
                setAddress(filteredList[0].address)
            }
        }
    }

    const filterListByType = (type) => {
        const filteredList = Alllist.filter(item => item.type === type);
        setList(filteredList);
    }

    useEffect(() => {
        filterListByType(type);
    }, [type]);

    useEffect(() => {
        setSearch(clicklist)
    }, [clicklist])

    return (
        <div className='carecenter_list'>
            <h2>{kind}</h2>
            <div className='search'>
                <img src={Search} alt="" />
                <input
                    value={search}
                    type="text"
                    placeholder={`${kind} 검색해보세요`}
                    onChange={(e) => { setSearch(e.target.value); searchList(e.target.value); }}
                />
            </div>
            <div className='list'>
                {kind === '내 주변 어린이집' ? (
                    <h5>현재 가까운 어린이집</h5>
                ) : (
                    <h5>{kind} 목록</h5>
                )}
                {params.art === 'library' ? (
                    <>
                        {currentItems.map((childcare, index) => (
                            <div key={index} onClick={() => { setClicklist(childcare.name); setAddress(childcare.postNum); setSelect(childcare) }}>
                                <p>{childcare.name}</p>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        {currentItems.map((childcare, index) => (
                            <div key={index} onClick={() => { setClicklist(childcare.name); setAddress(childcare.address); setSelect(childcare) }}>
                                <p>{childcare.name}</p>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className="pagenation">
                <img src={Left} alt="" onClick={() => setCurrentPage(prevPage => prevPage === 1 ? prevPage : prevPage - 1)} />
                {Array.from({ length: Math.ceil(Alllist.length / itemsPerPage) }, (v, i) => (
                    (currentPage - 2 <= i && i <= currentPage + 2) && (
                        <p key={i} className={currentPage === i + 1 ? 'click' : ''} onClick={() => paginate(i + 1)}>{i + 1}</p>
                    )
                ))}
                <img src={Right} alt="" onClick={() => setCurrentPage(prevPage => prevPage === Math.ceil(Alllist.length / itemsPerPage) ? prevPage : prevPage + 1)} />
            </div>
        </div >
    )
}

export default CareCenter_list