import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "./Redux/Toolkit/ProfileSlice";
import { GET_DATA } from "./Redux/Saga/Types/ActionTypes";
import GetProfile from "./Components/Pages/GetProfile";
import AddProfile from "./Components/Pages/AddProfile";
import UpdateProfile from "./Components/Pages/UpdateProfile";
import DeleteProfile from "./Components/Pages/DeleteProfile";
const actionVal = () => "Profile/getProfile";

function App() {
  
  return (
    <>
      <GetProfile />
      <AddProfile />
      <DeleteProfile />
      <UpdateProfile />
    </>
  );
}

export default App;
