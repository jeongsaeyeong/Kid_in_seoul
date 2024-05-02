import React from 'react'
import Comment from '../../../assets/img/comment.svg'
import ReComment from '../../../assets/img/recomment.svg'

const Comm_AricleComment = () => {
    return (
        <div className="comment_wrap">
            <div className="comment_write">
                <input type="text" placeholder='댓글을 입력해주세요!' />
                <button>등록</button>
            </div>
            <div className="comment_list">
                <div className="comment_count">
                    <img src={Comment} alt="" />
                    <p>77</p>
                </div>
                <div className='comment'>
                    <h4>엄마손파이</h4>
                    <div>
                        <p>당일 전화 문의도 가능할까요?</p>
                        <button>답글쓰기</button>
                    </div>
                    <p  className='date'>2024.04.24 20:50</p>
                </div>
                <div className='comment_re'>
                    <img src={ReComment} alt="" />
                    <div>
                        <div className='writer'>
                            <h4>닉네임입니다</h4>
                            <div className="cate">작성자</div>
                        </div>
                        <div>
                            <p>
                                네~<br />
                                저도 당일 문의했습니다 ^^
                            </p>
                            <button>답글쓰기</button>
                        </div>
                        <p className='date'>2024.04.24 20:50</p>
                    </div>
                </div>
                <div className='comment'>
                    <h4>아빠야</h4>
                    <div>
                        <p>좋은 정보 감사해요~~~</p>
                        <button>답글쓰기</button>
                    </div>
                    <p  className='date'>2024.04.24 20:50</p>
                </div>
            </div>
        </div>
    )
}

export default Comm_AricleComment