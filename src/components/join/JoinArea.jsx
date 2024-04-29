import React, { useState } from 'react'
import Join_Info from './Join_Info'
import Join_pickarea from './Join_pickarea'

const JoinArea = () => {
    const [pass, setPass] = useState(false)

    return (
        <div className='join_wrap'>
            {pass ? (
                <Join_pickarea />
            ) : (
                <Join_Info setPass={setPass}/>
            )}
        </div>
    )
}

export default JoinArea