import React, { useState } from 'react'
import CareCenter_list from '../carecenter/CareCenter_list';
import Map_All from '../Map_All';

const Place_kidscafe = () => {
    const [search, setSearch] = useState('')

    return (
        <div className='carecenter_wrap'>
            <CareCenter_list setSearch={setSearch} search={search} />
            <Map_All search={search} />
        </div>
    )
}

export default Place_kidscafe