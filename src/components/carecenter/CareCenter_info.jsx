import React, { useEffect, useState } from 'react'
import Address from '../../assets/img/address.svg'
import Phone from '../../assets/img/phonenumber.svg'
import Pax from '../../assets/img/keyline.svg'
import Link from '../../assets/img/link.svg'
import Hart from '../../assets/img/hart.svg'
import HartFull from '../../assets/img/hart_full.svg'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const CareCenter_info = ({ select, Add }) => {
    const PROXY = process.env.REACT_APP_SERVER_URL

    const user = useSelector((state => state.user))
    const [bookMark, setBookMark] = useState(false)
    const params = useParams()

    const AddBookMark = () => {
        setBookMark(!bookMark);

        if (!bookMark) {
            axios.post(`${PROXY}/members/preferred-facility/${select.id}`)
                .then((res) => {
                    console.log(res.status)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            axios.delete(`${PROXY}/members/preferred-facility/${select.id}`)
                .then((res) => {
                    console.log(res.status)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    useEffect(() => {
        setBookMark(false)
        console.log(select)
    }, [select])

    return (
        <>
            <div className='careCenter_info'>
                {params.art !== ':festival' ? (
                    <>
                        <div className="header">
                            <h2>{select.name}</h2>
                            <p>{select.type}</p>
                        </div>
                        <div className='main'>
                            <div className="address">
                                <img src={Address} alt="" />
                                <p>{select.address}</p>
                            </div>
                            <div className="phonenumber">
                                <img src={Phone} alt="" />
                                <p>{select.phoneNum}</p>
                            </div>
                            <div className="pax">
                                <img src={Pax} alt="" />
                                <p>{select.faxNum}</p>
                            </div>
                            <div className="link">
                                <img src={Link} alt="" />
                                <p></p>
                            </div>
                        </div>
                        <div className="footer">
                            <div>
                                <h4>통학차랑</h4>
                                <p>미운영</p>
                            </div>
                            <div>
                                <h4>제공서비스</h4>
                                <p>{select.feature}</p>
                            </div>
                            <div>
                                <h4>정원</h4>
                                <p>{select.usageCapacity}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="header">
                            <h2>{select.eventName}</h2>
                            <p>{select.content}</p>
                        </div>
                        <div className='main'>
                            <div className="address">
                                <img src={Address} alt="" />
                                <p>{select.place}</p>
                            </div>
                            <div className="phonenumber">
                                <img src={Phone} alt="" />
                                <p>{select.startDate} ~ {select.endDate}</p>
                            </div>
                        </div>
                    </>
                )}


                {Add && user.accessToken !== '' ? (
                    <div className='likebtn'>
                        <button onClick={() => { AddBookMark() }}>
                            {bookMark ? (
                                <img src={HartFull} alt="" />
                            ) : (
                                <img src={Hart} alt="" />
                            )}
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}

export default CareCenter_info