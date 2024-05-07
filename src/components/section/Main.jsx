import React, { useEffect } from 'react'
import Footer from './Footer'
import Section01 from './Main/Section01'
import Section04 from './Main/Section04'
import Section03 from './Main/Section03'
import Section02 from './Main/Section02'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Main = () => {
    const user = useSelector((state => state.user))

    useEffect(() => {
        axios.get('/outdoor-facility/list')
            .then((res) => {
                console.log(res)
            })
    }, [])

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