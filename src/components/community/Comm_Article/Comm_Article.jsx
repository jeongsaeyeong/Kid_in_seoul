import React from 'react'
import Comm_TimelineProfile from '../Comm_Timeline/Comm_TimelineProfile'
import Comm_ArticleA from './Comm_ArticleA'
import Comm_AricleComment from './Comm_AricleComment'

const Comm_Board = () => {
    return (
        <div className='comm_timeline comm_board'>
            <Comm_TimelineProfile />
            <div className='comm_Article'>
                <Comm_ArticleA />
                <Comm_AricleComment />
            </div>
        </div>
    )
}

export default Comm_Board