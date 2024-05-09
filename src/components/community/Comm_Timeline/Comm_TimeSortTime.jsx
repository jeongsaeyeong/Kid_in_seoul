import React, { useEffect, useState } from 'react'
import Comm_WriteGoBtn from '../Comm_Write/Comm_WriteGoBtn'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Comm_TimeSortTime = ({ regionId, setLoading }) => {
    const [JustPost, setJustPost] = useState([])

    // 작성한 글 불러오기 
    useEffect(() => {
        console.log(regionId)
        axios.get(`/posts/region/${regionId}?size=${30}`)
            .then((res) => {
                setJustPost(res.data)
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [regionId])

    return (
        <>
            <div className="sort_time">
                <button> <Link to='/community_time'>커뮤니티 최신글</Link></button>
                {JustPost.length !== 0 ? (
                    <>
                        {JustPost.map((just, index) => (
                            <div key={just.id} className={index === JustPost.length - 1 ? 'last' : ''}>
                                <h4>{just.title}</h4>
                                <p>{just.content}</p>
                                <div>
                                    <div className='like'>
                                        <img src="" alt="" />
                                        <p>{just.likeNum}</p>
                                    </div>
                                    <div className='comment'>
                                        <img src="" alt="" />
                                        <p>{just.comments}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div>
                        <h4>아직 글이 존재하지 않습니다.</h4>
                    </div>
                )}
            </div>
            <Comm_WriteGoBtn />
        </>

    )
}

export default Comm_TimeSortTime