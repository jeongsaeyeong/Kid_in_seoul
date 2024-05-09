import React, { useEffect, useState } from 'react'
import Comm_TimelineProfile from './Comm_TimelineProfile'
import Comm_TImelineTime from './Comm_TImelineTime'
import axios from 'axios'
import Loading from '../../Loading'

const Comm_Timeline = () => {
    const [userInfo, setUserInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('/members/me')
            .then((res) => {
                setUserInfo(res.data)
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
                     <Comm_TImelineTime userInfo={userInfo} setLoading={setLoading}/>
                </div>

            ) : (
                <Loading />
            )}
        </>
    )
}

export default Comm_Timeline