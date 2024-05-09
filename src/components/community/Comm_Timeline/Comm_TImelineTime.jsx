import React, { useState } from 'react'
import Comm_TimeSortLike from './Comm_TimeSortLike'
import Comm_TimeSortTime from './Comm_TimeSortTime'

const Comm_TImelineTime = ({ userInfo, setLoading }) => {
    const regionId = userInfo.regionId;

    return (
        <div className="timeline">
            <Comm_TimeSortLike regionId={regionId} setLoading={setLoading}/>
            <Comm_TimeSortTime regionId={regionId} setLoading={setLoading}/>
        </div>
    )
}

export default Comm_TImelineTime