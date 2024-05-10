import React, { useEffect } from 'react'
import Footer from './Footer'
import Section01 from './Main/Section01'
import Section04 from './Main/Section04'
import Section03 from './Main/Section03'
import Section02 from './Main/Section02'
import axios from 'axios'
import { useSelector } from 'react-redux';

const Main = () => {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (user.accessToken !== '') {
            axios.get(`${PROXY}/members/me`)
                .then((res) => {
                    console.log(res.data)
                })

        } else {
        }
    })

    return (
        <>
            <div className='main_page'>
                <Section01 />
                <Section02 />
                <Section03 />
                <Section04 />
            </div>
            <Footer />
        </>
    )
}

export default Main