import React from 'react'
import { useNavigate } from 'react-router-dom';

const Comm_Cancel = ({setShow}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
      }

    return (
        <div className='cancel_pop'>
            <div>
                <h3>등록 취소하기</h3>
                <p>
                    등록 중인 글을 취소하시겠습니까? <br />
                    취소한 글은 저장되지 않습니다.
                </p>
                <div>
                    <button className='cancel' onClick={() => {handleClick()}}>취소하기</button>
                    <button className='not_cancel' onClick={() => {setShow(false)}}>계속하기</button>
                </div>
            </div>
        </div>
    )
}

export default Comm_Cancel