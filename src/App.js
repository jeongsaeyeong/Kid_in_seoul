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
import Join_Info from './components/join/Join_Info'
import CareCenter from './components/carecenter/CareCenter'
import CareCenter_Night from './components/carecenter/CareCenter_Night'
import Place_art from './components/place/Place_art'
import Place_library from './components/place/Place_library'
import Place_park from './components/place/Place_park'
import Place_kidscafe from './components/place/Place_kidscafe'
import Calender_Date from './components/calendar/Calender_date/Calender_Date'
import Comm_Friend from './components/community/Comm_frined/Comm_Friend'
import Join_pickarea from './components/join/Join_pickarea'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />

                <Route path='/carecenter' element={<CareCenter />} />
                <Route path='/carecenter/:night' element={<CareCenter_Night />} />

                <Route path='/place/:art' element={<Place_art />} />
                <Route path='/place/:library' element={<Place_library />} />
                <Route path='/place/:park' element={<Place_park />} />
                <Route path='/place/:kidscafe' element={<Place_kidscafe />} />

                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join_Info />} />
                <Route path='/join_area' element={<Join_pickarea />} />

                <Route path='/calender' element={<Calender />} />
                <Route path='/calender/:dateId' element={<Calender_Date />} />
                <Route path='/calender_bothchild' element={<Calender_BothChild />} />

                <Route path='/community' element={<Coummunity />} />
                <Route path='/communitywrite' element={<Comm_Write />} />
                <Route path='/community_friend' element={<Comm_Friend />} />
                <Route path='/community/:boardId' element={<Comm_Article />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App