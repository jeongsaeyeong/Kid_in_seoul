import React from 'react'
import Hart from '../../../assets/img/hart.svg'
import HartFull from '../../../assets/img/hart_full.svg'
import axios from 'axios';

const Comm_ArticleA = ({ post, setLike, Like }) => {

    const PutAndOutLike = () => {
        const newLike = !Like;

        setLike(newLike);

        if (newLike) {
            axios.patch(`/posts/like/${post.id}`)
                .then((res) => {
                    console.log('first', Like)
                    console.log(res.status);
                })
                .catch((error) => {
                    console.error('Failed to like post:', error);
                });
        } else {
            axios.patch(`/posts/like-cancel/${post.id}`)
                .then((res) => {
                    console.log('second', Like)
                    console.log(res.status);
                })
                .catch((error) => {
                    console.error('Failed to cancel like:', error);
                });
        }
    };


    return (
        <div className='article'>
            <div className="catecory">성북구 지역 커뮤니티</div>
            <h3 className="title">{post.title}</h3>
            <p className='nickname'>{post.authorNickname}({post.authorUserId})</p>
            <p className='time'>2024.04.24 20:47</p>
            <p className='text'>
                {post.content}
            </p>
            <div className="like">
                {Like ? (
                    <img src={HartFull} alt="" onClick={() => { PutAndOutLike(); }} />
                ) : (
                    <img src={Hart} alt="" onClick={() => { PutAndOutLike(); }} />
                )}
                <p>{post.likeNum}</p>
            </div>
        </div>
    )
}

export default Comm_ArticleA