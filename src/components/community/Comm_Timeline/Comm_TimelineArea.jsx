import React, { useEffect, useState } from 'react'
import Comm_TimelineProfile from './Comm_TimelineProfile'
import Comm_TImelineTime from './Comm_TImelineTime'
import axios from 'axios'
import { useSelector } from 'react-redux'
import NoLogin from '../../NoLogin'

const Comm_Timeline = () => {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

    const user = useSelector((state => state.user))
    const [userInfo, setUserInfo] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user.accessToken !== '') {
            axios.get(`${PROXY}/members/me`)
                .then((res) => {
                    setUserInfo(res.data)
                    setLoading(true)
                })

                .catch((err) => {
                    console.log(err)
                    setLoading(false)
                })
        } 
    }, [user])

    return (
        <>
            {loading ? (
                <div className='comm_timeline'>
                    <Comm_TimelineProfile userInfo={userInfo} />
                    <Comm_TImelineTime userInfo={userInfo} setLoading={setLoading} />
                </div>

            ) : (
                <NoLogin/>
            )}
        </>
    )
}

export default Comm_Timeline