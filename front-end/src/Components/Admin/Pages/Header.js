import React from "react";
import logo from "../../../assets/Profile Image.jpeg";

import { Logo, NavBar, NavContianer, Navs, Text } from "../Styles/Header.style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const user = useSelector(state=>state.profile.user);
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/login')
  }
  return (
    <NavContianer>
      <NavBar className="menu-bar">
        {user !== null ? <Logo src={logo} alt="Web Logo" />: <Text>Web Portfolio</Text> }
        <Navs onClick={handleLogin}>Login</Navs>
      </NavBar>
    </NavContianer>
  );
}
