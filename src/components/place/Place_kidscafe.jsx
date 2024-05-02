import React, { useEffect, useState } from 'react'
import CareCenter_list from '../carecenter/CareCenter_list';
import Map_All from '../Map_All';

const Place_kidscafe = () => {

    return (
        <div className='carecenter_wrap'>
            <CareCenter_list />
            <Map_All />
        </div>
    )
}

export default Place_kidscafe