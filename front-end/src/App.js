import React from "react";
import "./App.css";
import Routers from "./Routers";
import {
  BodyContainer,
  MainContainer,
  RouteControl,
} from "./Components/Admin/Styles/Container.styled";
import Header from "./Components/Admin/Pages/Header";
import SideBar from "./Components/Admin/Pages/SideBar";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state=>state.profile.user)
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        {user !== null ? (<SideBar />):null}
        <RouteControl>
          <Routers />
        </RouteControl>
      </BodyContainer>
    </MainContainer>
  );
}

export default App;
