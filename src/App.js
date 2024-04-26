import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'
import Calender from './components/calendar/Calender'
import Header from './components/section/Header'
import Coummunity from './components/community/Coummunity'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/calender' element={<Calender />} />
                <Route path='/community' element={<Coummunity />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App