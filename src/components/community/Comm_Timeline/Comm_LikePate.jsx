import React, { useEffect, useState } from 'react'
import Comm_TimelineProfile from './Comm_TimelineProfile'
import axios from 'axios'
import Loading from '../../Loading'
import Comm_TimeSortLike from './Comm_TimeSortLike'

const Comm_LikePate = () => {
    const PROXY =process.env.REACT_APP_SERVER_URL
    const [userInfo, setUserInfo] = useState([])
    const [loading, setLoading] = useState(false)
    const [regionId, setRegionId] = useState('')

    useEffect(() => {
        axios.get(`${PROXY}/members/me`)
            .then((res) => {
                setUserInfo(res.data)
                setRegionId(res.data.regionId)
                setLoading(true)
            })

            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {loading ? (
                <div className='comm_timeline'>
                    <Comm_TimelineProfile userInfo={userInfo} />
                    <div className="timeline">
                        <Comm_TimeSortLike regionId={regionId} setLoading={setLoading}/>
                    </div>
                </div>

            ) : (
                <Loading />
            )}
        </>
    )
}

export default Comm_LikePate