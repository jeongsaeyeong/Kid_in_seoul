import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Search from '../../assets/img/search.svg'
import Left from '../../assets/img/left.svg'
import Right from '../../assets/img/right.svg'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CareCenter_list = ({ loading, setSearch, search, setAddress, type, setSelect, setAdd }) => {
    const PROXY = process.env.REACT_APP_SERVER_URL;

    const user = useSelector((state => state.user))
    const params = useParams();
    const [kind, setKind] = useState('내 주변 어린이집')
    const [clicklist, setClicklist] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [Alllist, setAllList] = useState([])
    const [List, setList] = useState([])

    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Alllist.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        if (params.night === ':night') {
            setKind('야간 365 어린이집')
            axios.get(`${PROXY}/kindergarden/view-region/night`)
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
                axios.get(`${PROXY}/kindergarden/view-region`)
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
            axios.get(`${PROXY}/members/preferred-facility`)
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
                axios.get(`${PROXY}/art-gallery/list`)
                    .then((res) => {
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
                axios.get(`${PROXY}/library/list`)
                    .then((res) => {
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
                axios.get(`${PROXY}/outdoor-facility/list`)
                    .then((res) => {
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
                axios.get(`${PROXY}/kids-cafe/list`)
                    .then((res) => {
                        setAllList([...res.data])
                        setList(List)
                        setAdd(true)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                break;
            case ':festival':
                setKind('전국 축제');
                axios.get(`${PROXY}/events/all`)
                    .then((res) => {
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
            const name = item.name || '';
            const eventName = item.eventName || '';
            return name.toLowerCase().includes(keyword) || eventName.toLowerCase().includes(keyword);
        });

        if (filteredList[0]) {
            if (params.art === 'library') {
                setAddress(filteredList[0].postNum)
            } else {
                if (params.art === ':festival') {
                    setAddress(filteredList[0].place)
                } else {
                    setAddress(filteredList[0].address)
                }
            }
        }
    }

    const filterListByType = (type) => {
        const filteredList = Alllist.filter(item => item.type === type);
        setList(filteredList);
        console.log(List)
    }

    useEffect(() => {
        if (user.accessToken !== '') {
            axios.get('/members/me')
                .then((res) => {
                    if (res.data.id !== '') {
                        axios.post('http://kidsinseoul-flask.shop/recommend', {
                            "member_id": res.data.id
                        })
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((Err) => {
                                console.log(Err)
                            })
                    }
                })
                .catch((Err) => {
                    console.log(Err)
                })
        }
    }, [user.accessToken])

    useEffect(() => {
        filterListByType(type);
    }, [type]);

    useEffect(() => {
        setSearch(clicklist)
    }, [clicklist])

    return (
        <div className='carecenter_list'>
            {List ? (
                <>
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
                        {params.art === ':festival' ? (
                            <>
                                {currentItems.map((festival, index) => (
                                    <div key={index} onClick={() => { setClicklist(festival.eventName); setAddress(festival.place); setSelect(festival) }}>
                                        <p>{festival.eventName}</p>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
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

                </>
            ) : (
                <>
                    <h2>목록이 존재하지 않습니다.</h2>
                </>
            )}
        </div >
    )
}

export default CareCenter_list