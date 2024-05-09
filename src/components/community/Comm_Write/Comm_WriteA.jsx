import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Comm_WriteA = ({ setShow }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userInfo, setUserInfo] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/members/me')
            .then((res) => {
                setUserInfo(res.data)
            })
    }, [])

    const upLoadPost = () => {
        if (title === '' || content === '') {
            alert('제목과 내용을 모두 입력해주세요!');
            return
        }
        axios.post('/posts/write', {
            "title": title,
            "content": content
        })
            .then((res) => {
                console.log(res.data)
                navigate(`/community/${res.data.id}`)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <>
            <h2>글쓰기</h2>
            <input type="text" placeholder='글의 제목을 입력해주세요' className='title'
                value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <textarea name="article" id="article" cols="30" rows="10" placeholder='내용을 입력해주세요.'
                value={content} onChange={(e) => { setContent(e.target.value) }}
            />
            <div>
                <button className='show' onClick={() => { setShow(true) }}>등록 취소</button>
                <button className='upload' onClick={() => { upLoadPost() }}>등록하기</button>
            </div>
        </>
    )
}

export default Comm_WriteA