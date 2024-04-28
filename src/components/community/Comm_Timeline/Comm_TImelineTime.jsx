import React, { useState } from 'react'
import Comm_TimeSortLike from './Comm_TimeSortLike'
import Comm_TimeSortTime from './Comm_TimeSortTime'

const Comm_TImelineTime = () => {
    const [show, setShow] = useState('All')

    return (
        <div className="timeline">
            {show == 'All' ? (
                <>
                    <Comm_TimeSortLike setShow={setShow} />
                    <Comm_TimeSortTime setShow={setShow} />
                </>
            ) : (
                <>
                    {show == 'Like' ? (
                        <>
                            <h2>커뮤니티 인기글</h2>
                            <Comm_TimeSortLike />
                        </>
                    ) : (
                        <>
                            <h2>커뮤니티 최신글</h2>
                            <Comm_TimeSortTime />
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default Comm_TImelineTime