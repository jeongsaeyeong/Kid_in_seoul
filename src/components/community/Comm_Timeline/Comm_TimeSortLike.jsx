import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Comm_TimeSortLike = ({ regionId, setLoading }) => {
    const PROXY = process.env.REACT_APP_SERVER_URL
    const [LikePost, setLikePost] = useState([])

    //좋아요 순으로 불러오기 
    useEffect(() => {
        axios.get(`${PROXY}/posts/region/like/${regionId}?size=${30}`)
            .then((res) => {
                console.log(res.data)
                setLikePost(res.data)
                setLoading(true)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [regionId])

    return (
        <div className="sort_like">
            <button><Link to='/community_like'>실시간 인기글</Link></button>
            {LikePost.length !== 0 ? (
                <>
                    {LikePost.map((like, index) => (
                        <div key={like.id} className={index === LikePost.length - 1 ? 'last' : ''}>
                            <Link to={`/community/${like.id}`}>
                                <h4>{like.title}</h4>
                                <p>{like.content}</p>
                                <div>
                                    <div className='like'>
                                        <img src="" alt="" />
                                        <p>{like.likeNum}</p>
                                    </div>
                                    <div className='comment'>
                                        <img src="" alt="" />
                                        <p>{like.comments}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </>
            ) : (
                <div>
                    <h4>아직 글이 존재하지 않습니다.</h4>
                </div>
            )}
        </div>
    )
}

export default Comm_TimeSortLike