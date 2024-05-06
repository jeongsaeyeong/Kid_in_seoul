import React, { useState } from 'react'
import CareCenter_list from '../carecenter/CareCenter_list';
import Map_All from '../Map_All';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Place_art = () => {
    const [search, setSearch] = useState('')
    const user = useSelector((state => state.user))

    axios.get('/art-gallery/list')
        .then((res) => {
            console.log(res)
        })

    return (
        <div className='carecenter_wrap'>
            <CareCenter_list setSearch={setSearch} search={search} />
            <Map_All search={search} />
        </div>
    )
}

export default Place_art 