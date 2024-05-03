import React, { useState } from 'react'
import CareCenter_list from './CareCenter_list';
import Map_All from '../Map_All';
import CareCenter_kind from './CareCenter_kind';

const CareCenter = () => {
    const [filter, setFilter] = useState(true)
    const [search, setSearch] = useState('')

    return (
        <div className='carecenter_wrap'>
            <CareCenter_list  setSearch={setSearch} search={search}/>
            <Map_All search={search}/>
            <CareCenter_kind setFilter={setFilter} filter={filter}/>
        </div>
    )
}

export default CareCenter