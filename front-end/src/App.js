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

function App() {
  const user = false
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        {user === true ? (<SideBar />):null}
        <RouteControl>
          <Routers />
        </RouteControl>
      </BodyContainer>
    </MainContainer>
  );
}

export default App;
