import React from "react";
import logo from "../../../assets/Profile Image.jpeg";

import { Logo, NavBar, NavContianer, Navs, Text } from "../Styles/Header.style";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const user = false;
  const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/login')
  }
  return (
    <NavContianer>
      <NavBar className="menu-bar">
        {user === true ? <Logo src={logo} alt="Addis Software" />: <Text>Web Portfolio</Text> }
        <Navs onClick={handleLogin}>Login</Navs>
      </NavBar>
    </NavContianer>
  );
}
