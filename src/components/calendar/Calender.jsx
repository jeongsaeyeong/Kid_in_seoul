import React from 'react'
import Calender_Month from './Calender_Month'
import { useSelector } from 'react-redux'
import NoLogin from '../NoLogin'

const Calender = () => {
    const user = useSelector((state=> state.user))
    return (
        <>
            {user.accessToken !== '' ? (
                <>
                    <Calender_Month />
                </>
            ) : (
                <NoLogin />
            )}
        </>
    )
}

export default Calender