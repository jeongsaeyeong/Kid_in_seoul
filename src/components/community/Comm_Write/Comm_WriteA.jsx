import React from 'react'

const Comm_WriteA = ({setShow}) => {
    return (
        <>
            <h2>글쓰기</h2>
            <input type="text" placeholder='글의 제목을 입력해주세요' className='title' />
            <textarea name="article" id="article" cols="30" rows="10" placeholder='내용을 입력해주세요.'></textarea>
            <div>
                <button className='show' onClick={() => { setShow(true) }}>등록 취소</button>
                <button className='upload'>등록하기</button>
            </div>
        </>
    )
}

export default Comm_WriteA