import React from 'react'
import Map_All from '../Map_All';
import CareCenter_list from '../carecenter/CareCenter_list';

const Place_park = () => {
    return (
        <div className='carecenter_wrap'>
            <CareCenter_list />
            <Map_All />
        </div>
    )
}

export default Place_park  