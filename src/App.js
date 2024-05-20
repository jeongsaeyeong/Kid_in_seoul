import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './components/section/Main'
import Calender from './components/calendar/Calender'
import Header from './components/section/Header'
import Coummunity from './components/community/Coummunity'
import Calender_BothChild from './components/calendar/Calender_BothChild'
import Comm_Article from './components/community/Comm_Article/Comm_Article'
import Comm_Write from './components/community/Comm_Write/Comm_Write'
import Login from './components/login/Login'
import CareCenter from './components/carecenter/CareCenter'
import CareCenter_Night from './components/carecenter/CareCenter_Night'
import Place_art from './components/place/Place_art'
import Place_library from './components/place/Place_library'
import Place_park from './components/place/Place_park'
import Place_kidscafe from './components/place/Place_kidscafe'
import Calender_Date from './components/calendar/Calender_date/Calender_Date'
import Comm_Friend from './components/community/Comm_frined/Comm_Friend'
import Join_pickarea from './components/join/Join_pickarea'
import JoinArea from './components/join/JoinArea'
import Mypage from './components/mypage/Mypage'
import Mypage_area from './components/mypage/Mypage_area'
import Mypage_care from './components/mypage/Mypage_care'
import Mypage_Info from './components/mypage/Mypage_Info'
import Mypage_mark from './components/mypage/Mypage_mark'
import Comm_LikePate from './components/community/Comm_Timeline/Comm_LikePate'
import Comm_TimePage from './components/community/Comm_Timeline/Comm_TimePage'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { loginUser } from './Store/userSlice'
import Place_festival from './components/place/Place_festival'

const App = () => {
    const PROXY = process.env.REACT_APP_SERVER_URL
    const dispatch = useDispatch()

    useEffect(() => {
        const Id = localStorage.getItem('id')
        const Password = localStorage.getItem('password')

        console.log('Id', Id)
        console.log('passwrod', Password)

        if (Id !== null && Password !== null) {
            axios.post(`${PROXY}/members/login`, {
                "userId": Id,
                "password": Password
            })
                .then((res) => {
                    if (res.data.accessToken !== '') {
                        const accessToken = res.data.accessToken;
                        dispatch((loginUser(res.data)))

                        axios.defaults.headers.common[
                            "Authorization"
                        ] = `${accessToken}`;

                        console.log(res.data)
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, []);

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
                <Route path='/place/:festival' element={<Place_festival />} />

                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<JoinArea />} />
                <Route path='/join_area' element={<Join_pickarea />} />

                <Route path='/calender' element={<Calender />} />
                <Route path='/calender/:dateId' element={<Calender_Date />} />
                <Route path='/calender_bothchild' element={<Calender_BothChild />} />

                <Route path='/community' element={<Coummunity />} />
                <Route path='/community_like' element={<Comm_LikePate />} />
                <Route path='/community_time' element={<Comm_TimePage />} />
                <Route path='/communitywrite' element={<Comm_Write />} />
                <Route path='/community_friend' element={<Comm_Friend />} />
                <Route path='/community/:boardId' element={<Comm_Article />} />

                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage_area' element={<Mypage_area />} />
                <Route path='/mypage_care' element={<Mypage_care />} />
                <Route path='/mypage_info' element={<Mypage_Info />} />
                <Route path='/mypage/:mark' element={<Mypage_mark />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App