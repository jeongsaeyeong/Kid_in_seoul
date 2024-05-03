import React, { useState } from 'react'
import Left from '../../assets/img/left.svg'
import Right from '../../assets/img/right.svg'

const Pagenation = ({childcares}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = childcares.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지를 변경하는 함수
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="pagenation">
            <img src={Left} alt="" onClick={() => setCurrentPage(prevPage => prevPage === 1 ? prevPage : prevPage - 1)} />
            {Array.from({ length: Math.ceil(childcares.length / itemsPerPage) }, (v, i) => (
                <p key={i} className={currentPage === i + 1 ? 'click' : ''} onClick={() => paginate(i + 1)}>{i + 1}</p>
            ))}
            <img src={Right} alt="" onClick={() => setCurrentPage(prevPage => prevPage === Math.ceil(childcares.length / itemsPerPage) ? prevPage : prevPage + 1)} />
        </div>
    )
}

export default Pagenation