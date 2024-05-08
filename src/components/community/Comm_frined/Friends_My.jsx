import React, { useEffect, useState } from 'react'
import Left from '../../../assets/img/left.svg'
import Right from '../../../assets/img/right.svg'
import Month from '../../../assets/img/month.svg'
import axios from 'axios'

const Friends_My = ({ showMonth, setShowMonth }) => {
    const [myFriend, setMyFrined] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = myFriend.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        axios.get('/friendship/list')
            .then((res) => {
                setMyFrined(res.data)
                console.log(myFriend[0])
            })
    }, [])

    return (
        <div className="my_friends_list">
            <h4>친구 목록</h4>
            <div className='list'>
                {myFriend.map((item, index) => (
                    <div key={index}>
                        <p>{item.nickname}</p>
                        <button onClick={() => { setShowMonth(!showMonth) }}>
                            <img src={Month} alt="" />
                        </button>
                    </div>
                ))}
            </div>
            <div className="pagenation">
                <button>
                    <img src={Left} alt="" onClick={() => setCurrentPage(prevPage => prevPage === 1 ? prevPage : prevPage - 1)} />
                </button>
                {myFriend[0] !== undefined ? (
                    <>
                        {Array.from({ length: Math.ceil(myFriend.length / itemsPerPage) }, (v, i) => (
                            (currentPage - 2 <= i && i <= currentPage + 2) && (
                                <p key={i} className={currentPage === i + 1 ? 'click' : ''} onClick={() => paginate(i + 1)}>{i + 1}</p>
                            )
                        ))}
                    </>
                ) : (
                    <p className='click'>1</p>
                )}
                <button>
                    <img src={Right} alt="" onClick={() => setCurrentPage(prevPage => prevPage === Math.ceil(myFriend.length / itemsPerPage) ? prevPage : prevPage + 1)} />
                </button>
            </div>
        </div>
    )
}

export default Friends_My