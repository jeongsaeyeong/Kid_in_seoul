import React, { useEffect, useState } from 'react'
import Comm_TimeSortLike from './Comm_TimeSortLike'
import Comm_TimeSortTime from './Comm_TimeSortTime'
import axios from 'axios'

const Comm_TImelineTime = () => {
    const [show, setShow] = useState('All')
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        axios.get('/members/me')
            .then((res) => {
                setUserInfo(res.data)
                const regionId = res.data.regionId;
                console.log(regionId);

                axios.get(`/posts/region/${regionId}?size=${30}`)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
    }, [])

    return (
        <div className="timeline">
            {show == 'All' ? (
                <>
                    <Comm_TimeSortLike setShow={setShow} />
                    <Comm_TimeSortTime setShow={setShow} />
                </>
            ) : (
                <>
                    {show == 'Like' ? (
                        <>
                            <h2>커뮤니티 인기글</h2>
                            <Comm_TimeSortLike />
                        </>
                    ) : (
                        <>
                            <h2>커뮤니티 최신글</h2>
                            <Comm_TimeSortTime />
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Comm_TImelineTime