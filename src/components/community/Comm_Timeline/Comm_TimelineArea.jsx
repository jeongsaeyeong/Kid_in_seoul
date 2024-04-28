import React from 'react'
import Comm_TimelineProfile from './Comm_TimelineProfile'
import Comm_TImelineTime from './Comm_TImelineTime'

const Comm_Timeline = () => {

    return (
        <div className='comm_timeline'>
            <Comm_TimelineProfile />
            <Comm_TImelineTime />
        </div>
    )
}

export default Comm_Timeline