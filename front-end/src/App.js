
import React from "react";
import "./App.css";
import Routers from "./Routers";
import { BodyContainer, MainContainer } from "./Components/Admin/Styles/Container.styled";
import Header from "./Components/Admin/Pages/Header";
import SideBar from "./Components/Admin/Pages/SideBar";


function App() {
  
  return (
    <MainContainer>
        <Header/>
        <BodyContainer>
            <SideBar/>
            <Routers/>
        </BodyContainer>
    </MainContainer>
  );
}

export default App;
