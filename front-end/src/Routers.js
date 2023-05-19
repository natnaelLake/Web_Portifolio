import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import UserContainer from './Components/User/Pages/UserContainer'
// import ManageAdmin from './Components/Admin/Pages/ManageAdmin'
import AddProfile from './Components/Admin/Pages/AddProfile'
import Logout from './Components/Admin/Pages/Logout'
import DashBoard from './Components/Admin/Pages/DashBoard'
import ResumeControl from './Components/Admin/Pages/ResumeControl'
import GetProfile from './Components/Admin/Pages/GetProfile'

export default function Routers() {
  return (
    <Router>
        <Routes>
            <Route path='/' element = {<UserContainer/>}/>
            <Route   path = '/admin' element = {<DashBoard/>}/>
            <Route   path = '/addProfile' element = {<AddProfile/>}/>
            <Route   path = '/editProfile' element = {<GetProfile/>}/>
            <Route   path = '/editResume' element = {<ResumeControl/>}/>
            <Route   path = '/logout' element = {<Logout/>}/>
            <Route   path = '/dashboard' element = {<DashBoard/>}/>
        </Routes>
    </Router>
  )
}
