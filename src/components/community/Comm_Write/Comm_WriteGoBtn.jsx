import React from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../../../assets/img/goingwritebtn.svg'

const Comm_WriteGoBtn = () => {
    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/communitywrite')
    }

    return (
        <div id='going_write'>
            <button onClick={() => { handelClick() }}>
                <img src={Btn} alt="" />
            </button>
        </div>
    )
}

export default Comm_WriteGoBtn