import React, { useEffect, useState } from 'react'
import ReComment from '../../../assets/img/recomment.svg'
import axios from 'axios'

const Comm_ArticleReComment = ({ commentId, postAuthor, send, DeleteComment }) => {
    const [recomment, setRecomment] = useState([])

    useEffect(() => {
        axios.get(`/posts/recomment/${commentId}`)
            .then((res) => {
                setRecomment(res.data)
                console.log('recomment', recomment)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [send])

    return (
        <>
            {recomment.length > 0 && (
                <>
                    {recomment.map((recomm, key) => (
                        <div className='comment_re' key={key}>
                            <img src={ReComment} alt="" />
                            <div>
                                <div className='writer'>
                                    <h4>{recomm.author}</h4>
                                    {postAuthor === recomm.author ? (
                                        <div className="cate">작성자</div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div>
                                    <p>
                                        {recomm.content}
                                    </p>
                                    <div className="btn">
                                        <button className="delete" onClick={() => {DeleteComment()}}>삭제</button>
                                    </div>
                                </div>
                                <p className='date'>2024.04.24 20:50</p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </>
    );

}

export default Comm_ArticleReComment