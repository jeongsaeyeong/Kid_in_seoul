import React from 'react'

const Add_Footer = ({ AddToday, setShow, setWidthChild, widthChild }) => {

    const handleCheck = () => {
        if (widthChild === 0) {
            setWidthChild(1)
        } else {
            setWidthChild(0)
        }
    }

    return (
        <div className="footer">
            <div>
                <input type="checkbox" id='with_child' onClick={() => { handleCheck() }} />
                <label htmlFor="with_child"></label>
                <p>아이와 함께 보내는 일정입니다.</p>
            </div>
            <div className='button_box'>
                <button onClick={() => setShow(false)} className='nope'>닫기</button>
                <button className='yes' onClick={() => { AddToday() }}>저장하기</button>
            </div>
        </div>
    )
}

export default Add_Footer