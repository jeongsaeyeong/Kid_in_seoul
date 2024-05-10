import React from 'react'
import Comm_ArticleReComment from './Comm_ArticleReComment';
import axios from 'axios';

const Comm_ArticleJustComment = ({ commentId, setReOrnot, reOrnot, commentList, setCommentId, postAuthor, send, setSend }) => {
    const PROXY =process.env.REACT_APP_SERVER_URL
    const DeleteComment = () => {
        const confirmed = window.confirm("정말로 삭제하시겠습니까?");
        
        if (confirmed && commentId !== 0) {
            axios.delete(`${PROXY}/posts/comment/delete/${commentId}`, {
                params: {
                    commentId: commentId
                }
            })
                .then((res) => {
                    console.log(res.status);
                    setSend(!(send))
                })
                .catch((error) => {
                    console.error("삭제 중 오류 발생:", error);
                });
        }
    }


    return (
        <>
            {commentList ? (
                <>
                    {commentList.map((comment, key) => (
                        <div key={key}>
                            <div className='comment'>
                                <div className='writer'>
                                    <h4>{comment.author}</h4>
                                    {postAuthor === comment.author ? (
                                        <div className="cate">작성자</div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div>
                                    <p>{comment.content}</p>
                                    <div className='btn'>
                                        <button className='send' onClick={() => { setReOrnot(!reOrnot); setCommentId(comment.comment_id) }}>답글쓰기</button>
                                        <button className='delete' onClick={() => { DeleteComment(); setCommentId(comment.comment_id) }}>삭제</button>
                                    </div>
                                </div>
                                <p className='date'>2024.04.24 20:50</p>
                            </div>
                            <Comm_ArticleReComment DeleteComment={DeleteComment} setCommentId={setCommentId} postAuthor={postAuthor} setReOrnot={setReOrnot} reOrnot={reOrnot} commentId={comment.comment_id} send={send} />
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <p>아직 댓글이 없습니다!</p>
                </>
            )}

        </>
    )
}

export default Comm_ArticleJustComment