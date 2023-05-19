import React from "react";
import { NavBar, NavContianer, Navs } from "../Styles/Header.style";
export default function Header() {
  return (
    <NavContianer>
      <NavBar className="menu-bar">
        <Navs>Watch Now</Navs>
        <Navs>Movies</Navs>
        <Navs>TV Shows</Navs>
        <Navs>Sports</Navs>
        <Navs>Kids</Navs>
        <Navs>Library</Navs>
      </NavBar>
    </NavContianer>
  );
}
