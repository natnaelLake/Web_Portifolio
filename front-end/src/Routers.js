import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContainer from "./Components/User/Pages/UserContainer";
// import ManageAdmin from './Components/Admin/Pages/ManageAdmin'
import AddProfile from "./Components/Admin/Pages/AddProfile";
import Logout from "./Components/Admin/Pages/Logout";
import DashBoard from "./Components/Admin/Pages/DashBoard";
import ResumeControl from "./Components/Admin/Pages/ResumeControl";
import GetProfile from "./Components/Admin/Pages/GetProfile";
import Login from "./Components/Admin/Pages/Login";
import Header from "./Components/Admin/Pages/Header";
import { useSelector } from "react-redux";

export default function Routers() {
  const user = useSelector((state)=>state.profile.user)
  return (
    <Routes>
      <Route path="/" element={<UserContainer />} />
      <Route path="/login" element={<Login />} />
      {user !== null ? (
        <>
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/addProfile" element={<AddProfile />} />
          <Route path="/editProfile" element={<GetProfile />} />
          <Route path="/editResume" element={<ResumeControl />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/header" element={<Header />} />
        </>
      ) : null}
    </Routes>
  );
}
