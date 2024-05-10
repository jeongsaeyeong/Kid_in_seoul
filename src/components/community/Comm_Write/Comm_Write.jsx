import React, { useState } from 'react'
import Comm_WriteA from './Comm_WriteA';
import Comm_Cancel from './Comm_Cancel';
import { useSelector } from 'react-redux';
import NoLogin from '../../NoLogin';

const Comm_Write = () => {
    const [show, setShow] = useState(false);
    const user = useSelector(state => (state.user))

    return (
        <>
            {user.accessToken !== '' ? (
                <>
                    {
                        <div className='comm_write'>
                            <Comm_WriteA setShow={setShow} />
                            {show ? (
                                <>
                                    <Comm_Cancel setShow={setShow} />
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                    }
                </>
            ) : (
                <NoLogin />
            )}
        </>
    )
}

export default Comm_Write