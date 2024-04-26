import React, { useState } from 'react'
import Comm_no from './Comm_no'
import Comm_Join from './Comm_Join';

const Coummunity = () => {
    const [have, setHave] = useState(false);
    const [click, setClick] = useState(false);

    return (
        <>
            {have ? (
                <div></div>
            ) : (
                <>
                    {click ? (
                        <Comm_Join />
                    ) : (
                        <Comm_no setClick={setClick} />
                    )}
                </>
            )}
        </>
    )
}

export default Coummunity