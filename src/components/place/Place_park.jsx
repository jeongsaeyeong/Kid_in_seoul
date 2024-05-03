import React, { useState } from 'react'
import Map_All from '../Map_All';
import CareCenter_list from '../carecenter/CareCenter_list';

const Place_park = () => {
    const [search, setSearch] = useState('')

    return (
        <div className='carecenter_wrap'>
            <CareCenter_list setSearch={setSearch} search={search} />
            <Map_All search={search} />
        </div>
    )
}

export default Place_park  