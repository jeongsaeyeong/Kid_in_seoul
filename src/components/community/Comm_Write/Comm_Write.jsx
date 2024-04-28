import React, { useState } from 'react'
import Comm_WriteA from './Comm_WriteA';
import Comm_Cancel from './Comm_Cancel';

const Comm_Write = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='comm_write'>
            <Comm_WriteA setShow={setShow}/>
            {show ? (
                <>
                    <Comm_Cancel setShow={setShow}/>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Comm_Write