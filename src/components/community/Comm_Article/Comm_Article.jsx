import React, { useEffect, useState } from 'react'
import Comm_TimelineProfile from '../Comm_Timeline/Comm_TimelineProfile'
import Comm_ArticleA from './Comm_ArticleA'
import Comm_AricleComment from './Comm_AricleComment'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../Loading'
import { useSelector } from 'react-redux'

const Comm_Board = () => {
    const user = useSelector((state => state.user))
    const [userInfo, setUserInfo] = useState([])
    const [post, setPost] = useState([])
    const [Like, setLike] = useState(false);
    const [postAuthor, setPostAuthor] = useState('')
    const params = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`/posts/${params.boardId}`)
            .then((res) => {
                setPost(res.data)
                setPostAuthor(res.data.authorNickname)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [Like])

    useEffect(() => {
        axios.get('/members/me')
        .then((res) => {
            setUserInfo(res.data)
            setLoading(true)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [user])

    return (
        <>
            {loading ? (
                <div className='comm_timeline comm_board'>
                    <Comm_TimelineProfile userInfo={userInfo} />
                    <div className='comm_Article'>
                        <Comm_ArticleA post={post} setLike={setLike} Like={Like} />
                        <Comm_AricleComment params={params.boardId} postAuthor={postAuthor} />
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>

    )
}

export default Comm_Board