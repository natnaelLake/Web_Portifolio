import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import UserContainer from './Components/User/Pages/UserContainer'
import ManageAdmin from './Components/Admin/Pages/ManageAdmin'
import AddProfile from './Components/Admin/Pages/AddProfile'
import UpdateProfile from './Components/Admin/Pages/UpdateProfile'
import EditResume from './Components/Admin/Pages/EditResume'
import Logout from './Components/Admin/Pages/Logout'

export default function Routers() {
  return (
    <Router>
        <Routes>
            <Route path='/' element = {<UserContainer/>}/>
            <Route   path = '/admin' element = {<ManageAdmin/>}/>
            <Route   path = '/addProfile' element = {<AddProfile/>}/>
            <Route   path = '/editProfile' element = {<UpdateProfile/>}/>
            <Route   path = '/editResume' element = {<EditResume/>}/>
            <Route   path = '/logout' element = {<Logout/>}/>

        </Routes>
    </Router>
  )
}
