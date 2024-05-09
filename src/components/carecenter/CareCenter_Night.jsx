import React, { useEffect, useState } from 'react'
import CareCenter_kind from './CareCenter_kind';
import CareCenter_list from './CareCenter_list';
import Map_All from '../Map_All';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';

const CareCenter_Night = () => {
    const [filter, setFilter] = useState(true)
    const [search, setSearch] = useState('')
    const [address, setAddress] = useState('')
    const [type, setType] = useState('')
    const [select, setSelect] = useState([])
    const [Add, setAdd] = useState(false)
    const user = useSelector((state => state.user))
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user.accessToken !== '') {
            setLoading(true)
        } 
    }, [user.accessToken])

    return (
        <>
            {loading ? (
                <div className='carecenter_wrap'>
                    <CareCenter_list
                        setSearch={setSearch} search={search} setAddress={setAddress}
                        type={type} setSelect={setSelect} setAdd={setAdd} loading={loading} />
                    <Map_All search={search} address={address} select={select} Add={Add} />
                    <CareCenter_kind setFilter={setFilter} filter={filter} setType={setType} />
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default CareCenter_Night