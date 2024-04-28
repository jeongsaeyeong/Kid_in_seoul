import React, { useState } from 'react'
import Comm_no from './Comm_no'
import Comm_Join from './Comm_Join';
import Comm_TimelineArea from './Comm_Timeline/Comm_TimelineArea';

const Coummunity = () => {
    const [have, setHave] = useState(true);
    const [click, setClick] = useState(false);

    return (
        <>
            {have ? (
                <>
                    <Comm_TimelineArea />
                </>
            ) : (
                <>
                    {click ? (
                        <Comm_Join setHave={setHave}/>
                    ) : (
                        <Comm_no setClick={setClick} />
                    )}
                </>
            )}
        </>
    )
}

export default Coummunity