import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./Redux/Toolkit/ProfileSlice";
import { GET_DATA } from "./Redux/Saga/Types/ActionTypes";
import GetProfile from "./Components/Admin/Pages/GetProfile";
import AddProfile from "./Components/Admin/Pages/AddProfile";
import UpdateProfile from "./Components/Admin/Pages/UpdateProfile";
import DeleteProfile from "./Components/Admin/Pages/DeleteProfile";
// import DisplayScreen from "./Components/Admin/Pages/DisplayScreen";
// const actionVal = () => "Profile/getProfile";
import {Container} from './Components/User/Styles/Container.styled'
import Header from "./Components/User/Pages/Header";
import UserDisplayScreen from "./Components/User/Pages/UserDisplayScreen";
import ProfileData from "./Components/User/Pages/ProfileData";
import {Route} from 'react-router-dom'
function App() {
  
  return (
    <Container>
      <Header/>
      <UserDisplayScreen/>
      <ProfileData/>
      {/* <ProfileData/>
      <ProfileData/>
      <ProfileData/>
      <ProfileData/>
      <ProfileData/> */}

    </Container>
  );
}

export default App;
