import React, { useState } from 'react'
import Map_All from '../Map_All';
import CareCenter_list from '../carecenter/CareCenter_list';

const Place_park = () => {
    const [search, setSearch] = useState('')
    const [address, setAddress] = useState('')
    const [select, setSelect] = useState([])
    const [Add, setAdd] = useState(false)

    return (
        <div className='carecenter_wrap'>
            <CareCenter_list 
            setSearch={setSearch} search={search} setAddress={setAddress} 
            setSelect={setSelect} setAdd={setAdd}/>
            <Map_All search={search} address={address} select={select} Add={Add}/>
        </div>
    )
}

export default Place_park  