import React, { useEffect, useState } from 'react'
import Comment from '../../../assets/img/comment.svg'
import Comm_ArticleJustComment from './Comm_ArticleJustComment'
import axios from 'axios'

const Comm_AricleComment = ({ params, postAuthor }) => {
    const [reOrnot, setReOrnot] = useState(false)
    const [content, setContent] = useState('');
    const [commentList, setCommentList] = useState([])
    const [commentId, setCommentId] = useState(0)
    const [send, setSend] = useState(false)

    // 일반 댓글 
    useEffect(() => {
        axios.get(`/posts/comments/${params}`)
            .then((res) => {
                setCommentList(res.data )
                console.log('commentList ', commentList)
            })
    }, [send])

    // 댓글 보내기
    const SendComment = () => {
        if (content === '') {
            alert('내용을 작성해주세요!')
            return
        }

        axios.post('/posts/comment/write', {
            "content": content,
            "postId": params
        })
            .then((res) => {
                console.log(res.data)
                setSend(!send)
                setContent('')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // 대댓글 보내기
    const SendReComment = () => {
        if (content === '') {
            alert('내용을 작성해주세요!')
            return
        }

        axios.post('/posts/recomment/write', {
            "content": content,
            "postId": params,
            "commentId": commentId
        })
            .then((res) => {
                console.log(res.data)
                setSend(!send)
                setContent('')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="comment_wrap">
            <div className="comment_write">
                {reOrnot ? (
                    <>
                        <input value={content} type="text" placeholder='대댓글을 입력해주세요!'
                            onChange={(e) => { setContent(e.target.value) }}
                        />
                        <button onClick={() => { SendReComment() }}>등록</button>
                    </>
                ) : (
                    <>
                        <input value={content} type="text" placeholder='댓글을 입력해주세요!'
                            onChange={(e) => { setContent(e.target.value) }}
                        />
                        <button onClick={() => { SendComment() }}>등록</button>
                    </>
                )}
            </div>
            <div className="comment_list">
                <div className="comment_count">
                    <img src={Comment} alt="" />
                    <p>{commentList.length}</p>
                </div>
                <Comm_ArticleJustComment postAuthor={postAuthor} setCommentId={setCommentId} setSend={setSend} send={send}
                    setReOrnot={setReOrnot} reOrnot={reOrnot} commentList={commentList} commentId={commentId}/>
            </div>
        </div>
    )
}

export default Comm_AricleComment