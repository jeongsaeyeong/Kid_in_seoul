import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'
import Calender from './components/calendar/Calender'
import Header from './components/section/Header'
import Coummunity from './components/community/Coummunity'
import Calender_BothChild from './components/calendar/Calender_BothChild'
import Comm_Article from './components/community/Comm_Article/Comm_Article'
import Comm_Write from './components/community/Comm_Write/Comm_Write'
import Login from './components/login/Login'
import JoinArea from './components/join/JoinArea'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<JoinArea />} />
                <Route path='/calender' element={<Calender />} />
                <Route path='/calender_bothchild' element={<Calender_BothChild />} />
                <Route path='/community' element={<Coummunity />} />
                <Route path='/communitywrite' element={<Comm_Write />} />
                <Route path='/community/:boardId' element={<Comm_Article />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App